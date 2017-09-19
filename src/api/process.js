'use strict'

const AWS = require('aws-sdk')
const SQS = new AWS.SQS({apiVersion: '2012-11-05'})

const Lawos = require('lawos')

module.exports.handler = function (event, context, callback) {
  const queueUrl = 'https://sqs.' + process.env.region + '.amazonaws.com/' + require('alai').parse(context) + '/'
  const Q = new Lawos(queueUrl, SQS);

  const handleItem = item => {
    console.log(item.MessageId);

    return new Promise(resolve => {
      resolve()
    })
  }
  // Sets the handler for the message
  Q.item(handleItem)

  const conditionToStop = () => context.getRemainingTimeInMillis() < 1000
  Q.work(conditionToStop)
    .catch(err => {
    console.error(JSON.stringify(err));
  })
}





