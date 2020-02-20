<template>
  <el-row :gutter="10">
    <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="1" >
      <div class="grid-content bg-purple-light" style="background: none">
        <div class="p">送至：
          <div class="address">
            <el-select v-model="value" placeholder="北京">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="8" :lg="10" :xl="11">
      <div class="grid-content bg-purple-light">
      </div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: function () {
    return {
      options: [{
        value: '选项1',
        label: '北京'
      }, {
        value: '选项2',
        label: '上海'
      }, {
        value: '选项3',
        label: '广州'
      }, {
        value: '选项4',
        label: '杭州'
      }, {
        value: '选项5',
        label: '西安'
      }, {
        value: '选项5',
        label: '西安'
      }, {
        value: '选项5',
        label: '西安'
      }, {
        value: '选项5',
        label: '西安'
      }, {
        value: '选项5',
        label: '西安'
      }]
    }
  }
}
</script>
<style scoped>
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .p {
    /*padding-left: 5px;*/
    font-size: 15px;
    display: inline;
  }
  .p, .address{
    float: right;
  }
</style>
