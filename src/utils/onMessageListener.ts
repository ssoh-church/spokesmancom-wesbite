import { onMessage } from "firebase/messaging";
import { messaging } from "../firebaseConfig";

const onMessageListener = (): Promise<any> =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

export default onMessageListener;
