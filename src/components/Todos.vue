<template>
    <div id="tile-container" class="tile is-ancestor" >
        <div v-for="todo in allTodos" :key="todo.id">
            <div class="tile tile-card">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-warning">
                        <header class="tile-header">
                            <p class="tile-title">{{todo.title}}</p>
                        </header>
                        <footer class="tile-footer">
                            <b-button class="button" type="is-danger" @click="deleteTodo(todo.id)" icon-right="delete" />
                        </footer>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Todos',
    computed: mapGetters(['allTodos']),
    methods: {
        ...mapActions(['getTodos','deleteTodo'])
    },
    created() {
        this.getTodos(10);
    }
}
</script>

<style scoped>
    #tile-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: columns;
        padding-top: 50px;
        padding-bottom: 50px;
        min-height: 400px;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    div.tile.is-ancestor:last-child {
        margin-bottom: 0px !important;
    }

    .tile-card {
        width: 400px;
    }

    article.tile {
        box-shadow: 3px 3px 0px rgba(0,0,0,0.15);
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
        justify-content: flex-end;
        align-items: center;
    }

    .button:active {
        transform: scale(0.90);
    }
</style>