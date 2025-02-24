# GoTogether - Ride Sharing Application

Welcome to **GoTogether**, a modern and user-friendly ride-sharing application designed to make your travel experience seamless and convenient. Whether you need a cab, bike, or auto, GoTogether has got you covered. The application is mobile-responsive, ensuring a smooth experience across all devices.

## Features

- **Firebase Authentication**: Secure and easy login/signup process using Firebase Authentication.
- **Map Integration**: Integrated with Mapbox API to provide real-time maps and location services.
- **Ride Booking**: Book cabs, bikes, or autos to travel from one place to another with just a few clicks.
- **Payment Gateway**: Secure and hassle-free payments integrated using Stripe API.
- **Mobile Responsive**: Fully optimized for mobile devices, ensuring a seamless experience on the go.
- **Frontend Deployment**: Deployed on Vercel for fast and reliable performance.

## Technologies Used

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Authentication**: Firebase Authentication
- **Map Integration**: Mapbox API
- **Payment Gateway**: Stripe API
- **Deployment**: Vercel

## Live Demo

Check out the live demo of GoTogether: [GoTogether Live Demo](https://fj-fe-r2-aman-kumar-iiit-pune.vercel.app/)

## Getting Started

To get started with GoTogether, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/GoTogether.git
   cd GoTogether
2. **Install Dependencies**:
   ```bash
   npm install
3. **Set Up Environment Variables**:
   Create a .env.local file in the root directory and add the following variables:
   NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-token
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
4.**Run the Application**:
  ```bash
  npm run dev
5. **Open the Application**:
   Open your browser and navigate to http://localhost:3000 to see the application in action.

##How to Use
1. Login/Signup: Use Firebase Authentication to log in or sign up.

2. Map View: After logging in, you will be directed to the map view where you can see your current location.

3. Book a Ride: Choose between cab, bike, or auto, and select your destination.

4. Payment: Complete your ride booking by making a secure payment using Stripe.

5. Enjoy Your Ride: Sit back and enjoy your ride with GoTogether!

