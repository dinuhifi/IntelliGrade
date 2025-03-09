import hero_img from '../assets/hero_section_img.jpeg'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id='hero'>
        <div className="flex flex-col items-center my-20">
            <h1 className="text-6xl lg:text-[6rem] p-2 font-bold">IntelliGrade</h1>
            <p className="lg:mt-1 text-sm mb-4 font-semibold tracking-tighter">Let AI Do the Grading, You Do the Teaching.</p>
            <img src={hero_img} className='w-[120vh] h-[80vh] object-cover rounded-2xl p-2' alt='Hero'></img>
        </div>
    </section>
  )
}

export default Hero