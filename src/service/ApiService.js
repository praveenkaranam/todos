import DataStore from "../utils"

const ApiService = {
    // get: async () => {
    //     return await fetch('/', { method: 'GET' })
    //         .then((response) => response.json())
    //         .catch((error) => Promise.reject(error))
    // }
    get: async (url, parms) => {
        return Promise.resolve(DataStore.get('todoList') ? DataStore.get('todoList') : []);
    },
    post: async (url, data) => {
        let todos = DataStore.get('todoList') ? DataStore.get('todoList') : [];
        todos.push(data)
        DataStore.set("todoList", todos);
        return Promise.resolve("Added");
    },
    delete: async (url, params) => {
        let todos = DataStore.get('todoList') ? DataStore.get('todoList') : [];
        console.log(params.id)
        
        todos.splice(params.id, 1)
        DataStore.set("todoList", todos);
        return Promise.resolve("Deleted");
    }
}

export default ApiService;