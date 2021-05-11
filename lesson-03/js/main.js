const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// В ДЗ переделать на промисы не используя fetch
var getRequest = (url) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject('Error');
        } else {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - -

class ProductList {
  constructor(cart, container = '.products') {
    this.container = container;
    this._goods = []; // data
    this.cart = cart;
    this._allProducts = []; // массив экземпляров товаров на основе this._goods

    this._getGoods()
      .then((data) => {
        this._goods = data;
        this._render();
      });

    this.init();
  }

  init() {
    document.querySelector(this.container).addEventListener('click', this.cart.addCartItem);
  }

  sum() {
    return this._goods.reduce((sum, {price}) => sum + price, 0);
  }

  _getGoods() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json()).catch(error => console.log(error));

    // Для промиса:
    // return getRequest(`${API}/catalogData.json`).then(data => JSON.parse(data));
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
  constructor(product, img = 'https://via.placeholder.com/200x150') {
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
  constructor(container = '.cart-block') {
    this._cartGoods = [];
    // this.cartRendered = '';
    this.container = container;

    this._getCartGoods()
      .then((data) => {
        this._cartGoods = data.contents;
        this.renderCart();
      });

    this.init();
  }

  init() {
    document.querySelector('.btn-cart').addEventListener('click', this.toggleCart);
    document.querySelector(this.container).addEventListener('click', this.removeCartItem);
  }

  /**
   * Управляет видимостью корзины
   */
  toggleCart = () => {
    let cartBlock = document.querySelector(this.container);
    cartBlock.classList.toggle('invisible');
  }

  /**
   * Получает список товаров корзины
   */
  _getCartGoods() {
    return fetch(`${API}/getBasket.json`)
      .then(result => result.json()).catch(error => console.log(error));
  }

  renderCartItem(product) {
    return `<div class="cart-item" data-id="${product.id_product}">
              <div class="product-bio">
                <img src="https://via.placeholder.com/50x100" alt="Some image">
                <div class="product-desc">
                  <p class="product-title">${product.product_name}</p>
                  <p class="product-quantity">Количество: ${product.quantity}</p>
                  <p class="product-single-price">${product.price} за ед.</p>
                </div>
              </div>
              <div class="right-block">
                  <p class="product-price">${product.quantity * product.price} ₽</p>
                  <button class="del-btn" data-id="${product.id_product}">&times;</button>
              </div>
            </div>`;
  }

  renderCart() {
    const cartBlock = document.querySelector(this.container);
    cartBlock.innerHTML = '';
    let cartRendered = '';

    this._cartGoods.forEach(product => {
       cartRendered += this.renderCartItem(product);
    });

    cartBlock.insertAdjacentHTML('afterbegin', cartRendered);
  }

  /**
   * Добавляет товар в корзину
   * @param product Ссылка на продукт для добавления
   */
  addCartItem = (event) => {
    if (event.target.closest('.buy-btn')) {
      fetch(`${API}/addToBasket.json`)
        .then(result => result.json())
        .then(response => {
          if (response.result === 1) {
            let productId = +event.target.closest('.product-item').dataset.id;
            let product = this._cartGoods.find(product => product.id_product === productId);

            if(this._cartGoods.includes(product)) {
              product.quantity++;
            } else {
              this._cartGoods.push(product);
            }
            this.renderCart();
          }
        })
        .catch(error => console.log(error));
    }
  }

  /**
   * Удаляет товар из корзины
   * @param product Ссылка на продукт для удаления
   */
  removeCartItem = (event) => {
    if (event.target.closest('.del-btn')) {
      fetch(`${API}/deleteFromBasket.json`)
        .then(result => result.json())
        .then(response => {
          if (response.result === 1) {

            let productId = +event.target.dataset.id;
            let product = this._cartGoods.find(product => product.id_product === productId);

            if (product.quantity > 1) {
              product.quantity--;
            } else {
              let productIndex = this._cartGoods.indexOf(product);
              this._cartGoods.splice(productIndex, 1);
            }
            this.renderCart();
          }
        }).catch(error => console.log(error));
    }
  }
}

const catalog = new ProductList(new Cart());
// const cart = new Cart();