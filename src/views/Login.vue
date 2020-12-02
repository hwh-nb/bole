<template>
  <div class="login">
    <h1 class="title">请选择注册类型</h1>
    <div class="left" @click="zhaopin">
        <h2>招聘者</h2>
        <div class="tu1"></div>
        <p>招聘注册</p>
        <p>√ 发布招聘信息</p>
        <p>√ 收取简历投递</p>
        <p>√ 多种职位分享</p>
      </div>

    <div class="right" @click="qiuzhi">
        <h2>求职者</h2>
        <div class="tu2"></div>
        <p>求职注册</p>
        <p>√ 免费创简历</p>
        <p>√ 职位海量淘</p>
        <p>√ 简历轻松投</p>
      </div>
    <div class="zhaopin-from" id="zhao" style="display:none">
      <h1 class="title">注册</h1>
      <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
        <el-form-item label="用户名">
          <el-input v-model.trim="sizeForm.name" @blur="userBlur" style="width:300px;display:inline-block;float: left;"></el-input>
          <b>{{nameA}}</b>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model.trim="sizeForm.pwd" @blur="pwdBlur" style="width:300px;display:inline-block;float: left;"></el-input>
          <strong>{{pwdA}}</strong>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model.trim="sizeForm.rpd" @blur="rpdBlur" style="width:300px;display:inline-block;float: left;"></el-input>
          <i>{{rpdA}}</i>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model.trim="sizeForm.phone" @blur="phoneBlur" style="width:300px;display:inline-block;float: left;"></el-input>
          <u>{{phoneA}}</u>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model.trim="sizeForm.code" @blur="codeBlur" style="width:300px;display:inline-block;float: left;"></el-input>
          <em>{{codeA}}</em>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model.trim="sizeForm.email" @blur="emailBlur" style="width:300px;display:inline-block;float: left;"></el-input>
          <s>{{emailA}}</s>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">注册</el-button>
          <el-button type="primary" @click="onlogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import Loginzhen from './Loginzhen.vue';

export default {
  data() {
    return {
      sizeForm: {
        name: "",
        pwd: "",
        rpd: "",
        phone: "",
        code: "",
        email: "",
      },
        nameA:'',
        pwdA:'',
        rpdA:'',
        phoneA:'',
        codeA:'',
        emailA: '',
        ays:[false,false,false,false,false,false]
        // ays: []
    }
  },
  methods: {
   
    zhaopin(){
      zhao.style = "display:block";
    },
    qiuzhi(){
      zhao.style = "display:block";
    },
    userBlur(){
      let name = this.$data.sizeForm.name
      var re = /^[a-zA-Z0-9_-]{4,12}$/; 
      var rere = /^[\u4E00-\u9FA5]{2,5}$/;
      if(re.test(name)){
        this.nameA = '用户名可用'
        document.querySelector('b').style = "color:green"
        this.ays[0] = true
      }else if(rere.test(name)){
        this.nameA = '用户名可用'
        document.querySelector('b').style = "color:green"
        this.ays[0] = true
      }else if(name == ''){
        this.nameA = '请输入用户名'
        document.querySelector('b').style = "color:yellow"
        this.ays[0] = false
      }else{
         this.nameA = '用户名不可用，请输入4到16位字母，数字，下划线，减号或2到5位汉字'
         document.querySelector('b').style = "color:red"
         this.ays[0] = false
      }
    },
    pwdBlur(){
      let pwd = this.$data.sizeForm.pwd
      //密码至少包含 数字和英文，长度6-20  
      var res = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      if(res.test(pwd)){
        this.pwdA = '密码可用'
        document.querySelector('strong').style = "color:green"
        this.ays[1] = true
      }else if(pwd == ''){
        this.pwdA = '请输入密码'
        document.querySelector('strong').style = "color:yellow"
        this.ays[1] = false
      }else{
         this.pwdA = '密码不可用，应至少包含数字和英文，长度6-20 '
         document.querySelector('strong').style = "color:red"
         this.ays[1] = false
      }
    },
    rpdBlur(){
      let pwd = this.$data.sizeForm.pwd
      let rpd = this.$data.sizeForm.rpd
      if(rpd == pwd){
        this.rpdA = '密码相同'
        document.querySelector('i').style = "color:green"
        this.ays[2] = true
      }else if(rpd == ''){
        this.rpdA = '请输入密码'
        document.querySelector('i').style = "color:yellow"
        this.ays[2] = false
      }else{
         this.rpdA = '密码不相同'
         document.querySelector('i').style = "color:red"
         this.ays[2] = false
      }
    },
    phoneBlur(){
      let phone = this.$data.sizeForm.phone 
      var re = /^1[3|4|5|7|8|9][0-9]{9}$/;  
      if(re.test(phone)){
        this.phoneA = '手机号可用'
        document.querySelector('u').style = "color:green"
        this.ays[3] = true
      }else if(phone == ''){
        this.phoneA = '请输入手机号'
        document.querySelector('u').style = "color:yellow"
        this.ays[3] = false
      }else{
         this.phoneA = '手机号不可用'
         document.querySelector('u').style = "color:red"
         this.ays[3] = false
      }
    },
    codeBlur(){
      let code = this.$data.sizeForm.code 
      var re = /^[0-9]{4}$/;  
      if(re.test(code)){
        this.codeA = '验证码通过'
        document.querySelector('em').style = "color:green"
        this.ays[4] = true
      }else if(code == ''){
        this.codeA = '请输入验证码'
        document.querySelector('em').style = "color:yellow"
        this.ays[4] = false
      }else{
         this.codeA = '验证码错误'
         document.querySelector('em').style = "color:red"
         this.ays[4] = false
      }
    },
    emailBlur(){
      let email = this.$data.sizeForm.email 
      var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;  
      if(re.test(email)){
        this.emailA = '邮箱可用'
        document.querySelector('s').style = "color:green"
        this.ays[5] = true
      }else if(email == ''){
        this.emailA = '请输入邮箱'
        document.querySelector('s').style = "color:yellow"
        this.ays[5] = false
      }else{
         this.emailA = '邮箱不可用'
         document.querySelector('s').style = "color:red"
         this.ays[5] = false
      }
    },
    onSubmit() {
      let str = this.ays.join()
      // console.log(str)
      if(str == "true,true,true,true,true,true"){
        alert("注册成功！")
        this.$router.push({
          name: 'Loginzhen',
        })
      }else{
        alert('请完善您的信息')
      }
    },
    onlogin() {
      this.$router.push({
          name: 'Loginzhen',
      })
    }
  },
};
</script>
<style scoped>
body {
  background-color: skyblue;
}
.login {
  width: 100%;
  height: 600px;
  background-color: skyblue;
  text-align: center;
}
.title {
  width: 90%;
  color: darkorange;
  margin: 50px;
  font-size: 60px;
}
.left,
.right {
  width: 40%;
  height: 400px;
}
.left {
  float: left;
  margin-left: 150px;
}
.right {
  margin-right: 150px;
  float: right;
}
.tu1,
.tu2 {
  width: 210px;
  height: 210px;
  margin: 20px auto;
}
.tu1 {
  background: url(../../public/imgs/login.png);
}
.tu1:hover {
  background: url(../../public/imgs/login.png) -360px 0px;
}
.tu2 {
  background: url(../../public/imgs/login.png) -690px 0px;
}
.tu2:hover {
  background: url(../../public/imgs/login.png) -1030px 0px;
}
.zhaopin-from {
  margin: 20px auto;
  width: 60%;
  height: 700px;
  background-color: skyblue;
  position: absolute;
  top: 0;
  left: 20%;
}
.el-form-item__content{
  margin: 10px auto;
}
.el-form-item__label{
  margin-top: 10px;
}
i,u,em,s{
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
}
</style>
