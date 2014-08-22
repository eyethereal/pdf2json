
var async = require("async");

function ImageLayer(page) {
    this.page = page;
    this.images = [];
}

module.exports = ImageLayer;

IL = ImageLayer.prototype;


IL.beginLayout = function ImageLayer_beginLayout() {
    // console.log("IL begin layout");
    // console.dir(arguments);
}

IL.endLayout = function ImageLayer_endLayout() {
    // console.log("IL end layout");
    // console.dir(arguments);
}

IL.appendImage = function ImageLayer_appendImage(image) {
    // console.log("IL append image");

    try {
        var mine = {
            x: image.left
            , y: image.top
            , width: image.width
            , height: image.height        
        }    

        // var wasEmbeded = false;
        // if (image.imgData && image.imgData.data) {
            // var b = new Buffer(image.imgData.data, "ascii");
            // console.log(b.length);
            // mine.buffer = b;
            // b=null;
            // wasEmbeded = true;
        // } else {

        if (image.objId) {
            mine.objId = image.objId;

            var data = this.page.objs.getData(mine.objId);

            if (data && data.getBuffer) {
                mine.buffer = data.getBuffer();
                this.images.push(mine);
            }
        }
    } catch (e) {
        console.log(e);
    }
}

// IL.expandObjects = function ImageLayer_expandObjects(ultimate) {
//     return;
//     var objs = this.page.objs;

//     async.each(this.images, function(image, cb) {
//         if (!image.objId) return cb();

//         debugger
//         objs.get(image.objId, function(err, data) {
//             debugger
//             image.data = data;
//             cb();
//         });
//     }, ultimate);
// }