// Paser setting
Parse.initialize("jTBHKQYyGhv0EEGGfGyg1WAwKBbAq3sY55ieHUPR", "200KJnz22JtjplI1CFOYNPt1QDN2Pir5cgDj4R6X");
var parseId = "jTBHKQYyGhv0EEGGfGyg1WAwKBbAq3sY55ieHUPR";
var parseApiKey = "ZZxsit0HLMToTo4E7mkAuDREHWBiytnPIwwHa2U2";
var parseUserUrl = "https://api.parse.com/1/users";
var parseHeaders = {
    "X-Parse-Application-Id": "jTBHKQYyGhv0EEGGfGyg1WAwKBbAq3sY55ieHUPR",
    "X-Parse-REST-API-Key": "ZZxsit0HLMToTo4E7mkAuDREHWBiytnPIwwHa2U2"
}

var renderMember = function() {
    $.ajax({
        type: "GET",
        url: parseUserUrl,
        headers: parseHeaders
    }).done(function(data) {
            for(i in data.results) {

                var birthday = new Date(data.results[i].birthday.iso);
                var birthdayString = birthday.getFullYear() + "." + (birthday.getMonth() + 1) + "." + birthday.getDate();

                var inHtml = "<div class=\"member\" onclick=\"profileToggle(\'" + data.results[i].pid + "\')\">"
                    + "<div class=\"member_img\">"
                    + "<img src=\"" + data.results[i].profile + "\">"
                    + "</div>"
                    + "<div class=\"member_profile\">"
                    + "<div class=\"popover fade right in\">"
                    + "<div class=\"arrow\"></div>"
                    + "<h3 class=\"popover-title\">" + data.results[i].username + "</h3>"
                    + "<div class=\"popover-content member_" + data.results[i].pid +"\" style=\"display: none\">"
                    + "<div class=\"member_birthday\">"
                    + "<i class=\"icon-gift\"></i>&nbsp;" + birthdayString
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_phone\" onclick=\"tel(\'" + data.results[i].phone + "\')\">"
                    + "<i class=\"icon-phone\"></i>&nbsp;" + data.results[i].phone
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_email\" onclick=\"mail(\'" + data.results[i].email + "\')\">"
                    + "<i class=\"icon-envelope-alt\"></i>&nbsp; " + data.results[i].email
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_team\">"
                    + "<i class=\"icon-sitemap\"></i>&nbsp; " + data.results[i].team
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_place\">"
                    + "<i class=\"icon-briefcase\"></i>&nbsp; " + data.results[i].place
                    + "</div><hr></div></div></div></div>";

                $("." + birthday.getFullYear()).after(inHtml);
            }

            $('.members').show();
            $('.loading').hide();
    }).fail(function(e) {
        alert(e);
    });
}

var renderBirthday = function() {
    $.ajax({
        type: "GET",
        url: parseUserUrl,
        headers: parseHeaders,
        data: {order: "-bDate"}
    }).done(function(data) {
            for(i in data.results) {
                var inHtml = "<div class=\"birthday\">"
                    + "<div class=\"birthday_name\">" + data.results[i].username + "</div>"
                    + "<div class=\"birthday_day\"><strong>" + data.results[i].bDate + "</strong></div>"
                    + "</div>";
                $("." + data.results[i].bMonth).after(inHtml);
            }

            $('.birthdays').show();
            $('.loading').hide();
    }).fail(function(e) {
        alert(e);
    });
}

var renderFee = function() {
    $.ajax({
        type: "GET",
        url: parseUserUrl,
        headers: parseHeaders,
        data: {order: "username"}
    }).done(function(data) {
            for(i in data.results) {
                var feeCheck = "x";
                if(data.results[i].fee2013 === true) {
                    feeCheck = "o";
                }

                var inHtml = "<tr>"
                    + "<td>" + data.results[i].username + "</td>"
                    + "<td>" + feeCheck +"</td>"
                    + "</tr>";

                $('.fee_list').append(inHtml);
            }
            $('.loading').hide();
        }).fail(function(e) {
            alert(e);
        });
}

var comment = function () {
    SKP.commentsPlugin({
        // id of DOM element where you want to display comments
        target_id: 'comments_plugin1',
        op_app_key: 'e0cde248-a801-36db-aa9f-0cbf2d259e41',
        is_responsive: true
    });
}

var mail = function(m) {
    location.href = "mailto:" + m;
}

var tel = function(number) {
    location.href = "tel:" + number;
}

var profileToggle = function(id) {
    var display = $('.member_' + id).attr('style');
    if(display.indexOf('none') != -1) {
        $('.member_' + id).show('fast');
    } else {
        $('.member_' + id).hide('fast');
    }
}