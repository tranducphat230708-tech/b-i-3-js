let tienVay = parseFloat(prompt("Nhập số tiền vay / gửi (triệu đồng):"));
let laiSuat = parseFloat(prompt("Nhập lãi suất hàng năm (%):"));
let soNam = parseInt(prompt("Nhập số năm (n):"));

let tienLaiMotNam = tienVay * (laiSuat / 100);
let tongTien = tienVay + soNam * tienLaiMotNam;

alert("Sau " + soNam + " năm, tổng số tiền cả gốc lẫn lãi là: " + tongTien + " triệu đồng");

document.getElementById("ketQua").innerHTML = 
    "<p>Số tiền ban đầu: <b>" + tienVay + "</b> triệu đồng</p>" +
    "<p>Lãi suất: <b>" + laiSuat + "%/năm</b></p>" +
    "<p>Số năm: <b>" + soNam + "</b> năm</p>" +
    "<p>Tổng tiền sau " + soNam + " năm: <b>" + tongTien + " triệu đồng</b></p>";