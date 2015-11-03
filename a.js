console.log('......\n...\n.\n\n\n'); require('./server/serverBoth'); $l(' - merge - \n');


$h = http = require('http');
$p = path = require('path');

$f = fs = require('fs')
$f.rd = function () {
    var $f = this, g = G(arguments)
    //(pt, fn)//$f.rdS=$f.readdirSync(pt)
    if (F(_.l(g))) {
        $f.readdir.apply($f, g);
        return $f
    }
    return $f.readdirSync.apply($f, g)
}
$f.rdE = function (pt, fn) {
    $f.rd(pt, function (z, fs) {
        _.e(fs, fn)
    })
}
$f.rmd = function () {
    var $f = this, g = G(arguments) //(pt)
    if (F(_.l(g))) {
        $f.rmdir.apply($f, g);
        return $f
    }
    return $f.rmdirSync.apply($f, g)
}
$f.mkd = function () {
    var $f = this, g = G(arguments) // (pt [mode])
    if (F(_.l(g))) {
        $f.mkdir.apply($f, g);
        return $f
    }
    return $f.mkdirSync.apply($f, g)
}
$f.r = function () {
    var $f = this, g = G(arguments)//(fd,bf,offset,len,pos)
    if (F(_.l(g))) {
        $f.read.apply($f, g);
        return $f
    }
    return $f.readSync.apply($f, g)
}
$f.rF = function (f, op, fn) {
    var $f = this, g = G(arguments)
    if (F(_.l(g))) {
        $f.readFile.apply($f, g);
        return $f
    }
    return $f.readFileSync.apply($f, g)
}
$f.u8 = $f.rUF = function (js, fn) {
    this.rF(js, 'utf8', fn)
}
$f.rBF = $f.bn = function (a, fn) {
    this.rF(a, 'binary', fn)
}
$f.o = function () {
    var $f = this, g = G(arguments) //(pt, flags[, mode], fn)
    if (F(_.l(g))) {
        $f.open.apply($f, g);
        return $f
    }
    return $f.openSync.apply($f, g)
}
$f.cl = function () {
    var $f = this, g = G(arguments) //(fd, fn)//$f.clS=$f.closeSync(fd)
    if (F(_.l(g))) {
        $f.close.apply($f, g);
        return $f
    }
    return $f.closeSync.apply($f, g)
}
$f.ut = $f.utimes//(pt, atime, mtime, fn)//$f.utS=$f.utimesSync(pt, atime, mtime)
$f.fut = $f.futimes//(fd, atime, mtime, fn)//$f.futS=$f.futimesSync(fd, atime, mtime)
$f.fs = $f.fsync//(fd, fn)//$f.fsS=$f.fsyncSync(fd)


require('./server/expressApp')(__dirname)
require('./server/database')
require('./server/middleware')
require('./routing')(__dirname)




$hS = $h.createServer($a)
$hS.listen(80, function(){
	/*
	var site=false;  //site = 'wap/fullnb'
    if(site){
        $l('requiring.. ' + site)
       require('child_process').spawn('open', [
           'http://localhost/' +  site
       ]) }
	*/
    $l('\n SPAAAAAAAZ on port 80 <-\n')
})
require('./server/serverSockets')


 
