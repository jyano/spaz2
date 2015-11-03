
gpcas.geometry.PolyDefault = function (isHole) {
	if (isHole == null) isHole = false;			// Only applies to the first poly and can only be used with a poly that contains one poly
	this.m_IsHole = isHole;
	this.m_List = new ArrayList();
}
pD= gpcas.geometry.PolyDefault.prototype


pD.getNumPoints = function () {
//	$l('pD.getNumPoints')
	return (this.m_List.get(0)).getNumPoints()
	
}// Return the number points of the first inner polygon



pD.addPointXY = function (x, y) {
	this.addPoint(new Point(x, y))
} // Add a point to the first inner polygon. If a point is added to an empty PolyDefault object,it will create an inner polygon of type PolySimple
pD.addPoint = function (p) {// Add a point to the first inner polygon.  If a point is added to an empty PolyDefault object, it will create an inner polygon PolySimple
	var m_List = this.m_List;
	if (m_List.size() == 0) {
		m_List.add(new PolySimple())
	}
	(m_List.get(0)).addPoint(p)
}
pD.getX = function (index) {
	return (this.m_List.get(0)).getX(index)
} //Return the X value of the point at the index in the first inner polygon
pD.getY = function (index) {
	return (this.m_List.get(0)).getY(index)
}//Return the Y value of the point at the index in the first inner polygon
pD.getPoint = function (index) {
	return (this.m_List.get(0)).getPoint(index)
}
pD.getPoints = function () {
	return (this.m_List.get(0)).getPoints()
}
pD.isPointInside = function (point) {
	var m_List = this.m_List;
	if (!(m_List.get(0)).isPointInside(point)) return false;
	for (var i = 0; i < m_List.size(); i++) {
		var poly = m_List.get(i);
		if ((poly.isHole()) && (poly.isPointInside(point))) return false;
	}
	return true
}
pD.equals = function (obj) {
	if (!(obj instanceof PolyDefault)) {
		return false;
	}
	var that = obj;
	if (this.m_IsHole != that.m_IsHole) return false;
	if (!equals(this.m_List, that.m_List)) return false;
	return true;
}
pD.hashCode = function () {
	/**
	 * Return the hashCode of the object.
	 *
	 * @return an integer value that is the same for two objects
	 * whenever their internal representation is the same (equals() is true)
	 **/
	var m_List = this.m_List;
	var result = 17;
	result = 37 * result + m_List.hashCode();
	return result;
}
pD.add = function (arg0, arg1) {
	var args = [];args[0] = arg0;
	if (arg1) {args[1] = arg1}
	if (args.length == 2) {this.addPointXY(args[0], args[1])}
	else if (args.length == 1) {
		if (args[0] instanceof Point) {this.addPoint(args[0])}
		else if (args[0] instanceof gpcas.geometry.PolySimple) {this.addPoly(args[0])}
		else if (args[0] instanceof Array) {var arr = args[0];
			if ((arr.length == 2) && (arr[0] instanceof Number) && (arr[1] instanceof Number)) {this.add(arr[0], arr[1])}
			else {for (var i = 0; i < args[0].length; i++) {this.add(args[0][i]) }}
		}
	}
}
pD.getBounds = function () {
	/**
	 * Returns the bounding rectangle of this polygon.
	 * <strong>WARNING</strong> Not supported on complex polygons.
	 */
	var m_List = this.m_List;
	if (m_List.size() == 0) {
		return new Rectangle();
	}
	else if (m_List.size() == 1) {
		var ip = this.getInnerPoly(0);
		return ip.getBounds();
	}
	else {
		console.log("getBounds not supported on complex poly.");
	}
}
pD._ty=function(){return 'PolyDefault'}
function poly(){
	
	
	pD.clear = function () {				this.m_List.clear()}// Remove all of the points.  Creates an empty polygon.
	pD.isEmpty = function () {return this.m_List.isEmpty()}
	
	pD.addPoly = function (p) {
		/**
		 * Add an inner polygon to this polygon - assumes that adding polygon does not
		 * have any inner polygons.
		 * @throws IllegalStateException if the number of inner polygons is greater than
		 * zero and this polygon was designated a hole.  This would break the assumption
		 * that only simple polygons can be holes.
		 */
		
		
		var m_IsHole = this.m_IsHole, m_List = this.m_List;
		if ((m_List.size() > 0) && m_IsHole) {
			alert("ERROR : Cannot add polys to something designated as a hole.")}
		m_List.add(p)
	}
	
	pD.getInnerPoly = function (polyIndex) {return this.m_List.get(polyIndex) }	// Returns the polygon at this index.
	pD.getNumInnerPoly = function () {return this.m_List.size()}	//Returns the number of inner polygons - inner polygons are assumed to return one here.
	
}; poly()
function hole(){
	pD.isHole = function () {// Return true if this polygon is a hole.  Holes are assumed to be inner polygons of a more complex polygon.
		var m_List = this.m_List;
		var m_IsHole = this.m_IsHole;
		if (m_List.size() > 1) {
			alert("Cannot call on a poly made up of more than one poly.");
		}
		return m_IsHole;
	}
	pD.setIsHole = function (isHole) { // Set whether or not this polygon is a hole.  Cannot be called on a complex polygon.
		var m_List = this.m_List;
		if (m_List.size() > 1) {
			alert("Cannot call on a poly made up of more than one poly.");
		}
		this.m_IsHole = isHole;
	}
};hole()
function contrib(){
	pD.isContributing = function (polyIndex) { // Return true if the given inner polygon is contributing to the set operation. This method should NOT be used outside the Clip algorithm.
		var m_List = this.m_List;
		return (m_List.get(polyIndex)).isContributing(0);
	}
	pD.setContributing = function (polyIndex, contributes) { // Set whether or not this inner polygon is constributing to the set operation. This method should NOT be used outside the Clip algorithm.
		var m_List = this.m_List;
		if (m_List.size() != 1) {
			alert("Only applies to polys of size 1");
		}
		(m_List.get(polyIndex)).setContributing(0, contributes);
	}
};contrib()
function opers(){
	
	pD.intersection = function (p) {return Clip.intersection(p, this, "PolyDefault")}// Return a Poly that is the intersection of this polygon with the given polygon. The returned polygon could be complex.
	pD.union = function (p) {return Clip.union(p, this, "PolyDefault")}//could be complex, will be an instance of PolyDefault.
	pD.xor = function (p) {return Clip.xor(p, this, "PolyDefault")}//returned polygon could be complex.
	pD.difference = function (p) {return Clip.difference(p, this, "PolyDefault") }//   returned polygon could be complex.
	
};opers()
pD.getArea = function () {//in square units.
	var that = this
	var area = 0.0;
	for (var i = 0; i < that.getNumInnerPoly(); i++) {
		var p = that.getInnerPoly(i);
		var tarea = p.getArea() * (p.isHole() ? -1.0 : 1.0);
		area += tarea;
	}
	return area;
}
pD.toString = function () {
	var res = ""; var m_List = this.m_List;
	for (var i = 0; i < m_List.size(); i++) {
		var p = this.getInnerPoly(i);
		res += ("InnerPoly(" + i + ").hole=" + p.isHole());
		var points = []
		for (var j = 0; j < p.getNumPoints(); j++) {points.push(new Point(p.getX(j), p.getY(j)))}
		points = ArrayHelper.sortPointsClockwise(points);
		for (var k = 0; k < points.length; k++) { res += points[k].toString() }
	}
	return res;
}
function polygon(){
	
	gpcas.geometry.Polygon = function () {this.maxTop;this.maxBottom;this.maxLeft;this.maxRight;this.vertices}  /* of Point */;
	pg= gpcas.geometry.Polygon.prototype
	
	pg.fromArray = function (v) {
		this.vertices = [];
		for (var i = 0; i < v.length; i++) {
			var pointArr = v[i];
			this.vertices.push(new Point(pointArr[0], pointArr[1]));
		}
	}
	pg.normalize = function () {//Normalize vertices in polygon to be ordered clockwise from most left point*/
		var maxLeftIndex;
		var vertices = this.vertices;
		var newVertices = this.vertices;
		for (var i = 0; i < vertices.length; i++) {
			var vertex = vertices[i];
			if ((maxTop == null) || (maxTop.y > vertex.y) || ((maxTop.y == vertex.y) && (vertex.x < maxTop.x))) {
				maxTop = vertex;
			}
			if ((maxBottom == null) || (maxBottom.y < vertex.y) || ((maxBottom.y == vertex.y) && (vertex.x > maxBottom.x))) {
				maxBottom = vertex;
			}
			if ((maxLeft == null) || (maxLeft.x > vertex.x) || ((maxLeft.x == vertex.x) && (vertex.y > maxLeft.y))) {
				maxLeft = vertex;
				maxLeftIndex = i;
			}
			if ((maxRight == null) || (maxRight.x < vertex.x) || ((maxRight.x == vertex.x) && (vertex.y < maxRight.y))) {
				maxRight = vertex;
			}
		}
		if (maxLeftIndex > 0) {
			newVertices = [];
			var j = 0;
			for (var i = maxLeftIndex; i < vertices.length; i++) {
				newVertices[j++] = this.vertices[i];
			}
			for (var i = 0; i < maxLeftIndex; i++) {
				newVertices[j++] = this.vertices[i];
			}
			vertices = newVertices;
		}
		var reverse = false;
		for (var k = 0; k < this.vertices.length; k++) {
			var vertex = this.vertices[k];
			if (equals(vertex, maxBottom)) {
				reverse = true;
				break;
			} else if (equals(vertex, maxTop)) {
				break;
			}
		}
		if (reverse) {
			newVertices = [];
			newVertices[0] = vertices[0];
			var j = 1;
			for (var i = vertices.length - 1; i > 0; i--) {
				newVertices[j++] = this.vertices[i];
			}
			vertices = newVertices;
		}
	}
	pg.getVertexIndex = function (vertex) {
		for (var i = 0; i < this.vertices.length; i++) {
			if (equals(vertices[i], vertex)) {
				return i
			}
		}
		return -1;
	}
	pg.insertVertex = function (vertex1, vertex2, newVertex) {
		var vertex1Index = getVertexIndex(vertex1);
		var vertex2Index = getVertexIndex(vertex2);
		if ((vertex1Index == -1) || (vertex2Index == -1)) {
			return false
		}
		if (vertex2Index < vertex1Index) {
			var i = vertex1Index;
			vertex1Index = vertex2Index;
			vertex2Index = i;
		}
		if (vertex2Index == vertex1Index + 1) {
			var newVertices = [];
			for (var i = 0; i <= vertex1Index; i++) {
				newVertices[i] = this.vertices[i];
			}
			newVertices[vertex2Index] = newVertex;
			for (var i = vertex2Index; i < this.vertices.length; i++) {
				newVertices[i + 1] = this.vertices[i];
			}
			this.vertices = newVertices;
		} else if ((vertex2Index == vertices.length - 1) && (vertex1Index == 0)) {
			this.vertices.push(newVertex);
		}
		return true;
	}
	pg.clone = function () {
		var res = new Polygon();
		res.vertices = vertices.slice(this.vertices.length - 1);
		return res;
	}
	pg.toString = function () {
		var vertices = this.vertices;
		var res = "[";
		for (var i = 0; i < vertices.length; i++) {
			var vertex = vertices[i];
			res += (i > 0 ? "," : "") + "[" + vertex.x + "," + vertex.y + "]";
		}
		res += "]";
		return res;
	}
	
	gpcas.geometry.PolygonNode = function (next, x, y) {
		this.active;
		/* Active flag / vertex count        */
		this.hole;
		/* Hole / external contour flag      */
		this.v = [];
		/* Left and right vertex list ptrs   */
		this.next;
		/* Pointer to next polygon contour   */
		this.proxy;
		/* Pointer to actual structure used  */
		/* Make v[Clip.LEFT] and v[Clip.RIGHT] point to new vertex */
		var vn = new VertexNode(x, y);
		this.v[Clip.LEFT] = vn;
		this.v[Clip.RIGHT] = vn;
		this.next = next;
		this.proxy = this;
		/* Initialise proxy to point to p itself */
		this.active = 1; //TRUE
	}
	pgN = gpcas.geometry.PolygonNode.prototype
	pgN.add_right = function (x, y) {
		var nv = new VertexNode(x, y);
		/* Add vertex nv to the right end of the polygon's vertex list */
		this.proxy.v[Clip.RIGHT].next = nv;
		/* Update proxy->v[Clip.RIGHT] to point to nv */
		this.proxy.v[Clip.RIGHT] = nv;
	}
	pgN.add_left = function (x, y) {
		var proxy = this.proxy;
		var nv = new VertexNode(x, y);
		/* Add vertex nv to the left end of the polygon's vertex list */
		nv.next = proxy.v[Clip.LEFT];
		/* Update proxy->[Clip.LEFT] to point to nv */
		proxy.v[Clip.LEFT] = nv;
	}
}
polygon()
function polySimp(){
	// <code>PolySimple</code> is a simple polygon - contains only one inner polygon.
	// <strong>WARNING:</strong> This type of <code>Poly</code> cannot be used for an inner polygon that is a hole.
	gpcas.geometry.PolySimple = function () {
		/**
		 * The list of Point objects in the polygon.
		 */
		this.m_List = new ArrayList();
		/** Flag used by the Clip algorithm */
		this.m_Contributes = true;
	}
	ps = gpcas.geometry.PolySimple.prototype
	ps.equals = function (obj) {
		/**
		 * Return true if the given object is equal to this one.
		 * <strong>WARNING:</strong> This method failse if the first point
		 * appears more than once in the list.
		 */
		if (!(obj instanceof PolySimple)) {
			return false;
		}
		var that = obj;
		var this_num = this.m_List.size();
		var that_num = that.m_List.size();
		if (this_num != that_num) return false;
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		// !!! WARNING: This is not the greatest algorithm.  It fails if !!!
		// !!! the first point in "this" poly appears more than once.    !!!
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		if (this_num > 0) {
			var this_x = this.getX(0);
			var this_y = this.getY(0);
			var that_first_index = -1;
			for (var that_index = 0; (that_first_index == -1) && (that_index < that_num); that_index++) {
				var that_x = that.getX(that_index);
				var that_y = that.getY(that_index);
				if ((this_x == that_x) && (this_y == that_y)) {
					that_first_index = that_index;
				}
			}
			if (that_first_index == -1) return false;
			var that_index = that_first_index;
			for (var this_index = 0; this_index < this_num; this_index++) {
				this_x = this.getX(this_index);
				this_y = this.getY(this_index);
				var that_x = that.getX(that_index);
				var that_y = that.getY(that_index);
				if ((this_x != that_x) || (this_y != that_y)) return false;
				that_index++;
				if (that_index >= that_num) {
					that_index = 0;
				}
			}
		}
		return true;
	}
	ps.hashCode = function () {
		/**
		 * Return the hashCode of the object.
		 * <strong>WARNING:</strong>Hash and Equals break contract.
		 * @return an integer value that is the same for two objects
		 * whenever their internal representation is the same (equals() is true)
		 */
		
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		// !!! WARNING:  This hash and equals break the contract. !!!
		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		var result = 17;
		result = 37 * result + this.m_List.hashCode();
		return result;
	}
	ps.toString = function () {
		return "PolySimple: num_points=" + getNumPoints();
	}
	ps.add = function (arg0, arg1) {
		var args = [];
		args[0] = arg0;
		if (arg1) {
			args[1] = arg1;
		}
		if (args.length == 2) {
			this.addPointXY(args[0], args[1]);
		}
		else if (args.length == 1) {
			if (args[0] instanceof Point) {
				this.addPoint(args[0])
			}
			else if (args[0] instanceof Poly) {
				this.addPoly(args[0]);
			} else if (args[0] instanceof Array) {
				for (var k = 0; k < args[0].length; k++) {
					var val = args[0][k];
					this.add(val);
				}
			}
		}
	}
	ps.getArea = function () {
		/**
		 * Returns the area of the polygon.
		 * <p>
		 * The algorithm for the area of a complex polygon was take from
		 * code by Joseph O'Rourke author of " Computational Geometry in C".
		 */
		if (this.getNumPoints() < 3) {
			return 0.0
		}
		var ax = this.getX(0), ay = this.getY(0), area = 0.0
		for (var i = 1; i < (this.getNumPoints() - 1); i++) {
			var bx = this.getX(i);
			var by = this.getY(i);
			var cx = this.getX(i + 1);
			var cy = this.getY(i + 1);
			var tarea = ((cx - bx) * (ay - by)) - ((ax - bx) * (cy - by));
			area += tarea;
		}
		return 0.5 * Math.abs(area)
	}
	ps.getBounds = function () {
		var xmin = Number.MAX_VALUE;
		var ymin = Number.MAX_VALUE;
		var xmax = -Number.MAX_VALUE;
		var ymax = -Number.MAX_VALUE;
		for (var i = 0; i < this.m_List.size(); i++) {
			var x = this.getX(i);
			var y = this.getY(i);
			if (x < xmin) xmin = x;
			if (x > xmax) xmax = x;
			if (y < ymin) ymin = y;
			if (y > ymax) ymax = y;
		}
		return new Rectangle(xmin, ymin, (xmax - xmin), (ymax - ymin));
	}
	function point() {
		ps.addPointXY = function (x, y) {
			this.addPoint(new Point(x, y));
		}//to first inner polygon
		ps.addPoint = function (p) {
			this.m_List.add(p)
		}//to first inner poly
		// Return the number points of the first inner polygon
		ps.getNumPoints = function () {
			return this.m_List.size()
		}
		// Return  X/Y value of the point at the index in the first inner polygon
		ps.getX = function (index) {
			return (this.m_List.get(index)).x
		}
		ps.getY = function (index) {
			return (this.m_List.get(index)).y
		}
		ps.getPoint = function (index) {
			return (this.m_List.get(index))
		}
		ps.getPoints = function () {
			return this.m_List.toArray()
		}
		ps.isPointInside = function (point) {
			var points = this.getPoints();
			var j = points.length - 1;
			var oddNodes = false;
			for (var i = 0; i < points.length; i++) {
				if (points[i].y < point.y && points[j].y >= point.y ||
						points[j].y < point.y && points[i].y >= point.y) {
					if (points[i].x +
							(point.y - points[i].y) / (points[j].y - points[i].y) * (points[j].x - points[i].x) < point.x) {
						oddNodes = !oddNodes;
					}
				}
				j = i;
			}
			return oddNodes;
		}
	};
	point()
	function poly(){
		ps.clear = function () {
			this.m_List.clear();
		}	// Remove all of the points.  Creates an empty polygon.
		ps.addPoly = function (p) {
			alert("Cannot add poly to a simple poly.")
		}
		ps.isEmpty = function () {
			return this.m_List.isEmpty()
		}
		ps.getInnerPoly = function (polyIndex) {if (polyIndex != 0) {alert("PolySimple only has one poly")}; return this }
		ps.getNumInnerPoly = function () {return 1}
		
		
	};poly()
	function hole(){
		ps.isHole = function () {return false}// Always returns false since PolySimples cannot be holes.
		ps.setIsHole = function (isHole) {alert("PolySimple cannot be a hole")}
	};hole()
	function contrib(){
		ps.isContributing = function (polyIndex) {/**
		 * Return true if the given inner polygon is contributing to the set operation.
		 * This method should NOT be used outside the Clip algorithm.
		 *
		 * @throws IllegalStateException if <code>polyIndex != 0</code>
		 */
			if (polyIndex != 0) {
				alert("PolySimple only has one poly");
			}
			return this.m_Contributes;
		}
		
		ps.setContributing = function (polyIndex, contributes) {
			/**
			 * Set whether or not this inner polygon is constributing to the set operation.*
			 * This method should NOT be used outside the Clip algorithm.
			 * @throws IllegalStateException if <code>polyIndex != 0</code>
			 */
			if (polyIndex != 0) {
				alert("PolySimple only has one poly");
			}
			this.m_Contributes = contributes;
		}
	};contrib()
	function oper(){
		ps.intersection = function (p) {
			return Clip.intersection(this, p, "PolySimple");
		}//>> simple Poly
		
		
		ps.union = function (p) {return Clip.union(this, p, "PolySimple") }//>> simple poly
		
		ps.xor = function (p) {return Clip.xor(p, this, "PolySimple")}//>> simple poly
		
		ps.difference = function (p) {
			return Clip.difference(p, this, "PolySimple");
		}
	};oper()
	ps._ty = function () {
		return 'PolySimple'
	}
}
polySimp()
function rect(){
	
	gpcas.geometry.Rectangle = function (_x, _y, _w, _h) { this.x = _x; this.y = _y; this.w = _w; this.h = _h }
	rct=gpcas.geometry.Rectangle.prototype
	rct.getMaxY = function () {return this.y + this.h}
	rct.getMinY = function () {return this.y}
	rct.getMaxX = function () {return this.x + this.w}
	rct.getMinX = function () {return this.x}
	rct.toString = function () {
		return "[" + x.toString() + " " + y.toString() + " " + w.toString() + " " + h.toString() + "]";
	}
}
rect()