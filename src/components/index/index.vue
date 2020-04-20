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
            <i v-if="!user">欢迎光临，请
              <router-link to="/login" style="color: red">登录</router-link>
              |
            </i>
            <i v-if="user">
              <i>Hi，
                <el-link href="/#/info" :underline="false" type="danger"
                         v-text="user.username"></el-link>
              </i>
              <i>
                <el-link href="">[退出]</el-link>
              </i>
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
                      <router-link to=""><b>小说</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>教育</b></router-link>
                    </div>
                  </el-col>
                  <el-col :span="3">
                    <div class="grid-content bg-purple">
                      <router-link to=""><b>童书</b></router-link>
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
            <ul>
              <li>
                <el-link :underline="false">图书</el-link>
              </li>
              <li>
                <el-link :underline="false">童书</el-link>
              </li>
              <li>
                <el-link :underline="false">教育</el-link>
              </li>
              <li>
                <el-link :underline="false">电子书</el-link>
              </li>
              <li>
                <el-link :underline="false">网络文学</el-link>
              </li>
              <li>
                <el-link :underline="false">小说</el-link>
              </li>
              <li>
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
      <div class="center">
        <div class="spike">
          秒杀<i class="el-icon-alarm-clock"></i>
          倒计时：<span id="countdown">{{count}}</span>秒
          <span>00:00场</span>
          <span>11:00场</span>
          <span>18:00场</span>
        </div>
        <el-row>
          <el-col style="margin: 0;border-radius: 0" :span="4" v-for="(info, index) in infoData" :key="info"
                  :offset="index > 0 ? 2 : 0">
            <el-card shadow="hover" style="width: 250px;height: 170px">
              <a href="javascript:void(0);" style="font-size: 15px;color: #646464" @click="viewDetails(info)">
                <el-image :src="info.image"></el-image>
                {{info.name}}</a>
              <div class="table" style="padding: 14px;">
                <a href="javascript:void(0);" :title="info.detail" @click="viewDetails(info)">{{info.subtitle}}</a>
                <div class="bottom clearfix">
                  <span style="color: red;font-size: 14px">秒杀价：￥<i style="font-size: 17px">
                    {{info.discountPrice.toFixed(2)}}&nbsp;</i>
                  </span>
                  <s style="font-size: 14px">{{info.originalPrice.toFixed(2)}}</s>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="margin-top: 15px">
      <div class="center">
        <el-container>
          <el-aside width="200px">
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
          <el-main style="margin: 0;padding: 0">
            <el-tabs type="border-card">
              <el-tab-pane label="最新上架">
                <el-row>
                  <el-col style="margin: 0;border-radius: 0" :span="4" v-for="(info, index) in newTimeData" :key="info"
                          :offset="index > 0 ? 2 : 0">
                    <el-card shadow="never" style="width: 250px;height: 170px">
                      <a href="javascript:void(0);" style="font-size: 15px;color: #646464" @click="viewDetails(info)">
                        <el-image :src="info.image"></el-image>
                        {{info.name}}</a>
                      <div class="table" style="padding: 14px;">
                        <a href="javascript:void(0);" :title="info.detail" @click="viewDetails(info)">{{info.subtitle}}</a>
                        <div class="bottom clearfix">
                         <span style="color: red;"><i style="font-size: 17px">
                          {{info.discountPrice.toFixed(2)}}&nbsp;</i>
                        </span>
                          <s style="font-size: 14px">{{info.originalPrice.toFixed(2)}}</s>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="学生必看">
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
                          <span style="color: red;font-size: 16px">{{22}}&nbsp;</span>
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
                          <span style="color: red;font-size: 16px">{{22}}&nbsp;</span>
                          <s>{{55}}</s>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="知名小说">
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
                          <span style="color: red;font-size: 16px">{{22}}&nbsp;</span>
                          <s>{{55}}</s>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
<!--            查看所有评论信息-->
            <el-dialog title="商品评论" :visible.sync="dialogFormVisible1">
              <el-row>
                <el-col style="margin: 0;border-radius: 0"  v-for="info in commentData" :key="info">
                  <el-card shadow="never" >
                    <div class="table">
                      <el-rate text-color="#ff9900" disabled v-model="info.score" show-score="info.score" :colors="colors"></el-rate>
                      <div class="bottom clearfix">
                        <p><i style="font-size: 15px">{{info.commentInfo}}&nbsp;</i></p>
                        <p>
                          <i>{{ info.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</i>
                          <i style="float:right;margin-right: 50px;color: brown">{{ info.username  }}</i>
                        </p>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-dialog>
            <!--            查看商品详情-->
            <el-dialog title="商品信息" :visible.sync="dialogFormVisible">
              <div class="center p">
                  <el-card shadow="never">
                    <div style="float: left;width: 120px;height: 400px;">
                      <el-image :src="productDetail.image"></el-image>
                      <p><a href="javascript:void(0);" title="收藏" style="color: #969696"
                            @click="addOrDeleteCollect(productDetail)">
                        <i class="el-icon-star-off" v-if="collect==null">收藏</i><br/>
                        <i class="el-icon-star-on" v-if="collect!=null">已收藏</i><br/>
                          <i>人气({{collectCounts}})</i>
                      </a></p>
                    </div>
                    <div style="margin-left: 100px">
                    <div style="padding: 14px;">
                      <h1 style="font-size: 18px">{{productDetail.name}}&nbsp;&nbsp;<i style="font-size: 14px">{{productDetail.subtitle}}</i></h1>
                      <p>{{productDetail.detail}}</p>
                      <p style="color: #646464;font-size: 14px">
                        <span>作者：<i style="color: #1a66b3">{{productDetail.author}}</i></span>
                        <span>出版时间：<i>{{productDetail.createTime | dateFormat('yyyy-MM-dd HH:mm:ss') }}</i></span>
                      </p>
                      <p>
                        <span><i>
                          <el-rate disabled v-model="avgRate" style="display: inline" :colors="colors"></el-rate>&nbsp;
                          <span><a href="javascript:void(0);" title="评论" @click="findComments(productDetail)">
                            {{ comments }}<i>条评论</i></a></span>
                        </i></span>
                      </p>
                      <p>现价：<i style="color: red; font-size: 17px">{{productDetail.discountPrice}}&nbsp;&nbsp;</i>
                      <span style="color: #99a9bf;font-size: 14px">原价：<s>{{productDetail.originalPrice}}</s></span>
                      </p>
                      <p>配送至：<i>{{address}}</i></p>
                      <p>
                        <el-input style="width: 135px" v-model="num">
                          <el-button size="small" icon="el-icon-minus" slot="prepend" @click="del()">
                          </el-button>
                          <el-button size="small" icon="el-icon-plus" slot="append" @click="add()">
                          </el-button>
                        </el-input>
                        <el-button type="danger" style="margin: auto 0;width: 120px;height: 40px;border-radius: 0"
                                   icon="el-icon-shopping-cart-2" @click="addCart()">加入购物车</el-button>
                        <el-button plain @click="addOrder()"
                                   style="margin-left: 0;width: 92px;height: 40px;border-radius: 0">立即购买</el-button>
                      </p>
                    </div>
                    </div>
                  </el-card>
              </div>
            </el-dialog>
          </el-main>
          <el-aside width="220px">
            <div class="main-right">
              <el-tabs>
                <el-tab-pane label="图书畅销榜">
                  <el-card class="box-card">
                    <!--                    <div slot="header" class="clearfix">-->
                    <!--                      <span><el-link>图书畅销榜</el-link></span>-->
                    <!--                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    <!--                    </div>-->
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
                </el-tab-pane>
                <el-tab-pane label="童书新品榜">
                  <el-card class="box-card">
                    <!--                    <div slot="header" class="clearfix">-->
                    <!--                      <span><el-link>图书畅销榜</el-link></span>-->
                    <!--                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                    <!--                    </div>-->
                    <ul>
                      <li v-for="(data, index) in dataNews" :key="data" class="text item">
                        <!--                  {{'列表内容 ' + o }}-->
                        <!--                  <el-image :src="data."></el-image>-->
                        <i>{{index + 1}}</i>
                        <i>{{data.title}}</i>
                        <p>{{data.info}}</p>
                        <hr style="margin: 0;color: #99a9bf"/>
                      </li>
                    </ul>
                  </el-card>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-aside>
        </el-container>
      </div>
    </div>
    <div>
      <hr style="border: 1px solid red"/>
      <img src="@/assets/img/bottom.png" alt="看不清" style="margin: auto 10%">
    </div>
    <div class="sidebar">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="true" router="router">
        <el-menu-item index="1" route="/cart">
          <i class="el-icon-shopping-cart-full"></i>
          <span slot="title">购物车</span>
        </el-menu-item>
        <el-menu-item index="2" route="/login">
          <i class="el-icon-star-off"></i>
          <span slot="title">收藏夹</span>
        </el-menu-item>
        <el-menu-item index="3" route="/index">
          <i class="el-icon-place"></i>
          <span slot="title">我的足迹</span>
        </el-menu-item>
        <el-menu-item index="4" route="/index">
          <i class="el-icon-share"></i>
          <span slot="title">分享</span>
        </el-menu-item>
        <el-menu-item index="5" route="/index">
          <i class="el-icon-s-home"></i>
          <span slot="title">回到顶部</span>
          <!--          <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
        </el-menu-item>
      </el-menu>
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
      address: '北京',
      avgRate: null,
      rate: null,
      user: this.$route.params.user == null ? null : this.$route.params.user,
      infoData: [],
      commentData: [],
      newTimeData: [],
      studentData: [],
      eBookData: [],
      novelData: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      count: 120,
      collect: null,
      collectCounts: 0,
      comments: 0,
      num: 1,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      lis: ['童书', '中小学', '外语', '考试', '小说', '文学', '青春文学',
        '励志', '管理', '历史', '亲子', '全部分类'],
      productDetail: {},
      dataTops: [
        { title: '爱与和平', info: '讲述.....' },
        { title: '西游记', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' },
        { title: '水浒传', info: '讲述.....' }
      ],
      dataNews: [
        { title: '天才在左,疯子在右', info: '讲述疯子....' },
        { title: '童话镇', info: '讲述童话....' }
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
    handleClick (row) {
      console.log(row)
    },
    addOrDeleteCollect (productDetail) {
      console.log(productDetail)
      console.log(this.user)
      this.$axios.post('/addOrDeleteCollectByProductId', {
        productId: productDetail.id,
        uid: this.user.uid
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message.success(res.data.message)
        }
      })
    },
    findComments () {
      this.dialogFormVisible1 = true
      console.log(this.commentData)
      this.rate = this.commentData.score
    },
    // 查看详情
    viewDetails (product) {
      this.dialogFormVisible = true
      this.productDetail = product
      console.log(product)
      this.$axios.post('/findCollectByProductId', {
        productId: this.productDetail.id,
        uid: this.user.uid
      }).then((res) => {
        if (res.data.code === 200) {
          this.collectCounts = res.data.collectCounts
          this.collect = res.data.collect
        }
      })
      this.$axios.post('findCommentByProductId',
        { productId: this.productDetail.id }
      ).then((res) => {
        if (res.data.code === 200) {
          this.comments = res.data.comments
          this.commentData = res.data.commentData
          this.avgRate = res.data.avgRate
          // this.$refs.avgRate.innerText = res.data.avgRate
        }
      })
    },
    add () {
      this.num += 1
      // this.handleInput(value)
    },
    del () {
      if (this.num > 1) {
        this.num -= 1
      }
    },
    // 秒杀模块的商品12个
    initFindAllProduct () {
      this.$axios.get('/findAllProductSpice')
        .then((res) => {
          console.log(res.data)
          this.infoData = res.data.slice(0, 12)
        })
      console.log(this.infoData)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
      this.address = value
    },
    timer () {
      let countdown = document.getElementById('countdown')
      let me = this
      let interval = window.setInterval(function () {
        countdown.innerText = me.count
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
    window.onload = () => {
      this.timer()
    }
    this.initFindAllProduct()
  }
}
</script>

<style scoped lang="stylus">
  @import "../common/stylus/common.styl"

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

  .ul-left li
    line-height 39px
    text-align center

  /*border 1px solid red*/
  .el-aside p
    color #606266
    font-size 14px
    margin 1px 6px
    padding 2px 8px

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

  .main-right >>> .el-tabs__item.is-top
    padding 0 18px

  .sidebar
    position: fixed
    right: 0
    top: 100px

  .sidebar >>> .menu
    width 40px

  .sidebar >>> .el-menu-item .el-tooltip
    padding 0
    width 30px
    height 30px

  .center >>> .el-link--inner:hover
    color red

  .table > a
    overflow: hidden;
    text-overflow: ellipsis;
    /* Firefox */
    display: -moz-box;
    -moz-line-clamp: 1;
    -moz-box-orient: vertical;
    /* Safari、Opera、Chrome */
    display: -webkit-box;
    /* 盒子垂直对齐 */
    -webkit-box-orient: vertical;
    /* 一行 */
    -webkit-line-clamp: 1;
  .center .p>p
    margin 5px
</style>
