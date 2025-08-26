import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = ({ timer }) => {
	return (
		
		<div className="text-center d-flex justify-content-center bg-dark p-3 border border-danger">
			<span>🕗</span>
			<SecondsCounter value={Math.floor(timer / 100000)} />
			<SecondsCounter value={Math.floor(timer / 10000)} />
			<SecondsCounter value={Math.floor(timer / 1000)} />
			<SecondsCounter value={Math.floor(timer / 100)} />
			<SecondsCounter value={Math.floor(timer / 10)} />
			<SecondsCounter value={timer} />
		</div>
		
	);
};

export default Home;