const glob = require('glob');

module.exports = function (grunt) {
    grunt.registerMultiTask('px2rem', '', function () {
        var options = this.options({
            punctuation: '.',
            separator: ', ',
            root: 16
        });
        var file = this.files[0];
        file.src.forEach(function (filepath) {
            var content = grunt.file.read(filepath);
            content = content.replace(/[a-zA-Z]*-?[a-zA-Z]+\s*:\s*\d+px/ig, function (match) {
                if (match.indexOf('border') === -1) {
                    var unitmatch = match.replace("px", "rem");
                    return unitmatch.replace(/\d+/, function (m) {
                        return parseFloat(m) / options.root;
                    });
                }
                return match;
            });
            grunt.file.write(filepath, content);
        });
    });
}