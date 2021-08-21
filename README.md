# LearnPagingServer
学习Android Jetpack的Paging时用到的本地服务器<br>
**此服务器基于node.js**<br>
## 使用这个本地服务器：<br>
### 1.部署本地服务器
```
npm install
npm run serve
```
### 2.访问接口<br>
服务器部署在8088端口，我们定义<br>
```
BASE_URL = http://localhost:8088
```
以下是接口列表：<br>
接口|功能|示例
:-:|:-:|:-:
{{BASE_URL}}/allMovies|获取所有电影的列表（100个电影）|http://localhost:8088/allMovies
{{BASE_URL}}/pds?start=:start&count=:count|通过起始位置和获取数量来获取电影列表（PositionalDataSource）|http://localhost:8088/pds?start=0&count=10
{{BASE_URL}}/pkds?page=:page|通过分页（一页十个）来获取电影列表（PageKeyedDataSource）|http://localhost:8088/pkds?page=0
{{BASE_URL}}/ikds?since=:since&pagesize=:pagesize|通过上一个元素位置和获取数量来获取电影列表（ItemKeyedDataSource）|http://localhost:8088/ikds?since=0&pagesize=10
### 3.注意
在安卓模拟器中访问接口时，需要将localhost替换为服务器主机的ip
