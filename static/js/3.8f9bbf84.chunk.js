(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[3],{39:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return l}));var r=e(5),i=e(6);function o(){var t=Object(r.a)(["\n  margin: 0 0 1.5em 0;\n  line-height: 1.5em;\n\n  & + & {\n    margin-top: 1.5em;\n  }\n"]);return o=function(){return t},t}function a(){var t=Object(r.a)(["\n  text-align: left;\n"]);return a=function(){return t},t}function s(){var t=Object(r.a)(["\n  color: #313f47;\n  font-size: 2em;\n  letter-spacing: 0.22em;\n  line-height: 1.5;\n  margin: 0 0 0.525em 0;\n"]);return s=function(){return t},t}var u=i.b.h1(s()),c=i.b.span(a()),l=i.b.p(o())},40:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return e}}(t,n)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,"a",(function(){return S}));var o=e(5),a=e(2),s=e(0),u=e.n(s),c=e(6);e(7);var l=e(16),p=e.n(l),f=!1,h=u.a.createContext(null),d="unmounted",m="exited",b="entering",x="entered",g="exiting",E=function(t){var n,e;function r(n,e){var r;r=t.call(this,n,e)||this;var i,o=e&&!e.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?o?(i=m,r.appearStatus=b):i=x:i=n.unmountOnExit||n.mountOnEnter?d:m,r.state={status:i},r.nextCallback=null,r}e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e,r.getDerivedStateFromProps=function(t,n){return t.in&&n.status===d?{status:m}:null};var i=r.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==b&&e!==x&&(n=b):e!==b&&e!==x||(n=g)}this.updateStatus(!1,n)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t,n,e,r=this.props.timeout;return t=n=e=r,null!=r&&"number"!==typeof r&&(t=r.exit,n=r.enter,e=void 0!==r.appear?r.appear:n),{exit:t,enter:n,appear:e}},i.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===b?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===m&&this.setState({status:d})},i.performEnter=function(t){var n=this,e=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[p.a.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!t&&!e||f?this.safeSetState({status:x},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:b},(function(){n.props.onEntering(o,a),n.onTransitionEnd(u,(function(){n.safeSetState({status:x},(function(){n.props.onEntered(o,a)}))}))})))},i.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),r=this.props.nodeRef?void 0:p.a.findDOMNode(this);n&&!f?(this.props.onExit(r),this.safeSetState({status:g},(function(){t.props.onExiting(r),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:m},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:m},(function(){t.props.onExited(r)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},i.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(r){e&&(e=!1,n.nextCallback=null,t(r))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},i.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:p.a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(e&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},i.render=function(){var t=this.state.status;if(t===d)return null;var n=this.props,e=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return u.a.createElement(h.Provider,{value:null},"function"===typeof e?e(t,r):u.a.cloneElement(u.a.Children.only(e),r))},r}(u.a.Component);function v(){}E.contextType=h,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},E.UNMOUNTED=d,E.EXITED=m,E.ENTERING=b,E.ENTERED=x,E.EXITING=g;var y=E;function O(){var t=Object(o.a)(["\n        transform: rotateY(180deg);\n      "]);return O=function(){return t},t}function j(){var t=Object(o.a)(["\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);\n  cursor: default;\n  left: 50%;\n  max-height: calc(100vh - 108px);\n  max-width: 100%;\n  overflow: auto;\n  padding: 4.5em 3em 3em 3em;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  transform-origin: 50% 50%;\n  transition: opacity 1s ease, transform 1s ease;\n  min-width: 27em;\n  z-index: 2;\n\n  opacity: ",";\n  transform: translateX(-50%) translateY(-50%)\n    rotateX(\n      ","deg\n    )\n    rotateY(\n      ","deg\n    );\n\n  ","\n\n  @media (max-width: 450px) {\n    border-radius: 10px 10px 0 0;\n    bottom: 48px;\n    left: 0;\n    min-width: 0;\n    width: 100%;\n    top: unset;\n    transform-origin: unset;\n    transform: unset;\n  }\n"]);return j=function(){return t},t}var k=c.b.section(j(),(function(t){var n=t.state;return"entering"===n||"entered"===n?0:1}),(function(t){var n=t.state;return"entering"===n||"entered"===n?15:0}),(function(t){var n=t.state;return"exiting"===n||"exited"===n?0:90}),(function(t){if("exiting"===t.state)return Object(c.a)(O())})),S=function(t){var n=t.children,e=i(u.a.useState(!0),2),r=e[0],o=e[1];return u.a.useEffect((function(){setTimeout((function(){o(!1)}),100)}),[]),Object(a.jsx)(y,{in:r,timeout:0,children:function(t){return Object(a.jsx)(k,{state:t,children:n})}})}},43:function(t,n,e){"use strict";e.r(n),e.d(n,"AboutCard",(function(){return a}));var r=e(2),i=(e(0),e(40)),o=e(39),a=function(){return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(o.a,{children:"About Me"}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.b,{children:"Heyhihello!"}),Object(r.jsx)(o.b,{children:"I've always been one to tinker with everything, and the web is my current playground of choice. My career has brought me from mobile work, through backend, and is currently focused on frontend web work. Tending to not wait for permission or tipping points to fix things, and paraphrasing Kent Beck, I make the hard changes easy, then make easy changes."}),Object(r.jsxs)(o.b,{children:["Presently, my full time job focuses on creating and maintaining a reusable library of components / utilities, as well as acting as a Jack-of-All-Trades resource on various frontend arcanas. I tend to pick out the right tool for the job after some research rather than the one that has the most hype. I act as technical support, provide guidance and mentorship for new hires and interns, and code like Hamilton writes (",Object(r.jsx)("a",{href:"https://www.youtube.com/watch?v=q9iLfPP4Ps8",rel:"noopener noreferrer",target:"_blank",children:"non-stop"}),")."]}),Object(r.jsx)(o.b,{children:"While limited by the current pandemic, I usually balance this out by going / flying to various social dancing events (Lindy Hop, Balboa, East Coast Swing, Line Dancing), and I have performed in various hip hop and swing dancing shows in and around the LA area!"})]})]})}}}]);
//# sourceMappingURL=3.8f9bbf84.chunk.js.map