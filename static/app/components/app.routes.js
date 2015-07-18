/**
 * Created by sylvain.leborgne on 02/07/15.
 */
export default (ngModule) => ngModule.config(routeConfiguration);

function routeConfiguration($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
        name: 'login',
        url: '/login',
        templateUrl: './components/authentication/authenticationView.html',
        controller: 'AuthenticationController as authenticationController'
    });
}