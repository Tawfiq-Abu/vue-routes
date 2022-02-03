<template>
  <div v-if="job">
    <h1>{{job.title}}</h1>
    <!-- the route object $route contains everything about the current route including the parameters -->
    <!-- accessing the params you use whatever name you gave it in our case id -->
    <!-- <p>The job id is {{ $route.params.id}}</p> -->
    <p>{{ id }}</p>
    <p>{{ job.detail }}</p>

  </div>
  <div v-else>
    <p>Loading job details</p>
  </div>
  

</template>

<script>
export default {
    // because we set props to be true in the index.js object for this route,
    // it'll accept and bind the param.id as a prop and we'd accept it here as a prop
    props:['id'],
    data (){
      return {
        job:null,
      }
    },
    // data(){
    //     return{
    //         // getting the id from the url and stroring it overhere
    //         id:this.$route.params.id
    //     }
    // }
    mounted () {
        fetch('http://localhost:3000/jobs/'+ this.id)
            .then(res => res.json())
            .then(data => this.job=data)
            .catch(err => console.log(err.message))

    }

}
</script>

<style>

</style>