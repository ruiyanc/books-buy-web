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
    <div class="info">
      <div class="center">
        <el-tabs type="border-card" tab-position="left" style="width: 100%;height: 600px"
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
                  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
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
                          <span v-if="scope.row.status==='1'">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                        <el-button @click="handleDelete(scope.$index, tableData)"
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
                  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
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
                          <span v-if="scope.row.status==='1'">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                        <el-button @click="handleDelete(scope.$index, tableData)"
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
              <el-tab-pane label="已付款" name="2">
                <el-card shadow="never">
                  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
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
                          <span v-if="scope.row.status==='1'">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                        <el-button @click="handleDelete(scope.$index, tableData)"
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
              <el-tab-pane label="待评价" name="3">
                <el-card shadow="never">
                  <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
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
                          <span v-if="scope.row.status==='1'">去付款</span>
                          <span v-if="scope.row.status==='2'">去评价</span>
                        </el-button>
                        <el-button @click="handleDelete(scope.$index, tableData)"
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
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="我的账单">我的账单</el-tab-pane>
          <el-tab-pane label="我的收藏" name="collect">我的收藏</el-tab-pane>
          <el-tab-pane label="我的评论" name="comment">我的评论</el-tab-pane>
          <el-tab-pane label="个人信息">个人信息</el-tab-pane>
          <el-tab-pane label="安全中心">安全中心</el-tab-pane>
          <el-tab-pane label="收货地址">收货地址</el-tab-pane>
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
<!--                  <br/>-->
<!--                  <p style="font-size: 16px;margin: 0;padding: 0">{{scope.row.productName}}</p>-->
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
              <template slot-scope="scope">
                <el-button @click="handleDelete(scope.$index, tableData)"
                           type="text" size="small">去评价</el-button>
              </template>
            </el-table-column>
          </el-table>
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
      input: '',
      activeName: 'order',
      user: this.$route.params.user,
      dialogFormVisible: false,
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
      orderData: this.$route.params.orderData,
      tableData: this.$route.params.orderData.slice(0, 4),
      orderItemData: [],
      collectData: [],
      total: this.$route.params.orderData.length,
      currentPage: 1,
      pageSize: 4
    }
  },
  methods: {
    findAnyThingsBy (tab, event) {
      console.log(tab.name)
      this.$axios.post('/findAnyThingsBy', {
        uid: this.user.uid,
        label: tab.label,
        name: tab.name
      }).then((res) => {
        if (tab.name === 'collect') {
          this.collectData = res.data
          console.log(this.collectData)
        } else if (tab.name === 'comment') {
          this.commentData = res.data
          console.log(res.data)
        }
      })
    },
    // 订单中根据条件查询
    findOrderBy (tab, event) {
      this.$axios.post('/findOrderByStatus', {
        label: tab.label,
        name: tab.name,
        uid: this.user.uid
      }).then((res) => {
        this.orderData = res.data
        this.tableData = res.data.slice(0, 4)
        console.log(this.orderData)
        this.total = res.data.length
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
    selected (selection) {
      this.multipleSelection = selection
      this.moneyTotal = 0
      // 此处不支持forEach循环，只能用原始方法了
      for (let i = 0; i < selection.length; i++) {
        //   判断返回的值是否是字符串
        if (typeof selection[i].goodTotal === 'string') {
          selection[i].goodTotal = parseFloat(selection[i].goodTotal)
        }
        this.moneyTotal += selection[i].goodTotal
        // this.moneyTotal += parseFloat(this.$refs.goodTotal[i].innerText)
        // console.log(this.$refs.goodTotal[i].innerText)
      }
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.tableData = this.orderData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    // 页面跳转
    handleCurrentChange (val) {
      this.currentPage = val
      this.tableData = this.orderData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
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
</style>
