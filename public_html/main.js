const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');

const year = document.getElementById("year");
year = document.write(new Date().getFullYear());
 
imagemin(['res/*.jpg'], 'build/images', {use: [imageminJpegtran()]}).then(() => {
    console.log('Images optimized');
});
 
(async () => {
    await imagemin(['res/*.png'], 'build/images', {
        use: [
            imageminOptipng()
        ]
    });
 
    console.log('Images optimized!');
})();