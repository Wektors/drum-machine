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

	const [volVal, setVol] = useState(0.3);

	const incrVol = () => {
		if (volVal < 0.9) {
			setVol(volVal + 0.1);
		}
	};

	const decrVol = () => {
		if (volVal > 0.1) {
			setVol(volVal - 0.1);
		}
	};

	let playHeater1 = () => {
		const heater1 = new Audio(Heater1);
		heater1.volume = volVal;
		heater1.play();
		setSample("Heater 1");
	};

	let playHeater2 = () => {
		const heater2 = new Audio(Heater2);
		heater2.volume = volVal;
		heater2.play();
		setSample("Heater 2");
	};

	let playHeater3 = () => {
		const heater3 = new Audio(Heater3);
		heater3.volume = volVal;
		heater3.play();
		setSample("Heater 3");
	};

	let playHeater4 = () => {
		const heater4 = new Audio(Heater4);
		heater4.volume = volVal;
		heater4.play();
		setSample("Heater 4");
	};

	let playHeater6 = () => {
		const heater6 = new Audio(Heater6);
		heater6.volume = volVal;
		heater6.play();
		setSample("Clap");
	};

	let playDsc_Oh = () => {
		const dsc_Oh = new Audio(Dsc_Oh);
		dsc_Oh.volume = volVal;
		dsc_Oh.play();
		setSample("Open HH");
	};

	let playKick_n_Hat = () => {
		const kick_n_Hat = new Audio(Kick_n_Hat);
		kick_n_Hat.volume = volVal;
		kick_n_Hat.play();
		setSample("Kick_n_Hat");
	};

	let playRP4_KICK_1 = () => {
		const rp4 = new Audio(RP4_KICK_1);
		rp4.volume = volVal;
		rp4.play();
		setSample("Kick");
	};

	let playCev_H2 = () => {
		const cev = new Audio(Cev_H2);
		cev.volume = volVal;
		cev.play();
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

	// const music = document.getElementById("Q");
	// const playQ = document.getElementById("Q-pad");

	// playQ.addEventListener("click", music.play());

	return (
		<div id="main" onKeyDown={handleKey} tabIndex={-1}>
			<div id="drum-machine">
				<div id="pads">
					<button id="Q-pad" className="drum-pad" onClick={playHeater1}>
						Q
					</button>
					<button id="W-pad" className="drum-pad" onClick={playHeater2}>
					
						W
					</button>
					<button id="E-pad" className="drum-pad" onClick={playHeater3}>
					
						E
					</button>
					<button id="A-pad" className="drum-pad" onClick={playHeater4}>
					
						A
					</button>
					<button id="S-pad" className="drum-pad" onClick={playHeater6}>
					
						S
					</button>
					<button id="D-pad" className="drum-pad" onClick={playDsc_Oh}>
					
						D
					</button>
					<button id="Z-pad" className="drum-pad" onClick={playKick_n_Hat}>
					
						Z
					</button>
					<button id="X-pad" className="drum-pad" onClick={playRP4_KICK_1}>
					
						X
					</button>
					<button id="C-pad" className="drum-pad" onClick={playCev_H2}>
					
						C
					</button>
				</div>
				<div id="display">
					<div className="control-item">{currSample}</div>
					<div className="control-item">
						Volume: {Math.round(volVal * 10)}
						<button className="volume-button" onClick={incrVol}>
							+
						</button>
						<button className="volume-button" onClick={decrVol}>
							-
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
