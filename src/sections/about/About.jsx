
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
          <img src={require('../../assets/about1.jpeg')} alt='AboutImage' title='HeaderImage' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
            <p>
              Building projects that reach the satisfaction of my clients has been always my passion.
              Being in web development industry for over 3 years and serving more than 30 happy clients worldwide,
              motivates me to do more!
            </p>
            <p>
              Hi, my name is Muhamad from Kampala, Uganda. I'm a full-stack web developer with
              a Bachelors degree in Computer Science. My top priority is to get your business online right away,
              giving you a fluent and responsive website to operate smoothly. Get in touch today withj details of
              your project and let's get started! Chect out my resume!
            </p>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default About