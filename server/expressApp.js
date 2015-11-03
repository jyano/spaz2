module.exports=function(dirN){
	
	$e = require('express'); $a = $e(); $a.u = $a.use;
	
	$a.g = $a.get;
	$a.po = $a.post
	$a.s = function(ob,v){var $a=this
		if(O(ob)){_.e(ob,function(v,k){ $a.set(k,v) })}
		else {$a.set(ob,v)}
		return $a
	}
	
	$a.s({
		port: process.env.PORT||4000,
		'view engine':'jade',
		views: dirN+'/views/'
	})
	
	
}