import { Fragment, useState } from "react";

import Head from "next/head";
import Header from "../components/Header";
import VertButtonBar from "./VertButtonBar";

const Layout = (props) => {
	console.log("Render Layout: ");

	return (
		<Fragment>
			<Head>
				<title>AntiScrabble</title>
				<meta charSet="utf-8"></meta>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
			</Head>

			<div>
				<Header />
				<div className="flex bg-yellow-200">
					<div className="w-full">{props.children}</div>
					<div className="sm:hidden flex bg-gray-800">
						<VertButtonBar />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Layout;
