<template>
  <div>
        <form action="" :model="deng">
          <p>用户名：<input v-model.trim="deng.name" class="input" type="text" placeholder="请输入用户名" @blur="inputblur"></p>
          <p>密<b class="kong">--</b>码：<input v-model.trim="deng.pwd" class="input" type="password" placeholder="请输入密码"></p> 
          <span class="box">
              <input type="checkbox" id="check" @click="checkbox()" ><label for="check">记住密码</label>
              <button class="button" @click="denglu()">登录</button>
          </span>
        </form>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      deng: {
        name: "",
        pwd: "",
      },
    }
  },
  methods:{
    //登录
    denglu(){
      if(this.$data.deng.name == '' || this.$data.deng.pwd == ''){
        alert('请确认用户名和密码是否输入')
      }else{
        //获取表单数据
        this.$axios.post('http://localhost:3000/web/denglu',{user:this.$data.deng.name, pwd:this.$data.deng.pwd,}).then(res=>{
          console.log(res.data);
          if(res.data.code == 1){
            alert('登陆成功')
          }else if(res.data.code == 2){
            alert('密码有误')
          }else{
            alert('用户名有误')
          }
        })
      }
    },
    //记住密码
    checkbox(){
      if(event.target.checked == true){
        Cookies.set('name', this.$data.deng.name+':'+this.$data.deng.pwd,{expires: 7,});//设置name
        console.log(document.cookie)
      }
    },
    //用户名输入框失焦后将cookie中的密码放入密码框
    inputblur(){
      if(document.cookie.indexOf(this.$data.deng.name) !== -1){
        // document.cookie
        let index = document.cookie.lastIndexOf(":")
        let str =document.cookie.substring(index+1,document.cookie.length);
        this.$data.deng.pwd = str;
      }
    }
  }
}
</script>
<style>
.input{
    width: 260px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background-color: #ffffff;
    border: 1px #cccccc solid;
    border-radius: 4px;
    padding-left: 50px;
    margin-bottom: 20px;
}
.button{
    margin-left: 100px;
    width: 100px;
    height: 40px;
    background-color: skyblue;
    border: none;
    outline: none;
}
.kong{
    visibility: hidden;
}
</style>