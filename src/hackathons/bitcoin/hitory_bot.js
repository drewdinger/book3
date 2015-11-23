//
// TODO: implement the logic to decide whether or not to make a trade
//
function decideWhetherOrNotToTrade(tweet){ 
	keys = ['game', 'money', 'fun', 'good', 'actor', 'news', 'movies', 'tech', 'music', 'people', 'apple', 'google'] 
	pluskeys = ['game', 'news', 'movies', 'tech', 'music', 'people'] 
	negkeys = ['money', 'fun', 'good', 'actor', 'apple'] 
	var positive = (_.reduce(pluskeys, function(p, n) {
	 	return p || tweet.tweet.includes(n) 
	}, false)) 
	var negative = (_.reduce(negkeys, function(p, n) { 
		return p || tweet.tweet.includes(n) 
	}, false)) 
	if ((!positive) && (!negative)) {
	 	return false 
	} else if (bank.currency === 'USD') {
	 	return (positive)?false:true 
	} else { 
		return (positive)?true:false 
	} 

} 
