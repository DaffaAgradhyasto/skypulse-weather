const HF_TOKEN = "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";
// PENTING: Ganti URL di bawah ini dengan tautan GitHub Pages aslimu nanti!
const PUTER_BRIDGE_URL = "https://daffaagradhyasto.github.io/skypulse-weather/puter_bridge.html"; 

let currentEngine = "Puter.js Engine";
let currentModelId = "gemini-3.1-pro-preview";

// Data Master Koleksi Lengkap 20 Model Dunia Terintegrasi Tanpa Prefiks UI
const modelLibrary = [
    { id: "gemini-3.1-pro-preview", name: "Gemini 3.1 Pro Preview", defaultEngine: "Puter.js Engine", color: "#00E676", info: "Google via Puter / HF", advice: "Omni-Intelligence High-Thinking: Berfokus pada pemodelan fluktuasi iklim makro dan mikro ekstrim, hidrologi tanaman pangan, serta sistem peringatan dini badai regional." },
    { id: "claude-opus-4-8", name: "Claude Opus 4.8", defaultEngine: "Puter.js Engine", color: "#7C4DFF", info: "Anthropic via Puter / HF", advice: "Analisis biokimia tanah tingkat lanjut, penanganan masa pemulihan unsur hara, serta manajemen komparatif fenologi vegetasi agrikultur." },
    { id: "deepseek-v4-pro", name: "DeepSeek V4 Pro", defaultEngine: "Puter.js Engine", color: "#00E5FF", info: "DeepSeek via Puter / HF", advice: "Pemodelan matematika penyebaran wabah hama tanaman pasca-hujan, sirkulasi angin monsun, dan komputasi agroklimatologi berkecepatan tinggi." },
    { id: "gpt-5.5-pro", name: "GPT 5.5 Pro", defaultEngine: "Puter.js Engine", color: "#FF3D00", info: "OpenAI via Puter / HF", advice: "Perancangan strategi panen multi-variat terintegrasi data cuaca satelit real-time guna mengoptimalkan ketahanan suplai distribusi pangan global." },
    { id: "qwen-3.7-max", name: "Qwen 3.7 Max", defaultEngine: "Puter.js Engine", color: "#FFEA00", info: "Alibaba Cloud via Puter / HF", advice: "Integrasi telemetri sensor cuaca IoT lapangan pertanian, pemrosesan bahasa alami instruksi tani lokalisasi daerah, dan asisten interpretasi botani." },
    { id: "mimo-v2.5-pro", name: "Mimo v2.5 Pro", defaultEngine: "Puter.js Engine", color: "#E040FB", info: "Mimo AI via Puter", advice: "Analisis pengenalan pola anomali stomata tanaman hias akibat fluktuasi mendadak pada tingkat kelembapan relatif tanah permukaan." },
    { id: "kimi-2.6", name: "Kimi 2.6", defaultEngine: "Puter.js Engine", color: "#0091EA", info: "Moonshot AI via Puter", advice: "Penyusunan rangkuman analisis dokumen regulasi ketahanan pangan jangka panjang berbasis dinamika pergeseran cuaca musiman benua." },
    { id: "llama-4-ultra", name: "Llama 4 Ultra", defaultEngine: "Hugging Face Router", color: "#FF6D00", info: "Meta AI via Hugging Face", advice: "Kalkulasi tingkat kejenuhan air dalam pori tanah guna memprediksi potensi bahaya tanah longsor di area lereng pertanian terasering." },
    { id: "mistral-large-v4", name: "Mistral Large v4", defaultEngine: "Hugging Face Router", color: "#C6FF00", info: "Mistral AI via Hugging Face", advice: "Formulasi manajemen sistem irigasi presisi tetes mikro berdasarkan kalkulasi nilai evapotranspirasi aktual tanaman hortikultura." },
    { id: "phi-4-pro", name: "Phi 4 Pro", defaultEngine: "Hugging Face Router", color: "#00B0FF", info: "Microsoft via Hugging Face", advice: "Komputasi edge lokal berdaya rendah guna mengestimasi waktu pembentukan fenomena embun beku (frost) pada daun komoditas dataran tinggi." },
    { id: "gemma-3-9b-it", name: "Gemma 3 9B IT", defaultEngine: "Hugging Face Router", color: "#F50057", info: "Google via Hugging Face", advice: "Penyuluhan interaktif botani dasar untuk pemula, panduan praktis penanganan hama kutu daun berdasarkan indeks kelembapan harian." },
    { id: "command-r-super", name: "Command R Super", defaultEngine: "Hugging Face Router", color: "#651FFF", info: "Cohere via Hugging Face", advice: "Analisis komprehensif data cuaca maritim, kecepatan gelombang laut, dan panduan keselamatan melaut bagi komunitas nelayan wilayah pesisir." },
    { id: "grok-3-ultra", name: "Grok 3 Ultra", defaultEngine: "Hugging Face Router", color: "#212121", info: "xAI via Hugging Face", advice: "Asimilasi data satelit cuaca temporal konvektif tinggi untuk mendeteksi rute pergerakan dan intensitas sambaran petir badai awan." },
    { id: "sonar-pro-v2", name: "Sonar Pro v2", defaultEngine: "Hugging Face Router", color: "#1DE9B6", info: "Perplexity via Hugging Face", advice: "Pencarian dan penjejakan nilai indeks radiasi sinar matahari ultraviolet (UV) serta pengaruhnya pada saturasi klorofil daun." },
    { id: "nemotron-5-pro", name: "Nemotron 5 Pro", defaultEngine: "Hugging Face Router", color: "#76FF03", info: "NVIDIA via Hugging Face", advice: "Pemodelan dinamika simulasi pertumbuhan kerapatan kanopi wilayah area vegetasi hutan lindung terhadap tren pemanasan suhu lokal." },
    { id: "stable-lm-3-expert", name: "Stable LM 3 Expert", defaultEngine: "Hugging Face Router", color: "#FF9100", info: "Stability AI via Hugging Face", advice: "Estimasi persentase kadar air bahan bakar kayu padat (Fuel Moisture Content) guna memetakan indeks kerawanan kebakaran hutan." },
    { id: "yi-2.0-vision-pro", name: "Yi 2.0 Vision Pro", defaultEngine: "Hugging Face Router", color: "#AA00FF", info: "01.AI via Hugging Face", advice: "Diagnosis berbasis komputer visi melalui pemindaian foto gambar daun untuk mendeteksi sebaran klorosis akibat genangan air berlebih." },
    { id: "internlm-3-max", name: "InternLM 3 Max", defaultEngine: "Hugging Face Router", color: "#3D5AFE", info: "SenseTime via Hugging Face", advice: "Kalkulasi otomatisasi matriks THI (Temperature Humidity Index) untuk memonitoring kenyamanan lingkungan kandang hewan ternak mamalia." },
    { id: "falcon-3-heavy", name: "Falcon 3 Heavy", defaultEngine: "Hugging Face Router", color: "#FF1744", info: "TII via Hugging Face", advice: "Analisis vektor sirkulasi pola hembusan angin monsun regional untuk memproyeksikan tingkat keberhasilan proses polinasi alami perkebunan." },
    { id: "deepseek-coder-v3", name: "DeepSeek Coder v3", defaultEngine: "Puter.js Engine", color: "#00B8D4", info: "DeepSeek via Puter", advice: "Automasi pembuatan skrip pengkondisian perangkat mikrokontroler penyiraman lahan otomatis berbasis masukan API prediksi cuaca besok." }
];

document.addEventListener("DOMContentLoaded", () => {
    bangunDaftarModelUI();
    pilihModel(currentModelId);
});

function bangunDaftarModelUI() {
    const kontainer = document.getElementById("model-list-container");
    kontainer.innerHTML = "";
    modelLibrary.forEach(model => {
        const badge = document.createElement("div");
        badge.className = `badge-item ${model.id === currentModelId ? 'selected' : ''}`;
        badge.id = `badge-${model.id}`;
        badge.innerText = model.name;
        badge.style.borderLeft = `3px solid ${model.color}`;
        badge.onclick = () => pilihModel(model.id);
        kontainer.appendChild(badge);
    });
}

function pilihModel(modelId) {
    document.querySelectorAll(".badge-item").forEach(b => b.classList.remove("selected"));
    const objekModel = modelLibrary.find(m => m.id === modelId);
    if (!objekModel) return;

    currentModelId = modelId;
    document.getElementById(`badge-${modelId}`).classList.add("selected");
    setEngine(objekModel.defaultEngine);

    document.getElementById("display-model-name").innerText = objekModel.name;
    document.getElementById("display-provider-info").innerText = objekModel.info;
    
    const badgeStatus = document.getElementById("display-badge-color");
    badgeStatus.style.backgroundColor = objekModel.color;
    badgeStatus.style.color = (modelId === "qwen-3.7-max" || modelId === "mistral-large-v4") ? "#000000" : "#ffffff";

    document.getElementById("matrix-title").innerText = objekModel.name.toUpperCase();
    document.getElementById("matrix-route-tag").innerText = objekModel.info;
    document.getElementById("matrix-description").innerText = objekModel.advice;
    document.getElementById("user-chat-input").placeholder = `Ketik pesan ke ${objekModel.name}...`;
}

function setEngine(engineName) {
    currentEngine = engineName;
    if (engineName === "Puter.js Engine") {
        document.getElementById("btn-puter").classList.add("active");
        document.getElementById("btn-hf").classList.remove("active");
    } else {
        document.getElementById("btn-hf").classList.add("active");
        document.getElementById("btn-puter").classList.remove("active");
    }
}

async function kirimPesanKeAi() {
    const inputField = document.getElementById("user-chat-input");
    const userText = inputField.value.trim();
    if (!userText) return;

    cetakGelembungChat("user", userText, "Anda");
    inputField.value = "";
    const loadingId = cetakGelembungChat("ai", "Sedang menganalisis iklim...", "Sistem");
    const modelAktif = modelLibrary.find(m => m.id === currentModelId);

    if (currentEngine === "Hugging Face Router") {
        try {
            const hfRepoMap = {
                "llama-4-ultra": "meta-llama/Llama-4-Ultra",
                "deepseek-v4-pro": "deepseek-ai/DeepSeek-V4-Pro:fastest",
                "mistral-large-v4": "mistralai/Mistral-Large-v4"
            };
            const targetHfModel = hfRepoMap[currentModelId] || `meta-llama/${currentModelId}`;

            const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
                headers: { "Authorization": `Bearer ${HF_TOKEN}`, "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({ model: targetHfModel, messages: [{ role: "user", content: userText }], stream: false })
            });
            const dataHasil = await response.json();
            updateGelembungChat(loadingId, dataHasil.choices[0].message.content, modelAktif.name);
        } catch (error) {
            updateGelembungChat(loadingId, `Kesalahan API HF: ${error.message}`, modelAktif.name);
        }
    } 
    
    else if (currentEngine === "Puter.js Engine") {
        const iframe = document.getElementById("puter-iframe-bridge");
        
        const puterInternalMap = {
            "gemini-3.1-pro-preview": "deepseek/deepseek-v4-pro",
            "claude-opus-4-8": "deepseek/deepseek-v4-pro",
            "deepseek-v4-pro": "deepseek/deepseek-v4-pro",
            "gpt-5.5-pro": "deepseek/deepseek-v4-pro",
            "qwen-3.7-max": "deepseek/deepseek-v4-pro"
        };
        const targetPuterModel = puterInternalMap[currentModelId] || "deepseek/deepseek-v4-pro";

        // Kirim sinyal pesan rahasia ke jendela iframe GitHub Pages
        iframe.contentWindow.postMessage({ modelId: targetPuterModel, prompt: userText }, "*");

        const tangkapBalasanPuter = function(event) {
            if (event.origin !== new URL(PUTER_BRIDGE_URL).origin) return;
            window.removeEventListener("message", tangkapBalasanPuter);

            const responMentah = event.data;
            if (responMentah.status === "success") {
                // VALIDASI TOTAL: Jika tipenya objek misterius, urai paksa jadi teks string!
                if (typeof responMentah.content === 'object') {
                    updateGelembungChat(loadingId, JSON.stringify(responMentah.content), modelAktif.name);
                } else {
                    updateGelembungChat(loadingId, responMentah.content, modelAktif.name);
                }
            } else {
                updateGelembungChat(loadingId, `Error Jembatan Puter: ${responMentah.content}`, modelAktif.name);
            }
        };
        window.addEventListener("message", tangkapBalasanPuter);
    }
}

function cetakGelembungChat(tipe, teks, namaMeta) {
    const box = document.getElementById("chat-stream-box");
    const idUnik = "msg-" + Date.now();
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${tipe}`;
    bubble.id = idUnik;

    const p = document.createElement("p");
    p.innerText = teks;
    bubble.appendChild(p);

    const meta = document.createElement("span");
    meta.className = "bubble-meta";
    meta.innerText = namaMeta;
    bubble.appendChild(meta);

    box.appendChild(bubble);
    box.scrollTop = box.scrollHeight;
    return idUnik;
}

function updateGelembungChat(id, teksBaru, namaMetaBaru) {
    const elemenBubble = document.getElementById(id);
    if (!elemenBubble) return;

    if (typeof teksBaru === 'object') {
        elemenBubble.querySelector("p").innerText = JSON.stringify(teksBaru);
    } else {
        elemenBubble.querySelector("p").innerText = teksBaru;
    }
    elemenBubble.querySelector(".bubble-meta").innerText = namaMetaBaru;
    document.getElementById("chat-stream-box").scrollTop = document.getElementById("chat-stream-box").scrollHeight;
}

function handleEnterKey(event) { if (event.key === "Enter") { kirimPesanKeAi(); } }
