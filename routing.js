require('./dirs')

function bbBlogsServe(){
    $a.g('/api/blogs', function (q, p) {
        Blog.find(function (z, docs) {
            docs.forEach(function (item) {
                console.log('got request for _id: ' + item._id)
            })
            p.send(docs)
        })
    })
    $a.post('/api/blogs', function (q, p) {
        $l('recieved post request')
        for (var key in q.body) {
            console.log(key + ': ' + q.body[key])
        }
        var blog = new Blog(q.body)
        blog.save(function (z, doc) {
            p.send(doc)
        })
    })
    $a.delete('/api/blogs/:id', function (q, p) {
        Blog.remove({_id: q.params.id}, function (z, d) {
            p.send({_id: q.params.id})
        })
    })
    $a.put('/api/blogs/:id', function (q, p) {
        Blog.update({_id: q.params.id}, q.body, function (z, doc) {
            p.send({_id: q.params.id})
        })
    })
}

function render(){

    $a.g('/', function (q, p) {  
     
     p.send('this is a test')
     
     })



    $a.g('/web/:a/:p?', function (q, p) {
        p.render('web', {
            app: q.params.a, 
            pam: q.params.p
        })
    })


    $a.g('/play/:a/:p?', function (q, p) {  
     
     p.render('play', {
     
        app: q.params.a, pam: q.params.p
        
        })
     
         })
 
 
    $a.g('/wap/:a/:p?', function (q, p) { 
      p.render('wap', {
      app: q.params.a, pam: q.params.p
      })  })
    
    
    $a.g('/mvc/:a/:p?/:p2?/:p3?', function (q, p) {
       p.render('mvc', {app: q.params.a, pam: q.params.p})
        })
}


function muggy(){

    $a.g('/users', function (q, p) {
        $md.user.find(q.body,
            function (z, users) {
                if (users) {
                    p.json(_.map(users, function (u) {
                        return {
                            id: u.id, u: u.username, un: u.username, username: u.username,
                            mug: u.mug || 'no mug', status: u.status || 'no status'
                        }
                    }))
                }
            })
    })
    $a.po('/user', function (q, p, n) {
    
		
        $md.user.create(q.body, function (z, u) {
            if (z) {
                $l(z.code == 11000 ? '!!' : '!');
                $d(z);
                p.json('error');
                n(z)
            }
            _.extend(q.session, {username: u.username, loggedIn: true}).save(function () {
                p.json(u.username)
            })
        })
    
    })
    
    $a.g('/loggedIn', $w.user, function (q, p) {
    
        $l('loggedIn? q.loggedIn: ' + q.loggedIn + ', req.username: ' + q.username)
        p.json(q.username)
   
    })
    
    
    
    $a.g('/username', $w.user, function (q, p) {
        p.json(q.username)
    })
    $a.po('/login', function (q, p, n) {
        $l('/login')
        $l('un: ' + q.body.username)
        $l('pw: ' + q.body.password)

        $l(q.body.username);
        $l(q.body.password)
        $md.user.findOne({username: q.body.username, password: q.body.password},
            function (z, u) {
                if (z) {
                    n(z)
                }
                if (!u) {
                    $l('FAIL!!');
                    p.json('guest')
                }
                else {
                    $l('logged in: ' + u + ' !')
                    q.session.username = u.username
                    q.session.loggedIn = true
                    _.extend(q.session, {username: u.username, loggedIn: true})
                        .save(function () {
                            $l('session saved ' + q.session.username + ', ' + u.username)
                            p.json(u.username)
                        })
                }
            })
    })
    
    $a.g('/logOut', $w.user, function (q, p) {
        _.extend(q.session, {username: null, loggedIn: false}).save(function () {
            p.json('false')
        })
    })
    $a.g('/user/:username', function (q, p) {
        $md.user.findOne({username: q.params.username},
            function (z, u) {
                if (u) {
                    p.json({
                        id: u.id,
                        username: u.username, mug: u.mug || null, status: u.status || 'no status'
                    })
                }
            })
    })
    $a.g('/myMug', $w.user, function (q, p) {
        $md.user.findOne({username: q.username}, function (z, u) {
            p.send(u.mug)
        })
    })
    $a.g('/mugByUsername/:username', function (q, p) {
        //$l('req.params.username: ' + req.params.username)
        $md.user.findOne({username: q.params.username}, function (z, u) {
            p.send(u.mug)
        })
    })
    $a.po('/changeMug', $w.user, function (q, p) {  // could be a put?
        q.user.mug = q.body.url
        q.user.save(function (z, m) {
            p.send(m)
        })
    })
    $a.delete('/user', function (req, res, next) {
        $md.user.remove(req.body, function (err, data) {
            res.json(data)
        })
    })
    $a.po('/pic', uplod, $w.user, function (q, p, n) {
        $l('post new pic')
        bd = q.body
        $l('q.file: ')
        $l(q.file)
        //when a user uploads a pic..
        // by default, it first goes to /public/uploads..
        // but then i automatically copy it to /pic/uploads..
        // example:
//    origPath: public/uploads/58bfc.JPG
//    newPath: public/pics/55e32.JPG
        //notice file names are different
        //the first name is random at time of orig file save
        //new name is based on mongoId (also came from random when pic saved to db)
        //i save by mongo id so it can be easily fetched!
        
        $f.rF = $f.readFile
        $f.wF = $f.writeFile
        $p = path
        $p.rs = $p.resolve
        var i = q.file//q.files.png || q.files.i
        $md.pic.create(Pic(q.userId, i), function (z, pic) {  //if (z) {$l('ERR:' + z)}
            copyFileTo(i.path, newPath(i, pic), function () {
                pic.save(function (z) {
                    if (z) {
                        $l('z');
                        n(z)
                    } else {
                        $l('pic saved');
                        p.redirect('/wap/uploads')
                    }
                })
            }) //<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
        })
        function copyFileTo(origPath, newPath, fn) {
            $f.rF(origPath, function (z, fileData) {
                $f.wF(newPath, fileData, fn)
            })
        }

        function newPath(i, pic) {
            var newPath = $p.rs(i.path, '../../pics/', _id(pic) + pic.ext)  //$l('origPath: ' + i.path); $l('newPath: ' + newPath)   //for some reason extensions are saved with a starting '.'
            function _id(pic) {
                return pic._id.toString()
            }

            return newPath
        }

        function Pic(id, i) {
            return {
                user: id, ext: $p.extname(i.path) || '.png',
                //name: i.name,
                size: i.size//, modified: i.lastModifiedDate
            }
        }


    })
    $a.delete('/pic', function (q, p) {
        $l('remove a pic')//remove a pic
        $md.pic.remove(q.body, function (z, d) {
            p.json(d)
        })
    })
    $a.g('/pics', function (req, res) {  //get all pics(files) (everyone's)
        $md.pic.find(function (err, data) {
            res.json(data)
        })
    })
    $a.g('/myPics', $w.user, function (q, p) {

        $md.pic.find({
                user: q.userId
            },

            function (z, pics) {
                p.json(pics)
            })
    })

    cutouts();
    status()
    function cutouts() {

        //upload a dataUrl!!
        $a.po('/uplI', $w.user, function (req, res, next) {

            $l('uplI')

            //if(req.f.png){req.f.i= q.f.png}
            // var i=req.f.i
            $md.img.create({u: req.userId, d: req.du}, function (err, img) { //$d(img)
                $f.readFile(img.path, function (err, file) {
                    $f.writeFile(
                        $d(path.resolve(img.path, '../../p/', img._id.toString()) + img.e),
                        file,
                        function (err) {
                            img.save(function (err) {
                                if (err) {
                                    $l('err')
                                    next(err)
                                }

                                else {

                                    $l('uploaded')
                                    res.redirect('back')
                                }
                            })
                        })
                })

            })


        })
        //************** this is where we save new cutout-images
        $a.po('/img', $w.user, function (req, res, next) {

            $md.img.create(
                {
                    u: req.username,

                    d: req.body.d,

                    dats: req.body.dats,

                    username: req.username,

                    data: req.body.d,

                    physicsData: req.body.dats

                },


                function (err, image) {
                    return res.json(image)
                }
            )
        })  //new image
        //remove an image (by id) //cutouts?
        // $a.po('/rmI', function( req, res ){   $md.img.remove(  req.body,  function(err, data){res.json(data)} )  })
        $a.delete('/img', function (req, res) {

            $l('del /img')
            $md.img.remove(req.body, function (err, data) {
                res.json(data)
            })
        })
        //find all User's images?
        $a.g('/img', $w.user, function (req, res) {

            $md.img.find({u: req.username},

                function (err, data) {
                    res.json(data)
                })

        })
        //find all   images on site?
        $a.g('/allImages', $w.user, function (req, res) {

            $md.img.find({},

                function (err, data) {
                    res.json(data)
                })

        })
        //g all images of a sp. user
        $a.g('/images/:username', $w.user, function (req, res) {

            $md.img.find({username: req.params.username},

                function (err, data) {
                    res.json(data)
                })

        })
    }
    function status() {
        $a.g('/myStatus', $w.user, function (req, res) {
            $md.user.findOne({username: req.username}, function (err, data) {
                res.send(data.status || 'no status')
            })
        })
        //** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
        $a.po('/getimagebyid', function (req, res, next) {
            $l('dud')

            // $l('req.body.data')
            // $l(req.body.d)

            $md.img.findById(
                //'54d4506172f7e12a05000012',
                req.body.data,

                function (err, data) {

                    //   $l('data: ')
                    console.dir(data)

                    res.send(data)
                })

        })
        $a.po('/dats', function (req, res) {
            $md.img.findById(req.body.d, function (err, data) {

                if (O(data)) {
                    res.json(data)
                }

            })
        })
        $a.po('/changeStatus', $w.user, function (q, p) {

            q.user.status = q.body.status
            q.user.save(function (z, u) {
                p.json(u.status)
            })
        })
    }
}


module.exports=function routing(dirN){


    _.e(dirs, function (dir) {
        $a.use($e.static(dirN + '/' + dir))
    })


    bbBlogsServe();
    render();
    muggy()

}

