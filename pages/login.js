// import React, {useEffect} from 'react'
// import tw from 'tailwind-styled-components'
// import { useRouter } from 'next/router'
// import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
// import { auth, provider} from '../firebase'

// const Login = () => {

//     const router = useRouter()

//     useEffect(()=>{
//         onAuthStateChanged(auth, user =>{
//             if (user) {
//                 router.push('/')
//             }
//         })
//     })
//   return (
//     <div className='flex flex-col h-screen w-screen bg-gray-200 p-4 '>
//         <img
//           src="/i2.png" // Replace with your logo path
//           alt="Logo"
//           className=" h-20 w-auto object-contain self-start"
//         />
//          <img
//           src="/i1.jpg" // Replace with your logo path
//           alt="Login"
//           className=" w-full object-contain self-start "
//         />
//         <div className="text-5xl pt-4 text-gray-500">
//           Log in to access your account
//         </div>
//         {/* <div className='bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer'>
//             Sign in with Google
//         </div> */}
//         <div
//   className="bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer"
//   onClick={() => signInWithPopup(auth, provider)}
// >
//   Sign in with Google
// </div>

//     </div>
//   )
// }

// export default Login
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
// import { auth, provider } from '../firebase';

// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     // Listen for authentication state changes
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         router.push('/'); // Redirect to home page if user is logged in
//       }
//     });

//     // Cleanup the listener on component unmount
//     return () => unsubscribe();
//   }, [router]);

//   const handleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, provider); // Sign in with Google
//     } catch (error) {
//       console.error('Error signing in with Google:', error);
//       alert('Failed to sign in. Please try again.'); // Show error message
//     }
//   };

//   const handleLogin = () => {
//     // Add your login logic here (e.g., validate email and password)
//     console.log('Email:', email);
//     console.log('Password:', password);

//     // Redirect to the index page
//     router.push('/');
//   };

//   return (
//     <div className="relative h-screen w-screen">
//       {/* Full-Screen Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/i1.jpg')" }} // Replace with your background image path
//       ></div>

//       {/* Logo */}
//       <img
//         src="/i2.png" // Replace with your logo path
//         alt="Logo"
//         className="absolute top-4 left-4 h-20 w-auto z-10" // Position logo in the top-left corner
//       />

//       {/* Sign-In Box */}
//       <div className="absolute top-4 right-4 bg-white p-8 rounded-lg shadow-lg z-10 w-96">
//         <h2 className="text-2xl font-bold mb-4">Sign in</h2>
//         <p className="text-gray-600 mb-6">to continue to Find My Place</p>

//         {/* Google Sign-In Button */}
//         <button
//           className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors mb-4 cursor-pointer"
//           onClick={handleSignIn}
//         >
//           <img
//             src="https://www.google.com/favicon.ico" // Google icon
//             alt="Google"
//             className="w-5 h-5 mr-2"
//           />
//           Continue with Google
//         </button>

//         {/* Divider */}
//         <div className="flex items-center mb-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500">or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Password Input */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         {/* Login Button */}
//         <button
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4 cursor-pointer"
//           onClick={handleLogin}
//         >
//           Login
//         </button>

//         {/* Sign-Up Link */}
//         <p className="text-center text-gray-600">
//           No account? <span className="text-blue-600 cursor-pointer">Sign up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/'); // Redirect to home page if user is logged in
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [router]);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider); // Sign in with Google
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('Failed to sign in. Please try again.'); // Show error message
    }
  };

  const handleLogin = () => {
    // Add your login logic here (e.g., validate email and password)
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to the index page
    router.push('/');
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Full-Screen Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/i1.jpg')" }} // Replace with your background image path
      ></div>

      {/* Logo */}
      <img
        src="/i2.png" // Replace with your logo path
        alt="Logo"
        className="absolute top-4 left-4 h-20 w-auto z-10" // Position logo in the top-left corner
      />

      {/* Sign-In Box */}
      <div className="absolute top-40 right-4 bg-white p-8 rounded-lg shadow-lg z-10 w-96 max-w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Sign in</h2>
        <p className="text-gray-600 mb-6">to continue explore GoTogether</p>

        {/* Google Sign-In Button */}
        <button
          className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors mb-4 cursor-pointer"
          onClick={handleSignIn}
        >
          <img
            src="https://www.google.com/favicon.ico" // Google icon
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Login Button */}
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4 cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Sign-Up Link */}
        <p className="text-center text-gray-600">
          No account? <span className="text-blue-600 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;