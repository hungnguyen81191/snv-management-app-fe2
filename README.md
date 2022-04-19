# snv-management-app



## Project setup
```
npm install
```

### Build docker image
```
sudo docker build . -t vue-app
```

### Run docker image
```
sudo docker run -d -p 8080:80 vue-app
```

### Get list images
```
docker ps
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
