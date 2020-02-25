<template>
  <div>
    <div class="el-header" style="background-color: #f9f9f9;margin: 0;padding: 5px">
      <div class="center">
        <div class="address" @mouseenter="getAppear()">
          <el-link :underline="false" >
          送至：<i ref="result">天津</i>
            <i class="el-icon-arrow-down" v-show="!seen" style="size: A5"></i>
            <i class="el-icon-arrow-up" v-show="seen" style="size: A5"></i>
          </el-link>
        </div>
        <div id="address"  @mouseleave="leave()">
          <el-row v-for="(items, index) of addresses" :key="index" >
            <el-col :span="3" v-for="item of items" :key="item.index" :offset="1">
              <el-link :underline="false" v-on:click="getAddress($event)">{{ item.value }}</el-link>
            </el-col>
          </el-row>
        </div>
        <div class="center-right">
<!--          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
<!--            <el-menu-item index="1">-->
<!--              欢迎光临，请-->
<!--              <router-link to="/login" style="color: red">登录</router-link> |-->
<!--            </el-menu-item>-->
<!--            <el-submenu index="2">-->
<!--              <template slot="title">-->
<!--              </template>-->
<!--              <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--              <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--            </el-submenu>-->
<!--            <el-menu-item index="3">消息中心</el-menu-item>-->
<!--            <el-menu-item index="4">-->
<!--              <a href="https://www.ele.me" target="_blank">订单管理</a>-->
<!--            </el-menu-item>-->
<!--          </el-menu>-->
          <p style="display: inline">
            <i>欢迎光临，请
              <router-link to="/login" style="color: red">登录</router-link> |
            </i>
            <i class="el-icon-shopping-cart-1" style="color: red">
              <router-link to="/cart">购物车 |</router-link>
            </i>
            <i>
              <router-link to="/order">我的订单 |</router-link>
            </i>
            <i>
              <router-link to="/info">个人信息 |</router-link>
            </i>
            <i>
              <router-link to="">我要出书 |</router-link>
            </i>
            <i>
              <router-link to="">帮助</router-link>
            </i>
          </p>
        </div>
      </div>
      <!--      <hr/>-->
    </div>
    <div class="el-header">
      <div class="center">
        <el-container>
          <el-container>
            <el-aside width="200px" style="border: 1px solid red">
              <img src="../../assets/img/book.jpeg" width="100%" height="100px" alt="看不到">
              <div style="background-color: red;color: #f9f9f9;padding: 6px 20px 10px;font: 14px 'Microsoft YaHei'">
                <router-link to="" style="color:white;">
                  全部商品分类<i class="el-icon-arrow-down" style="padding-left: 20px"></i>
                </router-link>
              </div>
            </el-aside>
            <el-container>
              <el-main>

                <div style="text-align: center">
                  <el-input style="width: 400px" placeholder="请输入内容" v-model="input">
                    <el-select style="width: 120px;" v-model="select" slot="append" placeholder="全部分类">
                      <el-option label="餐厅" value="1"></el-option>
                      <el-option label="订单" value="2"></el-option>
                      <el-option label="用户" value="3"></el-option>
                    </el-select>
                  </el-input>
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </div>
              </el-main>
            </el-container>
            <el-aside width="250px" style="border: 1px solid red">
              <div style="text-align: center">
                <el-button type="danger" style="margin: 0">
                  <i class="el-icon-shopping-cart-2"></i>
                  <router-link to="/cart">
                    购物车
                  </router-link>
                </el-button>
                <el-button type="danger" plain style="margin: 0">
                  <router-link to="/order">我的订单</router-link>
                </el-button>
              </div>
            </el-aside>
          </el-container>
        </el-container>
      </div>
    </div>
<!--    <div class="center">-->
<!--      <div class="el-main">-->
<!--        <el-card class="box-card">-->
<!--          <div slot="header" class="clearfix">-->
<!--            <span style="font-size: 16px">新用户注册</span>-->
<!--            &lt;!&ndash;          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>&ndash;&gt;-->
<!--            <span style="float: right;font-size: 13px">-->
<!--            <router-link to="/index" style="color: #646464">返回首页</router-link>-->
<!--          </span>-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      seen: false,
      input: '',
      select: '',
      addresses: [
        [
          { value: '武汉' },
          { value: '武汉' },
          { value: '武汉' },
          { value: '武汉' },
          { value: '武汉' }
        ],
        [
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' }
        ],
        [
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' }
        ],
        [
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' }
        ],
        [
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' }
        ],
        [
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' }
        ],
        [
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' },
          { value: '北京' }
        ]
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    getAppear () {
      let address = document.getElementById('address')
      address.style.display = 'block'
      address.style.backgroundColor = 'white'
      this.seen = true
    },
    leave () {
      // let address = this.$refs.address
      let address = document.getElementById('address')
      address.style.display = 'none'
      this.seen = false
    },
    getAddress (event) {
      let value = event.currentTarget.innerText
      // alert('当前内容为：' + value)
      let result = this.$refs.result
      result.innerText = value
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../common/stylus/common.styl"
  .center
    margin 5px 4%
  .address
    margin 5px 0
    display inline
    font-size 14px
    padding: 5px
    /*border 1px solid red*/
    width 100px
  #address
    margin-top 8px
    display none
    border 1px solid whitesmoke
    width 330px
    position fixed
    z-index 99
    /*display none*/
  .center-right
    display: inline
    float: right
    font-size: 13px
  i
    padding 2px 5px
</style>
