## 1. 湘凯管理平台前端本地开发
vue3全家桶(vuex、vue-router)+vite打包+typescript+viewport适配+uivant+报表f6
# 首次启动需安装
npm install

# 启动开发服务器
npm run serve --开发环境
npm run test  --测试环境
npm run prod  --生产环境

## 2. 打包
npm run test   --测试环境打包
npm run build  --生产环境打包 

## 3. 目录规范说明

按照以下方式创建组件文件：{包?}/{模块}/{组件}/{操作?}
- 包 -   配合导航增加的一个分类。
- 模块 - 如 rbac、db、workflow 等独立功能模块，可以独立成系统。
- 组件 - 依赖于模块使用的业务实现，不能单独使用。
- 操作 - 如 增删改查，按照规定，有 del/add/update/status


### 目录结构
|-- dist                                     # 打包后文件夹            
|-- public                                   # 静态文件夹                                   
|   |-- favicon.ico                
|-- src                                      # 源码目录 
|   |--api                                   # api        
|   |--assets                                # 模块资源
|   |--components                            # vue公共组件
|   |--views                         
|   |--App.vue                               # 页面入口文件
|   |--main.ts                               # 入口文件，加载公共组件
|   |--router.ts                             # 路由配置
|   |--store.ts                              # 状态管理
|   |--env.d.ts                              # 过滤文件
|-- .env.development                         # 开发环境    
|-- .env.production                          # 生产环境       
|-- .env.test                                # 测试环境  
|--  vite.config.ts                          # 配置文件                  
|-- .gitignore                               # git忽略上传的文件格式                           
|-- tsconfig.json                            # TS基本信息 
|-- package.json                             # 项目基本信息 
## 4. 前端git分支规范

统一团队的Git工作流，包括分支使用
统一团队的Git Commit日志标准，便于后续代码review,版本发布以及日志自动化生成
#####1 master为主分支，属保护分支，不能直接在此进行代码修改和提交；
#####2 dev为日常使用分支；
#####3名字_dev  自己的主分支 例如 gh_dev  从dev分支拉出；
#####4名字_dev_子系统  某个子系统分支 例如 gh_dev_cmp 从dev分支拉出；
#####5名字_dev_日期  某个临时任务分支  gh_dev_20211130  从master分支拉出;
#####6名字_dev_hotfix_日期  线上紧急bug修改  gh_dev_hotfix_20211130  从common_dev分支拉出;
#####重点： 5,6 种情况， 任务上线后请记得删除分支；

## 5. Git提交规范

格式统一的提交信息有助于自动化生成CHANGELOG
版本库不只是存放代码的仓库, 它记录项目的开发日志, 它应该要清晰表达这次提交的做了什么. 这些记录应该可以帮助后来者快速地学习和回顾代码, 也应该方便其他协作者review你的代码
规范化提交信息可以促进提交者提交有意义的、粒度合适的提交. 提交者要想好要怎么描述这个提交，这样被动促进了他们去把控提交的粒度
社区上比较流行的提交信息规范是Angular的提交信息规范,但是其也很繁琐，以下提交信息可以作为总体提交总则
新需求：Add Jid 描述
Bug修复：Fix Jid 描述
改进/任务：Mod Jid 描述
需求无关的提交：OCT 描述

## 6.命名

文件和变量小驼峰命名 如：firstName 