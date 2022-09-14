import React from "react"

export interface F2CanvasProps {
    id?: string
    className?: string
    style?: React.CSSProperties
    onInit: (canvasId:string,context: any, pixelRatio:number) => void
}

export type F2CanvasState = {
    id: string
}

declare module 'tscommon/components/canvas/F2Canvas' {
    export class  F2Canvas extends React.Component<F2CanvasProps, F2CanvasState> {
        
        static INSTANCE_COUNTER : number;
    }
}