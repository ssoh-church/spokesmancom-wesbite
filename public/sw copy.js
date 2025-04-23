importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBoFqnJOAEdb17lDzWP18PrvZ7OGyM_-M8",
    authDomain: "spokesmancom-f4441.firebaseapp.com",
    projectId: "spokesmancom-f4441",
    storageBucket: "spokesmancom-f4441.appspot.com",
    messagingSenderId: "1000950958298",
    appId: "1:1000950958298:web:c1439cfab55e0ba110fde3",
    measurementId: "G-FFRECCMGMJ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
