<template>
  <div class="center">
    <el-header>
      <img src="@/assets/img/b2.jpg" style="margin-left: 30px; width: 150px;height: 100px" alt="看不到">
      <span style="float: right;margin: 30px 80px auto auto; font-size: 14px">
        <router-link to="/index" style="color: #646464">返回首页</router-link>
      </span>
    </el-header>
    <el-main style="margin-top: 55px">
      <img src="../../assets/img/book-1.png" style="width: 55%;height: 55%;display: inline" alt="看不到">
      <div class="center-right">
        <el-card shadow="never">
          <p style="font-size: 18px">密码登录</p>
          <div class="login-form">
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-loginForm">
              <el-form-item prop="phoneOrUsername">
                <el-input type="text" v-model="loginForm.phoneOrUsername" placeholder="请输入用户名或手机号">
                  <i slot="prefix" class="el-icon-user"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"
                          @keyup.enter.native="submitForm('loginForm')">
                  <i slot="prefix" class="el-icon-lock"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" style="width: 100%" @click="submitForm('loginForm')">登录</el-button>
              </el-form-item>
            </el-form>
            <el-link type="primary" href="/#/info">忘记密码？</el-link>
            <el-link style="float: right" type="info" href="/#/register">立即注册</el-link>
<!--            <router-link style="float: right" to="/register">立即注册</router-link>-->
          </div>
        </el-card>
        <!--        用户名:<input type="text" v-model="loginForm.phoneOrUsername" placeholder="请输入用户名"/>-->
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
        phoneOrUsername: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    submitForm (formName) {
      this.$axios.post('/login', {
        phoneOrUsername: this.loginForm.phoneOrUsername,
        password: this.loginForm.password
      }).then(successResponse => {
        console.log(successResponse)
        if (successResponse.data.code === 200) {
          // 普通用户
          if (successResponse.data.user.role === '2') {
            this.$router.push({
              name: 'index',
              params: { user: successResponse.data.user }
            })
          } else {
            // 管理员
            this.$router.push({
              name: 'admin',
              params: { user: successResponse.data.user }
            })
          }
        } else {
          this.$alert(successResponse.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  /*@import ‘font-awesome/css/font-awesome.min.css’*/
  @import "../common/stylus/common.styl"
  .center
    margin auto 8%
  .center-right
    float right
    width 380px
    margin 40px 0 auto auto
  .login-form
    margin auto 8%
</style>
