import {  Component, PropsWithChildren } from 'react'

import { jsx, Canvas, Timeline, Chart, Interval, Axis, Tooltip } from '@antv/f2';

import "taro-ui/dist/style/components/button.scss" // 按需引入

// import { emit } from "tscommon/utils/GlobalEvt";

import F2Canvas from "tscommon/components/canvas/F2Canvas";


const data = [
    {
      name: 'London',
      月份: 'Jan.',
      月均降雨量: 18.9,
    },
    {
      name: 'London',
      月份: 'Feb.',
      月均降雨量: 28.8,
    },
    {
      name: 'London',
      月份: 'Mar.',
      月均降雨量: 39.3,
    },
    {
      name: 'London',
      月份: 'Apr.',
      月均降雨量: 81.4,
    },
    {
      name: 'London',
      月份: 'May.',
      月均降雨量: 47,
    },
    {
      name: 'London',
      月份: 'Jun.',
      月均降雨量: 20.3,
    },
    {
      name: 'London',
      月份: 'Jul.',
      月均降雨量: 24,
    },
    {
      name: 'London',
      月份: 'Aug.',
      月均降雨量: 35.6,
    },
    {
      name: 'Berlin',
      月份: 'Jan.',
      月均降雨量: 12.4,
    },
    {
      name: 'Berlin',
      月份: 'Feb.',
      月均降雨量: 23.2,
    },
    {
      name: 'Berlin',
      月份: 'Mar.',
      月均降雨量: 34.5,
    },
    {
      name: 'Berlin',
      月份: 'Apr.',
      月均降雨量: 99.7,
    },
    {
      name: 'Berlin',
      月份: 'May.',
      月均降雨量: 52.6,
    },
    {
      name: 'Berlin',
      月份: 'Jun.',
      月均降雨量: 35.5,
    },
    {
      name: 'Berlin',
      月份: 'Jul.',
      月均降雨量: 37.4,
    },
    {
      name: 'Berlin',
      月份: 'Aug.',
      月均降雨量: 42.4,
    },
  ];
  



export default class BarPage extends Component<PropsWithChildren> {


  state = {
    inited: false
  }

  constructor(props: any) {
    super(props);
  }
  

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return <F2Canvas  style={{width:"375px",height:"200px",marginBottom:"50rpx"}}  onInit={(canvasId, context,pixelRatio)=>{
        const LineChart = (
            <Canvas  
            //  el={canvasId}   //如果能开放el属性就正常
              context={context}   pixelRatio={pixelRatio}>
            <Timeline loop delay={500}>
              <Chart data={data}>
                <Axis field="月份" />
                <Axis field="月均降雨量" />
                <Interval
                  x="月份"
                  y="月均降雨量"
                  color="name"
                  adjust={{
                    type: 'dodge',
                    marginRatio: 0.05,
                  }}
                />
              </Chart>
              <Chart data={data}>
                <Axis field="月份" />
                <Axis field="月均降雨量" />
                <Interval x="月份" y="月均降雨量" color="name" adjust="stack" />
              </Chart>
              <Chart
                data={data}
                coord={{
                  transposed: true,
                }}
              >
                <Axis field="月份" />
                <Axis field="月均降雨量" />
                <Interval x="月份" y="月均降雨量" color="name" adjust="stack" />
              </Chart>
              <Chart
                data={data}
                coord={{
                  transposed: true,
                }}
              >
                <Axis field="月份" />
                <Axis field="月均降雨量" />
                <Interval
                  x="月份"
                  y="月均降雨量"
                  color="name"
                  adjust={{
                    type: 'dodge',
                    marginRatio: 0.05,
                  }}
                />
              </Chart>
            </Timeline>
          </Canvas>
        );
        console.info("哈哈哈.........")
        const chart = new Canvas(LineChart.props);
        chart.render();
      }} ></F2Canvas>
  }
}
