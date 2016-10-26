const PubNub = require('pubnub');
require('dotenv').config();

const pubnub = new PubNub({
  subscribeKey: process.env.SUBSCRIBE_KEY,
  publishKey: process.env.PUBLISH_KEY,
  logVerbosity: true,
});

function publishSampleMessage() {
  pubnub.publish({
    message: { text: 'hello pubnub!' },
    channel: process.env.CHANNEL,
  },
  (status,response) => {
    if (status.error) {
      console.log(`publish failed w/ status: ${status}`);
    } else {
      console.log(`published w/ server response: ${response}`)
    }
  });
}

pubnub.subscribe({
  channels: [process.env.CHANNEL],
});