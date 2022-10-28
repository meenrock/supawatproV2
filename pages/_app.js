import '../styles/globals.css'
// import '../styles/wavy.module.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import '../components/header/Header'

const MyApp=({Component, pageProps})=> {
  return(<>
        <Component {...pageProps} />
  </>)
}

export default MyApp
