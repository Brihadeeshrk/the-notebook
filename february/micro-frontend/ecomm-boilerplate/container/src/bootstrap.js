// if you see, in products/webpack.config.js, inside exposes: we've set a key:value pair for which file we'd like to expose to the host
// and, that file key is what we see after the products/

import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

console.log("CONTAINER");

productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
