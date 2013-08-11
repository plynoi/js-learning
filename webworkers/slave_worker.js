importScripts('underscore-min.js');

self.addEventListener('message',function(e){
	var data=e.data;
	self.postMessage(_.extend(data,{worker:'This is worker Say Hello'}));
},false);

