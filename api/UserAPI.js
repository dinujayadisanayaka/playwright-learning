export class UserAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = 'https://reqres.in/api/users';
        this.headers = {
            'x-api-key': 'reqres_b482e96bf08543d8bea899ccef227da6'
        };
    }

    async getUserById(userId) {
        return await this.request.get(`${this.baseURL}/${userId}`, {
            headers: this.headers
        });
    }

    async createUser(userData) {
        return await this.request.post(`${this.baseURL}`,
            {
                data: userData,
                headers: this.headers
            });

    }

    async updateUser(userId, userData) {
        return await this.request.put(`${this.baseURL}/${userId}`, {
            data: userData,
            headers: this.headers
        });
    }

    async deleteUser(userId) {
        return await this.request.delete(`${this.baseURL}/${userId}`, {
            headers: this.headers
        });
    }
}