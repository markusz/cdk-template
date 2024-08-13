import { APIGatewayProxyEvent } from 'aws-lambda';

export async function handleRequest(event: APIGatewayProxyEvent) {
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };
}
