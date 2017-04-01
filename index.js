'use strict';

var babel = require("babel-core");

module.exports = function(content, file, conf) {
	// console.log(file);
	var opt = {
		filename: file.realpath
	};
	fis.util.merge(opt, conf.options);

	if (fis.util.filter(file.subpath, conf.include, conf.exclude)) {
		var s = babel.transform(content, opt);
		// console.log(s.code);
		return s.code;
	} else {
		return content;
	}
};
