import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../firebase"; // Ensure you have configured Firebase
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [rideStats, setRideStats] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        setUpdatedName(user.displayName);

        // Fetch user ride statistics from Firestore
        const userDocRef = doc(db, "users", user.uid); // Adjust 'users' to your Firestore collection name
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setRideStats(userDoc.data().rideStats || {}); // Adjust field names based on your Firestore schema
        } else {
          setRideStats({ rides: 0, distance: 0, ratings: 0 });
        }
      } else {
        setUser(null);
        router.push("/login");
      }
    });
    return unsubscribe;
  }, [router]);

  const handleUpdateProfile = async () => {
    if (!user) return;

    try {
      await updateProfile(auth.currentUser, {
        displayName: updatedName,
      });

      // Update Firestore if needed
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        displayName: updatedName,
      });

      setUser((prev) => ({ ...prev, displayName: updatedName }));
      setEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleSignOut = () => {
    signOut(auth);
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {user && (
          console.log(user),
          <>
            <div className="flex flex-col items-center mb-6">
              <img
                src={user.photoURL || "/default-avatar.png"} // Fallback to a default avatar
                alt="Profile"
                className="h-20 w-20 rounded-full mb-4"
              />
              {!editing ? (
                <h2 className="text-xl font-bold">{user.displayName}</h2>
              ) : (
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              )}
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            {/* Edit Profile Button */}
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
              >
                Edit Profile
              </button>
            ) : (
              <button
                onClick={handleUpdateProfile}
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mb-4"
              >
                Save Changes
              </button>
            )}

            {/* Ride Statistics */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Ride Statistics</h3>
              <ul className="text-sm text-gray-700">
                <li>Total Rides: {rideStats?.rides || 0}</li>
                <li>Total Distance: {rideStats?.distance || 0} km</li>
                <li>Average Rating: {rideStats?.ratings || "N/A"}</li>
              </ul>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={handleSignOut}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
