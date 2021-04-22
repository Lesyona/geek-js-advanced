class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this._goods = []; // data
    this._allProducts = []; // массив экземпляров товаров на основе this._goods

    this._fetchGoods();
    this._render();
  }

  _fetchGoods() {
    this._goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  _render() {
    const block = document.querySelector(this.container);

    for (const product of this._goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  getTotalPrice() {
    let totalPrice = 0;

    this._allProducts.forEach(product => {
      totalPrice += product.price;
    });

    return totalPrice;
  }
}

class ProductItem {
  constructor(product, img=`https://picsum.photos/200/150?random=${product.id}`) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

class Cart {
  // addCartItem() - добавить товар в корзину
  // deleteCartItem() - удалить товар из корзины
  // changeProductQuantity() - изменить кол-во товара в корзине
  // getTotalCount() - вернуть общее количество товаров в корзине
  // getTotalPrice() - вернуть стоимость всех товаров в корзине
}

class CartItem {
  // Я бы не делала отдельный класс для элемента корзины, если честно. Но учитывая его наличие, возможно первые три метода из корзины логичнее будет перенести сюда, не уверена.

  // render() - отрендерить товар в корзине
}

const catalog = new ProductList();
console.log(catalog.getTotalPrice());