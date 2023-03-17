const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nilai = [];
let jumlahLulus = 0;
let jumlahTidakLulus = 0;

function hitungNilai() {
    const totalNilai = nilai.reduce((a, b) => a + b, 0);
    const rataRata = totalNilai / nilai.length;
    const nilaiTertinggi = Math.max(...nilai);
    const nilaiTerendah = Math.min(...nilai);
    
    console.log(`\nNilai tertinggi: ${nilaiTertinggi}`);
    console.log(`Nilai terendah: ${nilaiTerendah}`);
    console.log(`Rata-rata nilai: ${rataRata.toFixed(2)}`);
    console.log(`Jumlah siswa lulus: ${jumlahLulus}`);
    console.log(`Jumlah siswa tidak lulus: ${jumlahTidakLulus}`);
    
  // Urutkan nilai siswa
    const sortedNilai = nilai.sort((a, b) => a - b);
    console.log(`Nilai siswa terurut: ${sortedNilai}`);
    
  // Cari dan tampilkan siswa nilai=90 dan nilai=100
    const siswaNilai90 = nilai.filter(n => n === 90);
    const siswaNilai100 = nilai.filter(n => n === 100);
    console.log(`Siswa dengan nilai 90: ${siswaNilai90}`);
    console.log(`Siswa dengan nilai 100: ${siswaNilai100}`);
}

function inputNilai() {
    rl.question('Masukkan nilai siswa : ', (jawaban) => {
    if (jawaban.toLowerCase() === 'q') {
        hitungNilai();
        rl.close();
    } else {
        const nilaiSiswa = parseInt(jawaban);
        nilai.push(nilaiSiswa);
        
        if (nilaiSiswa >= 60) {
        jumlahLulus++;
        } else {
        jumlahTidakLulus++;
        }
        
        inputNilai();
    }
    });
}

inputNilai();
