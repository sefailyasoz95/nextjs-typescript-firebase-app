import firebaseClient from "firebase/client";
import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";

type Props = {
	userId: string;
};

const User: React.FC<Props> = ({ userId }) => {
	const [value, loading, error] = useDocument(firebaseClient.firestore().doc(`users/${userId}`));
	if (loading) return <h1>...</h1>;
	return (
		<div className='flex space-x-2 items-center'>
			<img src={`${value?.data()?.photoURL}`} className='ml-2 w-12 h-12 rounded-full' />
		</div>
	);
};

export default User;
