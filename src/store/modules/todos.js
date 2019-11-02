import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async getTodos({ commit}, limit) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
    },
    deleteTodo({commit}, id) {
        const newTodos = state.todos.filter(todo => todo.id !== id);
        commit('setTodos', newTodos);
    },
    addTodo({commit},newTodo) {
        const {title, completed} = newTodo;
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed
        }).then(commit('addTodo', newTodo));
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    addTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations,
}