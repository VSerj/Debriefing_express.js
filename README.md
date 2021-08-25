# Debriefing_express.js

Смотрю как работает бэк на node.js (express)

> Start project: npm run watch

### model data

```
{
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String },
}
```

### You can test with Postman  

Get all posts     - GET    - '/api/posts'  
Get one post by id     - GET    - '/api/posts/:id'  
Create post       - POST   -  '/api/posts'  
Update post       - PUT    - '/api/posts'  
Delete post by id - DELETE - '/api/posts/:id'  

### Tools  

node version 14.17.5  
npm version 6.14.14  
express.js  
mongoose  
