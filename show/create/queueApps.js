QU=QUEUE = function () {
	z()
	s = $St(500)
	queue = new cjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest([
		{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}
	])
	function handleComplete() {
		image = queue.getResult("myImage")
		s.A($Bm(image))
	}
}

MF = function () {
	W().C('r')
	
	Q(['me', 'guy', 'chicks', 'sun'], function () {
		w.C('g')
		w.i.A(
		Q.b('me'), 
		Q.b('guy')
		)
	})
}

QUEUEMUG = QM = function () {
	z()
	s = $St(500, 500)
	Q([{id: "mug", src: "/myMug"}],
			function () {
				mug = $Bm($.i(Q.i('mug'))).dg()
				s.A(mug)
				})
}

TXWQ=function(){//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
	WQ({}, worldRdy)
	function worldRdy(){var me, guy
		w.C('p') // <- WQ({C:'r'})
		w.i.A(Q.b('sun'), Q.b('guy'))
		me = w.i.qB("me")
		me.drag() } }
//by calling W()._(fn)
// basic manifest will load and your function will get w passsed in
// when it is called (when ready)
// to get an image : // var me = w.i.qB("me")

QU3=function(){Q([{src:'/me.png',id:'me'}],function(){$.A(Q.i('me'))})}
QU2=function(){Q(['me'],function(){$.A(Q.i('me'))})}
QU1=function(){Q('me',function(){$.A(Q.i('me'))})}

