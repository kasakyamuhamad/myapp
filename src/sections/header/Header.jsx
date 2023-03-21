import data from './data'
import './header.css'

const Header =() => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
        <img src={require('../../assets/header.jpg')} alt='logo' title='HeaderImage' />
        </div>
        <h3>Ramulah Naks</h3>
        <p>
          Let's help you achieve your dream of owning  a website for your business
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My Work</a>
        </div>
        <div className='header__socials'>
          {
          data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
      </header>
  )
}

export default Header