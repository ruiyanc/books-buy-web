<template>
  <div>
    <div class="el-header" style="background-color: #f9f9f9;margin: 0;padding: 5px">
      <div class="center">
        <div class="address" @mouseenter="getAppear()">
          <el-link :underline="false">
            送至：<i ref="result">天津</i>
            <i class="el-icon-arrow-down" v-show="!seen" style="size: A5"></i>
            <i class="el-icon-arrow-up" v-show="seen" style="size: A5"></i>
          </el-link>
        </div>
        <div id="address" @mouseleave="leave()">
          <el-row v-for="(items, index) of addresses" :key="index">
            <el-col :span="3" v-for="item of items" :key="item.index" :offset="1">
              <el-link :underline="false" v-on:click="getAddress($event)">{{ item.value }}</el-link>
            </el-col>
          </el-row>
        </div>
        <div class="center-right">
          <p style="display: inline">
            <i>欢迎光临，请
              <router-link to="/login" style="color: red">登录</router-link>
              |
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
            <img src="@/assets/img/b2.jpg" width="100%" height="103px" alt="看不到">
            <div style="background-color: red;color: #f9f9f9;padding: 6px 20px 10px;font: 14px 'Microsoft YaHei'">
              <router-link to="" style="color:white;margin: 0">
                全部商品分类<i class="el-icon-arrow-down" style="padding-left: 20px"></i>
              </router-link>
            </div>
          </el-aside>
          <el-container>
            <div style="text-align: center;padding-top: 10px">
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
                <i>
                  <el-link disabled>热搜：</el-link>
                </i>
                <i>
                  <el-link>我要去故宫</el-link>
                </i>
                <i>
                  <el-link>狼图腾</el-link>
                </i>
                <i>
                  <el-link>十万个为什么</el-link>
                </i>
                <i>
                  <el-link>学生必看</el-link>
                </i>
                <i>
                  <el-link>一元秒杀</el-link>
                </i>
                <i>
                  <el-link>高级搜索</el-link>
                </i>
              </p>
            </div>
            <el-footer height="44px">
              <div style="font: 14px 'Microsoft YaHei';padding: 15px">
                <el-row>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>图书</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>电子书</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>网络文学</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>学生必看</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>热销书籍</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>武侠小说</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>言情小说</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>儿童刊物</b></router-link>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-footer>
          </el-container>
          <el-aside width="220px">
            <div class="header-right">
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
        <el-aside width="200px">
          <div class="ul-left">
            <!--            <el-tabs type="border-card" tab-position="left" style="width: 80%;position: fixed;z-index: 99">-->
            <!--              <el-tab-pane label="用户管理">用户管理</el-tab-pane>-->
            <!--              <el-tab-pane label="配置管理">配置管理</el-tab-pane>-->
            <!--              <el-tab-pane label="角色管理">角色管理</el-tab-pane>-->
            <!--              <el-tab-pane label="定时任务">定时任务</el-tab-pane>-->
            <!--              <el-tab-pane label="定时任务">定时任务</el-tab-pane>-->
            <!--              <el-tab-pane label="定时任务">定时任务</el-tab-pane>-->
            <!--              <el-tab-pane label="定时任务">定时任务</el-tab-pane>-->
            <!--              <el-tab-pane label="最后一个">定时任务</el-tab-pane>-->
            <!--            </el-tabs>-->
            <ul>
              <li @mouseenter="getText(this)">
                <el-link :underline="false">图书</el-link>
              </li>
              <li @mouseenter="getText(this)">
                <el-link :underline="false">童书</el-link>
              </li>
              <li @mouseenter="getText(this)">
                <el-link :underline="false">教育</el-link>
              </li>
              <li @mouseenter="getText(this)">
                <el-link :underline="false">电子书</el-link>
              </li>
              <li @mouseenter="getText(this)">
                <el-link :underline="false">网络文学</el-link>
              </li>
              <li @mouseenter="getText(this)">
                <el-link :underline="false">小说</el-link>
              </li>
              <li @mouseenter="getText(this)">
                <el-link :underline="false">文艺</el-link>
              </li>
            </ul>
          </div>
        </el-aside>
        <!--        <div id="center" style="position: fixed;left: 260px;width: 60%;border: 1px solid red;background-color: white;z-index: 99">-->
        <!--          这是div-->
        <!--        </div>-->
        <el-main style="margin: 0;padding: 0">
          <el-carousel :interval="4000" arrow="always">
            <el-carousel-item v-for="(item, index) in images" :key="item.index">
              <h3>
                <el-image
                  style="width: 100%; height: 333px"
                  :src="item.imgUrl"
                  :fit="index">
                </el-image>
              </h3>
            </el-carousel-item>
          </el-carousel>
        </el-main>
        <el-aside width="220px">
          <img src="@/assets/img/right.jpg" alt="看不到">
          <p><i>信息公告</i><i>服务公告</i></p>
          <p>>精装童书限时0元领</p>
          <p>>30万图书满100减50</p>
          <p>>toi拼图限时五折</p>
        </el-aside>
      </el-container>
    </div>
    <!--    <hr style="color: #99a9bf"/>-->
    <div style="margin-top: 50px">
      <div class="center" @mouseover="timer($event)">
        <div class="spike">
          秒杀<i class="el-icon-alarm-clock"></i>
          倒计时：<span id="countdown">{{count}}</span>秒
          <span>00:00场</span>
          <span>11:00场</span>
          <span>18:00场</span>
        </div>
        <el-row>
          <el-col style="margin: 0;border-radius: 0" :span="4" v-for="(o, index) in 12" :key="o"
                  :offset="index > 0 ? 2 : 0">
            <el-card shadow="hover">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                   class="image" alt="看不清" width="150px" height="150px">
              <!--              <el-image-->
              <!--                style="width: 100%; display: block"-->
              <!--                :src="infoData.imgUrl"-->
              <!--                :fit="index">-->
              <!--              </el-image>-->
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <span style="color: red;font-size: 12px">秒杀价：￥</span>
                  <span style="color: red;font-size: 16px">{{22}}</span>
                  <s>{{55}}</s>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="margin-top: 15px;border: 1px solid red">
      <div class="center">
        <el-container>
          <el-aside width="200px" style="border: 1px solid yellow">
            <p style="font-size: 16px;margin: 6px 0">
              <i>
                <router-link to="">图书</router-link>
              </i>
              <i>
                <router-link to="">电子书</router-link>
              </i>
              <i>
                <router-link to="">网络文学</router-link>
              </i>
            </p>
            <img src="../../assets/img/left-1.jpg" width="100%" alt="">
            <el-row>
              <el-col :span="8" v-for="(li, index) in lis" :key="li" :offset="index + 1 > 0 ? 2 : 0 ">
                <span><el-link>{{li}}</el-link></span>
              </el-col>
            </el-row>
          </el-aside>
          <el-main style="border: 1px solid red;margin: 0;padding: 0">
            <el-tabs type="border-card" style="">
              <el-tab-pane label="最新上架">
                <el-row>
                  <el-col style="margin: 0;border-radius: 0" :span="6" v-for="(o, index) in 8" :key="o"
                          :offset="index > 0 ? 2 : 0">
                    <el-card shadow="hover">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" alt="看不清" width="150px" height="150px">
                      <!--              <el-image-->
                      <!--                style="width: 100%; display: block"-->
                      <!--                :src="infoData.imgUrl"-->
                      <!--                :fit="index">-->
                      <!--              </el-image>-->
                      <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <span style="color: red;font-size: 12px">秒杀价：￥</span>
                          <span style="color: red;font-size: 16px">{{22}}</span>
                          <s>{{55}}</s>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="独家畅品">
                <el-row>
                  <el-col style="margin: 0;border-radius: 0" :span="6" v-for="(o, index) in 8" :key="o"
                          :offset="index > 0 ? 2 : 0">
                    <el-card shadow="hover">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" alt="看不清" width="150px" height="150px">
                      <!--              <el-image-->
                      <!--                style="width: 100%; display: block"-->
                      <!--                :src="infoData.imgUrl"-->
                      <!--                :fit="index">-->
                      <!--              </el-image>-->
                      <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <span style="color: red;font-size: 12px">秒杀价：￥</span>
                          <span style="color: red;font-size: 16px">{{22}}</span>
                          <s>{{55}}</s>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="电子书">
                <el-row>
                  <el-col style="margin: 0;border-radius: 0" :span="6" v-for="(o, index) in 8" :key="o"
                          :offset="index > 0 ? 2 : 0">
                    <el-card shadow="hover">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" alt="看不清" width="150px" height="150px">
                      <!--              <el-image-->
                      <!--                style="width: 100%; display: block"-->
                      <!--                :src="infoData.imgUrl"-->
                      <!--                :fit="index">-->
                      <!--              </el-image>-->
                      <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <span style="color: red;font-size: 12px">秒杀价：￥</span>
                          <span style="color: red;font-size: 16px">{{22}}</span>
                          <s>{{55}}</s>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="网络文学">
                <el-row>
                  <el-col style="margin: 0;border-radius: 0" :span="6" v-for="(o, index) in 8" :key="o"
                          :offset="index > 0 ? 2 : 0">
                    <el-card shadow="hover">
                      <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" alt="看不清" width="150px" height="150px">
                      <!--              <el-image-->
                      <!--                style="width: 100%; display: block"-->
                      <!--                :src="infoData.imgUrl"-->
                      <!--                :fit="index">-->
                      <!--              </el-image>-->
                      <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <span style="color: red;font-size: 12px">秒杀价：￥</span>
                          <span style="color: red;font-size: 16px">{{22}}</span>
                          <s>{{55}}</s>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-main>
          <el-aside width="220px">
            <div>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span><el-link>图书畅销榜</el-link></span>
                  <!--                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                </div>
                <ul>
                  <li v-for="(data, index) in dataTops" :key="data" class="text item">
                    <!--                  {{'列表内容 ' + o }}-->
                    <!--                  <el-image :src="data."></el-image>-->
                    <i>{{index + 1}}</i>
                    <i>{{data.title}}</i>
                    <p>{{data.info}}</p>
                    <hr style="margin: 0;color: #99a9bf"/>
                  </li>
                </ul>
              </el-card>

            </div>
          </el-aside>
        </el-container>
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
      input: '',
      select: '',
      infoData: [],
      count: 120,
      lis: ['童书', '中小学', '外语', '考试', '小说', '文学', '青春文学',
        '励志', '管理', '历史', '亲子', '全部分类'],
      dataTops: [
        { title: '爱与和平', info: '讲述.....' },
        { title: '西游记', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' }
      ],
      images: [
        { imgUrl: require('@/assets/img/center-1.jpg') },
        { imgUrl: require('@/assets/img/center-2.jpg') },
        { imgUrl: require('@/assets/img/center-3.jpg') },
        { imgUrl: require('@/assets/img/center-4.jpg') },
        { imgUrl: require('@/assets/img/center-5.jpg') },
        { imgUrl: require('@/assets/img/center-6.jpg') },
        { imgUrl: require('@/assets/img/center-7.jpg') }
      ],
      addresses: [
        [
          { value: '北京' },
          { value: '天津' },
          { value: '河北' },
          { value: '山西' },
          { value: '内蒙古' }
        ],
        [
          { value: '辽宁' },
          { value: '吉林' },
          { value: '黑龙江' },
          { value: '上海' },
          { value: '江苏' }
        ],
        [
          { value: '浙江' },
          { value: '安徽' },
          { value: '福建' },
          { value: '江西' },
          { value: '山东' }
        ],
        [
          { value: '河南' },
          { value: '湖北' },
          { value: '湖南' },
          { value: '广东' },
          { value: '广西' }
        ],
        [
          { value: '海南' },
          { value: '重庆' },
          { value: '四川' },
          { value: '贵州' },
          { value: '云南' }
        ],
        [
          { value: '西藏' },
          { value: '陕西' },
          { value: '甘肃' },
          { value: '青海' },
          { value: '宁夏' }
        ],
        [
          { value: '新疆' },
          { value: '台湾' },
          { value: '香港' },
          { value: '澳门' },
          { value: '钓鱼岛' }
        ]
      ]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
    getText (event) {
      let center = document.getElementById('center')
      center.style.backgroundColor = 'red'
      let el = event.target
      console.log(event)
      console.log(el)
      // let value = event.currentTarget.innerText
      // alert(value)
      // center.innerText = value
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
    },
    timer () {
      let countdown = document.getElementById('countdown')
      let me = this
      let interval = window.setInterval(function () {
        countdown.innerHTML = me.count
        countdown.style.color = 'red'
        --me.count
        if (me.count < 0) {
          me.count = 120
          window.clearInterval(interval)
        }
      }, 1000)
    }
  },
  created () {
    // this.timer()
  }
}
</script>

<style scoped lang="stylus">
  @import "../common/stylus/common.styl"
  .center
    margin 0 5%
    padding 0

  .address
    margin 5px 0
    display inline
    font-size 14px
    padding: 5px
    /*border 1px solid red*/
    width 100px

  #address
    margin-top 5px
    padding 5px
    display none
    border 1px solid whitesmoke
    width 340px
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
    padding-top 10px

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

  ul li
    list-style none

  ul
    margin 0
    padding 0

  .ul-left li
    line-height 39px
    text-align center

  /*border 1px solid red*/
  .el-aside p
    color #606266
    font-size 14px
    margin 1px 6px
    padding 2px 8px

  .ul-left >>> .el-tabs.el-tabs--left.el-tabs--border-card
    /*visibility hidden*/
  .ul-left >>> .el-tabs__nav-scroll
    border 1px solid blue
    width 190px

  .ul-left >>> .el-tabs__item.is-left
    text-align center

  .ul-left >>> .el-tabs__item.is-left.is-active
    border 2px solid red

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before, .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  #countdown
    padding 0

  .spike
    margin 12px auto

  .spike span
    padding 0 35px
</style>
