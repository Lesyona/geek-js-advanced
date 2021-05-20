const express = require('express');
const fs = require('fs');
const app = express();

/**
 * Активируем мидлвары
 */
app.use(express.json());
app.use('/', express.static('./public'));

/**
 * API Каталога
 */
app.get('/api/products', (request, response) => {
  fs.readFile('./server/db/productsCatalog.json', 'utf-8', (err, data) => {
    if (err) {
      response.send(JSON.stringify({result: 0, text: err}));
    } else {
      response.send(data);
    }
  });
});

/**
 * API Корзины
 */
app.get('/api/cart', (request, response) => {
  fs.readFile('./server/db/productsCart.json', 'utf-8', (err, data) => {
    if (err) {
      response.send(JSON.stringify({result: 0, text: err}));
    } else {
      response.send(data);
    }
  });
});

// Добавление нового товара в корзине
app.post('/api/cart', (request, response) => {
  fs.readFile('./server/db/productsCart.json', 'utf-8', (err, data) => {
    if (err) {
      response.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const cartData = JSON.parse(data);
      cartData.contents.push(request.body);
      fs.writeFile('./server/db/productsCart.json', JSON.stringify(cartData), (err) => {
        if (err) {
          response.send('{"result": 0}');
        } else {
          response.send('{"result": 1}');
        }
      })
    }
  });
});

// Изменяем количество товара
app.put('/api/cart/:id', (request, response) => {
  fs.readFile('./server/db/productsCart.json', 'utf-8', (err, data) => {
    if (err) {
      response.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const cartData = JSON.parse(data);
      const findProduct = cartData.contents.find(el => el.id_product === +request.params.id);
      findProduct.quantity += request.body.quantity;
      fs.writeFile('./server/db/productsCart.json', JSON.stringify(cartData), (err) => {
        if (err) {
          response.send('{"result": 0}');
        } else {
          response.send('{"result": 1}');
        }
      })
    }
  });
});

// Удаление товара
app.delete('/api/cart/:id', (request, response) => {
  fs.readFile('./server/db/productsCart.json', 'utf-8', (err, data) => {
    if (err) {
      response.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      const cartData = JSON.parse(data);
      const findProduct = cartData.contents.find(el => el.id_product === +request.params.id);
      cartData.contents.splice(cartData.contents.indexOf(findProduct), 1)

      fs.writeFile('./server/db/productsCart.json', JSON.stringify(cartData), (err) => {
        if (err) {
          response.send('{"result": 0}');
        } else {
          response.send('{"result": 1}');
        }
      });
    }
  });
});

/**
 * Запуск сервера
 * @type {string|number}
 */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
