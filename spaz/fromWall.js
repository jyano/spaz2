


function alpha(){

    w.R = function (c, W, H, x, y) {
        alert('w.R')
        var w = this, g = G(arguments),
            wC = w.cen(),
            r

        if (!S(g.f)) {
            y = x;
            x = H;
            H = W;
            W = c;
            c = 'x'
        }
        if (U(W)) {
            W = 200
            H = 200
            x = wC.x - W / 2
            y = wC.y - H / 2
        }
        else if (U(H)) {

            H = W
            x = wC.x - W / 2
            y = wC.y - H / 2
        }
        else if (U(x)) {
            x = wC.x - W / 2;
            y = wC.y - H / 2
        }
        return w.S(
            x + W / 2,
            N(y, x) + H / 2,
            c,
            W, H
        )

        old = function () {
            /*
             x=N(g[0])?g[0]:wC.x
             y=N(y)?y:N(g[0])?N(g[0]):wC.y
             W=N(W)?W:100
             H=N(H)?H:W
             */
        }
    }
    w.vW = function (col, H, x, y) {
        alert('w.vW')
        var w = this, g = G(arguments),
            cW = w.can.W(),
            cH = w.can.H()
        if (!S(col)) {
            y = x;
            x = H;
            H = col;
            col = 'x'
        }
        H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
        if (U(x)) {
            x = cW / 2;
            y = cH / 2 - H / 2
        }
        else if (U(y)) {
            x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
            y = cH / 2 - H / 2
        }
        //x-=10?
        return w.R(col, 20, H, x, y).bo(.2).K('wall')
    }

}// w.R, w.vW
old=function(){
    /*
     if (A(o.w)){     c = o.w[0]
     if (!S(c)){ h = W;     W = c;     c = 'o'  }
     o.c = o.c || 'o'
     w.floor = w.R(o.c, w.wW, 20, 0, w.wH - 20)
     w.right = w.R(o.c, 20, w.wH, w.Ww - 20, 0)
     w.roof = w.R(o.c, w.wW, 20, 0, 0)
     w.left = w.R(o.c, 20, w.wH, 0, 0)}*/
}