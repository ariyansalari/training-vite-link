import App from "./src/App";
const root=document.getElementById("root");

root.append(App());

// const callback=()=>{
//   const users=[
//       {username:"ali",age:21},
//       {username:"reza",age:22},
//       {username:"morteza",age:11},
//       {username:"mehdi",age:25}
//   ];
// const p=new Promise((res,rej)=>{

//   setTimeout(()=>{
//     if(true)
// res(users)
// else
// rej("ERORR")
//   },3000)
// })
// return p;
// }

// async function callhere(){

// const cb=await callback();
// console.log(cb)
// console.log("salam")
// }
// callhere();



