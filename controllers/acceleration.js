ACO = HOVER =SENCOUNT = SHOW = function () {
	W([1200, 1200, 1200, 1200], {g: 130})//.C('w')
	p = w.p(500, 100)
	sen = w.S(1200, 800, 'w', [[2400, 200, '-']]).K('sen').al(.2)
	aCo = w.aCo(150, -250)
	aCo.do(sen)    //<- sen.do(aCo) //  <- sen.cl(function(f){if(!f.by(aCo)){aCo.B(f)}}, function(f){if(f.by(aCo)){aCo.xB(f)}})
	
	w.show(function () {
		var num =  aCo.n()
		var str = 'num: '+ num
		$l(str)
		return str
	})
	
	y = w.y(400, 40).fR().rt(90).lD(2).tr()
	w.D(300, 100, 'r', 20);
	w.D(400, 100, 'r', 120, 120);
	w.D(500, 100, 'r', 45);
	w.D(600, 100, 'r', 80);
	w.D(700, 100, 'r', 200, 100)
 
}

 

 GUST=WINDY=function(){
	 W([1200, 1200, 1200, 1200], {g: 130})
	b= w.p(500, 100)
 	 added = 0
	co = w.aCo(11150, -1250)
	 _.ev(2, function () {if (R()) {tog()}})
	
	 function tog() {
		 if (added) {remove()} else {add()}
	 }
	
	 function add() {
		 w.C('g');
		 added = 1;
		 co.B(b)
	 }
	
	 function remove() {
		 w.C('r');
		 added = 0;
		 co.xB(b)
	 }

// Imagine that you have gusts of wind blowing sideways…
// you can add your objects to a Contoller and have them pushed sideways…
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!

}


STICKY = function () {
	W([1200, 600, 2400, 600], {g: 50})
	x = w.S(600, 300, 'w', 280, 370, '-').K('sen').al(.4)
	p = w.p(100, 100)
	yy = y = w.y().lD(4).aD(3).tr().d(5)
	co = w.bCo()
	//(0,-.5,5,2)//.os(-6).den(2)
	x.do(co)
	p.aD(3)
	/* w.tE(function(b){
	 if(!b.iD()){return}
	 b.co('-')
	 b.cx(function(f, cx){
	 p.xCo(co)
	 if(f.of('sen')){ co.B(this)}
	 })
	 })
	 */
}
 