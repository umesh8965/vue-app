<template>
    <div class="add-post">
          <button @click="handleAddClick" class="w-auto p-7 py-2 rounded-sm text-gray-800 bg-yellow-300 my-2">Create Post</button>
          <div v-if="addForm" class="my-2 py-2">
              <form @submit.prevent="handleAddPost" class="mt-6">
                    <div class="my-5 text-sm">
                        <input v-model="title" type="text" id="posttitle" class="rounded-sm px-4 py-3 mt-3 text-gray-800 bg-gray-300 w-full" placeholder="Post Title" />
                    </div>
                    <div class="my-5 text-sm">
                        <textarea v-model="body" id="postdetail" class="rounded-sm px-4 py-3 mt-3  bg-gray-300 text-gray-800 w-full" placeholder="Post Description"></textarea>                  
                    </div>
                    <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-auto">Add Post</button>
                </form>
          </div>
    </div>
</template>

<script>
export default {
    name:"AddPost",
    data(){
        return{
            addForm: false,
            title:"",
            body:""
        }
    },
    methods:{
        handleAddClick(){
            this.addForm = true
        },
        handleAddPost(){
            const newPost = {
                title: this.title,
                body: this.body
            }
            this.$emit("addPostEmit",newPost)    
            this.title="",
            this.body=""       
        }
       }
}
</script>

<style>

</style>