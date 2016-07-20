export function ButtonController($scope){
    $scope.count = 0;
    $scope.text = '0 likes';
    $scope.addLike = count => {
        $scope.text = $scope.count ? ++$scope.count + ' likes' : ++$scope.count + ' like';
    };
}

ButtonController.$inject = ['$scope'];
