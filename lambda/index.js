let telemetryStore = {};

exports.handler = async (event) => {
  console.log("EVENT:", JSON.stringify(event, null, 2)); // for CloudWatch logs

  const method = event.requestContext?.http?.method;
  const route = event.requestContext?.http?.path;
  const pathParams = event.pathParameters;
  const body = event.body;

  try {
    // Handle POST /telemetry
    if (method === 'POST' && route === '/telemetry') {
      const data = JSON.parse(body);
      if (!data.vehicleId) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Missing vehicleId in body' }),
        };
      }

      telemetryStore[data.vehicleId] = data;

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Telemetry stored', data }),
      };
    }

    // Handle GET /telemetry/{vehicleId}
    if (method === 'GET' && pathParams?.vehicleId) {
      const data = telemetryStore[pathParams.vehicleId];

      return {
        statusCode: data ? 200 : 404,
        body: JSON.stringify(data || { message: 'Not found' }),
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Unsupported route or method' }),
    };

  } catch (err) {
    console.error("Error handling request:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error', error: err.message }),
    };
  }
};
