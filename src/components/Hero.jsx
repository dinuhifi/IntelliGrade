import hero_img from '../assets/hero_section_img.jpeg'

const Hero = () => {
  return (
    <section className="max-w mx-auto border-b-2" id='hero'>
        <div className="my-20 ml-8">
            <div className="text-center mb-8">
                <h1 className="text-6xl lg:text-[6rem] p-2 font-bold">IntelliGrade</h1>
                <p className="lg:mt-3 text-lg ml-6 mb-6 font-semibold text-center tracking-tighter">Let AI Do the Grading, You Do the Teaching.</p>
            </div>
            <div className="flex items-center gap-8">
                <img src={hero_img} className='w-[111vh] h-[80vh] object-cover rounded-2xl' alt='Hero'></img>
                <div className="flex-1">
                    <h2 className="text-7xl font-bold leading-tight mb-4">Reimagine grading with intelligent automation.</h2>
                    <p className="text-2xl font-medium leading-relaxed">Evaluate handwritten or typed answers with AI precision and insight.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero