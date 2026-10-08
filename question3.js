// Question 3: File Module


const fs = require('fs');
const path = require('path');

const LOG_FILE_COUNT = 10;

const logsDirectoryPath = path.join(process.cwd(), 'Logs');

const addLogFiles = () => {
    if (!fs.existsSync(logsDirectoryPath)) {
        fs.mkdirSync(logsDirectoryPath);
    }

    process.chdir(logsDirectoryPath);

    for (let logIndex = 0; logIndex < LOG_FILE_COUNT; logIndex++) {
        const logFileName = `log${logIndex}.txt`;
        fs.writeFileSync(logFileName, `Log entry ${logIndex} created at ${new Date().toISOString()}\n`);
        console.log(logFileName);
    }
};

const removeLogFiles = () => {
    if (!fs.existsSync(logsDirectoryPath)) {
        console.log('Logs directory does not exist, nothing to remove');
        return;
    }

    for (const logFileName of fs.readdirSync(logsDirectoryPath)) {
        console.log(`delete files...${logFileName}`);
        fs.unlinkSync(path.join(logsDirectoryPath, logFileName));
    }

    process.chdir(path.dirname(logsDirectoryPath));
    fs.rmdirSync(logsDirectoryPath);
};

const command = process.argv[2];

try {
    if (command === 'add') {
        addLogFiles();
    } else if (command === 'remove') {
        removeLogFiles();
    } else {
        addLogFiles();
        removeLogFiles();
    }
} catch (error) {
    console.error(`File operation failed: ${error.message}`);
    process.exitCode = 1;
}
