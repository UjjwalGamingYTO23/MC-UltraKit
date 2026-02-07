let timerInterval;
let seconds = 0;
let currentColor = "§f";

function switchTab(event, tabId) {
    document.querySelectorAll('.app-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

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
    navigator.clipboard.writeText(code);
    alert("EnderKit: Code copied to clipboard!");
}

async function getSkin() {
    const user = document.getElementById('mcUser').value;
    if(!user) return;
    const display = document.getElementById('skinDisplay');
    const dlBtn = document.getElementById('downloadBtn');
    display.innerHTML = `<img src="https://mc-heads.net/body/${user}" style="width:120px; margin-top:15px;">`;
    const res = await fetch(`https://mc-heads.net/skin/${user}`);
    const blob = await res.blob();
    dlBtn.href = window.URL.createObjectURL(blob);
    dlBtn.download = `${user}_skin.png`;
    dlBtn.style.display = "inline-block";
}

function calcNether() {
    const x = document.getElementById('xCoord').value;
    if(x) document.getElementById('netherRes').innerText = `Nether Portal X: ${Math.floor(x/8)}`;
}

function startTimer() {
    document.getElementById('startBtn').style.display = "none";
    document.getElementById('stopBtn').style.display = "inline-block";
    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').style.display = "inline-block";
    document.getElementById('stopBtn').style.display = "none";
    document.getElementById('startBtn').innerText = "Resume Session";
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    updateTimer();
    document.getElementById('startBtn').innerText = "Start Session";
    document.getElementById('startBtn').style.display = "inline-block";
    document.getElementById('stopBtn').style.display = "none";
}

function updateTimer() {
    let hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${hrs}:${mins}:${secs}`;
}
