(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{517:function(s,n,e){"use strict";e.r(n);var a=e(8),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"模式二-url重定向传播会话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模式二-url重定向传播会话"}},[s._v("#")]),s._v(" 模式二：URL重定向传播会话")]),s._v(" "),e("p",[s._v("如果我们的多个系统：部署在不同的域名之下，但是后端可以连接同一个Redis，那么便可以使用 "),e("strong",[e("code",[s._v("[URL重定向传播会话]")])]),s._v(" 的方式做到单点登录。")]),s._v(" "),e("h2",{attrs:{id:"_1、解题思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、解题思路"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://sa-token.dev33.cn/doc/index.html#/sso/sso-type2?id=_1%E3%80%81%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"}},[s._v("1、解题思路"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("首先我们再次复习一下，多个系统之间为什么无法同步登录状态？")]),s._v(" "),e("ol",[e("li",[s._v("前端的"),e("code",[s._v("Token")]),s._v("无法在多个系统下共享。")]),s._v(" "),e("li",[s._v("后端的"),e("code",[s._v("Session")]),s._v("无法在多个系统间共享。")])]),s._v(" "),e("p",[s._v('关于第二点，我们已在 "SSO模式一" 章节中阐述，使用 '),e("a",{attrs:{href:"https://sa-token.dev33.cn/doc/index.html#/plugin/alone-redis",target:"_blank",rel:"noopener noreferrer"}},[s._v("Alone独立Redis插件"),e("OutboundLink")],1),s._v(" 做到权限缓存直连 SSO-Redis 数据中心，在此不再赘述。")]),s._v(" "),e("p",[s._v('而第一点，才是我们解决问题的关键所在，在跨域模式下，意味着 "共享Cookie方案" 的失效，我们必须采用一种新的方案来传递Token。')]),s._v(" "),e("ol",[e("li",[s._v("用户在 子系统 点击 "),e("code",[s._v("[登录]")]),s._v(" 按钮。")]),s._v(" "),e("li",[s._v("用户跳转到子系统登录接口/sso/login，并携带back参数记录初始页面URL。\n"),e("ul",[e("li",[s._v("形如："),e("code",[s._v("http://{sso-client}/sso/login?back=xxx")])])])]),s._v(" "),e("li",[s._v("子系统检测到此用户尚未登录，再次将其重定向至SSO认证中心，并携带redirect参数记录子系统的登录页URL。\n"),e("ul",[e("li",[s._v("形如："),e("code",[s._v("http://{sso-server}/sso/auth?redirect=xxx?back=xxx")])])])]),s._v(" "),e("li",[s._v("用户进入了 SSO认证中心 的登录页面，开始登录。")]),s._v(" "),e("li",[s._v("用户 输入账号密码 并 登录成功，SSO认证中心再次将用户重定向至子系统的登录接口/sso/login，并携带ticket码参数。\n"),e("ul",[e("li",[s._v("形如："),e("code",[s._v("http://{sso-client}/sso/login?back=xxx&ticket=xxxxxxxxx")])])])]),s._v(" "),e("li",[s._v("子系统根据 "),e("code",[s._v("ticket码")]),s._v(" 从 "),e("code",[s._v("SSO-Redis")]),s._v(" 中获取账号id，并在子系统登录此账号会话。")]),s._v(" "),e("li",[s._v("子系统将用户再次重定向至最初始的 "),e("code",[s._v("back")]),s._v(" 页面。")])]),s._v(" "),e("p",[s._v("整个过程，除了第四步用户在SSO认证中心登录时会被打断，其余过程均是自动化的，当用户在另一个子系统再次点击"),e("code",[s._v("[登录]")]),s._v("按钮，由于此用户在SSO认证中心已有会话存在， 所以第四步也将自动化，也就是单点登录的最终目的 —— 一次登录，处处通行。")]),s._v(" "),e("p",[s._v("下面我们按照步骤依次完成上述过程：")]),s._v(" "),e("h2",{attrs:{id:"_2、准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、准备工作"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://sa-token.dev33.cn/doc/index.html#/sso/sso-type2?id=_2%E3%80%81%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"}},[s._v("2、准备工作"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"_1-修改本地映射"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改本地映射"}},[s._v("#")]),s._v(" 1.修改本地映射")]),s._v(" "),e("p",[s._v("首先修改hosts文件"),e("code",[s._v("(C:\\windows\\system32\\drivers\\etc\\hosts)")]),s._v("，添加以下IP映射，方便我们进行测试：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("127.0.0.1 sa-sso-server.com\n127.0.0.1 sa-sso-client1.com\n127.0.0.1 sa-sso-client2.com\n127.0.0.1 sa-sso-client3.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_2-单点登录系统修改配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-单点登录系统修改配置"}},[s._v("#")]),s._v(" 2.单点登录系统修改配置")]),s._v(" "),e("p",[s._v("在SSO模式一章节中我们打开了配置：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sa-token: \n    cookie:\n        # 配置Cookie作用域\n        domain: stp.com\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("此为模式一专属配置，现在我们将其注释掉，并按照注释提示打开其他相应的注释")]),s._v(" "),e("h2",{attrs:{id:"_3-搭建-client-端项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-搭建-client-端项目"}},[s._v("#")]),s._v(" 3."),e("a",{attrs:{href:"https://sa-token.dev33.cn/doc/index.html#/sso/sso-type2?id=_3%E3%80%81%E6%90%AD%E5%BB%BA-client-%E7%AB%AF%E9%A1%B9%E7%9B%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("搭建 Client 端项目"),e("OutboundLink")],1)]),s._v(" "),e("blockquote",[e("p",[s._v("搭建示例在官方仓库的 "),e("code",[s._v("/sa-token-demo/sa-token-demo-sso2-client/")]),s._v("，如遇到难点可结合源码进行测试学习")])]),s._v(" "),e("h3",{attrs:{id:"_1-创建项目-导入依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建项目-导入依赖"}},[s._v("#")]),s._v(" 1.创建项目，导入依赖")]),s._v(" "),e("p",[s._v("创建一个 SpringBoot 项目 "),e("code",[s._v("sa-token-demo-sso2-client")]),s._v("，引入依赖：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!-- Sa-Token 权限认证, 在线文档：http://sa-token.dev33.cn/ --\x3e\n<dependency>\n    <groupId>cn.dev33</groupId>\n    <artifactId>sa-token-spring-boot-starter</artifactId>\n    <version>1.28.0</version>\n</dependency>\n\n\x3c!-- Sa-Token 整合redis (使用jackson序列化方式) --\x3e\n<dependency>\n    <groupId>cn.dev33</groupId>\n    <artifactId>sa-token-dao-redis-jackson</artifactId>\n    <version>1.28.0</version>\n</dependency>\n<dependency>\n    <groupId>org.apache.commons</groupId>\n    <artifactId>commons-pool2</artifactId>\n</dependency>\n\n\x3c!-- Sa-Token插件：权限缓存与业务缓存分离 --\x3e\n<dependency>\n    <groupId>cn.dev33</groupId>\n    <artifactId>sa-token-alone-redis</artifactId>\n    <version>1.28.0</version>\n</dependency>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h3",{attrs:{id:"_2-创建-sso-client-端认证接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-sso-client-端认证接口"}},[s._v("#")]),s._v(" 2.创建 SSO-Client 端认证接口")]),s._v(" "),e("p",[s._v("同 SSO-Server 一样，Sa-Token 为 SSO-Client 端所需代码也提供了完整的封装，你只需提供一个访问入口，接入 Sa-Token 的方法即可。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\n/**\n * Sa-Token-SSO Client端 Controller \n */\n@RestController\npublic class SsoClientController {\n\n    // 首页 \n    @RequestMapping("/")\n    public String index() {\n        String str = "<h2>Sa-Token SSO-Client 应用端</h2>" + \n                    "<p>当前会话是否登录：" + StpUtil.isLogin() + "</p>" + \n                    "<p><a href=\\"javascript:location.href=\'/sso/login?back=\' + encodeURIComponent(location.href);\\">登录</a> " + \n                    "<a href=\'/sso/logout?back=self\'>注销</a></p>";\n        return str;\n    }\n\n    /*\n     * SSO-Client端：处理所有SSO相关请求 \n     *         http://{host}:{port}/sso/login          -- Client端登录地址，接受参数：back=登录后的跳转地址 \n     *         http://{host}:{port}/sso/logout         -- Client端单点注销地址（isSlo=true时打开），接受参数：back=注销后的跳转地址 \n     *         http://{host}:{port}/sso/logoutCall     -- Client端单点注销回调地址（isSlo=true时打开），此接口为框架回调，开发者无需关心\n     */\n    @RequestMapping("/sso/*")\n    public Object ssoRequest() {\n        return SaSsoHandle.clientRequest();\n    }\n\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("h3",{attrs:{id:"_3-配置sso认证中心地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置sso认证中心地址"}},[s._v("#")]),s._v(" 3.配置SSO认证中心地址")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 端口\nserver:\n    port: 9001\n\n# sa-token配置 \nsa-token: \n    # SSO-相关配置\n    sso: \n        # SSO-Server端 统一认证地址 \n        auth-url: http://sa-sso-server.com:9000/sso/auth\n        # 是否打开单点注销接口\n        is-slo: true\n\n    # 配置Sa-Token单独使用的Redis连接 （此处需要和SSO-Server端连接同一个Redis）\n    alone-redis: \n        # Redis数据库索引 (默认为0)\n        database: 1\n        # Redis服务器地址\n        host: 127.0.0.1\n        # Redis服务器连接端口\n        port: 6379\n        # Redis服务器连接密码（默认为空）\n        password: \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("注意点："),e("code",[s._v("sa-token.alone-redis")]),s._v(" 的配置需要和SSO-Server端连接同一个Redis（database也要一样）")]),s._v(" "),e("h3",{attrs:{id:"_4-启动类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动类"}},[s._v("#")]),s._v(" 4.启动类")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@SpringBootApplication\npublic class SaSsoClientApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(SaSsoClientApplication.class, args);\n        System.out.println("\\nSa-Token-SSO Client端启动成功");\n    }\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("启动项目")]),s._v(" "),e("h3",{attrs:{id:"_5-测试访问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试访问"}},[s._v("#")]),s._v(" 5.测试访问")]),s._v(" "),e("p",[s._v("(1) 依次启动 "),e("code",[s._v("SSO-Server")]),s._v(" 与 "),e("code",[s._v("SSO-Client")]),s._v("，然后从浏览器访问：http://sa-sso-client1.com:9001/")]),s._v(" "),e("p",[s._v("(2) 首次打开，提示当前未登录，我们点击**"),e("code",[s._v("登录")]),s._v("** 按钮，页面会被重定向到登录中心")]),s._v(" "),e("p",[s._v("(3) SSO-Server提示我们在认证中心尚未登录，我们点击 **"),e("code",[s._v("doLogin登录")]),s._v("**按钮进行模拟登录")]),s._v(" "),e("p",[s._v("(4) SSO-Server认证中心登录成功，我们回到刚才的页面刷新页面")]),s._v(" "),e("p",[s._v("(5) 页面被重定向至"),e("code",[s._v("Client")]),s._v("端首页，并提示登录成功，至此，"),e("code",[s._v("Client1")]),s._v("应用已单点登录成功！")]),s._v(" "),e("p",[s._v("(6) 我们再次访问"),e("code",[s._v("Client2")]),s._v("：http://sa-sso-client2.com:9001/")]),s._v(" "),e("p",[s._v("(7) 提示未登录，我们点击**"),e("code",[s._v("登录")]),s._v("**按钮，会直接提示登录成功")]),s._v(" "),e("p",[s._v("(8) 同样的方式，我们打开"),e("code",[s._v("Client3")]),s._v("，也可以直接登录成功：http://sa-sso-client3.com:9001/")]),s._v(" "),e("p",[s._v("至此，测试完毕！")]),s._v(" "),e("p",[s._v("可以看出，除了在"),e("code",[s._v("Client1")]),s._v("端我们需要手动登录一次之外，在"),e("code",[s._v("Client2端")]),s._v("和"),e("code",[s._v("Client3端")]),s._v("都是可以无需再次认证，直接登录成功的。")]),s._v(" "),e("p",[s._v("我们可以通过 F12控制台 Netword跟踪整个过程")])])}),[],!1,null,null,null);n.default=t.exports}}]);