<template>
    <div class="d-flex justify-content-center jumbotron">
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <div class="card-body">
            <h4 class="card-title">Add A Task...</h4>
            <p class="card-text"> 
                <form @submit.prevent="saveTask">
                    <label for="taks">Task: </label>
                    <input type="text" name="task" v-model="task.title"/>
                    <br>
                    <br>
                    <label for="details">Details: </label>
                    <textarea name="details" rows="4" cols="30" v-model="task.details"></textarea>
                    <input type="submit" name="submit" value="Submit"/>
                </form>
            </p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['addTask'],
  data() {
    return {
        task:{
            title: '',
            details: ''
        },
    }
  },
  methods: {
      saveTask() {
          this.addTask(this.task)
          this.task = {
            title: '',
            details: ''
          }
      }
  }
};
</script>

<style scoped>
form, jumbotron {
    display: inline-block;
}
</style>

