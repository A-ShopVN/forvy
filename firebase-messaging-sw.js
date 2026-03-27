// Nạp thư viện Firebase phiên bản tương thích cho Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// Khởi tạo Firebase (Dùng lại config cũ của nàng)
firebase.initializeApp({
    apiKey: "AIzaSyAWw-g8NlpLTdOyc0J-HRXVxp2vaVS41U8",
    authDomain: "my-blog-d10de.firebaseapp.com",
    projectId: "my-blog-d10de",
    storageBucket: "my-blog-d10de.firebasestorage.app",
    messagingSenderId: "1040033908209",
    appId: "1:1040033908209:web:c7fb09f9c6ce89829e3050"
});

const messaging = firebase.messaging();

// Hàm này sẽ tự động chạy khi điện thoại nhận được thông báo mà trình duyệt đang TẮT
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Nhận được tin nhắn chạy ngầm: ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3239/3239952.png' // Icon của thông báo
    };

    // Yêu cầu điện thoại hiển thị thông báo
    self.registration.showNotification(notificationTitle, notificationOptions);
});