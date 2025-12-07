#!/bin/bash
echo "Menjalankan test..."

if [ -s biodata.txt ]; then
  echo "Test berhasil: biodata.txt ditemukan dan tidak kosong."
  exit 0
else
  echo "Test GAGAL: biodata.txt tidak ditemukan atau kosong!"
  exit 1
fi
