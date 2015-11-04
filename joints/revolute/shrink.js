w.shrink = shrink = function (jts) {
	jts = jts || ropeJoints
	_.e(jts, function (j) {
		j.shrink()
	})
}
