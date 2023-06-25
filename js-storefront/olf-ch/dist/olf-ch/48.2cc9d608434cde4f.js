"use strict";(self.webpackChunkolf_ch=self.webpackChunkolf_ch||[]).push([[48],{8048:(Me,A,C)=>{C.r(A),C.d(A,{CheckoutWrapperModule:()=>De});var s=C(4650),J=C(8741),n=C(3983),S=C(1487),F=C(6053),g=C(7545),P=C(2994),E=C(2986),p=C(4850),X=C(2198),D=C(3749),y=C(7935);class L{}let G=(()=>{class t{constructor(e){this.adapter=e}setCostCenter(e,r,o){return this.adapter.setCostCenter(e,r,o)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(L))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();class b{}let w=(()=>{class t{constructor(e){this.adapter=e}getPaymentTypes(){return this.adapter.getPaymentTypes()}setPaymentType(e,r,o,c){return this.adapter.setPaymentType(e,r,o,c)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(b))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),z=(()=>{class t{constructor(e,r,o,c,a,l){this.activeCartFacade=e,this.userIdService=r,this.commandService=o,this.checkoutCostCenterConnector=c,this.checkoutQueryFacade=a,this.eventService=l,this.setCostCenterCommand=this.commandService.create(v=>this.checkoutPreconditions().pipe((0,g.w)(([u,d])=>this.checkoutCostCenterConnector.setCostCenter(u,d,v).pipe((0,P.b)(()=>this.eventService.dispatch({cartId:d,userId:u,code:v},S.Rx))))),{strategy:n.flE.CancelPrevious})}checkoutPreconditions(){return(0,F.aj)([this.userIdService.takeUserId(),this.activeCartFacade.takeActiveCartId(),this.activeCartFacade.isGuestCart()]).pipe((0,E.q)(1),(0,p.U)(([e,r,o])=>{if(!e||!r||e===n.Fds&&!o)throw new Error("Checkout conditions not met");return[e,r]}))}getCostCenterState(){return this.checkoutQueryFacade.getCheckoutDetailsState().pipe((0,p.U)(e=>({...e,data:e.data?.costCenter})))}setCostCenter(e){return this.setCostCenterCommand.execute(e)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(D.bu),s.LFG(n.XBV),s.LFG(n.VDr),s.LFG(G),s.LFG(y.nh),s.LFG(n.POd))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),O=(()=>{class t{constructor(e,r,o,c,a,l,v){this.activeCartFacade=e,this.userIdService=r,this.queryService=o,this.commandService=c,this.paymentTypeConnector=a,this.eventService=l,this.checkoutQueryFacade=v,this.paymentTypesQuery=this.queryService.create(()=>this.paymentTypeConnector.getPaymentTypes(),{reloadOn:this.getCheckoutPaymentTypesQueryReloadEvents(),resetOn:this.getCheckoutPaymentTypesQueryResetEvents()}),this.setPaymentTypeCommand=this.commandService.create(({paymentTypeCode:u,purchaseOrderNumber:d})=>this.checkoutPreconditions().pipe((0,g.w)(([h,M])=>this.paymentTypeConnector.setPaymentType(h,M,u,d).pipe((0,P.b)(()=>this.eventService.dispatch({userId:h,cartId:M,paymentTypeCode:u,purchaseOrderNumber:d},S.hA))))),{strategy:n.flE.CancelPrevious})}getCheckoutPaymentTypesQueryReloadEvents(){return[S.JO]}getCheckoutPaymentTypesQueryResetEvents(){return[S.H0]}checkoutPreconditions(){return(0,F.aj)([this.userIdService.takeUserId(),this.activeCartFacade.takeActiveCartId(),this.activeCartFacade.isGuestCart()]).pipe((0,E.q)(1),(0,p.U)(([e,r,o])=>{if(!e||!r||e===n.Fds&&!o)throw new Error("Checkout conditions not met");return[e,r]}))}getPaymentTypesState(){return this.paymentTypesQuery.getState()}getPaymentTypes(){return this.getPaymentTypesState().pipe((0,p.U)(e=>e.data??[]))}setPaymentType(e,r){return this.setPaymentTypeCommand.execute({paymentTypeCode:e,purchaseOrderNumber:r})}getSelectedPaymentTypeState(){return this.checkoutQueryFacade.getCheckoutDetailsState().pipe((0,p.U)(e=>({...e,data:e.data?.paymentType})))}isAccountPayment(){return this.getSelectedPaymentTypeState().pipe((0,X.h)(e=>!e.loading),(0,p.U)(e=>e.data?.code===S.uj.ACCOUNT_PAYMENT))}getPurchaseOrderNumberState(){return this.checkoutQueryFacade.getCheckoutDetailsState().pipe((0,p.U)(e=>({...e,data:e.data?.purchaseOrderNumber})))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(D.bu),s.LFG(n.XBV),s.LFG(n._7J),s.LFG(n.VDr),s.LFG(w),s.LFG(n.POd),s.LFG(y.nh))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const q=[z,{provide:S.vs,useExisting:z},O,{provide:S.Go,useExisting:O}];var T=(()=>{return(t=T||(T={})).NO_LONGER_VALID="JaloObjectNoLongerValidError",t.INVALID_ENTITY="EntityValidationError",T;var t})();let Z=(()=>{class t extends n.kck{constructor(e){super(e),this.globalMessageService=e,this.responseStatus=n.sdw.BAD_REQUEST}getPriority(){return 0}hasMatch(e){return super.hasMatch(e)&&this.getErrors(e).some(this.isEntityValidationError)&&this.isCostCenterRequest(e)}handleError(e,r){this.getErrors(r).some(o=>this.isEntityValidationError(o))&&this.globalMessageService.add({key:"checkoutB2B.invalidCostCenter"},n.xUg.MSG_TYPE_ERROR)}getErrors(e){return(e.error?.errors||[]).filter(r=>r.type!==T.NO_LONGER_VALID)}isCostCenterRequest(e){if(e?.url){const r=new URL(e.url);return r.pathname.endsWith("costcenter")&&new URLSearchParams(r.search).has("costCenterId")}return!1}isEntityValidationError(e){return e.type===T.INVALID_ENTITY}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(n.IWp))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ee=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[...q,G,w,{provide:n.kck,useExisting:Z,multi:!0}]}),t})();const te=new s.OlP("CheckoutPaymentTypeNormalizer");var m=C(1737),f=C(7221),k=C(529),R=C(6895);let re=(()=>{class t{constructor(e,r,o){this.http=e,this.occEndpoints=r,this.converter=o}setCostCenter(e,r,o){return this.http.put(this.getSetCartCostCenterEndpoint(e,r,o),{}).pipe((0,f.K)(c=>(0,m._)((0,n.cxH)(c))),(0,n.twT)({shouldRetry:n.Pzz}),this.converter.pipeable(D.jK))}getSetCartCostCenterEndpoint(e,r,o){return this.occEndpoints.buildUrl("setCartCostCenter",{urlParams:{userId:e,cartId:r},queryParams:{costCenterId:o}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(k.eN),s.LFG(n.Lz0),s.LFG(n.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),oe=(()=>{class t{constructor(e,r,o){this.http=e,this.occEndpoints=r,this.converter=o}getPaymentTypes(){const e=(new k.qT).set(n.oT0,{sendUserIdAsHeader:!0});return this.http.get(this.getPaymentTypesEndpoint(),{context:e}).pipe((0,f.K)(r=>(0,m._)((0,n.cxH)(r))),(0,n.twT)({shouldRetry:n.Pzz}),(0,p.U)(r=>r.paymentTypes??[]),this.converter.pipeableMany(te))}getPaymentTypesEndpoint(){return this.occEndpoints.buildUrl("paymentTypes")}setPaymentType(e,r,o,c){return this.http.put(this.getSetCartPaymentTypeEndpoint(e,r,o,c),{}).pipe((0,f.K)(a=>(0,m._)((0,n.cxH)(a))),(0,n.twT)({shouldRetry:n.Pzz}),this.converter.pipeable(D.jK))}getSetCartPaymentTypeEndpoint(e,r,o,c){return this.occEndpoints.buildUrl("setCartPaymentType",{urlParams:{userId:e,cartId:r},queryParams:{paymentType:o,purchaseOrderNumber:c}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(k.eN),s.LFG(n.Lz0),s.LFG(n.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const ne={backend:{occ:{endpoints:{getCheckoutDetails:"users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL),costCenter(FULL),purchaseOrderNumber,paymentType(FULL)",setDeliveryAddress:"orgUsers/${userId}/carts/${cartId}/addresses/delivery",paymentTypes:"paymenttypes",setCartCostCenter:"users/${userId}/carts/${cartId}/costcenter",setCartPaymentType:"users/${userId}/carts/${cartId}/paymenttype"}}}};let se=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[(0,n.i51)(ne),{provide:b,useClass:oe},{provide:L,useClass:re}],imports:[R.ez]}),t})(),ce=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[J.Gn,ee,se]}),t})();var ie=C(3966);class U{}let x=(()=>{class t{constructor(e){this.adapter=e}createAddress(e,r,o){return this.adapter.createAddress(e,r,o)}setAddress(e,r,o){return this.adapter.setAddress(e,r,o)}clearCheckoutDeliveryAddress(e,r){return this.adapter.clearCheckoutDeliveryAddress(e,r)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(U))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();class I{}let B=(()=>{class t{constructor(e){this.adapter=e}setMode(e,r,o){return this.adapter.setMode(e,r,o)}getSupportedModes(e,r){return this.adapter.getSupportedModes(e,r)}clearCheckoutDeliveryMode(e,r){return this.adapter.clearCheckoutDeliveryMode(e,r)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(I))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();class N{}let Q=(()=>{class t{constructor(e){this.adapter=e}createPaymentDetails(e,r,o){return this.adapter.createPaymentDetails(e,r,o)}setPaymentDetails(e,r,o){return this.adapter.setPaymentDetails(e,r,o)}getPaymentCardTypes(){return this.adapter.getPaymentCardTypes()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(N))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();class Y{}let $=(()=>{class t{constructor(e){this.adapter=e}getCheckoutDetails(e,r){return this.adapter.getCheckoutDetails(e,r)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(Y))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),_=(()=>{class t{constructor(e,r,o,c,a,l){this.activeCartFacade=e,this.userIdService=r,this.eventService=o,this.commandService=c,this.checkoutDeliveryAddressConnector=a,this.checkoutQueryFacade=l,this.createDeliveryAddressCommand=this.commandService.create(v=>this.checkoutPreconditions().pipe((0,g.w)(([u,d])=>this.checkoutDeliveryAddressConnector.createAddress(u,d,v).pipe((0,p.U)(h=>(h.titleCode=v.titleCode,v.region?.isocodeShort&&(h.region={...h.region,isocodeShort:v.region.isocodeShort}),h)),(0,P.b)(h=>this.eventService.dispatch({userId:u,cartId:d,address:h},y.vz))))),{strategy:n.flE.CancelPrevious}),this.setDeliveryAddressCommand=this.commandService.create(v=>this.checkoutPreconditions().pipe((0,g.w)(([u,d])=>{const h=v.id;if(!h)throw new Error("Checkout conditions not met");return this.checkoutDeliveryAddressConnector.setAddress(u,d,h).pipe((0,P.b)(()=>{this.eventService.dispatch({userId:u,cartId:d,address:v},y.oz)}))})),{strategy:n.flE.CancelPrevious}),this.clearDeliveryAddressCommand=this.commandService.create(()=>this.checkoutPreconditions().pipe((0,g.w)(([v,u])=>this.checkoutDeliveryAddressConnector.clearCheckoutDeliveryAddress(v,u).pipe((0,P.b)(()=>{this.eventService.dispatch({userId:v,cartId:u},y.eb)})))),{strategy:n.flE.CancelPrevious})}checkoutPreconditions(){return(0,F.aj)([this.userIdService.takeUserId(),this.activeCartFacade.takeActiveCartId(),this.activeCartFacade.isGuestCart()]).pipe((0,E.q)(1),(0,p.U)(([e,r,o])=>{if(!e||!r||e===n.Fds&&!o)throw new Error("Checkout conditions not met");return[e,r]}))}getDeliveryAddressState(){return this.checkoutQueryFacade.getCheckoutDetailsState().pipe((0,p.U)(e=>({...e,data:e.data?.deliveryAddress})))}createAndSetAddress(e){return this.createDeliveryAddressCommand.execute(e)}setDeliveryAddress(e){return this.setDeliveryAddressCommand.execute(e)}clearCheckoutDeliveryAddress(){return this.clearDeliveryAddressCommand.execute()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(D.bu),s.LFG(n.XBV),s.LFG(n.POd),s.LFG(n.VDr),s.LFG(x),s.LFG(y.nh))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),H=(()=>{class t{constructor(e,r,o,c,a,l,v){this.activeCartFacade=e,this.userIdService=r,this.eventService=o,this.queryService=c,this.commandService=a,this.checkoutDeliveryModesConnector=l,this.checkoutQueryFacade=v,this.supportedDeliveryModesQuery=this.queryService.create(()=>this.checkoutPreconditions().pipe((0,g.w)(([u,d])=>this.checkoutDeliveryModesConnector.getSupportedModes(u,d))),{reloadOn:this.getCheckoutSupportedDeliveryModesQueryReloadEvents(),resetOn:this.getCheckoutSupportedDeliveryModesQueryResetEvents()}),this.setDeliveryModeCommand=this.commandService.create(u=>this.checkoutPreconditions().pipe((0,g.w)(([d,h])=>this.checkoutDeliveryModesConnector.setMode(d,h,u).pipe((0,P.b)(()=>{this.eventService.dispatch({userId:d,cartId:h,cartCode:h,deliveryModeCode:u},y.VG)})))),{strategy:n.flE.CancelPrevious}),this.clearDeliveryModeCommand=this.commandService.create(()=>this.checkoutPreconditions().pipe((0,g.w)(([u,d])=>this.checkoutDeliveryModesConnector.clearCheckoutDeliveryMode(u,d).pipe((0,P.b)(()=>{this.eventService.dispatch({userId:u,cartId:d,cartCode:d},y.Yy)}),(0,f.K)(h=>(this.eventService.dispatch({userId:u,cartId:d,cartCode:d},y.s7),(0,m._)(h)))))),{strategy:n.flE.CancelPrevious})}getCheckoutSupportedDeliveryModesQueryReloadEvents(){return[y.f2]}getCheckoutSupportedDeliveryModesQueryResetEvents(){return[y.Nw]}checkoutPreconditions(){return(0,F.aj)([this.userIdService.takeUserId(),this.activeCartFacade.takeActiveCartId(),this.activeCartFacade.isGuestCart()]).pipe((0,E.q)(1),(0,p.U)(([e,r,o])=>{if(!e||!r||e===n.Fds&&!o)throw new Error("Checkout conditions not met");return[e,r]}))}getSupportedDeliveryModesState(){return this.supportedDeliveryModesQuery.getState()}getSupportedDeliveryModes(){return this.getSupportedDeliveryModesState().pipe((0,p.U)(e=>e.data??[]))}getSelectedDeliveryModeState(){return this.checkoutQueryFacade.getCheckoutDetailsState().pipe((0,p.U)(e=>({...e,data:e.data?.deliveryMode})))}setDeliveryMode(e){return this.setDeliveryModeCommand.execute(e)}clearCheckoutDeliveryMode(){return this.clearDeliveryModeCommand.execute()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(D.bu),s.LFG(n.XBV),s.LFG(n.POd),s.LFG(n._7J),s.LFG(n.VDr),s.LFG(B),s.LFG(y.nh))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),V=(()=>{class t{constructor(e,r,o,c,a,l,v){this.activeCartFacade=e,this.userIdService=r,this.queryService=o,this.commandService=c,this.eventService=a,this.checkoutPaymentConnector=l,this.checkoutQueryFacade=v,this.paymentCardTypesQuery=this.queryService.create(()=>this.checkoutPaymentConnector.getPaymentCardTypes(),{reloadOn:this.getCheckoutPaymentCardTypesQueryReloadEvents(),resetOn:this.getCheckoutPaymentCardTypesQueryResetEvents()}),this.createPaymentMethodCommand=this.commandService.create(u=>this.checkoutPreconditions().pipe((0,g.w)(([d,h])=>this.checkoutPaymentConnector.createPaymentDetails(d,h,u).pipe((0,P.b)(M=>this.eventService.dispatch({userId:d,cartId:h,paymentDetails:M},y.y6))))),{strategy:n.flE.CancelPrevious}),this.setPaymentMethodCommand=this.commandService.create(u=>this.checkoutPreconditions().pipe((0,g.w)(([d,h])=>{const M=u?.id;if(!M)throw new Error("Checkout conditions not met");return this.checkoutPaymentConnector.setPaymentDetails(d,h,M).pipe((0,P.b)(()=>this.eventService.dispatch({userId:d,cartId:h,paymentDetailsId:M},y.WB)))})),{strategy:n.flE.CancelPrevious})}getCheckoutPaymentCardTypesQueryReloadEvents(){return[y.vk]}getCheckoutPaymentCardTypesQueryResetEvents(){return[y.B7]}checkoutPreconditions(){return(0,F.aj)([this.userIdService.takeUserId(),this.activeCartFacade.takeActiveCartId(),this.activeCartFacade.isGuestCart()]).pipe((0,E.q)(1),(0,p.U)(([e,r,o])=>{if(!e||!r||e===n.Fds&&!o)throw new Error("Checkout conditions not met");return[e,r]}))}getPaymentCardTypesState(){return this.paymentCardTypesQuery.getState()}getPaymentCardTypes(){return this.getPaymentCardTypesState().pipe((0,p.U)(e=>e.data??[]))}getPaymentDetailsState(){return this.checkoutQueryFacade.getCheckoutDetailsState().pipe((0,p.U)(e=>({...e,data:e.data?.paymentInfo})))}createPaymentDetails(e){return this.createPaymentMethodCommand.execute(e)}setPaymentDetails(e){return this.setPaymentMethodCommand.execute(e)}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(D.bu),s.LFG(n.XBV),s.LFG(n._7J),s.LFG(n.VDr),s.LFG(n.POd),s.LFG(Q),s.LFG(y.nh))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),j=(()=>{class t{constructor(e,r,o,c){this.activeCartFacade=e,this.userIdService=r,this.queryService=o,this.checkoutConnector=c,this.checkoutQuery$=this.queryService.create(()=>this.checkoutPreconditions().pipe((0,g.w)(([a,l])=>this.checkoutConnector.getCheckoutDetails(a,l))),{reloadOn:this.getCheckoutQueryReloadEvents(),resetOn:this.getCheckoutQueryResetEvents()})}getCheckoutQueryReloadEvents(){return[y.xs]}getCheckoutQueryResetEvents(){return[y.$M]}checkoutPreconditions(){return(0,F.aj)([this.userIdService.takeUserId(),this.activeCartFacade.takeActiveCartId(),this.activeCartFacade.isGuestCart()]).pipe((0,E.q)(1),(0,p.U)(([e,r,o])=>{if(!e||!r||e===n.Fds&&!o)throw new Error("Checkout conditions not met");return[e,r]}))}getCheckoutDetailsState(){return this.checkoutQuery$.getState()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(D.bu),s.LFG(n.XBV),s.LFG(n._7J),s.LFG($))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const ae=[_,{provide:y.ys,useExisting:_},H,{provide:y.BG,useExisting:H},V,{provide:y.Tx,useExisting:V},j,{provide:y.nh,useExisting:j}];let K=(()=>{class t extends n.FRf{constructor(e,r,o){super(),this.translationService=e,this.activeCartFacade=r,this.basePageMetaResolver=o,this.pageType=n.GV4.CONTENT_PAGE,this.pageTemplate="MultiStepCheckoutSummaryPageTemplate"}resolveTitle(){return this.basePageMetaResolver.resolveTitle()}resolveHeading(){return this.translationService.translate("pageMetaResolver.checkout.title")}resolveDescription(){return this.basePageMetaResolver.resolveDescription()}resolveRobots(){return this.basePageMetaResolver.resolveRobots()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(n.D7D),s.LFG(D.bu),s.LFG(n.MkU))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),de=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[...ae,x,B,Q,$,K,{provide:n.FRf,useExisting:K,multi:!0}]}),t})();const ue=new s.OlP("DeliveryModeNormalizer"),he=new s.OlP("PaymentDetailsSerializer"),ye=new s.OlP("PaymentCardTypeNormalizer"),pe=new s.OlP("CheckoutNormalizer");var le=C(373),W=C(1709);let ve=(()=>{class t{constructor(e,r,o){this.http=e,this.occEndpoints=r,this.converter=o}createAddress(e,r,o){return o=this.converter.convert(o,n.O9k),this.http.post(this.getCreateDeliveryAddressEndpoint(e,r),o,{headers:(new k.WM).set("Content-Type","application/json")}).pipe((0,f.K)(c=>(0,m._)((0,n.cxH)(c))),(0,n.twT)({shouldRetry:n.Pzz}),this.converter.pipeable(n.jo8))}getCreateDeliveryAddressEndpoint(e,r){return this.occEndpoints.buildUrl("createDeliveryAddress",{urlParams:{userId:e,cartId:r}})}setAddress(e,r,o){return this.http.put(this.getSetDeliveryAddressEndpoint(e,r,o),{}).pipe((0,f.K)(c=>(0,m._)((0,n.cxH)(c))),(0,n.twT)({shouldRetry:n.Pzz}))}getSetDeliveryAddressEndpoint(e,r,o){return this.occEndpoints.buildUrl("setDeliveryAddress",{urlParams:{userId:e,cartId:r},queryParams:{addressId:o}})}clearCheckoutDeliveryAddress(e,r){return this.http.delete(this.getRemoveDeliveryAddressEndpoint(e,r)).pipe((0,f.K)(o=>(0,m._)((0,n.cxH)(o))),(0,n.twT)({shouldRetry:n.Pzz}))}getRemoveDeliveryAddressEndpoint(e,r){return this.occEndpoints.buildUrl("removeDeliveryAddress",{urlParams:{userId:e,cartId:r}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(k.eN),s.LFG(n.Lz0),s.LFG(n.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),Ce=(()=>{class t{constructor(e,r,o){this.http=e,this.occEndpoints=r,this.converter=o}setMode(e,r,o){return this.http.put(this.getSetDeliveryModeEndpoint(e,r,o),{}).pipe((0,f.K)(c=>(0,m._)((0,n.cxH)(c))),(0,n.twT)({shouldRetry:n.Pzz}))}getSetDeliveryModeEndpoint(e,r,o){return this.occEndpoints.buildUrl("setDeliveryMode",{urlParams:{userId:e,cartId:r},queryParams:{deliveryModeId:o}})}getSupportedModes(e,r){return this.http.get(this.getDeliveryModesEndpoint(e,r)).pipe((0,f.K)(o=>(0,m._)((0,n.cxH)(o))),(0,n.twT)({shouldRetry:n.Pzz}),(0,le.j)("deliveryModes"),(0,p.U)(o=>o??[]),this.converter.pipeableMany(ue))}getDeliveryModesEndpoint(e,r){return this.occEndpoints.buildUrl("deliveryModes",{urlParams:{userId:e,cartId:r}})}clearCheckoutDeliveryMode(e,r){return this.http.delete(this.getClearDeliveryModeEndpoint(e,r)).pipe((0,f.K)(o=>(0,m._)((0,n.cxH)(o))),(0,n.twT)({shouldRetry:n.Pzz}))}getClearDeliveryModeEndpoint(e,r){return this.occEndpoints.buildUrl("clearDeliveryMode",{urlParams:{userId:e,cartId:r}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(k.eN),s.LFG(n.Lz0),s.LFG(n.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),me=(()=>{class t{constructor(e,r,o){this.http=e,this.occEndpoints=r,this.converter=o,typeof DOMParser<"u"&&(this.domparser=new DOMParser)}createPaymentDetails(e,r,o){return o=this.converter.convert(o,he),this.getProviderSubInfo(e,r).pipe((0,p.U)(c=>{const a=this.convertToMap(c.mappingLabels.entry);return{url:c.postUrl,parameters:this.getParamsForPaymentProvider(o,c.parameters.entry,a),mappingLabels:a}}),(0,W.zg)(c=>this.createSubWithProvider(c.url,c.parameters).pipe((0,p.U)(a=>this.extractPaymentDetailsFromHtml(a)),(0,W.zg)(a=>(a.defaultPayment=o.defaultPayment??!1,a.savePaymentInfo=!0,this.createDetailsWithParameters(e,r,a).pipe((0,f.K)(l=>(0,m._)((0,n.cxH)(l))),(0,n.twT)({shouldRetry:n.Pzz}),this.converter.pipeable(n.EM5)))))))}setPaymentDetails(e,r,o){return this.http.put(this.getSetPaymentDetailsEndpoint(e,r,o),{}).pipe((0,f.K)(c=>(0,m._)((0,n.cxH)(c))),(0,n.twT)({shouldRetry:n.Pzz}))}getSetPaymentDetailsEndpoint(e,r,o){return this.occEndpoints.buildUrl("setCartPaymentDetails",{urlParams:{userId:e,cartId:r},queryParams:{paymentDetailsId:o}})}getPaymentCardTypes(){return this.http.get(this.getPaymentCardTypesEndpoint()).pipe((0,f.K)(e=>(0,m._)((0,n.cxH)(e))),(0,n.twT)({shouldRetry:n.Pzz}),(0,p.U)(e=>e.cardTypes??[]),this.converter.pipeableMany(ye))}getPaymentCardTypesEndpoint(){return this.occEndpoints.buildUrl("cardTypes")}getProviderSubInfo(e,r){return this.http.get(this.getPaymentProviderSubInfoEndpoint(e,r)).pipe((0,f.K)(o=>(0,m._)((0,n.cxH)(o))),(0,n.twT)({shouldRetry:n.Pzz}))}getPaymentProviderSubInfoEndpoint(e,r){return this.occEndpoints.buildUrl("paymentProviderSubInfo",{urlParams:{userId:e,cartId:r}})}createSubWithProvider(e,r){const o=new k.WM({"Content-Type":"application/x-www-form-urlencoded",Accept:"text/html"});let c=new k.LE({encoder:new n.qug});return Object.keys(r).forEach(a=>{c=c.append(a,r[a])}),this.http.post(e,c,{headers:o,responseType:"text"}).pipe((0,f.K)(a=>(0,m._)((0,n.cxH)(a))),(0,n.twT)({shouldRetry:n.Pzz}))}createDetailsWithParameters(e,r,o){let c=new k.LE({encoder:new n.qug});Object.keys(o).forEach(l=>{c=c.append(l,o[l])});const a=new k.WM({"Content-Type":"application/x-www-form-urlencoded"});return this.http.post(this.getCreatePaymentDetailsEndpoint(e,r),c,{headers:a}).pipe((0,f.K)(l=>(0,m._)((0,n.cxH)(l))),(0,n.twT)({shouldRetry:n.Pzz}))}getCreatePaymentDetailsEndpoint(e,r){return this.occEndpoints.buildUrl("createPaymentDetails",{urlParams:{userId:e,cartId:r}})}getParamsForPaymentProvider(e,r,o){const c=this.convertToMap(r);return c[o.hybris_account_holder_name]=e.accountHolderName,c[o.hybris_card_type]=e.cardType?.code,c[o.hybris_card_number]=e.cardNumber,"true"===o.hybris_combined_expiry_date?c[o.hybris_card_expiry_date]=e.expiryMonth+o.hybris_separator_expiry_date+e.expiryYear:(c[o.hybris_card_expiration_month]=e.expiryMonth,c[o.hybris_card_expiration_year]=e.expiryYear),c[o.hybris_card_cvn]=e.cvn,c[o.hybris_billTo_country]=e.billingAddress?.country?.isocode,c[o.hybris_billTo_firstname]=e.billingAddress?.firstName,c[o.hybris_billTo_lastname]=e.billingAddress?.lastName,c[o.hybris_billTo_street1]=e.billingAddress?.line1+" "+e.billingAddress?.line2,c[o.hybris_billTo_city]=e.billingAddress?.town,c[o.hybris_billTo_region]=e.billingAddress?.region?e.billingAddress.region.isocodeShort:"",c[o.hybris_billTo_postalcode]=e.billingAddress?.postalCode,c}extractPaymentDetailsFromHtml(e){const c=this.domparser.parseFromString(e,"text/xml").getElementsByTagName("form")[0].getElementsByTagName("input"),a={};for(let l=0;c[l];l++){const v=c[l],u=v.getAttribute("name"),d=v.getAttribute("value");u&&"{}"!==u&&d&&""!==d&&(a[u]=d)}return a}convertToMap(e){return e.reduce(function(r,o){return r[o.key]=o.value,r},{})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(k.eN),s.LFG(n.Lz0),s.LFG(n.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})(),fe=(()=>{class t{constructor(e,r,o){this.http=e,this.occEndpoints=r,this.converter=o}getCheckoutDetails(e,r){return this.http.get(this.getGetCheckoutDetailsEndpoint(e,r)).pipe((0,f.K)(o=>(0,m._)((0,n.cxH)(o))),(0,n.twT)({shouldRetry:n.Pzz}),this.converter.pipeable(pe))}getGetCheckoutDetailsEndpoint(e,r){return this.occEndpoints.buildUrl("getCheckoutDetails",{urlParams:{userId:e,cartId:r}})}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(k.eN),s.LFG(n.Lz0),s.LFG(n.IXI))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const ke={backend:{occ:{endpoints:{setDeliveryAddress:"users/${userId}/carts/${cartId}/addresses/delivery",cardTypes:"cardtypes",createDeliveryAddress:"users/${userId}/carts/${cartId}/addresses/delivery",removeDeliveryAddress:"users/${userId}/carts/${cartId}/addresses/delivery",deliveryMode:"users/${userId}/carts/${cartId}/deliverymode",setDeliveryMode:"users/${userId}/carts/${cartId}/deliverymode",clearDeliveryMode:"users/${userId}/carts/${cartId}/deliverymode",deliveryModes:"users/${userId}/carts/${cartId}/deliverymodes",setCartPaymentDetails:"users/${userId}/carts/${cartId}/paymentdetails",paymentProviderSubInfo:"users/${userId}/carts/${cartId}/payment/sop/request?responseUrl=sampleUrl",createPaymentDetails:"users/${userId}/carts/${cartId}/payment/sop/response",getCheckoutDetails:"users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL)"}}}};let ge=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[(0,n.i51)(ke),{provide:Y,useClass:fe},{provide:U,useClass:ve},{provide:I,useClass:Ce},{provide:N,useClass:me}],imports:[R.ez]}),t})(),Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[ie.D6,de,ge]}),t})(),De=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[Pe,ce]}),t})()}}]);