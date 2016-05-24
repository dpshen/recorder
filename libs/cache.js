var users = require("./user");

var cache = {maxId: 0};

var init = function() {
    users.find({}, function (err, rst) {
        if (err) {
            return
        }

        rst.forEach(function (user) {
            var userId = Number(user.userId);

            cache[user.ticket] = {
                userId: user.userId,
                ticket: user.ticket,
                phone: user.phone
            };
            if (userId > cache.maxId){
                cache.maxId = userId;
            }
        });

        console.log(cache)
    })
};

init();

module.exports = cache;