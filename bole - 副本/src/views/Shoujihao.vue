<template>
  <div>
      <form action="" :model="deng">
          <p>手机号：<input v-model.trim="deng.phone" class="input" type="text"  placeholder="请输入手机号"></p> 
          <p>验证码：<input v-model.trim="deng.code" class="input" type="password"  placeholder="请输入验证码"></p> 
          <button class="button" @click="denglu">登录</button>
      </form>
      
  </div>
</template>

<script>
export default {
    data() {
    return {
      deng: {
        phone: "",
        code: "",
      },
    }
  },
  methods:{
    //登录
    denglu(){
      if(this.$data.deng.phone == '' || this.$data.deng.code == ''){
        alert('请确认手机号和验证码是否输入')
      }else{
        //获取表单数据
        this.$axios.post('http://localhost:3000/web/dengluphone',{phone:this.$data.deng.phone}).then(res=>{
          console.log(res.data);
          if(res.data.code == 1){
            alert('登陆成功')
          }else if(res.data.code == 2){
            alert('手机号有误')
          }else{
            alert('手机号有误')
          }
        })
      }
    },
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
</style>