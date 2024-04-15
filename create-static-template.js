const fs = require('fs');

const htmlTemData = [
    {
        code: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MANOJCONCEPT</title>
            <!-- manojconcept v0.01 -->
            <link rel="stylesheet" href="src/style/style.css">
        </head>
        
        <body>
            <h1>Welcome to manojconcept html static template</h1>
            <script src="./src/script/script.js"></script>
        </body>
        
        </html>`,
        directory: `html-static-template/index.html`
    },
    {
        code : "",
        directory: `html-static-template/src/style/style.css`
    },
    {
        code: `console.log('linked')`,
        directory: `html-static-template/src/script/script.js`
    }
];

//>> To Add Folders
const directoryPath = ["script", "style", "image"]; 

//>> Function to create a directory
function createFolder(directory) { 
    return new Promise((resolve, reject) => {
        fs.mkdir(directory, { recursive: true }, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

//>> Function to write a file
function createFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(data.directory, data.code, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

//>> Sequentially execute actions
async function executeActions() {
    try {

        //>> Create folders
        for (const dir of directoryPath) {
            await createFolder(`html-static-template/src/${dir}`);
            console.log(`Folder created: html-static-template/src/${dir}`);
        }

        //>> Create files
        for (const fileData of htmlTemData) {
            await createFile(fileData);
            console.log(`File created: ${fileData.directory}`);
        }

        console.log("All actions executed successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

executeActions();