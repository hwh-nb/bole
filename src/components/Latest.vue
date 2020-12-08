<template>
    <div class="latest">
        <span class="head">
            最新职位
        </span>
        <div class="msg">
            <p class="pos">营销经理<span id="sal">5千~1万/月</span></p>
            <p class="comm">是是是试试哈哈哈哈</p>
            <p class="comm">山西/太原/小店</p>
        </div>
        <div class="msg">
            <p class="pos">营销经理<span id="sal">5千~1万/月</span></p>
            <p class="comm">是是是试试哈哈哈哈</p>
            <p class="comm">山西/太原/小店</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.latest{
    width: 230px;
    border: 1px solid #eeeeee;
}
.head{
    display: block;
    background-color: #F8F8F8;
    height: 46px;
    line-height: 46px;
    text-align: center;
}
.pos{
    font-size: 14px;
    margin-bottom: 5px;
}
.msg{
    border-bottom: 1px #EEEEEE solid;
    width: 208px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}
#sal{
    display: inline-block;
    margin-left: 55px;
    font-size: 12px;
}
.comm{
    font-size: 12px;
    line-height: 20px;
}
</style>