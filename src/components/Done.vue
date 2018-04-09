<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
      <div class="card-body">
        <h4 class="card-title">Here's what you've done!</h4>
        <div v-if="doneTasks[0]">
          <ul v-for="doneTask in doneTasks" :key="doneTask.title">
            <li>{{doneTask.title}}</li>
          </ul>
        </div>
        <div v-else>
          <p>Keep going! We've got your back!</p>
          <router-link class="btn btn-primary btn-sm" to="/ToDo">Finish A Task!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'doneTasks',
  ],
  name: "Done",
  data() {
    return{

    }
  }
}
</script>

<style scoped>
  .btn {
  border: 2px solid white;
}
</style>
