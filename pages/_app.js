import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* final-result streamid in pink pather*/}

      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SMYSPQQP22"
      ></Script>
      <Script id="google-analtyics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SMYSPQQP22');
  `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
