var d = new Date();
var date = d.getDate();  // lấy ngày hôm nay.
var day = d.getDay();    // lấy thứ của ngày hôm nay.
var month = d.getMonth() + 1;
var year = d.getFullYear();


document.getElementById('name-month').innerHTML = `Tháng ` + month + ` - ` + year;
var tam = date;
// lấy thứ của ngày đầu tiên trong tháng.
while (tam > 1) {
     switch (day) {
          case 0:
               day = 6;
               break;
          default:
               day -= 1;
               break;
     }
     tam -= 1;
}

// với cột mốc thứ đâu tiên là chủ nhật, chèn thêm các ô trống để ngày và thứ trong tháng trùng nhau.
var Gett = document.getElementById('day-of-month');
for (let index = 0; index < day; index++) {
     var _class = `day-of-mo false pass`;
     var html = `<li class="` + _class + `"></li>`
     Gett.insertAdjacentHTML('beforeend', html);
}

// lấy số ngày trong tháng
var maxday = 30;

switch (month) {
     case 1:
          maxday = 31;
          break;
     case 3:
          maxday = 31;
          break;
     case 5:
          maxday = 31;
          break;
     case 7:
          maxday = 31;
          break;
     case 8:
          maxday = 31;
          break;
     case 10:
          maxday = 31;
          break;
     case 12:
          maxday = 31;
          break;
     case 2:
          maxday = 28;
          var nhuan = false;
          if (year % 100 == 0) {
               if (year % 4 == 0) {
                    nhuan = true;
               }
          } else {
               if (year % 4 == 0) {
                    nhuan = true;
               }
          }
          if (nhuan) maxday = 29;
          break;
}

// in ra các ngày trong tháng.
for (let index = 1; index <= maxday; index++) {
     var _class = `day-of-mo false pass`;
     var _id = ``;
     if (index == date) {
          _class = `day-of-mo not`;
          _id = `true`;
     } else
     if (index > date) {
          _class = `day-of-mo false not`;
     }
     var html = `<li class="` + _class + `" id="` + _id + `">` + index + `</li>`
     Gett.insertAdjacentHTML('beforeend', html);
}
