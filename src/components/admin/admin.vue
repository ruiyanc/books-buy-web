<template>
  <div class="center">
    <div class="el-header">
      <div style="position: relative">
        <p style="position: absolute;right: 30px">
          <i v-if="this.$route.params.user!=null">
            <i>当前用户：<el-link href="" :underline="false" type="danger" v-text="this.$route.params.user.username"></el-link></i>
            <i><el-link href="">[退出]</el-link></i>
            <el-button v-if="this.$route.params.user.username==='root'" @click="findAllUser()"
                       style="width: 100px;height: 40px;border-radius: 0;" type="danger">管理用户</el-button>
          </i>
        </p>
        <el-dialog title="用户信息" :visible.sync="dialogFormVisible2">
          <el-table ref="userTable" :data="userTableData" tooltip-effect="dark" style="width: 100%">
            <el-table-column type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="uid" label="uid" v-if="false"></el-table-column>
            <el-table-column prop="username" label="用户名" ></el-table-column>
            <el-table-column prop="password" label="密码" ></el-table-column>
            <el-table-column prop="address" label="地址" ></el-table-column>
            <el-table-column prop="phone" label="手机号" ></el-table-column>
            <el-table-column label="权限" >
              <template slot-scope="scope">
                <span v-if="scope.row.role==='0'">超级管理员</span>
                <span v-if="scope.row.role==='1'">管理员</span>
                <span v-if="scope.row.role==='2'">普通用户</span>
              </template>
            </el-table-column>
            <el-table-column label="创建时间"  >
              <template slot-scope="scope">
                <span>{{ scope.row.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
              </template>
            </el-table-column>
            <el-table-column label="更新时间"  >
              <template slot-scope="scope">
                <span>{{ scope.row.updateTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="updateRole(scope.row)" type="text" size="small">权限</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-dialog>
      </div>
    </div>
    <div class="el-main">
      <el-button style="float: left;width: 100px;height: 40px;border-radius: 0;" type="danger"
                 @click="showAllCategory()">新增商品</el-button>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="全选" type="selection" width="30"></el-table-column>
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="id" label="id" v-if="false"></el-table-column>
        <el-table-column prop="category" label="商品类别" width="80"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="110"></el-table-column>
        <el-table-column prop="author" label="作者" width="80"></el-table-column>
        <el-table-column prop="subtitle" label="商品标题" width="200"></el-table-column>
        <el-table-column label="商品图片" width="180">
          <template slot-scope="scope">
            <el-image :src="scope.row.image" ></el-image>
            <p>{{scope.row.image}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="detail" label="商品描述" width="400"></el-table-column>
        <el-table-column label="原价" width="60">
          <template slot-scope="scope">
            <span>{{ scope.row.originalPrice.toFixed(2) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="折扣价" width="70">
          <template slot-scope="scope">
            <span>{{ scope.row.discountPrice.toFixed(2) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="stock" label="库存" width="50"></el-table-column>
        <el-table-column label="商品状态" width="80">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status==='1'" @click="upOrDown(scope.row)" type="text" size="small">下架</el-button>
            <el-button v-if="scope.row.status==='2'" @click="upOrDown(scope.row)" type="text" size="small">上架</el-button>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="90" >
          <template slot-scope="scope">
            <span>{{ scope.row.createTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" width="90" >
          <template slot-scope="scope">
            <span>{{ scope.row.updateTime | dateFormat('yyyy-MM-dd HH:mm:ss')  }}</span>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="80">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span>总共<i style="color: red">{{total}}</i>条</span>
      <el-pagination
        style="text-align: center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total">
      </el-pagination>
<!--      新增商品-->
      <el-dialog title="商品信息" :visible.sync="dialogFormVisible">
        <el-form :model="productForm" ref="productForm" label-width="140px">
          <el-form-item label="商品类别">
              <el-select  v-model="value"  placeholder="全部分类" style="width: 450px">
                <el-option  v-for="item in options" :key="item.id"
                           :label="item.name" :value="item.id" ></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input v-model="productForm.name" autocomplete="off" style="width: 450px;"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="productForm.author" autocomplete="off" style="width: 450px;"></el-input>
          </el-form-item>
          <el-form-item label="商品标题">
            <el-input v-model="productForm.subtitle" autocomplete="off" style="width: 450px;"></el-input>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-input v-model="productForm.image" autocomplete="off" style="width: 450px;"></el-input>
          </el-form-item>
          <el-form-item label="商品详情">
            <el-input v-model="productForm.detail" autocomplete="off" style="width: 450px;"></el-input>
          </el-form-item>
          <el-form-item label="原价">
            <el-input v-model="productForm.originalPrice" autocomplete="off" style="width: 450px;"></el-input>
          </el-form-item>
          <el-form-item label="折扣价">
            <el-input v-model="productForm.discountPrice" autocomplete="on" style="width: 450px;"></el-input>
          </el-form-item>
          <el-form-item label="库存">
            <el-input v-model="productForm.stock" autocomplete="off" style="width: 450px;"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button style="float: left;margin-left: 100px" type="danger" @click="dialogFormVisible = false">取 消</el-button>
          <el-button style="margin-right: 100px" type="primary" @click="formSubmit('productForm')">确 定</el-button>
        </div>
      </el-dialog>
<!--      编辑商品-->
      <el-dialog title="商品信息" :visible.sync="dialogFormVisible1">
        <el-form :model="productFormInfo" ref="productFormInfo" label-width="140px">
          <el-form-item label="商品类别">
            <el-input v-model="productFormInfo.category" autocomplete="off" style="width: 550px;" disabled></el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input v-model="productFormInfo.name" autocomplete="off" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="productFormInfo.author" autocomplete="off" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="商品标题">
            <el-input v-model="productFormInfo.subtitle" autocomplete="off" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-input v-model="productFormInfo.image" autocomplete="off" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="商品详情">
            <el-input v-model="productFormInfo.detail" autocomplete="off" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="原价">
            <el-input v-model="productFormInfo.originalPrice" autocomplete="off" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="折扣价">
            <el-input v-model="productFormInfo.discountPrice" autocomplete="on" style="width: 550px;"></el-input>
          </el-form-item>
          <el-form-item label="库存">
            <el-input v-model="productFormInfo.stock" autocomplete="off" style="width: 550px;"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button style="float: left;margin-left: 100px" type="danger" @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button style="margin-right: 100px" type="primary" @click="formInfoSubmit('productFormInfo')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data: function () {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      tableData: [],
      presentTableData: [],
      userTableData: [],
      productForm: {
        name: '',
        author: '',
        subtitle: '',
        image: '',
        detail: '',
        originalPrice: '',
        discountPrice: '',
        stock: ''
      },
      productFormInfo: {},
      options: [],
      value: '',
      pageSize: 4,
      currentPage: 1,
      total: 0
    }
  },
  created () {
    this.initFindAllProduct()
  },
  methods: {
    initFindAllProduct () {
      this.$axios.get('/adminFindAllProduct')
        .then((res) => {
          this.currentPage = 1
          this.presentTableData = res.data
          this.tableData = this.presentTableData.slice((this.currentPage - 1) * this.pageSize,
            (this.currentPage - 1) * this.pageSize + this.pageSize)
          this.total = this.presentTableData.length
        })
    },
    findAllUser () {
      this.dialogFormVisible2 = true
      this.$axios.get('/adminFindAllUser')
        .then((res) => {
          console.log(res)
          this.userTableData = res.data
        })
    },
    updateRole (row) {
      this.$axios.post('/adminUpdateUser', {
        user: row
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message.success('修改权限成功！')
          this.findAllUser()
        }
      })
    },
    showAllCategory () {
      this.dialogFormVisible = true
      this.$axios.get('/findAllCategory')
        .then((res) => {
          this.options = res.data
        })
    },
    // 新增商品
    formSubmit (formName) {
      console.log(formName)
      this.$axios.post('/adminInsertProduct', {
        productForm: this.productForm,
        category: this.value
      }).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          this.$message.success('新增商品成功！')
          this.dialogFormVisible = false
          this.initFindAllProduct()
        } else {
          this.$alert(res.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      })
    },
    handleClick (row) {
      this.dialogFormVisible1 = true
      console.log(row)
      this.productFormInfo = row
    },
    upOrDown (row) {
      console.log(row)
      this.$axios.post('/adminUpOrDown', {
        productFormInfo: row
      }).then((res) => {
        if (res.data.code === 200) {
          this.$message.success('上下架成功！')
          this.initFindAllProduct()
        }
      })
    },
    // 修改商品
    formInfoSubmit (formName) {
      this.$axios.post('/adminUpdateProduct', {
        productFormInfo: this.productFormInfo
      }).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          this.dialogFormVisible1 = false
          this.$message.success('修改商品成功!')
          this.initFindAllProduct()
        } else {
          this.$alert(res.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.tableData = this.presentTableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    },
    // 页面跳转
    handleCurrentChange (val) {
      this.currentPage = val
      this.tableData = this.presentTableData.slice((this.currentPage - 1) * this.pageSize, (this.currentPage - 1) * this.pageSize + this.pageSize)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "../common/stylus/common.styl"
.center
  margin 13px 5% auto 5%
  padding 0
</style>
