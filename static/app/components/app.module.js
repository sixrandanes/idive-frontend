/**
 * Created by sylvain.leborgne on 02/07/15.
 */

export default {};

var seforaAdminModule = angular.module('myModule',
    [
        'ui.router'
    ])
    .constant('BACKEND_URL_SERVER', 'https://test')
    .constant('VERSION', '1.0');

var components = [
    appRoutes
    ];

function bootstrapComponents(ngModule, components) {
    components.forEach((component)=> {
        component(ngModule);
    })
}


bootstrapComponents(myModule, components);

export default myModule;