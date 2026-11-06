import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcularFaturamento } from '../scripts/calcularFaturamento.js';

test('ignora dias sem faturamento no cálculo da média', () => {
  assert.deepEqual(calcularFaturamento([
    { dia: 1, valor: 10 }, { dia: 2, valor: 0 }, { dia: 3, valor: 30 },
  ]), { total: 40, maior: 30, menor: 10, media: 20, diasAcimaDaMedia: 1, diasComFaturamento: 2 });
});
test('não divide por zero quando não houve faturamento', () => {
  assert.deepEqual(calcularFaturamento([{ dia: 1, valor: 0 }]), {
    total: 0, maior: 0, menor: 0, media: 0, diasAcimaDaMedia: 0, diasComFaturamento: 0,
  });
});
test('aceita lista vazia sem valores infinitos', () => {
  assert.equal(calcularFaturamento([]).media, 0);
});
test('rejeita números negativos, NaN e objeto em vez de lista', () => {
  assert.throws(() => calcularFaturamento([{ valor: -1 }]), RangeError);
  assert.throws(() => calcularFaturamento([{ valor: 'inválido' }]), RangeError);
  assert.throws(() => calcularFaturamento({ valor: 20 }), TypeError);
});
test('conta apenas dias acima da média (não iguais)', () => {
  const resumo = calcularFaturamento([{ valor: 4 }, { valor: 4 }, { valor: 10 }]);
  assert.equal(resumo.diasAcimaDaMedia, 1);
});
