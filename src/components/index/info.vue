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
            <i>
              Hi,<i v-if="user!=null"><el-link href="/#/info" :underline="false" type="danger" v-text="user.username"></el-link></i>
              <i><el-link href="">[退出]</el-link></i>
            </i>
            <i class="el-icon-shopping-cart-1" style="color: red">
              <router-link  @click.native="this.goToCart()" to="">购物车 |</router-link>
            </i>
            <i>
              <router-link  @click.native="this.goToInfo()" to="">我的订单 |</router-link>
            </i>
            <i>
              <router-link  @click.native="this.goToInfo()" to="">个人信息 |</router-link>
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
            <router-link :to="{name: 'index', params: {user: this.user}}">
              <img src="@/assets/img/b2.jpg" width="100%" height="103px" alt="看不到">
            </router-link>
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
                <router-link @click.native="goToCart()" to="">购物车</router-link>
              </el-button>
              <el-button plain class="order">
                <router-link @click.native="order()" to="">我的订单</router-link>
              </el-button>
            </div>
          </el-aside>
        </el-container>
      </el-container>
    </div>
    <hr style="border: 1px solid red;padding: 0;margin: 0"/>
    <div class="info">
      <div class="center">
        <el-tabs type="border-card" tab-position="left" style="width: 100%;height: 550px"
                 v-model="activeName" @tab-click="findAnyThingsBy">
          <el-tab-pane label="我的订单" name="order">
            <div style="float: right;">
                <el-input style="width: 260px" type="text" placeholder="商品名称/订单号/收货人姓名" @input="change()"></el-input>
                <el-button style="border-radius: 0" @click="find(content)">搜索</el-button>
            </div>
            <el-tabs @tab-click="findOrderBy">
              <div class="date">
                <p>
                  下单时间：
                  <i><el-link :underline="false" @click="dateSearch($event)">一个星期内</el-link></i>
                  <i><el-link :underline="false" @click="dateSearch($event)">一个月内</el-link></i>
                  <i><el-link :underline="false" @click="dateSearch($event)">三个月内</el-link></i>
                  <i><el-link :underline="false" @click="dateSearch($event)">半年内</el-link></i>
                  <i><el-link :underline="false" @click="dateSearch($event)">一年前</el-link></i>
                </p>
              </div>
              <el-tab-pane label="全部订单" name="0">
                <el-card shadow="never">
                  <el-table ref="multipleTable" :data="orderData" tooltip-effect="dark"
                            style="width: 100%" @selection-change="selected">
                    <el-table-column label="全选" type="selection" width="60">
                    </el-table-column>
                    <el-table-column label="订单号" width="220">
                      <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="viewOrderDetail(scope.row)"><i>{{scope.row.orderNo}}</i></a>
                      </template>
                    </el-table-column>
                    <el-table-column label="总价(元)" width="100">
                      <template slot-scope="scope">
                        <span>{{scope.row.payment.toFixed(2)}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="订单状态" prop="status" width="100">
                      <template slot-scope="scope">
                        <span v-if="scope.row.status==='1'">待付款</span>
                        <span v-if="scope.row.status==='2'">待发货</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="shippingName" label="收货人" width="80">
                    </el-table-column>
                    <el-table-column prop="address" label="收货地址" width="120">
                    </el-table-column>
                    <el-table-column label="创建时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="更新时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.updateTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      label="操作"
                      width="150">
                      <template slot-scope="scope">
                        <el-button type="text" size="small">
                          <span v-if="scope.row.status==='1'" @click="payment(scope.row)">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                        <el-button @click="handleDelete(scope.$index, scope.row)"
                                   type="text" size="small">删除订单</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-pagination
                    style="text-align: center"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pageSize"
                    layout="prev, pager, next, jumper"
                    :total="total">
                  </el-pagination>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="待付款" name="1">
                <el-card shadow="never">
                  <el-table ref="multipleTable" :data="orderData" tooltip-effect="dark"
                            style="width: 100%" @selection-change="selected">
                    <el-table-column label="全选" type="selection" width="60">
                    </el-table-column>
                    <el-table-column label="订单号" width="220">
                      <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="viewOrderDetail(scope.row)"><i>{{scope.row.orderNo}}</i></a>
                      </template>
                    </el-table-column>
                    <el-table-column label="总价(元)" width="100">
                      <template slot-scope="scope">
                        <span>{{scope.row.payment.toFixed(2)}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="订单状态" prop="status" width="100">
                      <template slot-scope="scope">
                        <span v-if="scope.row.status==='1'">待付款</span>
                        <span v-if="scope.row.status==='2'">待发货</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="shippingName" label="收货人" width="80">
                    </el-table-column>
                    <el-table-column prop="address" label="收货地址" width="120">
                    </el-table-column>
                    <el-table-column label="创建时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="更新时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.updateTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      label="操作"
                      width="150">
                      <template slot-scope="scope">
                        <el-button type="text" size="small">
                          <span v-if="scope.row.status==='1'" @click="payment(scope.row)">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-pagination
                    style="text-align: center"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pageSize"
                    layout="prev, pager, next, jumper"
                    :total="total">
                  </el-pagination>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="已付款" name="2">
                <el-card shadow="never">
                  <el-table ref="multipleTable" :data="orderData" tooltip-effect="dark"
                            style="width: 100%" @selection-change="selected">
                    <el-table-column label="全选" type="selection" width="60">
                    </el-table-column>
                    <el-table-column label="订单号" width="220">
                      <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="viewOrderDetail(scope.row)">
                          <i>{{scope.row.orderNo}}</i></a>
                      </template>
                    </el-table-column>
                    <el-table-column label="总价(元)" width="100">
                      <template slot-scope="scope">
                        <span>{{scope.row.payment.toFixed(2)}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="订单状态" prop="status" width="100">
                      <template slot-scope="scope">
                        <span v-if="scope.row.status==='1'">待付款</span>
                        <span v-if="scope.row.status==='2'">待发货</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="shippingName" label="收货人" width="80">
                    </el-table-column>
                    <el-table-column prop="address" label="收货地址" width="120">
                    </el-table-column>
                    <el-table-column label="创建时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="更新时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.updateTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      label="操作"
                      width="150">
                      <template slot-scope="scope">
                        <el-button type="text" size="small">
                          <span v-if="scope.row.status==='1'" @click="payment(scope.row)">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-pagination
                    style="text-align: center"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pageSize"
                    layout="prev, pager, next, jumper"
                    :total="total">
                  </el-pagination>
                </el-card>
              </el-tab-pane>
              <el-tab-pane label="待评价" name="3">
                <el-card shadow="never">
                  <el-table ref="multipleTable" :data="orderData" tooltip-effect="dark"
                            style="width: 100%" @selection-change="selected">
                    <el-table-column label="全选" type="selection" width="60">
                    </el-table-column>
                    <el-table-column label="订单号" width="220">
                      <template slot-scope="scope">
                        <a href="javascript:void(0);" @click="viewOrderDetail(scope.row)"><i>{{scope.row.orderNo}}</i></a>
                      </template>
                    </el-table-column>
                    <el-table-column label="总价(元)" width="100">
                      <template slot-scope="scope">
                        <span>{{scope.row.payment.toFixed(2)}}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="订单状态" prop="status" width="100">
                      <template slot-scope="scope">
                        <span v-if="scope.row.status==='1'">待付款</span>
                        <span v-if="scope.row.status==='2'">待发货</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="shippingName" label="收货人" width="80">
                    </el-table-column>
                    <el-table-column prop="address" label="收货地址" width="120">
                    </el-table-column>
                    <el-table-column label="创建时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column label="更新时间" width="180">
                      <template slot-scope="scope">
                        <span>{{ scope.row.updateTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                      </template>
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      label="操作"
                      width="150">
                      <template slot-scope="scope">
                        <el-button type="text" size="small">
                          <span v-if="scope.row.status==='1'" @click="payment(scope.row)">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-pagination
                    style="text-align: center"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pageSize"
                    layout="prev, pager, next, jumper"
                    :total="total">
                  </el-pagination>
                </el-card>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="我的收藏" name="collect">
            <el-col style="margin: 0;border-radius: 0" :span="6" v-for="(info, index) in collectData"
                    :key="info" :offset="index > 0 ? 1 : 0">
              <el-card class="collect" shadow="never" style="width: 320px;height: 400px">
                <a href="javascript:void(0);" style="font-size: 15px;color: #646464"
                   @click="viewDetails(info)" :title="info.detail">
                  <el-image :src="info.image"></el-image>
                  <br>
                  <i style="padding: 15px;margin: 15px">{{info.productName}}</i><br/>
                  <span class="span"><i>({{info.subtitle}})</i></span></a>
                <div style="padding: 20px;">
                  <div class="bottom clearfix" style="margin-bottom: 20px">
                    <span style="color: red;">
                      <i style="font-size: 17px">￥{{info.discountPrice.toFixed(2)}}&nbsp;&nbsp;</i>
                    </span>
                    <s style="font-size: 14px">￥{{info.originalPrice.toFixed(2)}}</s>
                  </div>
                  <el-button type="info" style="margin: 0;border-radius: 0;width: 100px;height: 33px;font-size: 12px;color: #969696;background-color: #f5f5f5"
                             plain>{{info.comments}}人评价</el-button>
                  <el-button type="info" style="margin: 0;border-radius: 0;width: 100px;height: 33px;font-size: 12px;color: #969696;background-color: #f5f5f5"
                             plain>{{info.collects}}人收藏</el-button>
                </div>
                <el-button type="danger" style="width: 120px;height: 40px;border-radius: 0"
                           @click="addCart(info)">加入购物车</el-button>
                <el-button type="danger" style="width: 110px;height: 40px;border-radius: 0"
                           @click="addOrDeleteCollect(info)">取消收藏</el-button>
              </el-card>
            </el-col>
              <el-pagination
                style="text-align: center;position: absolute;bottom: 0;left: 33%"
                @size-change="handleSizeChange1"
                @current-change="handleCurrentChange1"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="total">
              </el-pagination>
          </el-tab-pane>
          <el-tab-pane label="我的评论" name="comment">
            <el-table ref="multipleTable" :data="commentData" tooltip-effect="dark" style="width: 100%">
              <el-table-column label="全选" type="selection" width="30"></el-table-column>
              <el-table-column prop="id" label="id" v-if="false"></el-table-column>
              <el-table-column label="商品名称" width="180">
                <template slot-scope="scope">
                  <p style="font-size: 16px">{{scope.row.productName}}</p>
                </template>
              </el-table-column>
              <el-table-column label="作者" width="110">
                <template slot-scope="scope">
                  <p style="font-size: 12px;color: #646464">{{scope.row.author}}</p>
                </template>
              </el-table-column>
              <el-table-column label="商品图片" width="150">
                <template slot-scope="scope">
                  <el-image :src="scope.row.image" ></el-image>
                </template>
              </el-table-column>
              <el-table-column label="评价星级" width="200">
                <template slot-scope="scope">
                  <el-rate text-color="#ff9900" disabled v-model="scope.row.score" show-score="scope.row.score" :colors="colors"></el-rate>
                </template>
              </el-table-column>
              <el-table-column prop="commentInfo" label="评价内容" width="250"></el-table-column>
              <el-table-column label="评价时间" width="180" >
                <template slot-scope="scope">
                  <span>{{ scope.row.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                </template>
              </el-table-column>
              <el-table-column label="更新时间" width="180" >
                <template slot-scope="scope">
                  <span>{{ scope.row.updateTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="个人信息" name="user">
            <el-form :model="user" ref="user" label-width="120px" style="margin: 20px">
              <el-form-item label="昵称">
                <el-input v-model="user.username" autocomplete="off" style="width: 200px;" ></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="user.phone" autocomplete="off" style="width: 200px;"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="user.address" autocomplete="off" style="width: 200px;"></el-input>
              </el-form-item>
              <el-form-item label="密码" v-if="see">
                <el-input v-if="see" type="password" v-model="user.password" autocomplete="off" style="width: 200px"></el-input>
              </el-form-item>
            </el-form>
            <el-button style="margin-left: 100px" type="danger" @click="password()">修改密码</el-button>
            <el-button style="margin-right: 100px" type="primary" @click="updateUserInfo()">确 定</el-button>
          </el-tab-pane>
        </el-tabs>
        <el-dialog title="订单详情" :visible.sync="dialogFormVisible">
          <el-table ref="multipleTable" :data="orderItemData" tooltip-effect="dark"
                    style="width: 100%" @selection-change="selected">
            <el-table-column label="全选" type="selection" width="60">
            </el-table-column>
            <el-table-column label="商品图片" width="150">
              <template slot-scope="scope">
                <div>
                  <el-image :src="scope.row.image"></el-image>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="productName" label="商品名称" width="200"></el-table-column>
            <el-table-column prop="price" label="单价(元)" width="130">
            </el-table-column>
            <el-table-column prop="quantity" label="数量" width="100"></el-table-column>
            <el-table-column prop="totalPrice" label="合计(元)" width="130"></el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="120">
            </el-table-column>
          </el-table>
        </el-dialog>
        <el-dialog title="商品信息" :visible.sync="dialogFormVisible1">
          <div class="center p">
            <el-card shadow="never">
              <div style="float: left;width: 120px;height: 400px;">
                <el-image :src="productDetail.image"></el-image>
              </div>
              <div style="margin-left: 100px">
                <div style="padding: 18px;">
                  <h1 style="font-size: 18px">{{productDetail.name}}&nbsp;&nbsp;<i style="font-size: 14px">{{productDetail.subtitle}}</i></h1>
                  <p>{{productDetail.detail}}</p>
                  <p style="color: #646464;font-size: 15px">
                    <span>作者：<i style="color: #1a66b3">{{productDetail.author}}</i></span>
                    <span>出版时间：<i>{{productDetail.createTime | dateFormat('yyyy-MM-dd HH:mm:ss') }}</i></span>
                  </p>
                  <p>现价：<i style="color: red; font-size: 17px">{{productDetail.discountPrice}}&nbsp;&nbsp;</i>
                    <span style="color: #99a9bf;font-size: 14px">原价：<s>{{productDetail.originalPrice}}</s></span>
                  </p>
                </div>
              </div>
            </el-card>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data: function () {
    return {
      content: '',
      seen: false,
      see: false,
      input: '',
      avgRate: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      activeName: 'order',
      user: this.$route.params.user,
      dialogFormVisible: false,
      dialogFormVisible1: false,
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
      ],
      tableData: this.$route.params.orderData === null ? [] : this.$route.params.orderData,
      orderData: this.$route.params.orderData.slice(0, 4) === null ? [] : this.$route.params.orderData.slice(0, 4),
      productDetail: {},
      orderItemData: [],
      collectData: [],
      commentData: [],
      total: this.$route.params.orderData.length,
      currentPage: 1,
      pageSize: 4
    }
  },
  methods: {
    findAnyThingsBy (tab, event) {
      if (tab.name === 'order') {
        this.$axios.post('/findOrderInfo', {
          uid: this.user.uid
        }).then((res) => {
          this.total = res.data.length
          this.tableData = res.data
          this.orderData = res.data.slice(0, 4)
          this.currentPage = 1
        })
      } else {
        this.$axios.post('/findAnyThingsBy', {
          uid: this.user.uid,
          label: tab.label,
          name: tab.name
        }).then((res) => {
          if (tab.name === 'collect') {
            this.total = res.data.length
            this.tableData = res.data
            this.collectData = res.data.slice(0, 4)
            this.currentPage = 1
          } else if (tab.name === 'comment') {
            this.total = res.data.length
            this.tableData = res.data
            this.commentData = res.data
            this.currentPage = 1
          }
        })
      }
      console.log(this.tableData)
    },
    payment (row) {
      this.$confirm('确定付款？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('/paymentOrder', {
          order: row
        }).then((res) => {
          if (res.data.code === 200) {
            this.$message({ type: 'success', message: '付款成功!' })
          }
        })
      })
    },
    // 删除订单
    handleDelete (index, row) {
      this.$confirm('确定删除该订单？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('/delOrder', {
          order: row
        }).then((res) => {
          if (res.data.code === 200) {
            this.orderData.splice(index, 1)
            this.$message({ type: 'success', message: '删除订单成功!' })
          }
        })
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消删除' })
      })
    },
    // 订单中根据条件查询
    findOrderBy (tab, event) {
      this.$axios.post('/findOrderByStatus', {
        label: tab.label,
        name: tab.name,
        uid: this.user.uid
      }).then((res) => {
        this.total = res.data.length
        this.tableData = res.data
        this.orderData = res.data.slice(0, 4)
        this.currentPage = 1
      })
    },
    order () {
      this.activeName = 'order'
      console.log(this.activeName)
    },
    viewDetails (product) {
      this.dialogFormVisible1 = true
      this.productDetail = product
      console.log(product)
    },
    password () {
      this.see = true
    },
    updateUserInfo () {
      this.$axios.post('/updateUserInfo', {
        user: this.user
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message.success(res.data.message)
          this.user = res.data.user
        } else {
          this.$message.error(res.data.message)
        }
      })
    },
    goToCart () {
      this.$axios.post('/findProductCart', {
        uid: this.user.uid
      }).then((res) => {
        this.$router.push({
          name: 'cart',
          params: { cartData: res.data, user: this.user }
        })
      })
    },
    addCart (info) {
      this.$axios.post('/addProductToCart', {
        productId: info.productId,
        uid: this.user.uid,
        quantity: 1
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message.success(res.data.message)
        } else {
          this.$message.error(res.data.message)
        }
      })
    },
    addOrDeleteCollect (info) {
      this.$axios.post('/addOrDeleteCollectByProductId', {
        productId: info.productId,
        uid: this.user.uid
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message.success(res.data.message)
        }
      })
    },
    viewOrderDetail (row) {
      this.dialogFormVisible = true
      this.$axios.post('/findOrderItemByOrderNo', {
        orderNo: row.orderNo
      }).then((res) => {
        this.orderItemData = res.data
      })
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
    handleSizeChange (val) {
      this.pageSize = val
      this.orderData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
      // this.collectData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    handleSizeChange1 (val) {
      this.pageSize = val
      // this.orderData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
      this.collectData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    // 页面跳转
    handleCurrentChange (val) {
      this.currentPage = val
      this.orderData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
      // this.collectData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    handleCurrentChange1 (val) {
      this.currentPage = val
      // this.orderData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
      this.collectData = this.tableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    change (e) {
      this.$forceUpdate()
    },
    dateSearch (e) {
      // console.log('当前内容：' + e.currentTarget.innerText)
      let date = e.currentTarget.innerText
      // 传参date到后台根据附加时间条件综合查询订单,默认为一个星期内
      console.log(date)
    }
  }

}
</script>

<style scoped lang="stylus">
  @import "../common/stylus/common.styl"
  .info>>>.el-tabs__item.is-left
    width 200px
    text-align center
    margin-top 8px
    font-size 16px
  .info>>>.el-tabs__item.is-left.is-active
    color red
  .date i
    padding 0 10px
    font-size 12px
    color #949494
  .collect .span
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
</style>
