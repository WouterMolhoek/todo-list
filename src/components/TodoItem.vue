<template>
    <div class="tile tile-card" v-bind:class="{'is-complete':todo.completed}">
        <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning">
                <header class="tile-header">
                    <p class="tile-title">{{todo.title}}</p>
                </header>
                <footer class="tile-footer">
                    <p v-on:change="markComplete"><b-checkbox>Striped</b-checkbox></p>
                    <b-button class="button" @click="$emit('del-todo', todo.id)" type="is-danger" icon-right="delete" />
                </footer>
            </article>
        </div>
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
    .tile-card {
        width: 400px;
    }

    article.tile {
        box-shadow: 5px 5px 0px rgba(0,0,0,0.15);
    }

    .tile-title {
        font-size: 20px;
        font-weight: bold;
    }

    .tile-title::first-letter {
        text-transform: uppercase;
    }

    .tile-header {
        min-height: 64px;
        padding-bottom: 5px;
    }

    .tile-footer {
        height: 40px;
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