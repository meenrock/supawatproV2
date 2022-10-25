import '../styles/globals.css'
// import '../styles/wavy.module.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import '../components/header/Header'
import WavyBg from '../components/background/wavyBg'
import Header from '../components/header/Header'

const MyApp=({Component, pageProps})=> {
  return(<>
    <Component {...pageProps}/>
  </>)
}

export default MyApp
