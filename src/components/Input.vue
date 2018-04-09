<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-body">
      <h4 class="card-title">Add A Task...</h4>
      <p class="card-text"> 
        <form @submit.prevent="saveTasks">
          <label for="task">Task: </label>
          <input type="text" name="task" v-model="task.title"/>
          <br>
          <br>
          <label for="details">Details: </label>
          <textarea name="details" rows="4" cols="30" v-model="task.details"></textarea>
          <input class="btn btn-primary btn-sm" type="submit" name="add" value="Add"/>
        </form>
      </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props:[
    'tasks',
    ],
  data() {
    return{
      task:{
        title: '',
        details: ''
      },
    }
  },
  methods: {
    saveTasks() {
      this.addTask(this.task)
      this.task = {
        title: '',
        details: ''
      }
    },
    addTask(task) {
      this.tasks.push(task)
    }

  }
};
</script>

<style scoped>
form, jumbotron {
    display: inline-block;
}
.btn {
  border: 2px solid white;
}
</style>

