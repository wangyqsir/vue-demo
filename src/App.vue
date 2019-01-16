<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"><side-bar></side-bar></el-aside>
        <el-container>
          <el-main>
            <router-view/>
            <router-view name="b"></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import './assets/css/element-variables.scss'
import SideBar from '@/components/sidebar'
export default {
  name: 'App',
  components:{SideBar}
  // components: {BaseButton}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
html,body{
  padding: 0;
  margin: 0;
}
#app > .el-container {
  /*margin-bottom: 40px;*/
  min-height: 100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
