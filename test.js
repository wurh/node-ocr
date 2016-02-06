var tesseract = require('node-tesseract');

function rec(){
    var testImage = __dirname + '/img/test.png';
    console.log(testImage);
    tesseract.process(testImage, function(err, text) {
        console.log(text);
    });
}

rec();