<template>
    <!-- container for all cards -->
    <div class="container w-100 mx-auto flex flex-col">
        <section v-if="errored" class="m-5">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
      <!-- card -->
      <div v-else class="flex flex-col md:flex-row overflow-hidden bg-white rounded-md shadow-xl mt-4 w-100" v-for="comment of comments" :key="comment.id">
        <!-- media -->
        <div class="w-auto md:w-2/2">
          <img class="inset-0" src="https://picsum.photos/id/1/160/160" />
        </div>
        <!-- content -->
        <div class="w-full py-4 px-6 bg-gray-600 flex flex-col">
          <h3 class="text-base leading-tight truncate text-yellow-300">{{ comment.name }}</h3>
          <p class="mt-2 text-sm">
            {{comment.body}}
          </p>
          <p class="text-sm mt-2">
            {{comment.email}}
          </p>
        </div>
      </div><!--/ card-->
    </div><!--/ flex-->

</template>

<script>
import axios from "axios";
export default {
    name:"PostComment",
    data(){
     return{
        id:this.$route.params.id,
        errored:"",
        comments:[]
     }   
    },    
    created(){
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
    .then(response => {
        this.comments = response.data
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