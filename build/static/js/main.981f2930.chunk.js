(window["webpackJsonpmine-sweeper"]=window["webpackJsonpmine-sweeper"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/digital-7-mono.58045dab.ttf"},29:function(e,t,n){e.exports=n(47)},34:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(5),u=n.n(i),o=(n(34),n(1)),s=n(11),c=n.n(s),l=n(16),m=n(17),p=n(18),f=n(25),d=n(19),v=n(26);n(41);function E(e){var t=e.value,n=e.open,i=e.mark,u=Object(a.useMemo)((function(){return function(e){return{markDisplay:(!e.open||0===e.value)&&"hide",markValue:e.open&&"mine-mark-".concat(e.value),openClass:e.open?"open":"",markType:"mark-".concat(e.mark)}}({value:t,open:n,mark:i})}),[t,n,i]);return r.a.createElement("div",{className:"square border ".concat(u.markType," ").concat(u.openClass),onClick:function(){e.onSquareClick()},onContextMenu:function(t){e.onSquareContextMenu(t)}},e.open&&r.a.createElement("div",{className:"mine-mark ".concat(u.markDisplay," ").concat(u.markValue)},e.value))}E.defaultProps={value:0,open:!1,mark:null};var N=r.a.memo(E,(function(e,t){return e.open===t.open&&e.mark===t.mark}));function h(e,t,n){var a=e;function r(e,t){void 0!==a[e]&&void 0!==a[e][t]&&"number"===typeof a[e][t]&&a[e][t]++}return r(t-1,n-1),r(t-1,n),r(t-1,n+1),r(t,n-1),r(t,n+1),r(t+1,n-1),r(t+1,n),r(t+1,n+1),a}function k(e,t){for(var n=new Array(e),a=0;a<e;a++)n[a]=new Array(e).fill(0);return n=function(e,t,n){for(var a=e,r=0;r<n.length;r++){var i=Math.floor(n[r]/t),u=n[r]%t;a[i][u]="m",a=h(a,i,u)}return a}(n,e,function(e,t){for(var n=[],a=0;a<t;a++){var r=null;do{r=Math.floor(Math.random()*e*e)}while(n.indexOf(r)>-1);n.push(r)}return n}(e,t))}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(e)||!e.length)return[];for(var t=[],n=0;n<e.length;n++){var a=e[n];t[n]=new Array(a.length).fill({});for(var r=0;r<a.length;r++){var i={id:n*a.length+r,value:e[n][r],mark:null,open:!1};t[n][r]=i}}return t}var S,y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return e.toString().padStart(t,"0")},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;return new Promise((function(t){setTimeout(t,e)}))},_=n(8),T={NOT_YET:"normal",WAIT:"wait",FAIL:"fail",WIN:"win"},b={JUNIOR:"JUNIOR",MIDDLE:"MIDDLE",SENIOR:"SENIOR"},I=(S={},Object(_.a)(S,b.JUNIOR,{ROW_NUM:9,MINE_NUM:16}),Object(_.a)(S,b.MIDDLE,{ROW_NUM:16,MINE_NUM:40}),Object(_.a)(S,b.SENIOR,{ROW_NUM:25,MINE_NUM:99}),S),R="flag",g="question",w=(n(42),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).state={minePane:O(k(e.rowNum,e.mineNum))},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.rowNum,a=t.mineNum,r=t.isStarted;(e.rowNum!==n||e.isStarted&&!r)&&this.setState({minePane:O(k(n,a))})}},{key:"openAround",value:function(e,t){this.open(e-1,t-1),this.open(e-1,t),this.open(e-1,t+1),this.open(e,t-1),this.open(e,t+1),this.open(e+1,t-1),this.open(e+1,t),this.open(e+1,t+1)}},{key:"openAll",value:function(){for(var e=this.props.rowNum,t=this.state.minePane,n=0;n<e;n++)for(var a=0;a<e;a++)t[n][a].open||(t[n][a].open=!0);this.setState({minePane:t})}},{key:"isPositionInPane",value:function(e,t){var n=this.state.minePane[e];return void 0!==n&&void 0!==n[t]}},{key:"isMarked",value:function(e,t){return Boolean(this.state.minePane[e][t].mark)}},{key:"isOpened",value:function(e,t){return this.state.minePane[e][t].open}},{key:"open",value:function(e,t){var n=this,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];!this.isPositionInPane(e,t)||this.isOpened(e,t)||this.isMarked(e,t)||this.setState((function(n){var a=n.minePane;return a[e][t].open=!0,{minePane:a}}),(function(){n.props.result===T.WAIT&&n.props.resetResult();var r=n.state.minePane[e][t].value;a&&0===r&&n.openAround(e,t)}))}},{key:"endGame",value:function(){this.setState({ended:!0}),this.props.togglePlayingStatus()}},{key:"isFailed",value:function(e,t){return"m"===this.state.minePane[e][t].value}},{key:"onFail",value:function(){this.openAll(),this.props.sendFailResult(),this.endGame()}},{key:"isWinning",value:function(){return this.state.minePane.flat().filter((function(e){return!e.open})).length===this.props.mineNum}},{key:"onWin",value:function(){this.props.sendWinResult(),this.endGame(),window.alert("win")}},{key:"mark",value:function(e,t){var n=R,a=g,r=this.state.minePane,i=r[e][t].mark;if(null===i){if(0===this.props.unmarkedMineNum)return;i=n,this.props.markMine()}else i===n?(i=a,this.props.unmarkMine()):i===a&&(i=null);r[e][t].mark=i,this.setState({minePane:r})}},{key:"handleSquareClick",value:function(){var e=Object(l.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isOpened(t,n)&&!this.isMarked(t,n)){e.next=2;break}return e.abrupt("return");case 2:return this.props.isStarted||this.props.startGame(),this.props.waitResult(),e.next=6,M(200);case 6:if(this.isMarked(t,n)||!this.isFailed(t,n)){e.next=9;break}return this.onFail(),e.abrupt("return");case 9:this.props.waitResult(),this.open(t,n),!this.isMarked(t,n)&&this.isWinning()&&this.onWin();case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleSquareContextMenu",value:function(e,t,n){n.preventDefault(),this.props.playing||this.props.startGame(),this.mark(e,t)}},{key:"render",value:function(){var e=this,t={display:"grid",gridTemplateColumns:"repeat(".concat(this.props.rowNum,", 25px)"),gridTemplateRows:"repeat(".concat(this.props.rowNum,", 25px)")},n=T.WIN,a=T.FAIL,i=this.props.result,u=i===n||i===a?"ended":"";return r.a.createElement("div",{className:"mine-pane row-".concat(this.props.rowNum," ").concat(u),style:t},this.state.minePane.map((function(t,n){return t.map((function(t,a){return r.a.createElement(N,Object.assign({key:t.id},t,{onSquareClick:function(){e.handleSquareClick(n,a)},onSquareContextMenu:function(t){e.handleSquareContextMenu(n,a,t)}}))}))})))}}]),t}(r.a.Component));w.defaultProps={rowNum:9,mineNum:16,playing:!1};var A=Object(o.c)((function(e){return e}),(function(e){return{unmarkMine:function(){e({type:"UNMARK_MINE",value:1})},markMine:function(){e({type:"MARK_MINE",value:1})},waitResult:function(){e({type:"WAIT_RESULT"})},resetResult:function(){e({type:"RESET_RESULT"})},sendFailResult:function(){e({type:"SEND_FAIL_RESULT"})},sendWinResult:function(){e({type:"SEND_WIN_RESULT"})},togglePlayingStatus:function(){e({type:"TOGGLE_PLAYING_STATUS"})},startGame:function(){Object(o.b)((function(){e({type:"TOGGLE_PLAYING_STATUS"}),e({type:"START_GAME"})}))}}}))(w),G=n(7),U=n(20),P=n(22),j=n(21),L=n.n(j);n(43);function D(){var e=Object(U.a)(["\n  @font-face {\n    font-family: 'digital';\n    src: url(",");\n  }\n\n  .board {\n    font-family: digital;\n  }\n"]);return D=function(){return e},e}var W=P.a.div(D(),L.a);var x=function(e){return r.a.createElement(W,null,r.a.createElement("div",{className:"board"},e.content))},C=999,F=null;function q(e){var t=e.timing,n=void 0!==t&&t,i=e.result,u=Object(a.useState)(0),o=Object(G.a)(u,2),s=o[0],c=o[1];return Object(a.useEffect)((function(){if(!n&&i===T.NOT_YET)return c(0),void clearTimeout(F);s>=C||!n?clearTimeout(F):F=setTimeout((function(){c(s+1)}),1e3)}),[n,i,s]),r.a.createElement("div",{className:"time-board"},r.a.createElement(x,{content:y(s)}))}q.defaultProps={timing:!1};var J=Object(o.c)((function(e){return{timing:e.playing,result:e.result}}))(q);function Y(e){return r.a.createElement("div",{className:"mine-counter"},r.a.createElement(x,{content:e.content}))}Y.defaultProps={content:0};var K=Object(o.c)((function(e){return{content:y(e.unmarkedMineNum)}}))(Y);n(45);var V=function(e){return r.a.createElement("div",{className:"game-result game-result-".concat(e.result)})},X=Object(o.c)((function(e){return{result:e.result}}))(V);n(46);function B(e){var t=Object(a.useState)(e.data.activeIndex),n=Object(G.a)(t,2),i=n[0],u=n[1];return r.a.createElement("div",{className:"menu-item"},r.a.createElement("div",{className:"title"},e.data.title),e.data.submenu?r.a.createElement("div",{className:"menu-sub"},e.data.submenu.map((function(t,n){return r.a.createElement("div",{className:"item ".concat(i===n?"active":""),key:n,onClick:function(){!function(t,n){t.callback(e),void 0!==i&&u(n)}(t,n)}},t.title)}))):null)}B.defaultProps={data:{}};var z=B,H=b.JUNIOR,Q=b.MIDDLE,Z=b.SENIOR,$={title:"\u7b49\u7ea7",activeInex:0,submenu:[{title:"\u521d\u7ea7",callback:function(e){e.setGameGrade(H)}},{title:"\u4e2d\u7ea7",callback:function(e){e.setGameGrade(Q)}},{title:"\u9ad8\u7ea7",callback:function(e){e.setGameGrade(Z)}}]},ee=Object(o.c)((function(e){var t=e.grade;return $.activeIndex=Object.keys(b).indexOf(t),{data:$}}),(function(e){return{setGameGrade:function(t){Object(o.b)((function(){e(function(e){return{type:"SET_GAME_GRADE",value:e}}(t)),e({type:"RESET_GAME"})}))}}}))(z),te={title:"\u6e38\u620f",submenu:[{title:"\u91cd\u65b0\u5f00\u59cb",callback:function(e){e.resetGame()}}]},ne=Object(o.c)((function(){return{data:te}}),(function(e){return{resetGame:function(){e({type:"RESET_GAME"})}}}))(z),ae=n(6),re=function(e,t){var n,a=(n=e,JSON.parse(JSON.stringify(n)));switch(t.type){case"UNMARK_MINE":return a.unmarkedMineNum++,a;case"MARK_MINE":return a.unmarkedMineNum--,a;case"WAIT_RESULT":return a.result=T.WAIT,a;case"RESET_RESULT":return a.result=T.NOT_YET,a;case"SEND_FAIL_RESULT":return a.result=T.FAIL,a;case"SEND_WIN_RESULT":return a.result=T.WIN,a;case"SET_GAME_GRADE":var r=t.value,i=I[r],u=i.ROW_NUM,o=i.MINE_NUM;return a.rowNum=u,a.mineNum=o,a.unmarkedMineNum=o,a;case"TOGGLE_PLAYING_STATUS":return a.playing=!e.playing,a;case"RESET_GAME":return a.playing=!1,a.unmarkedMineNum=a.mineNum,a.result=T.NOT_YET,a.isStarted=!1,a;case"START_GAME":return a.isStarted=!0,a;default:return e}},ie=b.JUNIOR,ue=I[ie],oe=ue.MINE_NUM,se={grade:ie,rowNum:ue.ROW_NUM,mineNum:oe,unmarkedMineNum:oe,result:T.NOT_YET,playing:!1,isStarted:!1},ce=Object(ae.b)(re,se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var le=function(){return document.body.addEventListener("contextmenu",(function(e){e.preventDefault()})),r.a.createElement(o.a,{store:ce},r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"menu"},r.a.createElement(ee,null),r.a.createElement(ne,null)),r.a.createElement("div",{className:"status border"},r.a.createElement(K,null),r.a.createElement(X,null),r.a.createElement(J,null)),r.a.createElement(A,null))))};u.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.981f2930.chunk.js.map