var app = angular.module("amort", []);

app.controller("MainCtrl", ["$scope", function ($scope) {

    $scope.loan_amount = null;
    $scope.interest_rate = null;
    //    $scope.months = null;
    $scope.pmt = null;
    $scope.selected = null;
    $scope.output = null;

    $scope.meses = [
        {
            'month': '6'
        },
        {
            'month': '12'
        },
        {
            'month': '18'
        },
        {
            'month': '24'
        },
        {
            'month': '36'
        },
        {
            'month': '48'
        },
        {
            'month': '60'
        }
    ];

    $scope.codigo = [
        {
            'lookupCode': '6',
            'description': ' 06 Meses'
        },
        {
            'lookupCode': '12',
            'description': '12 Meses'
        },
        {
            'lookupCode': '18',
            'description': '18 Meses'
        },
        {
            'lookupCode': '24',
            'description': '24 Meses'
        },
        {
            'lookupCode': '36',
            'description': '36 Meses'
        },
        {
            'lookupCode': '48',
            'description': '48 Meses'
        },
        {
            'lookupCode': '60',
            'description': '60 Meses'
        }
    ];
    //        $scope.myMonth = $scope.months;



    $scope.calculate = function (rate, nper, pv) {

        var pvif = Math.pow(1 + rate, nper);
        var result = rate / (pvif - 1) * -(pv * pvif);
        $scope.pmt = result.toFixed(2);
        $scope.out = $scope.pmt * $scope.meses.month;
        $scope.output = $scope.out.toFixed(2);

    };

    }]);