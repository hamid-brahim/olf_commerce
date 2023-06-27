"use strict";(self.webpackChunkolf=self.webpackChunkolf||[]).push([[592],{1277:(D,_,s)=>{s.r(_),s.d(_,{AddToCartComponent:()=>h,AddToCartModule:()=>g});var t=s(4650),a=s(4006),l=s(3749),c=s(6322),C=s(4850),m=s(2198),f=s(2986),d=s(4777),p=s(6895);function T(n,i){if(1&n&&t._UZ(0,"cx-item-counter",9),2&n){const o=t.oxw(3);t.Q6J("max",o.maxQuantity)("control",o.addToCartForm.get("quantity"))}}function v(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.Oqu(o.getInventory())}}function x(n,i){if(1&n&&(t.TgZ(0,"div",4)(1,"label"),t._uU(2),t.ALo(3,"cxTranslate"),t.qZA(),t.TgZ(4,"div",5),t.YNc(5,T,1,2,"cx-item-counter",6),t.TgZ(6,"span",7),t.YNc(7,v,2,1,"span",8),t.ALo(8,"async"),t._uU(9),t.ALo(10,"cxTranslate"),t.ALo(11,"cxTranslate"),t.qZA()()()),2&n){const o=t.oxw(2);t.xp6(2),t.Oqu(t.lcZ(3,4,"addToCart.quantity")),t.xp6(3),t.Q6J("ngIf",o.hasStock),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,6,o.showInventory$)),t.xp6(2),t.hij(" ",o.hasStock?t.lcZ(10,8,"addToCart.inStock"):t.lcZ(11,10,"addToCart.outOfStock"),"")}}function y(n,i){if(1&n&&(t.TgZ(0,"button",10),t._uU(1),t.ALo(2,"cxTranslate"),t.qZA()),2&n){const o=t.oxw(2);let e;t.Q6J("ngClass",null!=o.options&&o.options.displayAddToCart?"link cx-action-link":"btn btn-primary btn-block")("disabled",o.quantity<=0||o.quantity>o.maxQuantity),t.xp6(1),t.hij(" ",null!==(e=null==o.options?null:o.options.addToCartString)&&void 0!==e?e:t.lcZ(2,3,"addToCart.addToCart")," ")}}function A(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"form",1),t.NdJ("submit",function(){t.CHM(o);const u=t.oxw();return t.KtG(u.addToCart())}),t.YNc(1,x,12,12,"div",2),t.YNc(2,y,3,5,"button",3),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("formGroup",o.addToCartForm),t.xp6(1),t.Q6J("ngIf",o.showQuantity),t.xp6(1),t.Q6J("ngIf",o.hasStock)}}let h=(()=>{class n{constructor(o,e,u,r,E,I){this.currentProductService=o,this.cd=e,this.activeCartService=u,this.component=r,this.eventService=E,this.productListItemContext=I,this.showQuantity=!0,this.hasStock=!1,this.inventoryThreshold=!1,this.showInventory$=this.component?.data$.pipe((0,C.U)(O=>O.inventoryDisplay)),this.quantity=1,this.addToCartForm=new a.nJ({quantity:new a.p4(1,{updateOn:"blur"})})}ngOnInit(){this.product?(this.productCode=this.product.code??"",this.setStockInfo(this.product),this.cd.markForCheck()):this.productCode?(this.quantity=1,this.hasStock=!0,this.cd.markForCheck()):this.subscription=(this.productListItemContext?this.productListItemContext.product$:this.currentProductService.getProduct()).pipe((0,m.h)(c.jWE)).subscribe(o=>{this.productCode=o.code??"",this.setStockInfo(o),this.cd.markForCheck()})}setStockInfo(o){this.quantity=1,this.hasStock=Boolean("outOfStock"!==o.stock?.stockLevelStatus),this.inventoryThreshold=o.stock?.isValueRounded??!1,this.hasStock&&o.stock?.stockLevel&&(this.maxQuantity=o.stock.stockLevel),this.productListItemContext&&(this.showQuantity=!1)}getInventory(){if(this.hasStock){const o=this.maxQuantity?this.maxQuantity.toString():"";return this.inventoryThreshold?o+"+":o}return""}updateCount(o){this.quantity=o}addToCart(){const o=this.addToCartForm.get("quantity")?.value;!this.productCode||o<=0||this.activeCartService.getEntries().pipe((0,f.q)(1)).subscribe(e=>{this.activeCartService.addEntry(this.productCode,o),this.eventService.dispatch(this.createCartUiEventAddToCart(this.productCode,o,e.length))})}createCartUiEventAddToCart(o,e,u){const r=new l.wj;return r.productCode=o,r.quantity=e,r.numberOfEntriesBeforeAdd=u,r}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d.pHG),t.Y36(t.sBO),t.Y36(l.bu),t.Y36(d.exf),t.Y36(c.POd),t.Y36(d.Z6X,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cx-add-to-cart"]],inputs:{productCode:"productCode",showQuantity:"showQuantity",options:"options",product:"product"},decls:1,vars:1,consts:[[3,"formGroup","submit",4,"ngIf"],[3,"formGroup","submit"],["class","quantity",4,"ngIf"],["type","submit",3,"ngClass","disabled",4,"ngIf"],[1,"quantity"],[1,"cx-counter-stock"],[3,"max","control",4,"ngIf"],[1,"info"],[4,"ngIf"],[3,"max","control"],["type","submit",3,"ngClass","disabled"]],template:function(o,e){1&o&&t.YNc(0,A,3,3,"form",0),2&o&&t.Q6J("ngIf",e.productCode)},dependencies:[p.mk,p.O5,a._Y,a.JL,a.sg,d.odZ,p.Ov,c.X$D],encapsulation:2,changeDetection:0}),n})(),g=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[(0,c.i51)({cmsComponents:{ProductAddToCartComponent:{component:h,data:{inventoryDisplay:!1}}}})],imports:[p.ez,a.UX,c.LUR,d.Td$]}),n})()}}]);