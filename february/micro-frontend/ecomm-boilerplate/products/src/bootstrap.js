import faker from "faker";

const mount = (el) => {
  // the goal is to take a reference to a html ele
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// right now, if we ran this file in the browser it would throw a lot of errors as most browsers dont support imports like this
// which is where webpack comes into play

// Situation #1
// running in isolation
// were using local index.html file which has an id of dev-products
// we want to immediately render products string in this continer

/**
 * to make sure this works in isolation also, first we need to make sure we are running in dev mode
 */

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}
// Situation #2
// running in prod through container
// were using container index.html and there is NO guarantee that a container with #dev-products exists
// we shouldnt render the item IMMEDIATELY
// so we need to write code to handle both situations

/**
 * rather than guessing where the container might display the products etc, what if the container wants to show it upon a button click? or on a different page
 * thats why we let the container handle where to display it, and hence we export this fn
 * and we must now, go to the container and import it
 */
export { mount };
