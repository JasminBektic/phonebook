(function(){"use strict";function t(t,e){e.hashPrefix(""),t.when("/",{templateUrl:"dist/views/contacts.html",controller:"ContactsController",controllerAs:"CC"}).when("/contact/add",{templateUrl:"dist/views/add_contact.html",controller:"ContactsController",controllerAs:"CC"}).when("/contact/:id/edit",{templateUrl:"dist/views/edit_contact.html",controller:"ContactsController",controllerAs:"CC"}).when("/contact/:id/delete",{templateUrl:"dist/views/delete_contact.html",controller:"ContactsController",controllerAs:"CC"})}function e(t,e){e.$on("$routeChangeStart",function(t,e,n){})}angular.module("phonebook",["ngRoute"]),angular.module("phonebook").config(t).run(e),t.$inject=["$routeProvider","$locationProvider"],e.$inject=["$location","$rootScope"]})(),function(){"use strict";function t(t,e){function n(t){u.mergeFormVisible=!0,u.merged_contact=t,u.form_data=a(),u.merged_contact.forEach(function(t){u.preparedToDelete.push(t.id)})}function o(){u.mergeListVisible=!0;for(var t=_.orderBy(u.contacts,["first_name","last_name"]),e=[],n=0;n<t.length-1;n++)t[n+1].first_name==t[n].first_name&&t[n+1].last_name==t[n].last_name&&(e.push(t[n]),e.push(t[n+1]));var o=_.uniq(e);u.merge_list=_.groupBy(o,"first_name")}function r(){var t="";Object.keys(u.merge_list).forEach(function(e,n){u.merge_list[e].map(function(n){n.id==u.preparedToDelete[0]&&(t=e)})}),delete u.merge_list[t],u.preparedToDelete.forEach(function(t){l(t)}),i(),u.preparedToDelete=[]}function a(){return{first_name:"",last_name:"",address:"",postal_code:"",city:"",country:"",phone:[],email:""}}function c(e){t.getContacts(e).then(function(t){e?u.form_data=t:u.contacts=t},function(t){console.log(t)})}function i(){t.addContact(u.form_data).then(function(t){console.log(t),c(null)},function(t){console.log(t)})}function s(){t.updateContact(u.form_data).then(function(t){console.log(t)},function(t){console.log(t)})}function l(e){var n=e||u.form_data.id;t.deleteContact(n).then(function(t){console.log(t),c(null)},function(t){console.log(t)})}var u=this,f=e.current.params.id;u.contacts=[],u.form_data={},u.merge_list={},u.searchTerm="",u.currentPage=0,u.pageSize=3,u.mergeFormVisible=!1,u.mergeListVisible=!1,u.preparedToDelete=[],function(){c(f),u.addContact=i,u.updateContact=s,u.deleteContact=l,u.showForm=n,u.mergeList=o,u.mergeProcess=r}()}angular.module("phonebook").controller("ContactsController",t),t.$inject=["ContactsService","$route"]}(),function(){"use strict";function t(){return{restrict:"E",scope:{items:"=",pageSize:"=",currentPage:"="},templateUrl:"dist/views/pagination.html",controller:n,controllerAs:"PGC",bindToController:!0,link:e}}function e(t,e,n){}function n(t){function e(){n.maxPages=Math.ceil(n.items.length/n.pageSize),n.items.length/n.pageSize<1&&n.items.length/n.pageSize>0&&(n.maxPages=1),0==n.items.length&&(n.maxPages=0)}var n=this;t.$watch(function(){return n.items},function(t,n){t.length&&e()}),t.$watch(function(){return n.pageSize},e),n.setPage=function(t){n.currentPage=t},n.generatePages=function(t){for(var e=[],n=1;n<=t;n++)e.push(n);return e}}angular.module("phonebook").directive("pagination",t),n.$inject=["$scope"]}(),function(){"use strict";function t(t,e){function n(n){var o=t.defer(),r=n||"";return e.get(i+r).then(function(t){o.resolve(t.data)},function(t){o.reject(t.data)}),o.promise}function o(n){var o=t.defer();return e.post(i,n).then(function(t){o.resolve(t.data)},function(t){o.reject(t.data)}),o.promise}function r(n){var o=t.defer();return e.put(i+n.id,n).then(function(t){o.resolve(t.data)},function(t){o.reject(t.data)}),o.promise}function a(n){var o=t.defer();return e.delete(i+n).then(function(t){o.resolve(t.data)},function(t){o.reject(t.data)}),o.promise}var c={},i="http://localhost:3000/contacts/";return function(){c.getContacts=n,c.addContact=o,c.updateContact=r,c.deleteContact=a}(),c}angular.module("phonebook").service("ContactsService",t),t.$inject=["$q","$http"]}(),function(){"use strict";function t(){return function(t,e){var n=[];return t.forEach(function(t){t.first_name.toLowerCase().startsWith(e.toLowerCase())||t.last_name.toLowerCase().startsWith(e.toLowerCase())||t.email.toLowerCase().startsWith(e.toLowerCase())?n.push(t):t.phone.forEach(function(o){o.number.toLowerCase().startsWith(e.toLowerCase())&&n.push(t)})}),n}}angular.module("phonebook").filter("search",t)}(),function(){"use strict";function t(){return function(t,e){return e=+e,t?t.slice(e):[]}}angular.module("phonebook").filter("startFrom",t)}();
//# sourceMappingURL=app.js.map
