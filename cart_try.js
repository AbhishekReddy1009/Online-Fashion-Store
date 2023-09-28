fetch('cart.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const productList = document.getElementById('product-list');
    data.Products.forEach(product => {
      const listItem = document.createElement('li');
      const productImage = document.createElement('img');
      const productName = document.createElement('h3');
      const productCategory = document.createElement('p');
      const productPrice = document.createElement('p');

      productImage.src = product.image;
      productName.textContent = product.name;
      productCategory.textContent = product.category;
      productPrice.textContent = product.price;

      listItem.appendChild(productImage);
      listItem.appendChild(productName);
      listItem.appendChild(productCategory);
      listItem.appendChild(productPrice);

      productList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
