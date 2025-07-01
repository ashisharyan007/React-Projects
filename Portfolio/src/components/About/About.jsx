import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.png'

const About = () => {
  return (
    <section className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32' id='about'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>

          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>Hi, I am</h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Ashish Aryan</h2>

          {/* Skills heading */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245eb] leading-tight'>
            <span className='text-white'>
              I am a </span>
            <Typewriter
              words={[
                'FullStack Developer',
                'Web Developer',
                'Frontend Developer',
                'Coder',
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          {/* About Me */}

          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed '>
            I am a fresher with a strong interest in frontend development. I enjoy building interactive user interfaces that offer a smooth experience. Currently, I am learning backend technologies to grow as a full-stack developer. My goal is to create dynamic, responsive web applications that blend design and functionality effectively.
          </p>

          {/* Resume CV*/}
          <a href="https://drive.google.com/file/d/1dHZLkoqxiCSCfHYdjNPr9cySWQyjzJ7_/view?usp=sharing" target='_blank' rel='noopener noreferrer' className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
            }}
          >DOWNLOAD CV
          </a>

        </div>


        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt className='w-64 h-64 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem]  4k:w-[36rem] 4k:h-[36rem] border-2 border-purple-700 rounded-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}>

            <img src={profileImage} alt="Ashish Aryan" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]' />

          </Tilt>

        </div>


      </div>
    </section>
  )
}

export default About