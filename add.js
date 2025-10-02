// Viktor Grygoriev - 101472499

const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}\n`);
    console.log("Created file:", fileName);
}