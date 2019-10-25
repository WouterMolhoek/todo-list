<template>
    <div class="tile is-ancestor" >
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'Todos',
    components: {
        TodoItem
    },
    props: ["todos"],
}
</script>

<style scoped>
    div.tile.is-ancestor {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: center;
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>