import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/userAPI';
import { newUser,updatedUser } from '../../testData/apiUsers';

test.describe('User API tests', () => {
    test('CREATE user', async ({ request }) => {
        const userApi = new UserAPI(request);

        const response = await userApi.createUser(newUser);
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.name).toBe(newUser.name);
        expect(responseBody.job).toBe(newUser.job);
    });
    

    test('GET user by ID', async ({ request }) => {
        const userApi = new UserAPI(request);
        const userId = 2; // Assuming this user ID exists in the API
        const response = await userApi.getUserById(userId);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody);
        expect(responseBody.data.id).toBe(userId);
        
    });

    test('UPDATE user', async ({ request }) => {
        const userApi = new UserAPI(request);
        const userId = 2;
    
        const response = await userApi.updateUser(userId, updatedUser);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.name).toBe(updatedUser.name);
        expect(responseBody.job).toBe(updatedUser.job);
    });

    test('DELETE user', async ({ request }) => {
        const userApi = new UserAPI(request);
        const userId = 2;
        const response = await userApi.deleteUser(userId);
        expect(response.status()).toBe(204);
    });
});