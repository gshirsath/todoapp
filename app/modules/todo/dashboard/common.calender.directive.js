'use strict';
(function () {
   angular
       .module('common.calender.directives',[])
       .directive('commonDatePicker',commonDatePicker);
   commonDatePicker.$inject = [];
   
   function commonDatePicker() {
      function link(scope, element, attr) {
         scope.today = today;
         scope.clear = clear;
         scope.disabled = disabled;
         scope.openCal = openCal;
         scope.setDate = setDate;
         function today() {
            scope.dt = new Date();
         }
         scope.today();
         
         function clear() {
            scope.modalname = null;
         }
         scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yyyy',
            maxDate: new Date(2016, 12, 31),
            minDate: new Date(),
            startingDay: 1
         };
         // Disable weekend selection
         function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
         }
         function openCal() {
            scope.popup.opened = true;
         };
         function setDate(day, month, year) {
            scope.modalname = new Date( day, month, year);
         };

         scope.calDateFormat = 'dd-MM-yyyy';
         scope.altInputFormats = 'dd-MM-yyyy';

         scope.popup = {
            opened: false
         };

         var tomorrow = new Date();
         tomorrow.setDate(tomorrow.getDate() + 1);
         var afterTomorrow = new Date();
         afterTomorrow.setDate(tomorrow.getDate() + 1);
         scope.events = [
            {
               date: tomorrow,
               status: 'full'
            },
            {
               date: afterTomorrow,
               status: 'partially'
            }
         ];

         function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
               var dayToCheck = new Date(date).setHours(0,0,0,0);

               for (var i = 0; i < scope.events.length; i++) {
                  var currentDay = new Date(scope.events[i].date).setHours(0,0,0,0);

                  if (dayToCheck === currentDay) {
                     return scope.events[i].status;
                  }
               }
            }

            return '';
         }
      }
      return {
         restrict: 'E',
         transclude: true,
         scope:{
            mandatoryfildevalue: "=mandatoryfildevalue",
            modalname: "=datemodalname",
            fieldname: "=datefieldname",
            inputclass: "="
         },
         templateUrl: '/app/partials/calender.html',
         link: link
      };
   }
   
}());
