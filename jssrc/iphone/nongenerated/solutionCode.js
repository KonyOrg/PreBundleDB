//Type your code here
function prebundleDB() {
    //Example for opening the pre-bundled database
    //The destination file name can be different from the source.
    var destFilePath = kony.io.FileSystem.getDatabaseDirectoryPath() + "100000002015566d7_dest.db";
    kony.print("destFilePath: " + destFilePath);
    var fileObj = null;
    try {
        var file = new kony.io.File(destFilePath);
        kony.print("file: " + file);
        //copyBundledRawFileTo API overrides the destination file with new one.
        //Hence check before copying
        if (!file.exists()) {
            fileObj = kony.io.FileSystem.copyBundledRawFileTo("100000002015566d7_source", destFilePath);
            kony.print("fileObj: " + fileObj);
        } else {
            fileObj = file;
            alert("File is already available");
            return;
        }
    } catch (e) {
        kony.print("Exception " + e);
    }
    if (fileObj === null) {
        kony.print("Copy failed");
    } else {
        kony.print("Copy Success");
    }
    //dbObject = kony.db.openDatabase("test.db", "1.0", "Prebundled SQL Database", 5 * 1024 * 1024);
}