const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id='about'>
      <div className="flex flex-col items-center my-20">
        <h1 className="text-6xl lg:text-[6rem] p-2 font-bold">
          About Us
        </h1>
        <br></br>
        <p className="text-lg text-center px-4 lg:px-0 max-w-2xl">
          At IntelliGrade, we believe that grading descriptive answers should be efficient, accurate, and fair. 
          Traditional grading methods can be time-consuming and prone to inconsistencies, which is why we built
          IntelliGrade—an advanced AI-driven platform that automates the evaluation of descriptive answers while
          ensuring precision, transparency, and adaptability.
          <br></br>
          <br></br>
          Our AI model understands context, relevance, and depth in students’ responses, providing instant scoring 
          and meaningful feedback. This empowers educators to focus more on teaching and students to receive clear 
          insights for improvement.
        </p>
        <br></br>
        <h4 className="text-2xl lg:text-[2rem] p-2 font-bold">Why Choose Us?</h4>
        <br></br>
        <p className="text-lg text-center px-4 lg:px-0 max-w-2xl">
          IntelliGrade is not just another grading tool; it's a revolution in educational assessment. 
          With our platform, you can expect:
          <ul className="list-none list-inside text-center mt-4">
            <li>✅ <strong>AI-Powered Accuracy:</strong> Evaluates answers using intelligent algorithms based on predefined rubrics.</li>
            <li>✅ <strong>Time-Saving for Educators:</strong> Automates grading, allowing teachers to focus on teaching.</li>
            <li>✅ <strong>Actionable Feedback:</strong> Provides students with detailed insights for improvement.</li>
            <li>✅ <strong>Customizable Rubrics:</strong> Enables teachers to define and modify grading criteria as needed.</li>
            <li>✅ <strong>Secure & Scalable:</strong> Handles large volumes of answer scripts with high security and efficiency.</li>
          </ul>
        </p>
      </div>
    </section>
  )
}

export default About