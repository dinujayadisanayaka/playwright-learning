import { test, expect } from '@playwright/test';

const headers = {
  'x-api-key': 'reqres_b482e96bf08543d8bea899ccef227da6'
};

test.describe('User API tests', () => {
test('CREATE then GET user flow', async ({ request }) => {

  // 1. CREATE USER
  const createResponse = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'Toyin',
      job: 'QA Engineer'
    },headers
  });

  expect(createResponse.status()).toBe(201);

  const createBody = await createResponse.json();

  const userId = createBody.id;

  console.log('Create Response:', createBody);

  console.log('Created user ID:', userId);

  // 2. GET USER (conceptual - ReqRes is fake data source)
  const getResponse = await request.get(`https://reqres.in/api/users/${userId}`, {
    headers
  });

  console.log(await getResponse.json());
  
});

test('Update the user', async ({ request }) => {
    const updateResponse = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: 'Toyin',
            job: 'Senior QA Engineer'
        },
        headers
    });

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();
    console.log('Update Response:', updateBody);
});

test('delete user', async ({ request }) => {
    const deleteresponse = await request.delete('https://reqres.in/api/users/2', {
        headers
    });
    expect(deleteresponse.status()).toBe(204);
});

});
