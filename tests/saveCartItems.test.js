const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const actual = localStorage.setItem;
  it('Testa se, ao executar `saveCartItems` com um `cartItem` como argumento, o método ´localStorage.setItem` é chamado', () => {
    saveCartItems('cartItem');
    expect(actual).toHaveBeenCalled();
  })

  it('Testa se, ao executar `saveCartItems` com um `cartItem` como argumento, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro a chave `cartItems` e o segundo sendo o valor passado como argumento para `saveCartItems`', () => {
    saveCartItems('cartItem');
    expect(actual).toHaveBeenCalledWith('cartItems', 'cartItem');
  })
});
