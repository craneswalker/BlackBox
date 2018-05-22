<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">Welcome to BlackBox</h1>
      <p class="lead d-flex justify-content-center">BlackBox is the simplest to-do app.</p>
      <hr class="my-4">
        <ul class="d-flex justify-content-center">
          <li>Plug in your tasks.</li>
          <li>See ONLY ONE.</li>
          <li>Get stuff done.</li>
        </ul>
      <hr class="my-4">
      <p class="lead d-flex justify-content-center">
        <router-link class="btn btn-primary btn-lg" to="/Input">Start Your List</router-link>
      </p>
    </div>
    <h2 class="d-flex justify-content-center">What is BlackBox?</h2>
    <p class="d-flex justify-content-center">Black-box theory is an observable change in something without information on how it was changed.</p>
    <p class="d-flex justify-content-center">In order to simplify your life, we have adopted this mentality.</p>
    <p class="d-flex justify-content-center">Put in as many tasks as you want.</p>
    <p class="d-flex justify-content-center">See only one task at a time.</p>
    <p class="d-flex justify-content-center"><em>Less stress.  Get more things done!</em></p>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.jumbotron {
  background: #1a1a1a;
}

h1 {
  color: white;
  text-align: center;
}

ul,li {
  display: inline-block;
  margin: 10px;
  padding: 0px;
}

.btn {
  border: 2px solid white;
}

</style>
