(function() {
    "use-strict";
    angular
        .module('stateship')
        .controller('StateCtrl', StateCtrl);

    var stateNames={al:"Alabama",ak:"Alaska",az:"Arizona",ar:"Arkansas",ca:"California",co:"Colorado",ct:"Connecticut",de:"Delaware",fl:"Florida",ga:"Georgia",hi:"Hawaii",id:"Idaho",il:"Illinois","in":"Indiana",ia:"Iowa",ks:"Kansas",ky:"Kentucky",la:"Louisiana",me:"Maine",md:"Maryland",ma:"Massachusetts",mi:"Michigan",mn:"Minnesota",ms:"Mississippi",mo:"Missouri",mt:"Montana",ne:"Nebraska",nv:"Nevada",nh:"New Hampshire",nj:"New Jersey",nm:"New Mexico",ny:"New York",nc:"North Carolina",nd:"North Dakota",oh:"Ohio",ok:"Oklahoma",or:"Oregon",pa:"Pennsylvania",ri:"Rhode Island",sc:"South Carolina",sd:"South Dakota",tn:"Tennessee",tx:"Texas",ut:"Utah",vt:"Vermont",na:"Virginia",wa:"Washington",wv:"West Virginia",wi:"Wisconsin",wy:"Wyoming"}

    function StateCtrl(currentState, representatives, StateService) {

        var vm = this;
        var repArrays = StateService.getRepArrays(); //an array of arrays: [national, state, local]
        vm.reps = representatives;
        vm.nationalReps = repArrays[0];
        vm.stateReps = repArrays[1];
        vm.localReps = repArrays[2];
        vm.state = currentState;
        vm.stateName = stateNames[vm.state];

        console.log(vm.nationalReps, vm.stateReps, vm.localReps);



        
    }
})();
