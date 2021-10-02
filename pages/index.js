import Head from "next/head";
import Comp1 from "../components/comp1";

export default function Home() {
	console.log("render HomePage");
	return (
		<div className="flex flex-col items-center  min-h-screen py-2">
			<Head>
				<title>AntiScrabble</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="pl-2 pr-2">
				<div className="mb-10 pl-2 font-bold underline underline-thickness-thick underline-offset-medium">
					global state = react: useContext, useReducer
				</div>
				AntiScrabble(HomeScreen)
				<Comp1 />
				<div className="pl-2 pr-2">
					<p>
						browser console shows Render Layout, Header, HomePage,
						Comp1, Comp2, Comp3 which we expect
					</p>
					<p className="mt-2">
						reduce screen width to mobile - "a1" in header width
						display to get menu button
					</p>
					<p className="mt-2">
						click menu button in header to open mobile sidebar
					</p>
					<p className="mt-2">
						console shows Layout, Header, VertButtonBar AND Comp1,
						Comp2, COMP3 which we define as EXCESSIVE RENDERING
					</p>
					<p className="mt-2 font-bold text-red-500 underline underline-thickness-thick underline-offset-medium">
						toggling menu button shows excessive downstream
						rerendering
					</p>
					<p className="mt-2">
						Have I made an error in the react global state code? Or
						is this what "caveats" means when authors discuse
						useContext etc?
					</p>
				</div>
			</div>
		</div>
	);
}
