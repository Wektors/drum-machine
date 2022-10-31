import React from "react";
import "./App.sass";
import Heater1 from "./samples/Heater-1.mp3";
import Heater2 from "./samples/Heater-2.mp3";
import Heater3 from "./samples/Heater-3.mp3";
import Heater4 from "./samples/Heater-4_1.mp3";
import Heater6 from "./samples/Heater-6.mp3";
import Dsc_Oh from "./samples/Dsc_Oh.mp3";
import Kick_n_Hat from "./samples/Kick_n_Hat.mp3";
import RP4_KICK_1 from "./samples/RP4_KICK_1.mp3";
import Cev_H2 from "./samples/Cev_H2.mp3";

function App() {
	return <DrumMachine />;
}

function DrumMachine() {
	let playHeater1 = () => {
		new Audio(Heater1).play();
	};

	let playHeater2 = () => {
		new Audio(Heater2).play();
	};

	let playHeater3 = () => {
		new Audio(Heater3).play();
	};

	let playHeater4 = () => {
		new Audio(Heater4).play();
	};

	let playHeater6 = () => {
		new Audio(Heater6).play();
	};

	let playDsc_Oh = () => {
		new Audio(Dsc_Oh).play();
	};

	let playKick_n_Hat = () => {
		new Audio(Kick_n_Hat).play();
	};

	let playRP4_KICK_1 = () => {
		new Audio(RP4_KICK_1).play();
	};

	let playCev_H2 = () => {
		new Audio(Cev_H2).play();
	};

	return (
		<div id="drum-machine">
			<div id="display">
				<button className="drum-pad" onClick={playHeater1}>
					Q
				</button>
				<button className="drum-pad" onClick={playHeater2}>
					W
				</button>
				<button className="drum-pad" onClick={playHeater3}>
					E
				</button>
				<button className="drum-pad" onClick={playHeater4}>
					A
				</button>
				<button className="drum-pad" onClick={playHeater6}>
					S
				</button>
				<button className="drum-pad" onClick={playDsc_Oh}>
					D
				</button>
				<button className="drum-pad" onClick={playKick_n_Hat}>
					Z
				</button>
				<button className="drum-pad" onClick={playRP4_KICK_1}>
					X
				</button>
				<button className="drum-pad" onClick={playCev_H2}>
					C
				</button>
			</div>
			<div id="control">
				<div className="control-item">Name</div>
			</div>
		</div>
	);
}

export default App;
