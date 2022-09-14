const {join,resolve} = require('path');
const {controllerpath} = require('./local');
console.info("当前api文档根目录：",controllerpath);
//class源码路径
module.exports.classpath = [
  
];
// module.exports.classpath=join(__dirname,'../java-src/');
//生成的mock数据路径
module.exports.mockpath=join(__dirname,'../mock');



//需要转化的controller,对应如果是null，则表示该类所有接口
//key对应的是controller的部分路径 + controller名字，如包路径是： com.tas.test.xx.xxx.xxx.TestController,则key是 ：test.TestController
module.exports.rest = {
  "sys.SysDictController":null,
  "sys.SysUserController":null
};


//生成的临时文件路径
module.exports.tmppath = [
  // join(controllerpath || __dirname, "base"),
  join(controllerpath || __dirname, "sys")
];


//生成的服务路径地址
module.exports.distpath=join(__dirname,'../src/service/api');

//忽略的入参
module.exports.ignoreParam = new RegExp('(^'+['HttpServletResponse','HttpServletRequest'].join('$)|(^')+'$)');
//特殊的类型
module.exports.baseType = new RegExp('('+['Integer','int','String','Long','short','Float','float','StringBuffer','double','Double','Boolean','boolean','Object','Null','BigDecimal','java\.util\.Date'].join(')|(')+')','i')

//列表类型
module.exports.listType = new RegExp('('+['java\.util\.List','java\.util\.ArrayList','java\.util\.Set','java\.util\.HashSet'].join(')|(')+')','i');


//key:value类型,第一个key一定是string
module.exports.keyValueType = new RegExp('('+['java\.util\.HashMap','java\.util\.Map'].join(')|(')+')','i');



//特殊类型转化,数组的类型还要特殊处理，返回[]表示数据，其他都表示已经到达元数据类型
module.exports.convertType = function(type){
  let r = null;
  switch(type){
    case 'Null':
      r = {type:'null'}
      break;
    case 'int':
    case 'Integer':
    case 'short':
    case 'java.util.Date'://TODO:采用时间戳,可自行调整
      r = {type:'number'};
      break;
    case 'Long':
    case 'BigDecimal':
    case 'float':
    case 'Float':
    case 'double':
    case 'Double':
    case 'String':
    case 'StringBuffer':
      r = {type:'string'};
      break;
    case 'Boolean':
    case 'boolean':
      r = {type:'boolean'};
      break;
    case 'Object':
    default:
      r = {type:'object'};
      break;
  }
  r.cType = type;
  return r;
}

//验证是否允许为空
module.exports.valid = {
  anno:new RegExp('^@Validator','i'),
  canBlack(anno){//入参校验同一参数有很多类型可能
    if(/([^\w]|^)ValidType\.NOT_BLANK([^\w]|$)/.test(anno.value)){
      return false;
    }
    return true;
  },
  result:new RegExp('^@NotNull$','i')//出参时,只有是否可能为空的确认即可
}

//是否为接口类
module.exports.controller = {
  isController:/^@RestController$/,
  urlAnno:/^@RequestMapping\(/,
  path:/com.tas.(\w+)./,
  fetchName(clzAnno){
    const t = clzAnno.find(n=>/@EntityName/.test(n));
    if(t){
      return t.replace(/^(@EntityName\(\")|(\"\)$)/g,'')
    }
  },
  isUseField(name,pojo){
    if(pojo.fields){
      const t=pojo.fields.find(n=>n.name==name);
      return !t||t.anno.find(m=>/@QueryHidden/.test(m))==null;
    }
  },
  action(anno,topUrl){//返回的结构是{value:"/logout",method:"RequestMethod.GET"}
    return {
      url:`${topUrl}${anno.value}`,
      action:anno.method=='RequestMethod.POST'?'post':'get'
    };
  }
}


//生成api的目标目录
module.exports.apiDist = join(__dirname,'../src/service/api');
//手动api的目录
// module.exports.manualApi = join(__dirname,'./manualApi')


//api文档生成目录
module.exports.apiRest = {
};
//将出参与入参返回生成typescript
module.exports.typeService = {
  header:"import {asyncAny,fetchPath} from 'tsservice/commonService';\n",
  req({params,result,actionType,urlName,url}){
    return `namespace _${urlName}{
  type Params = ${params};
  type Result = ${result};
  export function req(params:Params){
    return asyncAny<Result>(fetchPath('${url}',params), '${actionType}', { params });
  }
};
export const ${urlName} = _${urlName}.req;
`
  }
}
//将参数生成mockjs参数
module.exports.mock = {
  dist:join(__dirname,'../mock')
};
//生成文档的目录
module.exports.apiDoc = join(__dirname,'../doc');
