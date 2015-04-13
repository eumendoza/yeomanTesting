'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('tareasApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Tiene que tener 4 items al empezar', function () {
    expect(scope.tareas.length).toBe(4);
  });

  it('Tiene que haber 5 items despues de añadir 1', function(){
    scope.tarea = 'Tarea Test';
    scope.addTarea();
    expect(scope.tareas.length).toBe(5);
  });

  it('Tiene que haber 4 items despues de eliminar 1', function(){
    scope.eliminarTarea(0);
    expect(scope.tareas.length).toBe(3);
  });

});
