"use strict";(self.webpackChunkng_alain=self.webpackChunkng_alain||[]).push([[307],{4307:(zt,A,s)=>{s.r(A),s.d(A,{PassportModule:()=>dt});var L=s(1547),u=s(6406),t=s(7716),c=s(922),p=s(3423);let b=(()=>{class e{constructor(n,o,a){this.socialService=n,this.settingsSrv=o,this.route=a,this.type=""}ngOnInit(){this.type=this.route.snapshot.params.type,this.mockModel()}mockModel(){const n={token:"123456789",name:"cipchk",email:`${this.type}@${this.type}.com`,id:1e4,time:+new Date};this.settingsSrv.setUser(Object.assign(Object.assign({},this.settingsSrv.user),n)),this.socialService.callback(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.VK),t.Y36(c.gb),t.Y36(p.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-callback"]],features:[t._Bn([u.VK])],decls:0,vars:0,template:function(n,o){},encapsulation:2}),e})();var i=s(665),J=s(5329),g=s(5887),m=s(6704),z=s(4514),d=s(7674),Z=s(4453),_=s(9374);let x=(()=>{class e{constructor(n,o,a,l){this.tokenService=o,this.settings=a,this.router=l,this.f=n.group({password:[null,i.kI.required]})}get user(){return this.settings.user}submit(){for(const n in this.f.controls)this.f.controls[n].markAsDirty(),this.f.controls[n].updateValueAndValidity();this.f.valid&&(console.log("Valid!"),console.log(this.f.value),this.tokenService.set({token:"123"}),this.router.navigate(["dashboard"]))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(u.T),t.Y36(c.gb),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["passport-lock"]],decls:15,vars:11,consts:[[1,"ant-card","width-lg",2,"margin","0 auto"],[1,"ant-card-body"],[1,"avatar"],["nzIcon","user","nzSize","large",3,"nzSrc"],["nz-form","","role","form",1,"mt-md",3,"formGroup","ngSubmit"],[3,"nzErrorTip"],["nzSuffixIcon","lock"],["type","password","nz-input","","formControlName","password"],["nzType","flex","nzAlign","middle"],[2,"text-align","right",3,"nzOffset","nzSpan"],["nz-button","","nzType","primary",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"nz-avatar",3),t.qZA(),t.TgZ(4,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(5,"nz-form-item"),t.TgZ(6,"nz-form-control",5),t.ALo(7,"i18n"),t.TgZ(8,"nz-input-group",6),t._UZ(9,"input",7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"nz-row",8),t.TgZ(11,"nz-col",9),t.TgZ(12,"button",10),t._uU(13),t.ALo(14,"i18n"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("nzSrc",o.user.avatar),t.xp6(1),t.Q6J("formGroup",o.f),t.xp6(2),t.Q6J("nzErrorTip",t.lcZ(7,7,"validation.password.required")),t.xp6(5),t.Q6J("nzOffset",12)("nzSpan",12),t.xp6(1),t.Q6J("disabled",!o.f.valid),t.xp6(1),t.Oqu(t.lcZ(14,9,"app.lock")))},directives:[J.Dz,i._Y,i.JL,g.Lr,i.sg,m.SK,g.Nx,m.t3,g.Fd,z.w,d.gB,d.Zp,i.Fj,i.JJ,i.u,Z.ix,_.dQ],pipes:[c.w5],styles:["[_nghost-%COMP%]     .ant-card-body{position:relative;margin-top:80px}[_nghost-%COMP%]     .avatar{position:absolute;top:-20px;left:50%;margin-left:-20px}"]}),e})();var I=s(7048),Q=s(7499),C=s(8939),N=s(3805),y=s(4828),f=s(8583),O=s(2079),P=s(7420),Y=s(464),w=s(480);function M(e,r){if(1&e&&t._UZ(0,"nz-alert",27),2&e){const n=t.oxw();t.Q6J("nzType","error")("nzMessage",n.error)("nzShowIcon",!0)}}function R(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validation.phone-number.required")," "))}function B(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"validation.phone-number.wrong-format")," "))}function V(e,r){if(1&e&&(t.YNc(0,R,3,3,"ng-container",28),t.YNc(1,B,3,3,"ng-container",28)),2&e){const n=r.$implicit;t.Q6J("ngIf",n.errors.required),t.xp6(1),t.Q6J("ngIf",n.errors.pattern)}}let q=(()=>{class e{constructor(n,o,a,l,h,v,T,ht,ft){this.router=o,this.settingsService=a,this.socialService=l,this.reuseTabService=h,this.tokenService=v,this.startupSrv=T,this.http=ht,this.cdr=ft,this.error="",this.type=0,this.loading=!1,this.count=0,this.form=n.group({userName:[null,[i.kI.required,i.kI.pattern(/^(admin|user)$/)]],password:[null,[i.kI.required,i.kI.pattern(/^(ng\-alain\.com)$/)]],mobile:[null,[i.kI.required,i.kI.pattern(/^1\d{10}$/)]],captcha:[null,[i.kI.required]],remember:[!0]})}get userName(){return this.form.controls.userName}get password(){return this.form.controls.password}get mobile(){return this.form.controls.mobile}get captcha(){return this.form.controls.captcha}switch({index:n}){this.type=n}getCaptcha(){if(this.mobile.invalid)return this.mobile.markAsDirty({onlySelf:!0}),void this.mobile.updateValueAndValidity({onlySelf:!0});this.count=59,this.interval$=setInterval(()=>{this.count-=1,this.count<=0&&clearInterval(this.interval$)},1e3)}submit(){if(this.error="",0===this.type){if(this.userName.markAsDirty(),this.userName.updateValueAndValidity(),this.password.markAsDirty(),this.password.updateValueAndValidity(),this.userName.invalid||this.password.invalid)return}else if(this.mobile.markAsDirty(),this.mobile.updateValueAndValidity(),this.captcha.markAsDirty(),this.captcha.updateValueAndValidity(),this.mobile.invalid||this.captcha.invalid)return;this.loading=!0,this.cdr.detectChanges(),this.http.post("/login/account?_allow_anonymous=true",{type:this.type,userName:this.userName.value,password:this.password.value}).pipe((0,C.x)(()=>{this.loading=!0,this.cdr.detectChanges()})).subscribe(n=>{if("ok"!==n.msg)return this.error=n.msg,void this.cdr.detectChanges();this.reuseTabService.clear(),n.user.expired=+new Date+3e5,this.tokenService.set(n.user),this.startupSrv.load().subscribe(()=>{let o=this.tokenService.referrer.url||"/";o.includes("/passport")&&(o="/"),this.router.navigateByUrl(o)})})}open(n,o="href"){let a="",l="";switch(l=Q.N.production?`https://ng-alain.github.io/ng-alain/#/passport/callback/${n}`:`http://localhost:4200/#/passport/callback/${n}`,n){case"auth0":a=`//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=${decodeURIComponent(l)}`;break;case"github":a=`//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=${decodeURIComponent(l)}`;break;case"weibo":a=`https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=${decodeURIComponent(l)}`}"window"===o?this.socialService.login(a,"/",{type:"window"}).subscribe(h=>{h&&(this.settingsService.setUser(h),this.router.navigateByUrl("/"))}):this.socialService.login(a,"/",{type:"href"})}ngOnDestroy(){this.interval$&&clearInterval(this.interval$)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(p.F0),t.Y36(c.gb),t.Y36(u.VK),t.Y36(I.Wu,8),t.Y36(u.T),t.Y36(N.HS),t.Y36(c.lP),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["passport-login"]],features:[t._Bn([u.VK])],decls:54,vars:39,consts:[["nz-form","","role","form",3,"formGroup","ngSubmit"],[1,"tabs",3,"nzAnimated","nzSelectChange"],[3,"nzTitle"],["class","mb-lg",3,"nzType","nzMessage","nzShowIcon",4,"ngIf"],["nzErrorTip","Please enter mobile number, muse be: admin or user"],["nzSize","large","nzPrefixIcon","user"],["nz-input","","formControlName","userName","placeholder","username: admin or user"],["nzErrorTip","Please enter password, muse be: ng-alain.com"],["nzSize","large","nzPrefixIcon","lock"],["nz-input","","type","password","formControlName","password","placeholder","password: ng-alain.com"],[3,"nzErrorTip"],["nz-input","","formControlName","mobile","placeholder","mobile number"],["mobileErrorTip",""],[3,"nzGutter"],[3,"nzSpan"],["nzSize","large","nzPrefixIcon","mail"],["nz-input","","formControlName","captcha","placeholder","captcha"],["type","button","nz-button","","nzSize","large","nzBlock","",3,"disabled","nzLoading","click"],["nz-checkbox","","formControlName","remember"],[1,"text-right",3,"nzSpan"],["routerLink","/passport/register",1,"forgot"],["nz-button","","type","submit","nzType","primary","nzSize","large","nzBlock","",3,"nzLoading"],[1,"other"],["nz-tooltip","","nzTooltipTitle","in fact Auth0 via window","nz-icon","","nzType","alipay-circle",1,"icon",3,"click"],["nz-tooltip","","nzTooltipTitle","in fact Github via redirect","nz-icon","","nzType","taobao-circle",1,"icon",3,"click"],["nz-icon","","nzType","weibo-circle",1,"icon",3,"click"],["routerLink","/passport/register",1,"register"],[1,"mb-lg",3,"nzType","nzMessage","nzShowIcon"],[4,"ngIf"]],template:function(n,o){if(1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"nz-tabset",1),t.NdJ("nzSelectChange",function(l){return o.switch(l)}),t.TgZ(2,"nz-tab",2),t.ALo(3,"i18n"),t.YNc(4,M,1,3,"nz-alert",3),t.TgZ(5,"nz-form-item"),t.TgZ(6,"nz-form-control",4),t.TgZ(7,"nz-input-group",5),t._UZ(8,"input",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"nz-form-item"),t.TgZ(10,"nz-form-control",7),t.TgZ(11,"nz-input-group",8),t._UZ(12,"input",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"nz-tab",2),t.ALo(14,"i18n"),t.TgZ(15,"nz-form-item"),t.TgZ(16,"nz-form-control",10),t.TgZ(17,"nz-input-group",5),t._UZ(18,"input",11),t.qZA(),t.YNc(19,V,2,2,"ng-template",null,12,t.W1O),t.qZA(),t.qZA(),t.TgZ(21,"nz-form-item"),t.TgZ(22,"nz-form-control",10),t.ALo(23,"i18n"),t.TgZ(24,"nz-row",13),t.TgZ(25,"nz-col",14),t.TgZ(26,"nz-input-group",15),t._UZ(27,"input",16),t.qZA(),t.qZA(),t.TgZ(28,"nz-col",14),t.TgZ(29,"button",17),t.NdJ("click",function(){return o.getCaptcha()}),t._uU(30),t.ALo(31,"i18n"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"nz-form-item"),t.TgZ(33,"nz-col",14),t.TgZ(34,"label",18),t._uU(35),t.ALo(36,"i18n"),t.qZA(),t.qZA(),t.TgZ(37,"nz-col",19),t.TgZ(38,"a",20),t._uU(39),t.ALo(40,"i18n"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"nz-form-item"),t.TgZ(42,"button",21),t._uU(43),t.ALo(44,"i18n"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(45,"div",22),t._uU(46),t.ALo(47,"i18n"),t.TgZ(48,"i",23),t.NdJ("click",function(){return o.open("auth0","window")}),t.qZA(),t.TgZ(49,"i",24),t.NdJ("click",function(){return o.open("github")}),t.qZA(),t.TgZ(50,"i",25),t.NdJ("click",function(){return o.open("weibo","window")}),t.qZA(),t.TgZ(51,"a",26),t._uU(52),t.ALo(53,"i18n"),t.qZA(),t.qZA()),2&n){const a=t.MAs(20);t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("nzAnimated",!1),t.xp6(1),t.Q6J("nzTitle",t.lcZ(3,21,"app.login.tab-login-credentials")),t.xp6(2),t.Q6J("ngIf",o.error),t.xp6(9),t.Q6J("nzTitle",t.lcZ(14,23,"app.login.tab-login-mobile")),t.xp6(3),t.Q6J("nzErrorTip",a),t.xp6(6),t.Q6J("nzErrorTip",t.lcZ(23,25,"validation.verification-code.required")),t.xp6(2),t.Q6J("nzGutter",8),t.xp6(1),t.Q6J("nzSpan",16),t.xp6(3),t.Q6J("nzSpan",8),t.xp6(1),t.Q6J("disabled",o.count>=0)("nzLoading",o.loading),t.xp6(1),t.hij(" ",o.count?o.count+"s":t.lcZ(31,27,"app.register.get-verification-code")," "),t.xp6(3),t.Q6J("nzSpan",12),t.xp6(2),t.Oqu(t.lcZ(36,29,"app.login.remember-me")),t.xp6(2),t.Q6J("nzSpan",12),t.xp6(2),t.Oqu(t.lcZ(40,31,"app.login.forgot-password")),t.xp6(3),t.Q6J("nzLoading",o.loading),t.xp6(1),t.hij(" ",t.lcZ(44,33,"app.login.login")," "),t.xp6(3),t.hij(" ",t.lcZ(47,35,"app.login.sign-in-with")," "),t.xp6(6),t.Oqu(t.lcZ(53,37,"app.login.signup"))}},directives:[i._Y,i.JL,g.Lr,i.sg,y.xH,y.xw,f.O5,m.SK,g.Nx,m.t3,g.Fd,z.w,d.gB,d.Zp,i.Fj,i.JJ,i.u,Z.ix,_.dQ,O.Ie,p.yS,P.SY,Y.Ls,w.r],pipes:[c.w5],styles:["[_nghost-%COMP%]{display:block;width:368px;margin:0 auto}[_nghost-%COMP%]     .ant-tabs .ant-tabs-bar{margin-bottom:24px;text-align:center;border-bottom:0}[_nghost-%COMP%]     .ant-tabs-tab{font-size:16px;line-height:24px}[_nghost-%COMP%]     .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:4px}[_nghost-%COMP%]     .icon{margin-left:16px;color:#0003;font-size:24px;vertical-align:middle;cursor:pointer;transition:color .3s}[_nghost-%COMP%]     .icon:hover{color:#1890ff}[_nghost-%COMP%]     .other{margin-top:24px;line-height:22px;text-align:left}[_nghost-%COMP%]     .other nz-tooltip{vertical-align:middle}[_nghost-%COMP%]     .other .register{float:right}[data-theme=dark]   [_nghost-%COMP%]     .icon{color:#fff3}[data-theme=dark]   [_nghost-%COMP%]     .icon:hover{color:#fff}"],changeDetection:0}),e})();var E=s(6260),$=s(8058),D=s(3797);function j(e,r){if(1&e&&(t.TgZ(0,"div",4),t._uU(1),t.ALo(2,"i18n"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,"app.register-result.msg",n.params)," ")}}let k=(()=>{class e{constructor(n,o){this.msg=o,this.params={email:""},this.email="",this.params.email=this.email=n.snapshot.queryParams.email||"ng-alain@example.com"}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.gz),t.Y36($.dD))},e.\u0275cmp=t.Xpm({type:e,selectors:[["passport-register-result"]],decls:10,vars:11,consts:[["type","success",3,"title","description"],["title",""],["nz-button","","nzSize","large",3,"nzType","click"],["routerLink","/","nz-button","","nzSize","large"],[1,"title",2,"font-size","20px"]],template:function(n,o){if(1&n&&(t.TgZ(0,"result",0),t.ALo(1,"i18n"),t.YNc(2,j,3,4,"ng-template",null,1,t.W1O),t.TgZ(4,"button",2),t.NdJ("click",function(){return o.msg.success("email")}),t._uU(5),t.ALo(6,"i18n"),t.qZA(),t.TgZ(7,"button",3),t._uU(8),t.ALo(9,"i18n"),t.qZA(),t.qZA()),2&n){const a=t.MAs(3);t.s9C("description",t.lcZ(1,5,"app.register-result.activation-email")),t.Q6J("title",a),t.xp6(4),t.Q6J("nzType","primary"),t.xp6(1),t.hij(" ",t.lcZ(6,7,"app.register-result.view-mailbox")," "),t.xp6(3),t.hij(" ",t.lcZ(9,9,"app.register-result.back-home")," ")}},directives:[D.N,Z.ix,_.dQ,z.w,p.rH],pipes:[c.w5],encapsulation:2}),e})();var F=s(8381),G=s(2281),S=s(269);function W(e,r){if(1&e&&t._UZ(0,"nz-alert",23),2&e){const n=t.oxw();t.Q6J("nzType","error")("nzMessage",n.error)("nzShowIcon",!0)}}function K(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.email.required")))}function X(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.email.wrong-format")))}function H(e,r){if(1&e&&(t.YNc(0,K,3,3,"ng-container",24),t.YNc(1,X,3,3,"ng-container",24)),2&e){const n=r.$implicit;t.Q6J("ngIf",null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.email)}}function tt(e,r){1&e&&(t.TgZ(0,"div",32),t._uU(1),t.ALo(2,"i18n"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.password.strength.strong")))}function et(e,r){1&e&&(t.TgZ(0,"div",33),t._uU(1),t.ALo(2,"i18n"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.password.strength.medium")))}function nt(e,r){1&e&&(t.TgZ(0,"div",34),t._uU(1),t.ALo(2,"i18n"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.password.strength.short")))}function ot(e,r){if(1&e&&(t.TgZ(0,"div",25),t.ynx(1,26),t.YNc(2,tt,3,3,"div",27),t.YNc(3,et,3,3,"div",28),t.YNc(4,nt,3,3,"div",29),t.BQk(),t.TgZ(5,"div"),t._UZ(6,"nz-progress",30),t.qZA(),t.TgZ(7,"p",31),t._uU(8),t.ALo(9,"i18n"),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngSwitch",n.status),t.xp6(1),t.Q6J("ngSwitchCase","ok"),t.xp6(1),t.Q6J("ngSwitchCase","pass"),t.xp6(2),t.Gre("progress-",n.status,""),t.xp6(1),t.Q6J("nzPercent",n.progress)("nzStatus",n.passwordProgressMap[n.status])("nzStrokeWidth",6)("nzShowInfo",!1),t.xp6(2),t.Oqu(t.lcZ(9,11,"validation.password.strength.msg"))}}function rt(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.confirm-password.required")))}function it(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.password.twice")))}function st(e,r){if(1&e&&(t.YNc(0,rt,3,3,"ng-container",24),t.YNc(1,it,3,3,"ng-container",24)),2&e){const n=r.$implicit;t.Q6J("ngIf",null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.equar)}}function at(e,r){1&e&&(t.TgZ(0,"nz-select",35),t._UZ(1,"nz-option",36),t._UZ(2,"nz-option",36),t.qZA()),2&e&&(t.xp6(1),t.Q6J("nzLabel","+86")("nzValue","+86"),t.xp6(1),t.Q6J("nzLabel","+87")("nzValue","+87"))}function lt(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.phone-number.required")))}function pt(e,r){1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18n"),t.BQk()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"validation.phone-number.wrong-format")))}function ct(e,r){if(1&e&&(t.YNc(0,lt,3,3,"ng-container",24),t.YNc(1,pt,3,3,"ng-container",24)),2&e){const n=r.$implicit;t.Q6J("ngIf",null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==n.errors?null:n.errors.pattern)}}const gt=function(){return{"width.px":240}};const ut=[{path:"passport",component:E.W,children:[{path:"login",component:q,data:{title:"\u767b\u5f55",titleI18n:"app.login.login"}},{path:"register",component:(()=>{class e{constructor(n,o,a,l){this.router=o,this.http=a,this.cdr=l,this.error="",this.type=0,this.loading=!1,this.visible=!1,this.status="pool",this.progress=0,this.passwordProgressMap={ok:"success",pass:"normal",pool:"exception"},this.count=0,this.form=n.group({mail:[null,[i.kI.required,i.kI.email]],password:[null,[i.kI.required,i.kI.minLength(6),e.checkPassword.bind(this)]],confirm:[null,[i.kI.required,i.kI.minLength(6),e.passwordEquar]],mobilePrefix:["+86"],mobile:[null,[i.kI.required,i.kI.pattern(/^1\d{10}$/)]],captcha:[null,[i.kI.required]]})}get mail(){return this.form.controls.mail}get password(){return this.form.controls.password}get confirm(){return this.form.controls.confirm}get mobile(){return this.form.controls.mobile}get captcha(){return this.form.controls.captcha}static checkPassword(n){if(!n)return null;const o=this;o.visible=!!n.value,o.status=n.value&&n.value.length>9?"ok":n.value&&n.value.length>5?"pass":"pool",o.visible&&(o.progress=10*n.value.length>100?100:10*n.value.length)}static passwordEquar(n){return n&&n.parent&&n.value!==n.parent.get("password").value?{equar:!0}:null}getCaptcha(){if(this.mobile.invalid)return this.mobile.markAsDirty({onlySelf:!0}),void this.mobile.updateValueAndValidity({onlySelf:!0});this.count=59,this.cdr.detectChanges(),this.interval$=setInterval(()=>{this.count-=1,this.cdr.detectChanges(),this.count<=0&&clearInterval(this.interval$)},1e3)}submit(){if(this.error="",Object.keys(this.form.controls).forEach(o=>{this.form.controls[o].markAsDirty(),this.form.controls[o].updateValueAndValidity()}),this.form.invalid)return;const n=this.form.value;this.loading=!0,this.cdr.detectChanges(),this.http.post("/register?_allow_anonymous=true",n).pipe((0,C.x)(()=>{this.loading=!1,this.cdr.detectChanges()})).subscribe(()=>{this.router.navigate(["passport","register-result"],{queryParams:{email:n.mail}})})}ngOnDestroy(){this.interval$&&clearInterval(this.interval$)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(p.F0),t.Y36(c.lP),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["passport-register"]],decls:50,vars:34,consts:[["nz-form","","role","form",3,"formGroup","ngSubmit"],["class","mb-lg",3,"nzType","nzMessage","nzShowIcon",4,"ngIf"],[3,"nzErrorTip"],["nzSize","large","nzAddonBeforeIcon","user"],["nz-input","","formControlName","mail","placeholder","Email"],["mailErrorTip",""],["nzSize","large","nzAddonBeforeIcon","lock","nz-popover","","nzPopoverPlacement","right","nzPopoverTrigger","focus","nzPopoverOverlayClassName","register-password-cdk",3,"nzPopoverVisible","nzPopoverOverlayStyle","nzPopoverContent","nzPopoverVisibleChange"],["nz-input","","type","password","formControlName","password","placeholder","Password"],["pwdCdkTpl",""],["nzSize","large","nzAddonBeforeIcon","lock"],["nz-input","","type","password","formControlName","confirm","placeholder","Confirm Password"],["confirmErrorTip",""],["nzSize","large",3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","mobile","nz-input","","placeholder","Phone number"],["mobileErrorTip",""],[3,"nzGutter"],[3,"nzSpan"],["nzSize","large","nzAddonBeforeIcon","mail"],["nz-input","","formControlName","captcha","placeholder","Captcha"],["type","button","nz-button","","nzSize","large","nzBlock","",3,"disabled","nzLoading","click"],["nz-button","","nzType","primary","nzSize","large","type","submit",1,"submit",3,"nzLoading"],["routerLink","/passport/login",1,"login"],[1,"mb-lg",3,"nzType","nzMessage","nzShowIcon"],[4,"ngIf"],[2,"padding","4px 0"],[3,"ngSwitch"],["class","success",4,"ngSwitchCase"],["class","warning",4,"ngSwitchCase"],["class","error",4,"ngSwitchDefault"],[3,"nzPercent","nzStatus","nzStrokeWidth","nzShowInfo"],[1,"mt-sm"],[1,"success"],[1,"warning"],[1,"error"],["formControlName","mobilePrefix",2,"width","100px"],[3,"nzLabel","nzValue"]],template:function(n,o){if(1&n&&(t.TgZ(0,"h3"),t._uU(1),t.ALo(2,"i18n"),t.qZA(),t.TgZ(3,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.YNc(4,W,1,3,"nz-alert",1),t.TgZ(5,"nz-form-item"),t.TgZ(6,"nz-form-control",2),t.TgZ(7,"nz-input-group",3),t._UZ(8,"input",4),t.qZA(),t.YNc(9,H,2,2,"ng-template",null,5,t.W1O),t.qZA(),t.qZA(),t.TgZ(11,"nz-form-item"),t.TgZ(12,"nz-form-control",2),t.ALo(13,"i18n"),t.TgZ(14,"nz-input-group",6),t.NdJ("nzPopoverVisibleChange",function(l){return o.visible=l}),t._UZ(15,"input",7),t.qZA(),t.YNc(16,ot,10,13,"ng-template",null,8,t.W1O),t.qZA(),t.qZA(),t.TgZ(18,"nz-form-item"),t.TgZ(19,"nz-form-control",2),t.TgZ(20,"nz-input-group",9),t._UZ(21,"input",10),t.qZA(),t.YNc(22,st,2,2,"ng-template",null,11,t.W1O),t.qZA(),t.qZA(),t.TgZ(24,"nz-form-item"),t.TgZ(25,"nz-form-control",2),t.TgZ(26,"nz-input-group",12),t.YNc(27,at,3,4,"ng-template",null,13,t.W1O),t._UZ(29,"input",14),t.qZA(),t.YNc(30,ct,2,2,"ng-template",null,15,t.W1O),t.qZA(),t.qZA(),t.TgZ(32,"nz-form-item"),t.TgZ(33,"nz-form-control",2),t.ALo(34,"i18n"),t.TgZ(35,"nz-row",16),t.TgZ(36,"nz-col",17),t.TgZ(37,"nz-input-group",18),t._UZ(38,"input",19),t.qZA(),t.qZA(),t.TgZ(39,"nz-col",17),t.TgZ(40,"button",20),t.NdJ("click",function(){return o.getCaptcha()}),t._uU(41),t.ALo(42,"i18n"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"nz-form-item"),t.TgZ(44,"button",21),t._uU(45),t.ALo(46,"i18n"),t.qZA(),t.TgZ(47,"a",22),t._uU(48),t.ALo(49,"i18n"),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.MAs(10),l=t.MAs(17),h=t.MAs(23),v=t.MAs(28),T=t.MAs(31);t.xp6(1),t.Oqu(t.lcZ(2,21,"app.register.register")),t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("ngIf",o.error),t.xp6(2),t.Q6J("nzErrorTip",a),t.xp6(6),t.Q6J("nzErrorTip",t.lcZ(13,23,"validation.password.required")),t.xp6(2),t.Q6J("nzPopoverVisible",o.visible)("nzPopoverOverlayStyle",t.DdM(33,gt))("nzPopoverContent",l),t.xp6(5),t.Q6J("nzErrorTip",h),t.xp6(6),t.Q6J("nzErrorTip",T),t.xp6(1),t.Q6J("nzAddOnBefore",v),t.xp6(7),t.Q6J("nzErrorTip",t.lcZ(34,25,"validation.verification-code.required")),t.xp6(2),t.Q6J("nzGutter",8),t.xp6(1),t.Q6J("nzSpan",16),t.xp6(3),t.Q6J("nzSpan",8),t.xp6(1),t.Q6J("disabled",o.count>0)("nzLoading",o.loading),t.xp6(1),t.hij(" ",o.count?o.count+"s":t.lcZ(42,27,"app.register.get-verification-code")," "),t.xp6(3),t.Q6J("nzLoading",o.loading),t.xp6(1),t.hij(" ",t.lcZ(46,29,"app.register.register")," "),t.xp6(3),t.Oqu(t.lcZ(49,31,"app.register.sign-in"))}},directives:[i._Y,i.JL,g.Lr,i.sg,f.O5,m.SK,g.Nx,m.t3,g.Fd,z.w,d.gB,d.Zp,i.Fj,i.JJ,i.u,F.lU,Z.ix,_.dQ,p.yS,w.r,f.RF,f.n9,f.ED,G.M,S.Vq,S.Ip],pipes:[c.w5],styles:["[_nghost-%COMP%]{display:block;width:368px;margin:0 auto}[_nghost-%COMP%]     h3{margin-bottom:20px;font-size:16px}[_nghost-%COMP%]     .submit{width:50%}[_nghost-%COMP%]     .login{float:right;line-height:40px}  .register-password-cdk .success,   .register-password-cdk .warning,   .register-password-cdk .error{transition:color .3s}  .register-password-cdk .success{color:#52c41a}  .register-password-cdk .warning{color:#faad14}  .register-password-cdk .error{color:#ff4d4f}  .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"],changeDetection:0}),e})(),data:{title:"\u6ce8\u518c",titleI18n:"app.register.register"}},{path:"register-result",component:k,data:{title:"\u6ce8\u518c\u7ed3\u679c",titleI18n:"app.register.register"}},{path:"lock",component:x,data:{title:"\u9501\u5c4f",titleI18n:"app.lock"}}]},{path:"passport/callback/:type",component:b}];let mt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(ut)],p.Bz]}),e})(),dt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[L.m8,mt]]}),e})()}}]);