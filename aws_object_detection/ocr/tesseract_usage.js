const ocr = require('tesseract.js');

ocr.recognize("./000000.jpg",'eng',{logger: m => console.log(m)})
        .then(out=>console.log(out));