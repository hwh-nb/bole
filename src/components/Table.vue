<template>
    <div>
        <table border="1" cellspacing="0" width="943" style="float:left">
            <tr height="50px">
                <td class="trd" align="center">所有职位</td>
                <td class="trd" align="center">名企招聘</td>
                <td class="trd three" align="center">紧急招聘</td>
            </tr>
            <tr class="tdd" height="50px">
                <td class="rte"  colspan="3">
                    排序方式:
                    <a href="#" :class="style" @click="Click" ref="myDom">综合排序</a>
                    <a href="#" :class="style1" @click="Click1">更新时间</a>
                    展示方式：
                    <a href="#" class="s3">详细</a>
                    <a href="#" class="s4">列表</a>
                </td>
            </tr>
        </table>
        <ul class="data_ul">
            <li :class="data_li" @click="styleClick(index)">
                <span :class="inp"></span>
                <span class="name">迎泽区&nbsp;|&nbsp;wedvgfhh</span>
                <span class="com">水木数控科技有限公司</span>
                <span class="look">面议</span>
                <span class="time">2020-11-20</span>
                <!-- <span :class="icon" @mouseenter="handleEnter" @mouseleave="handleLeave"></span> -->
            </li>
            <li class="data_li data_li_span">
                <span :class="inp"></span>
                <span class="apply">申请职位</span>
                <span class="coll">收藏职位</span>
            </li>
            <li class="pag">
                <el-pagination
                    layout="prev, pager, next"
                    :total="1"
                    class="pagg"
                    background
                    >
                    </el-pagination>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return{
            style:'s1',
            style1:'s2',
            data_li:'data_li',
            inp:'inp',
            icon:'icon'
        }
    },
    methods: {
        Click(){
            this.style='s11'
            this.style1 = 's2'
        },
        Click1(){
            this.style='s1'
            this.style1 = 's22'
        },
        styleClick(index){
            this.data_li = 'data_copy',
            this.inp = 'inpu'
        },
        // handleEnter(){
        //     this.icon = 'icon1'
        // },
        // handleLeave(){
        //     this.icon = 'icon'
        // }
    },
}
</script>

<style>
/* 表格一二行 */
table{
    border: 1px solid #eeeeee;
    height: 110px;
}
.trd{
    border-top: 0;
    border-left: 0;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
}
.rte{
    border: 0;
    padding-left: 20px;
}
.three{
    border-right: 0;
}
.tdd{
    /* border: 0; */
    padding:15px 0 0 22px;
    height: 50px;
}
.s1{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin-right: 20px;
    border: 1px #EEEEEE solid;
    padding-left: 12px;
    padding-right: 23px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
    background-position: right -521px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    border-radius: 3px;
    margin-left: 10px;
}
.s11{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin-right: 20px;
    border: 1px #EEEEEE solid;
    padding-left: 12px;
    padding-right: 23px;
    display: inline-block;
    text-decoration: none;
    color:#FF6600;
    background-position: right -544px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    border-radius: 3px;
    margin-left: 10px;
}
.s1:hover{
    color: #FF6600;
    background-image: url(/imgs/130.png);
    background-position: right -544px;
}
.s2{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin-right: 380px;
    border: 1px #EEEEEE solid;
    padding-left: 12px;
    padding-right: 23px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
    background-position: right -521px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    border-radius: 3px;
}
.s22{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin-right: 380px;
    border: 1px #EEEEEE solid;
    padding-left: 12px;
    padding-right: 23px;
    display: inline-block;
    text-decoration: none;
    color: #FF6600;
    background-position: right -544px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    border-radius: 3px;
}
.s2:hover{
    color: #FF6600;
    background-image: url(/imgs/130.png);
    background-position: right -544px;
}
.s3{

    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin-right: 15px;
    border: 1px #EEEEEE solid;
    padding-left: 28px;
    padding-right: 10px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
    border-radius: 3px;
    background: url(/imgs/jol_new_ic1.png) 10px center no-repeat;
}
.s3:hover{
    background: url(/imgs/jol_new_ic2.png) 10px center no-repeat;
    color:#ff6600
}
.s4{
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    margin-right: 15px;
    border: 1px #EEEEEE solid;
    padding-left: 28px;
    padding-right: 10px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
    border-radius: 3px;
    background: url(/imgs/jol_new_ic3.png) 10px center no-repeat;
}
.s4:hover{
    background: url(/imgs/jol_new_ic4.png) 10px center no-repeat;
    color:#ff6600
}
/* 信息框 */
.data_ul{
    width: 943px;
    border: 1px solid #EEEEEE;
    margin-top: 10px;
    box-sizing: border-box;
    float: left;
    
}
.data_li{
    display: inline-block;
    padding: 18px 20px 18px 15px;
    font-size: 16px;
    background: #fff;
    border-bottom: 1px solid #eeeeee;
}
.data_copy{
    display: inline-block;
    padding: 18px 20px 18px 15px;
    font-size: 16px;
    background: #FFF7DD;
    border-bottom: 1px solid #eeeeee;
}
.data_li_span{
    display: inline-block;
    width: 906px;
    font-size: 16px;
    background: #fff;
    border-bottom: 1px solid #eeeeee;
}
.name{
    color: #5f8dc9;
}
.name:hover{
    text-decoration: underline;
    cursor: pointer;
}
.inp{
    margin-top: 3px;
    margin-right: 10px;
    width: 17px;
    height: 17px;
    float: left;
    background-position: 0px -298px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    cursor: pointer;
    background-color: #FFFFFF;
}
.inp:hover{
    background-position: 0px -321px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
}
.inpu{
    margin-top: 3px;
    margin-right: 10px;
    width: 17px;
    height: 17px;
    float: left;
    background-position: 0px -321px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    cursor: pointer;
    background-color: #FFFFFF;
}
.com{
    display: inline-block;
    width: 280px;
    margin-left: 130px;
}
.com:hover{
    text-decoration: underline;
    cursor: pointer;
}
.look{
    color: #FF6600;
    width: 170px;
    margin-left: 20px;
}
.time{
    width: 95px;
    margin-left: 206px;
    font-size: 13px;
}
/* .icon{
    display: inline-block;
    width: 22px;
    height: 20px;
    background-position: 0px -701px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    cursor: pointer;
    vertical-align: middle;
}
.icon1{
    display: inline-block;
    width: 22px;
    height: 20px;
    background-position: 0px -578px;
    background-image: url(/imgs/130.png);
    background-repeat: no-repeat;
    cursor: pointer;
    vertical-align: middle;
} */
.apply{
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px #D2D2D2 solid;
    margin-right: 15px;
    margin-top: -4px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #F9F9F9;
}
.coll{
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px #D2D2D2 solid;
    margin-right: 15px;
    margin-top: -4px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #F9F9F9;
}
.apply:hover{
    color: #FF6600;
    border: 1px #FF6600 solid;
}
.coll:hover{
    color: #FF6600;
    border: 1px #FF6600 solid;
}
/* 分页 */
.pag{
    display: inline-block;
    padding: 18px 20px 18px 15px;
    font-size: 16px;
    width: 906px;
    background: #fff;
    box-sizing: border-box;
}
.pagg{
    text-align: center;
}
</style>