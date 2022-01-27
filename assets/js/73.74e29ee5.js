(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{514:function(s,n,a){"use strict";a.r(n);var e=a(8),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sso模式一-共享cookie同步会话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sso模式一-共享cookie同步会话"}},[s._v("#")]),s._v(" SSO模式一 共享Cookie同步会话")]),s._v(" "),a("blockquote",[a("p",[s._v("如果我们的多个系统可以做到：前端同域、后端同Redis，那么便可以使用 "),a("strong",[a("code",[s._v("[共享Cookie同步会话]")])]),s._v(" 的方式做到单点登录。")])]),s._v(" "),a("h2",{attrs:{id:"_1-解决思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-解决思路"}},[s._v("#")]),s._v(" 1.解决思路？")]),s._v(" "),a("p",[s._v("首先我们分析一下多个系统之间，为什么无法同步登录状态？")]),s._v(" "),a("ol",[a("li",[s._v("前端的 "),a("code",[s._v("Token")]),s._v(" 无法在多个系统下共享。")]),s._v(" "),a("li",[s._v("后端的 "),a("code",[s._v("Session")]),s._v(" 无法在多个系统间共享。")])]),s._v(" "),a("p",[s._v("所以单点登录第一招，就是对症下药：")]),s._v(" "),a("ol",[a("li",[s._v("使用 "),a("code",[s._v("共享Cookie")]),s._v(" 来解决 Token 共享问题。")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("Redis")]),s._v(" 来解决 Session 共享问题。")])]),s._v(" "),a("p",[s._v("所谓共享Cookie，就是主域名Cookie在二级域名下的共享，举个例子：写在父域名"),a("code",[s._v("stp.com")]),s._v("下的Cookie，在"),a("code",[s._v("s1.stp.com")]),s._v("、"),a("code",[s._v("s2.stp.com")]),s._v("等子域名都是可以共享访问的。")]),s._v(" "),a("p",[s._v("而共享Redis，并不需要我们把所有项目的数据都放在同一个Redis中，Sa-Token提供了 "),a("strong",[s._v("[权限缓存与业务缓存分离]")]),s._v(" 的解决方案，详情戳："),a("a",{attrs:{href:"https://sa-token.dev33.cn/doc/index.html#/plugin/alone-redis",target:"_blank",rel:"noopener noreferrer"}},[s._v("Alone独立Redis插件"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("OK，所有理论就绪，下面开始实战：")]),s._v(" "),a("h2",{attrs:{id:"_2-准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备工作"}},[s._v("#")]),s._v(" 2.准备工作")]),s._v(" "),a("p",[s._v("首先修改hosts文件"),a("code",[s._v("(C:\\windows\\system32\\drivers\\etc\\hosts)")]),s._v("，添加以下IP映射，方便我们进行测试：")]),s._v(" "),a("div",{staticClass:"language-url line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-url"}},[a("code",[a("span",{pre:!0,attrs:{class:"token path"}},[s._v("127.0.0.1")]),s._v(" sso.wcy.com\n"),a("span",{pre:!0,attrs:{class:"token path"}},[s._v("127.0.0.1")]),s._v(" s1.wcy.com\n"),a("span",{pre:!0,attrs:{class:"token path"}},[s._v("127.0.0.1")]),s._v(" s2.wcy.com\n"),a("span",{pre:!0,attrs:{class:"token path"}},[s._v("127.0.0.1")]),s._v(" s3.wcy.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("其中："),a("code",[s._v("sso.wcy.com")]),s._v("为统一认证中心地址，当用户在其它 Client 端发起登录请求时，均将其重定向至认证中心，待到登录成功之后再原路返回到 Client 端。")]),s._v(" "),a("h2",{attrs:{id:"_3-指定cookie的作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-指定cookie的作用域"}},[s._v("#")]),s._v(" 3.指定Cookie的作用域")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("sso.wcy.com")]),s._v("访问服务器，其Cookie也只能写入到"),a("code",[s._v("sso.wcy.com")]),s._v("下，为了将Cookie写入到其父级域名"),a("code",[s._v("wcy.com")]),s._v("下，我们需要更改 SSO-Server 端的 yml 配置：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sa-token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置Cookie作用域 ")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("domain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wcy.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这个配置原本是被注释掉的，现在将其打开。另外我们格外需要注意： 在SSO模式一测试完毕之后，一定要将这个配置再次注释掉，因为模式一与模式二三使用不同的授权流程，这行配置会影响到我们模式二和模式三的正常运行。")]),s._v(" "),a("h2",{attrs:{id:"_4-搭建client端项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-搭建client端项目"}},[s._v("#")]),s._v(" 4.搭建Client端项目")]),s._v(" "),a("blockquote",[a("p",[s._v("搭建示例在官方仓库的 "),a("code",[s._v("/sa-token-demo/sa-token-demo-sso1-client/")]),s._v("，如遇到难点可结合源码进行测试学习。")])]),s._v(" "),a("h3",{attrs:{id:"_1-创建项目-导入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建项目-导入依赖"}},[s._v("#")]),s._v(" 1.创建项目，导入依赖")]),s._v(" "),a("p",[s._v("新建项目 sa-token-demo-sso1-client，并添加以下依赖：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!-- Sa-Token 权限认证, 在线文档：http://sa-token.dev33.cn/ --\x3e\n<dependency>\n    <groupId>cn.dev33</groupId>\n    <artifactId>sa-token-spring-boot-starter</artifactId>\n    <version>${sa-token-version}</version>\n</dependency>\n\n\x3c!-- Sa-Token 整合redis (使用jackson序列化方式) --\x3e\n<dependency>\n    <groupId>cn.dev33</groupId>\n    <artifactId>sa-token-dao-redis-jackson</artifactId>\n    <version>${sa-token-version}</version>\n</dependency>\n<dependency>\n    <groupId>org.apache.commons</groupId>\n    <artifactId>commons-pool2</artifactId>\n</dependency>\n\n\x3c!-- Sa-Token插件：权限缓存与业务缓存分离 --\x3e\n<dependency>\n    <groupId>cn.dev33</groupId>\n    <artifactId>sa-token-alone-redis</artifactId>\n    <version>${sa-token-version}</version>\n</dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"_2-添加控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加控制器"}},[s._v("#")]),s._v(" 2.添加控制器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/**\n * Sa-Token-SSO Client端 Controller \n * @author kong\n */\n@RestController\npublic class SsoClientController {\n\n    // SSO-Client端：首页 \n    @RequestMapping("/")\n    public String index() {\n        String authUrl = SaManager.getConfig().getSso().getAuthUrl();\n        String solUrl = SaManager.getConfig().getSso().getSloUrl();\n        String str = "<h2>Sa-Token SSO-Client 应用端</h2>" + \n                    "<p>当前会话是否登录：" + StpUtil.isLogin() + "</p>" + \n                    "<p><a href=\\"javascript:location.href=\'" + authUrl + "?mode=simple&redirect=\' + encodeURIComponent(location.href);\\">登录</a> " + \n                    "<a href=\\"javascript:location.href=\'" + solUrl + "?back=\' + encodeURIComponent(location.href);\\">注销</a> </p>";\n        return str;\n    }\n\n    // 全局异常拦截 \n    @ExceptionHandler\n    public SaResult handlerException(Exception e) {\n        e.printStackTrace(); \n        return SaResult.error(e.getMessage());\n    }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"_3-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置文件"}},[s._v("#")]),s._v(" 3.配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 端口\nserver:\n    port: 9001\n\n# sa-token配置 \nsa-token: \n    # SSO-相关配置\n    sso: \n        # SSO-Server端-单点登录授权地址 \n        auth-url: http://sso.wcy.com:9000/sso/auth\n        # SSO-Server端-单点注销地址\n        slo-url: http://sso.wcy.com:9000/sso/logout\n\n    # 配置Sa-Token单独使用的Redis连接 （此处需要和SSO-Server端连接同一个Redis）\n    alone-redis: \n        # Redis数据库索引\n        database: 1\n        # Redis服务器地址\n        host: 127.0.0.1\n        # Redis服务器连接端口\n        port: 6379\n        # Redis服务器连接密码（默认为空）\n        password: \n        # 连接超时时间\n        timeout: 10s\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h3",{attrs:{id:"_4-启动类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动类"}},[s._v("#")]),s._v(" 4.启动类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/**\n * SSO模式一，Client端 Demo \n */\n@SpringBootApplication\npublic class SaSsoClientApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(SaSsoClientApplication.class, args);\n        System.out.println("\\nSa-Token SSO模式一 Client端启动成功");\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_5-访问测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-访问测试"}},[s._v("#")]),s._v(" 5.访问测试")]),s._v(" "),a("p",[s._v("启动项目，依次访问三个应用端：")]),s._v(" "),a("ul",[a("li",[s._v("http://s1.wcy.com:9001/")]),s._v(" "),a("li",[s._v("http://s2.wcy.com:9001/")]),s._v(" "),a("li",[s._v("http://s3.wcy.com:9001/")])]),s._v(" "),a("p",[s._v("均返回：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://oss.dev33.cn/sa-token/doc/sso/sso1--index.png",alt:"sso1--index.png"}})]),s._v(" "),a("p",[s._v("然后点击登录，被重定向至SSO认证中心：")]),s._v(" "),a("p",[a("strong",[s._v("最后刷新发现都已经登陆成功")])]),s._v(" "),a("p",[s._v("如上，我们使用简单的步骤实现了同域下的单点登录，聪明如你😏，马上想到了这种模式有着一个不小的限制：")]),s._v(" "),a("blockquote",[a("p",[s._v("所有子系统的域名，必须同属一个父级域名")])]),s._v(" "),a("p",[s._v("如果我们的子系统在完全不同的域名下，我们又该怎么完成单点登录功能呢？")]),s._v(" "),a("p",[s._v("且往下看，"),a("a",{attrs:{href:"https://sa-token.dev33.cn/doc/index.html#/sso/sso-type2",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSO模式二：URL重定向传播会话"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);