const request = require('graphql-request').request;
const GraphQLClient = require('graphql-request').GraphQLClient;
const endpoint = `https://api.graph.cool/simple/v1/cjb88dwuv1s4b0191np9fmbn3`;

const getUserIdAndContent = (data: any)=>{
  const actorLength = data.actor.name.length;
  const actorid = data.actor.name.slice(actorLength-25, actorLength);
  const actorname = data.actor.name.slice(0, actorLength-25);
  return {actorname, actorid};
};

const parseOutUserId = (data:any)=>{
  // console.log(JSON.parse(JSON.stringify(data)));
  const agent = JSON.parse(data.agent);
  const agentName = agent.name;
  const actorLength = agentName.length;
  const actorid = agentName.slice(actorLength-25, actorLength);
  const actorname=agentName.slice(0, actorLength-25);
  console.log(actorid);
  return {actorname, actorid};
};

export const statementDataHandler = (respdata: any)=>{
  const {actorname, actorid} = getUserIdAndContent(respdata);
  respdata.actor.name = actorname;
  const mutation = `mutation createScorm($content: Json!, $userId: ID!){
    createScorm(content: $content, userId: $userId){
      id
    }
  }
  `;
  const variables = {
    content: respdata,
    userId: actorid
  };
  request(endpoint, mutation, variables).then((data: any)=>console.log(data)).catch((error: any)=>console.error(error));
};

export const activityDataHandler = (respdata: any)=>{
  const {actorname, actorid} = parseOutUserId(respdata);
  const newagent = JSON.parse(respdata.agent);
  newagent.name = actorname;
  respdata.agent = newagent;
  const mutation = `mutation createScorm($content: Json!, $userId: ID!){
    createScorm(content: $content, userId: $userId){
      id
    }
  }
  `;
  const variables = {
    content: respdata,
    userId: actorid
  };
  request(endpoint, mutation, variables).then((data: any)=>console.log('hello')).catch((error: any)=>console.error(error));
};
