(function(){"use strict";function o(o,n){n.hashPrefix(""),o.when("/contacts",{templateUrl:"dist/views/test.html",controller:"ContactsController",controllerAs:"CC"})}function n(o,n){n.$on("$routeChangeStart",function(o,n,t){})}angular.module("phonebook",["ngRoute"]),angular.module("phonebook").config(o).run(n),o.$inject=["$routeProvider","$locationProvider"],n.$inject=["$location","$rootScope"]})(),function(){"use strict";function o(o){function n(){o.getContacts().then(function(o){console.log(o)},function(o){console.log(o)})}var t=this;(function(){n(),t.getContacts=n})()}angular.module("phonebook").controller("ContactsController",o),o.$inject=["ContactsService"]}(),function(){"use strict";function o(o,n){function t(n){var t=(o.defer(),n||null);console.log(t)}var e={};return function(){e.getContacts=t}(),e}angular.module("phonebook").service("ContactsService",o),o.$inject=["$q","$http"]}();
//# sourceMappingURL=app.js.map
