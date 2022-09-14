
import Taro from '@tarojs/taro';
import { LOG_LEVEL } from 'tscommon/utils/EnumTypes';

const LOGGER = Taro.getLogManager({level: LOG_LEVEL.BUSI});

const systemInfo = Taro.getSystemInfoSync();


/**
 * 获取唯一值
 */
function fetchUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

/**
 * 获取hash值
 * @param str 
 * @param caseSensitive 
 * @returns 
 */
function getHashCode(str:string,caseSensitive?:boolean){
    if(!caseSensitive){
        str = str.toLowerCase();
    }
    // 1315423911=b'1001110011001111100011010100111'
    var hash  =   1315423911,i,ch;
    for (i = str.length - 1; i >= 0; i--) {
        ch = str.charCodeAt(i);
        hash ^= ((hash << 5) + ch + (hash >> 2));
    }
     
    return  (hash & 0x7FFFFFFF);
  }

export {LOGGER,getHashCode,fetchUUID,systemInfo};