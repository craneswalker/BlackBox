<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-body">
      <h4 class="card-title text-center faded">Add A Task</h4>
      <div class="card-text text-center"> 
        <form @submit.prevent="addTask">
          <label for="task">Task: </label>
          <br>
          <input type="text" name="task" v-model="taskTitle"/>
          <br>
          <br>
          <label for="details">Details: </label>
          <textarea name="details" rows="4" cols="30" v-model="taskDetails"></textarea>
          <input class="btn btn-primary btn-md" type="submit" name="add" value="Add"/>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return{
      taskTitle: '',
      taskDetails: '',
      task:{
        id: '',
        title: '',
        details: '',
        date: ''
      },
    }
  },

  props: ['ApiUrl'],  

  methods: {

    addTask(){
      fetch(this.ApiUrl + '/todo', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.taskTitle,
          details: this.taskDetails
        })
      })
      this.taskTitle = ''
      this.taskDetails = ''
      this.reRoute()
    },

    reRoute(){
      this.$router.push('TaskAdded')
    }
  }
};
</script>

<style scoped>
form, jumbotron {
    display: inline-block;
}
.btn-md {
  border: 2px solid #444;
  margin-bottom: 10px
}
.faded {
  color:#444
}
</style>


