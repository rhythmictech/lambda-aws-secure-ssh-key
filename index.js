const AWS = require('aws-sdk')

const secretsmanager = new AWS.SecretsManager()

const putValueParams = event => ({
  SecretId: event.secret_name,
  SecretString: 'INSERT SECRET HERE'
})

exports.handler = async (event, context) => {
  try {
    await secretsmanager.putSecretValue(putValueParams(event)).promise()
  } catch (error) {
    console.error(error)
    throw (error)
  }
}
