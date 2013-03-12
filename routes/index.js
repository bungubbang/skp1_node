
/*
 * GET home page.
 */

exports.index = function(req, res){
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