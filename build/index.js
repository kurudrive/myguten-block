!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.serverSideRender},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),l={backgroundColor:"#900",color:"#fff",padding:"20px"};Object(a.registerBlockType)("gutenberg-examples/example-01-basic-esnext",{title:"Example 01",icon:"universal-access-alt",category:"layout",example:{},edit:function(){return Object(r.createElement)("div",{style:l},"Hello World, step 1 (from the editor).")},save:function(){return Object(r.createElement)("div",{style:l},"Hello World, step 1 (from the frontend).")}}),Object(a.registerBlockType)("gutenberg-examples/example-02-stylesheets",{title:"Example 02",icon:"universal-access-alt",category:"layout",example:{},edit:function(e){var t=e.className;return Object(r.createElement)("p",{className:t},"Hello World, step 2 (from the editor, in green).")},save:function(){return Object(r.createElement)("p",null,"Hello World, step 2 (from the frontend, in red).")}});var c=n(3);Object(a.registerBlockType)("gutenberg-examples/example-03-editable-esnext",{title:"Example 03",icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"}},example:{attributes:{content:"Hello World"}},edit:function(e){var t=e.attributes.content,n=e.setAttributes,a=e.className;return Object(r.createElement)(c.RichText,{tagName:"p",className:a,onChange:function(e){n({content:e})},value:t})},save:function(e){return Object(r.createElement)(c.RichText.Content,{tagName:"p",value:e.attributes.content})}}),Object(a.registerBlockType)("gutenberg-examples/example-04-controls-esnext",{title:"Example 04",icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"},alignment:{type:"string",default:"none"}},example:{attributes:{content:"Hello World",alignment:"right"}},edit:function(e){var t=e.attributes,n=t.content,a=t.alignment,l=e.className;return Object(r.createElement)("div",null,Object(r.createElement)(c.BlockControls,null,Object(r.createElement)(c.AlignmentToolbar,{value:a,onChange:function(t){e.setAttributes({alignment:void 0===t?"none":t})}})),Object(r.createElement)(c.RichText,{className:l,style:{textAlign:a},tagName:"p",onChange:function(t){e.setAttributes({content:t})},value:n}))},save:function(e){return Object(r.createElement)(c.RichText.Content,{className:"gutenberg-examples-align-".concat(e.attributes.alignment),tagName:"p",value:e.attributes.content})}});var i=n(1),o=n(4);Object(a.registerBlockType)("gutenberg-examples/recipe-card",{title:Object(i.__)("Example: Recipe Card","gutenberg-examples"),icon:"index-card",category:"layout",attributes:{title:{type:"array",source:"children",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},ingredients:{type:"array",source:"children",selector:".ingredients"},instructions:{type:"array",source:"children",selector:".steps"}},example:{attributes:{title:Object(i.__)("わーい","gutenberg-examples"),mediaURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg",ingredients:[Object(i.__)("flour","gutenberg-examples"),Object(i.__)("sugar","gutenberg-examples"),Object(i.__)("chocolate","gutenberg-examples"),"💖"],instructions:[Object(i.__)("Mix","gutenberg-examples"),Object(i.__)("Bake","gutenberg-examples"),Object(i.__)("Enjoy","gutenberg-examples")]}},edit:function(e){var t=e.className,n=e.attributes,a=n.title,l=n.mediaID,s=n.mediaURL,u=n.ingredients,m=n.instructions,p=e.setAttributes;return Object(r.createElement)("div",{className:t},Object(r.createElement)(c.RichText,{tagName:"h2",placeholder:Object(i.__)("Write Recipe title…","gutenberg-examples"),value:a,onChange:function(e){p({title:e})}}),Object(r.createElement)("div",{className:"recipe-image"},Object(r.createElement)(c.MediaUpload,{onSelect:function(e){p({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:l,render:function(e){var t=e.open;return Object(r.createElement)(o.Button,{className:l?"image-button":"button button-large",onClick:t},l?Object(r.createElement)("img",{src:s,alt:Object(i.__)("Upload Recipe Image","gutenberg-examples")}):Object(i.__)("Upload Image","gutenberg-examples"))}})),Object(r.createElement)("h3",null,Object(i.__)("Ingredients","gutenberg-examples")),Object(r.createElement)(c.RichText,{tagName:"ul",multiline:"li",placeholder:Object(i.__)("Write a list of ingredients…","gutenberg-examples"),value:u,onChange:function(e){p({ingredients:e})},className:"ingredients"}),Object(r.createElement)("h3",null,Object(i.__)("Instructions","gutenberg-examples")),Object(r.createElement)(c.RichText,{tagName:"div",multiline:"p",className:"steps",placeholder:Object(i.__)("Write the instructions…","gutenberg-examples"),value:m,onChange:function(e){p({instructions:e})}}))},save:function(e){var t=e.className,n=e.attributes,a=n.title,l=n.mediaURL,o=n.ingredients,s=n.instructions;return Object(r.createElement)("div",{className:t},Object(r.createElement)(c.RichText.Content,{tagName:"h2",value:a}),l&&Object(r.createElement)("img",{className:"recipe-image",src:l,alt:Object(i.__)("Recipe Image","gutenberg-examples")}),Object(r.createElement)("h3",null,Object(i.__)("Ingredients","gutenberg-examples")),Object(r.createElement)(c.RichText.Content,{tagName:"ul",className:"ingredients",value:o}),Object(r.createElement)("h3",null,Object(i.__)("Instructions","gutenberg-examples")),Object(r.createElement)(c.RichText.Content,{tagName:"div",className:"steps",value:s}))}});var s=n(5);Object(a.registerBlockType)("gutenberg-examples/post-list",{title:"Example: Post List",icon:"megaphone",category:"widgets",edit:Object(s.withSelect)((function(e){return{posts:e("core").getEntityRecords("postType","post")}}))((function(e){var t=e.posts,n=e.className;if(!t)return"Loading...";if(t&&0===t.length)return"No posts";var a=t[0];return Object(r.createElement)("a",{className:n,href:a.link},a.title.rendered)}))});var u=n(6),m=n.n(u);Object(a.registerBlockType)("gutenberg-examples/post-list-server",{title:"Example: Post List Server",icon:"megaphone",category:"widgets",edit:function(e){return Object(r.createElement)(m.a,{block:"gutenberg-examples/post-list-server",attributes:e.attributes})}});var p={backgroundColor:"#900",color:"#fff",padding:"20px"};Object(a.registerBlockType)("gutenberg-examples/meta-block",{title:"aaaMeta Block",icon:"smiley",category:"text",example:{},edit:function(){return Object(r.createElement)("div",{style:p},"Hello World, step 1 (from the editor).")},save:function(){return Object(r.createElement)("div",{style:p},"Hello World, step 1 (from the frontend).")}})}]);