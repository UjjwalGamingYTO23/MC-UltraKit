// --- CONFIGURATION ---
const MONETAG_DIRECT_LINK = "https://your-direct-link-here.com"; // <-- APNA DIRECT LINK YAHAN DALO

// --- TAB SWITCHING LOGIC ---
function switchTab(event, tabId) {
    // Sabhi cards ko hide karo
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => card.classList.remove('active'));

    // Sabhi buttons se active class hatao
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Jo select kiya usse show karo
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// --- MONETAG AD TRIGGER (Direct Link) ---
function triggerAd() {
    // Ye function har click par ad link kholega (image_294dff.png)
    window.open(MONETAG_DIRECT_LINK, '_blank');
}

// --- MINECRAFT SERVER STATUS ---
async function checkServer() {
    const ip = document.getElementById('serverIP').value;
    const resultDiv = document.getElementById('statusResult');
    
    if (!ip) return alert("Please enter a server IP!");

    // Ad Trigger
    triggerAd(); // Click karte hi ad khulega

    resultDiv.innerHTML = "Checking...";

    try {
        const response = await fetch(`https://api.mcstatus.io/v2/status/java/${ip}`);
        const data = await response.json();

        if (data.online) {
            resultDiv.innerHTML = `
                <p style="color:#39ff14;">✅ Server is Online</p>
                <p>Players: ${data.players.online} / ${data.players.max}</p>
                <p>Version: ${data.version.name}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p style="color:#ff5555;">❌ Server is Offline</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = "Error fetching status.";
    }
}

// --- SKIN DOWNLOADER ---
function getSkin() {
    const user = document.getElementById('mcUser').value;
    const display = document.getElementById('skinDisplay');

    if (!user) return alert("Enter Username!");

    // Ad Trigger
    triggerAd(); // Skin view par bhi ad

    display.innerHTML = `
        <img src="https://mc-heads.net/body/${user}/150" alt="skin" style="margin-bottom:10px;">
        <br>
        <a href="https://mc-heads.net/download/${user}" target="_blank">
            <button class="glow-btn" style="width:auto; padding: 10px 20px;">Download Skin</button>
        </a>
    `;
}

// --- COLOR CODE COPY ---
function copyCode(code) {
    navigator.clipboard.writeText(code);
    const msg = document.getElementById('copyMsg');
    msg.innerText = "Copied: " + code;
    setTimeout(() => msg.innerText = "", 2000);
}

// --- SESSION TIMER ---
let timerInterval;
let seconds = 0;

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        seconds++;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        document.getElementById('timeDisp').innerText = 
            `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}
