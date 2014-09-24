'use strict';

var customerServices = angular.module('myApp.version', ['ngResources']);
customerServices.factory('Customers', function($resource){
    return $resource('http://localhost:8080/RestFul_Example/webresources/customer', {}, {
        query:{method: 'GET', isArray:true}
    });
});