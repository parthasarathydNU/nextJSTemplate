import '../styles/global.css';

export default function App({ Component, pageProps }) {
    console.log("In the _app component");
    return <Component {...pageProps} />;
  }