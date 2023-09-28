fetch('/women.json')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  })
  .then(data => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '<div class="row"></div>';
    const row = cardContainer.querySelector('.row');
    for (let i = 0; i < data["WomenProducts"].length; i++) {
      let card = data["WomenProducts"][i];
      let cardHtml = `
        <div class="card mb-4 my-card-class" style="width: 90%">
          <div class="card">
            <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
              <a href="details.html?id=${card.id}"><img src="${card.image}" alt="${card.name}" class="w-100"></a>
            </div>
            <div class="card-body">
              <a href="#" class="text-reset">
                <h5 class="card-title mb-3">${card.name}</h5>
              </a>
              <a href="#" class="text-reset">
                <p>${card.category}</p>
              </a>
              <h6 class="mb-3">${card.price}</h6>
            </div>
          </div>
        </div>
      `;
      if (i % 3 === 0) {
        row.insertAdjacentHTML('beforeend', '<div class="row"></div>');
      }
      const cardRow = row.lastElementChild;
      cardRow.insertAdjacentHTML('beforeend', `<div class="col-4">${cardHtml}</div>`);
    }
  })
  .catch(error => {
    console.error(error.message);
  });

function getProductById(id, data) {
  return data.Products.find(product => product.id === parseInt(id));
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('/men.json')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  })
  .then(data => {
    const product = getProductById(id, data);

    const productImage = document.getElementById('product-image');
    productImage.src = product.image;

    const productName = document.getElementById('product-name');
    productName.innerText = product.name;

    const productCategory = document.getElementById('product-category');
    productCategory.innerText = product.category;

    const productPrice = document.getElementById('product-price');
    productPrice.innerText = product.price;

    const productDescription = document.getElementById('product-description');
    productDescription.innerText = product.description;
  })
  .catch(error => {
    console.error(error.message);
  });