import fs from 'fs';
import https from 'https';

const url = "https://raw.githubusercontent.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png";
const dir = 'public/textures';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
    const file = fs.createWriteStream(dest);
    https.get(url, function (response) {
        if (response.statusCode === 302 || response.statusCode === 301) {
            console.log("Redirecting to:", response.headers.location);
            download(response.headers.location, dest);
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log("Download completed.");
        });
    }).on('error', (err) => {
        console.error("Error:", err);
    });
}

download(url, "public/textures/cloud.png");
