<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
      <div class="card-body text-center">
        <h4 class="card-title text-center faded">Here's what you've done!</h4>
        <div v-if="doneTasks.dones[0]">
          <router-link class="btn btn-primary btn-md another" to="/ToDo">Finish Another!</router-link><br>
          <ul v-for="doneTask in doneTasks.dones" :key="doneTask.id" class="text-left">
            <div v-if="doneTask.date">
              <li>{{doneTask.title}} <div class="faded">{{doneTask.date}}</div></li>
            </div>
            <div v-else>
              <li>{{doneTask.title}}</li>
            </div>
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
  name: "Done",
  data() {
    return{
      doneTasks:[],
      doneTask:{
        id: '',
        title: '',
        details: '',
        date: ''
      },
    }
  },

  props: ['ApiUrl'],  

  mounted() {
    this.loadDoneTasks()
  },

  methods: {
    loadDoneTasks() {
      fetch(this.ApiUrl + "/done")
        .then(response => response.json())
        .then(response => this.doneTasks = response)
        .then(() => this.donetasks.reverse())
    }
  }  
}
</script>

<style scoped>
  .btn {
  border: 2px solid #444;
  }
  .another {
    margin-bottom: 10px
  }
  .faded {
  color:#444
}
</style>
