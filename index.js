'use strict';

const babel = require("@babel/core");

module.exports = function(content, file, conf) {
	// console.log(file);
	const opt = {
		filename: file.realpath
	};
	fis.util.merge(opt, conf.options);

	if (fis.util.filter(file.subpath, conf.include, conf.exclude)) {
		const s = babel.transform(content, opt);
		// console.log(s.code);
		return s.code;
	} else {
		return content;
	}
};
