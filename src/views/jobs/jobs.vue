<template>
<h1>Jobs</h1>
<div v-for='job in jobs' :key="job.id" class="job">
    <!-- we can access the param by bringing a the param object -->
    <!-- the param takes an object with a key and a value pair as demonstrated below -->
    <router-link :to="{ name:'JobDetails',params:{id:job.id}}">
        <h2>{{ job.title}}</h2>
    </router-link>
    <p>{{ job.detail }}</p>
</div>
  
</template>

<script>
export default {
    data (){
        return {
            jobs:[
                {title:'backend developer',id:1,detail:'python with django'},
                {title:'frontend developer',id:2,detail:'javascript with vue'},
                {title:'UX designer',id:3,detail:'figma'}
            ]
        }
    }

}
</script>

<style>
    .job h2 {
        background: #f4f4f4;
        padding:20px;
        border-radius: 10px;    
        margin:10px auto;
        max-width:600px;
        cursor: pointer;
        color:#444;
    }
    .job h2:hover{
        background:#ddd;
    }
    .job a{
        text-decoration:none;
    }

</style>