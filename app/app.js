const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

  // Solusi: Gabungkan kedua pesan atau pilih satu yang benar
  const gabunganPesan = 'Percobaan ke-2 update Latihan lagi CI/CD otomatisasi update dari fitur-biodata!';
  
  // Hanya SATU kali panggilan res.send()
  res.send(gabunganPesan); 

});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
