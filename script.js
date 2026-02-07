let timerInterval;
let seconds = 0;
let currentColor = "§f";

// TAB SWITCHING
function switchTab(event, tabId) {
    document.querySelectorAll('.app-card').forEach(card => card.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// COLOR CODE LOGIC
function addColor(code) {
    currentColor = code;
    updateColorPreview();
}

function updateColorPreview() {
    const text = document.getElementById('rawText').value;
    document.getElementById('formattedCode').innerText = currentColor + text;
}

function copyToClipboard() {
    const code = document.getElementById('formattedCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Copied to clipboard: " + code);
    });
}

// SKIN DOWNLOADER
async function getSkin() {
    const user = document.getElementById('mcUser').value;
    if(!user) return alert("Please enter a username!");
    
    const display = document.getElementById('skinDisplay');
    const dlBtn = document.getElementById('downloadBtn');
    
    display.innerHTML = `<img src="https://mc-heads.net/body/${user}" alt="skin">`;
    
    try {
        const response = await fetch(`https://mc-heads.net/skin/${user}`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        dlBtn.href = url;
        dlBtn.download = `${user}_skin.png`;
        dlBtn.style.display = "inline-block";
    } catch (err) {
        console.error("Skin fetch failed");
    }
}

// NETHER CALC
function calcNether() {
    const x = document.getElementById('xCoord').value;
    if(x) {
        const netherX = Math.floor(x / 8);
        document.getElementById('netherRes').innerText = `Build your portal at Nether X: ${netherX}`;
    }
}

// TIMER LOGIC
function startTimer() {
    document.getElementById('startBtn').style.display = "none";
    document.getElementById('stopBtn').style.display = "inline-block";
    
    timerInterval = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').style.display = "inline-block";
    document.getElementById('stopBtn').style.display = "none";
    document.getElementById('startBtn').innerText = "Resume";
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    updateTimerDisplay();
    document.getElementById('startBtn').style.display = "inline-block";
    document.getElementById('stopBtn').style.display = "none";
    document.getElementById('startBtn').innerText = "Start";
}

function updateTimerDisplay() {
    let h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    let s = (seconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${h}:${m}:${s}`;
}