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
    </div>
      <div class="center">
        <el-container>
          <el-container>
            <el-aside width="200px">
              <img src="../../assets/img/b2.jpg" width="100%" height="100px" alt="看不到">
              <div style="background-color: red;color: #f9f9f9;padding: 6px 20px 10px;font: 14px 'Microsoft YaHei'">
                <router-link to="" style="color:white;margin: 0">
                  全部商品分类<i class="el-icon-arrow-down" style="padding-left: 20px"></i>
                </router-link>
              </div>
            </el-aside>
            <el-container>
                <div style="text-align: center;padding-top: 6px">
                  <el-input style="width: 400px;border-radius: 0" placeholder="请输入内容" v-model="input">
                    <el-select style="width: 105px;border-radius: 0" v-model="select" slot="append" placeholder="全部分类">
                      <el-option label="电子书" value="1"></el-option>
                      <el-option label="图书" value="2"></el-option>
                      <el-option label="儿童读物" value="3"></el-option>
                      <el-option label="男人最爱" value="4"></el-option>
                      <el-option label="女人最爱" value="5"></el-option>
                    </el-select>
                  </el-input>
                  <el-button slot="append" type="danger" icon="el-icon-search" style="border-radius: 0"></el-button>
                  <p style="font-size: 14px">
                    <i><el-link disabled>热搜：</el-link></i>
                    <i><el-link>我要去故宫</el-link></i>
                    <i><el-link>狼图腾</el-link></i>
                    <i><el-link>十万个为什么</el-link></i>
                    <i><el-link>学生必看</el-link></i>
                    <i><el-link>一元秒杀</el-link></i>
                    <i><el-link>高级搜索</el-link></i>
                  </p>
                </div>
              <el-footer height="46px">
                <div style="font: 14px 'Microsoft YaHei';padding: 15px">
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>图书</b></router-link>
                    </div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>电子书</b></router-link>
                    </div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>网络文学</b></router-link>
                    </div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>学生必看</b></router-link>
                    </div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>热销书籍</b></router-link>
                    </div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>男人最爱</b></router-link>
                    </div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>女人最爱</b></router-link>
                    </div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple">
                      <router-link to="" ><b>儿童刊物</b></router-link>
                    </div></el-col>
                  </el-row>
                </div>
              </el-footer>
            </el-container>
            <el-aside width="260px" >
              <div class="header-right" >
                <el-button type="danger" class="cart" icon="el-icon-shopping-cart-2">
                  <router-link to="/cart">购物车</router-link>
                </el-button>
                <el-button plain class="order">
                  <router-link to="/order">我的订单</router-link>
                </el-button>
              </div>
            </el-aside>
          </el-container>
        </el-container>
      </div>
    <hr style="border: 1px solid red;padding: 0;margin: 0"/>
    <div class="center">
      <el-container>
        <el-aside width="200px" style="border: 1px solid blueviolet">
          <div class="ul-left">
            <el-tabs type="border-card" tab-position="left" style="width: 80%;position: fixed;z-index: 99">
              <el-tab-pane label="用户管理">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务">定时任务</el-tab-pane>
              <el-tab-pane label="定时任务">定时任务</el-tab-pane>
              <el-tab-pane label="定时任务">定时任务</el-tab-pane>
              <el-tab-pane label="定时任务">定时任务</el-tab-pane>
              <el-tab-pane label="最后一个">定时任务</el-tab-pane>
            </el-tabs>
          </div>
        </el-aside>
        <el-main style="margin: 0;padding: 0">
          <el-carousel :interval="4000" arrow="always">
            <el-carousel-item v-for="(item, index) in images" :key="item.index">
              <h3>
                <el-image
                  style="width: 100%; height: 330px"
                  :src="item.imgUrl"
                  :fit="index">
                </el-image>
              </h3>
            </el-carousel-item>
          </el-carousel>
        </el-main>
        <el-aside width="236px" style="border: 1px solid blue">Aside</el-aside>
      </el-container>
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
      images: [
        { imgUrl: require('@/assets/img/center-1.jpg') },
        { imgUrl: require('@/assets/img/center-2.jpg') },
        { imgUrl: require('@/assets/img/center-3.jpg') },
        { imgUrl: require('@/assets/img/center-4.jpg') },
        { imgUrl: require('@/assets/img/center-5.jpg') },
        { imgUrl: require('@/assets/img/center-6.jpg') }
      ],
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
  },
  created () {
  }
}
</script>

<style scoped lang="stylus">
  @import "../common/stylus/common.styl"
  .center
    margin 0 4%
    padding 0
  .address
    margin 5px 0
    display inline
    font-size 14px
    padding: 5px
    /*border 1px solid red*/
    width 100px
  #address
    margin-top 8px
    padding 5px
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
  .header-right
    text-align center
    margin 0
    padding-top 7px
  .header-right .cart
    margin: auto 0;
    width: 120px;
    height: 40px;
    border-radius: 0
  .header-right .order
    margin-left: 0;
    width: 92px;
    height: 40px;
    border-radius: 0
  .el-carousel__item h3
    color: #475669
    font-size: 18px
    opacity: 0.75
    line-height: 300px
    margin: 0
    padding 0
  .el-carousel__item:nth-child(2n)
    background-color: #99a9bf
  .el-carousel__item:nth-child(2n+1)
    background-color: #d3dce6
  .ul-left
    margin 0
    padding 0
  /*.ul-left>>>.el-tabs__header.is-left*/
    /*border 1px solid red*/
    /*width 196px*/
  .ul-left>>>.el-tabs__nav-scroll
    border 1px solid blue
    width 190px
  .ul-left>>>.el-tabs__item.is-left
    border 1px solid red
    text-align center
</style>
