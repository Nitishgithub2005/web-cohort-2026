var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var InMemoryDB = /** @class */ (function () {
    function InMemoryDB() {
        this._db = new Map();
    }
    InMemoryDB.prototype.insertUser = function (data) {
        if (this._db.has(data.id)) {
            throw new Error("User with ".concat(data.id, " id already exist"));
        }
        this._db.set(data.id, data);
        return data.id;
    };
    InMemoryDB.prototype.updateUser = function (id, updateUser) {
        if (!this._db.has(id)) {
            throw new Error("User with ".concat(id, " id doesn't exist"));
        }
        this._db.set(id, __assign(__assign({}, updateUser), { id: id }));
        return true;
    };
    return InMemoryDB;
}());
var myDb = new InMemoryDB();
myDb.insertUser({
    id: '1',
    fname: 'nitish',
    lname: 'maladakar',
    contact: {
        mobile: '998657898',
    },
    address: {
        street: 1,
        pin: 12323,
        country: 'India'
    }
});
console.log(myDb);
