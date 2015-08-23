app.controller('pageCtrl', function ($scope) {
    $scope.foodTypes = ['全部', '汉堡', '鸡肉卷', '配餐', '甜点', '饮料'];
    $scope.selectedFoodType = '全部';
    $scope.changeFoodType = function (type) {
        $scope.selectedFoodType = type;
    }

    $scope.commentTypes = ['好评', '中评', '差评'];
    $scope.selectedCommentType = '好评';
    $scope.changeCommentType = function (type) {
        $scope.selectedCommentType = type;
    }

    $scope.order = function () {
        location.href = 'order.html';
    }

    $scope.foods = [
        {
            id: 1,
            name: '香辣Tomcat堡',
            sales: 43,
            price: 8
        },
        {
            id: 2,
            name: '炸Tomcat堡',
            sales: 43,
            price: 8
        }, {
            id: 3,
            name: 'Tomcat卷',
            sales: 43,
            price: 8
        }, {
            id: 4,
            name: 'Tomcat血',
            sales: 43,
            price: 8
        }, {
            id: 5,
            name: '新奥尔良Tomcat腿',
            sales: 43,
            price: 8
        }, {
            id: 1,
            name: '香辣Tomcat堡',
            sales: 43,
            price: 8
        },
        {
            id: 2,
            name: '炸Tomcat堡',
            sales: 43,
            price: 8
        }, {
            id: 3,
            name: 'Tomcat卷',
            sales: 43,
            price: 8
        }, {
            id: 4,
            name: 'Tomcat血',
            sales: 43,
            price: 8
        }, {
            id: 5,
            name: '新奥尔良Tomcat腿',
            sales: 43,
            price: 8
        }, {
            id: 1,
            name: '香辣Tomcat堡',
            sales: 43,
            price: 8
        },
        {
            id: 2,
            name: '炸Tomcat堡',
            sales: 43,
            price: 8
        }, {
            id: 3,
            name: 'Tomcat卷',
            sales: 43,
            price: 8
        }, {
            id: 4,
            name: 'Tomcat血',
            sales: 43,
            price: 8
        }, {
            id: 5,
            name: '新奥尔良Tomcat腿',
            sales: 43,
            price: 8
        }, {
            id: 1,
            name: '香辣Tomcat堡',
            sales: 43,
            price: 8
        },
        {
            id: 2,
            name: '炸Tomcat堡',
            sales: 43,
            price: 8
        }, {
            id: 3,
            name: 'Tomcat卷',
            sales: 43,
            price: 8
        }, {
            id: 4,
            name: 'Tomcat血',
            sales: 43,
            price: 8
        }, {
            id: 5,
            name: '新奥尔良Tomcat腿',
            sales: 43,
            price: 8
        }

    ]

    $scope.comments = [
        {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }, {
            rating: 4,
            body: '老板为什么我的鸡米花套餐少了鸡米花',
            date: '2015-07-07'
        }

    ]
})