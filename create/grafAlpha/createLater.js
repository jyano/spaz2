
function maybe(){
    eD.init=function(){alert('eD.init')
        var eD=this
        eD.initialize.apply(eD, arguments)
        return eD
    }
}
function alpha(){
    $.fn.keyControls = function (num) {
        var args = G(arguments), that = this

        this.P('a')
        if (args.P) {
            $.kD('left', function () {
                that.toL(num)
            })
            $.kD('right', function () {
                that.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                that.toU(num)
            })
            $.kD('down', function () {
                that.toD(num)
            })
        }
    }// o.keyControls(num) should deprecate use of key(o)

    cjs.bulletHit = function (bullet, inWhat) {alert('bullletHit')
        var x = bullet.centerX(),
            y = bullet.centerY()
        var res = M.pointInCircle(x, y, {
            x: inWhat.x,
            y: inWhat.y,
            radius: inWhat.H() / 2
        })

        if (res == true) {$l('hit!')}

        return res
    }

    cjs.M = function (a) {
        var m = new cjs.Matrix2D()
        if (N(a)) {
            m.rotate(a)
        }
        return m
    }



}
