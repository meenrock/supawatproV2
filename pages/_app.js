import '../styles/globals.css'
// import '../styles/wavy.module.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import '../components/header/Header'
import Navbar from '../components/header/Navbar'

const MyApp=({Component, pageProps})=> {
  return(<>
    <Component {...pageProps}>
    <div className="header">
            <div className="logo">Supawat Suntornlimsiri</div>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <a href='/' className="active">Home</a>
                    </li>
                    <li>
                        <a href='/' className="active">Contact</a>
                    </li>
                    <li>
                        <a href='/' className="active">Resume</a>
                    </li>
                    <li>
                        <a href='/' className="active">Documentation</a>
                    </li>
                </ul>
            </nav>
        </div>
    </Component>
  </>)
}

export default MyApp
