export class UserAPI {
    constructor(request) {
        this.request = request;
        this.baseURL = process.env.API_BASE_URL;
        this.headers = {
            'x-api-key': process.env.API_KEY
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