<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <p v-on:change="markComplete"><b-checkbox type="checkbox">{{todo.title}}</b-checkbox></p>
        <b-button class="button" @click="$emit('del-todo', todo.id)" type="is-danger" icon-right="delete" />
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 15px;
        border-bottom: 1px #ccc dotted;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .is-complete {
        text-decoration: line-through;
    }

    .button:active {
        transform: scale(0.90);
    }
</style>