import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/header/Header'

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
  </>
}

export default MyApp
