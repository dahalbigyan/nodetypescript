const request = require('graphql-request').request;
const GraphQLClient = require('graphql-request').GraphQLClient;
const endpoint = `https://api.graph.cool/simple/v1/cje4lfqbv55gk01570mjrcd44`;

export const dataHandler = ()=>{
  console.log("Hello World");
  console.log(GraphQLClient);
  console.log(request);
};
