import React from "react";
import { GlobalStyled } from "./style.js";
import { GlobalFont } from "./static/iconfont/iconfont";
// 路由
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header/Header";
import { Provider } from "react-redux";
import store from "./store";
import Home from './pages/home'
import Details from './pages/details'
import Login from './pages/login'
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<GlobalStyled />
				<GlobalFont />
				{/* 路由 */}
				<BrowserRouter>
				<Header />
				<div style={{"paddingTop":"56px"}}>
					<Route path='/' exact component={Home}></Route>
					<Route path='/details/:id' component={Details}></Route>
					<Route path='/login' component={Login}></Route>
				</div>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
