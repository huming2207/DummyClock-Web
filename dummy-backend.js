function loadPtvTimeTable(){
    $.getJSON("http://45.63.29.30/ptv.json", 
    function(data) {
        if(data.has_error == false)
        {
            var depart_index;
            for(depart_index = 0; depart_index < data.departures.length; depart_index++)
            {
                $("#depart-title-" + (depart_index+1).toString()).text(data.departures[depart_index].direction + " - " + data.departures[depart_index].time_left + " minutes");
                $("#depart-details-" + (depart_index+1).toString()).text("Est: " + data.departures[depart_index].est_time);
            }
        } 
    }); 
}

function loadRmitTimeTable(){
    $.getJSON("http://45.63.29.30/rmit.json", 
    function(data) {
        if(data.has_error == false)
        {
            var rmit_index;
            for(rmit_index = 0; rmit_index < data.timetables.length; rmit_index++)
            {
                $("#rmit-title-" + (rmit_index+1).toString()).text(data.timetables[rmit_index].title);
                $("#rmit-details-" + (rmit_index+1).toString()).text(data.timetables[rmit_index].activity + ", from " + data.timetables[rmit_index].start_time + " to " + data.timetables[rmit_index].end_time);
            }
        } 
    }); 
}

var ptvTimerToken = setInterval("loadPtvTimeTable()", 10000);
var rmitTimerToken = setInterval("loadRmitTimeTable()", 10000);
