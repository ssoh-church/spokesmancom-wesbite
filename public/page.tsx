'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import registerServiceWorker from '@/utils/registerServiceWorker';
import { requestPermission } from '@/utils/requestPermission';
import onMessageListener from '@/utils/onMessageListener';

interface NotificationPayload {
    notification: {
        title: string;
        body: string;
    };
}

const HomePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [notifications, setNotifications] = useState<NotificationPayload[]>([]);

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
        }
        requestPermission();

        onMessageListener().then((payload: NotificationPayload) => {
            console.log('Message received. ', payload);
            setNotifications(prev => [...prev, payload]);
        }).catch(err => console.log('failed: ', err));
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredNotifications = notifications.filter(notification =>
        notification.notification.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Notifications</h1>
            <input
                type="text"
                placeholder="Search or filter notifications"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredNotifications.map((notification, index) => (
                    <li key={index}>
                        <h2>{notification.notification.title}</h2>
                        <p>{notification.notification.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Lazy loading the HomePage component
const LazyHomePage = dynamic(() => Promise.resolve(HomePage), {
    ssr: false,
});

export default LazyHomePage;
