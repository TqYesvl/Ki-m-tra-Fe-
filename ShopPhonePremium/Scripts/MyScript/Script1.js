//Nút show mật khẩu tại đăng nhập
var showmk = document.querySelector('.check-password');
showmk.addEventListener('click', function () {
    var hienthi = document.querySelector('#name-password');
    if (showmk.checked) {
        hienthi.type = "text";
    }
    else {
        hienthi.type = "password";
    }
})
//Show mật khâutr tại đăng ký

var showmk1 = document.querySelector('.check-password1');
showmk1.addEventListener('click', function () {
    var hienthi1 = document.querySelector('#name-password1');
    var hienthi2 = document.querySelector('#name-password2');
    if (showmk1.checked) {
        hienthi1.type = "text";
        hienthi2.type = "text";
    }
    else {
        hienthi1.type = "password";
        hienthi2.type = "password";
    }
})
