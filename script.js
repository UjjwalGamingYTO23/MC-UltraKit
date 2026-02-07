// 1. Tab Switching Function (Isse Buttons kaam karenge)
function switchTab(event, tabId) {
    // Saare sections chhupao
    const sections = document.querySelectorAll('.app-card');
    sections.forEach(s => s.classList.remove('active'));

    // Saare buttons se 'active' class hatao
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // Jo click kiya use dikhao
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 2. Minecraft Server Status Checker
async function checkServer() {
    const ip = document.getElementById('serverIP').value;
    const resBox = document.getElementById('statusResult');
    if(!ip) {
        alert("Bhai, Server IP toh dalo!");
        return;
    }

    resBox.style.display = "block";
    resBox.innerHTML = "🔍 Checking status...";

    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await response.json();

        if(data.online) {
            resBox.innerHTML = `
                <div style="border-left: 4px solid #55FF55; padding-left: 15px; text-align: left;">
                    <p style="color:#55FF55; font-weight:bold; font-size: 1.2rem;">🟢 ONLINE</p>
                    <p>👥 <b>Players:</b> ${data.players.online} / ${data.players.max}</p>
                    <p>🛠️ <b>Version:</b> ${data.version}</p>
                    <p>📝 <b>MOTD:</b> ${data.motd.clean[0] || 'No description'}</p>
                </div>
            `;
        } else {
            resBox.innerHTML = `<p style="color:#FF5555; font-weight:bold;">🔴 SERVER OFFLINE</p>`;
        }
    } catch (err) {
        resBox.innerHTML = "❌ Error fetching data! IP sahi hai na?";
    }
}

// 3. Minecraft Skin Downloader
async function getSkin() {
    const user = document.getElementById('mcUser').value;
    const display = document.getElementById('skinDisplay');
    if(!user) return;

    display.innerHTML = `
        <img src="https://mc-heads.net/body/${user}" style="width:150px; margin-top:20px; cursor:pointer;" 
        onclick="window.open('https://mc-heads.net/download/${user}')" title="Click to Download">
        <p style="font-size:12px; color:#888;">(Click image to download PNG)</p>
    `;
}

// 4. Color Picker Logic
function addColor(code) {
    const input = document.getElementById('rawText');
    input.value += code;
    updateColorPreview();
}

function updateColorPreview() {
    const raw = document.getElementById('rawText').value;
    const formatted = document.getElementById('formattedCode');
    formatted.innerText = raw || "§f";
}

function copyToClipboard() {
    const text = document.getElementById('formattedCode').innerText;
    navigator.clipboard.writeText(text);
    alert("Code Copy Ho Gaya! ✅");
}

// 5. Session Timer Logic
let startTime, timerInterval;

function startTimer() {
    startTime = Date.now();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('stopBtn').style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let h = Math.floor(elapsed / 3600000);
        let m = Math.floor((elapsed % 3600000) / 60000);
        let s = Math.floor((elapsed % 60000) / 1000);
        
        document.getElementById('timer').innerText = 
            `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('stopBtn').style.display = 'none';
}

function resetTimer() {
    stopTimer();
    document.getElementById('timer').innerText = "00:00:00";
}
