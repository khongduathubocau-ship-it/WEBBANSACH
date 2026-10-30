// --- HÀM KIỂM TRA FORM ĐĂNG KÝ (Dangky.html) ---
function kiemTraDangKy() {
    const hoTen = document.getElementById("hoTen").value.trim();
    const namSinh = document.getElementById("namSinh").value.trim();
    const soDienThoai = document.getElementById("soDienThoai").value.trim();
    const email = document.getElementById("email").value.trim();
    const tenDangNhap = document.getElementById("tenDangNhap").value.trim();
    const matKhau = document.getElementById("matKhau").value;
    const nhapLaiMatKhau = document.getElementById("nhapLaiMatKhau").value;

    const regexSDT = /^(0|\+84)\d{9}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (hoTen === "") {
        alert("Họ và tên không được để trống!");
        document.getElementById("hoTen").focus();
        return false;
    }
    if (namSinh === "" || isNaN(namSinh)) {
        alert("Năm sinh không được để trống và phải là số!");
        document.getElementById("namSinh").focus();
        return false;
    }
    if (!regexSDT.test(soDienThoai)) {
        alert("Số điện thoại không đúng định dạng (bắt đầu bằng 0 hoặc +84 và gồm 10 chữ số)!");
        document.getElementById("soDienThoai").focus();
        return false;
    }
    if (email === "" || !regexEmail.test(email)) {
        alert("Email không được để trống và phải đúng định dạng!");
        document.getElementById("email").focus();
        return false;
    }
    if (tenDangNhap === "") {
        alert("Tên đăng nhập không được để trống!");
        document.getElementById("tenDangNhap").focus();
        return false;
    }
    if (matKhau === "") {
        alert("Mật khẩu không được để trống!");
        document.getElementById("matKhau").focus();
        return false;
    }
    if (nhapLaiMatKhau === "") {
        alert("Nhập lại mật khẩu không được để trống!");
        document.getElementById("nhapLaiMatKhau").focus();
        return false;
    }
    if (matKhau !== nhapLaiMatKhau) {
        alert("Mật khẩu và Nhập lại mật khẩu không trùng khớp!");
        document.getElementById("nhapLaiMatKhau").focus();
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}

// --- HÀM KIỂM TRA FORM ĐĂNG NHẬP (Dangnhap.html) ---
function kiemTraDangNhap() {
    const tenDangNhap = document.getElementById("username").value.trim();
    const matKhau = document.getElementById("password").value;

    if (tenDangNhap === "") {
        alert("Vui lòng nhập Tên đăng nhập!");
        document.getElementById("username").focus();
        return false;
    }
    if (matKhau === "") {
        alert("Vui lòng nhập Mật khẩu!");
        document.getElementById("password").focus();
        return false;
    }

    alert("Đăng nhập thành công!");
    return true;
}