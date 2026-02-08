<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    
    <title>EnderKit | Ultimate Minecraft Tools</title>
    <meta name="description" content="Get OP Minecraft Seeds, Color Codes, and Skin Grabber.">
    <meta name="keywords" content="Minecraft, Minecraft Seeds, OP Seeds, EnderKit, Minecraft Color Codes">
    <meta name="google-site-verification" content="b2rhb0y_E0mSSEmR0dYrb_l4I4Cv4sajCa5chWECSa4" />

    <style>
        :root {
            --bg: #0b0b0e;
            --sidebar: #12121a;
            --card: #16161f;
            --primary: #a855f7;
            --accent: #39ff14;
            --text: #e0e0e0;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { background-color: var(--bg); color: var(--text); min-height: 100vh; display: flex; overflow-x: hidden; }

        /* Sidebar */
        .sidebar {
            width: 260px; background: var(--sidebar); height: 100vh; position: fixed;
            border-right: 1px solid #222; padding: 25px; z-index: 1000;
        }

        .logo { font-size: 26px; font-weight: 900; color: var(--primary); text-align: center; margin-bottom: 40px; }
        .logo span { color: var(--accent); }

        .nav-btn {
            background: transparent; border: none; color: #888; padding: 15px;
            margin-bottom: 8px; width: 100%; border-radius: 12px; cursor: pointer;
            text-align: left; font-weight: 600; transition: 0.3s;
        }
        .nav-btn.active { background: rgba(168, 85, 247, 0.1); color: var(--primary); }

        /* Content */
        .main-content { margin-left: 260px; padding: 40px; width: 100%; display: flex; justify-content: center; }
        .app-card { display: none; width: 100%; max-width: 500px; background: var(--card); padding: 30px; border-radius: 20px; border: 1px solid #2a2a35; }
        .app-card.active { display: block; }

        h2 { margin-bottom: 20px; font-size: 22px; color: #fff; border-left: 4px solid var(--primary); padding-left: 10px; }
        input, select { width: 100%; padding: 12px; background: #08080a; border: 1px solid #333; border-radius: 8px; color: var(--accent); margin-bottom: 10px; outline: none; }

        .glow-btn {
            width: 100%; padding: 14px; background: var(--primary);
            color: white; border: none; border-radius: 10px; font-weight: bold;
            cursor: pointer; transition: 0.3s;
        }

        /* Mobile Bottom Nav */
        @media (max-width: 768px) {
            .sidebar { display: none; }
            .main-content { margin-left: 0; padding: 20px; }
            .nav-container { position: fixed; bottom: 0; left: 0; width: 100%; background: var(--sidebar); display: flex; justify-content: space-around; padding: 10px; border-top: 1px solid #333; }
        }
        @media (min-width: 769px) { .nav-container { display: none; } }
    </style>
</head>
<body>

    <div class="sidebar">
        <div class="logo">ENDER<span>KIT</span></div>
        <button class="nav-btn active" onclick="switchTab(event, 'seed')">🌍 OP Seeds</button>
        <button class="nav-btn" onclick="switchTab(event, 'colors')">🎨 Color Codes</button>
        <button class="nav-btn" onclick="switchTab(event, 'status')">📡 Server Status</button>
    </div>

    <div class="nav-container">
        <button class="nav-btn" onclick="switchTab(event, 'seed')">Seeds</button>
        <button class="nav-btn" onclick="switchTab(event, 'colors')">Colors</button>
        <button class="nav-btn" onclick="switchTab(event, 'status')">Status</button>
    </div>

    <div class="main-content">
        <div id="seed" class="app-card active">
            <h2>🌍 OP Seed Finder</h2>
            <select id="seedEd"><option value="java">Java Edition</option><option value="bedrock">Bedrock</option></select>
            <button class="glow-btn" onclick="getSeed()">Generate Seed</button>
            <div id="seedOutput" style="display:none; margin-top:20px; color:var(--accent); text-align:center; border:1px dashed #444; padding:10px;">
                <h3 id="seedVal"></h3>
            </div>
        </div>

        <div id="colors" class="app-card">
            <h2>🎨 Color Codes</h2>
            <p style="font-size:12px; color:#888;">Click to copy code</p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
                <button onclick="copy('§4')" style="background:#AA0000; padding:10px; color:#fff; border:none; border-radius:5px;">Red (§4)</button>
                <button onclick="copy('§a')" style="background:#55FF55; padding:10px; color:#000; border:none; border-radius:5px;">Green (§a)</button>
            </div>
        </div>

        <div id="status" class="app-card">
            <h2>📡 Server Status</h2>
            <input type="text" id="serverIP" placeholder="play.hypixel.net">
            <button class="glow-btn" onclick="checkServer()">Check Online</button>
            <div id="statusResult" style="margin-top:20px; text-align:center;"></div>
        </div>
    </div>

    <script>
        // Yahan sirf apna Monetag Direct Link daalna
        const adLink = "https://otieu.com/4/10581423"; 

        function switchTab(e, id) {
            document.querySelectorAll('.app-card').forEach(c => c.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }

        function getSeed() {
            // Sirf button click pe ad khulega
            window.open(adLink, '_blank'); 
            
            const seeds = ["548301", "22061", "8624896", "34088318464"];
            document.getElementById('seedVal').innerText = seeds[Math.floor(Math.random()*seeds.length)];
            document.getElementById('seedOutput').style.display = "block";
        }

        function copy(c) {
            navigator.clipboard.writeText(c);
            alert("Copied: " + c);
        }

        async function checkServer() {
            const ip = document.getElementById('serverIP').value;
            if(!ip) return;
            document.getElementById('statusResult').innerText = "Scanning...";
            try {
                const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
                const data = await res.json();
                document.getElementById('statusResult').innerHTML = data.online ? "ONLINE" : "OFFLINE";
            } catch(e) { document.getElementById('statusResult').innerText = "Error"; }
        }
    </script>
</body>
</html>
