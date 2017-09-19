import { onInvalidRequest, onError, onResult } from './utils'
import * as controller from './controller'

const something = async (event, context, callback) => {
  try {
    const result = await controller.something(event.body)
    onResult(result, callback)
  } catch (error) {
    onError(error, callback)
  }
}

const collectionHandlers = {
  '/notifications/something': something
}

const router = (event, context, callback) => {
  const {resource} = event
  const handlerName = `${resource}`
  if (collectionHandlers[handlerName]) {
    return collectionHandlers[handlerName](event, context, callback)
  }
  onInvalidRequest(callback, event)
}

export {
  router
}
