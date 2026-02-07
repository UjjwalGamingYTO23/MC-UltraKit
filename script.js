// 1. Tab Switching Function
function switchTab(event, tabId) {
    const sections = document.querySelectorAll('.app-card');
    sections.forEach(s => s.classList.remove('active'));
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 2. Minecraft Server Status (With Ads)
async function checkServer() {
    window.open('https://otieu.com/4/10581423', '_blank'); 
    const ip = document.getElementById('serverIP').value;
    const resBox = document.getElementById('statusResult');
    if(!ip) { alert("Bhai, IP dalo!"); return; }
    resBox.innerHTML = "🔍 Checking...";
    try {
        const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await res.json();
        resBox.innerHTML = data.online ? `<p style="color:#55FF55;">🟢 Online | Players: ${data.players.online}</p>` : `<p style="color:#FF5555;">🔴 Offline</p>`;
    } catch { resBox.innerHTML = "❌ Error!"; }
}

// 3. Skin Downloader (With Ads)
async function getSkin() {
    window.open('https://otieu.com/4/10581423', '_blank');
    const user = document.getElementById('mcUser').value;
    const display = document.getElementById('skinDisplay');
    if(!user) return;
    display.innerHTML = `<img src="https://mc-heads.net/body/${user}" style="width:120px; cursor:pointer;" onclick="window.open('https://mc-heads.net/download/${user}')"><p>Click skin to download</p>`;
}

// 4. Color Code Copy
function copyCode(code) {
    navigator.clipboard.writeText(code);
    const msg = document.getElementById('copyMsg');
    msg.innerText = "Copied: " + code;
    setTimeout(() => msg.innerText = "", 2000);
}

// 5. Timer Logic
let timer, sec = 0;
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        sec++;
        let h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
        document.getElementById('timeDisp').innerText = 
            `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}
function stopTimer() { clearInterval(timer); }
