<template>
  <div class="center">
    <div class="el-header">
      <div style="position: relative">
        <p style="position: absolute;right: 30px">
          <i>
            <i>当前用户：<el-link href="" :underline="false" type="danger" v-text="this.$route.params.user.username"></el-link></i>
            <i><el-link href="">[退出]</el-link></i>
          </i>
          <el-button style="width: 100px;height: 40px;border-radius: 0;" type="danger">管理用户</el-button>
        </p>
      </div>
    </div>
    <div class="el-main">
      <el-button style="float: left;width: 100px;height: 40px;border-radius: 0;" type="danger"
                 @click="showAllCategory()">新增商品</el-button>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="全选" type="selection" width="30"></el-table-column>
        <el-table-column type="index" label="序号" width="50"></el-table-column>
<!--        <el-table-column v-for="item in tableColumns" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>-->
        <el-table-column prop="category" label="商品类别" width="80"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="110"></el-table-column>
        <el-table-column prop="author" label="作者" width="80"></el-table-column>
        <el-table-column prop="subtitle" label="商品标题" width="200"></el-table-column>
        <el-table-column label="商品图片" width="180">
          <template slot-scope="scope">
            <el-image :src="scope.row.image"></el-image>
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
            <el-button v-if="scope.row.status==='1'" @click="handleDelete(scope.$index, tableData)" type="text" size="small">下架</el-button>
            <el-button v-if="scope.row.status==='0'" @click="handleDelete(scope.$index, tableData)" type="text" size="small">上架</el-button>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data: function () {
    return {
      dialogFormVisible: false,
      tableData: [],
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
      options: [],
      value: ''
    }
  },
  created () {
    this.initFindAllProduct()
  },
  methods: {
    initFindAllProduct () {
      this.$axios.get('/adminFindAllProduct')
        .then((res) => {
          console.log(res)
          this.tableData = res.data
          console.log(this.tableData)
        })
    },
    showAllCategory () {
      this.dialogFormVisible = true
      this.$axios.get('/findAllCategory')
        .then((res) => {
          console.log(res)
          this.options = res.data
          console.log(this.options)
        })
    },
    formSubmit (formName) {
      this.$axios.post('/adminInsertProduct', {
        productForm: this.productForm,
        category: this.value
      }).then(res => {
        console.log(res)
        if (res.data.code === 200) {
          this.dialogFormVisible = false
          this.initFindAllProduct()
        } else {
          this.$alert(res.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      })
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
