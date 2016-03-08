/* Sync */

var ops = (function(){
	function addSync(x,y){
		console.log('[Service Provider] - add triggered for ', x , ' and ', y);
		var result = x + y;
		console.log('[Service Provider] - returning result');
		return result;
	}

	function addSyncClient(x,y){
		console.log('[Service Consumer] - triggering addSync for ', x , ' and ', y);
		var result = addSync(x,y);
		console.log('[Service Consumer] - result = ', result);
	}

	function addAsync(x,y, onResult){
		console.log('[Service Provider] - add triggered for ', x , ' and ', y);
		setTimeout(function(){
			var result = x + y;
			console.log('[Service Provider] - returning result');
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncClient(x,y){
		console.log('[Service Consumer] - triggering addAsync for ', x , ' and ', y);
		addAsync(x,y, function(result){
			console.log('[Service Consumer] - result = ', result);	
		});
	}

	var addAsyncEvents = (function(){
		var _callbacks = [];
		function subscribe(callbackFn){
			_callbacks.push(callbackFn);
		}
		function add(x,y){
			console.log('[Service Provider] - add triggered for ', x , ' and ', y);
			setTimeout(function(){
				var result = x + y;
				console.log('[Service Provider] - returning result');
				_callbacks.forEach(function(callbackFn){
					if (typeof callbackFn === 'function')
						callbackFn(result);
				});
			},3000);
		}
		return {
			add : add,
			subscribe : subscribe
		};

	})();

	function addAsyncPromise(x,y){
		console.log('[Service Provider] - add triggered for ', x , ' and ', y);

		var promise = new Promise(function(resolveFn, rejectFn){

			setTimeout(function(){
				var result = x + y;
				console.log('[Service Provider] - returning result');
				resolveFn(result);
			},3000);
		});
		return promise;
	}

	function addAsyncDeferredPromise(x,y){
		console.log('[Service Provider] - add triggered for ', x , ' and ', y);

		var deferred = Promise.defer();

		setTimeout(function(){
			var result = x + y;
			console.log('[Service Provider] - returning result');
			deferred.resolve(result);
		},3000);

		return deferred.promise;
	}


	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise,
		addAsyncDeferredPromise : addAsyncDeferredPromise
	}	
})()
