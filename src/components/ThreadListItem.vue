<template>
    <div class="thread">
        <div>
            <p>
                <!-- <router-link :to="{name:'ThreadShow', params: {id: thread['.key']}}" > -->
                <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}" >
                    {{thread.title}}
                </router-link>
            </p>
            <p class="text-faded text-xsmall">
                by <a href="#">{{user.name}}</a>, {{thread.publishAt}}.
            </p>
        </div> 
        <div class="activity">
            <p class="replies-count">{{repliesCount}} replies</p>
        </div>
    </div>    
</template>
<script>
import sourceData from '@/source'
export default {
    props:{
        thread:{
            require:true,
            type: Object
        }
    },
    computed:{
        repliesCount(){
            return Object.keys(this.thread.posts).length - 1
        },
        user(){
            return sourceData.users[this.thread.userId]
        }
    }
}
</script>
