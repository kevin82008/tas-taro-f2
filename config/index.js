const outputRootFolder = {
	weapp: 'weapp',
	swan: 'swan',
	alipay: 'alipay',
	tt: 'tt',
	h5: 'h5',
	rn: 'rn',
	qq: 'qq',
	jd: 'jd',
	quickapp: 'quickapp'
};
const env = process.env.TARO_ENV; //.npm_config_argv;

const path = require('path');

const config = {
  projectName: 'demo-taroui',
  date: '2022-9-12',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${outputRootFolder[env]}`,

  alias: {

    "tsservice":path.resolve(__dirname,"..","src/service"),
    "tscommon":path.resolve(__dirname,"..","src/common"),
    "tsconfig":path.resolve(__dirname,"..","src/config")
  },

  plugins: [
     
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack4',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
