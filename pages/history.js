// import { useEffect, useState } from "react";
// import { db } from "../firebase";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { auth } from "../firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { useRouter } from "next/router";

// export default function History() {
//   const [rides, setRides] = useState([]); // Store ride history
//   const [loading, setLoading] = useState(true); // Show loading indicator
//   const [userId, setUserId] = useState(null); // Store logged-in user's ID
//   const router = useRouter();

//   // Check if the user is authenticated and get their ID
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid);
//       } else {
//         router.push("/login"); // Redirect to login if not authenticated
//       }
//     });

//     return unsubscribe;
//   }, [router]);

//   // Fetch ride history from Firestore
//   useEffect(() => {
//     if (userId) {
//       const fetchRides = async () => {
//         try {
//           const q = query(collection(db, "rides"), where("userId", "==", userId));
//           const querySnapshot = await getDocs(q);

//           const rideData = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));

//           setRides(rideData);
//         } catch (error) {
//           console.error("Error fetching ride history:", error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchRides();
//     }
//   }, [userId]);

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Ride History</h1>
//       {rides.length === 0 ? (
//         <p className="text-gray-600">No rides found.</p>
//       ) : (
//         <div className="space-y-4">
//           {rides.map((ride) => (
//             <div
//               key={ride.id}
//               className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
//             >
//               <p><strong>Date:</strong> {ride.date}</p>
//               <p><strong>Fare:</strong> ₹{ride.fare}</p>
//               <p><strong>Driver:</strong> {ride.driverName}</p>
//               <p><strong>Pickup:</strong> {ride.pickupLocation}</p>
//               <p><strong>Drop-off:</strong> {ride.dropoffLocation}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";

// export default function History() {
//   const [feedbackModal, setFeedbackModal] = useState(false);
//   const [selectedRideId, setSelectedRideId] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const rides = [
//     // Example ride history (Replace with Firestore data)
//     { id: 1, date: "2025-02-01", fare: "₹200", driver: "Driver A" },
//     { id: 2, date: "2025-02-15", fare: "₹150", driver: "Driver B" },
//   ];

//   const handleFeedbackSubmit = async () => {
//     if (!rating || !comment) {
//       alert("Please provide both rating and comments.");
//       return;
//     }

//     try {
//       await addDoc(collection(db, "feedback"), {
//         rideId: selectedRideId,
//         rating,
//         comment,
//         timestamp: new Date(),
//       });

//       alert("Feedback submitted successfully!");
//       setFeedbackModal(false);
//       setRating(0);
//       setComment("");
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//     }
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Ride History</h1>
//       <div className="space-y-4">
//         {rides.map((ride) => (
//           <div
//             key={ride.id}
//             className="p-4 border rounded-lg shadow-sm bg-white"
//           >
//             <p><strong>Date:</strong> {ride.date}</p>
//             <p><strong>Fare:</strong> {ride.fare}</p>
//             <p><strong>Driver:</strong> {ride.driver}</p>
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
//               onClick={() => {
//                 setSelectedRideId(ride.id);
//                 setFeedbackModal(true);
//               }}
//             >
//               Leave Feedback
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Feedback Modal */}
//       {feedbackModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-semibold mb-4">Leave Feedback</h2>
//             <div className="mb-4">
//               <label className="block mb-2">Rating (1–5):</label>
//               <select
//                 value={rating}
//                 onChange={(e) => setRating(Number(e.target.value))}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Select a rating</option>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <option key={star} value={star}>
//                     {star}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2">Comments:</label>
//               <textarea
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 rows="4"
//                 placeholder="Write your feedback here..."
//               />
//             </div>
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setFeedbackModal(false)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleFeedbackSubmit}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function History() {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [selectedRideId, setSelectedRideId] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const rides = [
    // Example ride history (Replace with Firestore data)
    { id: 1, date: "2025-02-01", fare: "₹200", driver: "Driver A" },
    { id: 2, date: "2025-02-15", fare: "₹150", driver: "Driver B" },
  ];

  const handleFeedbackSubmit = async () => {
    if (!rating || !comment) {
      alert("Please provide both rating and comments.");
      return;
    }

    try {
      await addDoc(collection(db, "feedback"), {
        rideId: selectedRideId,
        rating,
        comment,
        timestamp: new Date(),
      });

      alert("Feedback submitted successfully!");
      setFeedbackModal(false); // Close the modal
      setRating(0); // Reset rating
      setComment(""); // Reset comment
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Ride History</h1>
      <div className="space-y-4">
        {rides.map((ride) => (
          <div
            key={ride.id}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <p><strong>Date:</strong> {ride.date}</p>
            <p><strong>Fare:</strong> {ride.fare}</p>
            <p><strong>Driver:</strong> {ride.driver}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 cursor-pointer"
              onClick={() => {
                setSelectedRideId(ride.id);
                setFeedbackModal(true);
              }}
            >
              Leave Feedback
            </button>
          </div>
        ))}
      </div>

      {/* Feedback Modal */}
      {feedbackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Leave Feedback</h2>
            <div className="mb-4">
              <label className="block mb-2">Rating (1–5):</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full p-2 border rounded cursor-pointer"
              >
                <option value="">Select a rating</option>
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Comments:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Write your feedback here..."
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setFeedbackModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setFeedbackModal(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}