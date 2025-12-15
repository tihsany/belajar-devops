const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {

  // Solusi: Gabungkan kedua pesan atau pilih satu yang benar
  const gabunganPesan = 'Percobaan ke-4 update Latihan lagi CI/CD meliputi build docker!';
  
  // Hanya SATU kali panggilan res.send()
  res.send(gabunganPesan); 

});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
