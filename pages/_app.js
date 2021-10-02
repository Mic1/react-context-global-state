import "tailwindcss/tailwind.css";

import { useContext, useState, useReducer, createContext } from "react";

import useCombinedReducers from "../reducers/useCombinedReducers";

import Layout from "../components/Layout";

import AppContext from "../contexts/AppContext";

const initialAppFlags = {
	showSideBar: false,
};

const appFlagsReducer = (state, action) => {
	switch (action.type) {
		case "TOGGLE_MENU":
			return { ...state, showSideBar: !state.showSideBar };
		case "TEST_RENDER":
			return state;
		default:
			return state;
	}
};

const MyApp = ({ Component, pageProps }) => {
	const [state, dispatch] = useCombinedReducers({
		appflags: useReducer(appFlagsReducer, initialAppFlags),
	});
	const { appFlags } = state;

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</AppContext.Provider>
	);
};

export default MyApp;
