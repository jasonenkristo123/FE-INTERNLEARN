

    import axios from 'axios'

    const api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        timeout: 5000,
    })

    export const getUsers = async () => {
        try {
            const res = await api.get('/users')
            
            if (!res.data) {
                throw new Error('No data received')
            }
            return res.data

        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    export const getUserById = async (id: number) => {
        try {
            const res = await api.get(`/users/${id}`);
            if (!res.data) {
                throw new Error('No data received')
            }
            return res.data
        } catch (error) {
            console.error('Error fetching user by ID:', error)
            throw error
        }
    }

    export const createUser = async (userData: { name: string; email: string }) => {
        try {
            const res = await api.post('/users', userData);
            if (!res.data) {
                throw new Error('No data received')
            }
            return res.data
        } catch (error) {
            console.error('Error creating user:', error)
            throw error
        }
    }

    export const updateUser = async (id: number, userData: { name?: string; email?: string }) => {
        try {
            const res = await api.put(`/users/${id}`, userData);
            if (!res.data) {
                throw new Error('No data received')
            }
            return res.data
        } catch (error) {
            console.error('Error updating user:', error)
            throw error
        }
    }

    export const deleteUser = async (id: number) => {
        try {
            const res = await api.delete(`/users/${id}`);
            if (res.status !== 200) {
                throw new Error('Failed to delete user')
            }
            return res.data
        } catch (error) {
            console.error('Error deleting user:', error)
            throw error
        }
    }