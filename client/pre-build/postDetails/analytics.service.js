angular.module('kargo')
  .factory('Analytics', function ($http) {
    var factory = { };
    function getFormattedDate(date) { //function to format dates as the tracker expects them
        //for leading '0' in date (you always want the last 2 digits)- '012' becomes '12' but '09' stays '09'
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + (date.getDate())).slice(-2);
        return date.getFullYear() + "-" + month + "-" +  day;
    }

    function fixData(brokenData, dates, fromDate, toDate) {
        var curr = new Date(fromDate);
        var actualCurr = curr.setDate(curr.getDate() + 1); //need to add a day because JS starts indexing at 0
        curr = new Date(actualCurr);
        var to = new Date(toDate);
        var actualTo = to.setDate(to.getDate() + 1);
        to = new Date(actualTo);
        while (curr <= to ) {
            var curDateFormatted = getFormattedDate(curr);
            if (dates.indexOf(curDateFormatted) === -1) { //missing date
                brokenData.push({
                    /*id will be added later so the id matches the position of
                    the date when the data is sortedthe data being sent from the
                    API was in random order so there was no way of knowing the right id */
                    date: curDateFormatted,
                    hits: 0
                });
            }
            var nextDate = curr.setDate(curr.getDate() + 1);
            curr = new Date(nextDate);

        }
        brokenData.sort(function (datum1, datum2) {
            var date1 = new Date(datum1.date);
            var date2 = new Date(datum2.date);
            return date1 - date2;
        });
        //add correct ids now
        return brokenData.map(function (curDatum, index) {
            curDatum.id = index + 1;
            return curDatum;
        });

    }

    factory.getDateRange = function(fromDate, toDate) {
        var date1 = new Date(fromDate);
        var date2 = new Date(toDate);
        if (date1 > date2) { //dates in wrong order so change order
            var tmp = fromDate;
            fromDate = toDate;
            toDate = tmp;
        }
        return $http.get('/api/tracker/' + fromDate + "/" + toDate).then(function(response) {
            var dates = response.data.data.map(function(datum) {
                return datum.date;
            });
            return fixData(response.data.data, dates, fromDate, toDate);
        }).catch(function(err) {
            console.log(err);
        });
    };


    return factory;
  });
