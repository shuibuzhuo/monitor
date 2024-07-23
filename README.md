# 划水 AI 监控

接口监控 + 邮件报警

## 本地运行

git clone 项目

- 安装 `npm install`
- 重命名 `.env.example` 为 `.env` ，并修改内容

本地运行 `npm run dev`

## 线上运行

此为内部检测服务，在一个云服务器运行即可，没必要使用 Serverless

git clone 项目

- 安装 `npm install`
- 重命名 `.env.example` 为 `.env` ，并修改内容

登录服务器，可执行

- 启动项目 `npm run prod`
- 查看项目列表 `npx pm2 list`
- 重启项目 `npx pm2 restart <id>`
- 停止项目 `npx pm2 stop <id>`
- 删除项目 `npx pm2 delete <id>`
- 查看日志 `npx pm2 log <id>`
