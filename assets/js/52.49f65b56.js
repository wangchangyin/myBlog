(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{494:function(s,n,a){"use strict";a.r(n);var e=a(8),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[s._v("#")]),s._v(" Oracle")]),s._v(" "),a("h2",{attrs:{id:"常用sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用sql"}},[s._v("#")]),s._v(" "),a("strong",[s._v("常用sql")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.备份数据库表   cmp_apply_b备份到cmp_apply_b_20210430 \ncreate table cmp_apply_b_20210430 as select * from cmp_apply_b\ncreate table employees_cp as select * from employees where 1=2; --只备份表结构\n\n2.一个表中的字段复制到另一个字段  vdef25复制到vdef49  \nupdate cmp_apply_b set vdef49 = vdef25 \n\n3.一个表中的字段更改为另一个表的字段 比如：付款申请表体vdef25 保存的是银行账户的编号，现在需要改为银行账户的PK， 但是vdef25有些是银行账户的编号，有些是PK，所以过滤掉,主键是以1001A、1001L开头的 \nupdate cmp_apply_b a\n   set a.vdef25 =\n       (select b.pk_bankaccsub from bd_bankaccsub b where a.vdef25 = b.accnum)\n       where a.vdef25 not like '1001L%' and a.vdef25 not like '1001A%'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"一-union、union-al-求并集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-union、union-al-求并集"}},[s._v("#")]),s._v(" "),a("strong",[s._v("一.Union、Union  Al(求并集)")])]),s._v(" "),a("p",[s._v("Union：对两个结果集进行并集操作，不包括重复行，同时进行默认规则的排序；")]),s._v(" "),a("p",[s._v("Union All：对两个结果集进行并集操作，包括重复行，不进行排序；")]),s._v(" "),a("p",[a("strong",[s._v("返回的列必须一致")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--对两个结果集进行并集操作，不包括重复行\nselect * from TestA where id<3 \nunion \nselect * from TestA where id<6;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"二-创建触发器-方便追错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-创建触发器-方便追错误"}},[s._v("#")]),s._v(" "),a("strong",[s._v("二.创建触发器，方便追错误")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("模板：\n--XXXXXX_TRIGGER:本触发器的命名\n--begin与end之间的代码为这个触发器所要执行的动作\nCREATE OR REPLACE TRIGGER  \"XXXXXX_TRIGGER\"\nafter UPDATE OR INSERT  on TB_FD_SHT5830523\nfor each row\n \nbegin\n    raise_application_error(-20002,'在做测试...');\nend;\n\n\n例子：\n--XXXXXX_TRIGGER:本触发器的命名\n--begin与end之间的代码为这个触发器所要执行的动作\nCREATE OR REPLACE TRIGGER  \"SETTLEMENT_SAVE_TRIGGER\"\nBEFORE INSERT  on CMP_SETTLEMENT\nfor each row\n \nbegin\n    raise_application_error(-20002,'在做测试...');\nend;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[a("strong",[s._v("2.创建修改某个表中的某个值时触发")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("CREATE OR REPLACE TRIGGER  \"cmp_informer_TRIGGER\"\nafter UPDATE on cmp_informer \nfor each row  --行级触发\nbegin\n  IF :new.generateflag = 'hasrelease' THEN \n    raise_application_error(-20002,'在做测试...');\n   END IF;\nend;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"三-group一定放到where后面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-group一定放到where后面"}},[s._v("#")]),s._v(" "),a("strong",[s._v("三.group一定放到where后面")])]),s._v(" "),a("p",[s._v("**注意:**group by name，那么找name那一列，具有相同name值的行，合并成一行，")]),s._v(" "),a("p",[s._v("需求：通过线下预约表，统计预约人员表的人数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT\n\to.*,COUNT(u.id) as count_user\nFROM\n\tmy_course_order o\nleft JOIN my_course_order_user u on o.id=u.order_id\nWHERE\n\to.course_id = 2\nGROUP BY\n\to.id\nORDER BY\n\to.STATUS desc,\n\to.create_time DESC\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"四-创建视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-创建视图"}},[s._v("#")]),s._v(" "),a("strong",[s._v("四.创建视图")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("--创建视图\nCREATE OR REPLACE VIEW v_cmp_informer\nAS\nselect * from cmp_informer where generateflag='hasnogenerate' and  pk_informer ='0001A7100000000AA4W3'    --1001A71000000064B5NG\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);