// import React from 'react'
// import tw from 'tailwind-styled-components'
// import { carList } from '../data/carList';

// const RideSelector = () => {
//     return (
//       <div className="flex flex-col h-full overflow-y-scroll">
//         {/* Top Section with Map
//         <div className="flex-1 bg-gray-200">
//           <img
//             src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-118.2437,34.0522,12,0/600x300?access_token=YOUR_MAPBOX_TOKEN"
//             alt="Map"
//             className="w-full h-full object-cover"
//           />
//         </div> */}
  
//         {/* Bottom Section */}
//         <div className="flex flex-col bg-white ">
//           {/* Title */}
//           <div className="w-full text-gray-500 text-xs py-2 border-b border-gray-300 mt-1 text-center ">
//             Choose a ride, or swipe up for more
//           </div>
  
//           {/* Ride Options */}
//           <div className="space-y-4">
//             {/* Ride 1 */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src="https://i.ibb.co/cvycpfF/uberx.png"
//                   alt="UberX"
//                   className="h-12 w-12 object-contain"
//                 />
//                 <div>
//                   <div className="font-medium font-bold">GoX</div>
//                   <div className="text-sm text-blue-500">5 min away</div>
//                 </div>
//               </div>
//               <div className="font-medium mr-4">$20.32</div>
//             </div>
  
//             {/* Ride 2 */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src="https://i.ibb.co/cvypcpf/uberx.png"
//                   alt="UberXL"
//                   className="h-12 w-12 object-contain"
//                 />
//                 <div>
//                   <div className="font-medium font-bold">GoXL</div>
//                   <div className="text-sm text-blue-500">5 min away</div>
//                 </div>
//               </div>
//               <div className="font-medium mr-4">$30.48</div>
//             </div>
  
//             {/* Ride 3 */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src="https://i.ibb.co/cvypcpf/uberx.png"
//                   alt="Black"
//                   className="h-12 w-12 object-contain"
//                 />
//                 <div>
//                   <div className="font-medium font-bold">GoPremium</div>
//                   <div className="text-sm text-blue-500">5 min away</div>
//                 </div>
//               </div>
//               <div className="font-medium mr-4">$40.64</div>
//             </div>
//             {/* Ride 1 */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src="https://i.ibb.co/cvycpfF/uberx.png"
//                   alt="Comfort"
//                   className="h-12 w-12 object-contain"
//                 />
//                 <div>
//                   <div className="font-medium font-bold">Comfort</div>
//                   <div className="text-sm text-blue-500">5 min away</div>
//                 </div>
//               </div>
//               <div className="font-medium mr-4">$20.32</div>
//             </div>
//             {/* Ride 1 */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src="https://i.ibb.co/cvycpfF/uberx.png"
//                   alt="UberX"
//                   className="h-12 w-12 object-contain"
//                 />
//                 <div>
//                   <div className="font-medium font-bold">Suv</div>
//                   <div className="text-sm text-blue-500">5 min away</div>
//                 </div>
//               </div>
//               <div className="font-medium mr-4">$20.32</div>
//             </div>
            
//           </div>
          
//         </div>
//       </div>
//     );
//   };
  
//   export default RideSelector;
  
// import React,{useEffect, useState} from 'react';
// import { useRouter } from 'next/router'; // Import useRouter from Next.js

// const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
//   const [rideDuration, setRideDuration]= useState(0)
//   const [selectedCar,setSelectedcar]=useState();

//   useEffect(() => {
//     if (pickupCoordinates && dropoffCoordinates) {
//       fetch(
//         `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.routes && data.routes[0]) {
//             setRideDuration(data.routes[0].duration / 100); // Convert duration to smaller value
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching ride duration:", error);
//         });
//     }
//   }, [pickupCoordinates, dropoffCoordinates]);
  

//   // useEffect(() => {

    

//   //   rideDuration=fetch(
//   //     `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]}; ${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA`
//   //   ).then(res => res.json())
//   //    .then(data => {
//   //      setRideDuration(data.routes[0].duration /100) //number small price
//   //    })

//   // }, [pickupCoordinates, dropoffCoordinates])
  


//   const router = useRouter(); // Create router instance

//   return (
//     <div className="flex flex-col h-full overflow-y-scroll">
//       {/* Back Button */}
//       <div className="absolute top-4 left-4 z-10">
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 shadow-md cursor-pointer"
//           onClick={() => router.push('/search')} // Navigate back to search page
//         >
//           <img
//             src="https://img.icons8.com/ios-filled/50/000000/left.png"
//             alt="Back"
//             className="h-6 w-6"
//           />
//         </button>
//       </div>
      

//       {/* Ride Selector Content */}
//       <div className="flex flex-col bg-white">
//         {/* Title */}
//         <div className="w-full text-gray-500 text-xs py-2 border-b border-gray-300 mt-1 text-center">
//           Choose a ride, or swipe up for more
//         </div>

//         {/* Ride Options */}
//         <div className="space-y-4">
//           {/* Ride 1 */}
          
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://th.bing.com/th/id/OIP.AkFFOBgsVNSfrQqAI1KjtgHaGU?rs=1&pid=ImgDetMain"
//                 alt="Bike"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">Bike</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">{'$' + (rideDuration *1).toFixed(2)}</div>
//           </div>

//           {/* Ride 2 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://th.bing.com/th/id/OIP.29ZWAnIi285Zz2XWY1gp0AHaEN?rs=1&pid=ImgDetMain"
//                 alt="GoX"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">GoX</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">$30.48</div>
//           </div>

//           {/* Ride 3 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://www.suzuki.co.id/uploads/all-new-ertiga/red.png"
//                 alt="Black"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">GoXL</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">$40.64</div>
//           </div>

//           {/* Ride 4 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png"
//                 alt="GoPremium"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">GoPremium</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">$20.32</div>
//           </div>

//           {/* Ride 5 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://th.bing.com/th/id/OIP.X2-oCL1gEfMChG-fHjuTowHaEg?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//                 alt="Suv"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">Suv</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">$20.32</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RideSelector;


// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
//   const [rideDuration, setRideDuration] = useState(0);

//   useEffect(() => {
//     const fetchRideDuration = async () => {
//       try {
//         const response = await fetch(
//           `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA`
//         );
//         const data = await response.json();

//         if (data.routes && data.routes.length > 0) {
//           const durationInMinutes = (data.routes[0].duration / 60).toFixed(2);
//           setRideDuration(durationInMinutes);
//         } else {
//           console.error('No routes found');
//         }
//       } catch (error) {
//         console.error('Error fetching ride duration:', error);
//       }
//     };

//     if (pickupCoordinates && dropoffCoordinates) {
//       fetchRideDuration();
//     }
//   }, [pickupCoordinates, dropoffCoordinates]);

//   const router = useRouter();

//   return (
//     <div className="flex flex-col h-full overflow-y-scroll">
//       {/* Back Button */}
//       <div className="absolute top-4 left-4 z-10 ">
//         <button
//           className="bg-white hover:bg-gray-300 text-black rounded-full p-2 shadow-md cursor-pointer h-full object-contain"
//           onClick={() => router.push('/search')}
//         >
//           <img
//             src="https://img.icons8.com/ios-filled/50/000000/left.png"
//             alt="Back"
//             className="h-6 w-6"
//           />
//         </button>
//       </div>

//       {/* Ride Selector Content */}
//       <div className="flex flex-col bg-white">
//         <div className="w-full text-gray-500 text-xs py-2 border-b border-gray-300 mt-1 text-center">
//           Choose a ride, or swipe up for more
//         </div>

//         {/* Ride Options */}
//         <div className="space-y-4">
//         <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://th.bing.com/th/id/OIP.AkFFOBgsVNSfrQqAI1KjtgHaGU?rs=1&pid=ImgDetMain"
//                 alt="Comfort"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">Bike</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">
//               {'$' + (rideDuration * 1).toFixed(2)}
//             </div>
//           </div>
//           {/* Ride 1 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://th.bing.com/th/id/OIP.29ZWAnIi285Zz2XWY1gp0AHaEN?rs=1&pid=ImgDetMain"
//                 alt="UberX"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">GoX</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">
//               {'$' + (rideDuration * 1).toFixed(2)}
//             </div>
//           </div>

//           {/* Ride 2 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://www.suzuki.co.id/uploads/all-new-ertiga/red.png"
//                 alt="UberXL"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">GoXL</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">
//               {'$' + (rideDuration * 1.5).toFixed(2)}
//             </div>
//           </div>

//           {/* Ride 3 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png"
//                 alt="Black"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">GoPremium</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">
//               {'$' + (rideDuration * 2).toFixed(2)}
//             </div>
//           </div>

//           {/* Ride 4 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://th.bing.com/th/id/OIP.mcoWhPzbsJNMxz79BDt9fAHaEj?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//                 alt="Comfort"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">Comfort</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">
//               {'$' + (rideDuration * 1.2).toFixed(2)}
//             </div>
//           </div>

//           {/* Ride 5 */}
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://th.bing.com/th/id/OIP.X2-oCL1gEfMChG-fHjuTowHaEg?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//                 alt="Suv"
//                 className="h-12 w-12 object-contain"
//               />
//               <div>
//                 <div className="font-medium font-bold">Suv</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">
//               {'$' + (rideDuration * 2.5).toFixed(2)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RideSelector;


// import React from "react";

// const rides = [
//   { name: "Bike", timeAway: "5 min away", price: 105.46, image: "https://via.placeholder.com/50" },
//   { name: "GoX", timeAway: "5 min away", price: 210.92, image: "https://via.placeholder.com/50" },
//   { name: "SUV", timeAway: "8 min away", price: 320.00, image: "https://via.placeholder.com/50" },
//   { name: "Van", timeAway: "10 min away", price: 450.00, image: "https://via.placeholder.com/50" },
//   { name: "Luxury", timeAway: "15 min away", price: 600.00, image: "https://via.placeholder.com/50" },
// ];

// const MapComponent = () => {
//   return (
//     <div className="h-full bg-blue-200 flex items-center justify-center">
//       {/* Placeholder for the map */}
//       <h1 className="text-lg font-semibold">Map Section</h1>
//     </div>
//   );
// };

// const RideSelector = () => {
//   return (
//     <div className="flex flex-col h-1/2 border-t">
//       <h2 className="text-center py-2 text-gray-600 text-sm">
//         Choose a ride, or swipe up for more
//       </h2>
//       <div className="flex-1 overflow-y-auto">
//         {rides.map((ride, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 border-b"
//           >
//             <div className="flex items-center">
//               <img
//                 src={ride.image}
//                 alt={ride.name}
//                 className="w-12 h-12 rounded-lg mr-4"
//               />
//               <div>
//                 <h3 className="font-semibold">{ride.name}</h3>
//                 <p className="text-sm text-gray-500">{ride.timeAway}</p>
//               </div>
//             </div>
//             <p className="font-semibold">₹{ride.price.toFixed(2)}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Map Section */}
//       <div className="flex-1">
//         <MapComponent />
//       </div>

//       {/* Ride Selector Section */}
//       <RideSelector />
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const RideSelector = ({ pickupCoordinates, dropoffCoordinates, setSelectedVehicle }) => {
//   const [rideDuration, setRideDuration] = useState(0);
//   const router = useRouter();

//   const vehicles = [
//     { name: 'Bike', image: 'https://th.bing.com/th/id/OIP.AkFFOBgsVNSfrQqAI1KjtgHaGU?rs=1&pid=ImgDetMain', multiplier: 1 },
//     { name: 'GoX', image: 'https://th.bing.com/th/id/OIP.29ZWAnIi285Zz2XWY1gp0AHaEN?rs=1&pid=ImgDetMain', multiplier: 2 },
//     { name: 'GoXL', image: 'https://www.suzuki.co.id/uploads/all-new-ertiga/red.png', multiplier: 3 },
//     { name: 'GoPremium', image: 'https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png', multiplier: 4 },
//     { name: 'Suv', image: 'https://th.bing.com/th/id/OIP.X2-oCL1gEfMChG-fHjuTowHaEg?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', multiplier: 5 },
//   ];

//   useEffect(() => {
//     if (pickupCoordinates && dropoffCoordinates) {
//       fetch(
//         `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.routes && data.routes[0]) {
//             setRideDuration(data.routes[0].duration / 100);
//           }
//         })
//         .catch((error) => console.error('Error fetching ride duration:', error));
//     }
//   }, [pickupCoordinates, dropoffCoordinates]);

//   return (
//     <div className="flex flex-col h-full overflow-y-scroll">
//       <div className="absolute top-4 left-4 z-10">
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 shadow-md cursor-pointer"
//           onClick={() => router.push('/search')}
//         >
//           <img
//             src="https://img.icons8.com/ios-filled/50/000000/left.png"
//             alt="Back"
//             className="h-6 w-6"
//           />
//         </button>
//       </div>
//       <div className="flex flex-col bg-white">
//         <div className="w-full text-gray-500 text-xs py-2 border-b border-gray-300 mt-1 text-center">
//           Choose a ride, or swipe up for more
//         </div>
//         <div className="space-y-4">
//           {vehicles.map((vehicle) => (
//             <div
//               key={vehicle.name}
//               className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => setSelectedVehicle(vehicle.name)}
//             >
//               <div className="flex items-center space-x-4">
//                 <img src={vehicle.image} alt={vehicle.name} className="h-12 w-12 object-contain" />
//                 <div>
//                   <div className="font-medium font-bold">{vehicle.name}</div>
//                   <div className="text-sm text-blue-500">5 min away</div>
//                 </div>
//               </div>
//               <div className="font-medium mr-4">{'$' + (rideDuration * vehicle.multiplier).toFixed(2)}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RideSelector;

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const RideSelector = ({ pickupCoordinates, dropoffCoordinates, setSelectedVehicle }) => {
//   const [rideDuration, setRideDuration] = useState(0);
//   const router = useRouter();

//   const vehicles = [
//     { name: 'Bike', image: 'https://th.bing.com/th/id/OIP.AkFFOBgsVNSfrQqAI1KjtgHaGU?rs=1&pid=ImgDetMain', multiplier: 1 },
//     { name: 'GoX', image: 'https://th.bing.com/th/id/OIP.29ZWAnIi285Zz2XWY1gp0AHaEN?rs=1&pid=ImgDetMain', multiplier: 2 },
//     { name: 'GoXL', image: 'https://www.suzuki.co.id/uploads/all-new-ertiga/red.png', multiplier: 3 },
//     { name: 'GoPremium', image: 'https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png', multiplier: 4 },
//     { name: 'Suv', image: 'https://th.bing.com/th/id/OIP.X2-oCL1gEfMChG-fHjuTowHaEg?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', multiplier: 5 },
//   ];

//   useEffect(() => {
//     if (pickupCoordinates && dropoffCoordinates) {
//       fetch(
//         `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.routes && data.routes[0]) {
//             setRideDuration(data.routes[0].duration / 60);
//           }
//           console.log("Ride duration:",rideDuration);
//         })
//         .catch((error) => console.error('Error fetching ride duration:', error));
//     }
//   }, [pickupCoordinates, dropoffCoordinates]);

//   return (
//     <div className="flex flex-col h-full overflow-y-scroll">
//       <div className="absolute top-4 left-4 z-10">
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 shadow-md cursor-pointer"
//           onClick={() => router.push('/search')}
//         >
//           <img
//             src="https://img.icons8.com/ios-filled/50/000000/left.png"
//             alt="Back"
//             className="h-6 w-6"
//           />
//         </button>
//       </div>
//       <div className="flex flex-col bg-white h-1/2 border-t">
//       <h2 className="text-center py-2 text-gray-600 text-sm">
//         Choose a ride, or swipe up for more
//       </h2>
//         {/* <div className="w-full text-gray-500 text-xs py-2 border-b border-gray-300 mt-1 text-center">
//           Choose a ride, or swipe up for more
//         </div> */}
//         <div className="flex-1 overflow-visible">
//           {vehicles.map((vehicle) => (
//             <div
//             key={vehicle.name}
//             className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 border-b cursor-pointer"
//             onClick={() => {
//               setSelectedVehicle(vehicle);
//               console.log("Selected vehicle:", vehicle);
//             }}
//           >
//             <div className="flex items-center">
//               <img src={vehicle.image} alt={vehicle.name} className="h-12 w-12 rounded-lg mr-4" />
//               <div>
//                 <div className="font-medium font-bold">{vehicle.name}</div>
//                 <div className="text-sm text-blue-500">5 min away</div>
//               </div>
//             </div>
//             <div className="font-medium mr-4">
//               {'₹' + (rideDuration * vehicle.multiplier).toFixed(2)}
//             </div>
//           </div>
          

//             // <div
//             //   key={vehicle.name}
//             //   className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 border-b cursor-pointer"
//             //   onClick={() => setSelectedVehicle(vehicle.name)}
//             //   // setAmount((rideDuration * vehicle.multiplier).toFixed(2));}}
//             // >
//             //   <div className="flex items-center">
//             //     <img src={vehicle.image} alt={vehicle.name} className="h-12 w-12 rounded-lg mr-4" />
//             //     <div>
//             //       <div className="font-medium font-bold">{vehicle.name}</div>
//             //       <div className="text-sm text-blue-500">5 min away</div>
//             //     </div>
//             //   </div>
//             //   <div className="font-medium mr-4">{'₹' + (rideDuration * vehicle.multiplier).toFixed(2)}</div>
//             // </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // const App = () => {
// //   return (
// //     <div className="flex flex-col h-screen">
// //       {/* Map Section */}
// //       <div className="flex-1">
// //         <MapComponent />
// //       </div>

// //       {/* Ride Selector Section */}
// //       <RideSelector />
// //     </div>
// //   );
// // };

// export default RideSelector;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const RideSelector = ({ pickupCoordinates, dropoffCoordinates, setSelectedVehicle, setAmount }) => {
  const [rideDuration, setRideDuration] = useState(0);
  const router = useRouter();

  const vehicles = [
    { name: 'Bike', image: 'https://th.bing.com/th/id/OIP.AkFFOBgsVNSfrQqAI1KjtgHaGU?rs=1&pid=ImgDetMain', multiplier: 5 },
    { name: 'GoX', image: 'https://th.bing.com/th/id/OIP.29ZWAnIi285Zz2XWY1gp0AHaEN?rs=1&pid=ImgDetMain', multiplier: 9 },
    { name: 'GoXL', image: 'https://www.suzuki.co.id/uploads/all-new-ertiga/red.png', multiplier: 14 },
    { name: 'GoPremium', image: 'https://purepng.com/public/uploads/large/red-edition-audi-luxury-car-jdc.png', multiplier: 20 },
    { name: 'Suv', image: 'https://th.bing.com/th/id/OIP.X2-oCL1gEfMChG-fHjuTowHaEg?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', multiplier: 24 },
  ];

  useEffect(() => {
    if (pickupCoordinates && dropoffCoordinates) {
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYW1hbjIyMjUiLCJhIjoiY203ZzA0Z3BlMHU3djJrc2V2c2lhdGd4ciJ9.jqojL31H4cghFWXayhsdCA`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.routes && data.routes[0]) {
            setRideDuration(data.routes[0].duration / 100);
          }
        })
        .catch((error) => console.error('Error fetching ride duration:', error));
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      <div className="absolute top-4 left-4 z-10">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 shadow-md cursor-pointer"
          onClick={() => router.push('/search')}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back"
            className="h-6 w-6"
          />
        </button>
      </div>
      <div className="flex flex-col bg-white h-1/2 border-t">
        <h2 className="text-center py-2 text-gray text-sm">
          Choose a ride, or swipe up for more
        </h2>
        <div className="flex-1 overflow-visible">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 border-b cursor-pointer"
              onClick={() => {
                setSelectedVehicle(vehicle.name);
                setAmount((rideDuration * vehicle.multiplier).toFixed(2));
              }}
            >
              <div className="flex items-center">
                <img src={vehicle.image} alt={vehicle.name} className="h-12 w-12 rounded-lg mr-4" />
                <div>
                  <div className="font-medium font-bold">{vehicle.name}</div>
                  <div className="text-sm text-blue-500">5 min away</div>
                </div>
              </div>
              <div className="font-medium mr-4">{'₹' + (rideDuration * vehicle.multiplier).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideSelector;
