// user추가
var useradd = function() {

    var birthday = new Date();
    birthday.setFullYear(1987);
    birthday.setMonth(9);
    birthday.setDate(9);

    var user = new Parse.User();
    user.set("username", "윤정현");
    user.set("password", "skp");
    user.set("email", "jeonghyun.yoon@sk.com");
    user.set("phone", "01021290042");
    user.set("place", "삼화타워 11층");
    user.set("profile", "/images/profile/0042.png");
    user.set("team", "Mobile Software 개발 1팀");
    user.set("birthday", birthday);

    user.signUp(null, {
        success: function(user) {
            alert(user.get("username"));
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

// MemberPage에서 멤버들을 불러와 리스트를 표시
var memberget = function() {
    var query = new Parse.Query(Parse.User);
    query.find({
        success: function(members) {
            for(i in members) {

                var birthday = members[i].attributes.birthday;
                var birthdayString = birthday.getFullYear() + "." + (birthday.getMonth() + 1) + "." + birthday.getDate();

                var inHtml = "<div class=\"member\" onclick=\"profileToggle(\'" + members[i].attributes.pid + "\')\">"
                    + "<div class=\"member_img\">"
                    + "<img src=\"" + members[i].attributes.profile + "\">"
                    + "</div>"
                    + "<div class=\"member_profile\">"
                    + "<div class=\"popover fade right in\">"
                    + "<div class=\"arrow\"></div>"
                    + "<h3 class=\"popover-title\">" + members[i].attributes.username + "</h3>"
                    + "<div class=\"popover-content member_" + members[i].attributes.pid +"\" style=\"display: none\">"
                    + "<div class=\"member_birthday\">"
                    + "<i class=\"icon-gift\"></i>&nbsp;" + birthdayString
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_phone\" onclick=\"tel(\'" + members[i].attributes.phone + "\')\">"
                    + "<i class=\"icon-phone\"></i>&nbsp;" + members[i].attributes.phone
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_email\" onclick=\"mail(\'" + members[i].attributes.email + "\')\">"
                    + "<i class=\"icon-envelope-alt\"></i>&nbsp; " + members[i].attributes.email
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_team\">"
                    + "<i class=\"icon-sitemap\"></i>&nbsp; " + members[i].attributes.team
                    + "</div>"
                    + "<hr>"
                    + "<div class=\"member_place\">"
                    + "<i class=\"icon-briefcase\"></i>&nbsp; " + members[i].attributes.place
                    + "</div><hr></div></div></div></div>";

                $("." + members[i].attributes.birthday.getFullYear()).after(inHtml);
            }

            $('.members').show();
            $('.loading').hide();

        }
    });
}

// BirthDay Page
var birthdayget = function() {
    var query = new Parse.Query(Parse.User);
    query.descending("bDate");
    query.find({
        success: function(members) {
            for(i in members) {
                var inHtml = "<div class=\"birthday\">"
                    + "<div class=\"birthday_name\">" + members[i].attributes.username + "</div>"
                    + "<div class=\"birthday_day\"><strong>" + members[i].attributes.bDate + "</strong></div>"
                    + "</div>";
                $("." + members[i].attributes.bMonth).after(inHtml);
            }

            $('.birthdays').show();
            $('.loading').hide();
        }
    });
}

// Fee Page
var feeget = function() {
    var query = new Parse.Query(Parse.User);
    query.ascending("username");
    query.find({
        success: function(members) {
            for(i in members) {
                var feeCheck = "x";
                if(members[i].attributes.fee2013 === true) {
                    feeCheck = "o";
                }

                var inHtml = "<tr>"
                    + "<td>" + members[i].attributes.username + "</td>"
                    + "<td>" + feeCheck +"</td>"
                    + "</tr>";

                $('.fee_list').append(inHtml);
            }
        }
    });
}