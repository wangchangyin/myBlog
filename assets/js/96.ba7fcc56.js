(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{535:function(e,s,a){"use strict";a.r(s);var t=a(8),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker基础-入门基础和helloworld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker基础-入门基础和helloworld"}},[e._v("#")]),e._v(" Docker基础 - 入门基础和Helloworld")]),e._v(" "),a("blockquote",[a("p",[e._v("在了解了虚拟化技术和Docker之后，让我们上手Docker，看看Docker是怎么工作的。这里会介绍CentOS环境下Docker的安装和配置，以及会给你展示两个实例，给你一个直观的理解。再啰嗦下，有条件的情况下直接看"),a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网  (opens new window)"),a("OutboundLink")],1),e._v(", 网上资料鱼龙混杂，版本也更新不及时。")])]),e._v(" "),a("h2",{attrs:{id:"docker-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构"}},[e._v("#")]),e._v(" Docker 架构")]),e._v(" "),a("blockquote",[a("p",[e._v("理解如下的一些概念，你才知道安装什么")])]),e._v(" "),a("p",[e._v("Docker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器。")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Docker 客户端(Client)")]),e._v(" : Docker 客户端通过命令行或者其他工具使用 Docker SDK (https://docs.docker.com/develop/sdk/) 与 Docker 的守护进程通信。")]),e._v(" "),a("li",[a("strong",[e._v("Docker 主机(Host)")]),e._v(" ：一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。")])]),e._v(" "),a("p",[e._v("Docker 包括三个基本概念:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("镜像（Image）")]),e._v("：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。")]),e._v(" "),a("li",[a("strong",[e._v("容器（Container）")]),e._v("：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),e._v(" "),a("li",[a("strong",[e._v("仓库（Repository）")]),e._v("：仓库可看着一个代码控制中心，用来保存镜像。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/wcy_dch/images/raw/master/img/20211019171950.png",alt:"img"}})]),e._v(" "),a("h2",{attrs:{id:"docker-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[e._v("#")]),e._v(" Docker 安装")]),e._v(" "),a("blockquote",[a("p",[e._v("从 2017 年 3 月开始 docker 在原来的基础上分为两个分支版本: Docker CE 和 Docker EE：Docker CE 即社区免费版；Docker EE 即企业版，强调安全，但需付费使用；按照官网上Docker Engine - Community包现在就是叫做Docker CE。这里将展示在CentOS上安装Docker。")])]),e._v(" "),a("h3",{attrs:{id:"centos-版本要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-版本要求"}},[e._v("#")]),e._v(" CentOS 版本要求")]),e._v(" "),a("p",[e._v("官网要求，使用CentOS7的稳定版本，同时：")]),e._v(" "),a("ul",[a("li",[e._v("启用"),a("code",[e._v("centos-extras")])]),e._v(" "),a("li",[e._v("推荐使用"),a("code",[e._v("overlay2")]),e._v("存储驱动")])]),e._v(" "),a("h3",{attrs:{id:"卸载老的docker及依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载老的docker及依赖"}},[e._v("#")]),e._v(" 卸载老的Docker及依赖")]),e._v(" "),a("blockquote",[a("p",[e._v("为什么你可能还需要删除较低的Docker安装？因为较旧版本的Docker被称为docker或docker-engine（它是一个简化Docker安装的命令行工具，通过一个简单的命令行即可在相应的平台上安装Docker，比如VirtualBox、 Digital Ocean、Microsoft Azure）")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-engine\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h3",{attrs:{id:"安装一些依赖库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装一些依赖库"}},[e._v("#")]),e._v(" 安装一些依赖库")]),e._v(" "),a("ul",[a("li",[e._v("yum-utils 提供 yum-config-manager 类库")]),e._v(" "),a("li",[e._v("device-mapper-persistent-data 和 lvm2 被devicemapper 存储驱动依赖")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y yum-utils \\\n  device-mapper-persistent-data \\\n  lvm2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("设置稳定版本的库")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"安装docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-ce"}},[e._v("#")]),e._v(" 安装Docker CE")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install -y docker-ce\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("安装完之后启动")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo systemctl start docker\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("测试是否安装成功")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# systemctl status docker\n● docker.service - Docker Application Container Engine\n   Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; vendor preset: disabled)\n   Active: active (running) since Mon 2020-02-17 13:57:45 CST; 39s ago\n     Docs: https://docs.docker.com\n Main PID: 26029 (dockerd)\n    Tasks: 8\n   Memory: 36.9M\n   CGroup: /system.slice/docker.service\n           └─26029 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h2",{attrs:{id:"仓库配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库配置"}},[e._v("#")]),e._v(" 仓库配置")]),e._v(" "),a("blockquote",[a("p",[e._v("Docker 安装好以后，我们就要开始为拉取镜像准备了；国内从 DockerHub 拉取镜像有时会特别慢，此时可以"),a("strong",[e._v("配置镜像加速器")]),e._v("。")])]),e._v(" "),a("p",[e._v("Docker 官方和国内很多云服务商都提供了国内加速器服务，比如：")]),e._v(" "),a("ul",[a("li",[e._v("阿里云的加速器：https://help.aliyun.com/document_detail/60750.html")]),e._v(" "),a("li",[e._v("网易加速器：http://hub-mirror.c.163.com")]),e._v(" "),a("li",[e._v("Docker官方中国加速器：https://registry.docker-cn.com")]),e._v(" "),a("li",[e._v("ustc 的镜像：https://docker.mirrors.ustc.edu.cn")]),e._v(" "),a("li",[e._v("daocloud：https://www.daocloud.io/mirror#accelerator-doc（注册后使用）")])]),e._v(" "),a("p",[a("strong",[e._v("这里配置 Docker官方中国的加速器")]),e._v("：")]),e._v(" "),a("p",[e._v("对于使用 systemd 的系统，请在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"registry-mirrors":["https://registry.docker-cn.com"]}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("之后重新启动服务")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo systemctl daemon-reload\n$ sudo systemctl restart docker\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"镜像查看和拉取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像查看和拉取"}},[e._v("#")]),e._v(" 镜像查看和拉取")]),e._v(" "),a("blockquote",[a("p",[e._v("拉一个docker镜像试试吧？")])]),e._v(" "),a("p",[e._v("拉取hello world")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# docker pull hello-world:latest\nlatest: Pulling from library/hello-world\n1b930d010525: Pull complete\nDigest: sha256:9572f7cdcee8591948c2963463447a53466950b3fc15a247fcad1917ca215a2f\nStatus: Downloaded newer image for hello-world:latest\ndocker.io/library/hello-world:latest\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("看本地仓库是否有这个库")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nhello-world         latest              fce289e99eb9        13 months ago       1.84kB\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("运行这个镜像的实例，即容器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@pdai ~]# docker run hello-world\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br")])]),a("blockquote",[a("p",[e._v("注意, 如果你在没有镜像的时候，直接"),a("code",[e._v("docker run hello-world")]),e._v("也是可以的；它会先检查本地是否有这个镜像，没有的话会先从指定仓库中拉取。")])]),e._v(" "),a("h2",{attrs:{id:"容器实例-ubuntu实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器实例-ubuntu实例"}},[e._v("#")]),e._v(" 容器实例-ubuntu实例")]),e._v(" "),a("blockquote",[a("p",[e._v("上面我们跑了一个官方的Hello-world容器实例, 这里通过介绍运行ubuntu的实例来全面理解如何跑一个Docker实例")])]),e._v(" "),a("h3",{attrs:{id:"从一个ubuntu的hello-world说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从一个ubuntu的hello-world说起"}},[e._v("#")]),e._v(" 从一个ubuntu的hello world说起")]),e._v(" "),a("p",[e._v("Docker 允许你在容器内运行应用程序， 使用 docker run 命令来在容器内运行一个应用程序。这里同样是个Hello World，不同在于它是在容器内部运行的。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# docker run ubuntu:latest /bin/echo \"Hello world\"\nUnable to find image 'ubuntu:latest' locally\nlatest: Pulling from library/ubuntu\n5c939e3a4d10: Pull complete\nc63719cdbe7a: Pull complete\n19a861ea6baf: Pull complete\n651c9d2d6c4f: Pull complete\nDigest: sha256:8d31dad0c58f552e890d68bbfb735588b6b820a46e459672d96e585871acc110\nStatus: Downloaded newer image for ubuntu:latest\nHello world\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("我们看下各个参数的含义：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("docker")]),e._v(": Docker 的二进制执行文件。")]),e._v(" "),a("li",[a("code",[e._v("run")]),e._v(": 与前面的 docker 组合来运行一个容器。")]),e._v(" "),a("li",[a("code",[e._v("ubuntu:latest")]),e._v(" 指定要运行的镜像，Docker 首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。")]),e._v(" "),a("li",[a("code",[e._v('/bin/echo "Hello world"')]),e._v(": 在启动的容器里执行的命令")])]),e._v(" "),a("p",[e._v('以上命令完整的意思可以解释为：Docker 以 ubuntu 最新的（默认是latest) 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。')]),e._v(" "),a("h3",{attrs:{id:"运行交互式的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行交互式的容器"}},[e._v("#")]),e._v(" 运行交互式的容器")]),e._v(" "),a("blockquote",[a("p",[e._v("以上面例子，容器跑的是Ubuntu是一个系统实例，能否进入系统进行交互呢？")])]),e._v(" "),a("p",[e._v('我们通过 docker 的两个参数 -i -t，让 docker 运行的容器实现"对话"的能力：')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# docker run -i -t ubuntu:latest\nroot@414bf796cbe4:/# echo 'hello world'\nhello world\nroot@414bf796cbe4:/#\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("各个参数解析：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-t")]),e._v(": 在新容器内指定一个伪终端或终端。")]),e._v(" "),a("li",[a("code",[e._v("-i")]),e._v(": 允许你对容器内的标准输入 (STDIN) 进行交互。")])]),e._v(" "),a("p",[e._v("我们可以通过运行 exit 命令或者使用 CTRL+D 来退出容器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@414bf796cbe4:/# exit\nexit\n[root@pdai ~]#\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"运行容器至后台模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行容器至后台模式"}},[e._v("#")]),e._v(" 运行容器至后台模式")]),e._v(" "),a("blockquote",[a("p",[e._v("我们先来看, 当我们跑完上面例子之后，我们看下后台是否有docker容器实例？")])]),e._v(" "),a("p",[e._v("显然没有任何容器实例")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("所以我们需要"),a("code",[e._v("-d")]),e._v("参数，来让容器实例在后台运行，比如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@pdai ~]# docker run -d ubuntu:latest /bin/sh -c "while true; do echo hello world; sleep 1; done"\n1a51d2f023c947f2be2d9a78eb863e854ca302c89bf354654c409e23e7dd25d7\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v('在输出中，我们没有看到期望的 "hello world"，而是一串长字符')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2b1b7a428627c51ab8810d541d759f072b4fc75487eed05812646b8534a2fe63\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这个长字符串叫做容器 ID，对每个容器来说都是唯一的，我们可以通过容器 ID 来查看对应的容器发生了什么。")]),e._v(" "),a("p",[e._v("首先，我们需要确认容器有在运行，可以通过 docker ps 来查看：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@pdai ~]# docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS               NAMES\n1a51d2f023c9        ubuntu:latest       "/bin/sh -c \'while t…"   About a minute ago   Up About a minute                       gifted_brown\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("输出详情介绍：")]),e._v(" "),a("ul",[a("li",[e._v("CONTAINER ID: 容器 ID。")]),e._v(" "),a("li",[e._v("IMAGE: 使用的镜像。")]),e._v(" "),a("li",[e._v("COMMAND: 启动容器时运行的命令。")]),e._v(" "),a("li",[e._v("CREATED: 容器的创建时间。")]),e._v(" "),a("li",[e._v("STATUS: 容器状态(状态有7种)。\n"),a("ul",[a("li",[e._v("created（已创建）")]),e._v(" "),a("li",[e._v("restarting（重启中）")]),e._v(" "),a("li",[e._v("running（运行中）")]),e._v(" "),a("li",[e._v("removing（迁移中）")]),e._v(" "),a("li",[e._v("paused（暂停）")]),e._v(" "),a("li",[e._v("exited（停止）")]),e._v(" "),a("li",[e._v("dead（死亡）")])])]),e._v(" "),a("li",[e._v("PORTS: 容器的端口信息和使用的连接类型（tcp\\udp）。")]),e._v(" "),a("li",[e._v("NAMES: 自动分配的容器名称。")])]),e._v(" "),a("p",[e._v("我们通过"),a("code",[e._v("docker logs")]),e._v(" 命令，查看指定容器内的标准输出:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# docker logs 1a51d2f023c9\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("p",[e._v("最后我们看下，如何关闭后台实例")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@pdai ~]# docker stop 1a51d2f023c9\n1a51d2f023c9\n[root@pdai ~]# docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n[root@pdai ~]#\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);