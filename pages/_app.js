import "../styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  // Lift the `amount` state to MyApp
  const [amount, setAmount] = useState(0);

  return (
    <ThemeProvider attribute="class">

    <Component {...pageProps} amount={amount} setAmount={setAmount} />
    </ThemeProvider>
  );
}

export default MyApp;
