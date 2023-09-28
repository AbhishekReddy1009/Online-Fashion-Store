async function fetchData(url, baseUrl) {
  const response = await fetch(new URL(url, baseUrl || window.location.href));
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Request to ${url} failed, status: ${response.status}`);
}
function displayMenProducts(data) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '<div class="row"></div>';
  const row = cardContainer.querySelector('.row');
  for (let i = 0; i < data["Products"].length && data["Products"][i].gender=='male'; i++) {
    let card = data["Products"][i];
    let cardHtml = createCardHtml(card);
    if (i % 3 === 0) {
      row.insertAdjacentHTML('beforeend', '<div class="row"></div>');
    }
    const cardRow = row.lastElementChild;
    cardRow.insertAdjacentHTML('beforeend', `<div class="col-4">${cardHtml}</div>`);
  }
}

function createCardHtml(card) {
  return `
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
}

function getProductById(id, data) {
  return data.Products.find(product => product.id === parseInt(id));
}

 function displayProductDetails(product) {
  const productImage = document.getElementById('product-image');
  productImage.src = product.image;

  const productName = document.getElementById('product-name');
  productName.textContent = product.name;

  const productCategory = document.getElementById('product-category');
  productCategory.textContent = product.category;

  const productPrice = document.getElementById('product-price');
  productPrice.textContent = product.price;

  const productDescription = document.getElementById('product-description');
  productDescription.textContent = product.description;
}


const menUrl = '/men.json';
fetchData(menUrl,window.location.origin)
  .then(data => displayMenProducts(data))
  .catch(error => console.error(error.message));

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');



fetchData(menUrl,window.location.origin)
  .then(data => {
    const product = getProductById(id, data);
    displayProductDetails(product);
  })
  .catch(error => console.error(error.message));

/*
fetch('/men.json')
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
    for (let i = 0; i < data["Products"].length && data["Products"][i].gender=='male'; i++) {
      let card = data["Products"][i];
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
  });*/