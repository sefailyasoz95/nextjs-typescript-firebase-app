import firebaseClient from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCWglLuM0vNYZPA1uClNBmEx4EOWnFZYpI",
	authDomain: "nextjs-ts-app.firebaseapp.com",
	projectId: "nextjs-ts-app",
	storageBucket: "nextjs-ts-app.appspot.com",
	messagingSenderId: "696940340047",
	appId: "1:696940340047:web:ef800607d16f0517dc1b3a",
};

if (!firebaseClient.apps.length) {
	firebaseClient.initializeApp(firebaseConfig);
}

export default firebaseClient;
