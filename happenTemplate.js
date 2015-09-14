var library = (function() {
var monthNum = new Date().getMonth() +1;
var dayNum = new Date().getDate();
var dateOfYear = new Date().getFullYear();

  return /*something?*/{
	TimeStamp: (function(){
   	  return /*something here?*/{
		UnixTimestamp: function(){
			var myUnixTimeStamp = new Date().getTime();
			return String(myUnixTimeStamp);
		},
		UnixMillisecond: function(){
			var myUnixTimeStamp = new Date().getTime();
			return String(myUnixTimeStamp);		
		}
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
			Second: function(){
				var mySecond = new Date().getSeconds();
				return String(mySecond);
			},
			DblDigit: function(){
				var myDblDigit = new Date().getSeconds();
				if (myDblDigit < 10) {
					return String("0" + myDblDigit);
				}else{
					return String(myDblDigit);
				}
			}
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
					Numeral: function(){
						var myNum = dayNum;
						return String(myNum);
					},
					Ordinal: function(){
						var myOrdinal = dayNum + "eleventeenth";
						return String(myOrdinal);
					},
					DateDblDigit: function(){
						var myDateDblDigit = dayNum;
						if (myDateDblDigit < 10) {	
						return String('0' + myDateDblDigit);
					} else {
						return String(myDateDblDigit);
					}
					}
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
			CurrentMonth: function(){ 
				var MonthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
					return MonthArray[monthNum - 1];
			}
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
			YearFull: function(){
				return String(dateOfYear);
			},
			YearAbr: function(){
				return dateOfYear.toString().substr(2);
			}
		}
	})(),
	Defaults: function(){}
  }
})();