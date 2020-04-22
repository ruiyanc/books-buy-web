<template>
    <div>
      <div class="el-header" style="background-color: #f9f9f9;margin: 0;padding: 5px">
        <div class="center">
          <div class="center-left">
            Hi,<i v-if="user!=null"><el-link href="/#/info" :underline="false" type="danger" v-text="user.username"></el-link></i>
            <i><el-link href="">[退出]</el-link></i>
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
      <div class="center" style="position: relative;">
        <div>
          <img src="@/assets/img/b2.jpg" width="200px" height="100px" alt="看不到">
        </div>
        <div style="width: 65%;position:absolute;top: 30px;left: 300px;">
          <el-steps :active="active" simple finish-status="success">
            <el-step title="我的购物车" icon="el-icon-shopping-cart-2"></el-step>
            <el-step title="填写订单" ></el-step>
            <el-step title="完成订单" ></el-step>
          </el-steps>
        </div>
      </div>
      <hr style="border: 2px solid red"/>
      <div class="center">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"
          style="width: 100%" @selection-change="selected">
          <el-table-column label="全选" type="selection" width="80">
          </el-table-column>
          <el-table-column label="商品名称" width="200" style="text-align: center">
            <template slot-scope="scope">
              <div>
                <el-image :src="scope.row.image"></el-image>
                <p>
                  <i style="font-size: 16px;margin: 0">{{scope.row.name}}&nbsp;&nbsp;</i>
<!--                  <i style="font-size: 14px;color: #969696">{{scope.row.author}}</i>-->
                </p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="author" label="作者" width="180"></el-table-column>
          <el-table-column label="单价(元)" width="120">
            <template slot-scope="scope">
              <span>{{ scope.row.discountPrice.toFixed(2) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="数量" width="200">
            <template slot-scope="scope">
              <div>
                <el-input style="width: 135px" v-model="scope.row.quantity" @change="handleInput(scope.row)">
                  <el-button size="small" icon="el-icon-minus" slot="prepend" @click="del(scope.row)">
                  </el-button>
                  <el-button size="small" icon="el-icon-plus" slot="append" @click="add(scope.row)">
                  </el-button>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="金额(元)" width="120">
            <template slot-scope="scope">
              <span>{{scope.row.goodTotal.toFixed(2)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
            <el-button type="text" size="small">
              移入收藏
            </el-button>
              <el-button @click="handleDelete(scope.$index, tableData)"
                type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <span style="font-family: Microsoft YaHei,serif;color: red;padding-left: 70%">商品总价：{{moneyTotal}}元</span>
        <el-button style="float: right;width: 110px;height: 40px;border-radius: 0;" type="danger" @click="submit()">结算</el-button>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="收货人" label-width="150px">
              <el-input v-model="form.name" autocomplete="off" style="width: 350px;"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" label-width="150px">
              <el-input v-model="form.phone" autocomplete="off" style="width: 350px;"></el-input>
            </el-form-item>
            <el-form-item label="所在地区" label-width="150px">
              <el-input v-model="form.address" autocomplete="off" style="width: 350px;"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancel()">取 消</el-button>
            <el-button type="primary" @click="formSubmit()">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cart',
  data: function () {
    return {
      moneyTotal: 0,
      active: 0,
      user: this.$route.params.user == null ? null : this.$route.params.user,
      tableData: this.$route.params.cartData,
      multipleSelection: [],
      dialogFormVisible: false,
      form: {
        name: '',
        phone: '',
        address: ''
      }
    }
  },
  computed: {
  },
  mounted () {
    this.checked()
  },
  methods: {
    checked () {
      this.$nextTick(() => {
        for (let i = 0; i < this.tableData.length; i++) {
          this.$refs.multipleTable.toggleRowSelection(this.tableData[i], true)
        }
      })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleDelete (index, row) {
      this.$confirm('确定删除该商品？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({ type: 'success', message: '删除成功!' })
      }).catch(() => {
        this.$message({ type: 'info', message: '已取消删除' })
      })
    },
    handleInput (value) {
      if (value.quantity == null || value.number === '') {
        value.quantity = 1
      }
      // this.$refs.goodTotal.innerText = (value.quantity * value.discountPrice).toFixed(2)
      value.goodTotal = (value.quantity * value.discountPrice).toFixed(2)
      // 保留两位小数 //增加商品数量也需要重新计算商品总价
      this.selected(this.multipleSelection)
    },
    add (value) {
      value.quantity += 1
      this.handleInput(value)
    },
    del (value) {
      if (value.quantity > 1) {
        value.quantity -= 1
        this.handleInput(value)
      }
    },
    // 返回的参数为选中行对应的对象
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
    cancel () {
      this.active -= 1
      this.dialogFormVisible = false
    },
    submit () {
      this.active += 1
      this.dialogFormVisible = true
    },
    formSubmit () {
      this.active += 1
      this.dialogFormVisible = false
      // 提交收货人信息到后台
      // 并提交到待付款订单且跳转到订单页面
    }
  },
  created () {
    window.onload = () => {
      this.toggleSelection()
    }
  }
}
</script>
<style scoped lang="stylus">
  @import "../common/stylus/common.styl"
  .center
    margin 0 14%
    padding 0
  .center-left
    margin 5px 0
    display inline
    font-size 14px
    padding: 5px
  .center-left>>>.el-link--inner:hover
    color red
  .center-right
    display: inline
    float: right
    font-size: 13px
  i
    padding 2px 5px
  .center>>>.el-step__title.is-process
    color red
</style>
