
  $f =require('fs')


  /*

  function stat(){
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

  }


  */



fileSecurity=function(){

    //chown: change owner and group of a file
    $f.ow=$f.chown//(pt, uid, gid, fn)//$f.owS=$f.chownSync(pt, uid, gid)
    $f.fOw=$f.fchown//(fd, uid, gid, fn)//$f.fOwS=$f.fchownSync(fd, uid, gid)
    $f.lOw=$f.lchown//(pt, uid, gid, fn)//$f.lOwS=$f.lchownSync(pt, uid, gid)

//chmod: change permissions
    $f.m=$f.chmod//(pt, mode, fn)//$f.mS=$f.chmodSync(pt, mode)
    $f.fM=$f.fchmod(fd, mode, fn)//$f.fMS=$f.fchmodSync(fd, mode)
    $f.lM=$f.lchmod(pt, mode, fn)//$f.lMS=$f.lchmodSync(pt, mode)

}//;fileSecurity()
/*
linkPath=function() {
    $f.l = $f.link(srcpt, dstpt, fn)//$f.lS=$f.linkSync(srcpt, dstpt)
    $f.sL = $f.symlink(srcpt, dstpt[, type],fn)//$f.sLS=$f.symlinkSync(srcpt, dstpt[, type])
//readlink: prints val of symbolic link or canonical file name
    $f.rL = $f.readlink//(pt, fn)//$f.rLS=$f.readlinkSync//(pt)
    $f.rp = $f.realpath//(pt[, cache], fn)//$f.rpS=$f.realpathSync//(pt[, cache])
    $f.ul = $f.unlink//(pt, fn)//$f.ulS=$f.unlinkSync//(pt)

};linkPath()
*/



write=function(){

    $f.w=$f.write//(fd, buffer, offset, length[, position], fn)
      // $f.=$f.write(fd, data[, position[, encoding]], fn)
    //  $f.wS=$f.writeSync(fd, buffer, offset, length[, position])
   //   $f.=$f.writeSync//(fd, data[, position[, encoding]])
/*
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
*/
};write()

/*
watch=function(){

    $f.wF=$f.watchFile//(filename[, op], listener)
    $f.uwF=$f.unwatchFile//(filename[, listener])
    $f.wa=$f.watch(//filename[, op][, listener])

};watch()
*/

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

  //1. read a file, display its contents
  $f.rF('data.txt', function (z, d) {if (d) {$l(d.toString('utf8'))}}) //  resulting file data as a binary buffer array  data.
  $f.wF('data2.txt', 'Hello!', fn) // write to file
  //    3. read  given dir lc's file list, display flNs
  $f.rd('.', //cur working dir
      function(z,fls){
          for (var ix in fls){  //  array of filenames stored in files
              $l(fls[ix])//iter [flN] and display each flN
          }
      })

  //5.   get certain attributes of a given file
  // such as whether or not it is a file or a directory,
  // and you want to be able to set certain attributes
  // such as the file’s name or the file’s permissions.

  $f.st('data.txt',   //    obtain  infor  about a given file ‘data.txt’
      function (z, s) { // (err, stats)



          // display   whether the given file is a file or a dir
          if (s.iF()) {
              $l('It\'s file!')
          } else if (s.iD()) {
              $l('It\'s dir!')
          }

          //   step through each non-function member of the stats object
          for (var i in s) {


              // display what that member field’s name is and what value it contains
              // (including detailed file info)
// such as creation date, modified date, file size..

              if (!F(s[i])) {
                  $l(i + '\t=' + s[i])
              }
          }
      })
  $f.rn('data2.txt', 'data2_new.txt', fn)
  $f.m('data3.txt', '0777', fn)// chmod// all read-write-execute



  recur=function(){// 4.  recur read through    list of a dir's files,display each flN or recursly traverse  file if it is a dir
      trav = function(curPt) {var curF, s,fs
          fs=$.rdS(curPt)
          for (var i in fs){
              curF= curPt+'/'+fs[i]
              s=$f.stS(curF)
              if(s.iF()){$l(curF)}
              else if(s.iD()){trav(curF)}}
      }
      //  synch ret list of cur dir's files
      //  iter over ea item in the flN arr, cr var  to store our fully-qualified file path   and obtain info about that file using a synch  file stats call  statSync()
//  fn then checks if the cur  file   is a file or a dir,and either displays the file’s name if it is a file or recurses by re-invoking the traverse  fn using  new cur  dir  pt if it is a dir.




      trav('..')//   (simp way to ref par dir of cur working dir)

  }
  watch=function() {
//6.   be notified of any changes that occ  w/i a given dir  either to   dir’s contents or dir  itself.
      inotify = new Inotify();// mu “inotify.”
      fn = function (ev) {

          var file = ev.name ? ev.name : '', mask = ev.mask


          if (file != '' && file.indexOf('.') !== 0) {

              if (mask & Inotify.IN_OPEN) {
                  $l(file + ' was opened ')
              }
              else if (mask & Inotify.IN_CLOSE) {
                  $l(file + ' was closed ')
              }

          }

      }
      inotify.addWatch({
          path: '.',
          watch_for: Inotify.IN_OPEN | Inotify.IN_CLOSE,
          callback: fn
      })
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


  function mixu(){

      /*

       baics=function(){
       data = $f.rF('./index.html', 'utf8')
       $f.rF('./index.html', 'utf8', _lD)
       $f.rF(fN, enc, fn)
       $f.wF(fN, data, encoding='utf8', [fn])
       $f.o(pt, flags, [mode], [fn])
       $f.r(fd, bf, offset, len, pos, [fn])
       $f.w(fd, bf, offset, len, pos, [fn])

       $f.fsync(fd, fn)
       $f.truncate(fd, len, [fn])
       $f.close(fd, [fn])


       //Dirs
       $f.readdir(path, [fn])
       $f.mkdir(path, mode, [fn])
       $f.rmdir(path, [fn])
       // Files: info
       $f.stat(path, [fn])
       $f.lstat(path, [fn])
       $f.fstat(fd, [fn])
       $f.realpath(path, [fn])


       //Readable streams
       $f.ReadStream
       // Event: 'open'
       $f.createReadStream(pt, op)
       //Writable streams
       $f.WriteStream
       //Event: 'open' file.bytesWritten
       $f.createWriteStream(pt,op)
       //Files: rename, watch changes & change timestamps
       $f.rename(path1, path2, [fn])
       $f.watchFile(filename, [options], listener)
       $f.unwatchFile(filename)
       $f.watch(filename, [options], listener)

       $f.utimes(path, atime, mtime, fn)
       $f.futimes(path, atime, mtime, fn)
       //Files: Owner and permissions
       $f.chown(path, uid, gid, [fn])
       $f.fchown(path, uid, gid, [fn])
       $f.lchown(path, uid, gid, [fn])
       $f.chmod(path, mode, [fn])
       $f.fchmod(fd, mode, [fn])
       $f.lchmod(fd, mode, [fn])

       //Files: symlinks
       $f.link(srcpath, dstpath, [fn])

       $f.symlink(linkdata, path, [fn])
       $f.readlink(path, [fn])
       $f.unlink(path, [fn])

       }

       $f.rF('./file.html', function (err, data) {})

       $f.rF('./other.html', function (err, data) {})

       //These file reads might complete in any order depending on how long it takes to read each file.
       // The simplest solution is to chain the fns:

       $f.rF('./file.html', function (z,d) {$f.rF('./other.html', fn)})



       //Fully buffered reads and writes are fairly straightforward:
       //  call the function and pass in a String or a Buffer to write,
       //  and then check the return value.

       //   Recipe: Reading a file (fully buffered)

       $f.rF('./index.html', 'utf8', _lD)// the data is passed to the fn in the second argument



       //Recipe: Writing a file (fully buffered)

       $f.wF('./results.txt', 'Hello World', function(z) {$l('File write completed')})

       //When we want to work with files in smaller parts, we need to open(), get a file descriptor and then work with that file descriptor.


       $f.o(pt, flags,mode,fn)  //supports the following flags:
       openFlags=function(){
       //  'r' - Open file for reading.
       //  An exception occurs if the file does not exist.
       // 'r+' - Open file for reading and writing.
       // An exception occurs if the file does not exist.
       // 'w' - Open file for writing.
       // The file is created (if it does not exist)
       // or truncated (if it exists).
       //'w+' - Open file for reading and writing.
       // The file is created (if it does not exist) or truncated
       // (if it exists).
       //'a' - Open file for appending.
       // The file is created if it does not exist.
       //'a+' - Open file for reading and appending.
       // The file is created if it does not exist.
       //  mode refers to the permissions to use in case
       // a new file is created. The default is 0666.


       }

       //Recipe: Opening, writing to a file and closing it (in parts)
       $f.o('./data/index.html', 'w',
       function(z, fd) {
       var buf = new Buffer('bbbbb\n');
       $.w(fd, buf, 0, buf.length, null,
       function(z, written, bf)
       $l(z, written, bf);$.cl(fd, fn)
       }
       )


       // // The read() and write() functions operate on Buffers,
       // so in the example above we create a new Buffer() from a string.
       //Note that built-in readable streams (e.g. HTTP, Net) generally return Buffers.

       //   Recipe: Opening, seeking to a position, reading from a file and closing it (in parts)

       $f.o('./data/index.html', 'r', function(z,fd){
       var str = new Buffer(3);

       $f.r(fd, buf, 0, buf.length, null,
       function(z, bytesRead,bf){
       $l(z, bytesRead, bf);$f.cl(fd,fn)})
       })


       //11.2 Directories: read, create & delete

       //    Recipe: Reading a directory

       //Reading a directory returns the names of the items (files, directories and others) in it.

       pt=  './data/';

       $f.rdE(pt, function(f) {
       $l(pt+f)
       $f.st(pt+f, _lD)})

       $f.statObReturned= { dev: 2114,
       ino: 48064969, mode: 33188, nlink: 1,
       uid: 85, gid: 100, rdev: 0,
       size: 527, blksize: 4096, blocks: 8,
       atime: $D, mtime: $D, ctime: $D// Mon, 10 Oct 2011 23:24:11 GMT
       }

       // The stat object also has the following functions:

       s.isFile()
       s.isDirectory()
       s.isBlockDevice()
       s.isCharacterDevice()
       s.isSymbolicLink() //(only valid with $f.lstat())
       s.isFIFO()
       s.isSocket()

       //The Path module has a set of additional functions for working with paths, such as:
       path.normalize//(p)	Normalize a string path, taking care of '..' and '.' parts.
       path.join//([path1], [path2], [...])	Join all arguments together and normalize the resulting path.
       path.resolve//([from ...], to)	Resolves to to an absolute path. If to isn't already absolute from arguments are prepended in right to left order, until an absolute path is found. If after using all from paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.

       $f.realpath//(path, [fn])
       $f.realpathSync//(path)

       //Resolves both absolute (‘/path/file’)
       // and relative paths (‘../../file’)
       // and returns the absolute path to the file.

       path.dirname//(p)	Return the directory name of a path. Similar to the Unix dirname command.

       path.basename//(p, [ext])	Return the last portion of a path. Similar to the Unix basename command.

       path.extname//(p)	//Return the extension of the path. Everything after the last '.' in the last portion of the path. If there is no '.' in the last portion of the path or the only '.' is the first character, then it returns an empty string.

       path.exists(p, [fn])
       path.existsSync(p)	//
       // Test whether or not the given path exists.
       // Then, call the fn argument
       // with either true or false.



       //Recipe: Cr/dl dir
       $f.mkdir('./newdir', 0666, function(z) {
       $l('Created newdir')
       $f.rmdir('./newdir', fn)})



       streams=function(){

       //Using Readable and Writable streams
       //
       //Readable and Writable streams are covered in Chapter 9.
       //
       //Recipe: Reading a file and writing to another file

       f = $f.createReadStream('./data/results.txt', {flags: 'r'} );
       out = $f.createWriteStream('./data/results2.txt', {flags: 'w'});
       f.on('data', function(data) {
       $l('data', data);
       out.write(data);
       });
       f.on('end', function() {
       $l('end');
       out.end(function() {
       $l('Finished writing to file');
       test.done();
       });
       });
       //You can also use pipe():

       file = $f.createReadStream('./data/results.txt', {flags: 'r'} );
       out = $f.createWriteStream('./data/results2.txt', {flags: 'w'});
       file.pipe(out);


       //Recipe: Appending to a file
       f  = $f.createWriteStream('./data/results.txt', {flags: 'a'} );
       f.write('HELLO!\n');
       f.end(function(){test.done()})

       //Practical example
       //
       //Since Node makes it very easy to launch multiple asynchronous file accesses, you have to be careful when performing large amounts of I/O operations: you might exhaust the available number of file handles (a limited operating system resource used to access files). Furthermore, since the results are returned in a asynchronous manner which does not guarantee completion order, you will most likely want to coordinate the order of execution using the control flow patterns discussed in the previous chapter. Let’s look at an example.
       //
       //    Example: searching for a file in a directory, traversing recursively
       //
       //In this example, we will search for a file recursively starting from a given path. The function takes three arguments: a path to search, the name of the file we are looking for, and a fn which is called when the file is found.
       //
       //    Here is the naive version: a bunch of nested fns, no thought needed:

       function fFile(pt,searchF,fn){

       $f.rdE(pt,  function(f) {
       $f.st(pt+'/'+f, function(z,s) {if(s.iF() && f == searchF){fn(undefined, pt+'/'+f)}}
       else if(s.iD()) {fFile(pt+'/'+f, searchF, fn);}
       })
       }
       fFile('./test', 'needle.txt', function(z, pt) {$l('Found file at: '+pt)})
       function fFile(fnpt, searchFile, fn) {
       // check for a match, given a stat
       function isMatch(z,s){
       if(s.iF()&&f==searchF){fn(undefined, fnpt+'/'+f)}
       else if(s.iD()){statDir(fnpt+'/'+f)}}
       statDir(fnpt, isMa)// launch  search
       }
       // Read and stat a directory
       function statDirectory(fnpt, fn) {
       $f.rd(fnpt, function (z, fs) {
       _.e(fs, function(f){$f.st(fnpt+'/'+f, fn)})
       })
       }

       fFile('./test','needle.txt',
       function(z,fnpt){$l('Found file at: '+fnpt)})

       //The function is split into smaller parts:
       //
       //    findFile: This code starts the whole process, taking the main input arguments as well as the fn to call with the results.
       //    isMatch: This hidden helper function takes the results from stat() and applies the "is a match" logic necessary to implement findFile().
       //    statDirectory: This function simply reads a fnpt, and calls the fn for each file.
       //    I admit this is fairly verbose.

       }
       eventStream=function() {
       //    PathIterator: Improving reuse by using an EventEmitter
       //However, we can accomplish the same goal in a more reusable manner
       // by creating our own module (pathiterator.js),
       // which treats directory traversal as a stream of events
       // by using EventEmitter:
       EventEmitter = require('events').EventEmitter
       util = require('util')

       var PathIterator = function () {
       };

       // augment with EventEmitter
       util.inherits(PathIterator, EventEmitter);

       // Iterate a fnpt, emitting 'file' and 'directory' events.
       PathIterator.prototype.iterate = function (pt) {
       var self = this;
       this.statDirectory(function (fpt, stats) {
       var s = stats
       if (s.iF()) {
       s.emit('file', fpt, s)
       }
       else if (s.iD()) {
       self.emit('directory', fpt, s);
       self.iterate(pt + '/' + file);
       }
       })
       }


       // Read and stat a directory
       PathIterator.prototype.statDirectory = function (pt, fn) {


       $f.rdE(pt, function (f) {
       var fpt = pt + '/' + f
       $f.st(fpt, function (z, stt) {
       fn(fpt, stt)
       })
       })

       }


       module.exports = PathIterator;
       // create  class  which extends EventEmitter,  emits these evs:

       //    “error” - function(error): emitted on errors.
       //“file” - function(filepath, stats): the full path to the file and the result from $f.stat
       //“directory” - function(dirpath, stats): the full path to the directory and the result from $f.stat

       //We can then use this utility
       // class to implement the same
       // dir  traversal:

       PathIterator = require('./pathiterator.js');


       function findFile(pt, searchFile, fn) {
       pi = new PathIterator();
       pi.on('file', function (file, stats) {
       if (file == searchFile) {
       fn(undefined, file);
       }
       })
       pi.on('error', fn);
       pi.iterate(pt);
       }

       //While this approach takes a few lines more than the
       // pure-fn approach,  res more extensible
       // (  easily look for mult files in  “file” fn  )
       //
       //If you end up writing a lot of code that iterates pts, having a PathIterator EventEmitter will simplify your code. The fns are still there - after all, this is non-blocking I/O via the event loop - but the interface becomes a lot easier to understand. You are probably running findFile() as part of some larger process - and instead of having all that file travelsal logic in the same module,
       // you have a fixed interface which you can write your pt traversing operations against.
       }
       async=function() {
       //Encapsulating the I/O behind a EventEmitter
       // helps a bit, but we can do one better
       // by using fjacob's async.js.
       // This is a FS-specific library
       // that encapsulates file system operations
       // behind a chainable interface.
       // The findFile() function can be written
       // using async.js like this:


       function findFile(pt, searchFile, fn) {
       $y.readdir(pt).stat()
       .filter(function (file) {
       return file.stat == searchFile
       })
       .toString(fn);
       }

       //The techniques behind async.js consist essentially of an object that acts like a series,
       // but allows you to specify the operations using a chainable interface.

       // My point - if there is any - is that coordinating asynchronous I/O control
       // flow in Node is somewhat more complicated than in scripting environments/languages
       // where you can rely on I/O blocking the execution of code.
       // This is most obvious when you are dealing with the file system,
       // because file system I/O generally requires you to perform long sequences of
       // asynchronous calls in order to get what you want.

       // However, even with file I/O, it is possible to come up with solutions
       // that abstract away the details from your main code.
       // In some cases you can find domain specific libraries
       // that provide very conscise ways of expressing your logic
       // (e.g. async.js) - and in other cases you can at least take parts of the process,
       // and move those into a separate module (e.g. PathIterator).

       }
       */
  }