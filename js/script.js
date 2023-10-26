function submitForm() {
    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Data diri anda:</h2>
        <p>Nama: ${nama}</p>
        <p>Tanggal Lahir: ${tanggalLahir}</p>
        <p>Jenis Kelamin: ${jenisKelamin}</p>
        <p>Pesan: ${pesan}</p>
    `;
}
