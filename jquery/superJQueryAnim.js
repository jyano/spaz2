$load([
	
    'statt'
])
 
$.fn.st=$.fn.stop
$.fn.fT=$.fn.f2=$.fn.fadeTo
$.fn.an=function(a,b,c,d){
var g=G(arguments),q=this
	//if (N(g.s)) {g.s *= 1000}
	this.animate(
	$.qs(g.f),g.s,g.t,g[3],g[4])
	return this
}
$.fn.qu=$.fn.queue	
$.fn.dq=$.fn.dqu=$.fn.dequeue	
$.fn.cQ=$.fn.xq=$.fn.xQ=$.fn.clrQ=$.fn.clearQueue
ANob = {
    B: 'bottom', L: 'left', R: 'right', T: 'top',
    b: 'borderWidth', bb: 'borderBottomWidth',
    bl: 'borderLeftWidth', br: 'borderRightWidth',
    bt: 'borderTopWidth', bs: 'borderSpacing',
    C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
    mh: 'minHeight', mw: 'minWidth',
    i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
    m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
    mt: 'marginTop', o: ' outlineWidth',
    p: ' padding', pb: 'paddingBottom',
    pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
    ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
}
ANob = {
    B: 'bottom', L: 'left', R: 'right', T: 'top',
    b: 'borderWidth', bb: 'borderBottomWidth',
    bl: 'borderLeftWidth', br: 'borderRightWidth',
    bt: 'borderTopWidth', bs: 'borderSpacing',
    C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
    mh: 'minHeight', mw: 'minWidth',
    i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
    m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
    mt: 'marginTop', o: ' outlineWidth',
    p: ' padding', pb: 'paddingBottom',
    pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
    ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
}
$.fn.st = $.fn.stop
$.fn.f2 = $.fn.fadeTo
$.fn.bgImg = $.backgroundImage
$.fn.gFr = $.fn.getFrame
$.fn.sFr = $.fn.setFrame
$.fn.anFr = $.fn.animateFrames
$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
$.fn.qu = $.fn.queue
$.fn.dq = $.fn.dqu = $.fn.dequeue
$.fn.an = $.fn.a = function (a, b, c, d) {
    var g = G(arguments), o
    o = g.f
    var q = this
    if (O(a)) {
        if (a.c) {
            a.color = oO('c', a.c)
        }
        if (a.C) {
            a.backgroundColor = oO('c', a.C)
        }
    }
    q.animate(a, b, c, d)
    return q
    if (o.C) {//$l(o.C+'-->');
        o.C = oO('c', o.C);
        //$l(o.C)
    }
    _.e(o, function (v, k) {
        if (ANob[k]) {
            o[ANob[k]] = v
        }
    })
    if (N(g.s)) {
        g.s *= 1000
    }
    _p = o
    this.an(o, g.s, g.t, g[3], g[4])
    return this
    $.an = $.j = function () {
        var bd = $.bd();
        return bd.j.apply(bd, G(arguments))
    }
}
$.aF = $.anFr = $.anf = function (n, w) {
    var c = 0;
    n = n || 10;
    w = w || 20;
    $.ev(function () {
        q.sFr(c, w)
        c = (c + 1) % n
    })
}
$.notAn = function (a) { // sel
    return a.filter(':not(:animated)')
}
$.fn.an = $.fn.a = function (a, b, c, d) {
    var g = G(arguments), o
    o = g.f
    var q = this
    if (O(a)) {
        if (a.c) {
            a.color = oO('c', a.c)
        }
        if (a.C) {
            a.backgroundColor = oO('c', a.C)
        }
    }
    q.animate(a, b, c, d)
    return q
    if (o.C) {//$l(o.C+'-->');
        o.C = oO('c', o.C);
        //$l(o.C)
    }
    _.e(o, function (v, k) {
        if (ANob[k]) {
            o[ANob[k]] = v
        }
    })
    if (N(g.s)) {
        g.s *= 1000
    }
    _p = o
    this.an(o, g.s, g.t, g[3], g[4])
    return this
    $.an = $.j = function () {
        var bd = $.bd();
        return bd.j.apply(bd, G(arguments))
    }
}
an = function (q, a) {
    alert('an')
    if (q.han) {
        _.xI(q.han)
    }
    if (a.u) {
        q.bi(a.u)
    }
    if (a.n > 1) {
        q.han = _.sI(function () {
            a.c++
            if (!a.l && a.c > a.n) {
                _.xI(q.han);
                q.han = false
            }
            else {
                a.c %= a.n
            }
            q.sFr(a)
        }, a.r)
    }
}
$.aF = $.anFr = $.anf = function (n, w) {
    var c = 0;
    n = n || 10;
    w = w || 20;
    $.ev(function () {
        q.sFr(c, w)
        c = (c + 1) % n
    })
}
$.notAn = function (a) { // sel
    return a.filter(':not(:animated)')
}
$.fn.bgImg = $.backgroundImage
$.fn.gFr = $.fn.getFrame
$.fn.sFr = $.fn.setFrame
$.fn.anFr = $.fn.animateFrames
$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
$.fn.qu = $.fn.queue
$.fn.dq = $.fn.dqu = $.fn.dequeue
$.fn.bdC = function (a) {
    return this.css("border-color", oO('c', a || 'r'))
}
$.fn.pdB = function (a) {
    return this.css("padding-bottom", a || 0)
}
$.fn.mgT = function (a) {
    return this.css("margin-top", a || 0)
}
$.fn.pad = function (a) {
    return this.css("padding", a || 0)
}
function statt(){
    $.an = function () {
        var bd = $.bd();
        return bd.j.apply(
            bd, G(arguments))
    }
    $.notAn = function (a) {
        return a.filter(':not(:animated)')
    }
}
$.fn.toR = $.fn.moveRight = function (num) {
	alert('toL')
	num = num || 20
	if (this.left() == 'auto') {
		this.left(0)
	}
	this.left(parseInt(this.left()) + num)
	return this
}
$.fn.toL = $.fn.moveLeft = function (num) {
	alert('toL')
	num = num || 20
	if (this.left() == 'auto') {
		this.left(0)
	}
	this.left(parseInt(this.left()) - num)
	return this
}
$.fn.toU = $.fn.moveDown = function (num) {
	alert('toL')
	num = num || 20
	if (this.top() == 'auto') {
		this.top(0)
	}
	this.top(this.top() - num)
	return this
}
$.fn.toD = $.fn.moveDown = function (num) {
	alert('toL')
	num = num || 20
	if (this.top() == 'auto') {
		this.top(0)
	}
	this.top(this.top() + num)
	return this
}
$.joystick = function () {
	alert('joystick')
	$('#left').on('mousedown mouseover touchenter', function (e) {
		$.K.left = true;
		e.preventDefault()
	})
	$('#left').on('mouseup mouseout touchleave', function () {
		$.K.left = false
	})
	$('#jump').on('mousedown mouseover touchenter', function () {
		$.K.up = true
	})
	$('#jump').on('mouseup mouseout touchleave', function () {
		$.K.up = false
	})
	$('#right').on('mousedown mouseover touchenter', function () {
		$.K.right = true
	})
	$('#right').on('mouseup mouseout touchleave', function () {
		$.K.right = false
	})
}
old=function(){
    QUU = function () {
        $.x('x', 'quu')
        //  Qu   allow series fns to be execd asynch on an el
        //  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
        //
        // which levgs qus to build up   series of steps
        // that will transtn  1+ CSS vals thru/out the dur
        //  can pass a cb fn to  .an()  to exec on done


        $.d('r', 344, 500).A($.i('me')).K('x')


        x = $('.x')

        x.an(
            {height: 20}, "slow",
            function () {
                $("#title").html("in cb")
            }
        )
        //   *Ques As Cbs
        // Instead of passing a cb as an argument,
        // we can add another function to the queue
        // that will act as our cb
        // This will execute
        // after all of the steps in the
        // anim  have completed.
        x.an(
            {height: 20},
            "slow"
        ).qu(
            function () {
                $("#title").h("in anim")
                $(this).dq()
            }
        )
            //  tells jQ  to continto N-item in  que
            //    queued fn will exec   after the anim
            //  jQuery does not have any insight into
            // how the queue items function,
            // so we need to call .dequeue(),
            // which tells jQuery when to move to the n item in the queue.
            //  Another way of dequeuing
            // is by calling the fn that is passed to your cb
            // That fn will auto  call .dq() for you
            .qu(
            function (n) {
                $l("I fired!");
                n()
            }
        )
        //  *Custom Queues
        // Up to this point all of our anim
        // and qu   ex  have been using the def qu  n  which is fx.
        // Elements can have multiple queues
        // attached to them,
        // and we can give each of these qusa dif  name.
        // We can specify a custom queue name as
        // the 1st arg  to the .qu() method.
        x.qu('an', function (n) {
                $l("Step 1");
                n()
            }
        ).qu(
            'an', function (n) {
                $l("Step 2");
                n()
            }
        ).dq('an');
        //  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
        //   Clearing The Que
        //  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
        x.qu(
            'an', function (n) {
                $l("nev log (qu clrd)");
                n()
            }
        )
            .clrQ('an').dq('an')
        //   In this example, nothing will happen as we removed everything from the steps queue.
        //   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
        //  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
        x.qu(
            'an',
            function (n) {
                $l("nev fire (qu replaced)");
                n()
            }
        )
            .qu(
            'an', [
                function (n) {
                    $l("fired!");
                    n()
                }
            ]
        ).dq('an')
        //
        // You can also call .queue() without passing it functions, which will return the queue of that element as an array.
        x.qu(
            'an', function (n) {
                $l("fired!");
                n()
            }
        )
        $l(x.qu('an'))
        //x.du('an')

    }


    $.fn.gFr = $.fn.getFrame
    $.fn.sFr = $.fn.setFrame
    $.anFr = $.aF = $.anf = function (n, w) {
        var c = 0;
        n = n || 10;
        w = w || 20;
        _.ev(
            function () {
                q.sFr(c, w);
                c = (c + 1) % n
            }
        )
    }
    //= $.fn.animateFrames
    q = $.fn
    anf = q.anFr = function (n, w) {
        var c = 0;
        n = n || 10;
        w = w || 20
        _.ev(
            function () {
                q.sFr(c, w);
                c = (c + 1) % n
            }
        )
    }
    q.bgI = function (url) {//set background image
        var toUrl = function (url) {
            return 'url("' + _.src(url) + '")'
        }
        q.bgI(toUrl(url))
        return q
    }
    q.stFr = function (n, w) {
        if (O(n)) {
            q.bp(n.n, n.w)
        }
        else {
            q.bp(n * w)
        }
        return q
    }
    anim = function (o) {
        o = o || {};
        return {
            u: o.u || 'chicks',
            n: o.n || 1,
            w: o.w || 64,
            r: o.r || 60,
            c: o.c || 0,
            l: o.l || false
        }
    }
    an = function (q, a) {
        if (q.han) {
            _.cI(q.han)
        }
        if (a.u) {
            q.bgI(a.u)
        }
        if (a.n > 1) {
            q.han = _.sI(
                function () {
                    a.c++;
                    if (!a.l && a.c > a.n) {
                        _.cI(q.han);
                        q.han = false
                    }
                    else {
                        a.c %= a.n
                    }
                    q.sFr(a)
                }, a.r
            )
        }
    }
    ANF = function () {
        $.x('s', 'jqanim')
        a = $.dA().bgI('chicks').anFr()
        q.bgI = function (x, y) {
            var g = G(arguments), x = g[0], y = g[1]
            x = N(x) ? x : 0
            y = N(y) ? y : 0
            q.css(
                {
                    bgP: x + 'px ' + y + 'px'
                }
            )
            return q
        }
    }
	animate$=function(q,a){
		if(q.han){
			_.xI(q.han)
		}
		if(a.u){
			q.bi(a.u)
		}
		if(a.n>1){
			q.han=_.sI(
				function(){
					a.c++
					if(!a.l&&a.c>a.n){
						_.xI(q.han);
						q.han=false
					}
					else{
						a.c%=a.n
					}
					q.sFr(a)
				},a.r
			)
		}
	}
	AnOb={
		B:'bottom',L:'left',R:'right',T:'top',
		b:'borderWidth',bb:'borderBottomWidth',
		bl:'borderLeftWidth',br:'borderRightWidth',
		bt:'borderTopWidth',bs:'borderSpacing',
		C:'backgroundColor',f:'fontSize',h:'height',w:'width',H:'maxHeight',W:'maxWidth',
		mh:'minHeight',mw:'minWidth',
		i:'textIndent',l:'letterSpacing',lh:' lineHeight',
		m:' margin',mb:'marginBottom',ml:'marginLeft',mr:'marginRight',
		mt:'marginTop',o:' outlineWidth',
		p:' padding',pb:'paddingBottom',
		pl:'paddingLeft',pr:'paddingRight',pt:'paddingTop',
		ws:' wordSpacing',x:'backgroundPositionX',y:'backgroundPositionY'
	}
}
 