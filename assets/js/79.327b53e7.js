(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{519:function(l,t,_){"use strict";_.r(t);var v=_(8),i=Object(v.a)({},(function(){var l=this,t=l.$createElement,_=l._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h2",{attrs:{id:"_1-kill-9-和kill-15的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-kill-9-和kill-15的区别"}},[l._v("#")]),l._v(" 1.kill -9 和kill -15的区别")]),l._v(" "),_("blockquote",[_("p",[l._v("HUP 1 终端断线")]),l._v(" "),_("p",[l._v("INT 2 中断（同 Ctrl + C）")]),l._v(" "),_("p",[l._v("QUIT 3 退出（同 Ctrl + \\）")]),l._v(" "),_("p",[l._v("TERM 15 终止")]),l._v(" "),_("p",[l._v("KILL 9 强制终止")]),l._v(" "),_("p",[l._v("CONT 18 继续（与STOP相反， fg/bg命令）")]),l._v(" "),_("p",[l._v("STOP 19 暂停（同 Ctrl + Z）")])]),l._v(" "),_("p",[l._v("比较常用的就是强制终止信号：9和终止信号：15，另外，中断信号：2其实就是我们前文提到的Ctrl + C结束前台进程。")]),l._v(" "),_("p",[l._v("那么，kill -9 和 kill -15到底有什么区别呢？该如何选择呢？")]),l._v(" "),_("ul",[_("li",[_("strong",[l._v("kill 命令默认为kill -15")]),l._v("，即终止，该操作只是"),_("strong",[l._v('通知对应的进程要进行"安全、干净的退出"')]),l._v("，有可能会被阻塞或者其他问题导致无法成功，从而终止杀进程；")]),l._v(" "),_("li",[l._v("kill -15会进行其他的操作，比如java中关闭tomacat的连接、执行定时任务等等；")]),l._v(" "),_("li",[_("strong",[l._v("kill -9会直接强制终止")]),l._v("，停止所有操作，直接终止应用，那么会造成脏数据、定时任务未执行完成等等。")])])])}),[],!1,null,null,null);t.default=i.exports}}]);