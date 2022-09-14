const hostname = require("os").hostname();

console.info("当前用户：", hostname);
module.exports={...{
	controllerpath:'D:/work/frame/tas-apis/apis/'
},...({

	"kevin":{
		controllerpath:'D:/work/frame/tas-apis/apis/'
	},
	"kevin-Mac.local":{
		controllerpath:'/Users/kevin/work/front/tas-front-apis/apis/'
	},
	"zengxiaodeMacBook-Pro.local":{
		controllerpath:'/Users/zengxiao/Documents/coding/huac/pc/tas-front/tas-front-apis/apis/'
	},
  'yydeMacBook-Pro.local':{
    controllerpath:"/Users/yyli/Documents/work/huacong/tas-front-apis/apis/"
  },
	
}[hostname]||{})};