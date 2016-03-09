var utils = angular.module('utils', []);
utils.value('defaultTrimLength', 20);

utils.filter('trimText', function(defaultTrimLength){ 
	/*factory function returning the filter function*/
	return function(text, trimLength){
		trimLength = trimLength || defaultTrimLength;
		return text.length > trimLength ? text.substr(0,trimLength) + '...' : text;
	};
});
utils.value('momentApi', moment);
utils.filter('elapsed', function(momentApi){
	return function(dt){
		return momentApi(dt).fromNow();
	};
});
