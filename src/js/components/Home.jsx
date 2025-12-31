import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [activo, setActivo] = useState('roja')
	const [tieneMorado, setTieneMorado] = useState(false)

	const alternarColor = () => {

		if (tieneMorado) {
			if (activo === 'morado') {
				setActivo('verde')
				return
			}
			if (activo === 'verde') {
				setActivo('amarillo')
				return
			}
			if (activo === 'amarillo') {
				setActivo('roja')
				return
			}
			if (activo === 'roja') {
				setActivo('morado')
				return
			}
		}

		if (activo === 'verde') {
			setActivo('amarillo')
		}
		if (activo == 'amarillo') {
			setActivo('roja')
		}
		if (activo == 'roja') {
			setActivo('verde')
		}
	}

	const addMorado = () => {

		if (!tieneMorado) {
			setTieneMorado(true)
			setActivo('morado')
			return
		}
		
		setTieneMorado(false)
	}

	return (
		<>
			<div className="container">
				<div className={`luz roja ${activo === "roja" ? "activo" : ""}`} onClick={() => setActivo("roja")}></div>
				<div className={`luz amarillo ${activo === "amarillo" ? "activo" : ""}`} onClick={() => setActivo("amarillo")}></div>
				<div className={`luz verde ${activo === "verde" ? "activo" : ""}`} onClick={() => setActivo("verde")}></div>
				{tieneMorado && (
					<div className={`luz morado ${activo === "morado" ? "activo" : ""}`} onClick={() => setActivo("morado")}></div>
				)}
			</div>
			<div className="d-flex justify-content-evenly">
				<button type="button" className="btn btn-success" onClick={alternarColor}>Alternar Color</button>
				<button type="button" className="btn btn-success" onClick={addMorado} >{tieneMorado ? 'Quitar color' : 'Añadir color'}</button>
			</div>
		</>
	);
};

export default Home;