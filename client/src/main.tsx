import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {BrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
					<App/>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
)
