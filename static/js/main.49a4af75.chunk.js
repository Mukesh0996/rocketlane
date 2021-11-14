(this.webpackJsonprocketlane=this.webpackJsonprocketlane||[]).push([[0],{10:function(e,t,n){e.exports={emoji:"Emoji_emoji__34hTT",tooltip:"Emoji_tooltip__26tUk"}},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),s=n.n(c),i=(n(18),n(19),n(3)),o=n.n(i),u=n(5),l=n(12),d=n(13),j=n(2),p=n(0),f=r.a.createContext({users:[],availableReactions:[],usersReactions:[],getAllUsers:function(){},getAllReactions:function(){},getAllUsersReactions:function(){}}),m=function(e){var t={users:[],availableReactions:[],usersReactions:[],isLoading:!1},n=Object(a.useReducer)((function(e,n){if("SET_USERS"===n.type)return Object(j.a)(Object(j.a)({},e),{},{users:n.users});if("SET_REACTIONS"===n.type)return Object(j.a)(Object(j.a)({},e),{},{availableReactions:n.reactions});if("USERS_REACTIONS"===n.type)return Object(j.a)(Object(j.a)({},e),{},{usersReactions:n.reactions});if("ADD_REACTION"===n.type){var a=e.usersReactions;return a=[].concat(Object(d.a)(a),[n.reaction]),Object(j.a)(Object(j.a)({},e),{},{usersReactions:a})}if("LOADING"===n.type){var r=e.isLoading;return Object(j.a)(Object(j.a)({},e),{},{isLoading:!r})}if("DELETE_REACTION"===n.type){var c=e.usersReactions;return c=c.filter((function(e){return e.id!==n.id})),Object(j.a)(Object(j.a)({},e),{},{usersReactions:c})}return"ERROR"===n.type?Object(j.a)(Object(j.a)({},e),{},{error:{message:n.message}}):t}),t),r=Object(l.a)(n,2),c=r[0],s=r[1],i=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"LOADING"}),e.next=4,fetch("https://artful-iudex.herokuapp.com/users");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,t.ok&&(s({type:"SET_USERS",users:n}),s({type:"LOADING"})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error while fetching users");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"LOADING"}),e.next=4,fetch("https://artful-iudex.herokuapp.com/reactions");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,t.ok&&(s({type:"SET_REACTIONS",reactions:n}),s({type:"LOADING"})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error while fetching all reactions");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"LOADING"}),e.next=4,fetch("https://artful-iudex.herokuapp.com/user_content_reactions");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,t.ok&&(s({type:"USERS_REACTIONS",reactions:n}),s({type:"LOADING"})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error while fetching users reactions");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"LOADING"}),e.next=4,fetch("https://artful-iudex.herokuapp.com/user_content_reactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,n.ok&&(t=Object(j.a)(Object(j.a)({},t),{},{id:a.id}),s({type:"ADD_REACTION",reaction:t}),s({type:"LOADING"})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error while adding a reaction");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"LOADING"}),e.next=4,fetch("https://artful-iudex.herokuapp.com/user_content_reactions/".concat(t),{method:"DELETE"});case 4:e.sent.ok&&(s({type:"DELETE_REACTION",id:t}),s({type:"LOADING"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error while deleting the reaction");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),_={isLoading:c.isLoading,users:c.users,availableReactions:c.availableReactions,usersReactions:c.usersReactions,getAllUsers:i,getAllReactions:m,getAllUsersReactions:h,addReaction:O,removeReaction:b};return Object(p.jsx)(f.Provider,{value:_,children:e.children})},h=n(10),O=n.n(h),b=function(e){var t=e.emoji,n=e.name,a=e.addReaction,r=e.id;return Object(p.jsxs)("div",{onClick:function(){a(r,t)},className:O.a.emoji,children:[t,Object(p.jsx)("div",{className:O.a.tooltip,children:n})]})},_=r.a.memo(b),v=n(4),x=n.n(v),R=function(e){var t=e.user_id,n=[],c=Object(a.useContext)(f),s=Object(a.useContext)(f),i=s.availableReactions,o=s.usersReactions,u=s.addReaction,l=o.filter((function(e){return e.user_id===t})),d=function(e){return n.findIndex((function(n){return n.emoji===e&&n.user_id===t}))};l.length>0&&i.forEach((function(e){l.filter((function(t){return t.reaction_id===e.id})).forEach((function(a){n.push({user_id:t,emoji:e.emoji,count:1,id:a.id})}))}));var j=function(e,t){var a={user_id:4,content_id:1,reaction_id:e};if(-1===d(t))u(a);else{var r=n[d(t)].id;c.removeReaction(r)}};return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsxs)("div",{className:x.a.addReaction,tabIndex:"1",children:[Object(p.jsx)("svg",{className:x.a.addEmoji,width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.77415 11C6.72054 10.9984 5.745 10.4442 5.20415 9.54L4.34915 10.04C5.07317 11.2401 6.37254 11.9738 7.77415 11.9738C9.17576 11.9738 10.4751 11.2401 11.1992 10.04L10.3441 9.54C9.8033 10.4442 8.82776 10.9984 7.77415 11ZM14.7741 2H12.7741V0H11.7741V2H9.77415V3H11.7741V5H12.7741V3H14.7741V2ZM5.52415 5.5C4.83379 5.5 4.27415 6.05964 4.27415 6.75C4.27415 7.44036 4.83379 8 5.52415 8C6.21451 8 6.77415 7.44036 6.77415 6.75C6.77684 6.41766 6.64601 6.09815 6.411 5.86315C6.176 5.62814 5.85649 5.49731 5.52415 5.5ZM10.0241 5.5C9.33379 5.5 8.77415 6.05964 8.77415 6.75C8.77415 7.44036 9.33379 8 10.0241 8C10.7145 8 11.2741 7.44036 11.2741 6.75C11.2768 6.41766 11.146 6.09815 10.911 5.86315C10.676 5.62814 10.3565 5.49731 10.0241 5.5ZM13.5792 6.5C13.7055 6.9901 13.771 7.49389 13.7741 8C13.7741 11.3137 11.0879 14 7.77415 14C4.46044 14 1.77415 11.3137 1.77415 8C1.77415 4.68629 4.46044 2 7.77415 2V1C4.80455 0.998983 2.15749 2.87179 1.17006 5.67242C0.182632 8.47304 1.06976 11.5919 3.38334 13.4536C5.69691 15.3153 8.93336 15.5146 11.4579 13.9508C13.9824 12.3871 15.2455 9.40062 14.6091 6.5H13.5792Z",fill:"black"})}),Object(p.jsx)("div",{className:x.a.emojiIcons,children:!!i&&i.map((function(e,t){return Object(p.jsx)(_,{addReaction:j,name:e.name,id:e.id,emoji:e.emoji},e.id)}))})]}),Object(p.jsx)("div",{className:x.a.existing_emojis,children:n.length>0&&n.map((function(e,t){return Object(p.jsxs)("div",{id:e.id,className:"".concat(x.a.emoji," ").concat(x.a.reacted),children:[" ",Object(p.jsxs)("span",{children:[" ",e.emoji]})," ",Object(p.jsxs)("span",{children:[". ",e.count]})]},t)}))})]})},g=r.a.memo(R),C=n(7),N=n.n(C),E=function(e){var t=e.fName,n=e.lName,a=e.image,r=e.user_id;return Object(p.jsxs)("div",{className:N.a.user,children:[Object(p.jsx)("div",{className:N.a.userImageContainer,children:Object(p.jsx)("img",{src:a,alt:""})}),Object(p.jsx)("h2",{className:N.a.fName,children:t}),Object(p.jsx)("h2",{className:N.a.lName,children:n}),Object(p.jsx)(g,{user_id:r})]})},y=r.a.memo(E);var A=function(){var e=Object(a.useContext)(f);return Object(a.useEffect)((function(){e.getAllUsers(),e.getAllReactions(),e.getAllUsersReactions()}),[]),Object(p.jsxs)("div",{className:"App",children:[e.isLoading&&Object(p.jsxs)("div",{className:"appLoading",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{})," ",Object(p.jsx)("div",{})]}),!!e.users&&e.users.filter((function(e){return"4"===e.id.toString()})).map((function(e){return Object(p.jsx)(y,{user_id:e.id,fName:e.first_name,lName:e.last_name,image:e.avatar,email:e.email},e.id)}))]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(m,{children:Object(p.jsx)(A,{})})}),document.getElementById("root")),k()},4:function(e,t,n){e.exports={addReaction:"Reaction_addReaction__3uTlB",addEmoji:"Reaction_addEmoji__1EMzw",emojiIcons:"Reaction_emojiIcons__2FxCu",existing_emojis:"Reaction_existing_emojis__2koy0",emoji:"Reaction_emoji__bmr_Z",reacted:"Reaction_reacted__2sai8"}},7:function(e,t,n){e.exports={user:"User_user__-bJlS",userImageContainer:"User_userImageContainer__2g3QR",fName:"User_fName__kljuK",lName:"User_lName__3ZJQD"}}},[[22,1,2]]]);
//# sourceMappingURL=main.49a4af75.chunk.js.map