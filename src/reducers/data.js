import { faker } from '@faker-js/faker';

const products = [...Array(5)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    desc: faker.lorem.paragraphs(1),
    price: faker.commerce.price(),
    image: faker.image.fashion(450, 300, true),
    inStock: faker.helpers.arrayElement([0, 2, 3, 4, 5, 9]),
    category: faker.helpers.arrayElement(['Jeans', 'T-shirt', 'Sandal','Shoes']),
    fastDelivery: faker.helpers.arrayElement(['Fast Delivery', '3 Days Delivery', '1 Weeks Delivery']),
    ratings: Math.floor(Math.random() * 6)
    
}));

export default products;