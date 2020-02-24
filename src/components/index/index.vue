<template>
  <div>
    <div class="el-header" style="background-color: #f9f9f9">
      <div class="center">
        <div class="address" @mouseenter="getAppear()">
          <el-link :underline="false" >
          送至：<i ref="result">天津</i>
            <i class="el-icon-arrow-down" v-show="!seen" style="size: A5"></i>
            <i class="el-icon-arrow-up" v-show="seen" style="size: A5"></i>
          </el-link>
        </div>
        <div id="address"  @mouseleave="leave()">
          <el-row v-for="(items, index) of rows" :key="index" >
            <el-col :span="3" v-for="item of items" :key="item.index" :offset="1">
              <el-link :underline="false" v-on:click="getAddress($event)">{{ item.value }}</el-link>
            </el-col>
          </el-row>
        </div>
        <div class="center-right">
          <p style="display: inline">
            <i class="el-icon-shopping-cart-1" style="color: red">
              <router-link to="/cart">购物车 |</router-link>
            </i>
            <i>
              <router-link to="/order">我的订单 |</router-link>
            </i>
            <i>
              <router-link to="/info">个人信息 |</router-link>
            </i>
            <i>帮助</i>
          </p>
        </div>
      </div>
      <!--      <hr/>-->
    </div>
    <div class="center">
      <div class="el-main">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size: 16px">新用户注册</span>
            <!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
            <span style="float: right;font-size: 13px">
            <router-link to="/index" style="color: #646464">返回首页</router-link>
          </span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      seen: false,
      options:
      // value: 'address',
      // label: '地址',
        [{
          value: 'wuhan',
          label: '武汉'
        }, {
          value: 'beijing',
          label: '北京'
        }],
      rows: [
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
    margin auto 5%
  .address
    display inline
    font-size 14px
    padding: 5px
    /*border 1px solid red*/
    width 100px
  #address
    display none
    border 1px solid whitesmoke
    width 300px
    position fixed
    z-index 99
    /*display none*/
  .center-right
    display: inline
    float: right
    font-size: 13px
</style>
