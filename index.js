module.exports.handler = async (event) => {
  try {
    const response = await fetch('https://api.ipify.org?format=json')

    const data = await response.json()
    console.log(process.env.TEST)

    console.log(data)

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          ip: data.ip,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          error: error.message,
        },
        null,
        2
      ),
    }
  }
};
