<template>
  <div>
      <form action="">
          <p>手机号：<input class="input" type="text"  placeholder="请输入手机号"></p> 
          <p>验证码：<input class="input" type="password"  placeholder="请输入验证码"></p> 
          <button class="button">登录</button>
      </form>
      
  </div>
</template>

<script>
export default {

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