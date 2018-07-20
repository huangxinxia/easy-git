# hxx-easy-git
一个简单的git工具
### 克隆功能
从github上下载项目到指定文件夹
```javascript
const easyGit = require('hxx-easy-git')
easyGit({'repo':url, 'tar':name, 'clone':true}, function (err) {
   if(err){
     console.log(err)
   }else{
     //....
   }
})
```
参数说明：
* repo：github地址，比如https://github.com/huangxinxia/model-less.git
* tar: 文件夹名称
* clone：要执行克隆功能（后期会继续添加其他功能）

