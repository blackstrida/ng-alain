(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{gkWZ:function(e,t,r){"use strict";r.r(t),r.d(t,"DataVModule",(function(){return g}));var s=r("M0ag"),a=r("tyNb"),n=r("fXoL"),c=r("Ac7g"),i=r("SdXu"),o=r("69OU"),u=r("Ff2k");const U=[{path:"relation",component:(()=>{class e{constructor(e){this.http=e,this.options={title:{text:"User Releaction"},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"force",symbolSize:60,focusNodeAdjacency:!0,roam:!0,categories:[{name:"User"}],label:{normal:{show:!0,textStyle:{fontSize:12}}},force:{repulsion:2e3,gravity:.3},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],draggable:!0,tooltip:{triggerOn:"click",formatter:e=>"node"===e.dataType?`${e.data.name}\uff1a${e.data.arg}`:e.name},data:Array(20).fill({}).map((e,t)=>({name:"User"+t,arg:t+10,category:0})),links:[{source:"User0",target:"User1"},{source:"User0",target:"User2"},{source:"User0",target:"User3"},{source:"User1",target:"User4"},{source:"User2",target:"User5"},{source:"User3",target:"User6"},{source:"User4",target:"User7"},{source:"User5",target:"User8"},{source:"User6",target:"User9"},{source:"User1",target:"User10"},{source:"User1",target:"User11"},{source:"User11",target:"User12"},{source:"User11",target:"User13"},{source:"User11",target:"User14"},{source:"User11",target:"User15"},{source:"User11",target:"User16"},{source:"User11",target:"User17"},{source:"User11",target:"User18"},{source:"User11",target:"User19"}],lineStyle:{normal:{opacity:.7,width:1,curveness:.1}}}]}}chartInit(e){this.ecIntance=e}ngOnInit(){window.addEventListener("resize",()=>this.resize)}resize(){this.ecIntance&&this.ecIntance.resize()}ngOnDestroy(){window.removeEventListener("resize",()=>this.resize)}}return e.\u0275fac=function(t){return new(t||e)(n.Ub(c.r))},e.\u0275cmp=n.Ob({type:e,selectors:[["app-data-v-relation"]],decls:18,vars:3,consts:[[3,"title"],[3,"nzBordered","nzSplit"],["href","#"]],template:function(e,t){1&e&&(n.Vb(0,"page-header",0),n.ac(1,"quick-menu"),n.ac(2,"nz-list",1),n.ac(3,"nz-list-item"),n.ac(4,"a",2),n.Qc(5,"Link1"),n.Zb(),n.Zb(),n.ac(6,"nz-list-item"),n.ac(7,"a",2),n.Qc(8,"Link2"),n.Zb(),n.Zb(),n.ac(9,"nz-list-item"),n.ac(10,"a",2),n.Qc(11,"Link3"),n.Zb(),n.Zb(),n.ac(12,"nz-list-item"),n.ac(13,"a",2),n.Qc(14,"Link4"),n.Zb(),n.Zb(),n.ac(15,"nz-list-item"),n.ac(16,"a",2),n.Qc(17,"Link5"),n.Zb(),n.Zb(),n.Zb(),n.Zb()),2&e&&(n.tc("title","asdf"),n.Db(2),n.tc("nzBordered",!1)("nzSplit",!1))},directives:[i.a,o.a,u.a,u.c],encapsulation:2}),e})()}];let l=(()=>{class e{}return e.\u0275mod=n.Sb({type:e}),e.\u0275inj=n.Rb({factory:function(t){return new(t||e)},imports:[[a.o.forChild(U)],a.o]}),e})(),g=(()=>{class e{}return e.\u0275mod=n.Sb({type:e}),e.\u0275inj=n.Rb({factory:function(t){return new(t||e)},imports:[[s.b,l]]}),e})()}}]);