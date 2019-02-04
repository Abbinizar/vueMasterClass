<template>
<div  class="col-large push-top">
    <!-- <h1 v-for="thread in threads"></h1> -->
    <!-- <div> -->
  <h1> {{thread.title}} </h1>
  <div class="post-list">
    <div v-for="postId in thread.posts" class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
        <a href="#">
          <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
        </a>
        <p class="dekstop-only text-small">10</p>
      </div>
      <div class="post-content">
        <div>
          <p>{{posts[postId].text}}</p>
        </div>
      </div>
      <div class="post-date text-faded">
        {{posts[postId].publisedhAt}}
      </div>
    </div>
  </div>
</div>

</template>
<script>
import sourceData from '@/source'
export default {
    props:{
        id:{
            required: true,
            type: String
        }
    },
    data(){
        return{
            thread: sourceData.threads[this.id],
            posts:sourceData.posts,
            users:sourceData.users
        }
    }
}
</script>
