(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{157:function(t,s,n){t.exports=n.p+"assets/img/2.02d5c7b1.png"},158:function(t,s,n){t.exports=n.p+"assets/img/3.7b0442aa.png"},208:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1. 前言")]),t._v(" "),a("p",[t._v("在上一篇文章介绍"),a("code",[t._v("VNode")]),t._v("的时候我们说了，"),a("code",[t._v("VNode")]),t._v("最大的用途就是在数据变化前后生成真实"),a("code",[t._v("DOM")]),t._v("对应的虚拟"),a("code",[t._v("DOM")]),t._v("节点，然后就可以对比新旧两份"),a("code",[t._v("VNode")]),t._v("，找出差异所在，然后更新有差异的"),a("code",[t._v("DOM")]),t._v("节点，最终达到以最少操作真实"),a("code",[t._v("DOM")]),t._v("更新视图的目的。而对比新旧两份"),a("code",[t._v("VNode")]),t._v("并找出差异的过程就是所谓的"),a("code",[t._v("DOM-Diff")]),t._v("过程。"),a("code",[t._v("DOM-Diff")]),t._v("算法时整个虚拟"),a("code",[t._v("DOM")]),t._v("的核心所在，那么接下来，我们就以源码出发，深入研究一下"),a("code",[t._v("Vue")]),t._v("中的"),a("code",[t._v("DOM-Diff")]),t._v("过程是怎样的。")]),t._v(" "),a("h2",{attrs:{id:"_2-patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-patch"}},[t._v("#")]),t._v(" 2. patch")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Vue")]),t._v("中，把 "),a("code",[t._v("DOM-Diff")]),t._v("过程叫做"),a("code",[t._v("patch")]),t._v("过程。patch,意为“补丁”，即指对旧的"),a("code",[t._v("VNode")]),t._v("修补，打补丁从而得到新的"),a("code",[t._v("VNode")]),t._v("，非常形象哈。那不管叫什么，其本质都是把对比新旧两份"),a("code",[t._v("VNode")]),t._v("的过程。我们在下面研究"),a("code",[t._v("patch")]),t._v("过程的时候，一定把握住这样一个思想：所谓旧的"),a("code",[t._v("VNode")]),t._v("(即"),a("code",[t._v("oldVNode")]),t._v(")就是数据变化之前视图所对应的虚拟"),a("code",[t._v("DOM")]),t._v("节点，而新的"),a("code",[t._v("VNode")]),t._v("是数据变化之后将要渲染的新的视图所对应的虚拟"),a("code",[t._v("DOM")]),t._v("节点，所以我们要以生成的新的"),a("code",[t._v("VNode")]),t._v("为基准，对比旧的"),a("code",[t._v("oldVNode")]),t._v("，如果新的"),a("code",[t._v("VNode")]),t._v("上有的节点而旧的"),a("code",[t._v("oldVNode")]),t._v("上没有，那么就在旧的"),a("code",[t._v("oldVNode")]),t._v("上加上去；如果新的"),a("code",[t._v("VNode")]),t._v("上没有的节点而旧的"),a("code",[t._v("oldVNode")]),t._v("上有，那么就在旧的"),a("code",[t._v("oldVNode")]),t._v("上去掉；如果某些节点在新的"),a("code",[t._v("VNode")]),t._v("和旧的"),a("code",[t._v("oldVNode")]),t._v("上都有，那么就以新的"),a("code",[t._v("VNode")]),t._v("为准，更新旧的"),a("code",[t._v("oldVNode")]),t._v("，从而让新旧"),a("code",[t._v("VNode")]),t._v("相同。")]),t._v(" "),a("p",[t._v("可能你感觉有点绕，没关系，我们在说的通俗一点，你可以这样理解：假设你电脑上现在有一份旧的电子版文档，此时老板又给了你一份新的纸质板文档，并告诉你这两份文档内容大部分都是一样的，让你以新的纸质版文档为准，把纸质版文档做一份新的电子版文档发给老板。对于这个任务此时，你应该有两种解决方案：一种方案是不管它旧的文档内容是什么样的，统统删掉，然后对着新的纸质版文档一个字一个字的敲进去，这种方案就是不用费脑，就是受点累也能解决问题。而另外一种方案是以新的纸质版文档为基准，对比看旧的电子版文档跟新的纸质版文档有什么差异，如果某些部分在新的文档里有而旧的文档里没有，那就在旧的文档里面把这些部分加上；如果某些部分在新的文档里没有而旧的文档里有，那就在旧的文档里把这些部分删掉；如果某些部分在新旧文档里都有，那就对比看有没有需要更新的，最后在旧的文档里更新一下，最终达到把旧的文档变成跟手里纸质版文档一样，完美解决。")]),t._v(" "),a("p",[t._v("对比以上两种方案，显然你和"),a("code",[t._v("Vue")]),t._v("一样聪明，肯定会选择第二种方案。第二种方案里的旧的电子版文档对应就是已经渲染在视图上的"),a("code",[t._v("oldVNode")]),t._v("，新的纸质版文档对应的是将要渲染在视图上的新的"),a("code",[t._v("VNode")]),t._v("。总之一句话："),a("strong",[t._v("以新的VNode为基准，改造旧的oldVNode使之成为跟新的VNode一样，这就是patch过程要干的事")]),t._v("。")]),t._v(" "),a("p",[t._v("说了这么多，听起来感觉好像很复杂的样子，其实不然，我们仔细想想，整个"),a("code",[t._v("patch")]),t._v("无非就是干三件事：")]),t._v(" "),a("ul",[a("li",[t._v("创建节点：新的"),a("code",[t._v("VNode")]),t._v("中有而旧的"),a("code",[t._v("oldVNode")]),t._v("中没有，就在旧的"),a("code",[t._v("oldVNode")]),t._v("中创建。")]),t._v(" "),a("li",[t._v("删除节点：新的"),a("code",[t._v("VNode")]),t._v("中没有而旧的"),a("code",[t._v("oldVNode")]),t._v("中有，就从旧的"),a("code",[t._v("oldVNode")]),t._v("中删除。")]),t._v(" "),a("li",[t._v("更新节点：新的"),a("code",[t._v("VNode")]),t._v("和旧的"),a("code",[t._v("oldVNode")]),t._v("中都有，就以新的"),a("code",[t._v("VNode")]),t._v("为准，更新旧的"),a("code",[t._v("oldVNode")]),t._v("。")])]),t._v(" "),a("p",[t._v("OK，到这里，你就对"),a("code",[t._v("Vue")]),t._v("中的"),a("code",[t._v("patch")]),t._v("过程理解了一半了，接下来，我们就逐个分析，看"),a("code",[t._v("Vue")]),t._v("对于以上三件事都是怎么做的。")]),t._v(" "),a("h2",{attrs:{id:"_3-创建节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建节点"}},[t._v("#")]),t._v(" 3. 创建节点")]),t._v(" "),a("p",[t._v("在上篇文章中我们分析了，"),a("code",[t._v("VNode")]),t._v("类可以描述6种类型的节点，而实际上只有3种类型的节点能够被创建并插入到"),a("code",[t._v("DOM")]),t._v("中，它们分别是：元素节点、文本节点、注释节点。所以"),a("code",[t._v("Vue")]),t._v("在创建节点的时候会判断在新的"),a("code",[t._v("VNode")]),t._v("中有而旧的"),a("code",[t._v("oldVNode")]),t._v("中没有的这个节点是属于哪种类型的节点，从而调用不同的方法创建并插入到"),a("code",[t._v("DOM")]),t._v("中。")]),t._v(" "),a("p",[t._v("其实判断起来也不难，因为这三种类型的节点其特点非常明显，在源码中时怎么判断的：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 源码位置: /src/core/vdom/patch.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      \tvnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建元素节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建元素节点的子节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入到DOM中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isComment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createComment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建注释节点")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入到DOM中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建文本节点")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refElm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入到DOM中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("从上面代码中，我们可以看出：")]),t._v(" "),a("ul",[a("li",[t._v("判断是否为元素节点只需判断该"),a("code",[t._v("VNode")]),t._v("节点是否有"),a("code",[t._v("tag")]),t._v("标签即可。如果有"),a("code",[t._v("tag")]),t._v("属性即认为是元素节点，则调用"),a("code",[t._v("createElement")]),t._v("方法创建元素节点，通常元素节点还会有子节点，那就递归遍历创建所有子节点，将所有子节点创建好之后"),a("code",[t._v("insert")]),t._v("插入到当前元素节点里面，最后把当前元素节点插入到"),a("code",[t._v("DOM")]),t._v("中。")]),t._v(" "),a("li",[t._v("判断是否为注释节点，只需判断"),a("code",[t._v("VNode")]),t._v("的"),a("code",[t._v("isComment")]),t._v("属性是否为"),a("code",[t._v("true")]),t._v("即可，若为"),a("code",[t._v("true")]),t._v("则为注释节点，则调用"),a("code",[t._v("createComment")]),t._v("方法创建注释节点，再插入到"),a("code",[t._v("DOM")]),t._v("中。")]),t._v(" "),a("li",[t._v("如果既不是元素节点，也不是注释节点，那就认为是文本节点，则调用"),a("code",[t._v("createTextNode")]),t._v("方法创建文本节点，再插入到"),a("code",[t._v("DOM")]),t._v("中。")])]),t._v(" "),a("blockquote",[a("p",[t._v("代码中的"),a("code",[t._v("nodeOps")]),t._v("是"),a("code",[t._v("Vue")]),t._v("为了跨平台兼容性，对所有节点操作进行了封装，例如"),a("code",[t._v("nodeOps.createTextNode()")]),t._v("在浏览器端等同于"),a("code",[t._v("document.createTextNode()")])])]),t._v(" "),a("p",[t._v("以上就完成了创建节点的操作，其完整流程图如下：\n"),a("img",{attrs:{src:n(157),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_4-删除节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除节点"}},[t._v("#")]),t._v(" 4. 删除节点")]),t._v(" "),a("p",[t._v("如果某些节点再新的"),a("code",[t._v("VNode")]),t._v("中没有而在旧的"),a("code",[t._v("oldVNode")]),t._v("中有，那么就需要把这些节点从旧的"),a("code",[t._v("oldVNode")]),t._v("中删除。删除节点非常简单，只需在要删除节点的父元素上调用"),a("code",[t._v("removeChild")]),t._v("方法即可。源码如下：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parentNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取父节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用父节点的removeChild方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"_5-更新节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-更新节点"}},[t._v("#")]),t._v(" 5. 更新节点")]),t._v(" "),a("p",[t._v("创建节点和删除节点都比较简单，而更新节点就相对较为复杂一点了，其实也不算多复杂，只要理清逻辑就能理解了。")]),t._v(" "),a("p",[t._v("更新节点就是当某些节点在新的"),a("code",[t._v("VNode")]),t._v("和旧的"),a("code",[t._v("oldVNode")]),t._v("中都有时，我们就需要细致比较一下，找出不一样的地方进行更新。")]),t._v(" "),a("p",[t._v("介绍更新节点之前，我们先介绍一个小的概念，就是什么时静态节点？我们看个例子：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是不会变化的文字"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("上面这个节点里面只包含了纯文字，没有任何可变的变量，这也就是说，不管数据再怎么变化，只要这个节点第一次渲染了，那么它以后就永远不会发生变化，这是因为它不包含任何变量，所以数据发生任何变化都与它无关。我们把这种节点称之为静态节点。")]),t._v(" "),a("p",[t._v("OK，有了这个概念以后，我们开始更新节点。更新节点的时候我们需要对以下3种情况进行判断并分别处理：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("如果"),a("code",[t._v("VNode")]),t._v("和"),a("code",[t._v("oldVNode")]),t._v("均为静态节点")]),t._v(" "),a("p",[t._v("我们说了，静态节点无论数据发生任何变化都与它无关，所以都为静态节点的话则直接跳过，无需处理。")])]),t._v(" "),a("li",[a("p",[t._v("如果"),a("code",[t._v("VNode")]),t._v("是文本节点")]),t._v(" "),a("p",[t._v("如果"),a("code",[t._v("VNode")]),t._v("是文本节点即表示这个节点内只包含纯文本，那么只需看"),a("code",[t._v("oldVNode")]),t._v("是否也是文本节点，如果是，那就比较两个文本是否不同，如果不同则把"),a("code",[t._v("oldVNode")]),t._v("里的文本改成跟"),a("code",[t._v("VNode")]),t._v("的文本一样。如果"),a("code",[t._v("oldVNode")]),t._v("不是文本节点，那么不论它是什么，直接调用"),a("code",[t._v("setTextNode")]),t._v("方法把它改成文本节点，并且文本内容跟"),a("code",[t._v("VNode")]),t._v("相同。")])]),t._v(" "),a("li",[a("p",[t._v("如果"),a("code",[t._v("VNode")]),t._v("是元素节点")]),t._v(" "),a("p",[t._v("如果"),a("code",[t._v("VNode")]),t._v("是元素节点，则又细分以下两种情况：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("该节点包含子节点")]),t._v(" "),a("p",[t._v("如果新的节点内包含了子节点，那么此时要看旧的节点是否包含子节点，如果旧的节点里也包含了子节点，那就需要递归对比更新子节点；如果旧的节点里不包含子节点，那么这个旧节点有可能是空节点或者是文本节点，如果旧的节点是空节点就把新的节点里的子节点创建一份然后插入到旧的节点里面，如果旧的节点是文本节点，则把文本清空，然后把新的节点里的子节点创建一份然后插入到旧的节点里面。")])]),t._v(" "),a("li",[a("p",[t._v("该节点不包含子节点")]),t._v(" "),a("p",[t._v("如果该节点不包含子节点，同时它又不是文本节点，那就说明该节点是个空节点，那就好办了，不管旧节点之前里面都有啥，直接清空即可。")])])])])]),t._v(" "),a("p",[t._v("OK，处理完以上3种情况，更新节点就算基本完成了，接下来我们看下源码中具体是怎么实现的，源码如下：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchVnode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" removeOnly")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vnode与oldVnode是否完全一样？若是，退出程序")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldVnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vnode与oldVnode是否都是静态节点？若是，退出程序")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isStatic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isStatic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isCloned"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTrue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isOnce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oldCh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vnode有text属性？若没有：")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isUndef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vnode的子节点与oldVnode的子节点是否都存在？")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldCh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若都存在，判断子节点是否相同，不同则更新子节点")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldCh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldCh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" removeOnly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若只有vnode的子节点存在")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n       * 判断oldVnode是否有文本？\n       * 若没有，则把vnode的子节点添加到真实DOM中\n       * 若有，则清空Dom中的文本，再把vnode的子节点添加到真实DOM中\n       */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTextContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addVnodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若只有oldnode的子节点存在")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldCh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清空DOM中的子节点")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeVnodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldCh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldCh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若vnode和oldnode都没有子节点，但是oldnode中有文本")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清空oldnode文本")]),t._v("\n      nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTextContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上面两个判断一句话概括就是，如果vnode中既没有text，也没有子节点，那么对应的oldnode中有什么就清空什么")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若有，vnode的text属性与oldVnode的text属性是否相同？")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若相同：用vnode的text替换真实DOM的文本")]),t._v("\n    nodeOps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTextContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br")])]),a("p",[t._v("上面代码里注释已经写得很清晰了，接下来我们画流程图来梳理一下整个过程，流程图如下：\n"),a("img",{attrs:{src:n(158),alt:""}})]),t._v(" "),a("p",[t._v("通过对照着流程图以及代码，相信更新节点这部分逻辑你很容易就能理解了。")]),t._v(" "),a("p",[t._v("另外，你可能注意到了，如果新旧"),a("code",[t._v("VNode")]),t._v("里都包含了子节点，那么对于子节点的更新在代码里调用了"),a("code",[t._v("updateChildren")]),t._v("方法，而这个方法的逻辑到底是怎样的我们放在下一篇文章中展开学习。")]),t._v(" "),a("h2",{attrs:{id:"_6-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-总结"}},[t._v("#")]),t._v(" 6. 总结")]),t._v(" "),a("p",[t._v("在本篇文章中我们介绍了"),a("code",[t._v("Vue")]),t._v("中的"),a("code",[t._v("DOM-Diff")]),t._v("算法：patch过程。我们先介绍了算法的整个思想流程，然后通过梳理算法思想，了解了整个"),a("code",[t._v("patch")]),t._v("过程干了三件事，分别是：创建节点，删除节点，更新节点。并且对每件事情都对照源码展开了细致的学习，画出了其逻辑流程图。另外对于更新节点中，如果新旧"),a("code",[t._v("VNode")]),t._v("里都包含了子节点，我们就需要细致的去更新子节点，关于更新子节点的过程我们在下一篇文章中展开学习。")])])}),[],!1,null,null,null);s.default=e.exports}}]);