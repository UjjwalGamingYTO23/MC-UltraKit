// 1. Monetag Link
const adLink = "https://your-direct-link-here.com"; // <-- APNA ASLI LINK YAHAN DALO

// 2. Tab Switching (Sidebar Buttons ke liye)
function switchTab(event, tabId) {
    // Sabhi sections hide karo
    document.querySelectorAll('.app-card').forEach(card => card.classList.remove('active'));
    // Sabhi buttons se active color hatao
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Jo click kiya usko dikhao
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 3. Server Status Check
async function checkServer() {
    const ip = document.getElementById('serverIP').value;
    if (!ip) return alert("Server IP dalo!");

    window.open(adLink, '_blank'); // Ad Trigger (image_294dff.png)
    
    document.getElementById('statusResult').innerHTML = "Checking...";
    try {
        const res = await fetch(`https://api.mcstatus.io/v2/status/java/${ip}`);
        const data = await res.json();
        document.getElementById('statusResult').innerHTML = data.online ? 
            `<p style="color:#39ff14">✅ Online | Players: ${data.players.online}</p>` : 
            `<p style="color:#ff5555">❌ Offline</p>`;
    } catch {
        document.getElementById('statusResult').innerHTML = "Error!";
    }
}

// 4. Skin Downloader
function getSkin() {
    const user = document.getElementById('mcUser').value;
    if (!user) return alert("Username dalo!");

    window.open(adLink, '_blank'); // Ad Trigger (image_294dff.png)
    document.getElementById('skinDisplay').innerHTML = `
        <img src="https://mc-heads.net/body/${user}/150">
        <br><br>
        <a href="https://mc-heads.net/download/${user}" target="_blank">
            <button class="glow-btn">Download Skin</button>
        </a>`;
}

// 5. Timer
let timer;
let sec = 0;
function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        sec++;
        let h = Math.floor(sec / 3600).toString().padStart(2, '0');
        let m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
        let s = (sec % 60).toString().padStart(2, '0');
        document.getElementById('timeDisp').innerText = `${h}:${m}:${s}`;
    }, 1000);
}
function stopTimer() { clearInterval(timer); timer = null; }
