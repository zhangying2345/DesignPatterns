// import * as _ from 'lodash';

interface subs {
  id: string;
  callback: any;
}

class MsgSource {
  subscriber: subs[] = [];

  constructor() {

  }

  sendMsgs () {
    let num = 10;
    for(; num > 0; num--) {
      this.subscriber.forEach(item => {
        item.callback();
      });
    }
  }

  addSubscribe(subscriberItem) {
    this.subscriber.push(subscriberItem);
  }

  cancleSubscribe(subscriberItem) {
    this.subscriber
  }
}

// 信息消费者
class MsgConsum {
  constructor(private id: string, private callback: any) {
  }
}

let msgSource = new MsgSource();
let msgConsum = new MsgConsum('consume-1', () => {
  console.log("I am consume-1");
});
let msgConsum_2 = new MsgConsum('consume-2', () => {
  console.log("I am consume-2");
});

msgSource.addSubscribe(msgConsum);
msgSource.addSubscribe(msgConsum_2);
msgSource.sendMsgs();