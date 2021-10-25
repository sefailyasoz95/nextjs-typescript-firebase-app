import firebaseClient from "firebase/client";
import React from "react";
import Header from "./Header";
import Loader from "./Loader";
type Props = {
	currentUser: firebaseClient.User | undefined | null;
	loading: boolean;
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ currentUser, loading, children }) => {
	return (
		<div className='min-h-screen bg-brand-dark'>
			<div className='max-w-3xl mx-auto flex flex-col items-center'>
				{loading ? (
					<Loader size={40} color='white' />
				) : (
					<>
						{currentUser && <Header currentUser={currentUser} />}
						<main>{children}</main>
					</>
				)}
			</div>
		</div>
	);
};

export default Layout;
