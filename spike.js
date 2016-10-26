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

pubnub.addListener({
  message: (m) => {
    let channelName = m.channel;
    let pubTT = m.timetoken;
    let msg = m.message;
  },
  presence: function(p) {
       // handle presence
       let action = p.action; // Can be join, leave, state-change or timeout
       let channelName = p.channel; // The channel for which the message belongs
       let occupancy = p.occupancy; // No. of users connected with the channel
       let publishTime = p.timestamp; // Publish timetoken
       let timetoken = p.timetoken;  // Current timetoken
   },
   status: function(s) {
     console.log(`status: ${s}`)
   }
});
pubnub.subscribe({
  channels: [process.env.CHANNEL],
  withPresence: true
});

publishSampleMessage();
