<template>
  <div class="center">
    <el-header>
      <img src="../../assets/img/book-logo.jpg" style="width: 150px;height: 80px" alt="看不到">
    </el-header>
    <el-main style="margin-top: 55px">
      <img src="../../assets/img/book-1.png" style="width: 55%;height: 55%;display: inline" alt="看不到">
      <div class="center-right">
        <el-card shadow="never">
          <p style="font-size: 18px">密码登录</p>
          <div class="login-form">
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm"
                     class="demo-loginForm">
              <el-input style="width: 100px;display: block" prefix-icon="iconfont icon-user" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
              <el-input style="width: 100px;" prefix-icon="iconfont icon-user" type="password" v-model="loginForm.password"></el-input>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
        <!--        用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>-->
        <!--        <br><br>-->
        <!--        密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>-->
        <!--        <br><br>-->
        <!--        <button v-on:click="login">登录</button>-->
      </div>
    </el-main>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

export default {
  name: 'login',
  // eslint-disable-next-line vue/no-unused-components
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios.post('/login', {
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then(successResponse => {
        if (successResponse.data.code === 200) {
          this.$router.replace({ path: '/' })
        }
      })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  /*@import ‘font-awesome/css/font-awesome.min.css’*/
  .center
    margin auto 4%
  .center-right
    width 200px
    display inline
</style>
