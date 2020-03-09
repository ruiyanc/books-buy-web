<template>
    <div>
      <div class="el-header" style="background-color: #f9f9f9;margin: 0;padding: 5px">
        <div class="center">
          <div class="center-left">
            Hi,<i><el-link href="/#/info" :underline="false" type="danger">言睿</el-link></i>
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
      <div class="center" style="border: 1px solid red;position: relative;">
        <div>
          <img src="@/assets/img/b2.jpg" width="200px" height="100px" alt="看不到">
        </div>
        <div style="width: 65%;position:absolute;top: 30px;left: 300px;">
          <el-steps :active="1" simple finish-status="success">
            <el-step title="我的购物车" icon="el-icon-shopping-cart-2"></el-step>
            <el-step title="填写订单" ></el-step>
            <el-step title="完成订单" ></el-step>
          </el-steps>
        </div>
      </div>
      <hr style="border: 2px solid red"/>
      <div class="center">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            label="全选"
            type="selection"
            width="80">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品信息"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="单价(元)"
            width="120">
          </el-table-column>
          <el-table-column prop="amount" label="数量" width="200">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.number" :min="1" :max="10"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="金额(元)"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template slot-scope="scope">
            <el-button type="text" size="small">
              移入收藏
            </el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cart',
  data: function () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        amount: 1,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        amount: 5,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        amount: 2,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        amount: 3,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        amount: 1,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        amount: 1,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        amount: 1,
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
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
  .center>>>.el-step__title.is-success
    color red
</style>
