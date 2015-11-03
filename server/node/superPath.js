
$l("from setup:    $q('../node/pt')")

var  $p = require('path')
$p.j = $p.join
$p.x = $p.ex= $p.exists
pt=q('path')

pt.n=pt.normalize

pt.j=pt.join

pt.d=pt.dirname

pt.b=pt.basename

pt.e=pt.extname

pt.s=pt.sep

pt.d=pt.delimiter

pt.r=pt.resolve

pt.R=pt.relative

module.exports= $p




function pat(){
	$l("from setup:    $q('../node/pt')")
	var $p=require('path')
	$p.j=$p.join
	$p.x=$p.ex=$p.exists
	module.exports=$p
	pt=q('path')
	pt.n=pt.normalize
	pt.j=pt.join
	pt.d=pt.dirname
	pt.b=pt.basename
	pt.e=pt.extname
	pt.s=pt.sep
	pt.d=pt.delimiter
	pt.r=pt.resolve
	pt.R=pt.relative
	$p.j=$p.join
	$p.x=$p.ex=$p.exists
}