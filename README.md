# Features

- [x] setup mysql docker
- [x] drizzle push schema to db
- [x] start node server
- [x] registering simple auth 
- [x] basic authentication login username/password, session creation, logout 
- [ ] registering oauth
- [ ] oath login
- [ ] rate limiting
- [ ] setup nodemon or node --watch
- [ ] node 20 support
- [ ] alias support in node 20
- [ ] i18n
- [ ] deploy with github actions

## compatibility 
- [x] NODE 18
- [ ] NODE 20 incompatible using imports 


## Drizzle push schema 
```
npx drizzle-kit push:mysql
```

### start mysql docker
build
docker build -t mysql-custom .

```
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -e MYSQL_DATABASE=mydb -d mysql-custom
```



### issues
Can't make work with this requirements
- node 20
- using import instead of require
- package.json imports (aliases)
- top level await

using loader.js? how to handle imports aliases (package.json)