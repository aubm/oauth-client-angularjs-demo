import angular from 'angular';
import 'angular-route';
import 'angular-cookies';
import oauth2 from 'angular-oauth2';
import home  from './home/home.controller';
import login  from './login/login.controller';
import register  from './register/register.controller';

var app = angular.module('my-app', ['ngRoute', oauth2.name, home.name, login.name, register.name]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {controller: 'HomeCtrl', controllerAs: 'home', templateUrl: 'app/home/home.template.html'})
        .when('/register', { controller: 'RegisterCtrl', controllerAs: 'reg', templateUrl: 'app/register/register.template.html' })
        .when('/login', {controller: 'LoginCtrl', controllerAs: 'log', templateUrl: 'app/login/login.template.html'});
}]);

app.config(['OAuthProvider', 'OAuthTokenProvider', function (OAuthProvider, OAuthTokenProvider) {
    OAuthProvider.configure({
        baseUrl: 'http://localhost:3000',
        clientId: '1234',
        grantPath: '/auth/v1/token'
    });
    
    OAuthTokenProvider.configure({ options: { secure: false } });
}]);

app.run(['OAuth', '$rootScope', '$location', function(OAuth, $rootScope, $location) {
    $rootScope.$on('oauth:error', function(event, rejection) {
        if ('invalid_token' === rejection.data.error) {
            return OAuth.getRefreshToken();
        }
        
        return $location.path('/login');
    });
}]);

app.factory('IdentityService', ['$http', 'OAuth', function ($http, OAuth) {
    return {
        register: register,
        login: login,
        me: me
    };
    
    function register(newUser) {
        return $http.post('/api/v1/users', newUser);
    }
    
    function login(user) {
        return OAuth.getAccessToken(user);
    }
    
    function me() {
        return $http.get('/api/v1/me').then(r => r.data);
    }
}]);
