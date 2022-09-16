const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  const actual = localStorage.getItem;
  it('Testa se, ao executar `getSavedCartItems`, o método ´localStorage.getItem` é chamado', () => {
    getSavedCartItems();
    expect(actual).toHaveBeenCalled();
  })

  it('Testa se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o `cartItems` como parâmetro', () => {
    getSavedCartItems('cartItem');
    expect(actual).toHaveBeenCalledWith('cartItems');
  })
});
