let name = prompt("nhập tên của bạn")
let old = prompt('nhập tuổi: ');
let y = new Date();
let year = y.getFullYear()-old;
let isNamNhuan = (year)=>{
    if((year%4==0)&&(year%100!=0)){
        return 'năm nhuận'
    } else return 'năm không nhuận'
}
function tinhCanChi(year) {
    const can = year % 10;
    const chi = year % 12;
  
    let canChiStr = "";
  
    switch (can) {
      case 0:
        canChiStr += "Canh";
        break;
      case 1:
        canChiStr += "Tân";
        break;
      case 2:
        canChiStr += "Nhâm";
        break;
      case 3:
        canChiStr += "Quý";
        break;
      case 4:
        canChiStr += "Giáp";
        break;
      case 5:
        canChiStr += "Ất";
        break;
      case 6:
        canChiStr += "Bính";
        break;
      case 7:
        canChiStr += "Đinh";
        break;
      case 8:
        canChiStr += "Mậu";
        break;
      case 9:
        canChiStr += "Kỷ";
        break;
    }
  
    canChiStr += " ";
  
    switch (chi) {
      case 0:
        canChiStr += "Thân";
        break;
      case 1:
        canChiStr += "Dậu";
        break;
      case 2:
        canChiStr += "Tuất";
        break;
      case 3:
        canChiStr += "Hợi";
        break;
      case 4:
        canChiStr += "Tý";
        break;
      case 5:
        canChiStr += "Sửu";
        break;
      case 6:
        canChiStr += "Dần";
        break;
      case 7:
        canChiStr += "Mão";
        break;
      case 8:
        canChiStr += "Thìn";
        break;
      case 9:
        canChiStr += "Tỵ";
        break;
      case 10:
        canChiStr += "Ngọ";
        break;
      case 11:
        canChiStr += "Mùi";
        break;
    }
  
    return canChiStr;
  }

  
console.log('Chào mừng '+name +' sinh năm '+year+'. Đây là năm '+ tinhCanChi(year)+' và là '+isNamNhuan(year));
alert('Chào mừng '+name +' sinh năm '+year+'. Đây là năm '+ tinhCanChi(year)+' và là '+isNamNhuan(year));
