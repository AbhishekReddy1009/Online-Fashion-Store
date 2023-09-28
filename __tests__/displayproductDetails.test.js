import { displayProductDetails } from '../men';

describe('displayProductDetails', () => {
  let product;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <img id="product-image" />
        <h2 id="product-name"></h2>
        <p id="product-category"></p>
        <h3 id="product-price"></h3>
        <p id="product-description"></p>
      </div>
    `;

    product = {
      id: 1,
      name: 'Product 1',
      image: 'image1',
      category: 'Category 1',
      price: '100',
      description: 'Description 1',
    };
  });

  test('should display product details on the page', () => {
    displayProductDetails(product);

    expect(document.getElementById('product-image').src).toContain(product.image);
    expect(document.getElementById('product-name').textContent).toEqual(product.name);
    expect(document.getElementById('product-category').textContent).toEqual(product.category);
    expect(document.getElementById('product-price').textContent).toEqual(product.price);
    expect(document.getElementById('product-description').textContent).toEqual(product.description);
  });
});
