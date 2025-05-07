export async function getIndicadores() {
	const res = await fetch('https://mindicador.cl/api');
	return res.json();
  }
  
  export async function getIndicador(indicador) {
	const res = await fetch(`https://mindicador.cl/api/${indicador}`);
	return res.json();
  }
  
  export async function getIndicadoresPorFecha(fecha) {
	const res = await fetch(`https://mindicador.cl/api/${fecha}`);
	return res.json();
  }
  