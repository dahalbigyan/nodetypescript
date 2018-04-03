const request = require('graphql-request').request;
const GraphQLClient = require('graphql-request').GraphQLClient;
const endpoint = `https://api.graph.cool/simple/v1/cje4lfqbv55gk01570mjrcd44`;

const getUserIdAndContent = (data: any)=>{
  const actorLength = data.actor.name.length;
  const actorid = data.actor.name.slice(actorLength-25, actorLength);
  const actorname = data.actor.name.slice(0, actorLength-25);
  return {actorname, actorid};
};

export const dataHandler = (respdata: any)=>{
  const {actorname, actorid} = getUserIdAndContent(respdata);
  respdata.actor.name = actorname;
  // data.actor.name = actorname;
  const hardCodedId='cje8z1vkv0oje01916fddhi7g';
  console.log(actorname);
  const mutation = `mutation createScorm($content: Json!, $userId: ID!){
    createScorm(content: $content, userId: $userId){
      id
    }
  }
  `;
  const variables = {
    content: respdata,
    userId: hardCodedId
  };
  request(endpoint, mutation, variables).then((data: any)=>console.log(data)).catch((error: any)=>console.error(error));
};
