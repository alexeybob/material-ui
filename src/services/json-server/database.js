/**
 * https://www.npmjs.com/package/faker
 * https://www.npmjs.com/package/json-server
 */
// eslint-disable-next-line no-undef,@typescript-eslint/no-var-requires
const faker = require('faker');

/**
 * List: http://localhost:3004/api/users
 * Single: http://localhost:3004/api/users/3
 * Pagination: http://localhost:3004/api/users?_page=3&_limit=10
 * Sorting: http://localhost:3004/api/users?_sort=firstName&_order=desc
 * Full-text search: http://localhost:3004/api/users?q=questioning
 */
function generateUserById(id) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    id,
    name: `${firstName} ${lastName}`,
    firstName: firstName,
    lastName: lastName,
    gender: faker.name.gender(),
    email: faker.internet.email(),
    confirmed: faker.random.boolean(),
    createdAt: faker.date.past(),
    expiredAt: faker.date.future()
  };
}

// eslint-disable-next-line no-undef
module.exports = () => {
  const data = { users: [] };

  // Create users
  for (let i = 0; i < 256; i++) {
    data.users.push(generateUserById(i + 1));
  }

  return data;
};
