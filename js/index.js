// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let priceElement = product.querySelector('.price span');
  let quantityElement = product.querySelector('.quantity input');

  let price = parseFloat(priceElement.textContent);
  let quantity = parseInt(quantityElement.value);

  let subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');

  let totalValue = 0;

  products.forEach((product) => {
    const subtotal = updateSubtotal(product);
    totalValue += subtotal;
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const productRow = target.closest('.product');

  if (productRow) {
    productRow.remove();
  }
  calculateAll();
}

//... your code goes here
window.addEventListener('load', () => {
  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  console.log(removeProductBtn);

  removeProductBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});

// ITERATION 5


function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  
  console.log(nameInput)

  const name = nameInput.value;
  const price = parseFloat(priceInput.value);

  if (!name || price <= 0 || isNaN(price)) {
    alert('Please enter valid product name and price');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
  <td class="name">
            <span>${name}</span>
          </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
`;

  const cart = document.querySelector('#cart tbody');
  cart.appendChild(newRow);

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
  nameInput.value = '';
  priceInput.value = '0';
}
function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');

  if (productRow) {
    productRow.remove();
  }
  calculateAll();
}
  function calculateAll()
   {
    const products = document.querySelectorAll('.product');
    let totalValue = 0;

    products.forEach(product => {
      const subtotal = updateSubtotal(product);
      totalValue += subtotal;
    });
    document.querySelector('#total-value span').textContent = totalValue;
  }

  function updateSubtotal(product) {
    const priceElement = product.querySelector('.price span');

    const quantityElement = product.querySelector('.quantity input');
    const price = parseFloat(priceElement.textContent);
    const quantity = parseInt(quantityElement.value);

    const subtotal = price * quantity;
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.textContent = subtotal.toFixed(2);

    return subtotal;
  }


window.addEventListener('load', () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
