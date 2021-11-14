(this.webpackJsonprocketlane=this.webpackJsonprocketlane||[]).push([[0],{12:function(e,t,n){e.exports={emoji:"Emoji_emoji__34hTT",tooltip:"Emoji_tooltip__26tUk"}},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(13),s=n.n(i),c=(n(19),n(10)),o=n(7),u=(n(20),n(3)),d=n.n(u),l=n(5),j=n(14),f=n(2),p=n(0),m=r.a.createContext({users:[],availableReactions:[],usersReactions:[],getAllUsers:function(){},getAllReactions:function(){},getAllUsersReactions:function(){}}),O=function(e){var t={users:[],availableReactions:[],usersReactions:[],isLoading:!1},n=Object(a.useReducer)((function(e,n){if("SET_USERS"===n.type)return Object(f.a)(Object(f.a)({},e),{},{users:n.users});if("SET_REACTIONS"===n.type)return Object(f.a)(Object(f.a)({},e),{},{availableReactions:n.reactions});if("USERS_REACTIONS"===n.type)return Object(f.a)(Object(f.a)({},e),{},{usersReactions:n.reactions});if("ADD_REACTION"===n.type){var a=e.usersReactions;return a=[].concat(Object(j.a)(a),[n.reaction]),Object(f.a)(Object(f.a)({},e),{},{usersReactions:a})}if("LOADING"===n.type){var r=e.isLoading;return Object(f.a)(Object(f.a)({},e),{},{isLoading:!r})}if("DELETE_REACTION"===n.type){var i=e.usersReactions;return i=i.filter((function(e){return e.id!==n.id})),Object(f.a)(Object(f.a)({},e),{},{usersReactions:i})}return"ERROR"===n.type?Object(f.a)(Object(f.a)({},e),{},{error:{message:n.message}}):t}),t),r=Object(c.a)(n,2),i=r[0],s=r[1],o=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING"}),e.next=3,fetch("https://artful-iudex.herokuapp.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,t.ok&&(s({type:"SET_USERS",users:n}),s({type:"LOADING"}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING"}),e.next=3,fetch("https://artful-iudex.herokuapp.com/reactions");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,t.ok&&(s({type:"SET_REACTIONS",reactions:n}),s({type:"LOADING"}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING"}),e.next=3,fetch("https://artful-iudex.herokuapp.com/user_content_reactions");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,t.ok&&(s({type:"USERS_REACTIONS",reactions:n}),s({type:"LOADING"}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING"}),e.next=3,fetch("https://artful-iudex.herokuapp.com/user_content_reactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,n.ok&&(t=Object(f.a)(Object(f.a)({},t),{},{id:a.id}),s({type:"ADD_REACTION",reaction:t}),s({type:"LOADING"}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"LOADING"}),e.next=4,fetch("https://artful-iudex.herokuapp.com/user_content_reactions/".concat(t),{method:"DELETE"});case 4:e.sent.ok&&(s({type:"DELETE_REACTION",id:t}),s({type:"LOADING"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error while deleting the reaction");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),_={isLoading:i.isLoading,users:i.users,availableReactions:i.availableReactions,usersReactions:i.usersReactions,getAllUsers:o,getAllReactions:u,getAllUsersReactions:O,addReaction:b,removeReaction:h};return Object(p.jsx)(m.Provider,{value:_,children:e.children})},b=n(12),h=n.n(b),_=function(e){var t=e.emoji,n=e.name,a=e.addReaction,r=e.id;return Object(p.jsxs)("div",{onClick:function(){a(r,t)},className:h.a.emoji,children:[t,Object(p.jsx)("div",{className:h.a.tooltip,children:n})]})},x=r.a.memo(_),v=n(4),R=n.n(v),g=function(e){var t=e.user_id,n=[],a=Object(o.useContext)(m),i=Object(o.useContext)(m),s=i.availableReactions,c=i.usersReactions,u=i.addReaction,d=c.filter((function(e){return e.user_id.toString()===t.toString()})),l=function(e){return n.findIndex((function(n){return n.emoji===e&&n.user_id===t}))};d.length>0&&s.forEach((function(e){d.filter((function(t){return t.reaction_id===e.id})).forEach((function(a){n.push({user_id:t,emoji:e.emoji,count:1,id:a.id})}))}));var j=function(e,t){var r={user_id:4,content_id:1,reaction_id:e};if(-1===l(t))u(r);else{var i=n[l(t)].id;a.removeReaction(i)}};return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsxs)("div",{className:R.a.addReaction,tabIndex:"1",children:[Object(p.jsx)("svg",{className:R.a.addEmoji,width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.77415 11C6.72054 10.9984 5.745 10.4442 5.20415 9.54L4.34915 10.04C5.07317 11.2401 6.37254 11.9738 7.77415 11.9738C9.17576 11.9738 10.4751 11.2401 11.1992 10.04L10.3441 9.54C9.8033 10.4442 8.82776 10.9984 7.77415 11ZM14.7741 2H12.7741V0H11.7741V2H9.77415V3H11.7741V5H12.7741V3H14.7741V2ZM5.52415 5.5C4.83379 5.5 4.27415 6.05964 4.27415 6.75C4.27415 7.44036 4.83379 8 5.52415 8C6.21451 8 6.77415 7.44036 6.77415 6.75C6.77684 6.41766 6.64601 6.09815 6.411 5.86315C6.176 5.62814 5.85649 5.49731 5.52415 5.5ZM10.0241 5.5C9.33379 5.5 8.77415 6.05964 8.77415 6.75C8.77415 7.44036 9.33379 8 10.0241 8C10.7145 8 11.2741 7.44036 11.2741 6.75C11.2768 6.41766 11.146 6.09815 10.911 5.86315C10.676 5.62814 10.3565 5.49731 10.0241 5.5ZM13.5792 6.5C13.7055 6.9901 13.771 7.49389 13.7741 8C13.7741 11.3137 11.0879 14 7.77415 14C4.46044 14 1.77415 11.3137 1.77415 8C1.77415 4.68629 4.46044 2 7.77415 2V1C4.80455 0.998983 2.15749 2.87179 1.17006 5.67242C0.182632 8.47304 1.06976 11.5919 3.38334 13.4536C5.69691 15.3153 8.93336 15.5146 11.4579 13.9508C13.9824 12.3871 15.2455 9.40062 14.6091 6.5H13.5792Z",fill:"black"})}),Object(p.jsx)("div",{className:R.a.emojiIcons,children:!!s&&s.map((function(e,t){return Object(p.jsx)(x,{addReaction:j,name:e.name,id:e.id,emoji:e.emoji},e.id)}))})]}),Object(p.jsx)("div",{className:R.a.existing_emojis,children:n.length>0&&n.map((function(e,t){return Object(p.jsxs)("div",{id:e.id,className:"".concat(R.a.emoji," ").concat(R.a.reacted),children:[" ",Object(p.jsxs)("span",{children:[" ",e.emoji]})," ",Object(p.jsxs)("span",{children:[". ",e.count]})]},t)}))})]})},C=r.a.memo(g),N=n(8),E=n.n(N),y=function(e){var t=e.fName,n=e.lName,a=e.image,r=e.user_id;return Object(p.jsxs)("div",{className:E.a.user,children:[Object(p.jsx)("div",{className:E.a.userImageContainer,children:Object(p.jsx)("img",{src:a,alt:""})}),Object(p.jsx)("h2",{className:E.a.fName,children:t}),Object(p.jsx)("h2",{className:E.a.lName,children:n}),Object(p.jsx)(C,{user_id:r})]})},A=r.a.memo(y);var I=function(){var e,t=Object(a.useContext)(m),n=Object(o.useState)(!0),r=Object(c.a)(n,2),i=r[0];return r[1],Object(a.useEffect)((function(){t.getAllUsers(),t.getAllReactions(),t.getAllUsersReactions()}),[]),i&&(e=t.users.filter((function(e){return"4"===e.id.toString()}))),Object(p.jsxs)("div",{className:"App",children:[t.isLoading&&Object(p.jsxs)("div",{className:"appLoading",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{})," ",Object(p.jsx)("div",{})]}),!!t.users&&e.map((function(e){return Object(p.jsx)(A,{user_id:e.id,fName:e.first_name,lName:e.last_name,image:e.avatar,email:e.email},e.id)}))]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(O,{children:Object(p.jsx)(I,{})})}),document.getElementById("root")),k()},4:function(e,t,n){e.exports={addReaction:"Reaction_addReaction__3uTlB",addEmoji:"Reaction_addEmoji__1EMzw",emojiIcons:"Reaction_emojiIcons__2FxCu",existing_emojis:"Reaction_existing_emojis__2koy0",emoji:"Reaction_emoji__bmr_Z",reacted:"Reaction_reacted__2sai8"}},8:function(e,t,n){e.exports={user:"User_user__-bJlS",userImageContainer:"User_userImageContainer__2g3QR",fName:"User_fName__kljuK",lName:"User_lName__3ZJQD"}}},[[23,1,2]]]);
//# sourceMappingURL=main.fb57e28a.chunk.js.map