/**
 * Created by sylvain.leborgne on 02/07/15.
 */
export default (ngModule) => ngModule.config(routeConfiguration);

function routeConfiguration($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/test');

    $stateProvider.state('test', {
        name: 'test',
        url: '/test',
        templateUrl: './components/module/moduleView.html',
        controller: 'MyController as myController'
    });
}