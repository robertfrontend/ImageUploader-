var D=Object.defineProperty,L=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var f=(n,o,i)=>o in n?D(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i,g=(n,o)=>{for(var i in o||(o={}))j.call(o,i)&&f(n,i,o[i]);if(u)for(var i of u(o))I.call(o,i)&&f(n,i,o[i]);return n},b=(n,o)=>L(n,N(o));import{s as l,r as s,j as d,a as e,D as S,F as x,b as z,R as O,c as F}from"./vendor.a110c541.js";const R=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};R();var y="/assets/image.80539fd7.svg";function _(n){const[o,i]=s.exports.useState(null),c=a=>{i(a),n.postImage(a)},t=s.exports.createRef();return d(M,{children:[e(A,{children:e(S,{onDrop:a=>c(a),ref:t,children:({getRootProps:a,getInputProps:p})=>e("section",{children:d("div",b(g({},a()),{children:[e("input",g({},p())),e("img",{src:y,alt:""}),e("p",{children:o?"Imagen agregada correctamente":"Drag & Drop your image here"})]}))})})}),e("div",{className:"or",children:e("button",{type:"button",onClick:()=>{t.current&&t.current.open()},children:"Choose a file"})})]})}const M=l.div`
  width: 100%;
  min-height: inherit;
  .or {
    padding-top: 1em;
    p {
      padding-bottom: 1em;
    }
  }
  button {
    margin-top: 0.2em;
    padding: 10px 2em;
    background: #2f80ed;
    border-radius: 8px;
    border-style: none;
    color: white;
    font-weight: 400;
  }
`,A=l.div`
  width: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px dashed #97bef4;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: #979ba024;
`;function P(){const[n,o]=s.exports.useState(!1),[i,c]=s.exports.useState(!1),[t,r]=s.exports.useState(!1),[a,p]=s.exports.useState(!1),v=async h=>{console.log(y[0],"enviado imagen"),o(!0);try{let m=new FormData;h[0]&&m.append("file",h[0]);const C=(await z.post("https://imageuploaderrobertfrontend.herokuapp.com/upload_image",m)).data.data;r(C),o(!1),c(!0)}catch{alert("Ha ocurrido un error al subir la imagen"),c(!1)}},w=()=>{navigator.clipboard.writeText(t),p(!0)},k=()=>{c(!1),r(!1),p(!1)};return e(U,{children:e($,{loader:!0,children:i?d(E,{children:[e("span",{className:"material-icons md-36",children:"check_circle"}),e("h3",{children:"Uploaded Successfully!"}),e("img",{src:t,alt:""}),d("div",{className:"copylink",children:[e("input",{type:"text",disabled:!0,value:t,style:{width:"100%"},className:"myInput"}),e("button",{type:"button",onClick:()=>w(),children:"CopyLink"})]}),a&&d("p",{style:{marginTop:"1em"},children:["Link copiado satisfactoriamente!"," ",e("span",{className:"material-icons md-18",style:{color:"rgba(79, 79, 79, 1);"},children:"content_copy"})]}),e("a",{href:"#",onClick:()=>k(),children:"Volver"})]}):e(x,{children:n?d(B,{children:[e("p",{children:"Uploading..."}),d("div",{className:"lds-roller",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{}),e("div",{})]})]}):d(x,{children:[d("header",{children:[e("h3",{children:"Upload your image"}),e("p",{children:"File should be Jpeg, Png,..."})]}),e("div",{className:"content",children:e(_,{postImage:v})})]})})})})}const U=l.div`
  width: 100%;
  min-height: 120vh;
  background: #acacac45;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(79, 79, 79, 1);
`,$=l.div`
  width: 402px;
  /* min-height: 469px; */
  min-height: ${n=>n.loader?"10vh":"469px"};
  background-color: white;
  border-radius: 12px;
  padding: ${n=>n.loader?"1em":"0.2em 2em"};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  header {
    text-align: center;
    padding-top: 1em;
    padding-bottom: 1em;
    h3 {
      font-weight: 500;
      font-size: 1.5em;
      color: rgba(79, 79, 79, 1);
      padding-bottom: 1em;
    }
  }
  .content {
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2em 0;
    img {
      width: 114px;
      padding-bottom: 2em;
    }
    p {
      color: rgba(189, 189, 189, 1);
    }
  }
`,B=l.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 500;
    color: rgba(79, 79, 79, 1) !important;
  }
`,E=l.div`
  text-align: center;
  width: 100%;
  span {
    padding-top: 0.5em;
    color: rgba(33, 150, 83, 1);
  }
  h3 {
    font-weight: 500;
    padding-bottom: 2em;
  }
  img {
    width: 200px;
  }
  .url {
    padding-top: 1em;
  }
  button {
    margin-top: 0.2em;
    padding: 10px 2em;
    background: #2f80ed;
    border-radius: 8px;
    border-style: none;
    color: white;
    font-weight: 400;
    position: absolute;
    right: 0.2em;
  }
  .copylink {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
      padding: 15px 0em;
      padding-right: 10em;
      padding-left: 0.3em;
      background: #f6f8fb;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      border-radius: 8px;
    }
  }
  a {
    text-decoration: none;
    margin-top: 0.5em;
    display: block;
    color: #2f80ed;
  }
`;O.render(e(F.StrictMode,{children:e(P,{})}),document.getElementById("root"));
