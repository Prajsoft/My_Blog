import "../styles/globals.css";
import NavBar from "/components/NavBar";
import Footers from "../components/Footers";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <NavBar />
        <Component {...pageProps} />
        <Footers />
      </div>
    </>
  );
}

export default MyApp;
