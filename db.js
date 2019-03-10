let userDb = {};
let id_inc = 0;

exports.listUsers = function(){
    return userDb;
};

exports.addUser = function (user){
    id_inc = id_inc + 1;
    user.id = id_inc;
    userDb[user.id] = user;
};

exports.getUserById = function (id){
    return userDb[id];
};

exports.deleteUser = function (id){
    userDb[id].remove();
};

exports.updateUser = function (user) {
    userDb[user.id] = user;
}