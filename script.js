function hitungTotal() {
    let produk = document.getElementById("produk").value;
    let jumlah = document.getElementById("jumlah").value;

    let harga = 0;

    if (produk === "Chocolate Cake") {
        harga = 85000;
    } else if (produk === "Strawberry Cake") {
        harga = 90000;
    } else if (produk === "Butter Cookies") {
        harga = 45000;
    }

    let total = harga * jumlah;

    alert("Total pesanan kamu adalah Rp " + total.toLocaleString("id-ID"));
}
