<template>
    <div class="home">
        <AddPost />
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <PostList :posts="posts" />  
        </section>          
    </div>
</template>
<script>
import axios from "axios";

import AddPost from "./AddPost";
import PostList from "./PostList";
export default {
    name:"Home",
    components:{
        AddPost,
        PostList
    },
    data(){
        return{
            posts: [],
            errored:false
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
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