(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5901)}])},8727:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(5893),n=a(5675),s=a.n(n),A={src:"/_next/static/media/Avatar.6e3ad623.jpeg",height:886,width:886,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKInX//EABkQAQEBAAMAAAAAAAAAAAAAAAIBAwASYf/aAAgBAQABPwCatXLZUyLsSfBz/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQIBAT8Aj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8},l=a(2489),c=a(3024),i=a(9417),o=a(3067);let u=e=>{let{icon:t,link:a,text:n}=e;return(0,r.jsx)("a",{className:"block text-base",href:a,target:"_blank",children:(0,r.jsxs)("button",{className:"p-1 rounded-md hover:bg-cold/50 hover:text-white",children:[(0,r.jsx)(l.G,{className:"text-sea",icon:t}),(0,r.jsx)("span",{className:"ml-2 underlline",children:n})]})})},d=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:"font-medium text-xl",children:(0,r.jsx)("span",{className:"inner-border pb-1.5",children:t})})};function x(){return(0,r.jsxs)("div",{className:"flex flex-col mx-auto max-w-lg space-y-4",children:[(0,r.jsxs)("section",{className:"flex flex-row flex-1 justify-between border-gray border-b-8 border-solid py-6",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold capitalize first-letter:text-sea",children:"xmccc"}),(0,r.jsx)("p",{className:"text-sm font-light",children:"前端开发/手动挡司机/咖啡入门"})]}),(0,r.jsx)("div",{className:"relative h-fit w-fit rounded-full before:pseudo-spin-content",children:(0,r.jsx)(s(),{className:"w-28 h-28 p-4 rounded-full",alt:"xmcx3's avatar",src:A})})]}),(0,r.jsxs)("section",{className:"flex flex-col",children:[(0,r.jsx)(d,{children:"LeetCode"}),(0,r.jsx)(o.default,{className:"text-gray self-center py-8"})]}),(0,r.jsxs)("section",{className:"flex flex-col",children:[(0,r.jsx)(d,{children:"On the web"}),(0,r.jsxs)("div",{className:"self-center py-8",children:[(0,r.jsx)(u,{icon:c.zhw,link:"https://github.com/xmcx3",text:"xmcx3"}),(0,r.jsx)(u,{icon:i.FU$,link:"mailto:xmc2013v@gmail.com",text:"xmc2013v@gmail.com"})]})]})]})}},5901:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var r=a(5893),n=a(8727);function s(){return(0,r.jsx)(n.default,{})}},3067:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var r=a(5893),n=a(7294),s=a(3920);let A=async()=>{try{let e=await fetch("https://test.cors.workers.dev/?https://leetcode.cn/graphql/noj-go",{method:"POST",mode:"cors",headers:{"content-type":"application/json"},body:JSON.stringify({query:"\n    query userProfileCalendar($userSlug: String!, $year: Int) {\n      userCalendar(userSlug: $userSlug, year: $year) {\n        submissionCalendar\n      }\n    }\n  ",variables:{userSlug:"xmcccccc"},operationName:"userProfileCalendar"})});return e.json()}catch(e){return{data:{}}}},l=e=>{let t=e.getMonth(),a=e.getYear(),r=e.getFullYear(),n=e.getDay(),s=e.getDate(),A=new Date(r,t,1),l=Math.floor((s+A.getDay()-1)/7);return[(12*a+t)*8+n,l]},c=e=>{let t=e.getFullYear(),a=e.getMonth(),r=e.getDate();return new Date(t,a,r).getTime()};class i{get data(){return Array.from(this.datas.entries()).map(e=>{let[t,a]=e,r=new Date(1e3*parseInt(t));return[...l(r),a]})}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach(e=>{let[t,a]=e,r=new Date(1e3*parseInt(t)),n=Math.floor(c(r)/1e3);this.datas.has(n)&&this.datas.set(n,a)})}get range(){let e=this.data;return{x:{max:s.Fp7(e,e=>e[0]),min:s.VV$(e,e=>e[0])},y:{max:s.Fp7(e,e=>e[1]),min:s.VV$(e,e=>e[1])}}}constructor(e=3){let t=new Date,a=new Date(t.getFullYear(),t.getMonth()+1),r=s.F0B.offset(a,-e),n=s.Nus(r,a);this.datas=new Map(n.map(e=>[Math.floor(c(e)/1e3),0]))}}let o=e=>{let t=(0,n.useRef)(null),[a,r]=(0,n.useState)(null),A=(e.range.x.max+1-e.range.x.min)*20,l=(e.range.y.max+1-e.range.y.min)*20,c=s.q2y().domain(s.w6H(e.range.x.min,e.range.x.max+1)).range([0,A]).padding(1),i=s.q2y().domain(s.w6H(e.range.y.min,e.range.y.max+1)).range([0,l]).padding(1);(0,n.useEffect)(()=>{let e=s.Ys(t.current).append("svg").attr("width",A).attr("height",l).attr("viewBox","0 0 ".concat(A," ").concat(l));return r(e),()=>e.remove()},[]);let o=e=>{let t=s.q$2(s.JHv("#19A7CE","#000000"),4),a=["#F6F1F1",...t],r=Math.ceil(e/5);return a[r>=5?4:r]},u=e=>{null==a||a.selectAll("rect").data(e).join("rect").attr("x",e=>{let[t,a]=e;return c(t)}).attr("y",e=>{let[t,a]=e;return i(a)}).attr("width",12).attr("height",12).attr("rx",2).attr("fill",e=>o(e[2]))};return[a,t,u]},u=e=>{let{month:t=4,className:a}=e,s=(0,n.useMemo)(()=>new i(t),[t]),[l,c,u]=o(s);return(0,n.useEffect)(()=>{let e=async()=>{let{data:{userCalendar:e}}=await A(),{submissionCalendar:t}=e||"",a=void 0===t?[]:JSON.parse(t),r=Object.keys(a).map(e=>[e,a[e]]);s.update(r),u(s.data)};u(s.data),e()},[s.data]),(0,r.jsx)("div",{className:"w-full text-gray flex items-center ".concat(a),ref:c})};var d=u}},function(e){e.O(0,[976,948,920,634,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);