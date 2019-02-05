<template>
<div class="col-full">
  <h1> welcome to the forum </h1>
  <ThreadList :threads="Object.values(threads)"/>
</div>
</template>

<script>
import sourceData from '@/source'
import ThreadList from './ThreadList'
console.log(sourceData) 
export default {
  name: 'HelloWorld',
  components: {
    ThreadList
  },
  data () {
    return {
      threads: Object.values(sourceData.threads),
      posts:sourceData.posts,
      users:sourceData.users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
