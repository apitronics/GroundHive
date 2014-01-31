var createGraph = function(sensorId){

  var ajaxDataRenderer = function(url, plot, options) {
    var ret = null;
    $.ajax({
      // have to use synchronous here, else the function
      // will return before the data is fetched
      async: false,
      url: url,
      dataType:"json",
      success: function(data) {
        ret = data;
      }
    });
	
	var arr = [[]];
	ret.forEach(function(d) {
		var datetime=new Date(d.readingTime);
		var curr_date = datetime.getDate();
		var curr_month = datetime.getMonth() + 1; //Months are zero based
	    	var curr_year = datetime.getFullYear();
		// curr_date + "-" + curr_month + "-" + curr_year
		arr[0].push([d.readingTime, d.value]);
	});
    return arr;
  };
 //metadata!
 var datapoints = '/readings/sensor/'+sensorId+"'";
 var plot2 = $.jqplot('chartdiv',datapoints ,{
    title: "Sensor Graph - Id: "+sensorId,
	axes:{
        xaxis:{
          renderer:$.jqplot.DateAxisRenderer,
          tickOptions:{
            formatString:'%b&nbsp;%#d %I:%M%p'
          } 
        }
       
     },
    dataRenderer: ajaxDataRenderer,
    dataRendererOptions: {
      unusedOptionalUrl: datapoints
    }
  });
}
