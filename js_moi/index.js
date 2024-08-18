const GRAB_CAR = "grabCar";
const GRAB_SUV = "grabSUV";
const GRAB_BLACK = "grabBlack";

function giaKmDauTien(loaiXe){
    switch (loaiXe){
        case GRAB_CAR:{
            return 8000;
        }
        case GRAB_SUV:{
            return 9000;
        }
        case GRAB_BLACK:{
            return 10000;
        }
    }
}

function giaKmTu1Den19(loaiXe){
    switch (loaiXe){
        case GRAB_CAR:{
            return 7500;
        }
        case GRAB_SUV:{
            return 8500;
        }
        case GRAB_BLACK:{
            return 9500;
        }
    }
}

function giaKmTu19TroLen(loaiXe){
    switch (loaiXe){
        case GRAB_CAR:{
            return 7000;
        }
        case GRAB_SUV:{
            return 8000;
        }
        case GRAB_BLACK:{
            return 9000;
        }
    }
}

function giaThoiGianCho(loaiXe){
    switch (loaiXe){
        case GRAB_CAR:{
            return 2000;
        }
        case GRAB_SUV:{
            return 3000;
        }
        case GRAB_BLACK:{
            return 3500;
        }
    }
}

document.getElementById("tinhTien").onclick = function(){
    console.log("đã click");

    let loaiXeGrabCar = document.querySelector("input[name='selector']:checked");
    console.log(loaiXeGrabCar);

    let soKm = document.getElementById("txt-km").value * 1;
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

    if(loaiXeGrabCar == null){
        alert("Vui lòng nhập loại xe")
        return;
    }
    
    console.log(soKm);
    console.log(thoiGianCho)

    let loaiXe = loaiXeGrabCar.value;
    let tienKmDauTien = giaKmDauTien(loaiXe);
    let tiemKmTu1Den19 = giaKmTu1Den19(loaiXe);
    let tiemKmTu19TroLen = giaKmTu19TroLen(loaiXe);
    let tienTgCho = giaThoiGianCho(loaiXe);

    let tongTien = 0;
    if(soKm <= 19){
        tongTien = 1 * tienKmDauTien + (soKm - 1) * tiemKmTu1Den19;
    }else{
        tongTien = 1 * tienKmDauTien + 18 * tienKmDauTien + (soKm - 19) * tiemKmTu19TroLen
    }

    let soLanPhat = Math.floor((thoiGianCho - 3 ) / 3);
    tongTien += soLanPhat * tienTgCho; 

    document.getElementById("thanhTien").innerHTML = `${tongTien.toLocaleString('vi-VN')} VND`;
    let xuat = document.getElementById("divThanhTien");
    xuat.style.display = "block";
}

// Tạo 1 chức năng click cho nút in hóa đơn
document.getElementById("btnInHoaDon").onclick = function(){
    let loaiXeGrabCar = document.querySelector("input[name='selector']:checked");
    console.log(loaiXeGrabCar);

    let soKm = document.getElementById("txt-km").value * 1;
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

    if(loaiXeGrabCar == null){
        alert("Vui lòng nhập loại xe")
        return;
    }
    
    console.log(soKm);
    console.log(thoiGianCho)

    let loaiXe = loaiXeGrabCar.value;
    let tienKmDauTien = giaKmDauTien(loaiXe);
    let tiemKmTu1Den19 = giaKmTu1Den19(loaiXe);
    let tiemKmTu19TroLen = giaKmTu19TroLen(loaiXe);
    let tienTgCho = giaThoiGianCho(loaiXe);

    let tongTien = 0;
    if(soKm <= 19){
        tongTien = 1 * tienKmDauTien + (soKm - 1) * tiemKmTu1Den19;
    }else{
        tongTien = 1 * tienKmDauTien + 18 * tienKmDauTien + (soKm - 19) * tiemKmTu19TroLen
    }

    let soLanPhat = Math.floor((thoiGianCho - 3 ) / 3);
    tongTien += soLanPhat * tienTgCho; 

    let checkKmDauTien;
    let checkKm1Den19;
    let checkKm19TroLen;

    if(soKm == 0 || soKm == 1){
      checkKmDauTien = 1;
      checkKm1Den19 = 0;
      checkKm19TroLen = 0
    }else if(soKm > 1 && soKm < 20){
      checkKmDauTien = 1;
      checkKm1Den19 = soKm - 1;
      checkKm19TroLen = 0;
    }else if(soKm > 20){
      checkKmDauTien = 1;
      checkKm1Den19 = 19;
      checkKm19TroLen = soKm - 19;
    }




    $('#exampleModal').modal('show');

    document.querySelector(".modal-body").innerHTML = `<div class="table-responsive-xl">
     <table class="table">
  <thead>
    <tr>
      <th scope="col" colspan="3" >Loại xe</th>
      <th scope="col">${loaiXe}</th>
      <th scope="col">Số km: ${soKm} km</th>
      <th scope="col"></th>
      <th scope="col" colspan="2"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">Chi tiết</td>
      <td>Sử dụng</td>
      <td>Đơn giá (1000đ)</td>
      <td>Thành tiền (1000đ)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2">KM đầu tiên</td>
      <td>1</td>
      <td>
        ${giaKmDauTien(loaiXe)}
      </td>
      <td>
        ${tienKmDauTien}
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2">Từ 1km đến 19km</td>
      <td>
       ${checkKm1Den19}
      </td>
      <td>
      ${giaKmTu1Den19(loaiXe)}
      </td>
      <td>
        ${tiemKmTu1Den19 * (soKm-1)}
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2">Từ 19km trở lên</td>
      <td>
        ${checkKm19TroLen}
      </td>
      <td>
        ${giaKmTu19TroLen(loaiXe)}
      </td>
      <td>
        ${tiemKmTu19TroLen * (soKm - 19)}
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="2">Thời gian chờ 3 phút đầu free</td>
      <td>
        Chờ ${thoiGianCho} phút, tính tiền ${thoiGianCho - 3} phút
      </td>
      <td>
        ${tienTgCho}
      </td>
      <td>
        ${tienTgCho * (thoiGianCho - 3)}
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
       <td >Tổng tiền: ${tongTien}</td>  
    </tr>
    
  </tbody>
</table>
    </div>`
}