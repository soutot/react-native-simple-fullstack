# react-native-simple-fullstack
React Native + GraphQL + Koa + Relay Modern

## Simple fullstack example
Simple app using React Native + React Navigation + Relay Modern + GraphQL + Koa

Due the purpose of just applying the most basic concepts, no UI was implemented.

## Running

### Backend
Build an endpoint to your database and add it to both files:
* https://github.com/soutot/react-native-simple-fullstack/blob/master/app-koa-server/server.js#L11
* https://github.com/soutot/react-native-simple-fullstack/blob/master/app-koa-server/src/data/seeders/session.seeder.js#L235

For this example I used [Mlab](https://mlab.com/login/) but you can use a local DB

```yarn```
```yarn create-schemas-dir```
```yarn generate-schema```
```yarn seed```
```yarn start```

### Frontend
```yarn```
```yarn get-schema```
```yarn relay --watch```
```react-native run-ios```
```react-native run-android```

If everything works as expected, you should see a list of ```sessions```. You can see the details of a single session, add a new session or edit an existing one

From this point you can move further and experiment greater things like refetchContainer, connections, subscriptions, pagination, cache, and so on
