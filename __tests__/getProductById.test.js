import { getProductById } from '../men';

describe('getProductById', () => {
  test('should return the product with the given id', () => {
    const mockData = {
      Products: [
        { id: 1, name: 'Product 1', image: 'image1', category: 'Category 1', price: '100', description: 'Description 1' },
        { id: 2, name: 'Product 2', image: 'image2', category: 'Category 2', price: '200', description: 'Description 2' },
        { id: 3, name: 'Product 3', image: 'image3', category: 'Category 3', price: '300', description: 'Description 3' },
      ],
    };
    const expectedProduct = {
      id: 2,
      name: 'Product 2',
      image: 'image2',
      category: 'Category 2',
      price: '200',
      description: 'Description 2',
    };
    const productId = 2;
    const result = getProductById(productId, mockData);
    expect(result).toEqual(expectedProduct);
  });

  test('should return undefined if the product id is not found', () => {
    const mockData = {
      Products: [
        { id: 1, name: 'Product 1', image: 'image1', category: 'Category 1', price: '100', description: 'Description 1' },
        { id: 2, name: 'Product 2', image: 'image2', category: 'Category 2', price: '200', description: 'Description 2' },
        { id: 3, name: 'Product 3', image: 'image3', category: 'Category 3', price: '300', description: 'Description 3' },
      ],
    };

    const productId = 5;
    const result = getProductById(productId, mockData);
    expect(result).toBeUndefined();
  });
});
