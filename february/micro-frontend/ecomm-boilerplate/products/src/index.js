import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;

// right now, if we ran this file in the browser it would throw a lot of errors as most browsers dont support imports like this
// which is where webpack comes into play
