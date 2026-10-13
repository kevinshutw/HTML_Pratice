// 1. 全域主題切換
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById("theme-btn");
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeBtn.innerHTML = "🌙 切換深⾊模式";
    } else {
        body.classList.add("dark-mode");
        themeBtn.innerHTML = "☀ 切換亮⾊模式";
    }
}
// 2. 智慧問候語與動態推播
function showSmartGreeting() {
    const msgElement = document.getElementById("welcome-msg");
    const currentHour = new Date().getHours();
    let timeGreeting = "";
    if (currentHour >= 5 && currentHour < 12) {
        timeGreeting = "早安！";
    } else if (currentHour >= 12 && currentHour < 18) {
        timeGreeting = "午安！";
    } else {
        timeGreeting = "晚上好！";
    }
    const quotes = [
        "程式碼改變世界，今天也是充實的⼀天！",
        "遇到 Bug 不要慌，F12 Console 是你的好朋友！",
        "⼀步⼀腳印，網⾴設計其實超有成就感！",
        "保持好奇⼼，持續打造專屬你的數位作品集！"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    msgElement.innerHTML = `<strong>${timeGreeting}</strong> ${randomQuote}`;
    msgElement.style.color = "#2980b9";
}
// 3. 控制台歡迎訊息 (⾴⾯載⼊時觸發)
window.onload = function () {
    console.log("網⾴與 JavaScript 已順利完成初始化載⼊！");
};