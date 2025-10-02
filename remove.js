// Viktor Grygoriev - 101472499

const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log("Deleting file:", file);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsDir);
    console.log("Logs removed");
} else {
    console.log("No Logs found");
}