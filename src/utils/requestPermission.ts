import { messaging, getToken } from "../firebaseConfig";

export const requestPermission = async (): Promise<void> => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            const token = await getToken(messaging, { vapidKey: 'BJVMcb3cXZKrZ0MVe6w4Z1oORU0BkTyWtHQmrY7GsmEjH07cexHpL8kVmFjhiaqIVPzaVNh696xQ7KC2y499z5A' });
            console.log('FCM Token:', token);
        } else {
            console.error('Notification permission denied');
        }
    } catch (error) {
        console.error('Error getting FCM token:', error);
    }
};
