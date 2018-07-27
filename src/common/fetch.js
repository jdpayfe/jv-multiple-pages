import axios from 'axios'
import { BASE_URL } from '../api'


export default function fetch(url='', data={}, method='get') {

  method = method.toLowerCase();

  let ops = {params: data};
  if(method === 'post'){

    ops = {data: data};

    // axios默认content-type是application/json 若要改成application/x-www-form-urlencoded 就放开
    // let pms = new URLSearchParams();
    // for(let d in data){
    //   pms.append(d, data[d]);
    // }
    // ops = {data: pms};
  }
  let options = {
    url,
    ...ops,
    method
  };

  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    const instance = axios.create({ //创建一个axios实例
      baseURL: BASE_URL, //设置默认根地址
      timeout: 10000, //设置请求超时设置
      withCredentials: true,
      crossDomain:true
    });

    instance(options) //请求处理
      .then(({data}) => {
        // console.log('fetch:',data);
        //请求成功时,根据业务判断状态
        if(data.code === 'AUTH000002'){ // TODO 未登录，状态码根据服务端返回修改，如跳登录页
          location.href = `//plogin.m.jd.com/user/login.action?appid=346&returnurl=${encodeURIComponent(location.href)}`;
          return false;

        }
        resolve(data); // 不论返回的success是true还是false，都进resolve，后续逻辑前端处理
      })
      .catch((error) => {
        console.log('fetch请求数据失败！', error);
      })
  })
}
