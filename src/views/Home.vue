<template>
  <div class="home">
    <!-- 导航栏 -->
    <div class="nav">
      <div class="nav-box">
        <div class="nav-img">
          <img src="/imgs/logo_home.png" alt="">
        </div>
        <div class="nav-ul">
          <ul>
            <li>首页</li>
            <li>找工作</li>
            <li>招人才</li>
            <li>HR工具箱</li>
            <li>职场资讯</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 搜索栏 -->
    <div class="search">
      <div class="search-box">
        <div class="group">
          <div class="ipp">
            <input type="text" placeholder="请输入关键字" class="inpt">
          </div>
          <div class="city"  @click="handleShow" id="path">选择地区</div>
          <div v-show="ok" class="zhezhao">
            <div class="path">
              <div class="head">
                <span>请选择地区</span>
                <span class="close" @click="handleClose"></span>
              </div>
              <div class="center">
                <span  class="qing">选择地区</span>
                <select>
                  <option value="beijing">山西</option>
                  <!-- <option value="beijing">北京</option>
                  <option value="beijing">河南</option>
                  <option value="beijing">河北</option>
                  <option value="beijing">东北</option> -->
                </select>
                <select>
                  <option>太原</option>
                  <option>吕梁</option>
                  <option>朔州</option>
                  <option>大同</option>
                  <option>运城</option>
                  <option>长治</option>
                  <option>临汾</option>
                  <option>阳泉</option>
                  <option>晋中</option>
                  <option>忻州</option>
                </select>
              </div>
              <div class="foot">
                <span class="que" @click="handleSure">确定</span>
                <span class="qu">取消</span>
              </div>
            </div>
          </div>
          <div class="btn">
            <input type="submit" value="找工作" class="sub">
          </div>
        </div>
      </div>
    </div>
    <!-- 找工作模块 -->
    <div class="work">
      <div class="box-work">
        <p style="padding-left:30px;line-height:40px">
          <span style="margin-right:20px;">学历要求</span>
          <el-tag color="white" 
                  v-for="(item,index) in list" :key="index" 
                  style="margin-right:20px;color:black;font-size:14px;border:0;cursor: pointer;"
                  @click="Educa(index)"
                  ref="myEdu"
                  >{{item}}</el-tag>
        </p>
        <p style="padding-left:30px;line-height:40px">
          <span style="margin-right:20px">职位薪资</span>
          <el-tag color="white"
                  v-for="(item,index) in list1" :key="index" 
                  style="margin-right:20px;color:black;font-size:14px;border:0;cursor: pointer;"
                  @click="handleClick(index)"
                  ref="myDom"
                  >{{item}}</el-tag>
        </p>
        <p style="padding-left:30px;line-height:40px">
          <span style="margin-right:20px;">职位亮点</span>
          <el-tag color="white" 
                  v-for="(item,index) in list2" :key="index" 
                  style="margin-right:20px;border:0;color:black;font-size:14px;cursor: pointer;"
                  @click="Posit(index)"
                  ref="myPosit"
                  >{{item}}</el-tag>
        </p>
        <p style="padding-left:30px;line-height:40px">
          <span style="margin-right:20px;">更多筛选</span>
          <el-dropdown @command="handleCommand" style="margin-right:20px">
            <span class="el-dropdown-link">
              所属专业<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">黄金糕</el-dropdown-item>
              <el-dropdown-item command="b">狮子头</el-dropdown-item>
              <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="d">双皮奶</el-dropdown-item>
              <el-dropdown-item command="e">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown @command="handleCommand" style="margin-right:20px">
            <span class="el-dropdown-link">
              企业规模<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">黄金糕</el-dropdown-item>
              <el-dropdown-item command="b">狮子头</el-dropdown-item>
              <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="d">双皮奶</el-dropdown-item>
              <el-dropdown-item command="e">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown @command="handleCommand" style="margin-right:20px">
            <span class="el-dropdown-link">
              工作性质<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">黄金糕</el-dropdown-item>
              <el-dropdown-item command="b">狮子头</el-dropdown-item>
              <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="d">双皮奶</el-dropdown-item>
              <el-dropdown-item command="e">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <select style="width:100px;font-size:14px;color:#666666">
            <option>工作经验</option>
            <option>无经验</option>
            <option>1年以下</option>
            <option>1-3年</option>
            <option>3-5年</option>
            <option>5-10年</option>
            <option>10年以上</option>
          </select>
          <select style="width:100px;font-size:14px;color:#666666">
            <option>更新时间</option>
            <option>3天内</option>
            <option>7天内</option>
            <option>15天内</option>
            <option>30天内</option>
          </select>
        </p>
      </div>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <div class="left" >
        <el-table></el-table>
      </div>
      <div class="right" style="float:right">
        <div class="img">
          <img src="/imgs/1.jpg" width="230px" height="175px" style="margin-bottom :10px;">
        </div>
        <el-latest></el-latest>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table'
import Latest from '@/components/Latest'
export default {
  components:{
        'el-table' : Table,
        'el-latest' : Latest,
  },
  data() {
    return {
      ok:false,
      activeIndex : '1',
      list:['不限','初中','高中','大专','本科','硕士','及以上'],
      list1:['不限','1千~1千5/月','2千~3千/月','3千~5千/月','5千~1万/月','1万以上/月'],
      list2:['不限','五险一金','加班费','年终奖','环境好','朝九晚五'],
    }
  },
  methods: {
    handleShow(){
      this.ok = !this.ok
    },
    handleClose(){
      this.ok = !this.ok
    },
    handleSure(){
      let path = document.querySelector('#path')
      let select = document.querySelectorAll('select')[1].value
      this.ok = !this.ok
      path.innerHTML = select
    },
    handleClick(index) {
      for (let i in this.$refs.myDom) {
        this.$refs.myDom[i].$el.style.backgroundColor = "#fff";
        this.$refs.myDom[i].$el.style.border = '0';
        this.$refs.myDom[i].$el.style.color = 'black'
      }
      this.$refs.myDom[index].$el.style.backgroundColor = "#FFF7EE";
      this.$refs.myDom[index].$el.style.border = "1px solid #FF6600";
      this.$refs.myDom[index].$el.style.color = '#FF6600'
    },
    Educa(index){
      for (let i in this.$refs.myDom) {
        this.$refs.myEdu[i].$el.style.backgroundColor = "#fff";
        this.$refs.myEdu[i].$el.style.border = '0';
        this.$refs.myEdu[i].$el.style.color = 'black'
      }
      this.$refs.myEdu[index].$el.style.backgroundColor = "#FFF7EE";
      this.$refs.myEdu[index].$el.style.border = "1px solid #FF6600";
      this.$refs.myEdu[index].$el.style.color = '#FF6600'
    },
    Posit(index){
      for (let i in this.$refs.myDom) {
        this.$refs.myPosit[i].$el.style.backgroundColor = "#fff";
        this.$refs.myPosit[i].$el.style.border = '0';
        this.$refs.myPosit[i].$el.style.color = 'black'
      }
      this.$refs.myPosit[index].$el.style.backgroundColor = "#FFF7EE";
      this.$refs.myPosit[index].$el.style.border = "1px solid #FF6600";
      this.$refs.myEdu[index].$el.style.color = '#FF6600'
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    enter(index){
      console.log(dd)
    },
    handleCommand(command) {
        this.$message('click on item ' + command);
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  padding-bottom: 200px;
  overflow: hidden;
  height: auto;
}
.nav {
  width: 100%;
  height: 90px;
}
.nav-box {
  width: 1200px;
  height: 90px;
  margin: 0 auto;
}
.nav-img {
  float: left;
  vertical-align: middle;
  margin: 10px 0;
}
.nav-ul {
  float: left;
  padding-left: 40px;
  max-width: 730px;
}
.nav-ul ul li {
  float: left;
  padding: 0 15px;
  line-height: 90px;
  font-size: 16px;
  font-weight: bolder;
  cursor: pointer;
}
.nav-ul ul li:hover {
  color: #1787fb;
  text-decoration: underline;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 90px;
    line-height: 90px;
    color: #000;
    font-size: 16px;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  color: #1787fb;
}
.el-menu-demo {
  padding: 0 22px;
  float: right;
  font-size: 16px;
  color: black;
  font-weight: bolder;
}
.el-menu.el-menu--horizontal {
  border: none;
  height: 90px;
  line-height: 90px;
}
//  搜索栏 
.search{
  width: 100%;
  height: 155px;
  background: url(/imgs/banner3.jpg) no-repeat;
}
.search-box{
  width: 1025px;
  height: 155px;
  padding-left: 175px;
  margin: 0 auto;
  overflow: hidden;
}
.group{
  width: 770px;
  height: 55px;
  background: #fff;
  box-shadow: 0px 1px 5px 1px rgba(93,91,91,0.83);
  border-radius: 3px;
  margin: 50px 0;
}
.ipp{
  width: 510px;
  padding-left: 17px;
  margin-top: 10px;
  float: left;
  border-right: 1px solid #E6E6E6;
}
.inpt{
  width: 500px;
  height: 36px;
  line-height: 36px;
  border: 0px;
  outline: none;
}
.city{
  float: left;
  width: 115px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  color: #999;
  cursor: pointer;
}
// 遮罩层
.zhezhao{
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.4);
  z-index: 666;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
// 弹框
.path{
  width: 630px;
  height: 200px;
  background: #FFFFFF;
  border: 5px solid #A3A3A3;
  border-radius: 5px;
  position: absolute;
  left: 444.5px;
  top: 275.5px;
}
.head{
  width: 100%;
  height: 45px;
  background: #F0F0F0;
  padding-top: 10px;
  padding-left: 15px;
  box-sizing: border-box;
  position: relative;
}
.close{
  background: url(/imgs/44.png) no-repeat;
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.foot{
  width: 100%;
  height: 50px;
  background: #F0F0F0;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.que{
  width: 72px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  background: #5F8DC9;
  text-align: center;
  color: white;
}
.qu{
  width: 72px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  background: #CCCCCC;
  text-align: center;
  color: #666666;
}
.center{
  padding-left: 30px;
  padding-top: 40px;
}
select{
  padding: 3px 3px 3px 10px;
  background: transparent;
  height: 28px;
  width: 130px;
  font-size: 14px;
  outline: none;
  border: 1px solid #d0d0d0;
  cursor: pointer;
  margin-right: 10px;
  line-height: 28px;
}
.qing{
  font-weight: bolder;
  margin-right: 10px ;
}
.btn{
  float: left;
  width: 127px;
  height: 56px;
}
.sub{
  background-color: #00ae66;
  font-size: 18px;
  text-align: center;
  width: 127px;
  height: 56px;
  line-height: 56px;
  border: 0px;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 0px 3px 3px 0px;
}
// 工作模块
.work{
  width: 100%;
}
.box-work{
  width: 1198px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  padding-top: 10px;
  padding-bottom: 15px;
  border-top: 0;
}
// 下拉菜单
.el-dropdown-link {
  cursor: pointer;
  color: black;
  width: 60px;
  height: 30px;
}
.el-icon-arrow-down {
  font-size: 14px;
}
// 广告
.table{
  position: relative;
  width:1198px;
  margin:30px auto 0px;
}
.right{
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
}
</style>
