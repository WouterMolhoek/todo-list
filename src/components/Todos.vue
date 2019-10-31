<template>
    <div id="tile-container" class="tile is-ancestor" >
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
    #tile-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 50px;
        padding-bottom: 50px;
        min-height: 400px;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    div.tile.is-ancestor:last-child {
        margin-bottom: 0px !important;
    }
</style>