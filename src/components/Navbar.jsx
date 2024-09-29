import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style['navbar']}>
            <div className={style.logo}>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo"/>
                 <h1 className={style.title}>BoringTitle</h1>
            </div>
            
            <ul className={style.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className={style.account}>
                <div className={style['hamburger']}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className={style['user-account']}>
                    <a href="#"><i className="fa-solid fa-user"></i> Sign In</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;