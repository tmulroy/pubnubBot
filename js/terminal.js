console.log('We are connected!');
const PubNub = require('pubnub');
require('dotenv').config();

const pubnub = new PubNub({
  subscribeKey: process.env.SUBSCRIBE_KEY,
  publishKey: process.env.PUBLISH_KEY,
  logVerbosity: false,
});

const terminal = document.querySelector('#faux-terminal');
// terminal.scrollTop = terminal.scrollHeight;

function upMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going up';
  terminal.appendChild(newPara);
  pubnub.publish({
    message: { start: true,
      joint: "elbow",
      direction: "up"
    },
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

function rightMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going right';
  terminal.appendChild(newPara);

  pubnub.publish({
    message: { start: true,
      joint: "elbow",
      direction: "right"
    },
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

function downMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going down';
  terminal.appendChild(newPara);

  pubnub.publish({
    message: { start: true,
      joint: "elbow",
      direction: "down"
    },
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

function leftMovement() {
  const newPara = document.createElement('p');
  const command = newPara.innerHTML = 'stick-figure-macbook-air: Arm going left';
  terminal.appendChild(newPara);

  pubnub.publish({
    message: { start: true,
      joint: "elbow",
      direction: "left"
    },
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
