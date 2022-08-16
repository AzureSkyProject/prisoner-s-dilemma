# git 语句

## 配置用户名，邮箱

1. git config --global user.name yourname
2. git config --global user.email youremail

## 克隆仓库

1. git clone http://admin@10.118.61.211:10101/r/FrontEnd.git

## 本地提交

1. git add .
2. git commit -m "your-commit"

## 远程提交

1. git push origin master
2. git pull origin master

## 子模块 submodule

### 添加子模块

1. git submodule add https://github.com/example.git

### 下载子模块

1. git submodule update --init --recursive

## 其他

### 查看分支及提交概况

1. git log --oneline --all --graph
2. git status

### 查看远程仓库

1. git remote -v
2. git remote rm gitblit
3. git remote add gitblit http://admin@10.118.61.211:10101/r/FrontEnd.git
