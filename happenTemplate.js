var library = (function() {
var monthNum = new Date().getMonth() +1;
var dayNum = new Date().getDate();
var dateOfYear = new Date().getFullYear();
var dayOfWeek = new Date().getDay();
var fullDayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  return /*something?--no*/{
	TimeStamp: (function(){//done
   	  return /*something here?--no*/{
		UnixTimestamp: function(){
			var myUnixTimeStamp = new Date().getTime();
			return String(Math.floor(myUnixTimeStamp/1000));//wrong--fixed
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
	  	    WithSeconds: function(){
				var hour = new Date().getHours();
				var minute = new Date().getMinutes();
				var second = new Date().getSeconds();
				return String(hour + ":" + minute + ":" + second);
			  },
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
	Second: (function(){//done
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
	Minute: (function(){//done
		return{
			Minute: function(){
				var myMinute = new Date().getMinutes();
				return String(myMinute);
			},
			DblDigit: function(){
				var myDblDigit = new Date().getMinutes();
				if (myDblDigit < 10) {	
						return String('0' + myDblDigit);
					} else {
						return String(myDblDigit);
					}
			}
		}
	})(),
	Hour: (function(){//done
		return {
			TwentyFourHour: function() {
				var myTwentyFourHour = new Date().getHours();
				return String(myTwentyFourHour);
			},
			TwelveHour: function() {
				var myTwelveHour = new Date().getHours();
				if (myTwelveHour > 12){
					return String(myTwelveHour -12);
				}else{
					return String(myTwelveHour);
				}
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var hours = new Date().getHours();
						var ampm = (hours >= 12)? 'PM': 'AM';
						return String(ampm);
					},
					LowerCase: function(){
						var hours = new Date().getHours();
						var ampm = (hours >= 12)? 'pm': 'am';
						return String(ampm);
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				return fullDayArray[dayOfWeek];
			},
			AbrDayOfWeek: function(){
				return fullDayArray[dayOfWeek].substr(0,3);
			},
			FirstTwoOfWeek: function(){
				return fullDayArray[dayOfWeek].substr(0,2);
			},
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