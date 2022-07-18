import Navbar from '../components/Navbar';
import { AuthContextProvider } from '../store/AuthContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <AuthContextProvider>
      <Navbar/>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp
