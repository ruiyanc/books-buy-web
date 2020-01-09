<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
<!--      <el-button @click="login1">Login</el-button>-->
    </div>
    <router-view/>
<!--    <components :is=""></components>-->
<!--    <el-dialog-->
<!--      title="提示"-->
<!--      :visible.sync="login2"-->
<!--      width="30%"-->
<!--      :before-close="handleClose">-->
<!--      <span>这是一段信息</span>-->
<!--      <span slot="footer" class="dialog-footer">-->
<!--    <el-button @click="login2 = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="login2 = false">确 定</el-button>-->
<!--  </span>-->
<!--    </el-dialog>-->
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     login2: false
  //   }
  // },
  // methods: {
  //   handleClose (done) {
  //     this.$confirm('确认关闭？')
  //       .then(_ => {
  //         done()
  //       })
  //       .catch(_ => {})
  //   },
  //   // eslint-disable-next-line vue/no-dupe-keys
  //   login1 () {
  //     this.login2 = true
  //   }
  // }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
