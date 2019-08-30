import Axios from 'axios'

let prod = "http://128.196.238.3:5086/devportal";
let dev = "http://128.196.238.9:5086/devportal";
let baseUrl = process.env.NODE_ENV == "production" ? prod : dev;


export default function request (path,args,isPOST){

    let token = this.$store.state.token;
    if(isPOST == false){
      let T = {
        methtod:"get",
        url:baseUrl+path,
        params:args,
      }
      console.log(111);
      if(token.length > 0){
        T.headers = {'Token':token};
      }
      return new Promise((resolve,reject)=>{
        Axios(T).then(data=>{
          let result = data.data;
          resolve(result);
        })
      })
    }

    var param = new URLSearchParams();
    for(let key in args){
      param.append(key,args[key]);
    }
    console.log();

    return new Promise((resolve,reject)=>{
      console.log(222);

      if(token.length == 0){
        console.log(3333);

        Axios.post(baseUrl+path,param,{}).then(data=>{
          let result = data.data;
          resolve(result);
        })
      }else{
        console.log(4444);

        Axios.post(baseUrl+path,param,{
          headers:{
            'Token':token,
          }
        }).then(data=>{
            let result  = data.data;
            if(result.code == '1'){
              resolve(result);
            }else if(result.code == `401` && index !== 'index' && index !== 'store'){
              //跳转登录
              this.$router.push({
                path:'/Login',
              });
            }else{
              resolve(result);
            }

        })

      }

    })

}


 