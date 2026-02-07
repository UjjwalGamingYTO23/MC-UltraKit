// 1. Tab Switching Function
function switchTab(event, tabId) {
    const sections = document.querySelectorAll('.app-card');
    sections.forEach(s => s.classList.remove('active'));
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// 2. Minecraft Server Status Checker (Direct Link ke sath)
async function checkServer() {
    // 👇 Ye line click hote hi Ad khol degi
    window.open('https://otieu.com/4/10581423', '_blank'); 

    const ip = document.getElementById('serverIP').value;
    const resBox = document.getElementById('statusResult');
    if(!ip) { alert("Bhai, Server IP toh dalo!"); return; }

    resBox.style.display = "block";
    resBox.innerHTML = "🔍 Checking status...";

    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
        const data = await response.json();
        if(data.online) {
            resBox.innerHTML = `<div style="border-left: 4px solid #55FF55; padding-left: 15px;">
                <p style="color:#55FF55; font-weight:bold;">🟢 ONLINE</p>
                <p>👥 Players: ${data.players.online}/${data.players.max}</p>
            </div>`;
        } else {
            resBox.innerHTML = `<p style="color:#FF5555; font-weight:bold;">🔴 OFFLINE</p>`;
        }
    } catch (err) { resBox.innerHTML = "❌ Error!"; }
}

// 3. Minecraft Skin Downloader (Direct Link ke sath)
async function getSkin() {
    // 👇 Ye line click hote hi Ad khol degi
    window.open('https://otieu.com/4/10581423', '_blank');

    const user = document.getElementById('mcUser').value;
    const display = document.getElementById('skinDisplay');
    if(!user) return;

    display.innerHTML = `
        <img src="https://mc-heads.net/body/${user}" style="width:150px; margin-top:20px; cursor:pointer;" 
        onclick="window.open('https://mc-heads.net/download/${user}')">
        <p style="font-size:12px; color:#888;">(Skin Loading...)</p>
    `;
}

// ... baaki ka color picker aur timer code waisa hi rehne do
