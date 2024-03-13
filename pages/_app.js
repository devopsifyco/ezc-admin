import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  console.log('component', Component);
  return (
    <>
      <NextNProgress
        color="#216C53"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
