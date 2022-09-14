# 初始化说明
1. 执行yarn安装依赖
```
yarn add @tarojs/cli global
yarn
```

2. 执行 npm run dev 编译
```
npm run dev
```

3. 在微信小程序里查看效果

# 代码说明
组件代码： F2Canvas.tsx
业务代码： modules/bar/view/index

根目录下的 compare.mp4 左边是不正常的效果，右边是预期的正常效果

通过修改 f2/src/canvas/index.ts 里面，开放 el 属性后，再在  modules/bar/view/index 里设置 el 属性后可以正常





