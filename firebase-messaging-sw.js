// 1. Firebase libraries import (Compat version is safer for Service Workers)
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// 2. Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3vBI-1FefY4Ft4Cks62hH9CL1IClds_Q",
    authDomain: "e-sports-24ac6.firebaseapp.com",
    projectId: "e-sports-24ac6",
    storageBucket: "e-sports-24ac6.firebasestorage.app",
    messagingSenderId: "984168922563",
    appId: "1:984168922563:web:973d536ac2d24a364f5176",
};

// 3. Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 4. Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// 5. Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/icons/icon-192x192.png', // আপনার আইকনের পাথ দিন
        badge: '/icons/badge.png' // (Optional) ছোট সাদা আইকন
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
