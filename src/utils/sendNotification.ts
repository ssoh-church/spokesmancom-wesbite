
interface Message {
    title: string;
    body: string;
}

export const sendNotification = async (token: string, message: Message): Promise<void> => {
    const response = await fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
            'Authorization': 'key=YOUR_SERVER_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            to: token,
            notification: {
                title: message.title,
                body: message.body,
                icon: 'path/to/icon.png'
            }
        })
    });

    if (!response.ok) {
        console.error('Error sending notification:', response.statusText);
    }
};

