import React from "react";
import "./App.sass";
import { useState } from "react";
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
	const [currSample, setSample] = useState("Sample Name");

	let playHeater1 = () => {
		new Audio(Heater1).play();
		setSample("Heater 1");
	};

	let playHeater2 = () => {
		new Audio(Heater2).play();
		setSample("Heater 2");
	};

	let playHeater3 = () => {
		new Audio(Heater3).play();
		setSample("Heater 3");
	};

	let playHeater4 = () => {
		new Audio(Heater4).play();
		setSample("Heater 4");
	};

	let playHeater6 = () => {
		new Audio(Heater6).play();
		setSample("Clap");
	};

	let playDsc_Oh = () => {
		new Audio(Dsc_Oh).play();
		setSample("Open HH");
	};

	let playKick_n_Hat = () => {
		new Audio(Kick_n_Hat).play();
		setSample("Kick_n_Hat");
	};

	let playRP4_KICK_1 = () => {
		new Audio(RP4_KICK_1).play();
		setSample("Kick");
	};

	let playCev_H2 = () => {
		new Audio(Cev_H2).play();
		setSample("Closed HH");
	};

	let handleKey = (event) => {
		if (event.key === "q") {
			playHeater1();
		}
		if (event.key === "w") {
			playHeater2();
		}
		if (event.key === "e") {
			playHeater3();
		}
		if (event.key === "a") {
			playHeater4();
		}
		if (event.key === "s") {
			playHeater6();
		}
		if (event.key === "d") {
			playDsc_Oh();
		}
		if (event.key === "z") {
			playKick_n_Hat();
		}
		if (event.key === "x") {
			playRP4_KICK_1();
		}
		if (event.key === "c") {
			playCev_H2();
		}
	};

	return (
		<div id="main" onKeyDown={handleKey} tabIndex={-1}>
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
					<div className="control-item">{currSample}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
