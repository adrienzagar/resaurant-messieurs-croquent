(this.webpackJsonpbackoffice=this.webpackJsonpbackoffice||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/logo-brand.f8d6ce72.png"},111:function(e,t,a){e.exports=a(265)},120:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},140:function(e,t,a){},142:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),s=a(18),m=a(3);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(120),a(121);var i=a(2),u=(a(122),a(102)),l=a.n(u),d=(a(123),function(e){var t=e.getLogin,a=e.errorLog,r=e.username,o=e.password,s=e.setPasswordValue,m=e.setUsernameValue;Object(n.useEffect)((function(){document.title="Messieurs Croquent || Back Office - Connexion"}),[]);return c.a.createElement("div",{className:"login"},c.a.createElement("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),t()}},c.a.createElement("img",{src:l.a,alt:"brand",className:"login__brand"}),c.a.createElement("input",{value:r,onChange:function(e){m(e.target.value)},type:"text",className:"login__email",placeholder:"Utilisateur"}),c.a.createElement("input",{value:o,onChange:function(e){s(e.target.value)},type:"password",className:"login__password",placeholder:"Mot de passe"}),c.a.createElement("p",{className:a?"login__error":"login__error--none"},"Votre nom d'utilisateur ou votre mot de passe est incorrect"),c.a.createElement("button",{type:"submit",className:"login__submit"},"Se connecter")))}),p=Object(m.b)((function(e){return{username:e.login.username,password:e.login.password,errorLog:e.login.errorLog}}),(function(e){return{getLogin:function(){return e({type:"GET_LOGIN"})},setUsernameValue:function(t){return e(function(e){return{type:"SET_USERNAME_VALUE",username:e}}(t))},setPasswordValue:function(t){return e(function(e){return{type:"SET_PASSWORD_VALUE",password:e}}(t))}}}))(d),f=(a(124),function(e){var t=e.getLogout,a=e.getStatus,r=e.modifyStatus,o=e.editStatus,s=e.status,m=e.isOpen;Object(n.useEffect)((function(){a()}));return c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__title"},"MESSIEURS CROQUENT - BackOffice"),c.a.createElement("button",{className:m?"header__open":"header__close",onClick:function(){"FERM\xc9"===s?r("OUVERT",!0):"OUVERT"===s&&r("FERM\xc9",!1),o()}},c.a.createElement("i",{className:"fa fa-clock"}),m?"OUVERT":"FERM\xc9"),c.a.createElement("button",{className:"header__logout",onClick:function(){t(),window.sessionStorage.clear()}},c.a.createElement("i",{className:"fas fa-power-off"}),"D\xe9connexion"))}),_=function(e,t){return{type:"SAVE_STATUS",status:e,bool:t}},E=Object(m.b)((function(e){return{isOpen:e.header.isOpen,status:e.header.status}}),(function(e){return{getLogout:function(){return e({type:"GET_LOGOUT"})},getStatus:function(){return e({type:"GET_STATUS"})},editStatus:function(){return e({type:"EDIT_STATUS"})},modifyStatus:function(t,a){return e(function(e,t){return{type:"MODIFY_STATUS",status:e,bool:t}}(t,a))}}}))(f),h=a(103),g=(a(140),function(e){var t=e.links;return c.a.createElement(h.bubble,null,t.map((function(e){return c.a.createElement(s.b,{key:e.id,to:e.path,activeClassName:"bm-item-selected",exact:!0},c.a.createElement("i",{className:e.icon}),c.a.createElement("span",{className:"bm-item-link"},e.name))})))}),N=Object(m.b)((function(e){return{links:e.sidebar.links}}),(function(e){}))(g),b=(a(142),function(e){var t=e.links;return Object(n.useEffect)((function(){document.title="Messieurs Croquent || Back Office - Accueil"}),[]),c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("h1",{className:"home__title"},"Bienvenue sur votre outil de gestion de commande."),c.a.createElement("p",{className:"home__text"},"Pour consulter les produits ou les commandes en cours du restaurant, cliquer sur un des boutons ci-dessous ou dans le menu d\xe9roulant situ\xe9 sur la gauche"),c.a.createElement("div",{className:"home__link"},c.a.createElement(s.b,{to:t[1].path,exact:!0},c.a.createElement("button",{className:"home__button"},c.a.createElement("i",{className:t[1].icon}),c.a.createElement("span",{className:"bm-item-link"},t[1].name))),c.a.createElement(s.b,{to:t[2].path,exact:!0},c.a.createElement("button",{className:"home__button"},c.a.createElement("i",{className:t[2].icon}),c.a.createElement("span",{className:"bm-item-link"},t[2].name))),c.a.createElement(s.b,{to:t[3].path,exact:!0},c.a.createElement("button",{className:"home__button"},c.a.createElement("i",{className:t[3].icon}),c.a.createElement("span",{className:"bm-item-link"},t[3].name))))))}),v=Object(m.b)((function(e){return{links:e.sidebar.links}}),(function(e){}))(b),O=a(269),S=(a(41),function(e){var t=e.productCurrent;return console.log(t),c.a.createElement("tr",{className:"product__tr"},c.a.createElement("td",{className:"product__image--td"},c.a.createElement("img",{className:"product__image",src:t.picture,alt:"croque"})),c.a.createElement("td",{className:"product__dish--td"},c.a.createElement("p",{className:"product__dish"},t.name)),c.a.createElement("td",{className:"product__category--td"},c.a.createElement("p",{className:"product__category"},t.category.name)),c.a.createElement("td",{className:"product__description--td"},c.a.createElement("p",{className:"product__description"},t.description)),c.a.createElement("td",{className:"product__price--td"},c.a.createElement("p",{className:"product__price"},t.price,"\u20ac")),c.a.createElement("td",{className:"product__satus--td"},c.a.createElement(O.a,{onClick:function(){return console.log("coucou")},toggle:!0,className:"product__status"})),c.a.createElement("td",{className:"product__delete--td"},c.a.createElement("button",{className:"product__delete"},c.a.createElement("i",{class:"fas fa-trash-alt"}))))}),C=function(e){var t=e.categories,a=e.products;return c.a.createElement("div",{className:"product__container"},t.map((function(e){var t=a.filter((function(t){return t.category.id===e.id}));return c.a.createElement("div",{className:"product__byCategory",key:e.id},c.a.createElement("p",{className:"product__titleCategory"},e.name),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",{className:"product__tr"},c.a.createElement("td",{className:"product__image--td"},c.a.createElement("p",{className:"product__image--th"},"Image")),c.a.createElement("td",{className:"product__dish--td"},c.a.createElement("p",{className:"product__dish--th"},"Produit")),c.a.createElement("td",{className:"product__category--td"},c.a.createElement("p",{className:"product__category--th"},"Cat\xe9gorie")),c.a.createElement("td",{className:"product__description--td"},c.a.createElement("p",{className:"product__description--th"},"Description")),c.a.createElement("td",{className:"product__price--td"},c.a.createElement("p",{className:"product__price--th"},"Prix")),c.a.createElement("td",{className:"product__status--td"},c.a.createElement("p",{className:"product__status--th"},"Statut")),c.a.createElement("td",{className:"product__delete--td"},c.a.createElement("p",{className:"product__delete--th"},"Supprimer")))),t.map((function(e){return c.a.createElement("tbody",{key:e.id},c.a.createElement(S,{productCurrent:e}))}))))})))},T=function(e){var t=e.products,a=e.getProduct,r=e.categories,o=e.getCategories;return Object(n.useEffect)((function(){a(),o(),document.title="Messieurs Croquent || Back Office - Produits"}),[]),c.a.createElement("main",{className:"product"},c.a.createElement("h1",{className:"product__title"},"Modifier ou supprimer des produits"),c.a.createElement(C,{categories:r,products:t}))},k=Object(m.b)((function(e,t){return{products:e.product.listProduct,categories:e.product.listCategories}}),(function(e,t){return{getProduct:function(){return e({type:"GET_PRODUCT"})},getCategories:function(){return e({type:"GET_CATEGORIES"})}}}))(T),y=(a(91),function(e){var t=e.getCommand,a=e.commands,r=e.changeStatus,o=e.saveId;Object(n.useEffect)((function(){t()}),[]);return c.a.createElement("div",{className:"command"},a.map((function(e){if(1===e.status)return c.a.createElement("div",{className:"command__container"},c.a.createElement("p",{className:"command__number"},"Commande n\xb0",e.id),c.a.createElement("p",{className:"command__infosUser"},"Informations du client :"),c.a.createElement("div",{className:"command__user"},c.a.createElement("p",{className:"command__infos"},"Pr\xe9nom: ",e.user.firstname),c.a.createElement("p",{className:"command__infos"},"Nom: ",e.user.lastname),c.a.createElement("p",{className:"command__infos"},"Email: ",e.user.email),c.a.createElement("p",{className:"command__infos"},"T\xe9l\xe9phone: 0",e.user.phoneNumber)),c.a.createElement("p",{className:"command__infosCommand"},"D\xe9tail de la commande :"),e.orderLines.map((function(e){return c.a.createElement("p",{className:"command__detail"},e.quantity," ",e.product.name)})),c.a.createElement("p",{className:"command__infosComment"},"Commentaire :"),c.a.createElement("p",{className:"command__comment"},e.comment),c.a.createElement("p",{className:"command__infosPrice"},"Prix total de la commande :"),c.a.createElement("p",{className:"command__price"},e.price," \u20ac"),c.a.createElement("button",{className:"command__archivate",onClick:function(t){!function(e){o(e.id),r()}(e),t.currentTarget.parentNode.classList.add("command__container--none")}},c.a.createElement("i",{className:"fas fa-archive"}),"Archiver"))})))}),w=function(e){var t=e.getCommand,a=e.commands,r=e.changeStatus,o=e.saveId;return Object(n.useEffect)((function(){document.title="Messieurs Croquent || Back Office - Commandes"}),[]),setTimeout((function(){window.location.reload()}),6e4),c.a.createElement("main",{className:"commandList"},c.a.createElement("h1",{className:"commandList__command"},"Les commandes en cours"),c.a.createElement(y,{getCommand:t,commands:a,changeStatus:r,saveId:o}))},A=Object(m.b)((function(e,t){return{commands:e.command.listCommand}}),(function(e,t){return{getCommand:function(){return e({type:"GET_COMMAND"})},changeStatus:function(){return e({type:"CHANGE_STATUS"})},saveId:function(t){return e(function(e){return{type:"SAVE_ID",id:e}}(t))}}}))(w),L=(a(92),function(e){var t=e.getCommand,a=e.commands;return Object(n.useEffect)((function(){t()}),[]),c.a.createElement("div",{className:"archive"},a.map((function(e){if(2===e.status)return c.a.createElement("div",{className:"archive__container"},c.a.createElement("p",{className:"archive__number"},"Commande n\xb0",e.id),c.a.createElement("p",{className:"archive__infosUser"},"Informations du client :"),c.a.createElement("div",{className:"archive__user"},c.a.createElement("p",{className:"archive__infos"},"Pr\xe9nom: ",e.user.firstname),c.a.createElement("p",{className:"archive__infos"},"Nom: ",e.user.lastname),c.a.createElement("p",{className:"archive__infos"},"Email: ",e.user.email),c.a.createElement("p",{className:"archive__infos"},"T\xe9l\xe9phone: 0",e.user.phoneNumber)),c.a.createElement("p",{className:"archive__infosCommand"},"D\xe9tail de la commande :"),e.orderLines.map((function(e){return c.a.createElement("p",{className:"archive__detail"},e.quantity," ",e.product.name)})),c.a.createElement("p",{className:"archive__infosComment"},"Commentaire :"),c.a.createElement("p",{className:"archive__comment"},e.comment),c.a.createElement("p",{className:"archive__infosPrice"},"Prix total de la commande :"),c.a.createElement("p",{className:"archive__price"},e.price," \u20ac"))})))}),G=function(e){var t=e.getCommand,a=e.commands;return Object(n.useEffect)((function(){document.title="Messieurs Croquent || Back Office - Archives"}),[]),c.a.createElement("main",{className:"archiveList"},c.a.createElement("h1",{className:"archiveList__command"},"Les commandes archiv\xe9es"),c.a.createElement(L,{getCommand:t,commands:a}))},U=Object(m.b)((function(e,t){return{commands:e.command.listCommand}}),(function(e,t){return{getCommand:function(){return e({type:"GET_COMMAND"})}}}))(G),j=function(e){var t=e.isLogged,a=e.checkIsLogged;return Object(n.useEffect)((function(){a()}),[]),c.a.createElement("div",{className:"App"},!t&&c.a.createElement(p,null),t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement(N,null),c.a.createElement(i.c,null),c.a.createElement(i.a,{exact:!0,path:"/backoffice",component:v}),c.a.createElement(i.a,{exact:!0,path:"".concat("/backoffice","/produits"),component:k}),c.a.createElement(i.a,{exact:!0,path:"".concat("/backoffice","/commandes"),component:A}),c.a.createElement(i.a,{exact:!0,path:"".concat("/backoffice","/archives"),component:U}),c.a.createElement(i.c,null)))},D=Object(m.b)((function(e){return{isLogged:e.login.isLogged}}),(function(e){return{checkIsLogged:function(){return e({type:"CHECK_IS_LOGGED"})}}}))(j),I=a(20),R=a(4),M={errorLog:!1,isLogged:!1,username:"",password:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_LOGIN":return Object(R.a)({},e);case"CHECK_IS_LOGGED":return void 0!==window.sessionStorage.token?Object(R.a)({},e,{isLogged:!0}):Object(R.a)({},e);case"ERROR_LOGGED":return Object(R.a)({},e,{errorLog:!0});case"GET_LOGOUT":return Object(R.a)({},e,{isLogged:!1});case"SET_USERNAME_VALUE":return Object(R.a)({},e,{username:t.username});case"SET_PASSWORD_VALUE":return Object(R.a)({},e,{password:t.password});default:return e}},V={isOpen:"",status:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"MODIFY_STATUS":case"SAVE_STATUS":return Object(R.a)({},e,{status:t.status,isOpen:t.bool});default:return e}},q={links:[{id:1,name:"Accueil",path:"/backoffice",icon:"fas fa-home"},{id:2,name:"Produits",path:"".concat("/backoffice","/produits"),icon:"fas fa-box"},{id:3,name:"Commandes",path:"".concat("/backoffice","/commandes"),icon:"fas fa-shopping-cart"},{id:4,name:"Archives",path:"".concat("/backoffice","/archives"),icon:"fas fa-archive"}]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e},z={listProduct:[],listCategories:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SAVE_PRODUCT":return Object(R.a)({},e,{listProduct:t.product});case"SAVE_CATEGORIES":return Object(R.a)({},e,{listCategories:t.categories});default:return e}},H={listCommand:[],idCommand:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SAVE_COMMAND":return Object(R.a)({},e,{listCommand:t.command});case"SAVE_ID":return Object(R.a)({},e,{idCommand:t.id});default:return e}},K=Object(I.c)({login:P,header:x,sidebar:B,product:F,command:W}),J=a(12),X=a.n(J),Y=function(e){return function(t){return function(a){switch(a.type){case"GET_PRODUCT":X.a.get("http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/products").then((function(t){e.dispatch({type:"SAVE_PRODUCT",product:t.data})})).catch((function(e){console.log(e)}));break;case"GET_CATEGORIES":X.a.get("http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/categories").then((function(t){e.dispatch({type:"SAVE_CATEGORIES",categories:t.data})})).catch((function(e){console.log(e)}));break;default:t(a)}}}},Q=function(e){return function(t){return function(a){switch(a.type){case"GET_COMMAND":X.a.get("http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/order").then((function(t){e.dispatch({type:"SAVE_COMMAND",command:t.data})})).catch((function(e){console.log(e)}));break;case"CHANGE_STATUS":var n=e.getState().command.idCommand;X.a.put("http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/order/".concat(n),{status:2}).then((function(e){console.log(e,"response")})).catch((function(e){console.log(e)}));break;default:t(a)}}}},$=function(e){return function(t){return function(a){switch(a.type){case"GET_LOGIN":var n=e.getState().login,c=n.username,r=n.password;X.a.post("http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/login",{username:c,password:r}).then((function(t){console.log(t.data.token);var a=t.data.token;window.sessionStorage.setItem("token",a),e.dispatch({type:"CHECK_IS_LOGGED"})})).catch((function(t){e.dispatch({type:"ERROR_LOGGED"}),console.log(t)}));break;default:t(a)}}}},Z=function(e){return function(t){return function(a){switch(a.type){case"EDIT_STATUS":var n=e.getState().header.status;X.a.put("http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/store/1",{status:n}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));break;case"GET_STATUS":X.a.get("http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/store/1").then((function(t){"OUVERT"===t.data.status?e.dispatch(_(t.data.status,!0)):"FERM\xc9"===t.data.status&&e.dispatch(_(t.data.status,!1))})).catch((function(e){console.log(e)}));break;default:t(a)}}}},ee=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d)(Object(I.a)(Y,Q,$,Z)),te=Object(I.e)(K,ee);o.a.render(c.a.createElement(m.a,{store:te},c.a.createElement(s.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.9e49326e.chunk.js.map