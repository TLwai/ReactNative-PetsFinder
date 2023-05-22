import PushNotification from 'react-native-push-notification';
import {useEffect} from 'react';
import String from '../../constants/String';

export default function CreateChannels() {
  let result = true;
//  useEffect(() => {
    console.log('Channel Creating');
    //        channelId: 'String.NOTIFICATION_CHANNEL_ID';
    //        channelName: 'Test Channel',
    //     console.log('Channel Created');
    //   }, []);

    PushNotification.createChannel({
      channelId: String.NOTIFICATION_CHANNEL_ID,
      channelName: 'Test Channel',
    });
    console.log('Channel Created');
 // }, []);

  return result;
}
