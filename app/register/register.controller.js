var app = angular.module('app-register', []);

app.controller('RegisterCtrl', ['$location', 'IdentityService', function ($location, IdentityService) {
    this.newUser = {};
    this.register = () => {
        IdentityService.register(this.newUser)
            .then(() => $location.path('/'));
    };
}]);

export default app;
