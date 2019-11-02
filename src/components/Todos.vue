<template>
  <div id="tile-container" class="tile is-ancestor">
    <div v-for="todo in allTodos" :key="todo.id">
      <div class="tile tile-card">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-warning">
            <header class="tile-header">
              <p class="tile-title">{{todo.title}}</p>
            </header>
            <section>
              <p class="tile-content">{{todo.msg}}</p>
            </section>
            <footer class="tile-footer">
              <b-button
                class="button"
                type="is-danger"
                @click="deleteTile(todo.id)"
                icon-right="delete"
              />
            </footer>
          </article>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  data: function() {
    return {
      isLoading: true
    };
  },
  methods: {
    ...mapActions(["getTodos", "deleteTodo"]),
    deleteTile(id) {
      this.$store.dispatch("deleteTodo", id).then(() => {
        if (this.allTodos.length == 0) {
          this.notification();

        }
      });
    },
    notification() {
      this.$buefy.notification.open({
        duration: 10000,
        message: `You have no todos, make one!`,
        position: "is-bottom-left",
        type: "is-info",
        hasIcon: true
      });
    }
  },
  created() {
    this.$store.dispatch("getTodos", 10).then(() => {
      this.isLoading = false;
    });
  }
};
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

div.notifaction-container {
  position: fixed !important;
  bottom: 10px;
  left: 10px;
  width: 300px !important;
}

div.tile.is-ancestor:last-child {
  margin-bottom: 0px !important;
}

.tile-card {
  width: 400px;
}

article.tile {
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.15);
}

.tile-title {
  font-size: 20px;
  font-weight: bold;
}

.tile-title::first-letter {
  text-transform: uppercase;
}

.tile-header {
  min-height: 32px;
  padding-bottom: 10px;
}

.tile-footer {
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.button:active {
  transform: scale(0.9);
}
.empty-img {
  background-image: url(../assets/empty.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 250px;
}

.empty-img::after {
  content: "No tiles...";
  font-style: italic;
  position: absolute;
  margin-top: 20px;
}
</style>