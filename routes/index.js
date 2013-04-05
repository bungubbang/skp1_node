
/*
 * GET home page.
 */

exports.index = function(req, res){
    if(req.cookies.skplogin !== '1'){
        res.redirect('/login');
    }
    res.render('index', {username: req.cookies.skpname});
};

exports.member = function(req, res){
    if(req.cookies.skplogin !== '1'){
        res.redirect('/login');
    }
    res.render('member');
};

exports.birthday = function(req, res){
    if(req.cookies.skplogin !== '1'){
        res.redirect('/login');
    }
    res.render('birthday');
};

exports.comment = function(req, res){
    if(req.cookies.skplogin !== '1'){
        res.redirect('/login');
    }
    res.render('comment');
};

exports.fee = function(req, res){
    if(req.cookies.skplogin !== '1'){
        res.redirect('/login');
    }
    res.render('fee');
};

exports.push = function(req, res){
    if(req.cookies.skplogin !== '1'){
        res.redirect('/login');
    }
    if(req.cookies.skpname !== null){
        res.render('push', {username: req.cookies.skpname});
    } else {
        res.render('push');
    }
};

exports.about = function(req, res) {
    res.render('about');
}

exports.login = function(req, res) {
    res.render('login');
}

exports.loginCheck = function(req, res) {
    res.cookie('skpname', req.query.username , { maxAge: new Date(Date.now() + 900000), path: '/'});
    res.cookie('skplogin', '1', { maxAge: new Date(Date.now() + 900000), path: '/'});
    res.send('ok');
}

exports.logout = function(req, res) {
    res.cookie('skpname', req.query.username , { maxAge: 0, path: '/'});
    res.cookie('skplogin', '0', { maxAge: 0, path: '/'});
    res.send('logout');
}
