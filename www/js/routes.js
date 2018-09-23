angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.buildings', {
    url: '/buildings',
    views: {
      'tab1': {
        templateUrl: 'templates/buildings.html',
        controller: 'buildingsCtrl'
      }
    }
  })

  .state('tabsController.personal', {
    url: '/personal',
    views: {
      'tab2': {
        templateUrl: 'templates/personal.html',
        controller: 'personalCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/Tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.buildingInfo', {
    url: '/buldingInfo',
	params: {
		id: "0"		
},
    views: {
      'tab1': {
        templateUrl: 'templates/buildingInfo.html',
        controller: 'buildingInfoCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.addCampaign', {
    url: '/addCampaign',
	params: {
		buildingID: "0",
		buildingTitle: "0"		
},
    views: {
      'tab1': {
        templateUrl: 'templates/addCampaign.html',
        controller: 'addCampaignCtrl'
      }
    }
  })

  .state('tabsController.campaignInfo', {
    url: '/campaignInfo',
	params: {
		id: ""		
},
    views: {
      'tab1': {
        templateUrl: 'templates/campaignInfo.html',
        controller: 'campaignInfoCtrl'
      }
    }
  })

  .state('tabsController.campaign', {
    url: '/campaign',
	params: {
		id: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/campaign.html',
        controller: 'campaignCtrl'
      }
    }
  })

  .state('tabsController.members', {
    url: '/members',
	params: {
		id: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/members.html',
        controller: 'membersCtrl'
      }
    }
  })

    .state('tabsController.cambridgePrize', {
    url: '/cambridgePrize',
	params: {
    campaignID: "-KV25NS7A1hb7QlDd8LD",
    userID: ""	
},
    views: {
      'tab2': {
        templateUrl: 'templates/cambridgePrize.html',
        controller: 'cambridgePrizeCtrl'
      }
    }
  })

  .state('tabsController.messageBoard', {
    url: '/messageBoard',
	params: {
		id: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/messageBoard.html',
        controller: 'messageBoardCtrl'
      }
    }
  })

  .state('tabsController.campaignPictures', {
    url: '/campaignPictures',
	params: {
		campaignID: "0",
		userID: "0"		
},
    views: {
      'tab2': {
        templateUrl: 'templates/campaignPictures.html',
        controller: 'campaignPicturesCtrl'
      }
    }
  })

    .state('tabsController.help', {
    url: '/help',
	params: {
		id: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl',
      }
    }
  })

  .state('welcome', {
    url: '/welcome',
    params: {
      flag: 1,
    },
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('howTo', {
    url: '/howTo',
    templateUrl: 'templates/howTo.html',
  })

$urlRouterProvider.otherwise('/welcome')

  

});