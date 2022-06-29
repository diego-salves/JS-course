//desestruturação , extrai dados do array para variaveis

const numbers = [1, 2, 3, 4, 5, 6, 7];

const [num1, num2, num3, num4, num5] = numbers;

console.log(num1, num2, num3, num4, num5);

//Podemos descartar valores

const [n1, , n3, , n5] = numbers;

console.log(n1, n3, n5);

//valor default caso não haja no container

const [nu1, nu2, nu3, nu4 = 40, nu5 = 99, , , n8 = 8, , , n10 = null] = numbers;

console.log(nu1, nu2, nu3, nu4, nu5, n8, n10);

//with objects

const product = {
    name: "Notebook",
    price: 4.99,
};

const { name, price } = product;
console.log(name, price);