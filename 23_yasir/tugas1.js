const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Input nilai siswa
let nilai = [];
rl.question("Masukkan jumlah siswa: ", (jumlahSiswa) => {
  jumlahSiswa = parseInt(jumlahSiswa);
  let i = 1;
  let inputNilaiSiswa = () => {
    if (i <= jumlahSiswa) {
      rl.question(`Masukkan nilai siswa ke-${i}: `, (nilaiSiswa) => {
        nilaiSiswa = parseInt(nilaiSiswa);
        nilai.push(nilaiSiswa);
        i++;
        inputNilaiSiswa();
      });
    } else {
      // Menampilkan nilai siswa
      console.log(`Nilai siswa: ${nilai}`);

      // Nilai tertinggi dan terendah
      let nilaiTertinggi = Math.max(...nilai);
      let nilaiTerendah = Math.min(...nilai);
      console.log(`Nilai tertinggi: ${nilaiTertinggi}`);
      console.log(`Nilai terendah: ${nilaiTerendah}`);

      // Rata-rata nilai
      let totalNilai = 0;
      for (let i = 0; i < nilai.length; i++) {
        totalNilai += nilai[i];
      }
      let rataRata = totalNilai / nilai.length;
      console.log(`Rata-rata nilai: ${rataRata}`);

      // Jumlah siswa lulus dan tidak lulus
      let jumlahLulus = 0;
      let jumlahTidakLulus = 0;

      for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] >= 60) {
          jumlahLulus++;
        } else {
          jumlahTidakLulus++;
        }
      }

      console.log(`Jumlah siswa lulus: ${jumlahLulus}`);
      console.log(`Jumlah siswa tidak lulus: ${jumlahTidakLulus}`);

      // Urutkan nilai siswa
      nilai.sort((a, b) => a - b);
      console.log(`Nilai siswa setelah diurutkan: ${nilai}`);

      // Siswa dengan nilai 90 dan 100
      let siswaNilai90 = nilai.filter((nilaiSiswa) => nilaiSiswa === 90);
      let siswaNilai100 = nilai.filter((nilaiSiswa) => nilaiSiswa === 100);

      console.log(`Siswa dengan nilai 90: ${siswaNilai90}`);
      console.log(`Siswa dengan nilai 100: ${siswaNilai100}`);

      rl.close();
    }
  };

  inputNilaiSiswa();
});
