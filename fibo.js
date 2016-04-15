1 2 3 5 8 13 21 34
1 2 3 4 5  6  7  8

6..fibo // 13

function fibo(n){
	if (n < 2) return 1
		else 
			var result = fibo(n-1) + fibo (n-2) 
		return result
}

function fibo(n){
	return n < 2
    ? 1
    :fibo(n-1) + fibo(n-2)
}


Object.defineProperty(Number.prototype, "fibo",
{
	get: function()
	{
		var fibo = function(n)
		{	
		return n < 2 
		? 1 
		:fibo(n-1) + fibo(n-2)
    	}
	},
	enumerable:false,
	configutable:true
})