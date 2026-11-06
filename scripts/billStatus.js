import { calcularFaturamento } from './calcularFaturamento.js';

export default async function billStatus() {
  const total = document.getElementById('total');
  const dayMost = document.getElementById('dayMost');
  const dayLeast = document.getElementById('dayLeast');
  const monthlyAvg = document.getElementById('monthlyAvg');
  try {
    const response = await fetch('./dados.json');
    if (!response.ok) throw new Error('Falha ao buscar os dados.');
    const dados = await response.json();
    const resumo = calcularFaturamento(dados);
    const formatar = valor => new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2, maximumFractionDigits: 2,
    }).format(valor);
    total.lastElementChild.textContent = formatar(resumo.total);
    dayMost.lastElementChild.textContent = formatar(resumo.maior);
    dayLeast.lastElementChild.textContent = formatar(resumo.menor);
    monthlyAvg.children[0].textContent = resumo.diasAcimaDaMedia;
  } catch (error) {
    console.error('Erro ao calcular faturamento:', error);
    if (monthlyAvg) monthlyAvg.children[0].textContent = 'Dados indisponíveis';
  }
}
