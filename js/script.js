function tampilkanData() {
    var nama = document.getElementById("nama").value;
    var tgl_lahir = document.getElementById("tgl_lahir").value;
    var jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    var pesan = document.getElementById("pesan").value;

    var hasil = "Nama: " + nama + "<br>";
    hasil += "Tanggal Lahir: " + tgl_lahir + "<br>";
    hasil += "Jenis Kelamin: " + jenis_kelamin + "<br>";
    hasil += "Pesan: " + pesan;

    document.getElementById("hasil").innerHTML = hasil;
