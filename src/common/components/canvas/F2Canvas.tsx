import React from 'react'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'
import { Canvas } from '@tarojs/components'

import { my as F2Context } from '@antv/f2-context'
import { F2CanvasProps, F2CanvasState } from "types-common/F2Canvas";
import { systemInfo } from "tscommon/utils/BaseTools";


export default class F2Canvas extends React.Component<F2CanvasProps, F2CanvasState> {
    static INSTANCE_COUNTER = 0;

    eventObjs = [] as any[];
    

    /**
     * 在onReady后触发
     * 如果已经onReady了，则用 Taro.
     */
    triggerAfterReady = (func:()=>void)=>{
        const inst = getCurrentInstance() as any;
        if(!inst.__inited){
            //等待初始化
            this.eventObjs.push(func);
        }else{
            Taro.nextTick(() => {
                //下一个周期触发
                func();
            });
        }
    }


    constructor(props) {
        super(props);
        console.info("F2 Canvas ....")
        this.state = {
            id: this.props.id || 'f2-canvas-' + F2Canvas.INSTANCE_COUNTER++,
        };
    }

    /**
     * 获取微信里的canvas context
     * @returns 
     */
    getWeappContext = () => {
        const { id } = this.state;

        return new Promise((resolve) => {
            this.triggerAfterReady(()=>{
                Taro.createSelectorQuery().select('#' + id)
                .fields({
                    node: true,
                    size: true
                }).exec(res => {
                    let { node, width, height } = res[0]
                    const context = node.getContext('2d')
                    const pixelRatio = systemInfo.pixelRatio;
                    // 高清设置
                    node.width = width * pixelRatio;
                    node.height = height * pixelRatio;
                    resolve(context);
                });
            }); 
        });
      

    }




    /**
     * 获取阿里体系里的canvas context
     * @returns 
     */
    getAlipayContext = () => {
        const { id } = this.state;
        return new Promise((resolve) => {
            this.triggerAfterReady(()=>{
                const ctx = Taro.createCanvasContext(id);
                const context = F2Context(ctx)
                const query = Taro.createSelectorQuery();
                query.select('#' + id)
                    .boundingClientRect()
                    .exec(res => {
                        resolve(context);
                    });
            }); 
        });

    }



    /**
     * 等待初始化成功后获取到canvas才真正的画
     */
    componentDidMount = async () => {
        
        const inst = getCurrentInstance() as any;
        const router = inst.router;
        if (router) {
            //注册onReady事件的处理，只处理一次
            eventCenter.once(router.onReady, () => {
                console.info("F2 Canvas ready....")
                inst.__inited = true;
                while(this.eventObjs.length > 0){
                    const func = this.eventObjs.shift();
                    func();
                }
            });
        }

        console.info("F2 Canvas componentDidMount....")
        let context = null as any;
        if (process.env.TARO_ENV === 'alipay') { //||process.env.TARO_ENV === 'dd'
            context = await this.getAlipayContext();
        } else if (process.env.TARO_ENV === 'weapp') {
            context = await this.getWeappContext();
        }
        this.props.onInit(this.state.id,context,systemInfo.pixelRatio);
    }


    render() {
        return (
            <Canvas
                className={this.props.className}
                style={this.props.style}
                type="2d"
                id={this.state.id}
                canvasId={this.state.id}
            />
        )
    }
}
