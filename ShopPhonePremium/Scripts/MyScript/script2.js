var tien = 30000000;//Lấy giá tiền
//Nút giảm số lượng 
var btnL = document.querySelector('.btn-left');
btnL.addEventListener('click', function () {
    var soluong = document.querySelector('.input-sl');
    if (soluong.value > 1) { // Đảm bảo số lượng không âm
        --soluong.value;
        updategiatien();
    }
    event.preventDefault();
});
//Nút tăng số lượng
var btnR = document.querySelector('.btn-right');
btnR.addEventListener('click', function () {
    var soluong = document.querySelector('.input-sl')
    ++soluong.value;
    var sl = soluong.value;
    updategiatien();
    event.preventDefault();
})
//Update giá tiền
function updategiatien() {
    var z = document.querySelector('.gia-tien');
    var soluong = document.querySelector('.input-sl');
    var sl = soluong.value;
    var giatien = sl * tien;
    z.innerText = giatien;
    var tongtien = document.querySelector('.tong-tien');
    tongtien.innerText = z.innerText;
}
// hàm thanh toán :)))
var muahang = document.querySelector('.buy-muahang');
    muahang.addEventListener('click', function () {
    var thanhtoan = document.querySelector('.div-thanhtoan');
        if (thanhtoan.style.display == "block") {
            thanhtoan.style.display = "none"

        } else {
            thanhtoan.style.display = "block"
        }
    })
