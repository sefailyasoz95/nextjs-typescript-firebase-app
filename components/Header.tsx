import firebaseClient from "firebase/client";
import React from "react";

type Props = {
	currentUser: firebaseClient.User;
};

const Header: React.FC<Props> = ({ currentUser }) => {
	const logout = () => {
		firebaseClient.auth().signOut();
	};
	return (
		<div className='mt-16 flex justify-center w-full items-center'>
			<span className='text-white mr-3'>{`Logged in as: ${currentUser.displayName}`}</span>
			<button
				className='bg-transparent text-white font-semibold hover:text-purple-500 py-2 px-4 border border-purple-500 hover:border-purple-800 rounded'
				onClick={logout}>
				Logout
			</button>
		</div>
	);
};

export default Header;
