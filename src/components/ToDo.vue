<template>
    <div class="d-flex justify-content-center jumbotron">
        <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <div class="card-body">
            <h4 class="card-title">What Next?</h4>
            <br>
            <br>
            <br>
            <h1 class="card-title"> 
                <i>*{{CurrentTasks[0].title}}</i>
            </h1>
            <button @click="taskToDone"></button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ToDo',
  props:[
      ['CurrentTasks'],
      'taskToDone',
  ],
  data() {
      return{

      }
  }
}
</script>

<style scoped>
    .card {
        height: 302px;
        width: 320px;
    }
</style>
