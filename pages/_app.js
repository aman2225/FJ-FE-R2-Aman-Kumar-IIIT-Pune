import "../styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';


function MyApp({ Component, pageProps }) {
  // Lift the `amount` state to MyApp
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-white ">
   

    <Component {...pageProps} amount={amount} setAmount={setAmount} />
    </div>
  );
}

export default MyApp;
