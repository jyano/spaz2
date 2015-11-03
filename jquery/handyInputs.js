$load(
'form', 'boxButs', 'sel','but', 'ipTaL'
)
function form(){
    $.f = $.form = function (c, act) {
        var g = G(arguments),
            o, f = $('<form>').K('form')
        o = g.A ? {ch: g.f} : {c: g.f, a: g.s}
        if (o.ch) {
            g.eF(function (el) {
                f.A(el)
            })
        }
        if (o.a) {
            f.attr({action: o.a})
        }
        if (o.c) {
            f.C(o.c)
        }
        f.attr({method: g.p ? 'get' : 'post'})
        if (!g.n) {
            f.A()
        }
        return f
    }
    $.f.gr = $.fG = $.fGD = function () {
        return $.dK('form-group').fS(20)
    }
    $.formGet = function (c, act) {
        var g = G(arguments), c = g[0], act = g[1],
            f = $.f().K('form').attr('method', 'get')
        if (c) {
            f.C(c)
        }
        if (act) {
            f.at({action: act})
        }
        return f
    }
    $.fI = $.formInline = function (a, b) {
        var f = $.form().C('b').K('form-inline form-group'),
            g = G(arguments);
        _.e(g, function (g) {
            f.A(g)
        });
        if (g.p) {
            f.A($.submit('ok'))
        }
        return f
    }
    $.f.i = $.fR = $.formRight = function (a, b) {
        var g = G(arguments),
            f = $.form().C('b').K('form navbar-form navbar-right');
        _.e(g, function (g) {
            f.A(g)
        });
        if (g.p) {
            f.A($.submit('ok'))
        }
        return f
    }
    $.f.f = $.fF = $.formFalse = function (a, b) {
        var g = G(arguments),
            f = $.form().C('b').K('form well').attr({method: false, action: false});
        _.e(g, function (g) {
            f.A(g)
        });
        if (g.p) {
            f.A($.submit('ok'))
        }
        return f
    }

    function submitBut() {


        $.sm = $.submit = $.submitButton = function (buttonText, func) {
            return $.button(buttonText, func).type('submit')
        }
        $.sb = function () {
            var g = G(arguments)

            var ip = $.ip()

            ip.at('type', 'submit')
            ip.A()
            return ip
        }
        $.sbb = function () {
            var g = G(arguments)

            var ip = $.ip()

            ip.at('type', 'submit')
            return ip
        }
        $.smBt = $.submitButton = function () {

            var args = G(arguments),

                button = $button.apply(0, args)

            return button.type('submit')

        }
        $.submit2 = sm = function (a) {
            var g = G(arguments)

            if (g.p) {

                return $button().type('submit').k('btn btn-mini button-default').T(ok(a))
            }

            return ip('submit').k('show').v(ok(a))

        }
        $.sm = function (v) {
            var el = $('<input>').ty('submit').fS(16)
            if (v) {
                el.v(v)
            }
            return el
        }
        $.sb = function (t, fn) {
            var g = G(arguments), bt = $.bt(t, fn).ty('submit')
            if (g.p) {
                bt.K('btn btn-mini button-default').T(a || 'ok')
            }
            //bt.A('submit').K('show')
            return bt
        }

    }
    submitBut()
}
function boxButs(){

    
    $.cb = function (n, v, lb) {
        $._cb = function () {
            return $.ip().ty('checkbox')
        }


        var g = G(arguments), checked, n = g[0], v = g[1], lb = g[2],
            cb, id
        if (g.u) {
            return $('<input type="checkbox">').A()
        }
        if (A(v)) {
            v = v[0];
            checked = true
        }
        id = n + '-' + v
        V = '&nbsp' + v + '&nbsp'
        cb = $.ip().ty('checkbox')
        cb.n(n)
        cb.v(v)
        cb.id(id)
        if (checked) {
            cb.at({checked: 'checked'})
        }
        cb = lb ? $.sp().A(cb, $.lb(l, id))
            : g.p ? $.sp().A($.br(), cb, $.lb(V, id)) :
            !g.n ? $.sp().A(cb, $.lb(V, id)) :
                cb
        return cb.A()

        /*
         $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
         if(A(v)){v=v[0];checked=true}
         var I=n+'-'+ v,
         V='&nbsp'+v+'&nbsp',
         cbox = $.input().type('checkbox').n(n).v(v).id(I)
         if(checked){cbox.attr({checked:'checked'})}
         return lb? $.span().A(cbox , $.lb(l,I))
         :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
         :g.N? $.span().A(cbox , $.lb(V,I) )
         :cbox }
         $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
         n = g.f||''; v = g.s||'';id = g.t||'';
         cb= $.ip().ty('checkbox')
         sp  = $.sp()
         if(g.A_){_.e(g, function(ar){
         sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
         $.lb(ar[1], ar[2]))});
         return sp.A($.br())}
         cb.n(n).v(v).id(id);
         if(g.p){cb.prop('checked', true)}
         if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
         return cb}
         */

    }
    $.cbG = function (n, v) {

        var g = G(arguments), n = g[0], v = g[1], sp = sp();
        if (g.p) {
            _.e(v, function (v) {
                sp.A($.cb(n, v, '+'))
            })
        }
        else {
            _.e(v, function (v) {
                sp.A(
                    $.cb(n, v))
            })
        }
        return s.id(n)
    }
    $.cbl = $.cbLb = function () {
        var g = G(arguments)
        return $.sp().A(
            $.cb(g.f, g.s, g.t, g[3]), $.lb(g.f, g.s))
    }

    $.rbOld = function () {
        var g = G(arguments),
            chkd, n = g[0] || 'n', v = g[1], lb = g[2];
        if (A(v)) {
            v = v[0];
            chkd = true
        }
        var I = n + '-' + v,
            V = '&nbsp' + v + '&nbsp',
            rbox = $.ip().ty('radio').n(n).v(v).id(I);
        if (chkd) {
            rbox.at({checked: 'checked'})
        }
        return l ?
            $.sp().A(rbox, $.lb(lb, I))
            : g.p ?
            $.sp().A($.br(), rbox, $.lb(V, I))
            : g.N ?
            $.sp().A(rbox, $.lb(V, I))
            : rbox
    }

    $.rb = function (name, id) {
    
        var g = G(arguments)
        id = id || name
        var q = $('<input>').at('type', 'radio')
        q.n(name)
        q.id(id)
        if (g.p) {
        
            q.at('checked', true)
        }
        return q
    
    }

    $.rbG = function (n, v) {
        var g = G(arguments), n = g[0], v = g[1], sp = $.sp()
        if (g.p) {
            _.e(v, function (v) {
                sp.A($.rb(n, v, '+'))
            })
        }
        else {
            _.e(v, function (v) {
                    sp.A($.rb(n, v))
                }
            )
        }
        return sp.id(n)
    }
    
    
    
}


$.rg = function (n, m, M) {
    m = N(m) ? m : 0;
    M = N(M) ? M : 100;
    n = n || 'r';
    var r = $('<input type="range">');
    r.attr({name: n, min: m, max: M});
    return r
}

function sel(){
    $.sl = function () {
        var g = G(arguments), sl = $('<select>').A()

        if (g.A_) {

            g.eF(function (o) {
                if (N(o)) {
                    o = '' + o
                }
                if (S(o)) {
                    o = $.o(o)
                }
                sl.A(o)
            })

        }


        if (g.p) {
            sl.multiselect()
        }
        /*
         //if(!A(g.f)){g.unshift( ['select'] )}
         if(A(g.f)){
         sl= $.sel.apply($, g.f);
         _.e(g.r,function(v){
         if(S(v)){v = $.op(v)}
         sl(v)})}
         else {sl= $.sel();
         _.e(g,function(v){if (S(v)) {v = $.o(v)}
         sl(v)})  }
         */
        sl.V = function (v) {
            if (U(v)) {
                return sl.q.v()
            }
            sl.v(v);
            return sl
        }

        sl.o = function (f) {
            f = f || alert
            sl.change(function () {
                f(sl.V())
            })
            return sl
        }


        if (g.O) {
            g.eF(function (v, k) {

                sl.A($.o(k, v))

            })
        }


        return sl
        //$.sl(['volvo', $.op('merc'), 'saab' ])
        //$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
        //$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
    }
    $.SEL = function (n, i) {
        var g = G(arguments), sl

        sl = $('<select>')
        sl.n(n).id(i)
        if (!g.n) {
            sl.K('form-control')
        }
        if (g.p) {
            sl.at({mutiple: true})
        }
        return sl
    }
    $sel = function () {
        var g = G(arguments)
        var sl = $.sl().id(g.f)
        _.e(g.r, function (g) {
            var o = $.op(g).v(g)
            sl.A(o)
        })
        sl.A()
        return sl
    }
    $.o = $.op = function (n, v) {
        var g = G(arguments),
            o = $('<option>')

        o.A(g.f);
        o.v(g.s || g.f)


        // n = n||'option';  v=v||n; o.T(n).v(v)
        // o.V( g[0] )

        if (g.p) {
            o.at({selected: true})
        }

        o.A()
        return o

    }
    $.og = $.opGr = function (lb) {
        var g = G(arguments), o, og
        o = g.S_ ? {lb: g.f, ch: g.s} : {ch: g.f}
        og = $('<optgroup>')
        if (o.lb) {
            og.at('label', o.lb)
        }
        if (o.ch) {
            if (A(o.ch)) {
                _.e(o.ch, function (q) {
                    //if(N(q)){q =''+ q }
                    if (S(q)) {
                        q = $.o(q)
                    }
                    og.A(q)
                })
            }
            else {
                og.A(o.ch)
            }
        }
        og.A()
        return og
    }

}
function but(){

    $.bt = $.button = function () {
        var g = G(arguments), o, bt = $('<button>');
        o = g.F ? {fn: g[0]} : {t: g[0], fn: g[1]};
        o.t = o.t || 'submit';
        if (!g.n) {
            bt.A()
        }
        return bt.T(o.t).$(o.fn)
    }
    $.BT = $.btL = function (t, fn) {
        if (F(t)) {
            return $.bt('submit', t)
        }
        var b = $('<button>');
        b.text(t);
        b.$(fn)
        return b.K('btn-lg')

        /*
         $.btL=  function(t,f,C,c){
         var g=G(arguments),
         t=g[0],f=g[1],C=g[2],c=g[3],
         t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
         b = $.bt().K('btn-lg').c(C, c);
         b(t);if(f){ b.o( f ) }
         if( g.n ){ b.dd() }//dropdown
         return b
         }
         */

    }
    $._bt = $.btM = function (t, fn) {
        return $.bt(t, fn).C('b').K("btn btn-mini")
    }
    $.bts = function (a, b) {
        var g = G(arguments), d = $.dA(200);
        if (g.p) {
            return $.bts(['start', a], ['stop', b]).auto()
        }
        g.e(function (v) {
            v = A(v) ? v : [v];
            d.A($.bt(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
        })
        return d
    }//floating div of buttons
    $.btR = function (t, fn) {
        var b = $.bt(t, fn).float('right')//.display('block')
        return b
    }
    $.$bt = $.btLf = function (t, fn) {
        var b = $.bt(t, fn).float('left')//.display('block')
        return b
    }
    $.bX = $.btX = function (t, fn) {
        var g = G(arguments), bt, o;
        o = {
            url: g.f,
            data: g.s
        }

        t = t || g.p ? 'submit' : 'X'
        fn = fn || function () {
            var bt = this;
            $.aj({
                url: o.url, data: o.data, type: 'DELETE',
                success: function () {
                    $(bt).pa().rm();
                    if (g.n) {
                        $.rl()
                    }
                }
            })
        }

        bt = $.bt(t, fn)

        return bt
    }
    $.btR = function (text, func) {
        var b = $.button(text, func).float('right')//.display('block')
        return b
    }
    $.btL = function (text, func) {
        var b = $.button(text, func).float('left')//.display('block')
        return b
    }
    $.bts = function (a, b) {
        var g = G(arguments), d = dva(2)
        if (g.p) {
            return bts(['start', a], ['stop', b]).auto()
        }
        _.e(g, function (v) {
            v = A(v) ? v : [v]
            d($button(v[0], v[1]).k(g.p ? ('fc') : '').M(4))
        })
        return d
    }//floating div of buttons //beta
 
}
$.fU = $.fileUpload = function (lb, t) {
    var fG = $.d().K("form-group").A(
        $.lb(D(lb) ? lb : 'upload file', 'upl').K('control-label').fS(20),
        $.ip().ty('file').id('upl').name('i')
    )
    if (t) {
        fG.A($.p(t).K('help-block'))
    }
    return fG
}
function ipTaL(){
$.ip = function (n) {
    var g = G(arguments), o, ip
    ip = $('<input>').at('type', 'text')
    return ip
    if (n) {
        ip.n(n);
        ip.id(n)
    }
    o = g.O ? g.f :
        g.N_ ? {w: g.f, id: g.s} :
        {ph: g.f, id: g.s, v: g.t || g.s, n: g.t || g.s}
    ip.ph(o.ph)
    if (o.w) {
        ip.W(o.w)
    }
    if (o.id) {
        ip.id(o.id)
    }
    if (o.v) {
        ip.v(o.v)
    }
    if (o.n) {
        ip.n(o.n)
    }
    ip.C(o.C || 'r').col(o.c || 'b')
    if (!g.n) {
        ip.K('form-control')
        ip.A()
    }
    return ip
}
$.ipBt = function (btT, f) {
    return $.d().A($.ip(),
        $.bt(btT, function () {
            f.A(ip.V())
        })).A()
}
$.pw = function (n) {
    var el = $('<input>').ty('password')
    if (n) {
        el.n(n)
    }
    return el
}
    $.ta = $.textarea = function (rows, cols, Cl, cl) {

    var g = G(arguments),
        ta = $('<textarea>')

    Cl = Cl || 'pink'
    cl = cl || 'black'

    if (g.N) {
        ta.K('form-control')
    }

    if (N(rows)) {
        ta.attr({rows: rows})
    }
    if (N(cols)) {
        ta.attr({cols: cols})
    }

    return ta.C(Cl, cl)
}
$.ta = function (rows, cols, Cl, cl) {
    var g = G(arguments),
        ta = $('<textarea>');
    Cl = Cl || 'p';
    cl = cl || 'z';
    if (g.N) {
        ta.K('form-control')
    }
    if (N(rows)) {
        ta.at({rows: rows})
    }
    if (N(cols)) {
        ta.at({cols: cols})
    }
    return ta.C(Cl, cl)
}
    $.l = function (t, fr, n, ph) {
    alert('$.l')
    var g = G(arguments), lb = $('<label>'),

        ip, sp
    if (!g.f) {
        return lb
    }
    lb.for(fr).K('control-label').h(t)
    if (!g[2]) {
        return lb
    }
    ip = $.ip().id(fr).n(n).ph(ph || '...')
    if (!g.n) {
        ip.K('form-control')
    }
    sp = $.sp().A(lb, ip)
    if (!g.n) {

        sp.A()
    }
    return sp
}
$.lb = function () {
    var g = G(arguments), o, lb = $('<label>')
    o = g.A_ ? {ch: g.f} : {t: g.f, fr: g.s}
    if (o.ch) {
        _.e(o.ch, function (ch) {
            lb.A(ch)
        })
        return lb
    }
    lb.ht(o.t).for(o.fr)
    //fr=fr||t
    //lb.K('control-label')
    if (!g.n) {
        lb.A()
    }
    return lb


}
}