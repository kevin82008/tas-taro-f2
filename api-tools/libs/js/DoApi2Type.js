/*! zengxiao版权所有，翻版必究 */!function(c){var r={};function n(e){if(r[e])return r[e].exports;var l=r[e]={i:e,l:!1,exports:{}};return c[e].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=c,n.c=r,n.d=function(c,r,e){n.o(c,r)||Object.defineProperty(c,r,{enumerable:!0,get:e})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,r){if(1&r&&(c=n(c)),8&r)return c;if(4&r&&"object"==typeof c&&c&&c.__esModule)return c;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:c}),2&r&&"string"!=typeof c)for(var l in c)n.d(e,l,function(r){return c[r]}.bind(null,l));return e},n.n=function(c){var r=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(r,"a",r),r},n.o=function(c,r){return Object.prototype.hasOwnProperty.call(c,r)},n.p="./",n(n.s=31)}({0:function(module,exports){eval("module.exports = path;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcGF0aDsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},1:function(module,exports){eval("module.exports = fs;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImZzXCI/YTQwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZzOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")},16:function(module,exports){eval("module.exports = classTools;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc1Rvb2xzXCI/YjUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzVG9vbHM7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n")},3:function(module,exports){eval("module.exports = conf;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvbmZcIj8wMWY3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gY29uZjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n")},31:function(module,exports,__webpack_require__){eval("const { tmppath, apiDist, rest, typeService, manualApi } = __webpack_require__(3);\r\nconst { join, sep } = __webpack_require__(0);\r\nconst { formatParam, formatResult, formatName } = __webpack_require__(32);\r\n\r\nconst fs = __webpack_require__(1);\r\nlet apiSrc;\r\nif(Array.isArray(tmppath)){\r\n  apiSrc = tmppath.map(n=>join(n, '/api'));\r\n  apiSrc.reverse();\r\n}else{\r\n  apiSrc = join(tmppath, '/api');\r\n\r\n}\r\n\r\nconst fetchClass = __webpack_require__(16)\r\n\r\nconst createPath = {};\r\n\r\nfunction mkdir(pathStr) {\r\n  if (createPath[pathStr]) return;\r\n  if (fs.existsSync(pathStr)) {\r\n    createPath[pathStr] = true;\r\n    return;\r\n  }\r\n\r\n  const p = pathStr.split(sep);\r\n  let i;\r\n  for (i = p.length - 1; i > 0; i--) {\r\n    if (fs.existsSync(p.slice(0, i).join(sep))) {\r\n      break;\r\n    }\r\n  }\r\n  for (let j = i + 1; j <= p.length; j++) {\r\n    fs.mkdirSync(p.slice(0, j).join(sep));\r\n  }\r\n  createPath[pathStr] = true;\r\n}\r\n\r\n\r\nconst files = Object.keys(rest);\r\nconst analyFiles = {};\r\nlet filePathTmp,findObj;\r\nfiles.forEach(m => {\r\n  if(Array.isArray(apiSrc)){\r\n    findObj = apiSrc.find(n=>{\r\n      return fs.existsSync(join(n,sep + m.replace(/\\./g, sep)+'.js'));\r\n    });\r\n    if(findObj==null){\r\n      console.error('没有找到对应的文件',m);\r\n    }else{\r\n      filePathTmp = join(findObj,sep + m.replace(/\\./g, sep));\r\n    }\r\n  }else{\r\n    filePathTmp = join(apiSrc, sep + m.replace(/\\./g, sep));\r\n  }\r\n\r\n\r\n  analyFiles[filePathTmp] = {\r\n    reg: rest[m] == null ? /[\\s\\S]*/ : new RegExp(\r\n      `(^${(typeof rest[m] == 'string' ? [rest[m]] : rest[m]).join('$)|(^')}$)`.replace(/\\{/g, '\\\\{').replace(/\\}/g, '\\\\}'), 'i'\r\n    ), dist: join(apiDist, sep + m.replace(/\\./g, sep) + '.ts')\r\n  };\r\n  mkdir(join(apiDist, m.replace(/\\.[^.]+$/, '').replace(/\\./g, sep)));\r\n});\r\nfunction start() {\r\n  Object.keys(analyFiles).forEach(m => {\r\n    const req = fetchClass(m);\r\n    let oneFile = [typeService.header];\r\n    req.forEach(node => {\r\n      if (!analyFiles[m].reg.test(node.url)) {\r\n        return;\r\n      }\r\n      console.info('开始解析:',node.url);\r\n      const urlName = formatName(node.url.replace(/\\{|\\}/g, ''));\r\n      const params = formatParam(node.params);\r\n      const result = formatResult(node.result);\r\n      const type = node.action.toUpperCase();\r\n      oneFile.push(typeService.req({ params, result, actionType: type, urlName, url: node.url }));\r\n    });\r\n    fs.writeFileSync(analyFiles[m].dist, oneFile.join('\\n'), (err) => {\r\n      if (err) {\r\n        console.error('服务生成失败:', analyFiles[m].dist)\r\n        return;\r\n      }\r\n      console.log('服务生成成功:', analyFiles[m].dist)\r\n    })\r\n  })\r\n  //如果有手动定义的typescript,则进行拷贝\r\n  if (manualApi == null) return;\r\n  exists(manualApi,apiDist,copy);\r\n}\r\n\r\nconst stat = fs.stat;\r\nvar copy = function (src, dst) {\r\n  // 读取目录中的所有文件/目录\r\n  fs.readdir(src, function (err, paths) {\r\n    if (err) {\r\n      throw err;\r\n    }\r\n\r\n    paths.forEach(function (path) {\r\n      var _src = src + '/' + path,\r\n        _dst = dst + '/' + path,\r\n        readable, writable;\r\n\r\n      stat(_src, function (err, st) {\r\n        if (err) {\r\n          throw err;\r\n        }\r\n\r\n        // 判断是否为文件\r\n        if (st.isFile()) {\r\n          // 创建读取流\r\n          readable = fs.createReadStream(_src);\r\n          // 创建写入流\r\n          writable = fs.createWriteStream(_dst);\r\n          // 通过管道来传输流\r\n          readable.pipe(writable);\r\n        }\r\n        // 如果是目录则递归调用自身\r\n        else if (st.isDirectory()) {\r\n          exists(_src, _dst, copy);\r\n        }\r\n      });\r\n    });\r\n  });\r\n};\r\n// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录\r\nvar exists = function (src, dst, callback) {\r\n  fs.exists(dst, function (exists) {\r\n    // 已存在\r\n    if (exists) {\r\n      callback(src, dst);\r\n    }\r\n    // 不存在\r\n    else {\r\n      fs.mkdir(dst, function () {\r\n        callback(src, dst);\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\nstart();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkyU2VydmljZS9Eb0FwaTJUeXBlLmpzP2UyMzgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyB0bXBwYXRoLCBhcGlEaXN0LCByZXN0LCB0eXBlU2VydmljZSwgbWFudWFsQXBpIH0gPSByZXF1aXJlKCcuLi9jb25mJyk7XHJcbmNvbnN0IHsgam9pbiwgc2VwIH0gPSByZXF1aXJlKCdwYXRoJyk7XHJcbmNvbnN0IHsgZm9ybWF0UGFyYW0sIGZvcm1hdFJlc3VsdCwgZm9ybWF0TmFtZSB9ID0gcmVxdWlyZSgnLi9hcGkyVHlwZScpO1xyXG5cclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5sZXQgYXBpU3JjO1xyXG5pZihBcnJheS5pc0FycmF5KHRtcHBhdGgpKXtcclxuICBhcGlTcmMgPSB0bXBwYXRoLm1hcChuPT5qb2luKG4sICcvYXBpJykpO1xyXG4gIGFwaVNyYy5yZXZlcnNlKCk7XHJcbn1lbHNle1xyXG4gIGFwaVNyYyA9IGpvaW4odG1wcGF0aCwgJy9hcGknKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGZldGNoQ2xhc3MgPSByZXF1aXJlKCdjbGFzc1Rvb2xzJylcclxuXHJcbmNvbnN0IGNyZWF0ZVBhdGggPSB7fTtcclxuXHJcbmZ1bmN0aW9uIG1rZGlyKHBhdGhTdHIpIHtcclxuICBpZiAoY3JlYXRlUGF0aFtwYXRoU3RyXSkgcmV0dXJuO1xyXG4gIGlmIChmcy5leGlzdHNTeW5jKHBhdGhTdHIpKSB7XHJcbiAgICBjcmVhdGVQYXRoW3BhdGhTdHJdID0gdHJ1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHAgPSBwYXRoU3RyLnNwbGl0KHNlcCk7XHJcbiAgbGV0IGk7XHJcbiAgZm9yIChpID0gcC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICBpZiAoZnMuZXhpc3RzU3luYyhwLnNsaWNlKDAsIGkpLmpvaW4oc2VwKSkpIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvciAobGV0IGogPSBpICsgMTsgaiA8PSBwLmxlbmd0aDsgaisrKSB7XHJcbiAgICBmcy5ta2RpclN5bmMocC5zbGljZSgwLCBqKS5qb2luKHNlcCkpO1xyXG4gIH1cclxuICBjcmVhdGVQYXRoW3BhdGhTdHJdID0gdHJ1ZTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGZpbGVzID0gT2JqZWN0LmtleXMocmVzdCk7XHJcbmNvbnN0IGFuYWx5RmlsZXMgPSB7fTtcclxubGV0IGZpbGVQYXRoVG1wLGZpbmRPYmo7XHJcbmZpbGVzLmZvckVhY2gobSA9PiB7XHJcbiAgaWYoQXJyYXkuaXNBcnJheShhcGlTcmMpKXtcclxuICAgIGZpbmRPYmogPSBhcGlTcmMuZmluZChuPT57XHJcbiAgICAgIHJldHVybiBmcy5leGlzdHNTeW5jKGpvaW4obixzZXAgKyBtLnJlcGxhY2UoL1xcLi9nLCBzZXApKycuanMnKSk7XHJcbiAgICB9KTtcclxuICAgIGlmKGZpbmRPYmo9PW51bGwpe1xyXG4gICAgICBjb25zb2xlLmVycm9yKCfmsqHmnInmib7liLDlr7nlupTnmoTmlofku7YnLG0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGZpbGVQYXRoVG1wID0gam9pbihmaW5kT2JqLHNlcCArIG0ucmVwbGFjZSgvXFwuL2csIHNlcCkpO1xyXG4gICAgfVxyXG4gIH1lbHNle1xyXG4gICAgZmlsZVBhdGhUbXAgPSBqb2luKGFwaVNyYywgc2VwICsgbS5yZXBsYWNlKC9cXC4vZywgc2VwKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgYW5hbHlGaWxlc1tmaWxlUGF0aFRtcF0gPSB7XHJcbiAgICByZWc6IHJlc3RbbV0gPT0gbnVsbCA/IC9bXFxzXFxTXSovIDogbmV3IFJlZ0V4cChcclxuICAgICAgYCheJHsodHlwZW9mIHJlc3RbbV0gPT0gJ3N0cmluZycgPyBbcmVzdFttXV0gOiByZXN0W21dKS5qb2luKCckKXwoXicpfSQpYC5yZXBsYWNlKC9cXHsvZywgJ1xcXFx7JykucmVwbGFjZSgvXFx9L2csICdcXFxcfScpLCAnaSdcclxuICAgICksIGRpc3Q6IGpvaW4oYXBpRGlzdCwgc2VwICsgbS5yZXBsYWNlKC9cXC4vZywgc2VwKSArICcudHMnKVxyXG4gIH07XHJcbiAgbWtkaXIoam9pbihhcGlEaXN0LCBtLnJlcGxhY2UoL1xcLlteLl0rJC8sICcnKS5yZXBsYWNlKC9cXC4vZywgc2VwKSkpO1xyXG59KTtcclxuZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgT2JqZWN0LmtleXMoYW5hbHlGaWxlcykuZm9yRWFjaChtID0+IHtcclxuICAgIGNvbnN0IHJlcSA9IGZldGNoQ2xhc3MobSk7XHJcbiAgICBsZXQgb25lRmlsZSA9IFt0eXBlU2VydmljZS5oZWFkZXJdO1xyXG4gICAgcmVxLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIGlmICghYW5hbHlGaWxlc1ttXS5yZWcudGVzdChub2RlLnVybCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5pbmZvKCflvIDlp4vop6PmnpA6Jyxub2RlLnVybCk7XHJcbiAgICAgIGNvbnN0IHVybE5hbWUgPSBmb3JtYXROYW1lKG5vZGUudXJsLnJlcGxhY2UoL1xce3xcXH0vZywgJycpKTtcclxuICAgICAgY29uc3QgcGFyYW1zID0gZm9ybWF0UGFyYW0obm9kZS5wYXJhbXMpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRSZXN1bHQobm9kZS5yZXN1bHQpO1xyXG4gICAgICBjb25zdCB0eXBlID0gbm9kZS5hY3Rpb24udG9VcHBlckNhc2UoKTtcclxuICAgICAgb25lRmlsZS5wdXNoKHR5cGVTZXJ2aWNlLnJlcSh7IHBhcmFtcywgcmVzdWx0LCBhY3Rpb25UeXBlOiB0eXBlLCB1cmxOYW1lLCB1cmw6IG5vZGUudXJsIH0pKTtcclxuICAgIH0pO1xyXG4gICAgZnMud3JpdGVGaWxlU3luYyhhbmFseUZpbGVzW21dLmRpc3QsIG9uZUZpbGUuam9pbignXFxuJyksIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+acjeWKoeeUn+aIkOWksei0pTonLCBhbmFseUZpbGVzW21dLmRpc3QpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCfmnI3liqHnlJ/miJDmiJDlip86JywgYW5hbHlGaWxlc1ttXS5kaXN0KVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC8v5aaC5p6c5pyJ5omL5Yqo5a6a5LmJ55qEdHlwZXNjcmlwdCzliJnov5vooYzmi7fotJ1cclxuICBpZiAobWFudWFsQXBpID09IG51bGwpIHJldHVybjtcclxuICBleGlzdHMobWFudWFsQXBpLGFwaURpc3QsY29weSk7XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBmcy5zdGF0O1xyXG52YXIgY29weSA9IGZ1bmN0aW9uIChzcmMsIGRzdCkge1xyXG4gIC8vIOivu+WPluebruW9leS4reeahOaJgOacieaWh+S7ti/nm67lvZVcclxuICBmcy5yZWFkZGlyKHNyYywgZnVuY3Rpb24gKGVyciwgcGF0aHMpIHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGhzLmZvckVhY2goZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgdmFyIF9zcmMgPSBzcmMgKyAnLycgKyBwYXRoLFxyXG4gICAgICAgIF9kc3QgPSBkc3QgKyAnLycgKyBwYXRoLFxyXG4gICAgICAgIHJlYWRhYmxlLCB3cml0YWJsZTtcclxuXHJcbiAgICAgIHN0YXQoX3NyYywgZnVuY3Rpb24gKGVyciwgc3QpIHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliKTmlq3mmK/lkKbkuLrmlofku7ZcclxuICAgICAgICBpZiAoc3QuaXNGaWxlKCkpIHtcclxuICAgICAgICAgIC8vIOWIm+W7uuivu+WPlua1gVxyXG4gICAgICAgICAgcmVhZGFibGUgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKF9zcmMpO1xyXG4gICAgICAgICAgLy8g5Yib5bu65YaZ5YWl5rWBXHJcbiAgICAgICAgICB3cml0YWJsZSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKF9kc3QpO1xyXG4gICAgICAgICAgLy8g6YCa6L+H566h6YGT5p2l5Lyg6L6T5rWBXHJcbiAgICAgICAgICByZWFkYWJsZS5waXBlKHdyaXRhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c5piv55uu5b2V5YiZ6YCS5b2S6LCD55So6Ieq6LqrXHJcbiAgICAgICAgZWxzZSBpZiAoc3QuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgZXhpc3RzKF9zcmMsIF9kc3QsIGNvcHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuLy8g5Zyo5aSN5Yi255uu5b2V5YmN6ZyA6KaB5Yik5pat6K+l55uu5b2V5piv5ZCm5a2Y5Zyo77yM5LiN5a2Y5Zyo6ZyA6KaB5YWI5Yib5bu655uu5b2VXHJcbnZhciBleGlzdHMgPSBmdW5jdGlvbiAoc3JjLCBkc3QsIGNhbGxiYWNrKSB7XHJcbiAgZnMuZXhpc3RzKGRzdCwgZnVuY3Rpb24gKGV4aXN0cykge1xyXG4gICAgLy8g5bey5a2Y5ZyoXHJcbiAgICBpZiAoZXhpc3RzKSB7XHJcbiAgICAgIGNhbGxiYWNrKHNyYywgZHN0KTtcclxuICAgIH1cclxuICAgIC8vIOS4jeWtmOWcqFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGZzLm1rZGlyKGRzdCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbGxiYWNrKHNyYywgZHN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5zdGFydCgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n")},32:function(module,exports){eval("function firstUpper(text){\r\n  return text.substr(0,1).toUpperCase()+text.substr(1);\r\n}\r\n\r\n\r\nmodule.exports.formatName = function(url){\r\n  const r = [];\r\n  url.split(/\\//).forEach((m,idx)=>{\r\n    if(idx==0){\r\n      return;\r\n    }else{\r\n      r.push(firstUpper(m));\r\n    }\r\n  })\r\n  return r.join('');\r\n}\r\n\r\n\r\nfunction fetchType(param,reqName){\r\n  let r = [];\r\n  if(!param[reqName]){\r\n    r.push('?')\r\n  }\r\n  r.push(':');\r\n  if(param.type=='object'){//取param.value\r\n    if(param.value==null){r.push('any')}\r\n    else{\r\n      r.push(`{[key:string]:${fetchType(param.value,reqName).replace(/^\\?{0,1}:/,'')}}`)\r\n    }\r\n  }else if(param.type=='array'){//取param.value\r\n    r.push(`${fetchType(param.value,reqName).replace(/^\\?{0,1}:/,'')}[]`)\r\n  }else if(typeof param.type=='string'){\r\n    r.push(param.type);\r\n  }else if(param.type.type!=null&&(param.type.type=='object'||param.type.type=='array')){\r\n    if(param.type.type=='array'&&reqName!='isRequired'){\r\n      //去除arr的问号\r\n      //console.info(param.type.type,reqName=='isRequired')\r\n      r=[':'];\r\n    }\r\n    return r.join('')+fetchType(param.type,reqName).replace(/^\\?{0,1}:/g,'');\r\n  }else{\r\n    r.push('{');\r\n    Object.keys(param.type).forEach((m,idx)=>{\r\n      idx>0?r.push(','):'';\r\n      r.push(m);\r\n      r.push(fetchType(param.type[m],reqName))\r\n    })\r\n    r.push('}');\r\n  }\r\n  return r.join('');\r\n}\r\n\r\nmodule.exports.formatParam = function(param){\r\n  let r = ['{'];\r\n  Object.keys(param).forEach((m,idx)=>{\r\n    idx>0?r.push(','):'';\r\n    r.push(m);\r\n    r.push(fetchType(param[m],'isRequired'))\r\n  });\r\n  r.push('}')\r\n  return r.join('');\r\n}\r\n\r\n\r\nmodule.exports.formatResult = function(result){\r\n  let r = ['{result'];\r\n  result.returnNotNull=true;\r\n  r.push(fetchType(result,'returnNotNull'))\r\n  r.push('}')\r\n  return r.join('').replace(/^\\{result:|\\}$/g,'');\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkyU2VydmljZS9hcGkyVHlwZS5qcz8wY2E5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpcnN0VXBwZXIodGV4dCl7XHJcbiAgcmV0dXJuIHRleHQuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKSt0ZXh0LnN1YnN0cigxKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzLmZvcm1hdE5hbWUgPSBmdW5jdGlvbih1cmwpe1xyXG4gIGNvbnN0IHIgPSBbXTtcclxuICB1cmwuc3BsaXQoL1xcLy8pLmZvckVhY2goKG0saWR4KT0+e1xyXG4gICAgaWYoaWR4PT0wKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHIucHVzaChmaXJzdFVwcGVyKG0pKTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByLmpvaW4oJycpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmV0Y2hUeXBlKHBhcmFtLHJlcU5hbWUpe1xyXG4gIGxldCByID0gW107XHJcbiAgaWYoIXBhcmFtW3JlcU5hbWVdKXtcclxuICAgIHIucHVzaCgnPycpXHJcbiAgfVxyXG4gIHIucHVzaCgnOicpO1xyXG4gIGlmKHBhcmFtLnR5cGU9PSdvYmplY3QnKXsvL+WPlnBhcmFtLnZhbHVlXHJcbiAgICBpZihwYXJhbS52YWx1ZT09bnVsbCl7ci5wdXNoKCdhbnknKX1cclxuICAgIGVsc2V7XHJcbiAgICAgIHIucHVzaChge1trZXk6c3RyaW5nXToke2ZldGNoVHlwZShwYXJhbS52YWx1ZSxyZXFOYW1lKS5yZXBsYWNlKC9eXFw/ezAsMX06LywnJyl9fWApXHJcbiAgICB9XHJcbiAgfWVsc2UgaWYocGFyYW0udHlwZT09J2FycmF5Jyl7Ly/lj5ZwYXJhbS52YWx1ZVxyXG4gICAgci5wdXNoKGAke2ZldGNoVHlwZShwYXJhbS52YWx1ZSxyZXFOYW1lKS5yZXBsYWNlKC9eXFw/ezAsMX06LywnJyl9W11gKVxyXG4gIH1lbHNlIGlmKHR5cGVvZiBwYXJhbS50eXBlPT0nc3RyaW5nJyl7XHJcbiAgICByLnB1c2gocGFyYW0udHlwZSk7XHJcbiAgfWVsc2UgaWYocGFyYW0udHlwZS50eXBlIT1udWxsJiYocGFyYW0udHlwZS50eXBlPT0nb2JqZWN0J3x8cGFyYW0udHlwZS50eXBlPT0nYXJyYXknKSl7XHJcbiAgICBpZihwYXJhbS50eXBlLnR5cGU9PSdhcnJheScmJnJlcU5hbWUhPSdpc1JlcXVpcmVkJyl7XHJcbiAgICAgIC8v5Y676ZmkYXJy55qE6Zeu5Y+3XHJcbiAgICAgIC8vY29uc29sZS5pbmZvKHBhcmFtLnR5cGUudHlwZSxyZXFOYW1lPT0naXNSZXF1aXJlZCcpXHJcbiAgICAgIHI9Wyc6J107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gci5qb2luKCcnKStmZXRjaFR5cGUocGFyYW0udHlwZSxyZXFOYW1lKS5yZXBsYWNlKC9eXFw/ezAsMX06L2csJycpO1xyXG4gIH1lbHNle1xyXG4gICAgci5wdXNoKCd7Jyk7XHJcbiAgICBPYmplY3Qua2V5cyhwYXJhbS50eXBlKS5mb3JFYWNoKChtLGlkeCk9PntcclxuICAgICAgaWR4PjA/ci5wdXNoKCcsJyk6Jyc7XHJcbiAgICAgIHIucHVzaChtKTtcclxuICAgICAgci5wdXNoKGZldGNoVHlwZShwYXJhbS50eXBlW21dLHJlcU5hbWUpKVxyXG4gICAgfSlcclxuICAgIHIucHVzaCgnfScpO1xyXG4gIH1cclxuICByZXR1cm4gci5qb2luKCcnKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuZm9ybWF0UGFyYW0gPSBmdW5jdGlvbihwYXJhbSl7XHJcbiAgbGV0IHIgPSBbJ3snXTtcclxuICBPYmplY3Qua2V5cyhwYXJhbSkuZm9yRWFjaCgobSxpZHgpPT57XHJcbiAgICBpZHg+MD9yLnB1c2goJywnKTonJztcclxuICAgIHIucHVzaChtKTtcclxuICAgIHIucHVzaChmZXRjaFR5cGUocGFyYW1bbV0sJ2lzUmVxdWlyZWQnKSlcclxuICB9KTtcclxuICByLnB1c2goJ30nKVxyXG4gIHJldHVybiByLmpvaW4oJycpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMuZm9ybWF0UmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0KXtcclxuICBsZXQgciA9IFsne3Jlc3VsdCddO1xyXG4gIHJlc3VsdC5yZXR1cm5Ob3ROdWxsPXRydWU7XHJcbiAgci5wdXNoKGZldGNoVHlwZShyZXN1bHQsJ3JldHVybk5vdE51bGwnKSlcclxuICByLnB1c2goJ30nKVxyXG4gIHJldHVybiByLmpvaW4oJycpLnJlcGxhY2UoL15cXHtyZXN1bHQ6fFxcfSQvZywnJyk7XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n")}});