// reset all time.

//document.getElementById('currentTime').innerHTML = Date.today().setTimeToNow().toString('HH:mm tt')
// document.getElementById("currentTime").innerHTML = moment().format("HH:mm A");
// document.getElementById("currentDate").innerHTML = Date.today()
//   .setTimeToNow()
//   .toString("dddd, dd/MM/yyyy");

// // for mobile
// document.getElementById("currentTime1").innerHTML = moment().format("HH:mm A");
// document.getElementById("currentDate1").innerHTML = Date.today()
//   .setTimeToNow()
//   .toString("dddd, dd/MM/yyyy");

// moment.locale('en');
// document.getElementById('currentHijriDate').innerHTML = moment().format('iD iMMMM, iYYYY');

var parentWindow = "";

Array.prototype.sortOn = function (key) {
  this.sort(function (a, b) {
    if (a[key] > b[key]) {
      return -1;
    } else if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  });
};

function receiveMessage(event) {
  parentWindow = event;
  // Do we trust the sender of this message?
  /*
  if (event.origin !== "http://example.com:8080")
    return;
  */

  // event.source is window.opener
  // event.data is "hello there!"

  // Assuming you've verified the origin of the received message (which
  // you must do in any case), a convenient idiom for replying to a
  // message is to call postMessage on event.source and provide
  // event.origin as the targetOrigin.
  //event.source.postMessage({ status: 'ok', message: 'woot'}, event.origin);

  function time(date) {
    // var endtime = Date.parse(date);

    var endtime = new Date(date.replace(" ", "T")).getTime();
    var today = new Date().getTime();
    var t = endtime - new Date().getTime();

    var sec = Math.floor((t / 1000) % 60);
    var min = Math.floor((t / 1000 / 60) % 60);
    var hour = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    if (days >= 100) {
      days = ("0" + days).substr(-3);
    } else {
      days = ("0" + days).substr(-2);
    }

    if (today >= endtime) {
      $(".container-widget").empty();
      clearInterval(interval);
      return;
    }

    $(".days")
      .empty()
      .append(
        `<span class="date-text text-center">${days}</span><span class="date-small-text text-center">Days</span>`
      );

    $(".hours")
      .empty()
      .append(
        `<span class="date-text text-center">${("0" + hour).substr(
          -2
        )}</span><span class="date-small-text text-center">Hours</span>`
      );

    $(".minutes")
      .empty()
      .append(
        `<span class="date-text text-center">${("0" + min).substr(
          -2
        )}</span><span class="date-small-text text-center">Minutes</span>`
      );

    $(".seconds")
      .empty()
      .append(
        `<span class="date-text text-center">${("0" + sec).substr(
          -2
        )}</span><span class="date-small-text text-center">Seconds</span>`
      );
  }

  if (event.data.action == "widgetenddate") {
    var dateRelated = event.data.data.date;
    setInterval(() => {
      time(dateRelated);
    }, 1000);
  }
}

window.addEventListener("message", receiveMessage, false);
