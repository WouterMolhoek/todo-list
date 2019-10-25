<template>
    <div class="tile is-ancestor" >
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
    props: ["todos"]   
}
</script>

<style scoped>
    div.tile.is-ancestor {
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>