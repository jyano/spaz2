hitRay = function (x1, y1, x2, y2, x3, y3, x4, y4) {
	var t1 = x3 - x1, t2 = y3 - y1, t3 = x2 - x1, t4 = y2 - y1, t5 = x4 - x3, t6 = y4 - y3, t7 = t4 * t5 - t3 * t6, a;
	a = (((t5 * t2) - t6 * t1) / t7);
	var px = x1 + a * t3, py = y1 + a * t4;
	var b1 = isOnSegment(x2, y2, x1, y1, px, py);
	var b2 = isOnSegment(px, py, x3, y3, x4, y4);
	if ((b1 && b2)) {
		return V(px, py);
	}
	return null;
}
isOnSegment = function (px, py, x1, y1, x2, y2) {
	var b1 = (  (x1 + 0.1) >= px && px >= x2 - 0.1) || (   (x1 - 0.1) <= px && px <= x2 + 0.1   )
	var b2 = ( (y1 + 0.1) >= py && py >= y2 - 0.1) || (   (y1 - 0.1) <= py && py <= y2 + 0.1   )
	var isOnSgm = b1 && b2
	return isOnSgm && isOnLine(px, py, x1, y1, x2, y2)
}
isOnLine = function (px, py, x1, y1, x2, y2) {
	if ((x2 - x1) > 0.1 || x1 - x2 > 0.1) {
		var a = (y2 - y1) / (x2 - x1),
				possibleY = a * (px - x1) + y1,
				diff = (possibleY > py) ? possibleY - py : py - possibleY
		return (diff < 0.1)
	}
	return (((px - x1) < 0.1) || x1 - px < 0.1)
}
det = function (x1, y1, x2, y2, x3, y3) {
	return x1 * y2 + x2 * y3 + x3 * y1 - y1 * x2 - y2 * x3 - y3 * x1
}
pointsMatch = function (x1, y1, x2, y2) {
	var dx = (x2 >= x1) ? x2 - x1 : x1 - x2, dy = (y2 >= y1) ? y2 - y1 : y1 - y2;
	return dx < 0.1 && dy < 0.1
}


hitRayFn$ = $hitRayFn = function (p1, p2, v1, v2, fn) {
	var v = $hitRay(p1, p2, v1, v2)
	if (v) {
		return fn(v)
	}
}
hitRay$ = $hitRay = function (p1, p2, v1, v2) {
	return hitRay(p1.x, p1.y, p2.x, p2.y, v1.x, v1.y, v2.x, v2.y)
}
onSgm$ = function (p, x1, x2) {
	return isOnSegment(p.x, p.y, x1.x, x1.y, x2.x, x2.y)
}
ptsMt$ = function(x1,x2){return pointsMatch(x1.x, x1.y, x2.x, x2.y)}
isOL$ =function(p,x1,x2){
	return isOnLine( p.x, p.y, x1.x, x1.y, x2.x, x2.y)
}
det$=function(x1,x2,x3){return det(x1.x, x1.y, x2.x, x2.y, x3.x, x3.y)}
M.sumOfSqs = function (p1, p2) {
	var dx = p1.x - p2.x;
	var dy = p1.y - p2.y;
	return dx * dx + dy * dy
}



calcShapes = function (verts) {var vec; var i, n, j; var d, t, dx, dy, minLen; var i1, i2, i3, p1, p2, p3; var j1, j2, v1, v2,
	  k, h
	var vec1, vec2; var v, hitV; var isConvex=false;
	
	var vexPols = []
	var qu = [ verts ]
	
	while (qu.length) {
		
		
		isConvex = true;  vec = qu[0];
		
		_.t(n = vec.length, function (i) {
			i1 = i;i2 = (i < n - 1) ? i + 1 : i + 1 - n;
			i3 = (i < n - 2) ? i + 2 : i + 2 - n;
			p1 = vec[i1];p2 = vec[i2];p3 = vec[i3]
			d = det(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
			if (d < 0) {isConvex = false;   minLen = 1000000000000000000000000
				_.t(n, function (j) {if (j != i1 && j != i2) {
					$hitRayFn(p1, p2, v1 = vec[j1 = j], v2 = vec[j2 = (j < n - 1) ? j + 1 : 0], function(v){
							if ((t = M.sumOfSqs(p2, v)) < minLen) {
								h = j1; k = j2;hitV = v;minLen = t}})}})
				vec1 = [];vec2 = [];j1 = h;j2 = k; v1 = vec[j1];v2 = vec[j2];
				if (!pointsMatch(hitV.x, hitV.y, v2.x, v2.y)) {vec1.push(hitV)};
				if (!pointsMatch(hitV.x, hitV.y, v1.x, v1.y)) {vec2.push(hitV)}
				h = -1;k = i1
				while (true) {
					if (k == j2) {
					
						
					if (!isOnSegment(v2.x, v2.y, vec[h].x, vec[h].y, p1.x, p1.y)) {
						vec1.push(vec[k])}//if( h<0|| h>=n ){err()}
						break
					}
					else {vec1.push(vec[k])}
					h = k;
					k =   (k < 1) ? n-1 : k - 1
				}
				vec1 = vec1.reverse(); h = -1;k = i2
				while (true) {
					if (k == j1) {
						if (!isOnSegment(v1.x, v1.y, vec[h].x, vec[h].y, p2.x, p2.y)) {
							vec2.push( vec[k] )}//  if   ( h<0  || h>=n)  {  err()   }
						break
					}
						else {vec2.push(vec[k])}
					h = k; k = (k+1>n-1)?0:k+1
				}
				qu.push(vec1, vec2); qu.shift()  }
		})
		
		
		if (isConvex) {   vexPols.push(  qu.shift()  )   }
	}
	
	return vexPols
	
}








function onMism(hitV, v2, fn) {
	var mism = !pointsMatch(hitV.x, hitV.y, v2.x, v2.y)
	if (F(fn)) {
		if (mism) {
			return fn(hitV)
		}
	}
	return mism
}
function onMismPush(hitV, v2, vec) {
	onMism(hitV, v2, function () {
		vec.push(hitV)
	})
}
function offSgm(pt, vecH, p1) {
	return !isOnSegment(pt.x, pt.y, vecH.x, vecH.y, p1.x, p1.y)
}


Sep$ = Separate = function (b, vs, sc) {
	var g = G(arguments),
			i, j, m, vexPols, polyShape, n
	b = g[0]
	vs = g[1]
	sc = N(g[2], 30)
	if (A(b)) {
		sc = vs;
		vs = b;
		b = g.p ? w.ball(300, 300, 4) : w.dyn(300, 300)
	}
	_.e(calcShapes(_.m(vs, V)), function (vec) {
		// vv = vec; vvv = _.m(vv, function(v){return [v.x, v.y]})
		// b.bindSprite2(
		//  w.s.shape(body.X(), body.Y()).poly(vvv, 'r', 'b', 1)
		// )
		h = b2d.pH().setAsVec(vec, sc)
		b.f(b2d.f(h))
	})
	return b.d(1)
}



$sep = Box2D.sep =function(body, verts, scale){
	 
	 if(N(scale)){scale =  30 * (1/scale ) }
    /*
     //This class is specifically for non-convex polygons.
     // If you want to create a convex polygon, you don't need to use this class
     // - Box2D's <code>b2PolygonShape</code> class allows you to create convex shapes with the
     <code>setAsArray()</code>/<code>setAsVector()</code> method.</li>

     //The vertices must be in clockwise order.</li>
     //No three neighbouring points should lie on the same line segment
     //There must be no overlapping segments and no "holes"

     @param body The b2Body, in which the new fixtures will be stored.
     * @param fixtureDef A b2FixtureDef, containing all the properties (friction, density, etc.) which the new fixtures will inherit.
     * @param verticesVec The vertices of the non-convex polygon, in clockwise order.
     * @param scale <code>[optional]</code> The scale which you use to draw shapes in Box2D. The bigger the scale, the better the precision. The default value is 30.
     * @see b2PolygonShape
     * @see b2PolygonShape.SetAsArray()
     * @see b2PolygonShape.SetAsVector()
     * @see b2Fixture
     * */
    //pass in an array of points //each will get scaled and then, calcShapes is applied to it //and then for EACH OF THE SHAPES!! ....

    // err=function(){throw new Error("A problem has occurred. Use the Validate() method to see where the problem is.")}

    if(b2d.isGPoly(verts)){
        verts = verts.verts()
    }
    
    verts= _.map(verts,function(v){
	    v=V(v);
	    return [v.x, v.y]
    })

    return U(body)? Separate :
        Separate(body, verts, scale)
} //= b2d.fig=b2d.conc=b2d.separator

SEP=function(){
	W().C('z')
	b = w.D(300,300,'r', 50,50)
	b.pol( 'b', $vs.witch )
	 
	
	_.in(function(){
		b1 = w.D(500, 500)
		b.fs(function (f) {
			var vs = f.vs()
			$sep(b1, vs, 1.6).C('w')
		})
		b1.pol('y', $vs.expl)

		_.in(function(){
		b2 = w.D(500, 500)
		b1.fs(function (f) {
			var vs = f.vs()
			$sep(b2, vs,.5).C($r())
		})
	
	})})
	
	
}
Validate = function (verticesVec) {
	/**
	 * Checks whether the vertices in <code>verticesVec</code> can be properly distributed into the new fixtures
	 * (more specifically, it makes sure there are no overlapping segments and the vertices are in clockwise order).
	 * It is recommended that you use this method for debugging only, because it may cost more CPU usage.
	 * <p/>
	 * @param verticesVec The vertices to be validated.
	 * @return An integer which can have the following values:
	 * <ul>
	 * <li>0 if the vertices can be properly processed.</li>
	 * <li>1 If there are overlapping lines.</li>
	 * <li>2 if the points are <b>not</b> in clockwise order.</li>
	 * <li>3 if there are overlapping lines <b>and</b> the points are <b>not</b> in clockwise order.</li>
	 * </ul>
	 * */
	
	var i, n = verticesVec.length, j, j2, i2, i3, d, ret = 0;
	var fl, fl2 = false
	_.times(n, function (i) {
		i2 = (i < n - 1) ? i + 1 : 0
		i3 = (i > 0) ? i - 1 : n - 1
		fl = false
		_.times(n, function (j) {
			if (j != i && j != i2) {
				if (!fl) {
					d = det(verticesVec[i].x, verticesVec[i].y, verticesVec[i2].x, verticesVec[i2].y, verticesVec[j].x, verticesVec[j].y);
					if (d > 0) {
						fl = true
					}
				}
				if ((j != i3)) {
					j2 = (j < n - 1) ? j + 1 : 0;
					if (hitSegment(verticesVec[i].x, verticesVec[i].y, verticesVec[i2].x, verticesVec[i2].y, verticesVec[j].x, verticesVec[j].y, verticesVec[j2].x, verticesVec[j2].y)) {
						ret = 1;
					}
				}
			}
		})
		if (!fl) {
			fl2 = true
		}
	})
	if (fl2) {
		if (ret == 1) {
			ret = 3
		} else {
			ret = 2
		}
	}
	return ret
}
hitSegment = function (x1, y1, x2, y2, x3, y3, x4, y4) {
	var t1 = x3 - x1, t2 = y3 - y1, t3 = x2 - x1, t4 = y2 - y1, t5 = x4 - x3, t6 = y4 - y3, t7 = t4 * t5 - t3 * t6, a;
	a = (((t5 * t2) - t6 * t1) / t7);
	var px = x1 + a * t3, py = y1 + a * t4;
	var b1 = isOnSegment(px, py, x1, y1, x2, y2);
	var b2 = isOnSegment(px, py, x3, y3, x4, y4);
	if ((b1 && b2)) {
		return V(px, py);
	}
	return null;
}
