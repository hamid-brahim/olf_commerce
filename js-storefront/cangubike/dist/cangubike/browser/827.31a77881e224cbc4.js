"use strict";(self.webpackChunkcangubike=self.webpackChunkcangubike||[]).push([[827],{9827:(de,Y,s)=>{s.r(Y),s.d(Y,{ApproverGuard:()=>D,ORDER_APPROVALS_NORMALIZER:()=>Q,ORDER_APPROVAL_DECISION_NORMALIZER:()=>$,ORDER_APPROVAL_ENTITIES:()=>T,ORDER_APPROVAL_FEATURE:()=>M,ORDER_APPROVAL_LIST:()=>C,ORDER_APPROVAL_MAKE_DECISION_PROCESS_ID:()=>O,ORDER_APPROVAL_NORMALIZER:()=>S,OccOrderApprovalAdapter:()=>Lr,OccOrderApprovalDecisionNormalizer:()=>hr,OccOrderApprovalListNormalizer:()=>xr,OccOrderApprovalNormalizer:()=>Er,OrderApprovalActions:()=>$r,OrderApprovalAdapter:()=>q,OrderApprovalComponentsModule:()=>Dr,OrderApprovalConnector:()=>z,OrderApprovalDecisionValue:()=>E,OrderApprovalDetailFormComponent:()=>Or,OrderApprovalDetailService:()=>R,OrderApprovalDetailsModule:()=>gr,OrderApprovalListComponent:()=>mr,OrderApprovalListModule:()=>fr,OrderApprovalModule:()=>le,OrderApprovalOccModule:()=>Rr,OrderApprovalSelectors:()=>Yr,OrderApprovalService:()=>Z,OrderDetailPermissionResultsComponent:()=>J});var r=s(4650),u=s(4006),W=s(341),H=s(6053),y=s(1086),X=s(7770),I=s(2994),g=s(2198),c=s(4850),F=s(373),m=s(7545),Mr=s(5154),U=s(7221),a=s(9057),d=s(8555),v=s(6895),f=s(1446),P=s(610),_=s(5745),Tr=s(7212),Cr=s(529),Zr=s(4129),A=s(5024);function Sr(o,n){1&o&&(r.TgZ(0,"div")(1,"div",3),r._UZ(2,"cx-spinner"),r.qZA()())}const yr=function(o,n){return{orderCode:o,orderTotal:n}};function Ir(o,n){if(1&o&&(r.TgZ(0,"div",7)(1,"div",8),r._uU(2),r.ALo(3,"cxTranslate"),r.qZA()()),2&o){const e=r.oxw(3).ngIf,t=r.oxw();r.xp6(2),r.hij(" ",r.xi3(3,1,"orderApprovalDetails.form.title_"+t.approvalDecision,r.WLB(4,yr,null==e||null==e.order?null:e.order.code,null==e||null==e.order||null==e.order.totalPriceWithTax?null:e.order.totalPriceWithTax.formattedValue))," ")}}function Fr(o,n){if(1&o){const e=r.EpF();r.TgZ(0,"form",9),r.NdJ("ngSubmit",function(){r.CHM(e);const p=r.oxw(3).ngIf,i=r.oxw();return r.KtG(i.submitDecision(p))}),r.TgZ(1,"label"),r._uU(2),r.ALo(3,"cxTranslate"),r._UZ(4,"textarea",10)(5,"cx-form-errors",11),r.qZA(),r.TgZ(6,"div",12)(7,"div",13)(8,"button",14),r.NdJ("click",function(){r.CHM(e);const p=r.oxw(4);return r.KtG(p.cancelDecisionForm())}),r._uU(9),r.ALo(10,"cxTranslate"),r.qZA()(),r.TgZ(11,"div",13)(12,"button",15),r._uU(13),r.ALo(14,"cxTranslate"),r.qZA()()()()}if(2&o){const e=r.oxw(4);r.Q6J("formGroup",e.approvalForm),r.xp6(2),r.hij("",r.lcZ(3,5,"orderApprovalDetails.form.comment_"+e.approvalDecision+".label")," "),r.xp6(3),r.Q6J("control",e.approvalForm.get("comment")),r.xp6(4),r.hij(" ",r.lcZ(10,7,"orderApprovalDetails.form.cancel")," "),r.xp6(4),r.hij(" ",r.lcZ(14,9,"orderApprovalDetails.form.submit_"+e.approvalDecision)," ")}}function Ur(o,n){if(1&o&&(r.ynx(0),r.YNc(1,Ir,4,7,"div",5),r.YNc(2,Fr,15,11,"form",6),r.BQk()),2&o){const e=r.oxw(3);r.xp6(1),r.Q6J("ngIf",e.approvalFormVisible),r.xp6(1),r.Q6J("ngIf",e.approvalFormVisible)}}function br(o,n){if(1&o){const e=r.EpF();r.TgZ(0,"div",16)(1,"button",19),r.NdJ("click",function(){r.CHM(e);const p=r.oxw(4);return r.KtG(p.displayDecisionForm(p.approvalDecisionValue.REJECT))}),r._uU(2),r.ALo(3,"cxTranslate"),r.qZA()()}2&o&&(r.xp6(2),r.hij(" ",r.lcZ(3,1,"orderApprovalDetails.showForm_REJECT")," "))}function kr(o,n){if(1&o){const e=r.EpF();r.TgZ(0,"div",16)(1,"button",19),r.NdJ("click",function(){r.CHM(e);const p=r.oxw(4);return r.KtG(p.displayDecisionForm(p.approvalDecisionValue.APPROVE))}),r._uU(2),r.ALo(3,"cxTranslate"),r.qZA()()}2&o&&(r.xp6(2),r.hij(" ",r.lcZ(3,1,"orderApprovalDetails.showForm_APPROVE")," "))}const Nr=function(){return{cxRoute:"orderApprovals"}};function Vr(o,n){if(1&o&&(r.ynx(0),r.TgZ(1,"div",12)(2,"div",16)(3,"a",17),r.ALo(4,"cxUrl"),r._uU(5),r.ALo(6,"cxTranslate"),r.qZA()(),r.YNc(7,br,4,3,"div",18),r.YNc(8,kr,4,3,"div",18),r.qZA(),r.BQk()),2&o){const e=r.oxw(2).ngIf;r.xp6(3),r.Q6J("routerLink",r.lcZ(4,4,r.DdM(8,Nr))),r.xp6(2),r.Oqu(r.lcZ(6,6,"orderApprovalDetails.back")),r.xp6(2),r.Q6J("ngIf",null==e?null:e.approvalDecisionRequired),r.xp6(1),r.Q6J("ngIf",null==e?null:e.approvalDecisionRequired)}}function wr(o,n){if(1&o&&(r._UZ(0,"div",4),r.ALo(1,"cxTranslate"),r.YNc(2,Ur,3,2,"ng-container",0),r.YNc(3,Vr,9,9,"ng-container",0)),2&o){const e=r.oxw().ngIf,t=r.oxw();r.uIk("aria-label",r.lcZ(1,3,"common.loaded")),r.xp6(2),r.Q6J("ngIf",null==e?null:e.approvalDecisionRequired),r.xp6(1),r.Q6J("ngIf",!t.approvalFormVisible)}}function Kr(o,n){if(1&o&&(r.ynx(0),r.YNc(1,Sr,3,0,"div",1),r.ALo(2,"async"),r.YNc(3,wr,4,5,"ng-template",null,2,r.W1O),r.BQk()),2&o){const e=r.MAs(4),t=r.oxw();r.xp6(1),r.Q6J("ngIf",r.lcZ(2,2,t.loading$))("ngIfElse",e)}}function Gr(o,n){if(1&o&&(r.TgZ(0,"tr")(1,"td",7)(2,"div",8),r._uU(3),r.ALo(4,"cxTranslate"),r.qZA(),r._uU(5),r.ALo(6,"cxTranslate"),r.qZA(),r.TgZ(7,"td",9)(8,"div",8),r._uU(9),r.ALo(10,"cxTranslate"),r.qZA(),r._uU(11),r.qZA(),r.TgZ(12,"td",10)(13,"div",8),r._uU(14),r.ALo(15,"cxTranslate"),r.qZA(),r._uU(16),r.qZA(),r.TgZ(17,"td",11)(18,"div",8),r._uU(19),r.ALo(20,"cxTranslate"),r.qZA(),r._uU(21),r.ALo(22,"cxTranslate"),r.qZA()()),2&o){const e=n.$implicit;r.xp6(3),r.hij(" ",r.lcZ(4,8,"orderApprovalDetails.permissionResults.permission")," "),r.xp6(2),r.hij(" ",r.lcZ(6,10,"orderApprovalDetails.permissionResults.permissionType_"+(null==e||null==e.permissionType?null:e.permissionType.code))," "),r.xp6(4),r.hij(" ",r.lcZ(10,12,"orderApprovalDetails.permissionResults.approver")," "),r.xp6(2),r.hij(" ",e.approverName," "),r.xp6(3),r.hij(" ",r.lcZ(15,14,"orderApprovalDetails.permissionResults.status")," "),r.xp6(2),r.hij(" ",e.statusDisplay," "),r.xp6(3),r.hij(" ",r.lcZ(20,16,"orderApprovalDetails.permissionResults.approverComments")," "),r.xp6(2),r.hij(" ",e.approverNotes?e.approverNotes:r.lcZ(22,18,"orderApprovalDetails.permissionResults.noApprovalComments")," ")}}function jr(o,n){if(1&o&&(r.ynx(0),r.TgZ(1,"div",1)(2,"div",2),r._uU(3),r.ALo(4,"cxTranslate"),r.qZA()(),r.TgZ(5,"table",3)(6,"thead",4)(7,"th",5),r._uU(8),r.ALo(9,"cxTranslate"),r.qZA(),r.TgZ(10,"th",5),r._uU(11),r.ALo(12,"cxTranslate"),r.qZA(),r.TgZ(13,"th",5),r._uU(14),r.ALo(15,"cxTranslate"),r.qZA(),r.TgZ(16,"th",5),r._uU(17),r.ALo(18,"cxTranslate"),r.qZA()(),r.TgZ(19,"tbody"),r.YNc(20,Gr,23,20,"tr",6),r.qZA()(),r.BQk()),2&o){const e=r.oxw().ngIf;r.xp6(3),r.hij(" ",r.lcZ(4,6,"orderApprovalDetails.permissionResults.header")," "),r.xp6(5),r.hij(" ",r.lcZ(9,8,"orderApprovalDetails.permissionResults.permission")," "),r.xp6(3),r.hij(" ",r.lcZ(12,10,"orderApprovalDetails.permissionResults.approver")," "),r.xp6(3),r.hij(" ",r.lcZ(15,12,"orderApprovalDetails.permissionResults.status")," "),r.xp6(3),r.hij(" ",r.lcZ(18,14,"orderApprovalDetails.permissionResults.approverComments")," "),r.xp6(3),r.Q6J("ngForOf",e.permissionResults)}}function Br(o,n){if(1&o&&(r.ynx(0),r.YNc(1,jr,21,16,"ng-container",0),r.BQk()),2&o){const e=n.ngIf;r.xp6(1),r.Q6J("ngIf",null==e.permissionResults?null:e.permissionResults.length)}}const h=function(o){return{approvalCode:o}},x=function(o){return{cxRoute:"orderApprovalDetails",params:o}};function Jr(o,n){if(1&o){const e=r.EpF();r.TgZ(0,"tr",14),r.NdJ("click",function(p){const l=r.CHM(e).$implicit,L=r.oxw(3);return r.KtG(L.goToApprovalDetails(p,l))}),r.TgZ(1,"td",15)(2,"div",16),r._uU(3),r.ALo(4,"cxTranslate"),r.qZA(),r.TgZ(5,"a",17),r.ALo(6,"cxUrl"),r._uU(7),r.qZA()(),r.TgZ(8,"td",18)(9,"div",16),r._uU(10),r.ALo(11,"cxTranslate"),r.qZA(),r.TgZ(12,"a",17),r.ALo(13,"cxUrl"),r._uU(14),r.ALo(15,"cxTranslate"),r.qZA()(),r.TgZ(16,"td",19)(17,"div",16),r._uU(18),r.ALo(19,"cxTranslate"),r.qZA(),r.TgZ(20,"a",17),r.ALo(21,"cxUrl"),r._uU(22),r.qZA()(),r.TgZ(23,"td",20)(24,"div",16),r._uU(25),r.ALo(26,"cxTranslate"),r.qZA(),r.TgZ(27,"a",17),r.ALo(28,"cxUrl"),r._uU(29),r.ALo(30,"cxDate"),r.qZA()(),r.TgZ(31,"td",21)(32,"div",16),r._uU(33),r.ALo(34,"cxTranslate"),r.qZA(),r.TgZ(35,"a",17),r.ALo(36,"cxUrl"),r._uU(37),r.ALo(38,"cxTranslate"),r.qZA()(),r.TgZ(39,"td",22)(40,"div",16),r._uU(41),r.ALo(42,"cxTranslate"),r.qZA(),r.TgZ(43,"a",17),r.ALo(44,"cxUrl"),r._uU(45),r.qZA()()()}if(2&o){const e=n.$implicit;r.xp6(3),r.hij(" ",r.lcZ(4,18,"orderApprovalList.orderCode")," "),r.xp6(2),r.Q6J("routerLink",r.lcZ(6,20,r.VKq(51,x,r.VKq(49,h,null==e?null:e.code)))),r.xp6(2),r.hij(" ",null==e.order?null:e.order.code,""),r.xp6(3),r.hij(" ",r.lcZ(11,22,"orderApprovalList.POCode")," "),r.xp6(2),r.Q6J("routerLink",r.lcZ(13,24,r.VKq(55,x,r.VKq(53,h,null==e?null:e.code)))),r.xp6(2),r.Oqu((null==e.order?null:e.order.purchaseOrderNumber)||r.lcZ(15,26,"orderApprovalList.none")),r.xp6(4),r.hij(" ",r.lcZ(19,28,"orderApprovalList.placedBy")," "),r.xp6(2),r.Q6J("routerLink",r.lcZ(21,30,r.VKq(59,x,r.VKq(57,h,null==e?null:e.code)))),r.xp6(2),r.Oqu(null==e.order||null==e.order.orgCustomer?null:e.order.orgCustomer.name),r.xp6(3),r.hij(" ",r.lcZ(26,32,"orderApprovalList.date")," "),r.xp6(2),r.Q6J("routerLink",r.lcZ(28,34,r.VKq(63,x,r.VKq(61,h,null==e?null:e.code)))),r.xp6(2),r.Oqu(r.xi3(30,36,null==e.order?null:e.order.created,"longDate")),r.xp6(4),r.hij(" ",r.lcZ(34,39,"orderApprovalList.status")," "),r.xp6(2),r.Q6J("routerLink",r.lcZ(36,41,r.VKq(67,x,r.VKq(65,h,null==e?null:e.code)))),r.xp6(2),r.hij(" ",r.lcZ(38,43,"orderDetails.statusDisplay_"+(null==e.order?null:e.order.statusDisplay)),""),r.xp6(4),r.hij(" ",r.lcZ(42,45,"orderApprovalList.total")," "),r.xp6(2),r.Q6J("routerLink",r.lcZ(44,47,r.VKq(71,x,r.VKq(69,h,null==e?null:e.code)))),r.xp6(2),r.hij(" ",null==e.order||null==e.order.totalPrice?null:e.order.totalPrice.formattedValue,"")}}function qr(o,n){if(1&o){const e=r.EpF();r.ynx(0),r.TgZ(1,"div",3)(2,"div",4)(3,"cx-sorting",5),r.NdJ("sortListEvent",function(p){r.CHM(e);const i=r.oxw(2);return r.KtG(i.changeSortCode(p))}),r.ALo(4,"async"),r.ALo(5,"cxTranslate"),r.qZA()(),r.TgZ(6,"div",6)(7,"cx-pagination",7),r.NdJ("viewPageEvent",function(p){r.CHM(e);const i=r.oxw(2);return r.KtG(i.pageChange(p))}),r.qZA()()(),r.TgZ(8,"table",8)(9,"thead",9)(10,"th",10),r._uU(11),r.ALo(12,"cxTranslate"),r.qZA(),r.TgZ(13,"th",10),r._uU(14),r.ALo(15,"cxTranslate"),r.qZA(),r.TgZ(16,"th",10),r._uU(17),r.ALo(18,"cxTranslate"),r.qZA(),r.TgZ(19,"th",10),r._uU(20),r.ALo(21,"cxTranslate"),r.qZA(),r.TgZ(22,"th",10),r._uU(23),r.ALo(24,"cxTranslate"),r.qZA(),r.TgZ(25,"th",10),r._uU(26),r.ALo(27,"cxTranslate"),r.qZA()(),r.TgZ(28,"tbody"),r.YNc(29,Jr,46,73,"tr",11),r.qZA()(),r.TgZ(30,"div",12)(31,"div",4)(32,"cx-sorting",13),r.NdJ("sortListEvent",function(p){r.CHM(e);const i=r.oxw(2);return r.KtG(i.changeSortCode(p))}),r.ALo(33,"async"),r.qZA()(),r.TgZ(34,"div",6)(35,"cx-pagination",7),r.NdJ("viewPageEvent",function(p){r.CHM(e);const i=r.oxw(2);return r.KtG(i.pageChange(p))}),r.qZA()()(),r.BQk()}if(2&o){const e=r.oxw().ngIf,t=r.oxw();r.xp6(3),r.Q6J("sortOptions",e.sorts)("sortLabels",r.lcZ(4,16,t.sortLabels$))("selectedOption",e.pagination.sort)("ariaLabel",r.lcZ(5,18,"orderHistory.sortOrders")),r.xp6(4),r.Q6J("pagination",e.pagination),r.xp6(4),r.hij(" ",r.lcZ(12,20,"orderApprovalList.orderCode")," "),r.xp6(3),r.Oqu(r.lcZ(15,22,"orderApprovalList.POCode")),r.xp6(3),r.Oqu(r.lcZ(18,24,"orderApprovalList.placedBy")),r.xp6(3),r.Oqu(r.lcZ(21,26,"orderApprovalList.date")),r.xp6(3),r.hij(" ",r.lcZ(24,28,"orderApprovalList.status")," "),r.xp6(3),r.Oqu(r.lcZ(27,30,"orderApprovalList.total")),r.xp6(3),r.Q6J("ngForOf",e.values),r.xp6(3),r.Q6J("sortOptions",e.sorts)("sortLabels",r.lcZ(33,32,t.sortLabels$))("selectedOption",e.pagination.sort),r.xp6(3),r.Q6J("pagination",e.pagination)}}function zr(o,n){1&o&&(r.TgZ(0,"div",23)(1,"div",24)(2,"div"),r._uU(3),r.ALo(4,"cxTranslate"),r.qZA()()()),2&o&&(r.xp6(3),r.Oqu(r.lcZ(4,1,"orderApprovalList.emptyList")))}function Qr(o,n){if(1&o&&(r.ynx(0),r.YNc(1,qr,36,34,"ng-container",1),r.YNc(2,zr,5,3,"ng-template",null,2,r.W1O),r.BQk()),2&o){const e=n.ngIf,t=r.MAs(3);r.xp6(1),r.Q6J("ngIf",e.pagination&&e.pagination.totalResults&&e.pagination.totalResults>0)("ngIfElse",t)}}var E=(()=>{return(o=E||(E={})).APPROVE="APPROVE",o.REJECT="REJECT",E;var o})();const M="order-approval",T="order-approval-entities",C="order-approval-list",O="orderApproval.makeDecision",b="[OrderApproval] Load OrderApproval Data",rr="[OrderApproval] Load OrderApproval Data Fail",k="[OrderApproval] Load OrderApproval Data Success",N="[OrderApproval] Load OrderApprovals",er="[OrderApproval] Load OrderApprovals Fail",V="[OrderApproval] Load OrderApprovals Success",w="[OrderApproval] Make OrderApproval Decision",or="[OrderApproval] Make OrderApproval Decision Fail",K="[OrderApproval] Make OrderApproval Decision Success",tr="[OrderApproval] Make OrderApproval Decision Reset";class G extends a.kPG.EntityLoadAction{constructor(n){super(T,n.orderApprovalCode),this.payload=n,this.type=b}}class nr extends a.kPG.EntityFailAction{constructor(n){super(T,n.orderApprovalCode,n.error),this.payload=n,this.type=rr}}class j extends a.kPG.EntitySuccessAction{constructor(n){super(T,Array.isArray(n)?n.map(e=>e.code??""):n.code??""),this.payload=n,this.type=k}}class ar extends a.kPG.EntityLoadAction{constructor(n){super(C,a.kPG.serializeSearchConfig(n.params)),this.payload=n,this.type=N}}class pr extends a.kPG.EntityFailAction{constructor(n){super(C,a.kPG.serializeSearchConfig(n.params),n.error),this.payload=n,this.type=er}}class ir extends a.kPG.EntitySuccessAction{constructor(n){super(C,a.kPG.serializeSearchConfig(n.params)),this.payload=n,this.type=V}}class sr extends a.kPG.EntityLoadAction{constructor(n){super(a.BzF,O),this.payload=n,this.type=w}}class lr extends a.kPG.EntityFailAction{constructor(n){super(a.BzF,O,n),this.payload=n,this.type=or}}class cr extends a.kPG.EntitySuccessAction{constructor(n){super(a.BzF,O),this.payload=n,this.type=K}}class dr extends a.kPG.EntityLoaderResetAction{constructor(){super(a.BzF,O),this.type=tr}}var $r=Object.freeze({__proto__:null,LOAD_ORDER_APPROVAL:b,LOAD_ORDER_APPROVAL_FAIL:rr,LOAD_ORDER_APPROVAL_SUCCESS:k,LOAD_ORDER_APPROVALS:N,LOAD_ORDER_APPROVALS_FAIL:er,LOAD_ORDER_APPROVALS_SUCCESS:V,MAKE_DECISION:w,MAKE_DECISION_FAIL:or,MAKE_DECISION_SUCCESS:K,MAKE_DECISION_RESET:tr,LoadOrderApproval:G,LoadOrderApprovalFail:nr,LoadOrderApprovalSuccess:j,LoadOrderApprovals:ar,LoadOrderApprovalsFail:pr,LoadOrderApprovalsSuccess:ir,MakeDecision:sr,MakeDecisionFail:lr,MakeDecisionSuccess:cr,MakeDecisionReset:dr});const vr=(0,d.ZF)(M),B=(0,d.P1)(vr,o=>o[M]),ur=(0,d.P1)(B,o=>o&&o.entities),_r=o=>(0,d.P1)(ur,n=>a.kPG.entityLoaderStateSelector(n,o)),Ar=o=>(0,d.P1)(B,n=>a.kPG.denormalizeSearch(n,o));var Yr=Object.freeze({__proto__:null,getOrderApprovalState:vr,getOrderApprovalManagementState:B,getOrderApprovalsState:ur,getOrderApproval:_r,getOrderApprovalList:Ar});let Z=(()=>{class o{constructor(e,t){this.store=e,this.userIdService=t}loadOrderApproval(e){this.userIdService.takeUserId().subscribe(t=>this.store.dispatch(new G({userId:t,orderApprovalCode:e})))}loadOrderApprovals(e){this.userIdService.takeUserId().subscribe(t=>this.store.dispatch(new ar({userId:t,params:e})))}getOrderApproval(e){return this.store.select(_r(e))}getOrderApprovalList(e){return this.store.select(Ar(e))}get(e){return this.getOrderApproval(e).pipe((0,X.QV)(W.N),(0,I.b)(t=>{t.loading||t.success||t.error||this.loadOrderApproval(e)}),(0,g.h)(t=>Boolean(t.success||t.error)),(0,c.U)(t=>t.value))}getOrderApprovalLoading(e){return this.getOrderApproval(e).pipe((0,F.j)("loading"),(0,c.U)(t=>t??!1))}getList(e){return this.getOrderApprovalList(e).pipe((0,X.QV)(W.N),(0,I.b)(t=>{t.loading||t.success||t.error||this.loadOrderApprovals(e)}),(0,g.h)(t=>Boolean(t.success||t.error)),(0,c.U)(t=>t.value))}makeDecision(e,t){this.userIdService.takeUserId().subscribe(p=>this.store.dispatch(new sr({userId:p,orderApprovalCode:e,orderApprovalDecision:t})))}getMakeDecisionResultLoading(){return this.store.pipe((0,d.Ys)(a.VkE.getProcessLoadingFactory(O)))}getMakeDecisionResultError(){return this.store.pipe((0,d.Ys)(a.VkE.getProcessErrorFactory(O)))}getMakeDecisionResultSuccess(){return this.store.pipe((0,d.Ys)(a.VkE.getProcessSuccessFactory(O)))}resetMakeDecisionProcessState(){this.store.dispatch(new dr)}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(d.yh),r.LFG(a.XBV))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),R=(()=>{class o{constructor(e,t){this.routingService=e,this.orderApprovalService=t,this.approvalCode$=this.routingService.getRouterState().pipe((0,c.U)(p=>p.state.params.approvalCode)),this.orderApproval$=this.approvalCode$.pipe((0,g.h)(p=>Boolean(p)),(0,I.b)(p=>this.orderApprovalService.loadOrderApproval(p)),(0,m.w)(p=>this.orderApprovalService.get(p)),(0,Mr.d)({bufferSize:1,refCount:!0})),this.order$=this.orderApproval$.pipe((0,F.j)("order"))}getOrderApprovalCodeFromRoute(){return this.approvalCode$}getOrderDetails(){return this.order$}getOrderApproval(){return this.orderApproval$}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(a.Znh),r.LFG(Z))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Or=(()=>{class o{constructor(e,t,p){this.orderApprovalDetailService=e,this.orderApprovalService=t,this.fb=p,this.approvalDecisionValue=E,this.approvalFormVisible=!1,this.approvalForm=this.fb.group({comment:[""]}),this.orderApprovalLoading$=this.orderApprovalDetailService.getOrderApprovalCodeFromRoute().pipe((0,m.w)(i=>this.orderApprovalService.getOrderApprovalLoading(i))),this.decisionResultLoading$=this.orderApprovalService.getMakeDecisionResultLoading(),this.loading$=(0,H.aj)([this.orderApprovalLoading$,this.decisionResultLoading$]).pipe((0,c.U)(([i,l])=>i||l)),this.orderApproval$=this.orderApprovalDetailService.getOrderApproval(),this.orderApprovalService.resetMakeDecisionProcessState()}displayDecisionForm(e){this.approvalDecision=e,e===E.APPROVE?this.approvalForm.controls.comment.clearValidators():this.approvalForm.controls.comment.setValidators([u.kI.required]),this.approvalFormVisible=!0}cancelDecisionForm(){this.approvalFormVisible=!1,this.approvalForm.reset()}submitDecision(e){this.approvalForm.valid?(this.orderApprovalService.makeDecision(e.code??"",{decision:this.approvalDecision,comment:this.approvalForm.controls.comment.value}),this.approvalFormVisible=!1):this.approvalForm.markAllAsTouched()}ngOnDestroy(){this.orderApprovalService.resetMakeDecisionProcessState()}}return o.\u0275fac=function(e){return new(e||o)(r.Y36(R),r.Y36(Z),r.Y36(u.QS))},o.\u0275cmp=r.Xpm({type:o,selectors:[["cx-order-approval-detail-form"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["approvalFormTemplate",""],[1,"cx-spinner"],["role","status"],["class","cx-approval-form-header row",4,"ngIf"],[3,"formGroup","ngSubmit",4,"ngIf"],[1,"cx-approval-form-header","row"],[1,"cx-approval-form-label","col-sm-12"],[3,"formGroup","ngSubmit"],["rows","3","formControlName","comment","maxlength","255",1,"form-control"],[3,"control"],[1,"form-group","row"],[1,"col-lg-6","col-md-12"],["type","button",1,"btn","btn-block","btn-secondary",3,"click"],["type","submit",1,"btn","btn-block","btn-primary"],[1,"col-lg-4","col-md-12"],[1,"btn","btn-block","btn-secondary",3,"routerLink"],["class","col-lg-4 col-md-12",4,"ngIf"],[1,"btn","btn-block","btn-primary",3,"click"]],template:function(e,t){1&e&&(r.YNc(0,Kr,5,4,"ng-container",0),r.ALo(1,"async")),2&e&&r.Q6J("ngIf",r.lcZ(1,1,t.orderApproval$))},dependencies:[u._Y,u.Fj,u.JJ,u.JL,u.nD,u.sg,u.u,v.O5,f.Ahv,f.ORR,P.yS,v.Ov,a.X$D,a.l2T],encapsulation:2,changeDetection:0}),o})(),D=(()=>{class o{constructor(e,t,p){this.userAccountFacade=e,this.routingService=t,this.globalMessageService=p}canActivate(){return this.userAccountFacade.get().pipe((0,g.h)(e=>!!e&&Object.keys(e).length>0),(0,F.j)("roles"),(0,c.U)(e=>{const t=Array.isArray(e)&&(e.includes(a.KOx.APPROVER)||e.includes(a.KOx.ADMIN));return t||(this.routingService.go({cxRoute:"home"}),this.globalMessageService.add({key:"orderApprovalGlobal.notification.noSufficientPermissions"},a.xUg.MSG_TYPE_WARNING)),t}))}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(Tr.gf),r.LFG(a.Znh),r.LFG(a.IWp))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),J=(()=>{class o{constructor(e){this.orderDetailsService=e,this.order$=this.orderDetailsService.getOrderDetails()}}return o.\u0275fac=function(e){return new(e||o)(r.Y36(_.SE))},o.\u0275cmp=r.Xpm({type:o,selectors:[["cx-order-detail-permission-results"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"cx-approval-header"],[1,"cx-approval-label"],[1,"table","table-striped","cx-approval-table"],[1,"cx-approval-thead-mobile"],["scope","col"],[4,"ngFor","ngForOf"],[1,"cx-approval-permissionCode"],[1,"cx-approval-table-label"],[1,"cx-approval-approverName"],[1,"cx-approval-statusDisplay"],[1,"cx-approval-approvalNotes"]],template:function(e,t){1&e&&(r.YNc(0,Br,2,1,"ng-container",0),r.ALo(1,"async")),2&e&&r.Q6J("ngIf",r.lcZ(1,1,t.order$))},dependencies:[v.sg,v.O5,v.Ov,a.X$D],encapsulation:2,changeDetection:0}),o})(),gr=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[u.UX,v.ez,a.LUR,a.bhT,f.Fym,f.Fme,P.Bz,a.pEA.withConfig({cmsComponents:{OrderApprovalDetailTotalsComponent:{component:_.sQ,providers:[{provide:_.SE,useExisting:R}],guards:[a.a1M,D]},OrderApprovalDetailApprovalDetailsComponent:{component:J,providers:[{provide:_.SE,useExisting:R}],guards:[a.a1M,D]},AccountOrderDetailsApprovalDetailsComponent:{component:J},OrderApprovalDetailShippingComponent:{component:_.KV,providers:[{provide:_.SE,useExisting:R}],guards:[a.a1M,D]},OrderApprovalDetailItemsComponent:{component:_.vI,providers:[{provide:_.SE,useExisting:R}],guards:[a.a1M,D]},OrderApprovalDetailFormComponent:{component:Or,guards:[a.a1M,D]}}})]}),o})(),mr=(()=>{class o{constructor(e,t,p){this.routing=e,this.orderApprovalService=t,this.translation=p,this.PAGE_SIZE=5}ngOnInit(){this.fetchApprovalListPage({}),this.sortLabels$=(0,H.aj)([this.translation.translate("sorting.date"),this.translation.translate("sorting.orderNumber")]).pipe((0,c.U)(([e,t])=>({byDate:e,byOrderNumber:t})))}changeSortCode(e){const t={sort:e,currentPage:0};this.sortType=e,this.fetchApprovalListPage(t)}pageChange(e){this.fetchApprovalListPage({sort:this.sortType,currentPage:e})}fetchApprovalListPage(e){e.pageSize=this.PAGE_SIZE,this.orderApprovalService.loadOrderApprovals(e),this.orderApprovals$=this.orderApprovalService.getList(e)}goToApprovalDetails(e,t){"a"!==e?.target?.nodeName.toLowerCase()&&this.routing.go({cxRoute:"orderApprovalDetails",params:{approvalCode:t.code}})}}return o.\u0275fac=function(e){return new(e||o)(r.Y36(a.Znh),r.Y36(Z),r.Y36(a.D7D))},o.\u0275cmp=r.Xpm({type:o,selectors:[["cx-order-approval-list"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["noOrder",""],[1,"cx-order-approval-sort","top","row"],[1,"cx-order-approval-form-group","form-group","col-sm-12","col-md-4","col-lg-4"],["ariaControls","order-approval-table",3,"sortOptions","sortLabels","selectedOption","ariaLabel","sortListEvent"],[1,"cx-order-approval-pagination"],[3,"pagination","viewPageEvent"],["id","order-approval-table",1,"table","cx-order-approval-table"],[1,"cx-order-approval-thead-mobile"],["scope","col"],[3,"click",4,"ngFor","ngForOf"],[1,"cx-order-approval-sort","bottom","row"],[3,"sortOptions","sortLabels","selectedOption","sortListEvent"],[3,"click"],[1,"cx-order-approval-code"],[1,"d-md-none","cx-order-approval-label"],[1,"cx-order-approval-value",3,"routerLink"],[1,"cx-order-approval-po-code"],[1,"cx-order-approval-placed"],[1,"cx-order-approval-date"],[1,"cx-order-approval-status"],[1,"cx-order-approval-total"],[1,"cx-order-approval-no-order","row"],[1,"col-sm-12","col-md-6","col-lg-4"]],template:function(e,t){1&e&&(r.YNc(0,Qr,4,2,"ng-container",0),r.ALo(1,"async")),2&e&&r.Q6J("ngIf",r.lcZ(1,1,t.orderApprovals$))},dependencies:[v.sg,v.O5,P.yS,f.iNG,f.QtL,v.Ov,a.l2T,a.X$D,a.dgE],encapsulation:2,changeDetection:0}),o})(),fr=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[v.ez,a.pEA.withConfig({cmsComponents:{OrderApprovalListComponent:{component:mr,guards:[a.a1M,D]}}}),a.bhT,P.Bz,f.xuE,a.LUR]}),o})(),Dr=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[P.Bz,fr,gr]}),o})();class q{}let z=(()=>{class o{constructor(e){this.adapter=e}get(e,t){return this.adapter.load(e,t)}getList(e,t){return this.adapter.loadList(e,t)}makeDecision(e,t,p){return this.adapter.makeDecision(e,t,p)}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(q))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const S=new r.OlP("OrderApprovalNormalizer"),Q=new r.OlP("OrderApprovalsListNormalizer"),$=new r.OlP("OrderApprovalDecisionNormalizer");let Lr=(()=>{class o{constructor(e,t,p){this.http=e,this.occEndpoints=t,this.converter=p}load(e,t){return this.http.get(this.getOrderApprovalEndpoint(e,t)).pipe(this.converter.pipeable(S))}loadList(e,t){return this.http.get(this.getOrderApprovalsEndpoint(e,t)).pipe(this.converter.pipeable(Q))}makeDecision(e,t,p){return this.http.post(this.getOrderApprovalDecisionEndpoint(e,t),p).pipe(this.converter.pipeable($))}getOrderApprovalEndpoint(e,t){return this.occEndpoints.buildUrl("orderApproval",{urlParams:{userId:e,orderApprovalCode:t}})}getOrderApprovalsEndpoint(e,t){return this.occEndpoints.buildUrl("orderApprovals",{urlParams:{userId:e},queryParams:t})}getOrderApprovalDecisionEndpoint(e,t){return this.occEndpoints.buildUrl("orderApprovalDecision",{urlParams:{userId:e,orderApprovalCode:t}})}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(Cr.eN),r.LFG(a.Lz0),r.LFG(a.IXI))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac}),o})(),hr=(()=>{class o{constructor(){}convert(e,t){return void 0===t&&(t={...e}),t}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),xr=(()=>{class o{constructor(e){this.converter=e}convert(e,t){return void 0===t&&(t={...e}),t.values=e.orderApprovals?.map(p=>({...this.converter.convert(p,S)}))??[],t}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(a.IXI))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Er=(()=>{class o{constructor(e){this.converter=e}convert(e,t){return void 0===t&&(t={...e}),e.order&&(t.order=this.converter.convert(e.order,Zr.YA)),t}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(a.IXI))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const Wr={backend:{occ:{endpoints:{orderApprovals:"/users/${userId}/orderapprovals",orderApproval:"/users/${userId}/orderapprovals/${orderApprovalCode}?fields=FULL",orderApprovalDecision:"/users/${userId}/orderapprovals/${orderApprovalCode}/decision"}}}};let Rr=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({providers:[(0,a.i51)(Wr),{provide:q,useClass:Lr},{provide:S,useExisting:Er,multi:!0},{provide:Q,useExisting:xr,multi:!0},{provide:$,useExisting:hr,multi:!0}],imports:[v.ez]}),o})();const Hr=[(()=>{class o{constructor(e,t){this.actions$=e,this.orderApprovalConnector=t,this.loadOrderApproval$=(0,A.GW)(()=>this.actions$.pipe((0,A.l4)(b),(0,c.U)(p=>p.payload),(0,g.h)(p=>p.userId!==a.Fds),(0,m.w)(({userId:p,orderApprovalCode:i})=>this.orderApprovalConnector.get(p,i).pipe((0,c.U)(l=>new j([l])),(0,U.K)(l=>(0,y.of)(new nr({orderApprovalCode:i,error:(0,a.cxH)(l)}))))))),this.loadOrderApprovals$=(0,A.GW)(()=>this.actions$.pipe((0,A.l4)(N),(0,c.U)(p=>p.payload),(0,g.h)(p=>p.userId!==a.Fds),(0,m.w)(({userId:p,params:i})=>this.orderApprovalConnector.getList(p,i).pipe((0,m.w)(l=>{const{values:L,page:ce}=a.kPG.normalizeListPage(l,"code");return[new j(L),new ir({page:ce,params:i})]}),(0,U.K)(l=>(0,y.of)(new pr({params:i,error:(0,a.cxH)(l)}))))))),this.makeDecision$=(0,A.GW)(()=>this.actions$.pipe((0,A.l4)(w),(0,c.U)(p=>p.payload),(0,g.h)(p=>p.userId!==a.Fds),(0,m.w)(({userId:p,orderApprovalCode:i,orderApprovalDecision:l})=>this.orderApprovalConnector.makeDecision(p,i,l).pipe((0,m.w)(L=>[new cr({orderApprovalCode:i,orderApprovalDecision:L}),new G({userId:p,orderApprovalCode:i})]),(0,U.K)(L=>(0,y.of)(new lr({orderApprovalCode:i,error:(0,a.cxH)(L)})))))))}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(A.eX),r.LFG(z))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac}),o})()];function ee(o,n){switch(n.type){case k:return n.payload;case K:return o}return o}function oe(o,n){return n.type===V?n.payload.page:o}const Pr=new r.OlP("OrganizationReducers"),ne={provide:Pr,useFactory:function te(){return{[M]:(0,d.UY)({entities:a.kPG.entityLoaderReducer(T,ee),list:a.kPG.entityLoaderReducer(C,oe)})}}},pe=[function ae(o){return function(n,e){return e.type===a.uQL.LOGOUT&&(n=void 0),o(n,e)}}];let ie=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({providers:[ne],imports:[d.Aw.forFeature(M,Pr,{metaReducers:pe}),A.sQ.forFeature(Hr)]}),o})(),se=(()=>{class o{static forRoot(){return{ngModule:o,providers:[z]}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[ie]}),o})(),le=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[se.forRoot(),Rr,Dr]}),o})()}}]);