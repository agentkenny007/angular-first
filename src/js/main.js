import angular from 'angular';
import {ButtonController} from './controllers/controller';

console.log(angular);

angular
   .module('app',[])
   .controller('ButtonController', ButtonController);
