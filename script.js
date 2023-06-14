//Live Clock Code
let hrsCount = document.getElementsByClassName("hrsCount");
let minsCount = document.getElementsByClassName("minsCount");
let secsCount = document.getElementsByClassName("secsCount");
let Format = document.getElementsByClassName("Format");
function startClock() {
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let AMPM = "AM";
  if (hrs > 12) {
    hrs -= 12;
    AMPM = "PM";
  }
  if (hrs === 0) {
    hrs = 12;
  }

  hrsCount[0].innerHTML = `${hrs}`;
  minsCount[0].innerHTML = `${mins}`;
  secsCount[0].innerHTML = `${secs}`;
  Format[0].innerHTML = `${AMPM}`;
}
setInterval(() => {
  startClock();
}, 1000);

//Change content according to the current time
let textTag = document.getElementsByClassName("textTag");
let msgText = document.getElementsByClassName("msgText");
let ImgBox = document.getElementsByClassName("ImgBox");
let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");
let field3 = document.getElementById("field3");
let field4 = document.getElementById("field4");
let textAlarmLine = document.getElementsByClassName("textAlarmLine");
let option = document.querySelectorAll("option");

var morning_time = option[2].value;
var afternoon_time = option[3].value;
var evening_time = option[8].value;
var night_time = option[8].value;
function selectedOption() {
  var text1 = field1.options[field1.selectedIndex].value;
  var text2 = field1.options[field2.selectedIndex].value;
  var text3 = field1.options[field3.selectedIndex].value;
  var text4 = field1.options[field4.selectedIndex].value;
  console.log(text1);
  console.log(text2);
  console.log(text3);
  console.log(text4);
  console.log(morning_time);
  console.log(afternoon_time);
  console.log(evening_time);
  console.log(night_time);

  if (text1 !== morning_time) {
    var text = field1.options[field1.selectedIndex].text;
    textAlarmLine[0].innerHTML = `${text}`;
    textTag[0].innerHTML = "GOOD MORNING!! WAKE UP !!";
    msgText[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    ImgBox[0].style.backgroundImage = "url('./Group 5183 (1).svg')";
    morning_time = text1;
  }
  if (text2 !== afternoon_time) {
    var text = field2.options[field2.selectedIndex].text;
    textAlarmLine[1].innerHTML = `${text}`;
    textTag[0].innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP";
    msgText[0].innerHTML = "LET'S HAVE SOME LUNCH !!";
    ImgBox[0].style.backgroundImage = "url('./Group 5183.svg')";
    afternoon_time = text2;
  }
  if (text3 !== evening_time) {
    var text = field3.options[field3.selectedIndex].text;
    textAlarmLine[2].innerHTML = `${text}`;
    textTag[0].innerHTML = `GOOD EVENING!!`;
    msgText[0].innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    ImgBox[0].style.backgroundImage = "url('./lunch_image.png')";
    evening_time = text3;
  }
  if (text4 !== night_time) {
    var text = field4.options[field4.selectedIndex].text;
    textAlarmLine[3].innerHTML = `${text}`;
    textTag[0].innerHTML = `GOOD NIGHT!!`;
    msgText[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    ImgBox[0].style.backgroundImage = "url('./Group 5194.svg')";
    night_time = text4;
  }
}

function onHoverFunc() {
  document.getElementsByClassName("setAlarmBtn")[0].innerHTML = "Party Time!";
}
function onLeaveFunc() {
  document.getElementsByClassName("setAlarmBtn")[0].innerHTML = "Set Alarm";
}
