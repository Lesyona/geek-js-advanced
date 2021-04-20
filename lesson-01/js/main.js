const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title = 'Товар без названия', price = 0) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list = []) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    // Запятая добавлялась из-за того, что массив выводился целиком, как есть. Элементы разделены запятыми, получаем такой результат
    productList.forEach(product => {
        document.querySelector('.products').insertAdjacentHTML('beforeend', product);
    })
}

renderProducts(products);
