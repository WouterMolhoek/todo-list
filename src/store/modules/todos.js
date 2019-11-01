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
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
};

export default {
    state,
    getters,
    actions,
    mutations,
}