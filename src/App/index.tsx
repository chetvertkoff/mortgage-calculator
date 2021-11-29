import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App/App';
import { Bootstrap } from "@/App/Bootstrap";

ReactDOM.render(
	<Bootstrap>
		<App />
	</Bootstrap>,
	document.getElementById('root'),
);
