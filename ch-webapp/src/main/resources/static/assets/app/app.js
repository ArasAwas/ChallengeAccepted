/**
 * Created by Marcin on 18.03.2016.
 */

var app = angular.module('challengeAccepted', ['ui.router', 'ngResource']);

app.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'assets/app/home/home.html'
    })
        .state('about', {
            url: '/about',
            templateUrl: 'assets/app/about/about.html',
        })

        .state('my-challenges', {
            url: '/my-challenges',
            templateUrl: 'assets/app/challenge/my-challenges.html',
            controller: function ($scope, Challenges) {
                console.log(Challenges);

                Challenges.add(
                    {
                        id: 1,
                        name: "lalaalal",
                        owner: 'Zajda',
                        expirationdate: '23.03.2016',
                        image: 'small_cup.png',
                        participants: [
                            {
                                id: 1,
                                name: 'Shimmy'
                            }
                        ],
                        invited: [
                            {
                                id: 1,
                                name: 'Zajda'
                            }
                        ]
                    }
                );
                $scope.newchallenges = Challenges.db.newchallenges;
                $scope.acceptedchallenges = Challenges.db.acceptedchallenges;
                $scope.rejectedchallenges = Challenges.db.rejectedchallenges;
                $scope.finishedchallenges = Challenges.db.finishedchallenges;
            }
        })
        .state('challenge-info', {
            url: '/challenge-info',
            templateUrl: 'assets/app/challenge/challenge-info.html'
        })

        .state('new-challenge', {
            url: '/new-challenge',
            templateUrl: 'assets/app/challenge/new.html'
        })
    
        .state('login', {
            url: '/login',
            templateUrl: 'assets/app/authorization/login.html',
            controller: function ($scope, AuthService) {
                $scope.credentials = {
                    username: "", 
                    password: ""
                };
                $scope.signUp = function () {
                    console.log( $scope.credentials);
                    AuthService.logIn({username : $scope.credentials.username, password: $scope.credentials.password})
                }
                
            }
        });


});
