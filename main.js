/**
 * Khối 1:
 * _Bảng điểm theo từng khu vực và đối tượng
 * _Khu vực (lấy từ form)
 * _Đối tượng (lấy từ form)
 * _Điểm 3 môn (lấy từ form)
 * _Điểm chuẩn của hội đồng (lấy từ form)
 * 
 * Khối 2:
 * B1: Tạo biến chứa điểm 3 môn, điểm chuẩn và điểm tổng kết
 * diem1
 * diem2
 * diem3
 * diemChuan
 * diemTK = 0
 * 
 * B2: 
 * lấy giá trị khu vực và đối tượng ưu tiên
 * 
 * B3: xác định có điểm nào bằng 0 
 *  _if(diem1 ==0 || diem2 == 0 || diem3 == 0)
 *      //bị loại
 *  _else
 *      //Bước 4 
 * B4: 
 * Tính điểm 
 *  _diemTK = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong
 * So sánh điểm tổng kết với điểm chuẩn hội đồng
 *  _if(diemTK >= diemChuan)
 *      //đậu
 *  _else
 *      //rớt
 * 
 * Khối 3:
 * _Điểm tổng kết và thí sinh đậu hay rớt
 * 
 */
var tinhDiem = document.getElementById("tinhDiem");
console.log(tinhDiem);

tinhDiem.addEventListener("click", function (e) {
    e.preventDefault();

    var diem1 = parseFloat(document.getElementById("diem1").value);
    var diem2 = parseFloat(document.getElementById("diem2").value);
    var diem3 = parseFloat(document.getElementById("diem3").value);
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var diemTK = 0;

    var diemKhuVuc = parseFloat(document.getElementById("khuVuc").value);
    var diemDoiTuong = parseFloat(document.getElementById("doiTuong").value);

    var kq = document.getElementById("ketQua");

    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        kq.innerHTML = "Thí sinh bị loại do có điểm 0";
    }
    else {
        diemTK = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
        if (diemTK >= diemChuan) {
            kq.innerHTML = "Điểm tổng kết: " + diemTK + "<br>" + "Kết quả: đậu";
        }
        else {
            kq.innerHTML = "Điểm tổng kết: " + diemTK + "<br>" + "Kết quả: rớt";
        }
    }
})


/**
 * Khối 1:
 * _Tên khách hàng
 * _Số kW tiêu thụ
 *
 * Khối 2:
 * B1: Biến chứa bảng giá theo kW (const)
 * B2: lấy các giá trị từ form
 * B3: Tính tiền điện theo kW
 *  _Mức 1: 50 kW đầu tiền (soKW <= 50): 
 *      tienDien = soKW * tien50Dau
 *  _Mức 2: 50 kế (50 < soKW <= 100): 
 *      tienDien = (50 * tien50Dau) + (soKW - 50) * tien50Ke
 *  _Mức 3: 100 kế (100 < soKW <= 200): 
 *      tienDien = (50 * tien50Dau) + (50 * tien50Ke) + (soKW - 100) * tien100Ke
 *  _Mức 4: 150 kế (200 < soKW <= 350): 
 *      tienDien = (50 * tien50Dau) + (50 * tien50Ke) + (100 * tien100Ke) + (soKW - 200) * tien150Ke
 *  _Mức 5: còn lại (soKW > 350): 
 *      tienDien = (50 * tien50Dau) + (50 * tien50Ke) + (100 * tien100Ke) + (150 * tien150Ke) + (soKW - 350) * tienConLai
 * B4: Tính tiền điện
 *
 * Khối 3:
 * _Tổng tiền: tiền theo mức kW tiêu thụ
 *
 */

const tien50Dau = 500;
const tien50Ke = 650;
const tien100Ke = 850;
const tien150Ke = 1100;
const tienConLai = 1300;

var tinhTien = document.getElementById("tinhTien");
console.log(tinhTien);

tinhTien.addEventListener("click", function (e) {
    e.preventDefault();

    var soKW = parseFloat(document.getElementById("soKW").value);
    var ten = document.getElementById("ten").value;

    var tienDien = 0;
    if(soKW <= 50){
        tienDien = soKW * tien50Dau;
    }
    else if(50 < soKW <= 100){
        tienDien = (50 * tien50Dau) + (soKW - 50) * tien50Ke;
    }
    else if(100 < soKW <= 200){
        tienDien = (50 * tien50Dau) + (50 * tien50Ke) + (soKW - 100) * tien100Ke;
    }
    else if(200 < soKW <= 350){
        tienDien = (50 * tien50Dau) + (50 * tien50Ke) + (100 * tien100Ke) + (soKW - 200) * tien150Ke
    }
    else if(soKW > 350){
        tienDien = (50 * tien50Dau) + (50 * tien50Ke) + (100 * tien100Ke) + (150 * tien150Ke) + (soKW - 350) * tienConLai
    }
    else{
        console.log("Số kW không hợp lệ");
    }

    var hd = document.getElementById("hoaDon");
    hd.innerHTML = "Tên khách hàng: " + ten + "<br>" + "Hóa đơn tiền điện: " + tienDien + " VND"; 
})



