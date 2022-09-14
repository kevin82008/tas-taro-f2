
declare module 'tscommon/utils/BaseTools' {
    export const LOGGER: {
        /**
         * debug日志
         */
        debug: (...params: any[]) => void

        /**
         * 警告日志
         */
        warn: (...params: any[]) => void

        /**
         * 错误日志
         */
        error: (...params: any[]) => void
    }

    export const systemInfo:any;
}

