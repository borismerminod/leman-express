import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

class DefaultController extends React.Component
{
	constructor(props)
	{
		super(props)
	}
	
	render()
	{
		return <div>
			Hello World !!!
		</div>
	}
}

root.render(<DefaultController />)
