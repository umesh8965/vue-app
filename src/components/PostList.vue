<template>
  <div class="post-list">
      <div class="mb-6" v-for="post of posts" :key="post.id"> 
          <div class="bg-gray-600 p-5 rounded-md shadow-md">  
              <h3 class="font-normal text-xl">                                  
                <router-link class="text-yellow-300 " :to="`/postdetail/${post.id}`" >
                    {{post.title}} 
                  </router-link></h3>
              <p class="text-sm tracking-wide">{{post.body}}</p>
          </div>
      </div>      
  </div>
  
</template>

<script>
export default {
    name:"PostList",
    props:['posts']
};
</script>

<style>

</style>