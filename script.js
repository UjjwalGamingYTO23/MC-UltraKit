// Smart Ad Opener Function
function openMyAd() {
    const adUrl = 'https://otieu.com/4/10581423';
    const windowProxy = window.open(adUrl, '_blank');
    
    // Agar normal open block ho jaye toh "Force Click" use karo
    if (!windowProxy || windowProxy.closed || typeof windowProxy.closed == 'undefined') {
        const link = document.createElement('a');
        link.href = adUrl;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// 1. Tab Switching
function switchTab(event, tabId) {
    const sections = document.querySelectorAll('.app-card');
    sections.forEach(s => s.classList.remove('active'));
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 2. Server Status (Ad Integrated)
async function checkServer() {
    openMyAd(); 
    const ip = document.getElementById('serverIP').value;
    const resBox = document.getElementById('statusResult');
    if(!ip) { alert("Server IP dalo bhai!"); return; }
    resBox.innerHTML = "🔍 Checking...";
    try {
        const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await res.json();
        resBox.innerHTML = data.online ? 
            `<p style="color:#55FF55;">🟢 Online | Players: ${data.players.online}/${data.players.max}</p>` : 
            `<p style="color:#FF5555;">🔴 Offline</p>`;
    } catch { resBox.innerHTML = "❌ Error connecting!"; }
}

// 3. Skin Grabber (Ad Integrated)
async function getSkin() {
    openMyAd();
    const user = document.getElementById('mcUser').value;
    const display = document.getElementById('skinDisplay');
    if(!user) return;
    display.innerHTML = `
        <img src="https://mc-heads.net/body/${user}" style="width:120px; margin-top:10px; cursor:pointer;" onclick="window.open('https://mc-heads.net/download/${user}')">
        <p style="font-size:12px; color:#888;">Click skin to download</p>
    `;
}

// 4. Color Codes
function copyCode(code) {
    navigator.clipboard.writeText(code);
    const msg = document.getElementById('copyMsg');
    msg.innerText = "Copied: " + code;
    setTimeout(() => msg.innerText = "", 2000);
}

// 5. Timer
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
