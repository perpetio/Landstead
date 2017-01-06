function propertyRevokeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.Landstead.property.revoke', {
            url: '/property/revoke',
            controller: 'propertyRevokeCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'modules/landstead/propertyRevoke/propertyRevoke.html',
            title: 'Revoke property'
        });

};

export default propertyRevokeConfig;