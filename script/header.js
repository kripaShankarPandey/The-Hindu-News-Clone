
    var a = document.getElementById("date1");
    
    var Days = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var Months = ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];
    
    var currentDay = new Date();
    var day = Days[currentDay.getDay()];
    var month = Months[currentDay.getMonth()];
    var year=currentDay.getFullYear();
    var date=currentDay.getDate();
    a.innerText =day+" "+date+" "+month+" "+year;
