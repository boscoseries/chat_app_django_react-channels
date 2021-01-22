import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Chat from "./pages/chat/Chat";
import Test from "./components/Test/Test";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route path="/test" component={Test} exact />
			<Route path="/" component={Chat} exact />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
