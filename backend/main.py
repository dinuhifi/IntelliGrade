from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal
from models import Student, Teacher
from auth import hash_password, verify_password, create_access_token
from pydantic import BaseModel


Base.metadata.create_all(bind=engine)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class UserAuth(BaseModel):
    username: str
    password: str
    user_type: str

@app.post("/signup")
def signup(user: UserAuth, db: Session = Depends(get_db)):
    if user.user_type == "student":
        existing = db.query(Student).filter(Student.roll_no == user.username).first()
        if existing:
            raise HTTPException(status_code=400, detail="Roll No already registered")
        new_student = Student(roll_no=user.username, hashed_password=hash_password(user.password))
        db.add(new_student)
    elif user.user_type == "teacher":
        existing = db.query(Teacher).filter(Teacher.teacher_id == user.username).first()
        if existing:
            raise HTTPException(status_code=400, detail="Teacher ID already registered")
        new_teacher = Teacher(teacher_id=user.username, hashed_password=hash_password(user.password))
        db.add(new_teacher)
    else:
        raise HTTPException(status_code=400, detail="Invalid user type")
    
    db.commit()
    return {"message": f"{user.user_type.capitalize()} account created successfully"}

@app.post("/login")
def login(user: UserAuth, db: Session = Depends(get_db)):
    if user.user_type == "student":
        db_user = db.query(Student).filter(Student.roll_no == user.username).first()
    elif user.user_type == "teacher":
        db_user = db.query(Teacher).filter(Teacher.teacher_id == user.username).first()
    else:
        raise HTTPException(status_code=400, detail="Invalid user type")

    if not db_user or not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(data={"sub": user.username, "user_type": user.user_type})
    return {"access_token": token, "token_type": "bearer"}
