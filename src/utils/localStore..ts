//持久化存储store，当页面发生刷新也不会消失
import { Cache } from '@/utils/cache';
import {useStore} from 'vuex';

export function localStore(){
  const cache = new Cache();
  const store = useStore();

  //持久化token
  console.log(store);
  store.commit('login/CHANGE_TOKEN',JSON.parse(cache.get("token","local")));
  //持久化userInfo
  store.commit('login/CHANGE_USERINFO',JSON.parse(cache.get("userInfo","local")));
  //持久化userPower
  store.commit('login/CHANGE_USERPOWER',JSON.parse(cache.get("userPower","local")));
}