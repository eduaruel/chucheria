// let chuche = [
// 	['kikat', 'samba', 'cocosete', 'polvorosa'],
// 	['oreo', 'ruffles', 'dorito', 'twix'],
// 	['galleta maria', 'm&ms', 'lays', 'chicles'],
// 	['pringles', 'club social', 'torta', 'trululu'],
// ];

// console.log(chuche);
// for (let i = 0; i < 4; i++) {
// 	for (let j = 0; j < 4; j++) {
// 		console.log(chuche[i][j]);
// 	}
// }

console.log(chucheria);

const contenedorChu = document.querySelector('#resultado');
let opcion;
let clave;
let cambio;
let solicitar;
do {
	opcion = parseInt(
		prompt(
			'1. solicitar chucheria \n 2. mostrar chucheria \n 3.rellenar chucheria \n 4.apagar maquina ',
		),
	);
} while (opcion >= 5);

switch (opcion) {
	case 1:
		//soicitar chucheria
		console.log('solicitar chucheria');
		solicitar = prompt('indique la chucheria');
		console.log(solicitar);
		let arreglo = chucheria.some((i) => i.Nombre === solicitar);
		console.log(arreglo);
		if (arreglo) {
			contenedorChu.innerHTML += `<p>${solicitar}</p>`;
		} else {
			contenedorChu.innerHTML += `<p>Dulce no encontrada</p>`;
		}

		break;
	case 2:
		//mostrar chucheria
		console.log('mostrar chucheria');
		chucheria.forEach((i) => {
			const chu = document.createElement('p');
			chu.innerHTML = `${i.Nombre} - Precio $${i.precio}`;
			contenedorChu.appendChild(chu);
		});
		break;
	case 3:
		//rellenar chucheria
		console.log('rellenar chucheria');
		clave = prompt('indique su contrasena');
		console.log(clave);

		if (clave === 'Tec') {
			cambio = prompt('indique la chucheria  que quiere cambiar');
			let reemplazar = prompt('Coloque el dulce a cambiar ');
			console.log(cambio);
			let indexArr = chucheria.findIndex((i) => i.Nombre == cambio);
			console.log(indexArr);
			reemplazarChucherias = chucheria[indexArr].Nombre = reemplazar;
			let nuevaChucheria = chucheria.splice(indexArr, 1, reemplazarChucherias);
			nuevaChucheria.filter((i) => i.Nombre);
			chucheria.push(nuevaChucheria);
			let mostrarChucheria = document.createElement('p');
			mostrarChucheria.textContent = `Se elimino ${cambio} de la maquina de dulce y se agrego ${reemplazar}`;
			contenedorChu.appendChild(mostrarChucheria);
			let chucheriaNuv = document.createElement('p');
			chucheriaNuv.innerHTML = `${chucheria}`;
			console.log(chucheriaNuv.Nombre);
			contenedorChu.appendChild(chucheriaNuv);
		} else {
			console.log('contraseña invalida');
			const mostrar = document.querySelector('#resultado');
			mostrar.textContent = 'Contraseña Incorrecta';
			mostrar.classList.add('centro');
			contenedorChu.appendChild(mostrar);
		}
		break;
	case 4:
		//apagar maquina
		console.log('apagar maquina');
		break;
	default:
		alert('opcion incorrecta');
		break;
}
