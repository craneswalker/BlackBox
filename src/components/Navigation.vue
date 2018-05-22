<template>
  <div class="d-flex justify-content-center">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <router-link id="aboutBtn" class="btn btn-primary btn-lg" to="/">About</router-link> 
      <router-link id="inputBtn" class="btn btn-primary btn-lg" to="/Input">New Task</router-link>
      <router-link id="todoBtn" class="btn btn-primary btn-lg" to="/ToDo">Do Task</router-link>
      <router-link id="doneBtn" class="btn btn-primary btn-lg" to="/Done">Finished Tasks</router-link>                
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
      return {
          
      }
  }
}
</script>

<style scoped>

</style>
