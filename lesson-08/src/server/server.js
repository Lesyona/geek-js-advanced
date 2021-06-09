const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');

app.use(express.json());

/**
 * Используем path дабы избежать проблем с относительными путями до файлов. Делаем их абсолютными.
 */
const catalogJSONPath = path.resolve(__dirname, './db/productsCatalog.json');
const cartJSONPath = path.resolve(__dirname, './db/productsCart.json');

/**
 * API Каталога
 */
app.get('/api/products', (request, response) => {
    fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
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
    fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
        if (err) {
            response.send(JSON.stringify({result: 0, text: err}));
        } else {
            response.send(data);
        }
    });
});

// Добавление нового товара в корзине
app.post('/api/cart', (request, response) => {
    fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
        if (err) {
            response.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            const cartData = JSON.parse(data);
            cartData.contents.push(request.body);
            fs.writeFile(cartJSONPath, JSON.stringify(cartData), (err) => {
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
    fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
        if (err) {
            response.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            const cartData = JSON.parse(data);
            const findProduct = cartData.contents.find(el => el.id_product === +request.params.id);
            findProduct.quantity += request.body.quantity;
            fs.writeFile(cartJSONPath, JSON.stringify(cartData), (err) => {
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
    fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
        if (err) {
            response.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            const cartData = JSON.parse(data);
            const findProduct = cartData.contents.find(el => el.id_product === +request.params.id);
            cartData.contents.splice(cartData.contents.indexOf(findProduct), 1)

            fs.writeFile(cartJSONPath, JSON.stringify(cartData), (err) => {
                if (err) {
                    response.send('{"result": 0}');
                } else {
                    response.send('{"result": 1}');
                }
            });
        }
    });
});

app.use(history());
app.use('/', express.static(path.resolve(__dirname, '../public')));

const port = process.env.PORT || 5555;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});