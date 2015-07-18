/**
 * Created by sylvain.leborgne on 02/07/15.
 */

export default {};

var seforaAdminModule = angular.module('seforaAdminModule',
    [
        'ui.router'
    ])
    .constant('BACKEND_URL_SERVER', 'https://localhost:8443')
    .constant('VERSION', '1.0');

var components = [
    appRoutes
    ];

function bootstrapComponents(ngModule, components) {
    components.forEach((component)=> {
        component(ngModule);
    })
}


bootstrapComponents(seforaAdminModule, components);

export default seforaAdminModule;