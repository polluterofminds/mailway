exports.handler = async function (event, context) {
  try {
    const {
      body,
      httpMethod,
      headers,
      queryStringParameters,
      isBase64Encoded,
    } = event;
    console.log("headers");
    console.log(headers);
    console.log("Body");
    console.log(body);
    console.log("query string");
    console.log(queryStringParameters);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email added" }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error" }),
    };
  }
};
