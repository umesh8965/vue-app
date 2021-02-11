<template>
<div>
  <router-link to="/" class="w-auto p-7 py-2 rounded-sm text-gray-800 bg-yellow-300 my-2">Back</router-link>
    <div class="bg-gray-600 p-5 rounded-md mt-5">
      <h3 class="font-normal text-xl text-yellow-300 text-2xl">{{ posts.title }}</h3>
      <p class="text-sm font-light tracking-wide">{{ posts.body }}</p>      
  </div>
  <PostComment />
</div>
 
  
</template>

<script>
import axios from "axios";
import PostComment from "./PostComment"

export default {
  name:"PostDetail",
  components:{
    PostComment
  },
  data(){
    return {
        posts: [],
      id:this.$route.params.id,
    }
  },    
  created(){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    .then(response => {
        this.posts = response.data
    })
    .catch(e => {
        this.errored = true;    
        console.log(e + " =========== " + this.errored)   
    })
  }
}
</script>

<style>

</style>