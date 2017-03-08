var child_process = require("sdk/system/child_process");
var regex = /^image-path      : .*/gm;

var hdiutil = child_process.exec('/usr/bin/hdiutil info', function (error, stdout, stderr) {
	var path = regex.exec(stdout);
	path = path[0].substr(18, path[0].length);
	var xattr = child_process.exec('/usr/bin/xattr -p com.apple.metadata:kMDItemWhereFroms \"' + path + '\"  | xxd -r -p | plutil -convert json -o - -', function (error, stdout, stderr) {
		var urlSources = JSON.parse(stdout);
		console.log("URL Sources for your most recently mounted DMG: ");
		for (url in urlSources)
		{
			console.log(urlSources[url]);
		}
	});

});