<template>
  <div class="zhezhao">
    <div class="deng">
      <p class="title">登   录</p>
      <div class="biao">
        <div class="biaoti">
          <router-link to="/yonghuming"><b>用户名登录</b></router-link>
          <router-link to="/shoujihao"><b>手机号登录</b></router-link>
        </div>
        
        <div>
          <router-view></router-view>
        </div>
        <p class="gologin">还没有账号，<span @click="onlogin">立即注册</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onlogin() {
      this.$router.push({
          name: 'Login',
      })
    }
  }
}
</script>

<style scoped>
.zhezhao{
  background-color: rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.deng{
  width: 800px;
  height: 500px;
  background: url(/imgs/liangnv.jpg) no-repeat 0 center;
  text-align: center;
}
.title{
  font-size: 60px;
  margin: 30px;
  letter-spacing:20px;
}
.biao{
  width: 100%;
  height: auto;
}
.biaoti{
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
b{
  font-size: 20px;
  margin: 0px 150px;
}
.gologin{
  margin-top: 50px;
}
span{
  color: red;
  cursor: pointer;
}
</style>