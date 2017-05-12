# 出题仓库 answer 分支 script.sh 内容规范



## script.sh 作用

answer 分支的 script.sh 用于运行仓库的测试代码



## script.sh 规范

- 安装依赖，如果有必要的话
- 删除学生提交仓库中的测试文件夹 
- 将 __answerBranch 下的测试文件夹移动到原测试文件夹路径
- 运行测试命令



## 参考实例

以下分别是 `node` 与 `java`  的例子


```
# node 技术栈模板

npm i &> /dev/null
rm -rf spec
mv ./__answerBranch/spec ./spec
npm test



# java 技术栈模板

rm -rf ./src/test/java 
mv ./__answerBranch/src/test/java ./src/test/java
gradle  test
```

> 注意：`__answerBranch`  是固定名称，不可更改。这个目录名耦合于 `Jenkins` 的 `HOMEWORK_SCORING` 的这一条语句 ` unzip answer.zip -d __answerBranch ` 。具体可以查看 `recruiting-system/assembly/jenkins/HOMEWORK_SCORING/config.xml` 