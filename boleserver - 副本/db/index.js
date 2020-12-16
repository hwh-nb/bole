var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/boleserver",{useNewUrlParser:true,useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('服务器已开启')
});
//求职者，招聘者
var renSchema = new mongoose.Schema({
    user: String,
    pwd: String,
    phone: Number,
    email:String,
	or: String,
})
var add = mongoose.model("ren",renSchema)

//招聘信息
var zpxxSchema = new mongoose.Schema({
    name: String,
	gongsiname: String, //公司名称
    min_age: Number,
    max_age: Number,
    job: String,
    job_type: Number,
    min_money: Number,
    max_money: Number,
    phone: Number,
    study: String,
    address: String,   //工作地址
    email: String,
    describe: String,     //岗位描述
})
var Zpxx = mongoose.model("zpxxs",zpxxSchema)

//求职信息
var qzxxSchema = new mongoose.Schema({
    name: String,
    age: Number,
	sex: String,
    job: String,
    min_money: Number,
    max_money: Number,
    phone: Number,
	job_time: String,
    study: String,
    address: String,   //希望工作的地点
    email: String
})
var Qzxx = mongoose.model("qzxxs",qzxxSchema)

module.exports = {
    add,
    Zpxx,
    Qzxx,
}