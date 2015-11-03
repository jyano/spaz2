rayDocs = function () {
//RayCast(fn, startV, endV)  -> undefined
//Ray-cast the world for all fixtures in the path of the ray.
//Your callback Controls whether you get the closest point, any point, or n-points

//The ray-cast ignores shapes that contain the starting point
//fn -> function Callback(f, initInterNormV, normAtInterFracPtV, fracLenAlongRayInterN)
//Callback should return the new length of the ray as a fraction of the original length.
// By returning 0, you immediately terminate.
// By returning 1, you continue wiht the original ray.
// By returning the current fraction, you proceed to find the closest point.
//RayCastAll(v1, v2) -> v
//RayCastOne(v1, v2) -> f
// w.RayCast(b2RayCastOutput* output,  const b2RayCastInput& input)
//raycast input
//   The ray extends from p1 to p1 + maxFraction * (p2 - p1).
//    b2RayCastInput= {V1, V2, maxFraction}
// The points V1 and V2 are used to define a direction for the ray,
//  and the maxFraction specifies how far along the ray should be checked
// for an intersection.
// The following image may make this clearer
// . A maxFraction of 1 simply means the segment from p1 to p2, which in this case would not intersect the shape, but a maxFraction of 2 would. Raycasting And here is what a b2RayCastOutput contains:
// Ray-cast output data. The ray hits at p1 + fraction * (p2 - p1), where p1 and p2
// come from b2RayCastInput.
// b2RayCastOutput={normal,  fraction }
	/*
	 If the ray does intersect the shape,
	 b2Fixture::RayCast will return true and we can look in the output
	 struct to find the actual fraction of the intersect point,
	 and the normal of the fixture 'surface' at that point: Raycasting
	
	 Now we need a ray to cast against these shapes. Let's make a ray starting from the center of the screen and going outward, and rotating slowly around. The only state we need to keep for this is the current angle, so instead of making a special class for it, we'll just keep a variable at global scope.
	 */
}