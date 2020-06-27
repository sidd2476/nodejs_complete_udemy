const product = {
    label: 'Red notebook',
    stock: 42,
    price:201,
    salePrice: undefined,
}

const {label:stockLabel , price} = product;
console.log(stockLabel);
console.log(price);

const transaction = (type,{label,stock}) => {
    console.log(type,label,stock);
}

transaction('order',product);
