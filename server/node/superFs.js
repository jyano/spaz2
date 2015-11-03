$l('entering file..')

$f = fs = require('fs')
$f.rd=function(){var $f=this, g=G(arguments)
    //(pt, fn)//$f.rdS=$f.readdirSync(pt)
    if(F(_.l(g))){$f.readdir.apply($f,g); return $f}
    return $f.readdirSync.apply($f,g)}
$f.rdE = function (pt, fn) {
    $f.rd(pt, function (z, fs) {
        _.e(fs, fn)
    })
}
$f.rmd=function(){var $f=this, g=G(arguments) //(pt)
    if(F(_.l(g))){$f.rmdir.apply($f,g); return $f}
    return $f.rmdirSync.apply($f,g)}
$f.mkd=function(){var $f=this, g=G(arguments) // (pt [mode])
    if(F(_.l(g))){$f.mkdir.apply($f,g); return $f}
    return $f.mkdirSync.apply($f,g)}
$f.r=function(){var $f=this, g=G(arguments)//(fd,bf,offset,len,pos)
    if(F(_.l(g))){$f.read.apply($f,g); return $f}
    return $f.readSync.apply($f, g)}
$f.rF=function(f,op,fn){var $f=this, g=G(arguments)
    if(F(_.l(g))){$f.readFile.apply($f,g); return $f}
    return $f.readFileSync.apply($f, g)}
$f.u8=  $f.rUF= function(js, fn){this.rF(js, 'utf8', fn)}
$f.rBF=  $f.bn=function(a,fn){this.rF(a,'binary',fn)}
$f.o=function(){var $f=this, g=G(arguments) //(pt, flags[, mode], fn)
    if(F(_.l(g))){$f.open.apply($f,g); return $f}
    return $f.openSync.apply($f, g)
}
$f.cl=function(){var $f=this, g=G(arguments) //(fd, fn)//$f.clS=$f.closeSync(fd)
    if(F(_.l(g))){$f.close.apply($f,g); return $f}
    return $f.closeSync.apply($f, g)
}
$f.ut= $f.utimes//(pt, atime, mtime, fn)//$f.utS=$f.utimesSync(pt, atime, mtime)
$f.fut= $f.futimes//(fd, atime, mtime, fn)//$f.futS=$f.futimesSync(fd, atime, mtime)
$f.fs= $f.fsync//(fd, fn)//$f.fsS=$f.fsyncSync(fd)


function baser(){
    fs=q('fs')

    fs.o=fs.open
    fs.c=fs.close

    fs.r=fs.read


    fs.w=fs.write
    fs.n=fs.rename
    fs.D=fs.rmdir
    fs.d=fs.mkdir
    fs.rd=fs.readdir



    fs.e=fs.exists
    fs.l=fs.link

    fs.ul=fs.unlink



    fs.rf=fs.readFile
    fs.wf=fs.writeFile
    fs.a=fs.appendFile

    fs.w=fs.watch
    fs.wf=fs.watchFile
    fs.uw=fs.unwatchFile
    fs.FSW=fs.FSWatcher

    fs.s=fs.stat
    fs.fs=fs.fstat
    fs.S=fs.Stats

    fs.t=fs.truncate
    fs.ft=fs.ftruncate

    fs.ls=fs.lstat

    fs.sl=fs.symlink
    fs.rl=fs.readlink

    fs.rp=fs.realpath

    fs.fS=fs.fsync

    fs.RS=fs.ReadStream
    fs.RS=fs.createReadStream
    fs.WS=fs.WriteStream
    fs.cWS=fs.createWriteStream
    fs.m=fs.chmod
    fs.fm=fs.fchmod
    fs.lm=fs.lchmod
    fs.ch=fs.chown
    fs.fch=fs.fchown
    fs.lchS=fs.lchown
    fs.ut=fs.utimes//timestamp
    fs.fut=fs.futimes
    fs.lS=fs.linkSync
    fs.lmS=fs.lchmodSync
    fs.sS=fs.statSync
    fs.lsS=fs.lstatSync
    fs.fsS=fs.fstatSync
    fs.slS=fs.symlinkSync
    fs.rlS=fs.readlinkSync
    fs.rpS=fs.realpathSync
    fs.ulS=fs.unlinkSync
    fs.xdS=fs.rmdirSync
    fs.utS=fs.utimesSync
    fs.mdS=fs.mkdirSync
    fs.rdS=fs.readdirSync
    fs.futS=fs.futimesSync
    fs.fsS=fs.fsyncSync
    fs.rS=fs.readSync
    fs.rfS=fs.readFileSync
    fswfS.=fs.writeFileSync
    fs.eS=fs.existsSync
    fs.chS=fs.chownSync
    fs.fchS=fs.fchownSync
    fs.cS=fs.closeSync
    fs.oS=fs.openSync
    fs.wS=fs.writeSync
    fs.lchS=fs.lchownSync
    fs.rnS=fs.renameSync
    fs.aS=fs.appendFileSync
    fs.ftS=fs.ftruncateSync
    fs.tS=fs.truncateSync
    fs.mS=fs.chmodSync
    fs.fmS=fs.fchmodSync
}
var $f =require('fs')


dir=function(){
    $f.rd=function(){var $f=this, g=G(arguments)
     //(pt, fn)//$f.rdS=$f.readdirSync(pt)
        if(F(_.l(g))){$f.readdir.apply($f,g); return $f}
        return $f.readdirSync.apply($f,g)}
    $f.rdE = function (pt, fn) {
        $f.rd(pt, function (z, fs) {
            _.e(fs, fn)
        })
    }
    $f.rmd=function(){var $f=this, g=G(arguments) //(pt)
        if(F(_.l(g))){$f.rmdir.apply($f,g); return $f}
        return $f.rmdirSync.apply($f,g)}
    $f.mkd=function(){var $f=this, g=G(arguments) // (pt [mode])
        if(F(_.l(g))){$f.mkdir.apply($f,g); return $f}
        return $f.mkdirSync.apply($f,g)}
};dir()


read=function(){
    $f.r=function(){var $f=this, g=G(arguments)//(fd,bf,offset,len,pos)
        if(F(_.l(g))){$f.read.apply($f,g); return $f}
        return $f.readSync.apply($f, g)}
    $f.rF=function(f,op,fn){var $f=this, g=G(arguments)
        if(F(_.l(g))){$f.readFile.apply($f,g); return $f}
        return $f.readFileSync.apply($f, g)}
    $f.u8=  $f.rUF= function(js, fn){this.rF(js, 'utf8', fn)}
    $f.rBF=  $f.bn=function(a,fn){this.rF(a,'binary',fn)}

};read()
stat=function(){
$f.st= $f.sS= function(f){


//stat() stats the file pointed to by
// path and fills in buf.

    var s= $f.statSync(f)
    s.f= s.iF = s.isFile
    s.d= s.iD = s.isDirectory
    s.bD=  s.iBD  = s.isBlockDevice
    s.cD=  s.iCD  = s.isCharacterDevice
    s.sL= s.iSL  = s.isSymbolicLink // (only valid with fs.lstat())
    s.F=s.iFF  = s.isFIFO
    s.s= s.iS  = s.isSocket
    return s
}
$f.iD=function(f){return this.sS(f).isDirectory()}
$f.iF=function(f){return this.sS(f).isFile()}
$f.st=$f.stat(pt, fn)//$f.stS=$f.statSync(pt)
$f.lSt=$f.lstat(pt, fn)//$f.lStS=$f.lstatSync(pt)
$f.fSt=$f.fstat(fd, fn)//$f.fStS=$f.fstatSync(fd)

};stat()

$f.o=function(){var $f=this, g=G(arguments) //(pt, flags[, mode], fn)
    if(F(_.l(g))){$f.open.apply($f,g); return $f}
    return $f.openSync.apply($f, g)
}
$f.cl=function(){var $f=this, g=G(arguments) //(fd, fn)//$f.clS=$f.closeSync(fd)
    if(F(_.l(g))){$f.close.apply($f,g); return $f}
    return $f.closeSync.apply($f, g)
}


fileSecurity=function(){

    //chown: change owner and group of a file
    $f.ow=$f.chown//(pt, uid, gid, fn)//$f.owS=$f.chownSync(pt, uid, gid)
    $f.fOw=$f.fchown//(fd, uid, gid, fn)//$f.fOwS=$f.fchownSync(fd, uid, gid)
    $f.lOw=$f.lchown//(pt, uid, gid, fn)//$f.lOwS=$f.lchownSync(pt, uid, gid)

//chmod: change permissions
    $f.m=$f.chmod//(pt, mode, fn)//$f.mS=$f.chmodSync(pt, mode)
    $f.fM=$f.fchmod(fd, mode, fn)//$f.fMS=$f.fchmodSync(fd, mode)
    $f.lM=$f.lchmod(pt, mode, fn)//$f.lMS=$f.lchmodSync(pt, mode)

};fileSecurity()
linkPath=function() {
    $f.l = $f.link(srcpt, dstpt, fn)//$f.lS=$f.linkSync(srcpt, dstpt)
    $f.sL = $f.symlink(srcpt, dstpt[, type
    ],
    fn
    )//$f.sLS=$f.symlinkSync(srcpt, dstpt[, type])

//readlink: prints val of symbolic link or canonical file name
    $f.rL = $f.readlink//(pt, fn)//$f.rLS=$f.readlinkSync//(pt)
    $f.rp = $f.realpath//(pt[, cache], fn)//$f.rpS=$f.realpathSync//(pt[, cache])
    $f.ul = $f.unlink//(pt, fn)//$f.ulS=$f.unlinkSync//(pt)

};linkPath()
$f.ut=$f.utimes//(pt, atime, mtime, fn)//$f.utS=$f.utimesSync(pt, atime, mtime)
$f.fut=$f.futimes//(fd, atime, mtime, fn)//$f.futS=$f.futimesSync(fd, atime, mtime)
$f.fs=$f.fsync//(fd, fn)//$f.fsS=$f.fsyncSync(fd)

write=function(){
    $f.w=$f.write//(fd, buffer, offset, length[, position], fn)
       $f.=$f.write(fd, data[, position[, encoding]], fn)
      $f.wS=$f.writeSync(fd, buffer, offset, length[, position])
      $f.=$f.writeSync//(fd, data[, position[, encoding]])
    $f.wF=$f.writeFile//(filename, data[, op], fn)
     $f.wFS=$f.writeFileSync//(filename, data[, op])
    $f.aF=$f.appendFile//(filename, data[, op], fn)
     $f.aFS=$f.appendFileSync//(filename, data[, op])

    $f.fTc=$f.ftruncate//(fd, len, fn)
    $f.fTcS=$f.ftruncateSync(fd, len)

    $f.tc=$f.truncate//(pt, len, fn)
    $f.tcS=$f.truncateSync(pt, len)

    $f.rn=$f.rename//(oldPt, newPt, fn)
    $f.rnS=$f.renameSync(oldPt, newPt)

};write()


watch=function(){

    $f.wF=$f.watchFile//(filename[, op], listener)
    $f.uwF=$f.unwatchFile//(filename[, listener])
    $f.wa=$f.watch(//filename[, op][, listener])

};watch()


    module.exports =   $f

//Caveats
//Availability
//Filename Argument
//$f.exists(pt, fn)
//$f.existsSync(pt)
//$f.access(pt[, mode], fn)
//$f.accessSync(pt[, mode])
//Class: $f.Stats
//Stat Time Values
//$f.createReadStream(pt[, op])
//Class: $f.ReadStream
//Event: 'open'
//$f.createWriteStream(pt[, op])
//Class: $f.WriteStream
//Event: 'open'
//file.bytesWritten
//Class: $f.FSWatcher
//watcher.close()
//Event: 'change'
//Event: 'error'







//  lstat() is identical to stat(),
// except that if path is a symbolic link,
//  then the link itself is stat-ed,
// not the file that it refers to.
//fstat()  is  identical to stat(),
// except that the file to be stat-ed is
//specified by the file descriptor fd.

examp=function() {


//ex  get !recur  dir  listing
    dirListing = function () {

        p = "../"

        $f.rd(p, function (z, fls) {

            fls.map(function (f) {
                return $p.j(p, f)
            })
                .filter(function (f) {
                    return $f.iF(f)
                })
                .forEach(function (f) {
                    $l(f + '(' + $p.x(f) + ')')
                })
        })

// We could also easily use the Array.filter()
// method to filter the file array by the fi
// le extension if we only wanted to interate over
// .js/.json files or .png files,
// or instead we could use the fs.stats class’
// isDirectory() method to
// recursively get the nested directory structure.

    }

//ex: send static file
    $s = $h.s(function (q, p) {
        $p.ex(
            f = $p.j(process.cwd(), $u.pN(q.url)),
            function (ex) {
                return ex ? exists(f) : doesnt()
            })
        //just one function
// and it only runs under one condition:
// if a certain file exists
// so it checks..
        function exists(f) {
            // and if it does..
            // it checks it its a directory
            if ($f.iD(f)) {
                //and if it is..
                // then it looks looks for the index html IN that dir
                f += '/index.html'
            }
            $f.bn(f, function (z, f) {
                //so now it has a file and so it
                // writes a 200 header
                // //and writes the file OUT to binary
                // and ends (sends)
                p.wHwBE(200, f)
            })
        }

        function doesnt() {
            p.wH(404, txPl).w(z4).e();
            return
        }
    })


    exAjaxUpload = function () {

        // https://codeforgeek.com/2014/11/ajax-file-upload-node-js/

        //  Recommended read : File uploads using node.js

        server = function () {

            multer = $q('multer')
            done = false
            $a.u(
                multer({
                    dest: './uploads/',
                    rename: function (fieldN, flN) {
                        return flN + Date.now()
                    },

                    onFileUploadStart: function (fl) {
                        $l(fl.originalname + ' is starting ...')
                    },
                    onFileUploadComplete: function (fl) {
                        $l(file.fieldname + ' uploaded to  ' + fl.path);
                        done = true
                    }
                }))
            $a.g('/', function (q, p) {
                p.fl("index.html")
            }) //sendFile
            $a.po('/api/photo', function (q, p) {
                if (done == true) {
                    $l(q.files);
                    p.e("File uploaded.")
                }
            })


        }
        client = function () {

            /*

             <form id="uploadForm"
             enctype="multipart/form-data"
             action="/api/photo"
             method="post">
             <input type="file" name="userPhoto" />
             <input type="submit" value="Upload Image" name="submit">
             </form>

             $('#uploadForm').submit(function() {
             $(this).ajaxSubmit({
             error: function(xhr) { status('Error: ' + xhr.status) },
             success: function(response) { $l(response) } })
             return false  // disable the page refresh.

             })



             On Form submit,
             we will stop the page refresh by returning FALSE
             and call the API using ajaxSubmit().
             Add this code in separate file and add it below the jquery.form
             or copy and paste just below this line

             Ajax always provides richness to web $alication.
             jQuery.form is one of the stable and popular library.
             Multer takes care of handling multipart data
             and provides ease to implementation.


             */
        }

    }
}

function fsjs(){
	fs=q('fs')
	fs.o=fs.open
	fs.c=fs.close
	fs.r=fs.read
	fs.w=fs.write
	fs.n=fs.rename
	fs.D=fs.rmdir
	fs.d=fs.mkdir
	fs.rd=fs.readdir
	fs.e=fs.exists
	fs.l=fs.link
	fs.ul=fs.unlink
	fs.rf=fs.readFile
	fs.wf=fs.writeFile
	fs.a=fs.appendFile
	fs.w=fs.watch
	fs.wf=fs.watchFile
	fs.uw=fs.unwatchFile
	fs.FSW=fs.FSWatcher
	fs.s=fs.stat
	fs.fs=fs.fstat
	fs.S=fs.Stats
	fs.t=fs.truncate
	fs.ft=fs.ftruncate
	fs.ls=fs.lstat
	fs.sl=fs.symlink
	fs.rl=fs.readlink
	fs.rp=fs.realpath
	fs.fS=fs.fsync
	fs.RS=fs.ReadStream
	fs.RS=fs.createReadStream
	fs.WS=fs.WriteStream
	fs.cWS=fs.createWriteStream
	fs.m=fs.chmod
	fs.fm=fs.fchmod
	fs.lm=fs.lchmod
	fs.ch=fs.chown
	fs.fch=fs.fchown
	fs.lchS=fs.lchown
	fs.ut=fs.utimes//timestamp
	fs.fut=fs.futimes
	fs.lS=fs.linkSync
	fs.lmS=fs.lchmodSync
	fs.sS=fs.statSync
	fs.lsS=fs.lstatSync
	fs.fsS=fs.fstatSync
	fs.slS=fs.symlinkSync
	fs.rlS=fs.readlinkSync
	fs.rpS=fs.realpathSync
	fs.ulS=fs.unlinkSync
	fs.xdS=fs.rmdirSync
	fs.utS=fs.utimesSync
	fs.mdS=fs.mkdirSync
	fs.rdS=fs.readdirSync
	fs.futS=fs.futimesSync
	fs.fsS=fs.fsyncSync
	fs.rS=fs.readSync
	fs.rfS=fs.readFileSync
	fswfS.=fs.writeFileSync
	fs.eS=fs.existsSync
	fs.chS=fs.chownSync
	fs.fchS=fs.fchownSync
	fs.cS=fs.closeSync
	fs.oS=fs.openSync
	fs.wS=fs.writeSync
	fs.lchS=fs.lchownSync
	fs.rnS=fs.renameSync
	fs.aS=fs.appendFileSync
	fs.ftS=fs.ftruncateSync
	fs.tS=fs.truncateSync
	fs.mS=fs.chmodSync
	fs.fmS=fs.fchmodSync
	var $f=require('fs')
	dir=function(){
		$f.rd=function(){
			var $f=this,g=G(arguments)
			//(pt, fn)//$f.rdS=$f.readdirSync(pt)
			if(F(_.l(g))){
				$f.readdir.apply($f,g);
				return $f
			}
			return $f.readdirSync.apply($f,g)
		}
		$f.rdE=function(pt,fn){
			$f.rd(
				pt,function(z,fs){
					_.e(fs,fn)
				}
			)
		}
		$f.rmd=function(){
			var $f=this,g=G(arguments) //(pt)
			if(F(_.l(g))){
				$f.rmdir.apply($f,g);
				return $f
			}
			return $f.rmdirSync.apply($f,g)
		}
		$f.mkd=function(){
			var $f=this,g=G(arguments) // (pt [mode])
			if(F(_.l(g))){
				$f.mkdir.apply($f,g);
				return $f
			}
			return $f.mkdirSync.apply($f,g)
		}
	};
	dir()
	read=function(){
		$f.r=function(){
			var $f=this,g=G(arguments)//(fd,bf,offset,len,pos)
			if(F(_.l(g))){
				$f.read.apply($f,g);
				return $f
			}
			return $f.readSync.apply($f,g)
		}
		$f.rF=function(f,op,fn){
			var $f=this,g=G(arguments)
			if(F(_.l(g))){
				$f.readFile.apply($f,g);
				return $f
			}
			return $f.readFileSync.apply($f,g)
		}
		$f.u8=$f.rUF=function(js,fn){this.rF(js,'utf8',fn)}
		$f.rBF=$f.bn=function(a,fn){this.rF(a,'binary',fn)}
	};
	read()
	stat=function(){
		$f.st=$f.sS=function(f){
			
			
			//stat() stats the file pointed to by
			// path and fills in buf.
			var s=$f.statSync(f)
			s.f=s.iF=s.isFile
			s.d=s.iD=s.isDirectory
			s.bD=s.iBD=s.isBlockDevice
			s.cD=s.iCD=s.isCharacterDevice
			s.sL=s.iSL=s.isSymbolicLink // (only valid with fs.lstat())
			s.F=s.iFF=s.isFIFO
			s.s=s.iS=s.isSocket
			return s
		}
		$f.iD=function(f){return this.sS(f).isDirectory()}
		$f.iF=function(f){return this.sS(f).isFile()}
		$f.st=$f.stat(pt,fn)//$f.stS=$f.statSync(pt)
		$f.lSt=$f.lstat(pt,fn)//$f.lStS=$f.lstatSync(pt)
		$f.fSt=$f.fstat(fd,fn)//$f.fStS=$f.fstatSync(fd)
	};
	stat()
	$f.o=function(){
		var $f=this,g=G(arguments) //(pt, flags[, mode], fn)
		if(F(_.l(g))){
			$f.open.apply($f,g);
			return $f
		}
		return $f.openSync.apply($f,g)
	}
	$f.cl=function(){
		var $f=this,g=G(arguments) //(fd, fn)//$f.clS=$f.closeSync(fd)
		if(F(_.l(g))){
			$f.close.apply($f,g);
			return $f
		}
		return $f.closeSync.apply($f,g)
	}
	fileSecurity=function(){
		
		//chown: change owner and group of a file
		$f.ow=$f.chown//(pt, uid, gid, fn)//$f.owS=$f.chownSync(pt, uid, gid)
		$f.fOw=$f.fchown//(fd, uid, gid, fn)//$f.fOwS=$f.fchownSync(fd, uid, gid)
		$f.lOw=$f.lchown//(pt, uid, gid, fn)//$f.lOwS=$f.lchownSync(pt, uid, gid)
		//chmod: change permissions
		$f.m=$f.chmod//(pt, mode, fn)//$f.mS=$f.chmodSync(pt, mode)
		$f.fM=$f.fchmod(fd,mode,fn)//$f.fMS=$f.fchmodSync(fd, mode)
		$f.lM=$f.lchmod(pt,mode,fn)//$f.lMS=$f.lchmodSync(pt, mode)
	};
	fileSecurity()
	linkPath=function(){
		$f.l=$f.link(srcpt,dstpt,fn)//$f.lS=$f.linkSync(srcpt, dstpt)
		$f.sL=$f.symlink(srcpt,dstpt[,type
		],
		fn
		)//$f.sLS=$f.symlinkSync(srcpt, dstpt[, type])
		//readlink: prints val of symbolic link or canonical file name
		$f.rL=$f.readlink//(pt, fn)//$f.rLS=$f.readlinkSync//(pt)
		$f.rp=$f.realpath//(pt[, cache], fn)//$f.rpS=$f.realpathSync//(pt[, cache])
		$f.ul=$f.unlink//(pt, fn)//$f.ulS=$f.unlinkSync//(pt)
	};
	linkPath()
	$f.ut=$f.utimes//(pt, atime, mtime, fn)//$f.utS=$f.utimesSync(pt, atime, mtime)
	$f.fut=$f.futimes//(fd, atime, mtime, fn)//$f.futS=$f.futimesSync(fd, atime, mtime)
	$f.fs=$f.fsync//(fd, fn)//$f.fsS=$f.fsyncSync(fd)
	write=function(){
		$f.w=$f.write//(fd, buffer, offset, length[, position], fn)
		$f.=$f.write(fd,data[,position[,encoding
		]],
		fn
		)
		$f.wS=$f.writeSync(fd,buffer,offset,length[,position
		])
		$f.=$f.writeSync//(fd, data[, position[, encoding]])
		$f.wF=$f.writeFile//(filename, data[, op], fn)
		$f.wFS=$f.writeFileSync//(filename, data[, op])
		$f.aF=$f.appendFile//(filename, data[, op], fn)
		$f.aFS=$f.appendFileSync//(filename, data[, op])
		$f.fTc=$f.ftruncate//(fd, len, fn)
		$f.fTcS=$f.ftruncateSync(fd,len)
		$f.tc=$f.truncate//(pt, len, fn)
		$f.tcS=$f.truncateSync(pt,len)
		$f.rn=$f.rename//(oldPt, newPt, fn)
		$f.rnS=$f.renameSync(oldPt,newPt)
	};
	write()
	watch=function(){
		$f.wF=$f.watchFile//(filename[, op], listener)
		$f.uwF=$f.unwatchFile//(filename[, listener])
		$f.wa=$f.watch(//filename[, op][, listener])
	};
	watch()
	module.exports=$f
	//Caveats
	//Availability
	//Filename Argument
	//$f.exists(pt, fn)
	//$f.existsSync(pt)
	//$f.access(pt[, mode], fn)
	//$f.accessSync(pt[, mode])
	//Class: $f.Stats
	//Stat Time Values
	//$f.createReadStream(pt[, op])
	//Class: $f.ReadStream
	//Event: 'open'
	//$f.createWriteStream(pt[, op])
	//Class: $f.WriteStream
	//Event: 'open'
	//file.bytesWritten
	//Class: $f.FSWatcher
	//watcher.close()
	//Event: 'change'
	//Event: 'error'
	//  lstat() is identical to stat(),
	// except that if path is a symbolic link,
	//  then the link itself is stat-ed,
	// not the file that it refers to.
	//fstat()  is  identical to stat(),
	// except that the file to be stat-ed is
	//specified by the file descriptor fd.
	examp=function(){
		
		
		//ex  get !recur  dir  listing
		dirListing=function(){
			p="../"
			$f.rd(
				p,function(z,fls){
					fls.map(
						function(f){
							return $p.j(p,f)
						}
					)
						.filter(
						function(f){
							return $f.iF(f)
						}
					)
						.forEach(
						function(f){
							$l(f+'('+$p.x(f)+')')
						}
					)
				}
			)
			// We could also easily use the Array.filter()
			// method to filter the file array by the fi
			// le extension if we only wanted to interate over
			// .js/.json files or .png files,
			// or instead we could use the fs.stats class’
			// isDirectory() method to
			// recursively get the nested directory structure.
		}
		//ex: send static file
		$s=$h.s(
			function(q,p){
				$p.ex(
					f=$p.j(process.cwd(),$u.pN(q.url)),
					function(ex){
						return ex?exists(f):doesnt()
					}
				)
				//just one function
				// and it only runs under one condition:
				// if a certain file exists
				// so it checks..
				function exists(f){
					// and if it does..
					// it checks it its a directory
					if($f.iD(f)){
						//and if it is..
						// then it looks looks for the index html IN that dir
						f+='/index.html'
					}
					$f.bn(
						f,function(z,f){
							//so now it has a file and so it
							// writes a 200 header
							// //and writes the file OUT to binary
							// and ends (sends)
							p.wHwBE(200,f)
						}
					)
				}
				
				function doesnt(){
					p.wH(404,txPl).w(z4).e();
					return
				}
			}
		)
		exAjaxUpload=function(){
			
			// https://codeforgeek.com/2014/11/ajax-file-upload-node-js/
			//  Recommended read : File uploads using node.js
			server=function(){
				multer=$q('multer')
				done=false
				$a.u(
					multer(
						{
							dest:'./uploads/',
							rename:function(fieldN,flN){
								return flN+Date.now()
							},
							onFileUploadStart:function(fl){
								$l(fl.originalname+' is starting ...')
							},
							onFileUploadComplete:function(fl){
								$l(file.fieldname+' uploaded to  '+fl.path);
								done=true
							}
						}
					)
				)
				$a.g(
					'/',function(q,p){
						p.fl("index.html")
					}
				) //sendFile
				$a.po(
					'/api/photo',function(q,p){
						if(done==true){
							$l(q.files);
							p.e("File uploaded.")
						}
					}
				)
			}
			client=function(){
				
				/*
	
				 <form id="uploadForm"
				 enctype="multipart/form-data"
				 action="/api/photo"
				 method="post">
				 <input type="file" name="userPhoto" />
				 <input type="submit" value="Upload Image" name="submit">
				 </form>
	
				 $('#uploadForm').submit(function() {
				 $(this).ajaxSubmit({
				 error: function(xhr) { status('Error: ' + xhr.status) },
				 success: function(response) { $l(response) } })
				 return false  // disable the page refresh.
	
				 })
	
	
	
				 On Form submit,
				 we will stop the page refresh by returning FALSE
				 and call the API using ajaxSubmit().
				 Add this code in separate file and add it below the jquery.form
				 or copy and paste just below this line
	
				 Ajax always provides richness to web $alication.
				 jQuery.form is one of the stable and popular library.
				 Multer takes care of handling multipart data
				 and provides ease to implementation.
	
	
				 */
			}
		}
	}
	function examp1(){
		//1. read a file, display its contents
		$f.rF(
			'data.txt',function(z,d){
				if(d){
					$l(d.toString('utf8'))
				}
			}
		) //  resulting file data as a binary buffer array  data.
		$f.wF('data2.txt','Hello!',fn) // write to file
		//    3. read  given dir lc's file list, display flNs
		$f.rd(
			'.', //cur working dir
			function(z,fls){
				for(var ix in fls){  //  array of filenames stored in files
					$l(fls[ix])//iter [flN] and display each flN
				}
			}
		)
		//5.   get certain attributes of a given file
		// such as whether or not it is a file or a directory,
		// and you want to be able to set certain attributes
		// such as the file’s name or the file’s permissions.
		$f.st(
			'data.txt',   //    obtain  infor  about a given file ‘data.txt’
			function(z,s){ // (err, stats)
				// display   whether the given file is a file or a dir
				if(s.iF()){
					$l('It\'s file!')
				}else
					if(s.iD()){
						$l('It\'s dir!')
					}
				//   step through each non-function member of the stats object
				for(var i in s){
					
					
					// display what that member field’s name is and what value it contains
					// (including detailed file info)
					// such as creation date, modified date, file size..
					if(!F(s[i])){
						$l(i+'\t='+s[i])
					}
				}
			}
		)
		$f.rn('data2.txt','data2_new.txt',fn)
		$f.m('data3.txt','0777',fn)// chmod// all read-write-execute
		recur=function(){// 4.  recur read through    list of a dir's files,display each flN or recursly traverse  file if it is a dir
			trav=function(curPt){
				var curF,s,fs
				fs=$.rdS(curPt)
				for(var i in fs){
					curF=curPt+'/'+fs[i]
					s=$f.stS(curF)
					if(s.iF()){
						$l(curF)
					}
					else
						if(s.iD()){
							trav(curF)
						}
				}
			}
			//  synch ret list of cur dir's files
			//  iter over ea item in the flN arr, cr var  to store our fully-qualified file path   and obtain info about that file using a synch  file stats call  statSync()
			//  fn then checks if the cur  file   is a file or a dir,and either displays the file’s name if it is a file or recurses by re-invoking the traverse  fn using  new cur  dir  pt if it is a dir.
			trav('..')//   (simp way to ref par dir of cur working dir)
		}
		watch=function(){
			//6.   be notified of any changes that occ  w/i a given dir  either to   dir’s contents or dir  itself.
			inotify=new Inotify();// mu “inotify.”
			fn=function(ev){
				var file=ev.name?ev.name:'',mask=ev.mask
				if(file!=''&&file.indexOf('.')!==0){
					if(mask&Inotify.IN_OPEN){
						$l(file+' was opened ')
					}
					else
						if(mask&Inotify.IN_CLOSE){
							$l(file+' was closed ')
						}
				}
			}
			inotify.addWatch(
				{
					path:'.',
					watch_for:Inotify.IN_OPEN|Inotify.IN_CLOSE,
					callback:fn
				}
			)
			// include the inotify
			// module var inotify = require(‘/usr/local/node/node_modules/inotify’).Inotify;
			//  (note that this path should be whatever path you installed the
			// inotify module to).
			// instantiate   inotify ob  new Inotify();
			// which we will use for watching for file changes.
			//    The next few lines are all for defining our  watcher object
			// with the following properties: path: ‘.’
			// (the path to the file we want to watch—in this case,
			// we are watching the current working directory),
			// watch_for: Inotify.IN_OPEN | Inotify.IN_CLOSE (specifying that
			// we will only be firing change events when a file is opened or closed),
			// and lastly, callback: function (event) {  … } (defines our
			// cb fn that will be fired whenever the above two events
			// are emitted). In the first line of our callback, we are getting the
			// filename from the event object var file = event.name ? event.name : ”;
			// (if the filename is null, we’ll set the variable to an empty string).
			//The next line is just to make a “shorthand” variable
			// for the event type mask var mask = event.mask; .
			// The next conditional statement will filter out empty filenames
			// and filenames that start with a “.”
			// (which sometimes indicate
			//  temp  file being used to write a file).
			// The next couple of statements if (mask & Inotify.IN_OPEN) {  … }
			// and then after  else if (mask & Inotify.IN_CLOSE) {  … }
			// will display whether there was a file opened or closed under
			// the given directory location.
			//    Lastly is a very important line of code where we
			// add our watcher object that we just defined to the inotify object
			// using inotify.addWatch(watcher); (note that without this very line, our watcher object is essentially useless).
			//There are many more event types that you can watch files for, along with additional parameters for the watcher object. Reference the inotify github website for more information.
		}
	}
}