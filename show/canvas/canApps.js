__C = function () {
    z();
    c = $.c('y').drag()
    x = c.ctx()
    return c
}


CROP = function () {
    __C()
    c = $.c('X', 1200, 600, 100, 100, '+')
    c.fit()
    c.draw('me')
    c.ln(tictactoe)
    _.in(2, function () {
        c.crop(100, 100, 900, 500)
    })
}
FULLCAN1 = function () {
 
    $('html').css({
        height: '100%'//, of:'h'
    })
    $('body').css({
        margin: 0,
        //g:0,
        height: '100%'
    })
    
    var s = 'Click or tap the screen to start the game',
        fo = 'bold 16px Arial',
        x = $.c('p', 
        $('body').W(),
         $('body').H()
         ).A()
   
    //
    // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
    
    $.i('me', function (image) {
        image = $(image.target)
        var origW = image.W()
        image.W(Math.round((50 * $('body').W()) / 100))
        image.H(Math.round((image.W() * image.H() ) / origW))
        x.draw(
            image,
            x.W() / 2 - image.W() / 2,
            x.H() / 2 - image.H() / 2
        )
    })
}
FLOATCV = function () {
    __C()
    x.b('r', 'b', 50)
    x.mt(100, 100, 300, 300, '*')
    x.b('b', 'r', 50).a(100, 75, 50, '*')
}
CANSFIT = function () {
    z()
    m = $.c(800).fit('me')
    g = $.c('b', 600).fit('guy')
}
 
CAN1 = function () {
    var picHolder
    $.fm()
    s2.A(picHolder = $.sp().id('pics'))
    $.getJSON('/img', function (i) {
        _.e(i, withImage)
    })
    function withImage(img) {
        dataUrl = img.d
        can = $.c(100, 100)
        can.click(
            function () {
                var mouse = $('#mouse')
                mouse.val('click')
                mouse.change()
                mug = img.d
            }
        )
        picHolder.A(can)
        can.fit(dataUrl)
    }

    s2.A(
        x = canvas = $.c('yellow', 1000, 800)
    )
    setInterval(
        function () {
            //  x.bc()
        }, 10000
    )
    s1(
        $.lb('mouse'),
        $.sl('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
            function (s) {
                x.q.ub()
                if (s == 'click') {
                    x.$(
                        function (X, Y) {
                            x.Cd(mug, X, Y)
                        }
                    )
                }
                if (s == 'enter') {
                    x.ME(function (X, Y) {
                        x.Cd(mug, X, Y)
                    })
                }
                if (s == 'leave') {
                    x.ML(function (X, Y) {
                        x.Cd(mug, X, Y)
                    })
                }
                if (s == 'move') {
                    x.MD(function () {
                        x.MM(function (X, Y) {
                            x.Cd(mug, X, Y)
                        })
                    })
                    x.MU(function () {
                        x.q.ub('mousemove')
                    })
                }
            }
        ),
        $.lb('global comp'),
        sl.apply(this, V(oO('g'))).$(function (v) {
            x.gc(v)
        }),
        //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
        $.bt(
            'SAVE(sv)', function () {
                x.sv()
            }
        ), $.br(2),
        $.bt(
            'CUT(dots)', function () {
                x.q.q.unbind()
                qi('mouse').v('none')
                x.dots()
            }
        ), $.br(2),
        $.bt('RESTORE(R)', function () {
            x.R()
        }), $.br(2),
        $.bt('bc:change background color', function () {
            x.bc()
        }), $.br(2),
        $.bt('cir:make circle', function () {
            x.cir(100, 100, 100)
        }), $.br(2),
        $.bt('d:draw', function () {
            x.d($w['mug'] || 'me')
        }), $.br(2),
        $.bt('dC:draw center', function () {
            x.dC($w['mug'] || 'me')
        }), $.br(2),
        $.bt('me', function () {
            x.me()
        }), $.br(2),
        $.bt('sh1', function () {
            x.ln(sh1)
        }), $.br(2),
        $.bt('sh2', function () {
            x.ln(sh2)
        }), $.br(2),
        $.bt(
            'tictactoe', function () {
                x.ln(tictactoe)
            }
        ), $.br(4),
        $.bt(
            'sampLinGrad', function () {
                x.sampLinGrad()
            }
        ),
        $.br(2),
        $.bt(
            'sampRadGrad', function () {
                x.sampRadGrad()
            }
        ),
        $.br(2),
        $.bt(
            'xxx', function () {
                xxx('barney')
            }
        ), $.br(2),
        $.bt(
            'bads', function () {
                bad(x, 200, 8)
            }
        ), $.br(2),
        $.bt(
            'coins', function () {
                coin(x, 200, 8)
            }
        ), $.br(2)
    )
}
FAN = function () {
$l('fan')
    x = $.c('y', 1000, 800).A()
    y = $.c('x', 400).A()
    x.$$(function () {
        x.fit('me')
    })
    
    
    x.fit('me')
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    restoreDrawingSurface = function () {
    }
    updateRubberband = function (m) {
        x.ln(
            mousedown.x,
            mousedown.y,
            m.x,
            m.y
        )
    }
    drawGuidewires = function () {
    }
    x.MD(
        function (X, Y) {
            dragging = true
            mousedown = {x: X, y: Y}
        }
    )
    x.MM(
        function (X, Y) {
            if (dragging) {
                restoreDrawingSurface()
                updateRubberband({x: X, y: Y})
            }
            if (guidewires) {
                drawGuidewires(loc.x, loc.y)
            }
        }
    )
    x.MU(
        function (X, Y) {
            dragging = false
            restoreDrawingSurface()
            updateRubberband({x: X, y: Y})
        }
    )

}
 
    
    
TRANS = function () {
    z()
    x = $.c('yellow', 1000, 800).A()
    y = $.c('purple', 400).A()
    x.$$(
        function () {
            x.fit('me')
        }
    )
    x.fit('me')
    identity = function (x) {
        x.stf(1, 0, 0, 1, 0, 0)
    }
    rotate = function (x, a) {
        identity(x)
        x.rt(tRad(a))
    }
    rotateByAngle = function (px, py, a) {
        var x, y
        x = (px * cos(a)) - (py * sin(a))
        y = (py * cos(a)) + (px * sin(a))
    }
    rotateAroundZero = function (px, py, r) {
        var x, y, a = 'angle'
        x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
        y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
    }
    transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
    //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
    //x=x+e,y=y+f
    //to scale, use a,d and set others to 0
}
RUB1 = function () {
    z()
    c = can = $.c('y', 1000, 800)
    c.$$(
        function () {
    c.fit('me')
    })
    
    c.fit('me')
    
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    rr = null
    data = null
    c.MD(
        function (x, y) {
            data = can.gD()
            dragging = true
            mousedown = {x: x, y: y}
        }
    )
    c.MM(
        function (X, Y) {
            var m = {x: X, y: Y},
                d = mousedown
            if (dragging) {
                can.pD(data)
                can.ln(d.x, d.y, d.x, m.y)
                can.ln(d.x, d.y, m.x, d.y)
                can.ln(m.x, m.y, m.x, d.y)
                can.ln(m.x, m.y, d.x, m.y)
            }
        }
    )
    c.MU(
        function (X, Y) {
            dragging = false
            var d = mousedown, x1, x2, y1, y2
            if (X > d.x) {
                x1 = d.x;
                x2 = X
            } else {
                x1 = X;
                x2 = d.x
            }
            if (Y > d.y) {
                y1 = d.y;
                y2 = Y
            } else {
                y1 = Y;
                y2 = d.y
            }
            
            rr = [x1, y1, x2, y2]
            can.pD(data)
            can.crop(rr)
            // data = can.gD()
        }
    )
}




FULLCAN = function () {
  
    $('html').css(
        {
            height: '100%'//, of:'h'
        }
    )
    $('body').css(
        {
            margin: 0,
            //g:0,
            height: '100%'
        }
    )
    var s = 'Click or tap the screen to start the game',
        fo = 'bold 16px Arial',
        x = $.c('pink', $('body').W(), $('body').H()).A()
    // x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
    $.i(
        'me', function (image) {
            image = $(image.target)
            var origW = image.W()
            image.W(Math.round((50 * cW()) / 100))
            image.H(Math.round((image.W() * image.H() ) / origW))
            x.draw(
                image,
                x.W() / 2 - image.W() / 2,
                x.H() / 2 - image.H() / 2
            )
        }
    )
}
HULL = function () {
    z()
    c = $.c('y', 800, 400).id('canvas').A()
    window.onload = init
    function init() {
        var canvas = c[0],        // main canvas element
            fps = 10,                                        // drawing frames per second
            convex = new Convex(),                            // convex hull
            dots = []                                     // dots, which are not in the convex hull
        // adjust canvas proportions
        // canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
        // assign canvas context
        ctx = canvas.getContext("2d");
        setInterval(
            function () {

                // get a blank canvas //// clear
                ctx.clearRect(0, 0, ctx, canvas.width, ctx.canvas.height)
                // draw convex dots
                convex.draw()
                // draw dots
                dots.map(function (dot) {
                    dot.draw()
                })
            }, 1000 / fps
        )
        // clicked on canvas
        c.click(
            function (evt) {
                var x = evt.clientX - canvas.getBoundingClientRect().left,
                    y = evt.clientY - canvas.getBoundingClientRect().top
                // clear convex
                convex.dots = []
                // add dot
                dots.push(new Dot(new V(x, y)))
            }
        )
        $.bt(
            'draw convex', function () {
                // move dots to canvas
                dots.map(function (dot) {
                    convex.addDot(dot)
                })
                // clear dots
                dots = []
            }
        ).A()
    }

    var Dot = function (pos) {
        this.pos = pos
    }
    Dot.prototype = {
        draw: function () {
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
    Convex = function () {
        this.dots = []
    } // a convex hull
    Convex.prototype = {
        draw: function () {
            var _this = this, refDots;
            // loop through dots
            this.dots.map(
                function (el) {
                    var dotAfter;
                    // draw dot
                    el.draw();
                    refDots = _this.copyDots(_this.dots); // copy dots
                    // remove el from reference dots
                    for (var i = 0; i < refDots.length; i++) {
                        if (refDots[i] != el) continue;
                        refDots.splice(i, 1);
                    }
                    // get dot after this dot
                    dotAfter = _this.getDotAfter(_this.dots, el);
                    // draw direct line
                    ctx.moveTo(el.pos.x, el.pos.y);
                    ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
                    ctx.stroke();
                }
            )
        },
        addDot: function (dot) {
            // the dot cannot be added, because it wouldn't be a convex anymore
            if (this.isDotInsideConvex(this.dots, dot)) return;
            // add dot intentionally
            this.dots.push(dot);
            // less than four dots are always a convex
            if (this.dots.length < 4) return;
            // remove dots, which are not in the convex (anymore)
            this.composeConvexHull();
        },
        composeConvexHull: function () {
            var refDots,        // all dots, except the one we are testing
                dot,            // the dot, supposed to be in the new convex
                newDots = [];    // dots, which are definitely part of the convex
            // loop dots
            for (var i = 0; i < this.dots.length; i++) {

                // reset dots reference
                refDots = this.copyDots(this.dots);
                // assig dot to the current index
                dot = refDots[i];
                // remove dot from refDots
                for (var h = 0; h < refDots.length; h++) {
                    if (h != i) continue;
                    refDots.splice(h, 1);
                    break;
                }
                // the dot is not inside of the convex, therefore add it
                if (!this.isDotInsideConvex(refDots, dot)) {
                    newDots.push(dot);
                }
            }
            // assign new convex
            this.dots = newDots;
        },
        //  copy dots object,, this is done due to call by reference
        copyDots: function (ref) {
            var dots = [];
            ref.map(
                function (dot) {
                    dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
                }
            );
            return dots;
        },
        isDotInsideConvex: function (convexDots, dot) {
            var dotBefore, dotAfter, sign;
            // at least three dots required for a convex
            if (convexDots.length < 3) return false;
            // the dot is definitely not inside the convex hull
            if (this.dotOutsideConvexRect(convexDots, dot)) return false;
            // assign dot before to the closest dot by the angle, which is negative
            dotBefore = this.getDotBefore(convexDots, dot);
            // assign dot after to the closest dot by the angle, which is positive
            dotAfter = this.getDotAfter(convexDots, dot);
            // dot on the inside of the line from dotBefore to dotAfter
            return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
        },
        //  is the dot outside of the convex rectangle?
        dotOutsideConvexRect: function (convexDots, dot) {
            var outside = [true, true, true, true];
            for (var i = 0; i < convexDots.length; i++) {
                if (convexDots[i].pos.x < dot.pos.x)
                    outside[0] = false;
                if (convexDots[i].pos.x > dot.pos.x)
                    outside[1] = false;
                if (convexDots[i].pos.y < dot.pos.y)
                    outside[2] = false;
                if (convexDots[i].pos.y > dot.pos.y)
                    outside[3] = false;
            }
            return outside[0] || outside[1] || outside[2] || outside[3];
        },
        //  get middle position as vector from the bounding dots
        getCenter: function (dots) {
            var rect = {xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y};
            dots.map(
                function (dot) {
                    if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
                    if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
                    if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
                    if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
                }
            );
            return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
        },
        //   get the closest dot before dot from dots
        getDotBefore: function (dots, dot) {
            var center, bgRad = -Math.PI * 2, dotBefore;
            center = this.getCenter(dots);
            dotRad = center.angleTo(dot.pos);
            dots.map(
                function (needleDot) {
                    var needleRad = center.angleTo(needleDot.pos),
                        refRad = needleRad - dotRad;
                    if (refRad > 0) refRad = -(Math.PI * 2 - refRad);
                    if (refRad <= bgRad) return;
                    bgRad = refRad;
                    dotBefore = needleDot;
                }
            );
            return dotBefore;
        },
        //  get the closest dot after dot from dots
        getDotAfter: function (dots, dot) {
            var center, smRad = Math.PI * 2, dotAfter
            center = this.getCenter(dots)
            dotRad = center.angleTo(dot.pos)
            dots.map(
                function (needleDot) {
                    var needleRad = center.angleTo(needleDot.pos),
                        refRad = needleRad - dotRad;
                    if (refRad > 0) refRad = -(Math.PI * 2 - refRad)
                    if (refRad >= smRad) return
                    smRad = refRad
                    dotAfter = needleDot
                }
            )
            return dotAfter
        }
    }
    var V = function (x, y) {
        this.x = x
        this.y = y
    }
    V.prototype = {
        subtract: function (v) {
            return new V(this.x - v.x, this.y - v.y);
        },
        // this = center, v = destination
        angleTo: function (v) {
            var ref = this.subtract(v)
            return Math.atan2(ref.y, ref.x) + Math.PI
        },
        // 0 = on line, 1 = inside, -1 = outside
        getSide: function (v1, v2) {
            return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
        }
    }
}
RUB = function () {
    z()
    can = $.c('y', 1000, 800).A()
    can.$$(function () {
        can.fit('me')
    })
    can.fit('me')
    guidewires = false
    dragging = false
    mousedown = {}
    loc = {}
    rr = null
    data = null
    can.MD(function (x, y) {
        data = can.gD()
        dragging = true
        mousedown = {x: x, y: y}
    })
    can.MM(function (X, Y) {
        var m = {x: X, y: Y}, d = mousedown
        if (dragging) {
            can.pD(data)
            can.ln(d.x, d.y, d.x, m.y)
            can.ln(d.x, d.y, m.x, d.y)
            can.ln(m.x, m.y, m.x, d.y)
            can.ln(m.x, m.y, d.x, m.y)
        }
    })
    can.MU(function (X, Y) {
        dragging = false
        var d = mousedown, x1, x2, y1, y2
        if (X > d.x) {
            x1 = d.x;
            x2 = X
        } else {
            x1 = X;
            x2 = d.x
        }
        if (Y > d.y) {
            y1 = d.y;
            y2 = Y
        } else {
            y1 = Y;
            y2 = d.y
        }
        rr = [x1, y1, x2, y2]
        can.pD(data)
        can.crop(rr)
        //    data=can.gD()
    })
}
SLOWFADE = function self(opacity) {
    //makes a yellow square and black dot??
    c = $.c('y', 500, 500)
    c.cir(10, 10, 10)
    opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001
    c.al(opacity).fillStyle('red').fillRect()
    if (opacity < 1) {
        setTimeout(
            function () {
                self(opacity)
            }, 30
        )
    }
}
CANVASQLOADER = function () {
    __C();
    cjs.lq(
        ['me'], function (q) {
            me = q('me')
            c.drawImage(me, 100, 100)
            c.pD(c.gD(100, 100, 500, 500), 120, 120)
            c.f("red").fr(10, 10, 50, 50)
            imgData = c.gD(10, 10, 50, 50)
            c.pD(imgData, 10, 70)
        }
    )
}
function fit() {
    CANVIIFIT = function () {
        z()
        m = $.can(800).A().fit('me')
        g = $.can('b', 600).A().fit('guy')
    }
}
PIX  = function () {
    
    c = $.c('y', 900, 500).A()
    
    c.draw('me', 100, 100)
    
    setTimeout(
        function () {
            c.pD(c.gD(100, 100, 500, 500), 120, 120)
            c.f("r").fr(10, 10, 50, 50)
            imgData = c.gD(10, 10, 50, 50)
            c.pD(imgData, 10, 70)
        }, 200
    )
}// :)
TXTT = function () {
    __C()
    x.b('b', 'g', 30)
    x.T(100, 'Jason Yanofski', 10, 150)
    x.lg({x1: 0, y1: 0, x2: x.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
    x.T('Jason Yanofski', 10, 290, '-')
}
function pixelUsesLoadQu() {
    PIXELTEST = function () {
        c = __C();
        cjs.lq(
            ['me'], function (q) {
                me = q('me')
                c.drawImage(me, 100, 100)
                d = c.gD(100, 100, 500, 500)
                // c.pD(d , 120, 120 )
                zeros = 0
                nums = 0
                _.each(
                    d.data, function (d) {
                        if (d == 0) {
                            zeros++
                        } else {
                            nums++
                        }
                    }
                )
                $l('zeros: ' + zeros + ' - nums: ' + nums)
            }
        )
    }
}
SHAD = function () {
 
    c = $.c('b', 700).A()
    c.draw('me', 100, 100)
    c.shadowColor('r').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
    c.draw('me', 200, 200)
    c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
    c.shadowColor('g')
    c.draw('me', 0, 300)
    c.shadow('p', 30, 200, 20)
    c.draw('guy', 400, 200)
}// :)
function clip(){

CROP = function () {c = __C(); c.fit('me')}

   

    DRAGSTG = function () {
    Q(function () {
        c = $.c('g', 600, 300)
        f = $.dragFrame(c)
        x = c.ctx()
        x.d('me', 100, 100)
        c.$(function (x1, y1) {
            x.a(x1, y1, 2).s()
        })
    })
}

PATH = function () {
    Q(function () {
        s = c = $.c('g', 200, 200)
        d = $.c('x', 200, 200)
        f = $.dragFrame(c)
        f1 = $.dragFrame(d).X(300)
        x = c.ctx()
        xx = d.ctx()
        x.c('X', 'X').fr(0, 0, 1000, 1000)
        x.b(10, 30, 'r', 'X')
        x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
        x.cl()
        x.d('me', 50, 50)
        d.ctx().d('me', 0, 0)
        _.in(function () {
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            xx.d(d, 35, 15)
            _.in(function () {
                x.d(d, 0, 0)
                _.in(function () {
                    xx.c('X').clearRect(0, 0, 200, 200)
                    xx.d(c)
                })
            })
        })
    })
}
}
function adbe(){
_ADBE = function (fn) {
    return function () {
        Q(function () {
            __C()
            j = x.d('me', 100, 300)
            i = x.d('chicks', 600, 300)
            fn()
        })
    }
}
ADBE = _ADBE(function () {
    c.$(function (x1, y1) {
        x.a(x1, y1, 10).s()
    })
})
}
function text(){
TEXTTX = function () {
    __C()
    x.b('b', 'g', 30)
    x.T(100, 'Jason Yanofski', 10, 150)
    x.lg({x1: 0, y1: 0, x2: x.W(),
     y1: 0, cS: {m: 0, b: .5, r: 1}})
    x.T('Jason Yanofski', 10, 290, '-')
}

    
    
    }
function fit() {
    FIT = function () {
        __C()
        c.fit('me')
    }
}
parlax()
function parlax() {
    transparent = function (i, num) {
        if (!N(num)) {
            return 'transparent url(' + i + '.png)'
        }
        return 'transparent url(' + i + '.png)' + num + '% 0px'
    }
    PARALLAX = function () {
        z()
        CanvasLayer = function (bg) {
            c = $.c('y', 500, 500).P('a').W('100%').H(256)
            if (bg) {
                c.bg(bg)
            }
            return c
        }
        CanvasLayer(transparent('me', 10))
        CanvasLayer(transparent('guy', 300))
    }
    PARALLAXBYMOUSE = function () {
        z()
        DivLayer = function (bg) {
            d = $.d('y', 500, 500).P('a').W('100%').H(256)
            if (bg) {
                d.bg(bg)
            }
            return d
        }
        //awesome!!!!!
        back = DivLayer(transparent('me'))
        front = DivLayer(transparent('guy'))
        speed = 0
        xp = 0
        $('body').mousemove(
            function (e) {
                speed = e.pageX - ( W() / 2 )
                speed /= ( W() / 2 )
                $l(speed)
            }
        )
        $('body').mouseout(
            function (e) {
                speed = 0
            }
        )
        setInterval(
            function () {
                xp += speed
                back.bgP(xp + 'px 0px')
                front.bgP((xp * 3) + 'px 0px')
            }, 30
        )
    }
}
function notWorking() {
    FLOATCVQ = function () {
        Q(function () {
            __C()
            x.b(400, 100, 'r', 'o', 30).l(600, 400)
            x.b(10, 500).at(150, 20, 150, 170, 50).l(150, 120)
            x.b().a(400, 75, 50, 0, 340, '-')
            x.tl(-100, 0, R(30), 2)
                .b(400, 100, 'x', 'b', 30)
                .l(600, 400)
            x.d('me')
            x.d(x, 300, 300)
            x.d(x, 300, 300)
            //x.scICen('guy', .7)
            //Uncaught TypeError: Cannot read property 'd' of undefined
        })
    }
    RADGRAD = function () {
        z()
        d = $.c('y', 500)
        c = $.c('y', 500).A()
        c.context.f(
            c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
        )
        c.fr()
    }
    CANN = function () {
        $.format = function () {
            section1 = s1 = $.sp()
            section2 = s2 = $.sp()
            __CT($.R($.xs(3).A(section1), $.xs(9).A(section2)))
        }
        var picHolder
        $.format()
        picHolder = $.sp().id('pics')
        s2.A(
            picHolder
        )
        $.getJSON('/img', function (i) {
            _.e(i, withImage)
        })
        function withImage(img) {
            dataUrl = img.d
            can = $.c(100, 100)
            can.click(function () {
                var mouse = $('#mouse')
                mouse.val('click')
                mouse.change()
                mug = img.d
            })
            picHolder.A(can)
            can.fit(dataUrl)
        }

        s2.A(
            c = cv = x = canvas = $.c('y', 1000, 800))
        //  _.ev(10, function(){x.bc()})
        s1.A($.lb('mouse'),
            /*
             $.scv('none','click','enter','leave','move').id('mouse').o(
             function(s){
             x.q.ub()
             if(s=='click'){
             x.$(function(X,Y){
             x.Cd(mug,X,Y)
             })}


             if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
             if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
             if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})

             x.MU(function(){x.q.ub('mousemove')})}


             }),


             */
            $.label('global comp'),
            //scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
            //gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
            $.bt('SAVE(sv)', function () {
                x.sv()
            }), $.br(2),
            $.bt('CUT(dots)', function () {
                x.q.q.unbind()
                qi('mouse').v('none')
                x.dots()
            }), $.br(2),
            $.bt('RESTORE(R)', function () {
                x.R()
            }), $.br(2),
            $.bt('bc:change background color', function () {
                x.bc()
            }), $.br(2),
            $.bt('cir:make circle', function () {
                x.cir(100, 100, 100)
            }), $.br(2),
            $.bt('d:draw', function () {
                c.dr(
                    $w['mug'] || 'me'
                )
            }), $.br(2),
            $.bt('dC:draw center', function () {
                cv.dC(window['mug'] || 'me')
            }), $.br(2),
            $.bt('me', function () {
                x.me()
            }), $.br(2),
            $.bt('sh1', function () {
                x.ln(sh1)
            }), $.br(2),
            $.bt('sh2', function () {
                x.ln(sh2)
            }), $.br(2),
            $.bt('tictactoe',
                function () {
                    x.ln(tictactoe)
                }), $.br(4),
            $.bt('sampLinGrad',
                function () {
                    x.sampLinGrad()
                }), $.br(2),
            $.bt('sampRadGrad',
                function () {
                    x.sampRadGrad()
                }), $.br(2),
            $.bt('ctxx',
                function () {
                    xxx('barney')
                }), $.br(2),
            $.bt('bads',
                function () {
                    bad(x, 200, 8)
                }), $.br(2),
            $.bt('coins',
                function () {
                    coin(x, 200, 8)
                }), $.br(2)
        )
    }
    parallax()
    function parallax() {
        DivLayer = function (bg) {
            var div = $.d('y', 500, 500).P('a').width('100%').H(256)
            if (bg) {
                div.background(bg)
            }
            return div
        }
        transparent = function (img, num) {
            if (!N(num)) {
                return 'transparent url(' + img + '.png)'
            }
            return 'transparent url(' + img + '.png)' + num + '% 0px'
        }
        CanvasLayer = function (bg) {
            var can = $.c('y', 500, 500).A()
                .P('a').width('100%').H(256)
            if (bg) {
                can.bg(bg)
            }
            return can
        }
        PARALLAX = function () {
            z()
            CanvasLayer(
                transparent('me', 10)
            ).A()
            CanvasLayer(
                transparent('guy', 300)
            ).A()
        }
        PARALLAXBYMOUSE = function () {
            //awesome!!!!!
            z()
            back = DivLayer(transparent('me')).A()
            front = DivLayer(transparent('guy')).A()
            speed = 0
            xp = 0
            $('body').mousemove(function (e) {
                speed = e.pageX - ( W() / 2 )
                speed /= ( W() / 2 )
                $l(speed)
            })
            $('body').mouseout(function (e) {
                speed = 0
            })
            setInterval(function () {
                xp += speed
                back.backgroundPosition(xp + 'px 0px')
                front.backgroundPosition((xp * 3) + 'px 0px')
            }, 30)
        }
    }
    TRANS = function () {
        z()
        x = $.c('y', 1000, 800)
        y = $.c('u', 400)
        x.$$(function () {
            x.fit('me')
        })
        x.fit('me')
        identity = function (x) {
            x.stf(1, 0, 0, 1, 0, 0)
        }
        rotate = function (x, a) {
            identity(x);
            x.rt(tRad(a))
        }
        rotateByAngle = function (px, py, a) {
            var x, y
            x = (px * cos(a)) - (py * sin(a))
            y = (py * cos(a)) + (px * sin(a))
        }
        rotateAroundZero = function (px, py, r) {
            var x, y, a = 'angle'
            x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
            y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
        }
        transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
        //if a=1,b=0,c=0,d=1 then args e,f rep pure translation
        //x=x+e,y=y+f
        //to scale, use a,d and set others to 0
    }
}
usesQ()


function usesQ() {
    
    CLIPSTARS = function () {
        z()
        __C()
        Q(fn)
        //just draws green circ?
        function fn() {
            $l('--clipstars')
            
            x.Star = function (r) {
                var ctx = this
                r = N(r, R(4, 2))
                ctx.b(r, 0, 'w') // first point drawn is the right most point
                _.t(9, x9)
                return x.f()
                function x9(i) {
                    x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
                }
            }
            x.tl(75, 75).a(60).cl()
            x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75}).fr(-75, -75, 250)
            _.t(10, x10)
        }

        function x10() {
            
            $l('x10')
            
            x._(
            function () {
                x.tl(
                
                    R(150, -75), R(150, -75)
                ).Star()
            }
            
            )
        }
    }
        GLOBALCOMP = function () {
            c = __C()
            Q(
                function () {
                    x.d('me', 100, 100)
                    x.d('me', 200, 100)
                    x.d('me', 300, 100)
                    x.d('me', 400, 100)
                    x.d('me', 500, 100)
                    x.d('me', 150, 150) //  x.sO(); x.dO()
                    x.xo()
                    c.$(
                        function () {
                            var g = G(arguments), o
                            o = {x: g.f, y: g.s}
                            x.d('guy', o.x, o.y)
                        }
                    )
                }
            )
        }
        GCOMP = function () {
            Q(function () {
                __C()
                x.d('me', 100, 100)
                x.d('me', 200, 100)
                x.d('me', 300, 100)
                x.d('me', 400, 100)
                x.d('me', 500, 100)
                x.d('me', 150, 150) //  x.sO(); x.dO()
                x.xo()
                c.$(function () {
                    var g = G(arguments), o
                    o = {x: g.f, y: g.s}
                    x.d('guy', o.x, o.y)
                })
            })
        }
        CVQLOADER = function () {
            __C()
            Q(['me'], function (q) {
                me = Q.i('me')
                c.drawImage(me, 100, 100)
                c.pD(c.gD(100, 100, 500, 500), 120, 120)
                c.f("r").fr(10, 10, 50, 50)
                imgData = c.gD(10, 10, 50, 50)
                c.pD(imgData, 10, 70)
            })
        }
        PIXEL = function () {
            c = $.c();
            Q(['me'], function (q) {
                me = Q.i('me')
                c.drawImage(me, 100, 100)
                d = c.gD(100, 100, 500, 500)
                // c.pD(d , 120, 120 )
                zeros = nums = 0
                _.e(d.data, function (d) {
                    if (d == 0) {
                        zeros++
                    } else {
                        nums++
                    }
                })
                $l('zeros: ' + zeros + ' - nums: ' + nums)
            })
        }
    }
function grads() {
        TESTGRAD = function () {
            __C();
            x = c.ctx()
            x.lg(
                {
                    cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
                    x1: 50, x2: 500, y2: 100
                }
            ).fr(0, 0, 300)
            x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
            //black to white
            // x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
        }
        TESTGRADWORKS = function () {
            z()
            c = $.c('y', 500).A()
            g = c.context.createLinearGradient(50, 0, 500, 100)
            g.addColorStop(.2, 'orange')
            g.addColorStop(.6, 'red')
            g.addColorStop(.8, 'green')
            c.context.fillStyle = g
            c.fillRect()
        }
  
    LINRAD = function () {
        __C()
        x = c.ctx()
        x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
        x.fr(0, 0, 100, 100)
    }
    LINRAD = function () {
        __C()
        x = c.ctx()
        x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
        x.fr(0, 0, 100, 100)
    }
    LINRAD = function () {
        z()
        d = $.c('y', 500)
        c = $.c('y', 500).A()
        c.context.f(
            c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
        )
        c.fr()
    }
    RADGRAD = function () {
        z()
        d = $.c('y', 500)
        c = $.c('y', 500).A()
        c.context.f(
            c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
        )
        c.fr()
    }
    GRADTX = function () {
        __C();
        x = c.ctx()
        x.lg(
            {
                cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
                x1: 50, x2: 500, y2: 100
            }).fr(0, 0, 300)
        x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
        //black to white
        // x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
    }
}
tictactoe = [
    [[200, 0], [200, 600]],
    [[400, 0], [400, 600]],
    [[0, 200], [600, 200]],
    [[0, 400], [600, 400]]
]
sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]
