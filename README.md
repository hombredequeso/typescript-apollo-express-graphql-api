# typescript-apollo-express-graphql-api

Sample project for messing around with an apollo typescript graphql server

## Getting Started

```
yarn
yarn start:dev
```

## Development Process

* Make changes to schema.ts
* run ```yarn codegen``` to update generated/graphql.ts
* Create new resolvers in resolvers.ts

## Subscription Testing

Test BigEvents can be triggered by posting to ```localhost:3000/bigevent```, which is implement as part of the same express app that is hosting graphql.

Go to the [graphql playground](http://localhost:3000/graphql)

Subscribe to the big events with:
```
subscription {
  bigEvent {
    id
  }
}
```

Then trigger a big event with:
```
curl -X POST localhost:3000/bigevent
```




## Notes

Jobs is an looking at how multiple data sources for a single entity type interact in the resolvers.

## References
A few references used in the course of constructing the project.

https://medium.com/@th.guibert/basic-apollo-express-graphql-api-with-typescript-2ee021dea2c
https://www.digitalocean.com/community/tutorials/workflow-nodemon

