$.sty=function(h){
	var styleTag=$('<style>').at({type:'text/css'});
	styleTag.h(h)
	return styleTag
}
$rule=function(sel,decs,rulesOb){
	var str
	var SelOb={
		bd:'body',bt:'button',
		sc:'section',nv:'nav',d:'div',
		i:'img',ip:'input'
	}
	if(A(sel)){
		alert('$rule')
		sel='{'+sel[0]+':'+sel[1]+'; '+'}'
	}
	sel=sel.replace('_','.')
		.replace('$','#')
	_.e(
		SelOb,function(v,k){
			if(sel==k){
				sel=v
			}
		}
	)
	return sel+' '+$decBlk(decs,rulesOb)
}
$rules=function(rulesOb){
	var rulesStr='\n\n';
	_.e(
		rulesOb,function(decs,sel){
			rulesStr+=$rule(sel,decs,rulesOb)+'\n'
		}
	)
	rulesStr+='\n'
	return rulesStr
}
$S=$CSS=function(rulesOb){
	var rulesStr
	if(!rulesOb){
		return $l($('style').oh())
	}
	rulesStr=$rules(rulesOb)
	$('head').A($.sty(rulesStr))
	return rulesStr
}
$decBlk=function(decs,rulesOb){
	var decBlkStr=' ',DECS={}
	if(S(decs)){
		$l('$decBlk');
		return decs
	} //for @media ??
	if(decs.pl){
		plugin=function(decsOb,plOb){
			_.e(
				plOb,function(v,k){
					$S.pg[k].apply(decsOb,v)
				}
			)
			return decsOb
		}
		plugin(decs,decsOb.pl)
	}
	if(decs.mx){
		//_.e(decs.mx, function (v, k) {$S.mx[k].apply(decs, v)})
		mixin=function(decsOb,rulesOb){
			//tries to extend from one of its own first
			if(rulesOb&&rulesOb[decsOb.mx]){
				_.x(decsOb,rulesOb[decsOb.mx])
			}
			//then goes to global ($S.mx)
			else{
				_.x(decsOb,$S.mx[decsOb.mx])
			}
		}
		mixin(decs.mx,rulesOb)
	}
	_.e(
		decs,function(v,k){
			var fn
			if(k!=='mx'&&k!=='pl'){
				if(A(v)){
					$l('$decBlk - plugin!');
					$d(v)
					fn=$S.fn[_.f(v)]
					if(F(fn)){
						DECS[oO('s',k)]=fn.apply(null,_.r(v))
					}
					else{
						$l('$decBlk fn not a fn!!')
						if($CSS.df[k]){
							DECS[oO('s',k)]=$CSS.df[k][_.f(v)]
						}
					}
					return
				}
				DECS[oO('s',k)]=(N(v)&&(v>10))?
								String(v)+'px':
								oO(k,v,'R')
			}
		}
	)
	_.e(
		DECS,function(v,k){
			decBlkStr+=k+':'+v+'; '
		}
	)
	return '{ '+decBlkStr+'}'
}
//for meta (see Grail)
$subRules=function(rulesOb){// GRAIL CALLS THIS
	return '{'+$rules(rulesOb)+'}'
	// GRAIL CALLS THIS
}
//to extend
$S.fn={
	// (value-)helper functions:
	// lets you write/call functions that
	//produce a complicated value to a
	//particular property,
	// so you don't have to write out
	// the full location of the function
	// -helps with namespacing
}
$S.fn.B=$S.fn.bor=function(c){return '8px solid '+oO('c',c||'z')}
$S.mx={
	// this lets you associate a selector with a bunch
	// of declarations at once, and you can add more, too
}
$S.mx.icon={
	transition:'background-color ease .2s',
	margin:'0 .5em'
}
$S.pl={
	// these are functions that take pams
	// and ctx-bound to the dec obj
	// so its main use is to add decs directly on it
	// but one function can add multiple decs
	//(plugins)
}
$S.df={}
$S.df.B={}
$S.df.B.b='1px blue border'
 