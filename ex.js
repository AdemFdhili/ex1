let products = [
    { id: 1,
      name: 'Product 1',
      price: 5 
    },

    { id: 2,
      name: 'Product 2',
      price: 8 
    },
    { id: 3,
      name: 'Product 3',
      price: 15 
    }
];

for (let i = 0; i < products.length; i++) {
    let p = products[i];
    console.log("product ID:",p.id);
    console.log("product name:",p.name);
    console.log("product price:",p.price);
    console.log('----------------------------------------');
}