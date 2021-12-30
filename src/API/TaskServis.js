import axios from "axios"

export default class TaskServic {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
        return response.data
    }
}