var library = (function() {
var monthNum = new Date().getMonth() +1;



  return /*something?*/{
	TimeStamp: (function(){
   	  return /*something here?*/{
		UnixTimestamp: function(){},
		UnixMillisecond: function(){}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){},
			AbrDayOfWeek: function(){},
			FirstTwoOfWeek: function(){},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){},
					DateDblDigit: function(){}
				}
			})(),
			MonthNumber: function(){
				var myMonthNumber = monthNum;
				return String(myMonthNumber);
			},
			MonthNumberDblDigit: function(){
				var myMonthNumberDblDigit = monthNum;
					if (myMonthNumberDblDigit < 10) {	
						return String('0' + myMonthNumberDblDigit);
					} else {
						return String(myMonthNumberDblDigit);
					}
			},
			
			AbrOfCurrentMonth: function(){
				//var AbrOfCurrentMonth = monthNum - 1;
				var MonArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
					return MonArray[monthNum - 1];
			},
			CurrentMonth: function(){}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){},
			YearAbr: function(){}
		}
	})(),
	Defaults: function(){}
  }
})();