<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class=" d-flex card text-white bg-primary mb-3 justify-content-center" style="max-width: 20rem;">
      <div class="d-flex flex-column card-body justify-content-center">
        <h1 class="text-center d-flex card-title justify-content-center"> <i>Your Task Has Been Completed!</i></h1>
        <router-link class="btn btn-primary btn-md" to="/Input">Create Another Task</router-link>
        <router-link class="btn btn-primary btn-md" to="/ToDo">Finish Another Task</router-link>
        <router-link class="btn btn-primary btn-md" to="/Done">See Done Tasks</router-link>
      </div>
    </div>
  </div>
</template>

<script>
name: 'TaskFinished'
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.card {
  min-height: 311px;
  min-width: 320px;
}
.btn-md {
  border: 2px solid white;
  margin-bottom: 10px
}
</style>

