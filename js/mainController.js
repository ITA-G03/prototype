app.controller('pageCtrl', function ($scope) {
    $scope.resTypes = ['全部', '中餐', '西餐', '快餐', '饮料'];
    $scope.selectedResType = '全部';
    $scope.changeResType = function (type) {
        $scope.selectedResType = type;
    }

    $scope.selectedSortType = 'default';
    $scope.changeSortType = function (type) {
        $scope.selectedSortType = type;
    }

    $scope.res = [
        {
            id: 1,
            name: '炸Tomcat',
            img: 'img/res.jpg',
            rating: 4.3,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: 'Tomcat汉堡',
            img: 'img/res1.jpg',
            rating: 1.3,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: 'Tomcat肉',
            img: 'img/res2.jpg',
            rating: 3.3,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: '沙县Tomcat',
            img: 'img/res3.jpg',
            rating: 2,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: 'Tomcat煲',
            img: 'img/res4.jpg',
            rating: 5,
            sales: 13,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: '炸Tomcat',
            img: 'img/res.jpg',
            rating: 4.3,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: 'Tomcat汉堡',
            img: 'img/res1.jpg',
            rating: 1.3,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: 'Tomcat肉',
            img: 'img/res2.jpg',
            rating: 3.3,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: '沙县Tomcat',
            img: 'img/res3.jpg',
            rating: 2,
            sales: 43,
            price: 20,
            time: 30
        }, {
            id: 1,
            name: 'Tomcat煲',
            img: 'img/res4.jpg',
            rating: 5,
            sales: 13,
            price: 20,
            time: 30
        }

    ];
})

app.controller('carouselCtrl', function ($scope) {
    $scope.interval = 5000;
    var slides = $scope.slides = [
        {
            img: 'img/350.jpg',
            href: '#'
        },
        {
            img: 'img/351.jpg',
            href: '#'
        }, {
            img: 'img/352.jpg',
            href: '#'
        }, {
            img: 'img/354.jpg',
            href: '#'
        }
    ];
});