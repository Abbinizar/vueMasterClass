<template>
<div>
<div v-for="thread in threads" class="col-large push-top">
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
</div>
  <!-- <div class="hello">
    <h1>welcome to the forum</h1>
    <div v-for="thread in threads">
      <h2>{{thread.title}}</h2>
      <div v-for="postId in thread.posts">
        <p>{{users[posts[postId].userId].name}}</p>
        <p>{{posts[postId].text}}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
import sourceData from '@/source'
console.log(sourceData) 
export default {
  name: 'HelloWorld',
  data () {
    return {
      threads: sourceData.threads,
      posts:sourceData.posts,
      users:sourceData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
