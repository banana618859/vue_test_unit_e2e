<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-28 18:25:18
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2019-12-05 17:09:35
 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{text}}</h2>
    <el-button type="primary" @click="getSonTableData">getSonTableData</el-button>
    <Son
      ref="sonPage"
      :father="myname"
    ></Son>
    <span>{{ $t('common.sure')}}</span>
    <el-button type="primary" @click="changeLaguages()">切换语言</el-button>
    <el-button @click="getSonProp">getSonProp</el-button>
    <button @click="changeOne('jerry')">Buy</button>
    <h2>Essential Links--user:</h2>
    <div class="user">{{getUser}}</div>
    <input />
    <button class="changeText" @click="changeText">changeText</button>
    <button class="btn" @click="changeMsg">点我</button>
    <button>搜索</button>
    <div>
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button
                type="danger"
                class="removeBtn"
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                size="small">
                移除{{scope.row.date}}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
        <el-button @click="dialogVisible = true" class="showDialog">点击打开 Dialog</el-button>
        <el-button @click="close" class="closePage">关闭页面</el-button>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" class="cancelBtn">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false" class="sureBtn">确 定</el-button>
        </span>
      </el-dialog>
    </div> 
 
  </div>
</template>

<script>
// import 'element-ui/lib/theme-chalk/index.css';
import {mapActions,mapMutations} from 'vuex'
import Son from '@/components/Son.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      myname: 'HelloWorld',
      hasClose: false,
      currentLang: 'zh',
      user: '',
      text: "text1",
      msg: "vue test",
      msg1: '你好',
      newData: '新数据',
      dialogVisible: false,
      tableData: [{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  components:{
    Son
  },
  created() {
      this.msg = 'aftermounted'
  },
  computed:{
    getUser(){
      return this.$store.state.user;
    }
  },
  mounted() {
      this.msg1 = '开课吧';
  },
  methods: {
    changeLaguages() {
      console.log(this.$i18n.locale)
      let lang = this.currentLang === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang
    },
    ...mapActions([
      'actionClick'
    ]),
    ...mapMutations([
      'changeOne'
    ]),
    changeText(){
      this.text= 'text2';
    },
    getSonProp(){
      let fa = this.$refs.sonPage.sonName;
      console.log('--rel:',fa);
      return fa;
    },
    getSonTableData(){
      let data = this.$refs.sonPage.tableData;
      console.log('--rel-data:',data);
      return data;
    },
    changeMsg(){
        if(this.newData == 1){
            this.msg = 'test_if'
        }else{
            this.msg = 'click over1'
        }
    },
    close(){
      this.$message('测试完毕，关闭页面！');
      this.hasClose = true;
    },
    deleteRow(index, rows) {
      this.$confirm(
        "delete sure?",
        "提示",
        {
          confirmButtonText: "删除",
          cancelButtonText: "取消1",
          confirmButtonClass: "removeLine",
          cancelButtonClass: "cancelRemoveLine"
        })
      .then(_ => {
          rows.splice(index, 1);
          this.$message({
            message: '成功删除一条记录！',
            type: 'success'
          })
        },
        _ => {
          this.$message('点击了取消！')
        }
      )
      .catch(_ =>{
        console.log('error:',e)
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
