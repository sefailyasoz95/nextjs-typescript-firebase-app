import "../styles/globals.css";
import type { AppProps } from "next/app";
import firebaseClient from "firebase/client";
import { useAuthState } from "react-firebase-hooks/auth";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	const [user, loading, error] = useAuthState(firebaseClient.auth());

	return (
		<Layout currentUser={user} loading={loading}>
			<Component {...pageProps} currentUser={user} />
		</Layout>
	);
}
export default MyApp;
