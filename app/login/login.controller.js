var app = angular.module('app-login', []);

app.controller('LoginCtrl', ['$location', 'IdentityService', function ($location, IdentityService) {
    this.user = {};
    this.invalidGrant = false;
    
    this.login = () => {
        IdentityService.login(this.user)
            .then(this.handleSuccess(), this.handleError());
    };
    
    this.handleSuccess = () => { return () => $location.path('/'); };
    
    this.handleError = () => { return () => this.invalidGrant = true };
}]);

export default app;
