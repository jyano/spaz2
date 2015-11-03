$load([
    
    'make','dSpP','hBrA','sem','table','lists', 'ipsum'
])
 
function dSpP(){

    $._d= $.d_ = function () {var g = G(arguments),
        d = $('<div>')
        if(g.A()){
            _.e(g.f, function(q){ d.A(q)  })
        }
        else if (g.f){d.A(g.f)}
        return d
    }
    $.d = $.div = function () {
        var g = G(arguments), d = $('<div>'), o
        o = g.A ? {a: g.f} : g.O ? g.f : S(g[1]) ?
        {c: g.f, k: g.s, w: g.t, h: g[3], x: g[4], y: g[5]} :
            g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
            {w: g.f, h: g.s, x: g.t, y: g[3]}
        if (o.c) {
            d.C(o.c)
        }
        if (N(o.w)) {
            d.W(o.w)
        }
        if (N(o.h)) {
            d.H(o.h)
        }
        if (N(o.x)) {
            d.ab(o.x, N(o.y, 0))
        }
        if (o.a) {
            _.e(g[0], function (g) {
                d.A(g)
            })
        }
        if (o.k) {
            d.K(o.k)
        }
        if (!g.n) {
            d.A()
        }
        if (g.p) {
            d.dg()
        }
        return _d = d
    }
    $.dI = function () {
        $l('$.dI')
        var g = G(arguments),
            d = $.d.apply($, g.r)
        
        d.id(g.f)
        return d
    }
    $.dK = function (k) {
        var g = G(arguments),
            
            d = $.d.apply($, _.r(arguments))
        
        return d.K(k)
    }
    $.dD = $.divD = function (c, w, h, x, y) {
        var d, g = G(arguments)
        w = N(w, 200)
        h = N(h, w)
        d = $.d(200, 200, '+')
        if (g.u) {
            return d.C('n')
        }
        if (g.S_) {
            d.C(c)
            if (N(w)) {
                d.W(w)
            }
            if (N(h)) {
                d.H(h)
            }
            if (N(x)) {
                d.X(x)
            }
            if (N(y)) {
                d.Y(y)
            }
            return d
        }
        if (g.N_) {
            return $.dD('o', c, w, h, x)
        }
    }
    $.dA = function func(col, w, height, x, y) {
        var g = G(arguments),
            
            
            div = $.d().P('absolute')
        
        if (U(col)) {
            return div.C('brown')
        }
        
        if (S(col)) {
            div.C(col);
            if (N(w)) {
                div.W(w)
            }
            if (N(height)) {
                div.H(height)
            }
            if (N(x)) {
                div.X(x)
            }
            if (N(y)) {
                div.Y(y)
            }
            if (g.p) {
                div.dg()
            }
            return div
        }
        
        if (N(col)) {
            return $.dA('o', col, w, height, x)
        }
        
    }
    $.dA = $.divA = function (c, w, h, x, y) {
        var g = G(arguments),
            
            d = $.d().P('absolute'),
            
            o = g.O ? g.f :
                g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
                {w: g.f, h: g.s, x: g.t, y: g[3]}
        if (N(o.w)) {
            d.W(o.w)
        }
        if (N(o.h)) {
            d.H(o.h)
        }
        d.XY(N(x, 0), N(y, 0))
        
        if (o.c) {
            d.C(o.c)
        }
        
        return d
    }
    $.dD = $.divD = function func(col, w, h, x, y) {
        
        w = N(w) ? w : 200;
        h = N(h) ? h : w;
        
        var div = $.div(200, 200).drag();
        
        if (U(col)) {
            return div.C('brown')
        }
        
        if (S(col)) {
            div.C(col);
            
            if (N(w)) {
                div.W(w)
            }
            
            if (N(h)) {
                div.H(h)
            }
            
            
            if (N(x)) {
                div.X(x)
            }
            
            if (N(y)) {
                div.Y(y)
            }
            
            return div
        }
        
        if (N(col)) {
            return func('orange', col, w, h, x)
        }
    };
    $.dIl = $.inlineDiv = function (a, b, c) {
        var d = dv(a, b, c);
        d.display('inline');
        return d
    };
    $.ilBl = $.inlineBlockDiv = function (a, b, c) {
        var d = $.d(a, b, c);
        d.display('inline-block');
        return d
    };
    $.dva = function (r, w, h, l, t) {
        //color, w, h, left, top
        var g = G(arguments),
            r = g[0], w = g[1], h = g[2], l = g[3], t = g[4], d
        
        if (!S(r)) {
            
            return g.n ?
                
                $.dva($r(), r, w, h, l, '-') :
                
                g.p ? $.dva($r(), r, w, h, l, '+') :
                    
                    $.dva($r(), r, w, h, l)
        }
        
        
        d = $.d(r).p('a').C(r)
        
        if (g.p) {
            
            if (w) {
                d.l(w)
            }
            ;
            
            if (h) {
                d.t(h)
            }
            
            d.P(16)
            
            return d.auto()
        }
        
        w = w || 1;
        h = h || w;
        d.WH(w * 100, h * 100)
        
        l = l || 0;
        t = t || l;
        d.l(l * 100).t(t * 100)
        
        if (!g.n) {
            d.dg()
        }
        
        return d
    }
    $.sp = function () {
        var g = G(arguments),
            sp = $('<span>'), str = '';
        _.e(g, function (val) {
            if (S(val)) {
                str += val
            }
            else {
                sp.A(val)
            }
        });
        if (str) {
            sp.T(str)
        }
        sp.A()
        return sp
    }
    $.p = function () {
        var g = G(arguments), p = $('<p>')
        if (g.A_) {
            g.eF(function (g) {
                p.A(g)
            })
        }
        else {
            g.e(function (g) {
                p.A(g)
            })
        }
        p.A()
        return p
    }
    $.ps = function () {
        var sp = $.sp(), g = G(arguments)
        g.e(function (g) {
            sp.A($.p(g))
        })
        return sp
    }
}



function make() {
    $.tg=function(a){return $('<'+a+'>')}
    nest()
    function nest() {
        $.fn.el = function (e) {
            if (U(e)) {
                console.log($('<div>').append(this.clone()).html())
                return this
            }
        }
        $.fn.el = function (e) {
            if (U(e)) {
                console.log($('<div>').append(this.clone()).html())
                return this
            }
        }
        $.fn.h1 = function (text) {
            
            this.A($.h1(text))
            return this
        }
        $.fn.h2 = function (text) {
            
            this.A($.h2(text))
            return this
        }
        $.fn.h3 = function (text) {
            
            this.A($.h3(text))
            return this
        }
        $.fn.h4 = function (text) {
            
            this.A($.h4(text))
            return this
        }
        $.fn.h5 = function (text) {
            
            this.A($.h5(text))
            return this
        }
        $.fn.h6 = function (text) {
            
            this.A($.h6(text))
            return this
        }
        $.fn.H5 = function (a) {
            return $.h5(a).a2(this)
        }
        $.fn.h1 = function (t) {
            return this.A($.h1(t))
        }
        $.fn.h2 = function (text) {
            
            this.A($.h2(text))
            return this
        }
        $.fn.h3 = function (text) {
            
            this.A($.h3(text))
            return this
        }
        $.fn.h4 = function (text) {
            
            this.A($.h4(text))
            return this
        }
        $.fn.h5 = function (text) {
            
            this.A($.h5(text))
            return this
        }
        $.fn.h6 = function (text) {
            
            this.A($.h6(text))
            return this
        }
        $.fn.sb = function (fn) {
            return this.submit(fn)
        }
        $.fn.a2Lb = function (t) {
            t = t || 'label:';
            return this.a2($.lb(t))
        }
        $.fn.isLi = $.fn.iLi = function () {
            return _.isElement(this) && _h('HTMLLIElement', this)
        }
        $.fn.li = function () {
            var g = G(arguments),
                li = $.li()
            this.A(li)
            g.e(function (g) {
                li.A(g)
            })
        }
        $.fn.C$ = function () {alert('$.fn.C$');return this.C($r())}}
    $.frg = function () {
        return $(
            document.createDocumentFragment()
        )
    }
    $El=function(tag){
        if(tag){
            return document.createElement(tag)
        }
        
    }
}
function hBrA() {
    $.hr = function (c, h, w) {
        var hr = $('<hr>')
        
        //  if( N(c) ){  return $.hr('z', c, h )  }
        
        //  hr = $('<hr>').h(h ||2).C(c||'z');
        
        //  if(w ){ hr.W(w ) }
        
        return hr
    }
    $.h1 = function () {
        var h = $('<h1>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h2 = function () {
        var h = $('<h2>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h3 = function () {
        var h = $('<h3>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h4 = function () {
        var h = $('<h4>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h5 = function () {
        var h = $('<h5>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h6 = function () {
        var h = $('<h6>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.a = function (a, f) {
        var g = G(arguments), a = g[0], f = g[1], la = a || ''
        $.a2 = function (a, fn) {
            var g = G(arguments), a = g[0], f = g[1], el = $.a().id(a).A(a);
            if (F(fn)) {
                el.o(fn)
            } else {
                el.hr(fn || '#')
            }
            if (g.n) {
                el.dd()
            }
            //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
            if (g.p) {
                el = li(el)
            }
            if (g.m) {
                el = li(el).K('active')
            }
            return el
        }
        l = $('<a>').A(a)//.id(a)
        if (F(f)) {
            l.$(f)
        } else {
            l.href(f || '#')
        }
        // if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
        //if(g.p){ l = $.li( l ) }
        //if(g.m){ l = $.li( l ).K('active') }
        return l.A()
    }
    $.br = function (a) {
        if (U(a)) {
            return $('<br>')
        }
        var sp = $.sp();
        _.t(a, function () {
            sp.A($('<br>'))
        });
        return sp
    }


}
function sem(){
    
    $.S=$.str=function(){
        var g=G(arguments), s= $('<strong>');
        _.e(g,function(g){s.A(g)});
        return s
    }
    $.pre=function(){
        return  $("<pre>").A()
    }
    $.b=function(a,k){
        var g=G(arguments),b= $('<b>')
        //if(g.p){a =  '&nbsp;'+a  }
        //  b.H(a)
        //  b.K(k)
        
        if(a){b= b.A(b)}
        
        
        if(!g.n){b.A()}
        return b
    }
    $.hdr= function(){//$.H=
        var g=G(arguments), hdr = $('<header>')
        //  return $.ip().ty('header').n(n).v(v)
        g.e(function(q){hdr.A(q)})
        hdr.A()
        return hdr}
    $.F=$.ftr= $.footer=function(){
        return $('<footer>')
    }

    $.B = function (a) {
        var q = $('<bold>')
        if (a) {
            q.A(a)
        }
        return q
    }

    $.nv=function(){return $('<nav>')}
    $.sc= $.sct= function(a){
        var sc = $('<section>')
        if(a){ sc.id(a) }
        return sc
    }
    $.ac= function(){//$.H=$.arg=
        var g=G(arguments), art = $('<article>')
        g.e(function(q){
            art.A(q)
        })
        art.A()
        return art
    }
    $.em=function(){var em= $('<em>'); return em}
    $.tp=function(id){return  $('<template>').id(id)}
    $.as = function () {
        var a = $('<aside>')
        
        G(arguments).e(function (q) {
            a.A(q)
        })
        a.A()
        return a
    }
}

function lists(){

    $.la=$.liA=  function(){var  g=G(arguments), o,
        a = $('<a>').hr('#'),
        li=$('<li>')
        // if(A(g.f)){     _.e(g.f, function(el){});   return li.A(a)     }
        o= g.F_? {fn: g.f}: g.S_? {id: g.f, fn: g.s}: {el: g.f, fn: g.s}
        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}
        li.A(a)
        return li
    }
    $.lL= $.lib= $.liLb=   function(){
        var  g=G(arguments), o,
            li=$('<li>'),
            lb=$.lb().a2(li)
        
        
        if(A(g.f)){
            _.e(g.f, function(el){
                lb.A(el)
            })
            return li
        }
        
        o= g.F_? {fn: g.f}:
            g.S_? {id: g.f, fn: g.s}:
            {el: g.f, fn: g.s}
        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}
        
        return li
    }
    $.li=function(){var g=G(arguments), li = $('<li>')
        if( A(g[0]) ){
            _.e(g[0],
                function(g){
                    li.A(g)
                })
        }
        
        if(g.S_){li.A(g.f)}
        if(g.p){li.K('active')}
        if(g.n){li.k('dropdown')}
        li.A()
        return li
    }
    $.ol=function(o,b){var g=G(arguments),
        ol=$('<ol>');
        _.e(g, function(v){ol.A(v)});
        return ol
    }
    $.ul=function(){
        var g=G(arguments),
            ul=$('<ul>')
        
        if(g.A_){
            _.e(g.f, function (el) {
                if (g.p) {if(el.iLi()){el = $.li([el])}}
                if(S(el)){el = $.li(el)}
                ul.A(el)
            })
            
        }//if(g.p){ul.dg()}//if(g.n){ul.K('ddm')} //dropdown menu
        
        if(g.p){alert('$.ul g.p')
            ul.K('n nbn')
        }//navbar nav
        // $l(ul.oh())
        
        _ul= ul.A()
        
        return ul
    }
    $.uK= $.ulK=function(k, a,b,c,d){
        var ul = $.ul(a,b,c,d).K(k)
        return ul
    }
    $.liK=function(k, a,b,c,d){
        var li = $.li(a,b,c,d)
        li.K(k)
        return li
    }
}
function table() {
    $.fs = function () {
        var g = G(arguments),
            q = $('<fieldset>')
        if (g.A) {
            _.e(g.f, function (e) {
                q.A(e)
            })
        }
        else {
            g.e(function (e) {
                q.A(e)
            })
        }
        return q
    }
    $.t = function (a) {
        var g = G(arguments)
        var t = $('<table>')
        if (A(a)) {
            _.e(a, function (el) {
                t.A(el)
            })
        }
        if (!g.n) {
            t.A()
        }
        return t
    }
    $.tHR = function (ch) {
        var el = $.tr().a2($.tH())
        if (A(ch)) {
            _.e(ch, function (ch) {
                if (S(ch)) {
                    ch = $.th(ch)
                }
                el.A(ch)
            })
        }
        return el
    }
    $.tH = function (a) {
        
        var tH = $('<thead>')
        
        if (A(a)) {
            _.e(a, function (el) {
                tH.A(el)
            })
        }
        
        else if (O(a)) {
            tH.A(a)
        }
        
        
        return tH
        
    }
    $.th = function (a) {
        var th = $('<th>')
        
        if (A(a)) {
            _.e(a, function (el) {
                th.A(el)
            })
        }
        
        else if (S(a)) {
            th.A(a)
        }
        
        return th
    }
    $.tB = $.tb = function () {
        return $('<tbody>')
    }
    $.tr = function (a) {
        var g = G(arguments)
        var tr = $('<tr>')
        if (A(a)) {
            _.e(a, function (el) {
                if (S(el)) {
                    el = g.p ? $.th(el) : $.td(el)
                }
                tr.A(el)
            })
        }
        else if (a) {
            tr.A(a)
        }
        return tr
    }
    $.td = function (a) {
        var g = G(arguments)
        var td = $('<td>')
        if (A(a)) {
            _.e(a, function (el) {
                td.A(el)
            })
        }
        else if (a) {
            td.A(a)
        }
        return td
    }
    $.cl = function () {
        var cl = $('<col>');
        return cl
    }
    $.cg = function () {
        var cg = $('<colgroup>');
        return cg
    }
    $.tH = function () {
        var g = G(arguments), q = $('<thead>')
        if (g.A_) {
            _.e(g.f, function (e) {
                q.A(e)
            })
        }
        return q
    }
    $.tB = function () {
        var g = G(arguments), q = $('<tbody>')
        if (g.A_) {
            _.e(g.f, function (e) {
                q.A(e)
            })
        }
        return q
    }
    $.lg = function () {
        var g = G(arguments),
            q = $('<legend>')
        if (g.A) {
            _.e(g.f, function (e) {
                q.A(e)
            })
        }
        else {
            g.e(function (e) {
                q.A(e)
            })
        }
        return q
    }
}

function ipsum() {
    l1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' +
    ' nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.     ' +
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ' +
    'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam ' +
    'erat volutpat.'
    
    l2 =
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' +
        ' nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.' +
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ' +
        'nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.' +
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ' +
        'sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
        ' erat volutpat.'
}
 
function alpha(){

    nameConflict=$.fn.tt=function(t,c){
        var p=$.p(t).mH(10).pH(30)
            .fS(24).K('text-center')
        this.A(p,
            $.hr().fS(10))
        return this
    }
}

 
 $l('loading cv..')

$.cv= $.c = $.c2 = function (c, width, h, x, y) {var g = G(arguments), o,q
	o = g.S_ ?
	{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
	{w: g.f, h: g.s, x: g.t, y: g[3]}
	
	o.w = o.w || 1200
	o.h = o.h || 600
	q = $('<canvas>')
	q.attr({width: o.w, height: o.h})
	//o.c = o.c || 'x'
	if(o.c){q.C(o.c)}
	if (N(o.x)) {q.abs(o.x, o.y)}
	if (g.p) { q.dg() }
	return q.id('canvas').k('canvas can').al(.8)
}


$.cv0=  function(){
	return $.c2.apply($, arguments)[0]
}


$.i = $.img= function () {var g = G(arguments), o, i = new Image(), $i = $(i);
	o = F(g.f) ? {fn: g.f} : O(g.f) ? g.f : {sr: g.f, fn: g.s};
	if (o.fn) {$i.load(_.b(function (e) {o.fn(e.target, e)}, $i))}
	if (o.sr) {$i.sr(o.sr)}
	return $i
}
