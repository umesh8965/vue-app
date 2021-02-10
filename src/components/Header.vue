<template>
    <nav id="nav" class="px-16 py-6 bg-gray-800">
        <div class="container md:mx-auto">
            <div class="flex justify-start">
                <router-link class="" to="/">{{siteTitle}}</router-link>
            </div>            
            <div class="flex justify-end">
                <ul class="">
                    <li class="">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="ml-2">
                        <router-link class="nav-link" to="/about">About us</router-link>
                    </li>     
                </ul>   
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    name:"Header",
    data(){
        return{
            siteTitle:"Vue Discuss"
        };
    }
        
        
}
</script>