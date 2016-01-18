module.exports = {
    path: (path, ext, basePath)  => {
        var arr = path.split('/');
        var name = path;

        if (arr.length > 1) {
            name = arr[arr.length - 1];
            arr.splice(arr.length - 1);
            return basePath + arr.join('/') + '/' + name + ext;
        }
        else {
            return basePath + name + ext;
        }
    },
    toCamelCase: (str)=> {
        var result =str.split('-').map((i)=> {
            return i.charAt(0).toUpperCase() + i.slice(1);
        }).join('');

        console.log(result);
        return result;
    }
};
