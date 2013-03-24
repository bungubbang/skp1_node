
/*
 * GET home page.
 */

exports.index = function(req, res){
    if(req.cookies.skplogin !== 1){
        res.render('login');
    }
    res.render('index');
};

exports.member = function(req, res){
    res.render('member');
};

exports.birthday = function(req, res){
    res.render('birthday');
};

exports.comment = function(req, res){
    res.render('comment');
};

exports.fee = function(req, res){
    res.render('fee');
};

exports.push = function(req, res){
    res.render('push');
};

exports.about = function(req, res) {
    res.render('about');
}

exports.login = function(req, res) {
    res.render('login');
}

exports.loginCheck = function(req, res) {
    res.cookie('skplogin', '1', { maxAge: new Date(Date.now() + 900000), path: '/'});
    res.send('ok');
}