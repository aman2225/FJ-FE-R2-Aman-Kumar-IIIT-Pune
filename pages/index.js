// import { useEffect } from "react";
// import Image from "next/image";
// import Head from 'next/head'
// // import { Geist, Geist_Mono } from "next/font/google";
// //import styles from '../styles/Home.module.css'
// import tw from "tailwind-styled-components"
// import Map from './components/Map'

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// // export default function Home() {
// //   return (
// //     <Wrapper>
// //       <Map>Map</Map>
// //       <ActionItems>Start</ActionItems>
// //     </Wrapper>
// //   )
// // }

// // const Wrapper = tw.div`
// //   height: 100vh;
// //   display: flex;
// //   flex-direction: column;
// //   background-color: red;
// // `;


// // const Map = tw.div`
// //   bg-red-500 flex-1
// // `;

// // const ActionItems = tw.div`
// //   bg-blue-500 flex-1
// // `;

// // mapboxgl.accessToken =
// //   'pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA';

// export default function Home() {
//   // useEffect( () => {
//   //   if (mapboxgl.current) return
//   //   const map = new mapboxgl.Map( {
//   //     container: "map",
//   //     style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
//   //     center: [78.96288, 20.59368],
//   //     zoom: 3,
//   //   })
//   // })
//   // return (
// //     <Wrapper>
// //       <map id="map"></map>
// //       <ActionItems>Start</ActionItems>
// //     </Wrapper>
// //   )
// // }
// // const Wrapper = tw.div`
// //   flex flex-col bg-red-300 h-screen
// // `


// // const Map = tw.div`
// //   bg-red-500 flex-1 h-screen
// // `

// // const ActionItems = tw.div`
// //   flex-1
// // `
//     // < style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f87171' }}>
//     //   <map id="map" style={{ flex: 1, backgroundColor: '#ef4444' }} />
  
     
//   //     <div style={{ flex: 1, backgroundColor: '#3b82f6', display: 'flex', color: 'white' }}>
//   //       Start
//   //     </div>
//   // );
//   return (
//     <>
//       <Map />
//       <div style={{ flex: 1, backgroundColor: '#3b82f6', display: 'flex', color: 'white' }}>
//       Start
//       </div>
//     </>
//   );  
// }
// import { useEffect } from "react";
// import Image from "next/image";
// import Head from 'next/head'
// // import { Geist, Geist_Mono } from "next/font/google";
// //import styles from '../styles/Home.module.css'
// import tw from "tailwind-styled-components"
// import Map from './components/Map'

// export default function Home() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100vh', // Full viewport height
//       }}
//     >
//       {/* Map component takes the top half */}
//       <div style={{ flex: 1 }}>
//         <Map />
//       </div>

//       {/* "Start" section takes the bottom half */}
//       <div
//         style={{
//           flex: 1, // Occupies the other half of the screen
//           backgroundColor: '#3b82f6', // Background color
//           display: 'flex', // Flexbox for centering content
//           alignItems: 'center', // Vertically centers the text
//           justifyContent: 'center', // Horizontally centers the text
//           color: 'white', // Text color
//           fontSize: '24px', // Font size
//           fontWeight: 'bold', // Bold text
//         }}
//       >
//         Start
//       </div>
//     </div>
//   );
// }
// import Map from './components/Map';

// export default function Home() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100vh',
//       }}
//     >
//       <Map />
//       <div
//         style={{
//           flex: 1,
//           backgroundColor: 'white',
//           display: 'flex',
//           alignItems: 'left',
//           justifyContent: 'left',
//           color: 'black',
//           fontSize: '24px',
//           fontWeight: 'bold',
//         }}
//       >
//         <h1
//           style={{
//             display: 'flex',
//             alignItems: 'left',
//             gap: '10px', // Adds spacing between the text and the image
//           }}
//         >
//           <img
//             src="/i2.png" // Replace with your image path
//             alt="Logo"
//             style={{
//               top:'10px',
//               left:'10px',
//               height: '80px', // Adjust the size of the image
//               width: '80px',
//             }}
//           />
//         </h1>
//       </div>
//     </div>
//   );
// }
// export default function Home() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100vh',
//       }}
//     >
//       <Map />
//       <div
//         style={{
//           flex: 1,
//           backgroundColor: 'white', // Background color is white
//           position: 'relative',
//           color: 'black',
//           padding: '20px',
//         }}
//       >
//         {/* Logo on the left */}
//         <img
//           src="/i2.png" // Replace with your logo path
//           alt="Logo"
//           style={{
//             position: 'absolute',
//             top: '10px',
//             left: '10px',
//             height: '80px',
//             width: '80px',
//           }}
//         />

//         {/* Header content */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             marginLeft: '60px', // Ensure the content doesn't overlap the logo
//           }}
//         >
//           {/* Title or other text */}
//           <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}></h1>

//           {/* Profile Section */}
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '10px', // Add space between image and name
//             }}
//           >
//              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Aman Kumar</span>
//             {/* Profile Image */}
//             <img
//               src="/i5.jpeg" // Replace with user's profile image path
//               alt="Profile"
//               style={{
//                 height: '40px',
//                 width: '40px',
//                 borderRadius: '50%', // Makes the image circular
//               }}
//             />
//             {/* User Name */}
//             {/* <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Aman Kumar</span> */}
//           </div>
//           <div
//               style={{
//                 display: 'flex',
//                 gap: '10px', // Space between buttons
//                 marginTop: '10px', // Add some space between profile and buttons
//               }}
//             >
//               {/* Ride Button */}
//               <div
//                 style={{
//                   flex: 1,
//                   backgroundColor: 'rgb(229 231 235)', // bg-gray-200 equivalent
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding: '10px',
//                   borderRadius: '8px', // Slightly rounded corners
//                 }}
//               >
//                 <img
//                   src="/path-to-ride-image.jpg" // Replace with ride image path
//                   alt="Ride"
//                   style={{ height: '24px', marginRight: '10px' }}
//                 />
//                 <span>Ride</span>
//               </div>

//               {/* Wheels Button */}
//               <div
//                 style={{
//                   flex: 1,
//                   backgroundColor: 'rgb(229 231 235)', // bg-gray-200 equivalent
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding: '10px',
//                   borderRadius: '8px',
//                 }}
//               >
//                 <img
//                   src="/path-to-wheels-image.jpg" // Replace with wheels image path
//                   alt="Wheels"
//                   style={{ height: '24px', marginRight: '10px' }}
//                 />
//                 <span>Wheels</span>
//               </div>

//               {/* Reserve Button */}
//               <div
//                 style={{
//                   flex: 1,
//                   backgroundColor: 'rgb(229 231 235)', // bg-gray-200 equivalent
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding: '10px',
//                   borderRadius: '8px',
//                 }}
//               >
//                 <img
//                   src="/path-to-reserve-image.jpg" // Replace with reserve image path
//                   alt="Reserve"
//                   style={{ height: '24px', marginRight: '10px' }}
//                 />
//                 <span>Reserve</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
















// export default function Home() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         height: '100vh',
//       }}
//     >
//       <Map />
//       <div
//         style={{
//           flex: 1,
//           backgroundColor: 'white', // Background color is white
//           position: 'relative',
//           color: 'black',
//           padding: '20px',
//         }}
//       >
//         {/* Logo on the left */}
//         <img
//           src="/i2.png" // Replace with your logo path
//           alt="Logo"
//           style={{
//             position: 'absolute',
//             top: '10px',
//             left: '10px',
//             height: '80px',
//             width: '80px',
//           }}
//         />

//         {/* Header content */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             marginLeft: '60px', // Ensure the content doesn't overlap the logo
//           }}
//         >
//           {/* Title or other text */}
//           <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}></h1>

//           {/* Profile Section */}
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-end', // Align profile to the right
//               gap: '10px', // Add space between profile and buttons
//             }}
//           >
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '10px', // Add space between image and name
//               }}
//             >
//               <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
//                 Aman Kumar
//               </span>
//               {/* Profile Image */}
//               <img
//                 src="/i5.jpeg" // Replace with user's profile image path
//                 alt="Profile"
//                 style={{
//                   height: '40px',
//                   width: '40px',
//                   borderRadius: '50%', // Makes the image circular
//                 }}
//               />
//               {/* User Name */}
//               {/* <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
//                 Aman Kumar
//               </span> */}
//             </div>

//             {/* Action Buttons */}
//             <div
//               style={{
//                 display: 'flex',
//                 justifyContent:'space-around', // Space between buttons
//                 marginTop: '20px', // Add some space between profile and buttons
                
//               }}
//             >
//               {/* Ride Button */}
//               <div
//                 style={{
//                   flex: 1,
//                   backgroundColor: 'rgb(229 231 235)', // bg-gray-200 equivalent
//                   display: 'flex',
//                   flexDirection:'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding: '20px',
//                   margin: '0 10px',
//                   borderRadius: '8px', // Slightly rounded corners
//                 }}
//               >
//                 <img
//                   src="https://i.ibb.co/cyvcpfF/uberx.png" // Replace with ride image path
//                   alt="Ride"
//                   style={{ height: '40px', marginBottom: '10px' }}
//                 />
//                 <span>Ride</span>
//               </div>

//               {/* Wheels Button */}
//               <div
//                 style={{
//                   flex: 1,
//                   backgroundColor: 'rgb(229 231 235)', // bg-gray-200 equivalent
//                   display: 'flex',
//                   alignItems: 'center',
//                   flexDirection:'column',
//                   justifyContent: 'center',
//                   padding: '20px',
//                   margin:'0 10px',
//                   borderRadius: '8px',
//                 }}
//               >
//                 <img
//                   src="https://i.ibb.co/n776JLm/bike.png" // Replace with wheels image path
//                   alt="Wheels"
//                   style={{ height: '40px', marginRight: '10px' }}
//                 />
//                 <span>Wheels</span>
//               </div>

//               {/* Reserve Button */}
//               <div
//                 style={{
//                   flex: 1,
//                   backgroundColor: 'rgb(229 231 235)', // bg-gray-200 equivalent
//                   display: 'flex',
//                   flexDirection:'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding: '20px',
//                   margin:'0 10px',
//                   borderRadius: '8px',
//                 }}
//               >
//                 <img
//                   src="https://i.ibb.co/5RjchBg/uberschedule.png" // Replace with reserve image path
//                   alt="Reserve"
//                   style={{ height: '40px', marginRight: '10px' }}
//                 />
//                 <span>Reserve</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Head from 'next/head'
// // import { Geist, Geist_Mono } from "next/font/google";
// //import styles from '../styles/Home.module.css'
// import tw from "tailwind-styled-components"
// import Map from './components/Map'
// import Link from "next/link";
// import { auth } from '../firebase'
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useRouter } from "next/router";


// export default function Home() {
//   const [user, setUser]= useState(null)
//   const router =useRouter()

//   useEffect(()=>{
//     return onAuthStateChanged(auth, user => {
//       if(user){
//         setUser({
//           name:user.displayName,
//           photoUrl:user.photoURL,
//         })
//       } else {
//         setUser(null)
//         router.push('/login')
//       }     
//     })
//   })



//   return (
//     <div className="flex flex-col h-screen">
//       <Map />
//       <div className="flex-1 bg-white relative text-black p-5">
//         {/* Logo on the left */}
//         <img
//           src="/i2.png" // Replace with your logo path
//           alt="Logo"
//           className="absolute top-2 left-2 h-20 w-20"
//         />


// <div className="flex flex-col items-end gap-2">
//             <div className="flex items-center gap-2">
//               <span className="text-base font-bold">{user && user.name}</span>
//               {/* Profile Image */}
//               <img
//                 src="/i5.jpeg" // Replace with user's profile image path
//                 alt="Profile"
//                 className="h-10 w-10 rounded-full"
//               />
//             </div>
//           </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between mt-10">
//           <Link  className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl" href="/search">
//           {/* Ride Button */}
//           {/* <div className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl"> */}
//             <img
//               src="https://i.ibb.co/cyvcpfF/uberx.png" // Replace with ride image path
//               alt="Ride"
//               className="h-10 mb-2"
//             />
//             <span>Ride</span>
//           {/* </div> */}
//           </Link>

//           {/* Wheels Button */}
//           <Link className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl" href="/search">
//             <img
//               src="https://i.ibb.co/n776JLm/bike.png" // Replace with wheels image path
//               alt="Wheels"
//               className="h-10 mb-2"
//             />
//             <span>2-Wheels</span>
//           </Link>

//           {/* Reserve Button */}
//           <div className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl">
//             <img
//               src="https://i.ibb.co/5RjchBg/uberschedule.png" // Replace with reserve image path
//               alt="Reserve"
//               className="h-10 mb-2"
//             />
//             <span>Reserve</span>
//           </div>
//         </div>

//         <div className="h-20 bg-gray-200 text-2xl p-4 flex items-center mt-10">
//             <span>Where to?</span>
//           </div>

//         {/* Profile Section */}
//         <div className="flex items-center justify-between ml-16 mt-8">
//           {/* Title or other text */}
//           <h1 className="text-xl font-bold"></h1>

//           {/* Profile Section */}
          
          
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { auth } from "../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import Map from "./components/Map";

// export default function Home() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     return onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser({
//           name: user.displayName,
//           photoUrl: user.photoURL,
//         });
//       } else {
//         setUser(null);
//         router.push("/login");
//       }
//     });
//   }, [router]);

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Map Component */}
//       <Map />

//       {/* Main Content */}
//       <div className="flex-1 bg-white relative text-black p-5">
//         {/* Logo */}
//         <img
//           src="/i2.png" // Replace with your logo path
//           alt="Logo"
//           className="absolute top-2 left-2 h-20 w-20"
//         />

//         {/* User Profile Section */}
//         <div className="flex justify-end items-center gap-4">
//           {user && (
//             <>
//               <span className="text-base font-bold">{user.name}</span>
//               <img
//                 src={user.photoUrl || "/default-avatar.png"} // Fallback to a default avatar
//                 alt="Profile"
//                 className="h-10 w-10 rounded-full cursor-pointer"
//                 onClick={() => signOut(auth)}
//               />
//             </>
//           )}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between mt-10">
//           <Link
//             className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl"
//             href="/search"
//           >
//             <img
//               src="https://www.pngkit.com/png/full/1-19983_new-car-png-car-png-for-picsart.png"
//               alt="Ride"
//               className="h-8 mb-0.5 "
//             />
//             <span>Cab</span>
//           </Link>

//           <Link
//             className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl"
//             href="/search"
//           >
//             <img
//               src="https://i.pinimg.com/originals/d1/c1/78/d1c178bf08d27349f2f777bfa508b3dc.png"
//               alt="Auto"
//               className="h-10 mb-2"
//             />
//             <span>Auto</span>
//           </Link>
//           <Link
//             className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl"
//             href="/search"
//           >
//             <img
//               src="https://th.bing.com/th/id/R.ba0ad73795a39fe76cb66755043c2580?rik=BBtlTVOyYrBlaQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fSports-Bike-PNG-Photo.png&ehk=e%2bFRQXv0xOVqke2Y0sCdeMtt24JVJbjJa3GA35G4rIM%3d&risl=&pid=ImgRaw&r=0"
//               alt="Wheels"
//               className="h-8 mb-2"
//             />
//             <span>Bike</span>
//           </Link>

//           <div className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl">
//             <img
//               src="https://i.ibb.co/5RjchBg/uberschedule.png"
//               alt="Reserve"
//               className="h-10 mb-2"
//             />
//             <span>Reserve</span>
//           </div>
//         </div>

//         {/* Where To Section */}
//         {/* <div className="h-20 bg-gray-200 text-2xl p-4 flex items-center mt-10">
//           <span>Where to?</span>
//         </div> */}
//         <div
//   className="h-20 bg-gray-200 text-2xl p-4 flex items-center mt-10 cursor-pointer transform hover:scale-98 transition text-xl"
//   onClick={() => router.push('/search')}
// >
//   <span>Where to?</span>
// </div>

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Map from "../components/Map";
import { useTheme } from "next-themes";


export default function Home() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const { theme, setTheme } = useTheme();
  const router = useRouter();

  // const [mounted, setMounted] = useState(false);

  

  

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, [router]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleProfileManagement = () => {
    router.push("/profile"); // Navigate to profile management page
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Map Component */}
      <Map />

      {/* Main Content */}
      <div className="flex-1 bg-white text-black relative  p-5">
        {/* Logo */}
        <img
          src="/i2.png" // Replace with your logo path
          alt="Logo"
          className="absolute top-2 left-2 h-20 w-20"
        />

        <div className="flex justify-end items-center gap-4 relative">

        {/* <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>

{theme === 'light' ? 'Dark Mode' : 'Light Mode'}

</button> */}

        </div>

        {/* User Profile Section */}
        <div className="flex justify-end items-center gap-4 relative">
          {user && (
            console.log(user),
            <>
              <span className="text-base font-bold">{user.name}</span>
              <img
                src={user.photoUrl || "/default-avatar.png"} 
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleProfileManagement}>
                    Profile Management
                  </button>
                  <button
                  className="w-full text-left p-2 hover:bg-gray-100"
                  onClick={() => router.push("/history")}
                >
                  Ride History
                </button>
                  <button onClick={handleSignOut}>Sign Out</button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-10">
          <Link
            className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl"
            href="/search"
          >
            <img
              src="https://www.pngkit.com/png/full/1-19983_new-car-png-car-png-for-picsart.png"
              alt="Ride"
              className="h-8 mb-0.5 "
            />
            <span>Cab</span>
          </Link>

          <Link
            className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl"
            href="/search"
          >
            <img
              src="https://i.pinimg.com/originals/d1/c1/78/d1c178bf08d27349f2f777bfa508b3dc.png"
              alt="Auto"
              className="h-10 mb-2"
            />
            <span>Auto</span>
          </Link>
          <Link
            className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl"
            href="/search"
          >
            <img
              src="https://th.bing.com/th/id/R.ba0ad73795a39fe76cb66755043c2580?rik=BBtlTVOyYrBlaQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fSports-Bike-PNG-Photo.png&ehk=e%2bFRQXv0xOVqke2Y0sCdeMtt24JVJbjJa3GA35G4rIM%3d&risl=&pid=ImgRaw&r=0"
              alt="Wheels"
              className="h-8 mb-2"
            />
            <span>Bike</span>
          </Link>

          <div className="flex-1 bg-gray-200 flex flex-col items-center justify-center p-5 mx-2 rounded-lg transform hover:scale-105 transition text-xl">
            <img
              src="https://i.ibb.co/5RjchBg/uberschedule.png"
              alt="Reserve"
              className="h-10 mb-2"
            />
            <span>Reserve</span>
          </div>
        </div>

        {/* Where To Section */}
        <div
          className="h-20 bg-gray-200 p-4 flex items-center mt-10 cursor-pointer transform hover:scale-98 transition text-xl"
          onClick={() => router.push("/search")}
        >
          <span>Where to?</span>
        </div>
      </div>

      {/* Dropdown CSS */}
      <style jsx>{`
        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 50; /* Ensure it appears above other elements */
          border-radius: 0.5rem;
          padding: 0.5rem;
          width: 12rem;
        }

        .dropdown-menu button {
          width: 100%;
          text-align: left;
          padding: 0.5rem 1rem;
          border: none;
          background: none;
          font-size: 1rem;
          cursor: pointer;
        }

        .dropdown-menu button:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}
