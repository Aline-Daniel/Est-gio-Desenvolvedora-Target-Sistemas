// Cálculo independente da interface, usado também nos testes.
export function calcularFaturamento(dados) {
  if (!Array.isArray(dados)) throw new TypeError('É necessário fornecer uma lista.');
  const valores = dados.map(item => Number(item?.valor));
  if (valores.some(valor => !Number.isFinite(valor) || valor < 0)) {
    throw new RangeError('Os valores de faturamento devem ser não negativos.');
  }
  const comFaturamento = valores.filter(valor => valor > 0);
  const total = comFaturamento.reduce((soma, valor) => soma + valor, 0);
  if (comFaturamento.length === 0) {
    return { total: 0, maior: 0, menor: 0, media: 0, diasAcimaDaMedia: 0, diasComFaturamento: 0 };
  }
  const media = total / comFaturamento.length;
  return {
    total,
    maior: Math.max(...comFaturamento),
    menor: Math.min(...comFaturamento),
    media,
    diasAcimaDaMedia: comFaturamento.filter(valor => valor > media).length,
    diasComFaturamento: comFaturamento.length,
  };
}
