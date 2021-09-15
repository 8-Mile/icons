<!--
 * @Author: your name
 * @Date: 2020-09-21 13:59:02
 * @LastEditTime: 2020-10-09 16:07:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AK-FRONT-5.0e:\demo\t-icon\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div class="demo">
      <div>
        <icon-library value="iconfont icon-churukuan " />
      </div>
    </div> -->
    <icon-select v-model="icon" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      icon: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
