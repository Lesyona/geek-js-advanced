const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// В ДЗ переделать на промисы не используя fetch
var getRequest = (url, callBack) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log('Error');
      } else {
        callBack(xhr.responseText);
      }
    }
  };
  xhr.send();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - -

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = []; // data
    this._allProducts = []; // массив экземпляров товаров на основе this._goods

    this._getGoods()
      .then((data) => {
        this._goods = data;
        this._render();
      });
  }

  sum() {
    return this._goods.reduce((sum, { price }) => sum + price, 0);
  }

  _getGoods() {
    // return fetch(`${API}/catalogData.json`)
    //    .then(result => result.json()).catch(error => console.log(error));

    let result = new Promise((resolve, reject) => {
      getRequest(`${API}/catalogData.json`, function (answer){
        if (answer)
          resolve(answer);
        else
          reject('Error in promise');
      })
    });

    return result.then(data => JSON.parse(data));
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id_product = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class Cart {
  constructor() {
    this._cartGoods = [];

    this._getCartGoods()
      .then((data) => {
        this._cartGoods = data;
      });
  }

  /**
   * Получает список товаров корзины
   */
  _getCartGoods() {
      return fetch(`${API}/getBasket.json`)
       .then(result => result.json()).catch(error => console.log(error));
  }

  /**
   * Добавляет товар в корзину
   * @param product Ссылка на продукт для добавления
   */
  addCartItem(product) {
    this._cartGoods.push(product);

    fetch(`${API}/addToBasket.json`)
      .then(result => result.json())
      .then(response => {
        if (response.result === 1)
          console.log('Product added');
      })
      .catch(error => console.log(error));
  }

  /**
   * Удаляет товар из корзины
   * @param product Ссылка на продукт для удаления
   */
  removeCartItem(product) {
    let productIndex = this._cartGoods.indexOf(product);
    this._cartGoods.splice(productIndex, 1);

    fetch(`${API}/deleteFromBasket.json`)
      .then(result => result.json())
      .then(response => {
        if (response.result === 1)
          console.log('Product removed');
      })
      .catch(error => console.log(error));
  }
}

const catalog = new ProductList();
const cart = new Cart();