import { DynamoDBStreamHandler } from "aws-lambda";

const handler: DynamoDBStreamHandler = async (event) => {
  event.Records.map((e) => {
    console.log("Event", JSON.stringify(e, null, 4));
  });
};

exports.handler = handler;
