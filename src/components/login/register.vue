<template>
  <div class="center">
    <div class="el-header">
      <img src="../../assets/img/book-logo.jpg" style="width: 150px;height: 80px;display: inline" alt="看不到">
      <div class="center-right">
        <p>
          <i class="el-icon-shopping-cart-1">
            <router-link to="/cart">购物车 | </router-link>
          </i>
          <i>
            <router-link to="/order">我的订单 | </router-link>
          </i>
          <i>
            <router-link to="/info">个人信息 | </router-link>
          </i>
          <i>帮助</i>
        </p>
        <p style="float: right">欢迎光临，
          <router-link to="/login" style="color: #1a66b3">请登录 </router-link>
          <router-link to="/index" style="color: #1a66b3"> 注册</router-link>
        </p>
      </div>
      <hr style="border: 2px solid orange"/>
    </div>
    <div class="el-main">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 16px">新用户注册</span>
<!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          <span style="float: right;font-size: 13px">
            <router-link to="/index" style="color: #646464">返回首页</router-link>
          </span>
        </div>
        <div class="register">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="ruleForm.phone" autocomplete="off" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword">
              <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
<!--              <el-input v-model="ruleForm.code"></el-input>-->
              <Sms v-model="ruleForm.code"></Sms>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Sms from 'ofcold-security-code'
export default {
  components: {
    Sms
  },
  data () {
    return {
      ruleForm: {
        code: '',
        phone: '',
        username: '',
        password: '',
        checkPassword: '',
        address: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 14, message: '长度必须为11位数', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 10, message: '密码不能为空或过长', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '请确认密码是否一致', trigger: 'blur' },
          { min: 1, max: 10, message: '请确认密码是否一致', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit success!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../common/stylus/common.styl"
  .center
    /*text-align center*/
    margin auto 14%
    background-color white
    border 1px solid wheat
    padding 0
  .center-right
    display: inline
    float: right
    font-size: 12px
  .register
    margin auto 25%
  a
    color #646464
  i
    padding 1px 3px
    font-family '宋体'
</style>
