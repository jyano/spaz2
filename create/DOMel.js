
cjs.element = function(a){return new cjs.DOMElement(a)};
ELEMENTS=function(){z();

    div = $.div('red', 400, 400).P('a').A().A( $.ip() );
    s = stage = cjs.stage('yellow', 1000).tick().A();
    elem  = new cjs.DOMElement( div[0] );

    //stage.A(el)



    // tw(el, [{x:300,y:300},2000])

    // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])

}

cjs.DOMElement = function () {
    return cjs.DOMElement
}
$El = cjs.el = function (a) {
	a = $(a)[0]
	return new cjs.DOMElement(a)
}
ELM = function () {
	z()
	d = $.d('r', 400, 400).A($.ip()).drag()
	el = $El(d)
	s = $St('y').t()
	s.A(el)
	// tw(el, [{x:300,y:300},2000])
	// tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
}