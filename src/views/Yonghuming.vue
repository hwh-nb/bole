<template>
  <div>
        <form action="">
          <p>用户名：<input class="input" type="text" placeholder="请输入用户名"></p>
          <p>密<b class="kong">--</b>码：<input class="input" type="password" placeholder="请输入密码"></p> 
          <div class="box">
              <input type="checkbox" id="check"><label for="check">自动登录</label>
              <button class="button">登录</button>
          </div>
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
.kong{
    visibility: hidden;
}
</style>