(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lYtU:function(t,e,n){"use strict";n.r(e),n.d(e,"PassportModule",function(){return ot});var r=n("M0ag"),i=n("0bRG"),o=n("fXoL"),a=n("Ac7g"),s=n("tyNb");let c=(()=>{class t{constructor(t,e,n){this.socialService=t,this.settingsSrv=e,this.route=n,this.type=""}ngOnInit(){this.type=this.route.snapshot.params.type,this.mockModel()}mockModel(){const t={token:"123456789",name:"cipchk",email:`${this.type}@${this.type}.com`,id:1e4,time:+new Date};this.settingsSrv.setUser(Object.assign(Object.assign({},this.settingsSrv.user),t)),this.socialService.callback(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(i.d),o.Qb(a.m),o.Qb(s.a))},t.\u0275cmp=o.Kb({type:t,selectors:[["app-callback"]],features:[o.Bb([i.d])],decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})();var l=n("3Pt+"),p=n("ZE2D"),b=n("ocnv"),u=n("B+r4"),d=n("C2AL"),m=n("PTRe"),g=n("OzZK"),h=n("RwU8"),f=n("sYmb");let z=(()=>{class t{constructor(t,e,n,r){this.tokenService=e,this.settings=n,this.router=r,this.f=t.group({password:[null,l.v.required]})}get user(){return this.settings.user}submit(){for(const t in this.f.controls)this.f.controls[t].markAsDirty(),this.f.controls[t].updateValueAndValidity();this.f.valid&&(console.log("Valid!"),console.log(this.f.value),this.tokenService.set({token:"123"}),this.router.navigate(["dashboard"]))}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(l.f),o.Qb(i.a),o.Qb(a.m),o.Qb(s.l))},t.\u0275cmp=o.Kb({type:t,selectors:[["passport-lock"]],decls:15,vars:11,consts:[[1,"ant-card","width-lg",2,"margin","0 auto"],[1,"ant-card-body"],[1,"avatar"],["nzIcon","user","nzSize","large",3,"nzSrc"],["nz-form","","role","form",1,"mt-md",3,"formGroup","ngSubmit"],[3,"nzErrorTip"],["nzSuffixIcon","lock"],["type","password","nz-input","","formControlName","password"],["nzType","flex","nzAlign","middle"],[2,"text-align","right",3,"nzOffset","nzSpan"],["nz-button","","nzType","primary",3,"disabled"]],template:function(t,e){1&t&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Wb(2,"div",2),o.Rb(3,"nz-avatar",3),o.Vb(),o.Wb(4,"form",4),o.dc("ngSubmit",function(){return e.submit()}),o.Wb(5,"nz-form-item"),o.Wb(6,"nz-form-control",5),o.ic(7,"translate"),o.Wb(8,"nz-input-group",6),o.Rb(9,"input",7),o.Vb(),o.Vb(),o.Vb(),o.Wb(10,"nz-row",8),o.Wb(11,"nz-col",9),o.Wb(12,"button",10),o.Nc(13),o.ic(14,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb()),2&t&&(o.Cb(3),o.pc("nzSrc",e.user.avatar),o.Cb(1),o.pc("formGroup",e.f),o.Cb(2),o.pc("nzErrorTip",o.jc(7,7,"validation.password.required")),o.Cb(5),o.pc("nzOffset",12)("nzSpan",12),o.Cb(1),o.pc("disabled",!e.f.valid),o.Cb(1),o.Oc(o.jc(14,9,"app.lock")))},directives:[p.a,l.w,l.p,b.b,l.i,u.c,b.c,u.a,b.a,d.a,m.c,m.b,l.d,l.o,l.h,g.a,h.a],pipes:[f.c],styles:["[_nghost-%COMP%]     .ant-card-body{position:relative;margin-top:80px}[_nghost-%COMP%]     .avatar{position:absolute;top:-20px;left:50%;margin-left:-20px}"]}),t})();var v=n("wdp9"),w=n("AytR"),C=n("ey9i"),V=n("PScX"),y=n("oyxB"),S=n("ofXK"),k=n("TaO5"),W=n("nJia"),P=n("FwiY"),T=n("Wfee");function N(t,e){if(1&t&&o.Rb(0,"nz-alert",27),2&t){const t=o.hc();o.pc("nzType","error")("nzMessage",t.error)("nzShowIcon",!0)}}function O(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Pc(" ",o.jc(2,1,"validation.phone-number.required")," "))}function I(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Pc(" ",o.jc(2,1,"validation.phone-number.wrong-format")," "))}function x(t,e){if(1&t&&(o.Lc(0,O,3,3,"ng-container",28),o.Lc(1,I,3,3,"ng-container",28)),2&t){const t=e.$implicit;o.pc("ngIf",t.errors.required),o.Cb(1),o.pc("ngIf",t.errors.pattern)}}let L=(()=>{class t{constructor(t,e,n,r,i,o,a,s,c){this.router=e,this.settingsService=n,this.socialService=r,this.reuseTabService=i,this.tokenService=o,this.startupSrv=a,this.http=s,this.msg=c,this.error="",this.type=0,this.count=0,this.form=t.group({userName:[null,[l.v.required,l.v.pattern(/^(admin|user)$/)]],password:[null,[l.v.required,l.v.pattern(/^(ng\-alain\.com)$/)]],mobile:[null,[l.v.required,l.v.pattern(/^1\d{10}$/)]],captcha:[null,[l.v.required]],remember:[!0]})}get userName(){return this.form.controls.userName}get password(){return this.form.controls.password}get mobile(){return this.form.controls.mobile}get captcha(){return this.form.controls.captcha}switch({index:t}){this.type=t}getCaptcha(){if(this.mobile.invalid)return this.mobile.markAsDirty({onlySelf:!0}),void this.mobile.updateValueAndValidity({onlySelf:!0});this.count=59,this.interval$=setInterval(()=>{this.count-=1,this.count<=0&&clearInterval(this.interval$)},1e3)}submit(){if(this.error="",0===this.type){if(this.userName.markAsDirty(),this.userName.updateValueAndValidity(),this.password.markAsDirty(),this.password.updateValueAndValidity(),this.userName.invalid||this.password.invalid)return}else if(this.mobile.markAsDirty(),this.mobile.updateValueAndValidity(),this.captcha.markAsDirty(),this.captcha.updateValueAndValidity(),this.mobile.invalid||this.captcha.invalid)return;this.http.post("/login/account?_allow_anonymous=true",{type:this.type,userName:this.userName.value,password:this.password.value}).subscribe(t=>{"ok"===t.msg?(this.reuseTabService.clear(),t.user.expired=+new Date+3e5,this.tokenService.set(t.user),this.startupSrv.load().then(()=>{let t=this.tokenService.referrer.url||"/";t.includes("/passport")&&(t="/"),this.router.navigateByUrl(t)})):this.error=t.msg})}open(t,e="href"){let n="",r="";switch(r=w.a.production?"https://ng-alain.github.io/ng-alain/#/passport/callback/"+t:"http://localhost:4200/#/passport/callback/"+t,t){case"auth0":n=`//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent(r)}`;break;case"github":n=`//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=${decodeURIComponent(r)}`;break;case"weibo":n=`https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=${decodeURIComponent(r)}`}"window"===e?this.socialService.login(n,"/",{type:"window"}).subscribe(t=>{t&&(this.settingsService.setUser(t),this.router.navigateByUrl("/"))}):this.socialService.login(n,"/",{type:"href"})}ngOnDestroy(){this.interval$&&clearInterval(this.interval$)}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(l.f),o.Qb(s.l),o.Qb(a.m),o.Qb(i.d),o.Qb(v.a,8),o.Qb(i.a),o.Qb(C.c),o.Qb(a.q),o.Qb(V.e))},t.\u0275cmp=o.Kb({type:t,selectors:[["passport-login"]],features:[o.Bb([i.d])],decls:54,vars:39,consts:[["nz-form","","role","form",3,"formGroup","ngSubmit"],[1,"tabs",3,"nzAnimated","nzSelectChange"],[3,"nzTitle"],["class","mb-lg",3,"nzType","nzMessage","nzShowIcon",4,"ngIf"],["nzErrorTip","Please enter mobile number, muse be: admin or user"],["nzSize","large","nzPrefixIcon","user"],["nz-input","","formControlName","userName","placeholder","username: admin or user"],["nzErrorTip","Please enter password, muse be: ng-alain.com"],["nzSize","large","nzPrefixIcon","lock"],["nz-input","","type","password","formControlName","password","placeholder","password: ng-alain.com"],[3,"nzErrorTip"],["nz-input","","formControlName","mobile","placeholder","mobile number"],["mobileErrorTip",""],[3,"nzGutter"],[3,"nzSpan"],["nzSize","large","nzPrefixIcon","mail"],["nz-input","","formControlName","captcha","placeholder","captcha"],["type","button","nz-button","","nzSize","large","nzBlock","",3,"disabled","nzLoading","click"],["nz-checkbox","","formControlName","remember"],[1,"text-right",3,"nzSpan"],[1,"forgot",3,"click"],["nz-button","","type","submit","nzType","primary","nzSize","large","nzBlock","",3,"nzLoading"],[1,"other"],["nz-tooltip","","nzTooltipTitle","in fact Auth0 via window","nz-icon","","nzType","alipay-circle",1,"icon",3,"click"],["nz-tooltip","","nzTooltipTitle","in fact Github via redirect","nz-icon","","nzType","taobao-circle",1,"icon",3,"click"],["nz-icon","","nzType","weibo-circle",1,"icon",3,"click"],["routerLink","/passport/register",1,"register"],[1,"mb-lg",3,"nzType","nzMessage","nzShowIcon"],[4,"ngIf"]],template:function(t,e){if(1&t&&(o.Wb(0,"form",0),o.dc("ngSubmit",function(){return e.submit()}),o.Wb(1,"nz-tabset",1),o.dc("nzSelectChange",function(t){return e.switch(t)}),o.Wb(2,"nz-tab",2),o.ic(3,"translate"),o.Lc(4,N,1,3,"nz-alert",3),o.Wb(5,"nz-form-item"),o.Wb(6,"nz-form-control",4),o.Wb(7,"nz-input-group",5),o.Rb(8,"input",6),o.Vb(),o.Vb(),o.Vb(),o.Wb(9,"nz-form-item"),o.Wb(10,"nz-form-control",7),o.Wb(11,"nz-input-group",8),o.Rb(12,"input",9),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(13,"nz-tab",2),o.ic(14,"translate"),o.Wb(15,"nz-form-item"),o.Wb(16,"nz-form-control",10),o.Wb(17,"nz-input-group",5),o.Rb(18,"input",11),o.Vb(),o.Lc(19,x,2,2,"ng-template",null,12,o.Mc),o.Vb(),o.Vb(),o.Wb(21,"nz-form-item"),o.Wb(22,"nz-form-control",10),o.ic(23,"translate"),o.Wb(24,"nz-row",13),o.Wb(25,"nz-col",14),o.Wb(26,"nz-input-group",15),o.Rb(27,"input",16),o.Vb(),o.Vb(),o.Wb(28,"nz-col",14),o.Wb(29,"button",17),o.dc("click",function(){return e.getCaptcha()}),o.Nc(30),o.ic(31,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(32,"nz-form-item"),o.Wb(33,"nz-col",14),o.Wb(34,"label",18),o.Nc(35),o.ic(36,"translate"),o.Vb(),o.Vb(),o.Wb(37,"nz-col",19),o.Wb(38,"a",20),o.dc("click",function(){return e.msg.error("\u8bf7\u627e\u6b27\u9633\u950b")}),o.Nc(39),o.ic(40,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Wb(41,"nz-form-item"),o.Wb(42,"button",21),o.Nc(43),o.ic(44,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Wb(45,"div",22),o.Nc(46),o.ic(47,"translate"),o.Wb(48,"i",23),o.dc("click",function(){return e.open("auth0","window")}),o.Vb(),o.Wb(49,"i",24),o.dc("click",function(){return e.open("github")}),o.Vb(),o.Wb(50,"i",25),o.dc("click",function(){return e.open("weibo","window")}),o.Vb(),o.Wb(51,"a",26),o.Nc(52),o.ic(53,"translate"),o.Vb(),o.Vb()),2&t){const t=o.zc(20);o.pc("formGroup",e.form),o.Cb(1),o.pc("nzAnimated",!1),o.Cb(1),o.pc("nzTitle",o.jc(3,21,"app.login.tab-login-credentials")),o.Cb(2),o.pc("ngIf",e.error),o.Cb(9),o.pc("nzTitle",o.jc(14,23,"app.login.tab-login-mobile")),o.Cb(3),o.pc("nzErrorTip",t),o.Cb(6),o.pc("nzErrorTip",o.jc(23,25,"validation.verification-code.required")),o.Cb(2),o.pc("nzGutter",8),o.Cb(1),o.pc("nzSpan",16),o.Cb(3),o.pc("nzSpan",8),o.Cb(1),o.pc("disabled",e.count>=0)("nzLoading",e.http.loading),o.Cb(1),o.Pc(" ",e.count?e.count+"s":o.jc(31,27,"app.register.get-verification-code")," "),o.Cb(3),o.pc("nzSpan",12),o.Cb(2),o.Oc(o.jc(36,29,"app.login.remember-me")),o.Cb(2),o.pc("nzSpan",12),o.Cb(2),o.Oc(o.jc(40,31,"app.login.forgot-password")),o.Cb(3),o.pc("nzLoading",e.http.loading),o.Cb(1),o.Pc(" ",o.jc(44,33,"app.login.login")," "),o.Cb(3),o.Pc(" ",o.jc(47,35,"app.login.sign-in-with")," "),o.Cb(6),o.Oc(o.jc(53,37,"app.login.signup"))}},directives:[l.w,l.p,b.b,l.i,y.b,y.a,S.o,u.c,b.c,u.a,b.a,d.a,m.c,m.b,l.d,l.o,l.h,g.a,h.a,k.a,W.d,P.a,s.n,T.a],pipes:[f.c],styles:["[_nghost-%COMP%]{display:block;width:368px;margin:0 auto}[_nghost-%COMP%]     .ant-tabs .ant-tabs-bar{margin-bottom:24px;text-align:center;border-bottom:0}[_nghost-%COMP%]     .ant-tabs-tab{font-size:16px;line-height:24px}[_nghost-%COMP%]     .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:4px}[_nghost-%COMP%]     .icon{margin-left:16px;color:rgba(0,0,0,.2);font-size:24px;vertical-align:middle;cursor:pointer;transition:color .3s}[_nghost-%COMP%]     .icon:hover{color:#1890ff}[_nghost-%COMP%]     .other{margin-top:24px;line-height:22px;text-align:left}[_nghost-%COMP%]     .other nz-tooltip{vertical-align:middle}[_nghost-%COMP%]     .other .register{float:right}[data-theme=dark]   [_nghost-%COMP%]     .icon{color:hsla(0,0%,100%,.2)}[data-theme=dark]   [_nghost-%COMP%]     .icon:hover{color:#fff}"]}),t})();var j=n("/XSn"),M=n("PFPK");function q(t,e){if(1&t&&(o.Wb(0,"div",4),o.Nc(1),o.ic(2,"translate"),o.Vb()),2&t){const t=o.hc();o.Cb(1),o.Pc(" ",o.kc(2,1,"app.register-result.msg",t.params)," ")}}let A=(()=>{class t{constructor(t,e){this.msg=e,this.params={email:""},this.email="",this.params.email=this.email=t.snapshot.queryParams.email||"ng-alain@example.com"}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(s.a),o.Qb(V.e))},t.\u0275cmp=o.Kb({type:t,selectors:[["passport-register-result"]],decls:10,vars:11,consts:[["type","success",3,"title","description"],["title",""],["nz-button","","nzSize","large",3,"nzType","click"],["routerLink","/","nz-button","","nzSize","large"],[1,"title",2,"font-size","20px"]],template:function(t,e){if(1&t&&(o.Wb(0,"result",0),o.ic(1,"translate"),o.Lc(2,q,3,4,"ng-template",null,1,o.Mc),o.Wb(4,"button",2),o.dc("click",function(){return e.msg.success("email")}),o.Nc(5),o.ic(6,"translate"),o.Vb(),o.Wb(7,"button",3),o.Nc(8),o.ic(9,"translate"),o.Vb(),o.Vb()),2&t){const t=o.zc(3);o.qc("description",o.jc(1,5,"app.register-result.activation-email")),o.pc("title",t),o.Cb(4),o.pc("nzType","primary"),o.Cb(1),o.Pc(" ",o.jc(6,7,"app.register-result.view-mailbox")," "),o.Cb(3),o.Pc(" ",o.jc(9,9,"app.register-result.back-home")," ")}},directives:[M.a,g.a,h.a,d.a,s.m],pipes:[f.c],encapsulation:2}),t})();var _=n("+oEP"),R=n("W9fG"),E=n("zAKX");function Q(t,e){if(1&t&&o.Rb(0,"nz-alert",23),2&t){const t=o.hc();o.pc("nzType","error")("nzMessage",t.error)("nzShowIcon",!0)}}function $(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.email.required")))}function U(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.email.wrong-format")))}function B(t,e){if(1&t&&(o.Lc(0,$,3,3,"ng-container",24),o.Lc(1,U,3,3,"ng-container",24)),2&t){const t=e.$implicit;o.pc("ngIf",null==t.errors?null:t.errors.required),o.Cb(1),o.pc("ngIf",null==t.errors?null:t.errors.email)}}function D(t,e){1&t&&(o.Wb(0,"div",32),o.Nc(1),o.ic(2,"translate"),o.Vb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.password.strength.strong")))}function G(t,e){1&t&&(o.Wb(0,"div",33),o.Nc(1),o.ic(2,"translate"),o.Vb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.password.strength.medium")))}function K(t,e){1&t&&(o.Wb(0,"div",34),o.Nc(1),o.ic(2,"translate"),o.Vb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.password.strength.short")))}function X(t,e){if(1&t&&(o.Wb(0,"div",25),o.Ub(1,26),o.Lc(2,D,3,3,"div",27),o.Lc(3,G,3,3,"div",28),o.Lc(4,K,3,3,"div",29),o.Tb(),o.Wb(5,"div"),o.Rb(6,"nz-progress",30),o.Vb(),o.Wb(7,"p",31),o.Nc(8),o.ic(9,"translate"),o.Vb(),o.Vb()),2&t){const t=o.hc();o.Cb(1),o.pc("ngSwitch",t.status),o.Cb(1),o.pc("ngSwitchCase","ok"),o.Cb(1),o.pc("ngSwitchCase","pass"),o.Cb(2),o.Fb("progress-",t.status,""),o.Cb(1),o.pc("nzPercent",t.progress)("nzStatus",t.passwordProgressMap[t.status])("nzStrokeWidth",6)("nzShowInfo",!1),o.Cb(2),o.Oc(o.jc(9,11,"validation.password.strength.msg"))}}function Y(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.confirm-password.required")))}function F(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.password.twice")))}function J(t,e){if(1&t&&(o.Lc(0,Y,3,3,"ng-container",24),o.Lc(1,F,3,3,"ng-container",24)),2&t){const t=e.$implicit;o.pc("ngIf",null==t.errors?null:t.errors.required),o.Cb(1),o.pc("ngIf",null==t.errors?null:t.errors.equar)}}function Z(t,e){1&t&&(o.Wb(0,"nz-select",35),o.Rb(1,"nz-option",36),o.Rb(2,"nz-option",36),o.Vb()),2&t&&(o.Cb(1),o.pc("nzLabel","+86")("nzValue","+86"),o.Cb(1),o.pc("nzLabel","+87")("nzValue","+87"))}function H(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.phone-number.required")))}function tt(t,e){1&t&&(o.Ub(0),o.Nc(1),o.ic(2,"translate"),o.Tb()),2&t&&(o.Cb(1),o.Oc(o.jc(2,1,"validation.phone-number.wrong-format")))}function et(t,e){if(1&t&&(o.Lc(0,H,3,3,"ng-container",24),o.Lc(1,tt,3,3,"ng-container",24)),2&t){const t=e.$implicit;o.pc("ngIf",null==t.errors?null:t.errors.required),o.Cb(1),o.pc("ngIf",null==t.errors?null:t.errors.pattern)}}const nt=function(){return{"width.px":240}},rt=[{path:"passport",component:j.a,children:[{path:"login",component:L,data:{title:"\u767b\u5f55",titleI18n:"app.login.login"}},{path:"register",component:(()=>{class t{constructor(e,n,r,i){this.router=n,this.http=r,this.msg=i,this.error="",this.type=0,this.visible=!1,this.status="pool",this.progress=0,this.passwordProgressMap={ok:"success",pass:"normal",pool:"exception"},this.count=0,this.form=e.group({mail:[null,[l.v.required,l.v.email]],password:[null,[l.v.required,l.v.minLength(6),t.checkPassword.bind(this)]],confirm:[null,[l.v.required,l.v.minLength(6),t.passwordEquar]],mobilePrefix:["+86"],mobile:[null,[l.v.required,l.v.pattern(/^1\d{10}$/)]],captcha:[null,[l.v.required]]})}get mail(){return this.form.controls.mail}get password(){return this.form.controls.password}get confirm(){return this.form.controls.confirm}get mobile(){return this.form.controls.mobile}get captcha(){return this.form.controls.captcha}static checkPassword(t){if(!t)return null;const e=this;e.visible=!!t.value,e.status=t.value&&t.value.length>9?"ok":t.value&&t.value.length>5?"pass":"pool",e.visible&&(e.progress=10*t.value.length>100?100:10*t.value.length)}static passwordEquar(t){return t&&t.parent&&t.value!==t.parent.get("password").value?{equar:!0}:null}getCaptcha(){if(this.mobile.invalid)return this.mobile.markAsDirty({onlySelf:!0}),void this.mobile.updateValueAndValidity({onlySelf:!0});this.count=59,this.interval$=setInterval(()=>{this.count-=1,this.count<=0&&clearInterval(this.interval$)},1e3)}submit(){if(this.error="",Object.keys(this.form.controls).forEach(t=>{this.form.controls[t].markAsDirty(),this.form.controls[t].updateValueAndValidity()}),this.form.invalid)return;const t=this.form.value;this.http.post("/register?_allow_anonymous=true",t).subscribe(()=>{this.router.navigate(["passport","register-result"],{queryParams:{email:t.mail}})})}ngOnDestroy(){this.interval$&&clearInterval(this.interval$)}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(l.f),o.Qb(s.l),o.Qb(a.q),o.Qb(V.e))},t.\u0275cmp=o.Kb({type:t,selectors:[["passport-register"]],decls:50,vars:34,consts:[["nz-form","","role","form",3,"formGroup","ngSubmit"],["class","mb-lg",3,"nzType","nzMessage","nzShowIcon",4,"ngIf"],[3,"nzErrorTip"],["nzSize","large","nzAddonBeforeIcon","user"],["nz-input","","formControlName","mail","placeholder","Email"],["mailErrorTip",""],["nzSize","large","nzAddonBeforeIcon","lock","nz-popover","","nzPopoverPlacement","right","nzPopoverTrigger","focus","nzPopoverOverlayClassName","register-password-cdk",3,"nzPopoverVisible","nzPopoverOverlayStyle","nzPopoverContent","nzPopoverVisibleChange"],["nz-input","","type","password","formControlName","password","placeholder","Password"],["pwdCdkTpl",""],["nzSize","large","nzAddonBeforeIcon","lock"],["nz-input","","type","password","formControlName","confirm","placeholder","Confirm Password"],["confirmErrorTip",""],["nzSize","large",3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","mobile","nz-input","","placeholder","Phone number"],["mobileErrorTip",""],[3,"nzGutter"],[3,"nzSpan"],["nzSize","large","nzAddonBeforeIcon","mail"],["nz-input","","formControlName","captcha","placeholder","Captcha"],["type","button","nz-button","","nzSize","large","nzBlock","",3,"disabled","nzLoading","click"],["nz-button","","nzType","primary","nzSize","large","type","submit",1,"submit",3,"nzLoading"],["routerLink","/passport/login",1,"login"],[1,"mb-lg",3,"nzType","nzMessage","nzShowIcon"],[4,"ngIf"],[2,"padding","4px 0"],[3,"ngSwitch"],["class","success",4,"ngSwitchCase"],["class","warning",4,"ngSwitchCase"],["class","error",4,"ngSwitchDefault"],[3,"nzPercent","nzStatus","nzStrokeWidth","nzShowInfo"],[1,"mt-sm"],[1,"success"],[1,"warning"],[1,"error"],["formControlName","mobilePrefix",2,"width","100px"],[3,"nzLabel","nzValue"]],template:function(t,e){if(1&t&&(o.Wb(0,"h3"),o.Nc(1),o.ic(2,"translate"),o.Vb(),o.Wb(3,"form",0),o.dc("ngSubmit",function(){return e.submit()}),o.Lc(4,Q,1,3,"nz-alert",1),o.Wb(5,"nz-form-item"),o.Wb(6,"nz-form-control",2),o.Wb(7,"nz-input-group",3),o.Rb(8,"input",4),o.Vb(),o.Lc(9,B,2,2,"ng-template",null,5,o.Mc),o.Vb(),o.Vb(),o.Wb(11,"nz-form-item"),o.Wb(12,"nz-form-control",2),o.ic(13,"translate"),o.Wb(14,"nz-input-group",6),o.dc("nzPopoverVisibleChange",function(t){return e.visible=t}),o.Rb(15,"input",7),o.Vb(),o.Lc(16,X,10,13,"ng-template",null,8,o.Mc),o.Vb(),o.Vb(),o.Wb(18,"nz-form-item"),o.Wb(19,"nz-form-control",2),o.Wb(20,"nz-input-group",9),o.Rb(21,"input",10),o.Vb(),o.Lc(22,J,2,2,"ng-template",null,11,o.Mc),o.Vb(),o.Vb(),o.Wb(24,"nz-form-item"),o.Wb(25,"nz-form-control",2),o.Wb(26,"nz-input-group",12),o.Lc(27,Z,3,4,"ng-template",null,13,o.Mc),o.Rb(29,"input",14),o.Vb(),o.Lc(30,et,2,2,"ng-template",null,15,o.Mc),o.Vb(),o.Vb(),o.Wb(32,"nz-form-item"),o.Wb(33,"nz-form-control",2),o.ic(34,"translate"),o.Wb(35,"nz-row",16),o.Wb(36,"nz-col",17),o.Wb(37,"nz-input-group",18),o.Rb(38,"input",19),o.Vb(),o.Vb(),o.Wb(39,"nz-col",17),o.Wb(40,"button",20),o.dc("click",function(){return e.getCaptcha()}),o.Nc(41),o.ic(42,"translate"),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Vb(),o.Wb(43,"nz-form-item"),o.Wb(44,"button",21),o.Nc(45),o.ic(46,"translate"),o.Vb(),o.Wb(47,"a",22),o.Nc(48),o.ic(49,"translate"),o.Vb(),o.Vb(),o.Vb()),2&t){const t=o.zc(10),n=o.zc(17),r=o.zc(23),i=o.zc(28),a=o.zc(31);o.Cb(1),o.Oc(o.jc(2,21,"app.register.register")),o.Cb(2),o.pc("formGroup",e.form),o.Cb(1),o.pc("ngIf",e.error),o.Cb(2),o.pc("nzErrorTip",t),o.Cb(6),o.pc("nzErrorTip",o.jc(13,23,"validation.password.required")),o.Cb(2),o.pc("nzPopoverVisible",e.visible)("nzPopoverOverlayStyle",o.sc(33,nt))("nzPopoverContent",n),o.Cb(5),o.pc("nzErrorTip",r),o.Cb(6),o.pc("nzErrorTip",a),o.Cb(1),o.pc("nzAddOnBefore",i),o.Cb(7),o.pc("nzErrorTip",o.jc(34,25,"validation.verification-code.required")),o.Cb(2),o.pc("nzGutter",8),o.Cb(1),o.pc("nzSpan",16),o.Cb(3),o.pc("nzSpan",8),o.Cb(1),o.pc("disabled",e.count>0)("nzLoading",e.http.loading),o.Cb(1),o.Pc(" ",e.count?e.count+"s":o.jc(42,27,"app.register.get-verification-code")," "),o.Cb(3),o.pc("nzLoading",e.http.loading),o.Cb(1),o.Pc(" ",o.jc(46,29,"app.register.register")," "),o.Cb(3),o.Oc(o.jc(49,31,"app.register.sign-in"))}},directives:[l.w,l.p,b.b,l.i,S.o,u.c,b.c,u.a,b.a,d.a,m.c,m.b,l.d,l.o,l.h,_.a,g.a,h.a,s.n,T.a,S.q,S.r,S.s,R.a,E.e,E.a],pipes:[f.c],styles:["[_nghost-%COMP%]{display:block;width:368px;margin:0 auto}[_nghost-%COMP%]     h3{margin-bottom:20px;font-size:16px}[_nghost-%COMP%]     .submit{width:50%}[_nghost-%COMP%]     .login{float:right;line-height:40px}  .register-password-cdk .error,   .register-password-cdk .success,   .register-password-cdk .warning{transition:color .3s}  .register-password-cdk .success{color:#52c41a}  .register-password-cdk .warning{color:#faad14}  .register-password-cdk .error{color:#ff4d4f}  .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"]}),t})(),data:{title:"\u6ce8\u518c",titleI18n:"app.register.register"}},{path:"register-result",component:A,data:{title:"\u6ce8\u518c\u7ed3\u679c",titleI18n:"app.register.register"}},{path:"lock",component:z,data:{title:"\u9501\u5c4f",titleI18n:"app.lock"}}]},{path:"passport/callback/:type",component:c}];let it=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({imports:[[s.o.forChild(rt)],s.o]}),t})(),ot=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({imports:[[r.b,it]]}),t})()}}]);