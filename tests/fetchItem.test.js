require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se `fetchItem` é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('Testa se `fetch` foi chamada ao executar a função `fetchItem` com o argumento do item "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  })

  it('Verifica se, ao chamar a função `fetchItem` com o argumento `MLB1615760527`, a função fetch utiliza o endpoint esperado', async () => {
    await fetchItem('MLB1615760527')
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  })

  it('Verifica se, o retorno da função `fetchItem` com o argumento `MLB1615760527` é a estrutura de dados esperada', async () => {
    const actual = await fetchItem('MLB1615760527');
    expect(actual).toEqual(item);
  })

  it('Testa se, ao chamar a função `fetchItem` sem argumento, retorna o erro esperado', async () => {
    const error = 'You must provide an url';
    expect(await fetchItem()).toEqual(new Error(error));
  })
});
