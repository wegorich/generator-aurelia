module.exports = function (path, ext, basePath) {
    var arr = path.split('/');
    var name = path;

    if (arr.length > 0) {
        name = arr[arr.length - 1];
        arr.splice(arr.length - 1);
        return 'src/' + arr.join('/') + '/' + name + ext;
    }
    else {
        return basePath + name + ext;
    }
};