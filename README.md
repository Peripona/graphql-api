# graphql-api
Full Example of using graphql service

#### Run : `npm start`

#### open url http://localhost:4040/graphql

#### In the query section enter 

```{
     author(id: 4232) {
       name,
       books {
         title,
         isbn
       }
     }
   }
``` 