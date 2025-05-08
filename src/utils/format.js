export function formatValor(valor, unidad) {
	const formatted = valor.toLocaleString('es-CL');
	if (unidad.toLowerCase().includes('peso')) return `$${formatted}`;
	if (unidad.toLowerCase().includes('porcentaje')) return `${formatted}%`;
	if (unidad.toLowerCase().includes('dólar') || unidad.toLowerCase().includes('dolar')) return `US$${formatted}`;
	return `${formatted} ${unidad}`;
  }
  