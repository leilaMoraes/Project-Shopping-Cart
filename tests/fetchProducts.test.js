require('../mocks/fetchSimulator');
const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se `fetchProducts` é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('Verifica se o fetch é chamado ao executar a função `fetchProducts` com o argumento `computador`', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledTimes(1);
  })

  it('Verifica se, ao chamar a função `fetchProducts` com o argumento `computador`, a função fetch utiliza o endpoint esperado', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect( await fetchProducts('computador')).toBeCalledWith(endpoint);
  })

  it('Verifica se, o retorno da função `fetchProducts` com o argumento `computador` é a estrutura de dados esperada', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })

  it('Testa se, ao chamar a função `fetchProducts` sem argumento, retorna o erro esperado', async () => {
    const error = 'You must provide an url';
    expect(await fetchProducts()).toThrowError(error);
  })
});
