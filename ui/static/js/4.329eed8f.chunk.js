webpackJsonp([4],{2289:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,u,l,d,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n(0),m=a(p),g=n(4),h=a(g),b=n(24),v=n(34),y=n(2305),E=a(y),w=n(2296),S=a(w),O=n(36),x=n(2307),_=a(x),T=(s=(0,v.withStyles)(_.default,{withTheme:!0}),u=(0,b.connect)(function(e){return{sortBy:e.Dashboard.get("sortBy")}}),s(l=u((c=d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props.sortBy;return m.default.createElement("div",null,m.default.createElement(E.default,null),m.default.createElement(S.default,{eventStatusIndex:O.EventStatus.Vote,sortBy:e}))}}]),t}(p.Component),d.propTypes={sortBy:h.default.string},d.defaultProps={sortBy:O.SortBy.Ascending},l=c))||l)||l);t.default=T},2296:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,u,l,d,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n(0),m=a(p),g=n(4),h=a(g),b=n(24),v=n(26),y=a(v),E=n(34),w=n(23),S=n(2297),O=a(S),x=n(36),_=n(52),T=a(_),k=n(101),M=a(k),R=n(2298),A=a(R),B=n(2300),j=a(B),C=n(2302),P=a(C),N=(0,w.defineMessages)({placeBet:{id:"bottomButtonText.placeBet",defaultMessage:"Place Bet"},setResult:{id:"str.setResult",defaultMessage:"Set Result"},vote:{id:"bottomButtonText.vote",defaultMessage:"Place Vote"},finalizeResult:{id:"str.finalizeResult",defaultMessage:"Finalize Result"},withdraw:{id:"str.withdraw",defaultMessage:"Withdraw"}}),q=8,L=(s=(0,E.withStyles)(O.default,{withTheme:!0}),u=(0,b.connect)(function(e){return{getTopicsReturn:e.Graphql.get("getTopicsReturn"),getOraclesReturn:e.Graphql.get("getOraclesReturn"),sortBy:e.Dashboard.get("sortBy"),syncBlockNum:e.App.get("syncBlockNum"),walletAddresses:e.App.get("walletAddresses")}},function(e){return{setAppLocation:function(t){return e(T.default.setAppLocation(t))},getActionableTopics:function(t,n,a,r){return e(M.default.getActionableTopics(t,n,a,r))},getOracles:function(t,n,a,r){return e(M.default.getOracles(t,n,a,r))}}}),(0,w.injectIntl)(l=s(l=u((c=d=function(e){function t(){var e,n,a,i;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.state={skip:0},a.loadMoreData=function(){var e=a.state.skip,t=a.props,n=t.eventStatusIndex,r=t.sortBy;e+=q,a.executeGraphRequest(n,r,q,e),a.setState({skip:e})},a.setAppLocation=function(e){var t=a.props.setAppLocation;switch(e){case x.EventStatus.Bet:t(x.AppLocation.qtumPrediction);break;case x.EventStatus.Set:t(x.AppLocation.resultSet);break;case x.EventStatus.Vote:t(x.AppLocation.botCourt);break;case x.EventStatus.Finalize:t(x.AppLocation.finalize);break;case x.EventStatus.Withdraw:t(x.AppLocation.withdraw);break;default:throw new RangeError("Invalid tab position "+e)}},i=n,o(a,i)}return i(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.eventStatusIndex,n=e.sortBy;this.setAppLocation(t),this.executeGraphRequest(t,n,q,0)}},{key:"componentWillReceiveProps",value:function(e){var t=e.eventStatusIndex,n=e.sortBy,a=e.syncBlockNum;t===this.props.eventStatusIndex&&n===this.props.sortBy&&a===this.props.syncBlockNum||(this.executeGraphRequest(t,n,q,0),this.setState({skip:0}))}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.eventStatusIndex,a=e.getTopicsReturn,r=e.getOraclesReturn,o=[];switch(n){case x.EventStatus.Bet:case x.EventStatus.Set:case x.EventStatus.Vote:case x.EventStatus.Finalize:o=y.default.isNil(r.data)||0===r.data.length?m.default.createElement(j.default,null):this.renderOracles(r.data,n);break;case x.EventStatus.Withdraw:o=y.default.isNil(a.data)||0===a.data.length?m.default.createElement(j.default,null):this.renderTopics(a.data);break;default:throw new RangeError("Invalid tab position "+n)}return m.default.createElement(P.default,{spacing:t.padding.sm.value,data:o,loadMore:this.loadMoreData,hasMore:o.length>=this.state.skip+q})}},{key:"executeGraphRequest",value:function(e,t,n,a){var r=this.props,o=r.getActionableTopics,i=r.getOracles,s=r.walletAddresses,u=t||x.SortBy.Ascending;switch(e){case x.EventStatus.Bet:i([{token:x.Token.Qtum,status:x.OracleStatus.Voting},{token:x.Token.Qtum,status:x.OracleStatus.Created}],{field:"endTime",direction:u},n,a);break;case x.EventStatus.Set:var l=[{token:x.Token.Qtum,status:x.OracleStatus.OpenResultSet}];y.default.each(s,function(e){l.push({token:x.Token.Qtum,status:x.OracleStatus.WaitResult,resultSetterQAddress:e.address})}),i(l,{field:"resultSetEndTime",direction:u},n,a);break;case x.EventStatus.Vote:i([{token:x.Token.Bot,status:x.OracleStatus.Voting}],{field:"endTime",direction:u},n,a);break;case x.EventStatus.Finalize:i([{token:x.Token.Bot,status:x.OracleStatus.WaitResult}],{field:"endTime",direction:u},n,a);break;case x.EventStatus.Withdraw:o(s,{field:"blockNum",direction:u},n,a);break;default:throw new RangeError("Invalid tab position "+e)}}},{key:"renderOracles",value:function(e,t){var n=this,a=[];return y.default.each(e,function(e){var r=parseFloat(y.default.sum(e.amounts).toFixed(2)),o=void 0,i=r+" "+e.token;switch(t){case x.EventStatus.Bet:o=n.props.intl.formatMessage(N.placeBet);break;case x.EventStatus.Set:o=n.props.intl.formatMessage(N.setResult);break;case x.EventStatus.Vote:o=n.props.intl.formatMessage(N.vote);break;case x.EventStatus.Finalize:o=n.props.intl.formatMessage(N.finalizeResult),i=void 0;break;default:throw new RangeError("Invalid tab position "+t)}var s=m.default.createElement(A.default,{key:e.txid,name:e.name,url:"/oracle/"+e.topicAddress+"/"+e.address+"/"+e.txid,endTime:t===x.EventStatus.Set?e.resultSetEndTime:e.endTime,amountLabel:i,buttonText:o,unconfirmed:!e.topicAddress&&!e.address});a.push(s)}),a}},{key:"renderTopics",value:function(e){var t=this,n=[];return y.default.each(e,function(e){var a=parseFloat(y.default.sum(e.qtumAmount).toFixed(2)),r=parseFloat(y.default.sum(e.botAmount).toFixed(2)),o=a+" QTUM, "+r+" BOT",i=m.default.createElement(A.default,{key:e.txid,name:e.name,url:"/topic/"+e.address,amountLabel:o,buttonText:t.props.intl.formatMessage(N.withdraw),unconfirmed:!1});n.push(i)}),n}}]),t}(p.Component),d.propTypes={theme:h.default.object.isRequired,getActionableTopics:h.default.func.isRequired,getTopicsReturn:h.default.object,getOracles:h.default.func,getOraclesReturn:h.default.object,eventStatusIndex:h.default.number.isRequired,sortBy:h.default.string,syncBlockNum:h.default.number,setAppLocation:h.default.func.isRequired,walletAddresses:h.default.array.isRequired,intl:w.intlShape.isRequired},d.defaultProps={getTopicsReturn:{},getOracles:void 0,getOraclesReturn:{},sortBy:x.SortBy.Ascending,syncBlockNum:void 0},l=c))||l)||l)||l);t.default=L},2297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return{scroll:{width:"100%",display:"flex",flexWrap:"wrap",boxSizing:"border-box"},hint:{position:"fixed",bottom:"140px",left:"23px",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)"}}};t.default=a},2298:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,u,l,d,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(0),p=a(f),m=n(4),g=a(m),h=n(102),b=n(23),v=n(64),y=n(7),E=a(y),w=n(2299),S=a(w),O=n(65),x=(0,b.defineMessages)({raise:{id:"str.raised",defaultMessage:"Raised"},ends:{id:"str.ends",defaultMessage:"Ends"}}),_=(s=(0,v.withStyles)(S.default,{withTheme:!0}),(0,b.injectIntl)(u=s((d=l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.url,a=e.name,r=e.amountLabel,o=e.endTime,i=e.buttonText,s=e.unconfirmed,u=this.props.intl,l=u.locale,d=u.messages;return p.default.createElement(v.Grid,{item:!0,xs:12,sm:6,md:4,lg:3},p.default.createElement(h.Link,{to:n},p.default.createElement(v.Card,null,p.default.createElement("div",{className:(0,E.default)(t.eventCardSection,"top")},s&&p.default.createElement(v.Typography,{className:t.unconfirmedTag},p.default.createElement(b.FormattedMessage,{id:"str.pendingConfirmation",defaultMessage:"Pending Confirmation"})),p.default.createElement(v.Typography,{variant:"headline",className:t.eventCardName},a),p.default.createElement("div",{className:t.dashboardTime},void 0!==o&&this.props.intl.formatMessage(x.ends)+": "+(0,O.getLocalDateTimeString)(o)),p.default.createElement("div",{className:t.eventCardInfo},r&&p.default.createElement("div",null,p.default.createElement("i",{className:(0,E.default)(t.dashBoardCardIcon,"icon","iconfont","icon-ic_token")}),p.default.createElement(b.FormattedMessage,{id:"str.raised",defaultMessage:"Raised"})," "+r),p.default.createElement("div",null,p.default.createElement("i",{className:(0,E.default)(t.dashBoardCardIcon,"icon","iconfont","icon-ic_timer")}),void 0!==o?""+(0,O.getEndTimeCountDownString)(o,l,d):p.default.createElement(b.FormattedMessage,{id:"str.end",defaultMessage:"Ended"})))),p.default.createElement(v.Divider,null),p.default.createElement("div",{className:(0,E.default)(t.eventCardSection,"button")},i))))}}]),t}(f.Component),l.propTypes={classes:g.default.object.isRequired,url:g.default.string.isRequired,name:g.default.string.isRequired,amountLabel:g.default.string,endTime:g.default.string,buttonText:g.default.string.isRequired,unconfirmed:g.default.bool.isRequired,intl:b.intlShape.isRequired},l.defaultProps={amountLabel:void 0,endTime:void 0},u=d))||u)||u);t.default=_},2299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return{eventCardSection:{position:"relative",padding:e.padding.sm.px,"&.top":{height:"320px"},"&.button":{textAlign:"center",paddingTop:e.padding.xs.px,paddingBottom:e.padding.xs.px,lineHeight:1,fontSize:e.sizes.font.textMd,color:e.palette.text.primary}},dashboardTime:{color:e.palette.text.hint},eventCardName:{marginBottom:e.padding.xs.px},unconfirmedTag:{background:e.palette.secondary.light,color:e.palette.secondary.main,border:"solid 1px "+e.palette.secondary.main,borderRadius:e.borderRadius,padding:"2px "+e.padding.unit.px,marginBottom:e.padding.unit.px,fontSize:e.sizes.font.meta},dashBoardCardIcon:{marginRight:e.padding.unit.px},eventCardInfo:{position:"absolute",bottom:e.padding.sm.px,color:e.palette.text.primary}}};t.default=a},2300:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),i=n(4),s=a(i),u=n(23),l=n(35),d=a(l),c=n(494),f=a(c),p=n(34),m=n(2301),g=a(m),h=function(e){var t=e.classes;return o.default.createElement("div",{className:t.eventsEmptyWrapper},o.default.createElement(f.default,{className:t.eventsEmptyIcon,fontSize:!0}),o.default.createElement(d.default,{variant:"body1"},o.default.createElement(u.FormattedMessage,{id:"dashboard.empty",defaultMessage:"No Event at Current Status"})," "))};h.propTypes={classes:s.default.object.isRequired},t.default=(0,p.withStyles)(g.default,{withTheme:!0})(h)},2301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return{eventsEmptyWrapper:{width:"300px",position:"relative",left:"50%",marginLeft:"-150px",top:"15vh",textAlign:"center"},eventsEmptyIcon:{fontSize:"100px",opacity:"0.15"}}};t.default=a},2302:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,u,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(0),c=a(d),f=n(4),p=a(f),m=n(100),g=a(m),h=(u=s=function(e){function t(){var e,n,a,i;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.handleOnScroll=function(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight,n=document.documentElement.clientHeight||window.innerHeight;Math.ceil(e+n)>=t&&a.props.hasMore&&a.props.loadMore()},i=n,o(a,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleOnScroll)}},{key:"render",value:function(){return c.default.createElement(g.default,{container:!0,spacing:this.props.spacing},this.props.data)}}]),t}(d.Component),s.propTypes={hasMore:p.default.bool,loadMore:p.default.func,spacing:p.default.number,data:p.default.oneOfType([p.default.array,p.default.object])},s.defaultProps={hasMore:!1,loadMore:void 0,spacing:void 0,data:void 0},u);t.default=h},2305:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,u,l,d,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n(0),m=a(p),g=n(4),h=a(g),b=n(24),v=n(23),y=n(103),E=a(y),w=n(100),S=a(w),O=n(498),x=a(O),_=n(82),T=n(183),k=a(T),M=n(181),R=n(495),A=a(R),B=n(34),j=n(52),C=a(j),P=n(499),N=a(P),q=n(180),L=a(q),I=n(36),F=n(2306),z=a(F),D=(s=(0,B.withStyles)(z.default,{withTheme:!0}),u=(0,b.connect)(function(e){return{lastUsedAddress:e.App.get("lastUsedAddress"),sortBy:e.Dashboard.get("sortBy")}},function(e){return{toggleCreateEventDialog:function(t){return e(C.default.toggleCreateEventDialog(t))},sortOrderChanged:function(t){return e(N.default.sortOrderChanged(t))},getEventEscrowAmount:function(t){return e(L.default.getEventEscrowAmount(t))}}}),(0,v.injectIntl)(l=s(l=u((c=d=function(e){function t(){var e,n,a,i;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.onSortOptionSelected=function(e){a.props.sortOrderChanged(e.target.value)},a.onCreateDialogOpen=function(){var e=a.props,t=e.toggleCreateEventDialog,n=e.lastUsedAddress,r=e.getEventEscrowAmount;t(!0),r(n)},i=n,o(a,i)}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.sortBy;return m.default.createElement(S.default,{container:!0,className:t.dashboardActionsWrapper},m.default.createElement(S.default,{item:!0,xs:8},m.default.createElement(E.default,{variant:"raised",size:"medium",color:"primary",className:t.createEventButton,onClick:this.onCreateDialogOpen},m.default.createElement(x.default,{fontSize:!0}),m.default.createElement(v.FormattedMessage,{id:"create.dialogTitle",defaultMessage:"Create an event"}))),m.default.createElement(S.default,{item:!0,xs:4,className:t.dashboardActionsRight},m.default.createElement("span",{className:t.dashboardActionsSortLabel},m.default.createElement(v.FormattedMessage,{id:"sort.label",defaultMessage:"Sort By"})),m.default.createElement(A.default,{className:t.dashboardActionsSort},m.default.createElement(_.FormControl,null,m.default.createElement(k.default,{disableUnderline:!0,value:n,onChange:this.onSortOptionSelected},m.default.createElement(M.MenuItem,{value:I.SortBy.Ascending},m.default.createElement(v.FormattedMessage,{id:"sort.ascEndTime",defaultMessage:"End Earliest"})),m.default.createElement(M.MenuItem,{value:I.SortBy.Descending},m.default.createElement(v.FormattedMessage,{id:"sort.descEndTime",defaultMessage:"End Latest"})))))))}}]),t}(p.Component),d.propTypes={classes:h.default.object.isRequired,sortBy:h.default.string,sortOrderChanged:h.default.func,lastUsedAddress:h.default.string.isRequired,toggleCreateEventDialog:h.default.func.isRequired,getEventEscrowAmount:h.default.func.isRequired},d.defaultProps={sortBy:I.SortBy.Ascending,sortOrderChanged:void 0},l=c))||l)||l)||l);t.default=D},2306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return{dashboardActionsWrapper:{marginBottom:e.padding.sm.px},createEventButton:{padding:"12px "+e.padding.sm.px,verticalAlign:"middle"},dashboardActionsRight:{textAlign:"right"},dashboardActionsSort:{display:"inline-block",padding:e.padding.unit.px+" "+e.padding.sm.px,verticalAlign:"middle"},dashboardActionsSortLabel:{marginRight:e.padding.sm.px}}};t.default=a},2307:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return{}};t.default=a}});