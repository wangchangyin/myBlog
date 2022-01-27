(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{518:function(t,a,_){"use strict";_.r(a);var v=_(8),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"一-集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-集合"}},[t._v("#")]),t._v(" 一.集合")]),t._v(" "),_("h2",{attrs:{id:"_1-1-map"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-map"}},[t._v("#")]),t._v(" 1.1. Map")]),t._v(" "),_("h3",{attrs:{id:"_1-多线程操作hashmap会出现什么问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-多线程操作hashmap会出现什么问题"}},[t._v("#")]),t._v(" 1.多线程操作hashMap会出现什么问题")]),t._v(" "),_("p",[t._v("参考：http://www.imooc.com/article/details/id/292265")]),t._v(" "),_("blockquote",[_("p",[t._v("若当前线程此时获得ertry节点，但是被线程中断无法继续执行，此时线程二进入transfer函数，并把函数顺利执行，此时新表中的某个位置有了节点，之后线程一获得执行权继续执行，因为并发transfer，所以两者都是扩容的同一个链表，当线程一执行到e.next = new table[i] 的时候，由于线程二之前数据迁移的原因导致此时new table[i] 上就有ertry存在，所以线程一执行的时候，会将next节点，设置为自己，导致自己互相使用next引用对方，因此产生链表，导致死循环。")])]),t._v(" "),_("h2",{attrs:{id:"_1-2-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-list"}},[t._v("#")]),t._v(" 1.2.List")]),t._v(" "),_("h3",{attrs:{id:"_1-iterator与iterable有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-iterator与iterable有什么区别"}},[t._v("#")]),t._v(" 1.Iterator与Iterable有什么区别")]),t._v(" "),_("ul",[_("li",[t._v("List、Set都实现了Collection接口，该接口实现了获取Iterator对象的方法")]),t._v(" "),_("li",[t._v("Iterator是一个接口，只有一个获得Iterable对象的方法")]),t._v(" "),_("li",[t._v("Iterable则是具体进行遍历的")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/wcy_dch/images/raw/master/img/image-20211015100935370.png",alt:"image-20211015100935370"}})]),t._v(" "),_("h1",{attrs:{id:"二-gc面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-gc面试题"}},[t._v("#")]),t._v(" 二.GC面试题")]),t._v(" "),_("h3",{attrs:{id:"_1-判断一个java对象是否存活"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-判断一个java对象是否存活"}},[t._v("#")]),t._v(" 1.判断一个Java对象是否存活")]),t._v(" "),_("p",[t._v("在"),_("code",[t._v("Java")]),t._v("虚拟机中，判断对象是否存活有2种方法：")]),t._v(" "),_("ol",[_("li",[t._v("引用计数法")]),t._v(" "),_("li",[t._v("引用链法（可达性分析法）")])]),t._v(" "),_("p",[_("strong",[t._v("1.引用计数法：")])]),t._v(" "),_("ul",[_("li",[t._v("给 "),_("code",[t._v("Java")]),t._v(" 对象添加一个引用计数器")]),t._v(" "),_("li",[t._v("每当有一个地方引用它时，计数器 +1；引用失效则 -1；")])]),t._v(" "),_("p",[_("strong",[t._v("2.引用链法：")])]),t._v(" "),_("p",[t._v("含3个步骤：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("可达性分析")]),t._v(" "),_("p",[t._v("寻找到所有未被引用的的对象，如下图:GCA对象有引用，GCB对象没有引用，则GC B为未被引用对象放入到即将回收的集合中。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wangchangyin/images@main/hand/AHR0CH~1.WEB",alt:"img"}})])]),t._v(" "),_("li",[_("p",[t._v("第一次标记 & 筛选")]),t._v(" "),_("p",[t._v("所有未被引用的对象并不一定就判断死亡，还需要进行第一次标记；")]),t._v(" "),_("blockquote",[_("p",[t._v("a. 不筛选：继续留在 ”即将回收“的集合里，等待回收；\nb. 筛选：从 ”即将回收“的集合取出")])]),t._v(" "),_("p",[t._v("筛选的标准：该对象是否有必要执行 finalize()方法")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("若有必要执行（人为设置），则筛选出来，进入下一阶段（第二次标记 & 筛选）；")])]),t._v(" "),_("li",[_("p",[t._v("若没必要执行，判断该对象死亡，不筛选 并等待回收")]),t._v(" "),_("blockquote",[_("p",[t._v("当对象无 finalize()方法 或 finalize()已被虚拟机调用过，则视为“没必要执行”")])])])])]),t._v(" "),_("li",[_("p",[t._v("第二次标记 & 筛选**（执行finalize方法）**")]),t._v(" "),_("p",[t._v("该对象会被放到一个 "),_("code",[t._v("F-Queue")]),t._v(" 队列中，并由 虚拟机自动建立、优先级低的"),_("code",[t._v("Finalizer")]),t._v(" 线程去执行 队列中该对象的"),_("code",[t._v("finalize()")])]),t._v(" "),_("p",[t._v("在执行"),_("code",[t._v("finalize()")]),t._v("过程中，"),_("strong",[t._v("若对象依然没与引用链上的"),_("code",[t._v("GC Roots")]),t._v(" 直接关联 或 间接关联（即关联上与"),_("code",[t._v("GC Roots")]),t._v(" 关联的对象）")]),t._v("，那么该对象将被判断死亡，不筛选（留在”即将回收“集合里） 并 等待回收")])])]),t._v(" "),_("h1",{attrs:{id:"三-常规"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-常规"}},[t._v("#")]),t._v(" 三.常规")]),t._v(" "),_("h2",{attrs:{id:"_1-常见的异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见的异常"}},[t._v("#")]),t._v(" 1.常见的异常")]),t._v(" "),_("ol",[_("li",[t._v("NullPointException：空指针")]),t._v(" "),_("li",[t._v("数组下标越界")]),t._v(" "),_("li",[t._v("数组计算错误")]),t._v(" "),_("li",[t._v("java.util.ConcurrentModificationException并发操作异常")]),t._v(" "),_("li",[t._v("RejectedExecutorException：拒绝策略异常")])])])}),[],!1,null,null,null);a.default=e.exports}}]);