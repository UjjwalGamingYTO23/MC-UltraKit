<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    
    <title>EnderKit | Ultimate Minecraft Tools 2026</title>
    <meta name="description" content="Get OP Minecraft Seeds, Java/Bedrock Color Codes, Server Status and Skin Grabber. The most clean and powerful Minecraft utility hub.">
    <meta name="keywords" content="Minecraft, Minecraft Seeds, OP Seeds, Minecraft Color Codes, Minecraft Skin Viewer, Minecraft Server Status, EnderKit, Minecraft Bedrock Seeds, Minecraft Java Seeds, God Seeds Minecraft, Minecraft 1.21 Seeds, Minecraft PE Seeds, Minecraft Utility Tool, Minecraft Code Copy, Minecraft Skin Grabber">
    <meta name="google-site-verification" content="b2rhb0y_E0mSSEmR0dYrb_l4I4Cv4sajCa5chWECSa4" />

    <script src="https://alwingulla.com/88/tag.min.js" data-zone="123456" async data-cfasync="false"></script>

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

        /* Sidebar & Navigation */
        .sidebar {
            width: 260px; background: var(--sidebar); height: 100vh; position: fixed;
            border-right: 1px solid #222; padding: 25px; z-index: 1000;
            display: flex; flex-direction: column;
        }

        .logo { font-size: 26px; font-weight: 900; color: var(--primary); text-align: center; margin-bottom: 40px; }
        .logo span { color: var(--accent); }

        .nav-btn {
            background: transparent; border: none; color: #888; padding: 15px;
            margin-bottom: 8px; width: 100%; border-radius: 12px; cursor: pointer;
            text-align: left; font-weight: 600; transition: 0.3s;
        }
        .nav-btn:hover, .nav-btn.active { background: rgba(168, 85, 247, 0.1); color: var(--primary); }

        /* Main Content */
        .main-content { margin-left: 260px; padding: 40px; width: 100%; display: flex; justify-content: center; }
        .app-card { display: none; width: 100%; max-width: 550px; background: var(--card); padding: 30px; border-radius: 20px; border: 1px solid #2a2a35; }
        .app-card.active { display: block; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        h2 { margin-bottom: 20px; font-size: 22px; color: #fff; }
        label { display: block; margin: 15px 0 5px; font-size: 13px; color: #888; }
        input, select { width: 100%; padding: 12px; background: #08080a; border: 1px solid #333; border-radius: 8px; color: var(--accent); outline: none; }

        .glow-btn {
            width: 100%; padding: 14px; margin-top: 20px; background: var(--primary);
            color: white; border: none; border-radius: 10px; font-weight: bold;
            cursor: pointer; text-transform: uppercase; transition: 0.3s;
        }
        .glow-btn:hover { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }

        /* Color Grid */
        .color-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 10px; }
        .c-btn { padding: 10px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 12px; }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
            .sidebar { display: none; }
            .main-content { margin-left: 0; padding: 20px; padding-bottom: 100px; }
            .nav-container { position: fixed; bottom: 0; left: 0; width: 100%; background: var(--sidebar); display: flex; justify-content: space-around; padding: 12px; border-top: 1px solid #333; z-index: 2000; }
            .nav-container .nav-btn { width: auto; padding: 5px; text-align: center; font-size: 11px; }
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
        <button class="nav-btn" onclick="switchTab(event, 'skin')">👤 Skin Grabber</button>
    </div>

    <div class="nav-container" id="mobileNav">
        <button class="nav-btn active" onclick="switchTab(event, 'seed')">Seeds</button>
        <button class="nav-btn" onclick="switchTab(event, 'colors')">Colors</button>
        <button class="nav-btn" onclick="switchTab(event, 'status')">Status</button>
        <button class="nav-btn" onclick="switchTab(event, 'skin')">Skin</button>
    </div>

    <div class="main-content">
        <div id="seed" class="app-card active">
            <h2>🌍 OP Seed Finder</h2>
            <label>Edition</label>
            <select id="seedEd"><option value="java">Java</option><option value="bedrock">Bedrock</option></select>
            <label>Type</label>
            <select id="seedCat"><option value="survival">Survival</option><option value="biomes">Rare Biomes</option></select>
            <button class="glow-btn" onclick="getSeed()">Generate & Show Ad</button>
            <div id="seedOutput" style="display:none; margin-top:20px; padding:15px; background:rgba(0,0,0,0.3); border:1px dashed var(--accent); border-radius:10px; text-align:center;">
                <h3 id="seedVal" style="color:var(--accent); font-family:monospace;"></h3>
                <p id="seedDesc" style="color:#aaa; font-size:13px; margin-top:5px;"></p>
            </div>
        </div>

        <div id="colors" class="app-card">
            <h2>🎨 Minecraft Color Codes</h2>
            <div class="color-grid">
                <button class="c-btn" style="background:#AA0000; color:#fff;" onclick="copyCode('§4')">§4</button>
                <button class="c-btn" style="background:#55FF55; color:#000;" onclick="copyCode('§a')">§a</button>
                <button class="c-btn" style="background:#5555FF; color:#fff;" onclick="copyCode('§9')">§9</button>
                <button class="c-btn" style="background:#FFFF55; color:#000;" onclick="copyCode('§e')">§e</button>
            </div>
            <p id="copyMsg" style="text-align:center; margin-top:15px; color:var(--accent); font-size:13px;"></p>
        </div>

        <div id="status" class="app-card">
            <h2>📡 Server Status</h2>
            <input type="text" id="serverIP" placeholder="play.hypixel.net">
            <button class="glow-btn" onclick="checkServer()">Check Online</button>
            <div id="statusResult" style="margin-top:20px; text-align:center;"></div>
        </div>

        <div id="skin" class="app-card">
            <h2>👤 Skin Grabber</h2>
            <input type="text" id="mcUser" placeholder="Username">
            <button class="glow-btn" onclick="getSkin()">View Skin</button>
            <div id="skinDisplay" style="text-align:center; margin-top:20px;"></div>
        </div>
    </div>

    <script>
        const adLink = "https://otieu.com/4/10581423";

        function switchTab(e, id) {
            document.querySelectorAll('.app-card').forEach(c => c.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }

        function getSeed() {
            window.open(adLink, '_blank'); // Only Seed button triggers Ad
            const s = ["34088318464", "22061", "8624896", "-1849767326"];
            const d = ["Village Spawn", "5 Blacksmiths", "Cherry Grove", "Crater Village"];
            const r = Math.floor(Math.random() * s.length);
            document.getElementById('seedVal').innerText = s[r];
            document.getElementById('seedDesc').innerText = d[r];
            document.getElementById('seedOutput').style.display = "block";
        }

        function copyCode(c) {
            navigator.clipboard.writeText(c);
            document.getElementById('copyMsg').innerText = "Copied: " + c;
            setTimeout(() => document.getElementById('copyMsg').innerText = "", 2000);
        }

        async function checkServer() {
            const ip = document.getElementById('serverIP').value;
            if(!ip) return;
            document.getElementById('statusResult').innerText = "Scanning...";
            const res = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
            const data = await res.json();
            document.getElementById('statusResult').innerHTML = data.online ? `<span style="color:var(--accent)">ONLINE (${data.players.online} Players)</span>` : `<span style="color:red">OFFLINE</span>`;
        }

        function getSkin() {
            const u = document.getElementById('mcUser').value;
            if(u) document.getElementById('skinDisplay').innerHTML = `<img src="https://mc-heads.net/body/${u}/120">`;
        }
    </script>
</body>
</html>
