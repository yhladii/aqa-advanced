class ApiService {
    async getTodo() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error('Failed to get todo data');
        }

        return response.json();
    }

    async getUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
            throw new Error('Failed to get user data');
        }

        return response.json();
    }
}

class App {
    constructor() {
        this.api = new ApiService();
    }

    async run() {
        try {
            const results = await Promise.all([
                this.api.getTodo(),
                this.api.getUser()
            ]);

            console.log('Promise.all results:', results);

            const results2 = await Promise.race([
                this.api.getTodo(),
                this.api.getUser()
            ]);

            console.log('Promise.race result:', results2);

        } catch (error) {
            console.error('Error:', error.message);
        }
    }
}

const app = new App();
app.run();
