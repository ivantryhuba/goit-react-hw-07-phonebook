(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{63:function(n,t,e){},64:function(n,t,e){"use strict";e.r(t);var c,o=e(0),r=e.n(o),a=e(14),i=e.n(a),b=e(8),u=e(65),l=e(10),s=function(n){return n.contactList.contacts},d=function(n){return n.contactList.filter},j=Object(l.a)([s,d],(function(n,t){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e)}))})),p=e(2),f=e(3),h=f.a.div(c||(c=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n  margin-bottom: 15px;\n\n  width: 500px;\n  padding: 10px;\n\n  border: 2px solid red;\n  border-radius: 20px;\n"]))),x=e(1),m=function(n){var t=n.children;return Object(x.jsx)(h,{children:t})},O=e(19),g=e(13),v=e.n(g),w=e(4),y=Object(w.b)("contacts/fetchContactsRequest"),C=Object(w.b)("contacts/fetchContactsSuccess"),k=Object(w.b)("contacts/fetchContactsError"),z=Object(w.b)("contacts/addContactRequest"),L=Object(w.b)("contacts/addContactSuccess"),q=Object(w.b)("contacts/addContactError"),S=Object(w.b)("contacts/removeContactRequest"),R=Object(w.b)("contacts/removeContactSuccess"),A=Object(w.b)("contacts/removeContactError"),F=Object(w.b)("contacts/changeFilter");v.a.defaults.baseURL="http://localhost:5555";var B,E,J,Z,M,N,P,Y,D,I,T=f.a.form(B||(B=Object(p.a)(["\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n"]))),U=f.a.label(E||(E=Object(p.a)(["\n  display: block;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n"]))),$=f.a.input(J||(J=Object(p.a)(["\n  width: 250px;\n  margin-bottom: 15px;\n  padding: 10px;\n  border: 2px solid green;\n  border-radius: 10px;\n"]))),G=f.a.button(Z||(Z=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n\n  font-size: 15px;\n  font-weight: 700;\n\n  background-color: orange;\n  border: 2px solid green;\n  border-radius: 20px;\n\n  cursor: pointer;\n\n  &:hover {\n    color: white;\n    border-color: orange;\n    background-color: green;\n  }\n"]))),H=Object(b.b)((function(n){return{contacts:n.contactList.contacts}}),(function(n){return{onSubmit:function(t){return n(function(n){return function(t){t(z()),v.a.post("/contacts",n).then((function(n){var e=n.data;return t(L(e))})).catch((function(n){return t(q(n))}))}}(t))}}}))((function(n){var t=n.contacts,e=n.onSubmit,c=Object(o.useState)(""),r=Object(O.a)(c,2),a=r[0],i=r[1],b=Object(o.useState)(""),l=Object(O.a)(b,2),s=l[0],d=l[1],j=function(n){var t=n.currentTarget,e=t.name,c=t.value;switch(e){case"name":i(c);break;case"number":d(c);break;default:return}},p=Object(u.a)(),f=Object(u.a)();return Object(x.jsxs)(T,{onSubmit:function(n){n.preventDefault(),t.some((function(t){return t.name.toLowerCase()===n.target.name.value.toLowerCase()}))?alert("You have contact with this name, please remove old contact and create new"):(e({name:a,number:s}),i(""),d(""))},children:[Object(x.jsx)(U,{htmlFor:p,children:"Name"}),Object(x.jsx)($,{id:p,type:"text",name:"name",placeholder:"Jason Born",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:a,onChange:j,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(x.jsx)(U,{htmlFor:f,children:"Number"}),Object(x.jsx)($,{id:f,type:"tel",name:"number",placeholder:"+44-787-123-45-67",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:s,onChange:j,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(x.jsx)(G,{type:"submit",children:"Add contact"})]})})),K=f.a.p(M||(M=Object(p.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  color: OrangeRed;\n"]))),Q=function(n){var t=n.text;return Object(x.jsx)(K,{children:t})},V=f.a.ul(N||(N=Object(p.a)(["\n  width: 100%;\n  margin-top: 10px;\n  padding: 15px;\n  font-size: 40px;\n  font-weight: 700;\n  color: black;\n"]))),W=f.a.li(P||(P=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),X=f.a.button(Y||(Y=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 75px;\n  margin-left: auto;\n  padding: 5px;\n\n  font-size: 15px;\n  font-weight: 500;\n\n  background-color: Orange;\n  border: 2px solid orangered;\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover {\n    color: white;\n    border-color: black;\n    background-color: orangered;\n  }\n"]))),_=Object(b.b)((function(n){return{contacts:j(n)}}),(function(n){return{onRemoveContact:function(t){return n((e=t,function(n){n(S()),v.a.delete("/contacts/".concat(e)).then((function(){return n(R(e))})).catch((function(t){return n(A(t))}))}));var e}}}))((function(n){var t=n.contacts,e=n.onRemoveContact,c=Object(b.c)();return Object(o.useEffect)((function(){c((function(n){n(y()),v.a.get("/contacts").then((function(t){var e=t.data;return n(C(e))})).catch((function(t){return n(k(t))}))}))}),[c]),Object(x.jsx)(x.Fragment,{children:t.length>0?Object(x.jsx)(V,{children:t.map((function(n){var t=n.id,c=n.name,o=n.number;return Object(x.jsxs)(W,{children:[c," : ",o,Object(x.jsx)(X,{type:"button",onClick:function(){return e(t)},children:"Remove"})]},t)}))}):Object(x.jsx)(Q,{text:"You don`t have any contacts"})})})),nn=e(18),tn=e(30),en=f.a.label(D||(D=Object(p.a)(["\n  display: block;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n"]))),cn=f.a.input(I||(I=Object(p.a)(["\n  width: 250px;\n  margin-bottom: 15px;\n  padding: 10px;\n  border: 2px solid green;\n  border-radius: 10px;\n"]))),on=["id","type","label","name","placeholder","value","onChange","title","required"],rn=function(n){var t=n.id,e=n.type,c=n.label,o=n.name,r=n.placeholder,a=n.value,i=n.onChange,b=n.title,u=n.required,l=Object(tn.a)(n,on);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(en,{htmlFor:t,children:c}),Object(x.jsx)(cn,Object(nn.a)(Object(nn.a)({id:t,type:e,name:o},l),{},{placeholder:r,value:a,onChange:i,title:b,required:u}))]})};rn.defaultProps={type:"text",placeholder:"",title:"",required:!1};var an,bn,un,ln=Object(b.b)((function(n){return{value:d(n)}}),(function(n){return{onChange:function(t){return n(F(t.target.value))}}}))(rn),sn=f.a.h1(an||(an=Object(p.a)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  font-size: 40px;\n  font-weight: 700;\n  color: black;\n"]))),dn=f.a.h2(bn||(bn=Object(p.a)(["\n  display: block;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: 700;\n  color: black;\n"]))),jn=Object(b.b)((function(n){return{contacts:s(n)}}))((function(n){var t=n.contacts;return Object(x.jsxs)(m,{children:[Object(x.jsx)(sn,{children:"PhoneBook"}),Object(x.jsx)(dn,{children:"Add contact"}),Object(x.jsx)(H,{}),Object(x.jsx)(dn,{children:"Contacts"}),t.length>0&&Object(x.jsx)(ln,{id:Object(u.a)(),label:"Find contacts by name",placeholder:"Boris Britva",name:"search"}),Object(x.jsx)(_,{})]})})),pn=e(7),fn=e(9),hn=e(29),xn=Object(w.c)([],(un={},Object(fn.a)(un,C,(function(n,t){return t.payload})),Object(fn.a)(un,L,(function(n,t){var e=t.payload;return[].concat(Object(hn.a)(n),[e])})),Object(fn.a)(un,R,(function(n,t){var e=t.payload;return n.filter((function(n){return n.id!==e}))})),un)),mn=Object(w.c)("",Object(fn.a)({},F,(function(n,t){return t.payload}))),On=Object(pn.b)({contacts:xn,filter:mn}),gn=e(28),vn=e.n(gn),wn=Object(pn.b)({contactList:On});console.log("production");var yn=Object(w.a)({reducer:wn,middleware:function(n){return n().concat(vn.a)}});e(62),e(63);i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(b.a,{store:yn,children:Object(x.jsx)(jn,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.2bae6ee9.chunk.js.map