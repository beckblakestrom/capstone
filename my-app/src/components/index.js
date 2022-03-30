import React from "react";
import { useState } from "react";
import { UserContext, Route, Routes, HashRouter } from "./context";
import Home from "./home";
import Nav from "./nav";

export default function Spa() {
	const [user, setUser] = useState("");
	return (
		<HashRouter>
			<UserContext.Provider value={user}>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home/" element={<Home />} />
				</Routes>
			</UserContext.Provider>
		</HashRouter>
	);
}
