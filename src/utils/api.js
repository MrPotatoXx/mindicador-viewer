export async function getIndicadores() {
	const res = await fetch("https://mindicador.cl/api");
	if (!res.ok) throw new Error("Error al obtener los indicadores");
	return await res.json();
  }

  export async function getIndicador(indicador) {
	const res = await fetch(`https://mindicador.cl/api/${indicador}`);
	if (!res.ok) throw new Error("Error al obtener el indicador");
	return await res.json();
  }

  export async function getIndicadorPorFecha(indicador, fecha) {
  const res = await fetch(`https://mindicador.cl/api/${indicador}/${fecha}`);
  if (!res.ok) throw new Error("Error al obtener el indicador");
  return await res.json();
}