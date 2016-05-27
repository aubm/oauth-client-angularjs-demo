var app = angular.module('app-home', []);

app.controller('HomeCtrl', ['IdentityService', function (IdentityService) {
    this.user = 'anonymous';
    
    this.me = function () {
        IdentityService.me()
            .then(u => this.user = u.email, _ => this.user = 'anonymous')
    };
}]);

export default app;
