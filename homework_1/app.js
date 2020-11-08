const { sortProducts, findMaxValue, modifyProducts } = require('./tasks');
const products = require('./Products.json');

function boot(products, key, value) {
   const sortedProducts = sortProducts(products, key, value);
   console.log('Sort:', sortedProducts);
   const modProd = modifyProducts(sortedProducts);
   console.log('Mod:', modProd);
   console.log(findMaxValue(modProd));
}

boot(products, 'type', 'socks');
