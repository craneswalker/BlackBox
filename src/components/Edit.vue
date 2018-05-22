<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
      <ul v-for="task in tasks.todos" :key="task.id">
        <li>
          {{task.title}} 
          <button class="btn btn-primary btn-sm" @click="hideShow($event)">Edit</button>
          <section class="hidden">
            <form @submit.prevent="updateTask(task)">
              <input class="hiddenId" type="text" name="taskId" v-model="task.id" value=""/>
              <label for="task">Update Task:</label>
              <input type="text" name="task" v-model="task.title" value=""/>
              <br>
              <label for="details">Details: </label>
              <textarea name="details" rows="4" cols="19" v-model="task.details" textContent="hello"></textarea>
              <input class="btn btn-primary btn-md" type="submit" name="add" value="Update"/>
            </form>
          </section>
        </li>
      </ul>
    </div>
    <section>
    </section>
  </div>  
</template>

<script>

export default {
  name:'Edit',
  props:[
    'tasks',
    'ApiUrl'
  ],
  data() {  
    return { 
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
  methods:{
    hideShow(){
      if(event.target.nextElementSibling.className == "hidden"){
        return event.target.nextElementSibling.className = ""
      }else if(event.target.nextElementSibling.className == ""){
        return event.target.nextElementSibling.className = "hidden"
      event.target.nextElementSibling.style.hidden = "hidden"
      }
    },
    updateTask(){
      const idUrl = event.target[0].value
      fetch(this.ApiUrl +"/todo/"+ idUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        title: event.target[1].value,
        details: event.target[2].value
        })
      })
      this.reRoute()
    },
    reRoute(){
      this.$router.push('TaskUpdated')
    }
  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 100%
}
.hidden {
  display: none;
}
i {
  color: rgb(26, 26, 26);	
}
.hiddenId {
  height: 0;
  width: 0
}
.btn-sm, .btn-md {
  border: 2px solid white;
  margin: 10px
}

</style>
