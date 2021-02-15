/**
 * https://www.npmjs.com/package/faker
 * https://www.npmjs.com/package/json-server
 */
const faker = require('faker');
const format = require('date-fns/format');

/**
 * List: http://localhost:3004/api/users
 * Single: http://localhost:3004/api/users/3
 * Pagination: http://localhost:3004/api/users?_page=3&_limit=10
 * Sorting: http://localhost:3004/api/users?_sort=firstName&_order=desc
 * Full-text search: http://localhost:3004/api/users?q=questioning
 */
function generateUserById(id) {
  const createdAt = faker.date.past();
  const expiredAt = faker.date.future();
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
    createdAt: {
      v: createdAt,
      f: format(createdAt, 'dd/MM/yyyy')
    },
    expiredAt: {
      v: expiredAt,
      f: format(expiredAt, 'dd/MM/yyyy')
    }
  };
}

module.exports = () => {
  const data = { users: [] };

  // Create users
  for (let i = 0; i < 256; i++) {
    data.users.push(generateUserById(i + 1));
  }

  return data;
};
