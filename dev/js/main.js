var Person = Backbone.Model.extend({
    defaults: {
        name: "Name",
        age: 22,
        job: 'web-developer'
    },
    walk: function () {
        return this.get('name') + " is walking";
    }
});


/*
var Person = function (config) {
    this.name = config.name;
    this.age = config.age;
    this.job = config.job;
};

Person.prototype.walk = function () {
    return this.name + " is walking";
}

var nick = new Person({ name:'Nick', age:24, job:'Frontend-developer' });
*/