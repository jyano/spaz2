w.$ = function (fn) {
	var w = this
	w.UI().click(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.$$ = function (fn) {
	var w = this
	w.UI().dblclick(function (e) {
		fn({x: w.mx, y: w.my, e: e})
	})
	return w
}
w.mm = function (fn) {
	var w = this, g = G(arguments)
	$.mousemove(function (e) {
		var o = {
			x: w.mx,
			y: w.my,
			X: e.clientX,
			Y: e.clientY,
			e: e
		}
		fn(o)
	})
	return w
}
w.md = function (fn) {
	var w = this
	w.i.c.mousedown(function (e) {
		var o = {x: w.mx, y: w.my, X: e.clientX, Y: e.clientY, e: e}
		w.q(w.mx, w.my, function (f) {
			if (f) {
				o.f = f;
				o.b = f.B()
			}
		})
		fn(o)
	})
	return w
}
w.mu = function (fn) {
	var w = this, $cv = $(w.i.canvas)
	$cv.mouseup(function (e) {
		fn({
			x: w.mx,
			y: w.my,
			e: e
		})
	})
	return w
}
w.mdq = function (fn) {
	var w = this
	w.md(function (e) {
		w.q(e.x, e.y, function (f) {
			fn(f, e)
		})
	})
	return this
}
w.e$ = function () {
	var g = G(arguments), o
	o = F(g.s) ? {k: g.f, fn: g.s} : {fn: g.f}
	this.e(function (b) {
		if (b.of(o.k)) {
			b.$(o.fn)
		}
	})
	return this
}

BOXMOUSEJT = BMJ = function () {
var mouseJoint
	m_iterations = 10
	m_timeStep = 1 / 30

	w = $bW().sDD($dD( $cv = $.c('z', 1800, 1500)))

	_.ev(.1, function () {
		if (mouseJoint) {
			var mx = mouseX / 30;
			var my = mouseY / 30;
			var v = V(mx, my)
			mouseJoint.SetTarget(v)
		}
		w.go(1 / 5, '+')
	})
	$bi()
	_.ev(2, function () {
		$ba()
	})
	mousePVec = V()
	//stage.MD(createMouse);
	//stage.MU(destroyMouse);


	$cv.mousedown(function(e){
	$l('mousedown')
	
	mouseX=mx = e.clientX
	mouseY=my = e.clientY
	
	
		createMouse(e)
	})
	
	
	


}

function createMouse(e) {

	$l('createMouse')
	var body = GetBodyAtMouse()
	if (body) {
		$l('found body')
		var mouseJointDef = $mJtD( w.GetGroundBody(), body)
		mouseJointDef.target.Set(mouseX / 30, mouseY / 30)
		mouseJointDef.maxForce = 30000;
		//mouseJointDef.timeStep = m_timeStep;
		mouseJoint = w.CreateJoint(mouseJointDef)
	}
}
function destroyMouse(e) {
	if (mouseJoint) {
		w.DestroyJoint(mouseJoint);
		mouseJoint = null
	}
}
function GetBodyAtMouse(includeStatic) {

	$l('getBodyAtMouse')
	var mouseXWorldPhys = mouseX / 30;
	var mouseYWorldPhys = mouseY / 30;

	mousePVec.Set(mouseXWorldPhys, mouseYWorldPhys);
	var aabb = new b2AABB();
	
	aabb.lowerBound.Set(mouseXWorldPhys - 0.001, mouseYWorldPhys - 0.001);
	aabb.upperBound.Set(mouseXWorldPhys + 0.001, mouseYWorldPhys + 0.001);
	
	var shapes = []
	
	var count = w.QueryAABB(aabb, shapes)
	
	var bod = null;
	
	_.t(count, function (i) {
	
		if (shapes[i].GetBody().IsStatic() == false || includeStatic) {
			var tShape = shapes[i]
			var inside = tShape.TestPoint(tShape.GetBody().GetXForm(), mousePVec);
			if (inside) {
				body = tShape.GetBody()
				//	break;
			}
		}
	})
	return body;
}
	