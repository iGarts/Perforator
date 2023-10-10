function RenameDatasetsCollection(path) {
    var fs = require('fs');
    var fileNames = fs.readdirSync(path);

    for (i in fileNames) {
        fs.rename(
            path + fileNames[i],
            path + "dataset_" + i,
            function (err) { if (err) console.log('ERROR: ' + err) });
    }
}

// Put the absolute directory path into variable
// Run this tool using console
// node .\src\Utils\DatasetRenamer.js
var path = "D:/Content/CompressedData/vn.homecredit/"
RenameDatasetsCollection(path);