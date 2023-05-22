import PushNotification from 'react-native-push-notification';

import String from '../../constants/String';

 

   export default function createNotification({title, message, bigText, color, picture}) {

   
    PushNotification.localNotification({
        channelId: String.NOTIFICATION_CHANNEL_ID,
        title: title,
        message: message,
        bigText: bigText ,
        color: color,
        picture: picture,
       // bigPicture: "asset:../../assets/pawprints.jpg"
       bigPicture: picture,
       //notificationLayout: NotificationLayout.BigPicture, 
       //enableVibration: true,
        
    });
    console.log({title});
  }

