const onError = (error = {}, callback) => {
  const response = {
    statusCode: error.httpStatus || 409,
    body: JSON.stringify({
      error: {
        message: error.message || 'Unexpected error',
        code: error.code || 'w-0-1-0',
        description: error.description || ''
      }
    })
  }
  callback(null, response)
}

const onInvalidRequest = (callback, event) => {
  const response = {
    statusCode: 405,
    body: JSON.stringify({
      error: {
        message: 'Invalid HTTP Method',
        code: 'w-0-1-0',
        description: ''
      },
      event
    })
  }
  callback(null, response)
}

const onResult = (result, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(result)
  }
  callback(null, response)
}

export {
  onInvalidRequest,
  onResult,
  onError
}
