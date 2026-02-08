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
const adLink = "https://otieu.com/4/10581423";
        let lastAdTime = 0; // Timer track karne ke liye

        // --- COMMON AD TRIGGER FUNCTION ---
        function triggerAd() {
            const currentTime = new Date().getTime();
            // Agar pichle ad ko 30 second (30000ms) se zyada ho gaye hain, tabhi naya khulega
            if (currentTime - lastAdTime > 30000) { 
                window.open(adLink, '_blank');
                lastAdTime = currentTime;
            }
        }

        // --- UPDATED FUNCTIONS ---
        function getSeed() {
            triggerAd(); // Isme timer laga hai
            const cat = document.getElementById('seedCat').value;
            const ed = document.getElementById('seedEd').value;
            const list = seeds[cat][ed];
            const random = list[Math.floor(Math.random() * list.length)];
            document.getElementById('seedVal').innerText = random.s;
            document.getElementById('seedDesc').innerText = "Feature: " + random.d;
            document.getElementById('seedOutput').style.display = "block";
        }

        async function checkServer() {
            const ip = document.getElementById('serverIP').value;
            if(!ip) return;
            triggerAd();
            const resDiv = document.getElementById('statusResult');
            resDiv.innerHTML = "🔍 Scanning...";
            try {
                const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
                const data = await res.json();
                if(data.online) {
                    resDiv.innerHTML = `<span style="color:#39ff14">✅ ONLINE</span><br><span style="color:#aaa; font-size:12px;">Players: ${data.players.online}/${data.players.max}</span>`;
                } else {
                    resDiv.innerHTML = `<span style="color:#ff5555">❌ OFFLINE</span>`;
                }
            } catch { resDiv.innerHTML = "Error!"; }
        }

        function getSkin() {
            const user = document.getElementById('mcUser').value;
            if(!user) return;
            triggerAd();
            document.getElementById('skinDisplay').innerHTML = `
                <img src="https://mc-heads.net/body/${user}/150" style="margin-bottom:10px;">
                <br>
                <a href="https://mc-heads.net/download/${user}" target="_blank" style="color:#39ff14; text-decoration:none; font-size:12px;">Download Skin</a>
            `;
        }
