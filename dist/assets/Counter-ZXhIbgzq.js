import{G as n,I as u,r as m,c as l,o as s,d as t,O as p,P as f,R as g,b,T as x,Q as v}from"./_plugin-vue_export-helper-BA5-b93U.js";const y={class:"mt-20 lg:mt-0 relative text-white flex justify-center"},k={class:"font-semibold flex justify-center text-xl sm:text-2xl md:text-4xl w-full"},_={class:"mt-2"},C={__name:"Counter",setup(h){const i=n([{id:1,number:10,title:"Completed Projects"},{id:2,number:4,title:"Internships & Freelance"},{id:3,number:3,title:"Programming Languages"}]),r=n(null),d=n(!1);return u(()=>{const o=new IntersectionObserver(([e])=>{e.isIntersecting&&(d.value=!0,o.disconnect())},{threshold:.5});r.value&&o.observe(r.value)}),(o,e)=>{const c=m("Countup");return s(),l("section",y,[e[1]||(e[1]=t("header",{class:"absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block"},null,-1)),e[2]||(e[2]=t("header",{class:"absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"},null,-1)),t("ul",{ref_key:"statsSection",ref:r,class:"relative z-1 p-6 mx-auto w-11/12 lg:mx-0 rounded-3xl dark:bg-[#ffffff29] bg-primary shadow-lg md:divide-x grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 border-secondary divide-secondary"},[(s(!0),l(p,null,f(i.value,a=>(s(),l("li",{class:"text-center",key:a.id},[t("h2",k,[e[0]||(e[0]=g(" + ")),d.value?(s(),b(c,{key:0,endVal:a.number},null,8,["endVal"])):x("",!0)]),t("p",_,v(a.title),1)]))),128))],512)])}}};export{C as default};
