// soal nomor 1
//Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan: 
// *  1. Jika nilai score lebih atau sama dengan 90
// *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
// *  2. Jika nilai score ada di antara 80 hingga 89
// *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
// *  3. Jika nilai score ada di antara 70 hingga 79
// *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
// *  4. Jika nilai score ada di antara 60 hingga 69:
// *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
// *  5. Jika nilai score di bawah 60:
// *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'

let score = 70; // parameter nilai tergantung dengan apa yang kita mau ambil data nya dari sebuah if

if (score >= 90) {
  let result = 'Selamat! Anda mendapatkan nilai A.';
  console.log(result);
} else if (score >= 80) {
  let result = 'Anda mendapatkan nilai B.';
  console.log(result);
} else if (score >= 70) {
  let result = 'Anda mendapatkan nilai C.';
  console.log(result);
} else if (score >= 60) {
  let result = 'Anda mendapatkan nilai D.';
  console.log(result);
} else {
  let result = 'Anda mendapatkan nilai E.';
  console.log(result);
}


// Soal Nomor 2 Push angka angka ganjil dari variable angka kedalam variable ganjil.
// Variable ganjil harus berisi [1,75,89,101]
// Jangan ubah variable angka

let angka = [1, 46, 75, 12, 89, 54, 101];
let ganjil = [];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 !== 0) {
    ganjil.push(angka[i]);
  }
}

console.log(ganjil);

// OutPut yang keluar hanya bilangan ganjil yang ada di dalam parameter array 
// [1, 75, 89. 101]



// Soal Nomor 3
// Buat sebuah fungsi penjumlahkan sederhana yang menampilkan output sebagai berikut menggunakan array looping pada javascript

const angka = [1, 2, 3, 4, 10, 11];

function jumlahkan(arr) {
  let output = '';
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    output += arr[i];

    if (i !== arr.length - 1) {
      output += ' + ';
    }
  }

  output += ' = ' + sum;
  return output;
}

const hasil = jumlahkan(angka);
console.log(hasil); // hasil output: '1 + 2 + 3 + 4 + 10 + 11 = 31'


// Soal Nomor 4
// Anda bertanggung jawab atas kue untuk ulang tahun anak. Anda telah memutuskan bahwa kue tersebut akan memiliki satu lilin untuk setiap tahun dari total umurnya. Mereka hanya bisa meniup lilin yang paling tinggi. Hitung berapa lilin yang paling tinggi.

const lilin = [3, 2, 1, 3, 1, 1];

function hitunglilinPalingTinggi(arr) {
  let maxCandleHeight = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxCandleHeight) {
      maxCandleHeight = arr[i];
      count = 1;
    } else if (arr[i] === maxCandleHeight) {
      count++;
    }
  }

  return `Ada (${count}) buah lilin paling tinggi`;
}

const hasil = hitunglilinPalingTinggi(lilin);
console.log(hasil); // hasil output: 'Ada (2) buah lilin paling tinggi'


// // Soal Nomor 5
// Buat fungsi untuk mengkonversi jam (5:30) menjadi kata kata (penyebutan dalam bhs indonesia)
// // 5:00 = Jam lima tepat x
// // 5:01 = Jam lima lebih satu menit 
// // 5:15 = Jam lima lebih seperempat x
// // 5:29 = Jam {jam} lebih {jam} menit
// // 5:30 = Jam setengah enam x

// // 5:31 = Jam enam kurang dua puluh sembilan menit
// // 5:45 = Jam enam kurang seperempat x
// // 5:59 = Jam enam kurang satu menit

const penulisanJam = (jam) => {
    const hours = parseInt(jam.split(':')[0]);
    const minutes = parseInt(jam.split(':')[1]);
  
    const hourWords = [
      'nol',
      'satu',
      'dua',
      'tiga',
      'empat',
      'lima',
      'enam',
      'tujuh',
      'delapan',
      'sembilan',
      'sepuluh',
      'sebelas',
    ];
  
    let result = '';
  
    if (minutes === 0) {
      if (hours === 0) {
        result = 'Jam nol';
      } else if (hours <= 11) {
        result = `Jam ${hourWords[hours]} tepat`;
      } else {
        result = `Jam ${hourWords[hours - 12]} tepat`;
      }
    } else if (minutes === 30) {
      if (hours <= 11) {
        result = `Jam setengah ${hourWords[hours + 1]}`;
      } else {
        result = `Jam setengah ${hourWords[hours - 11]}`;
      }
    } else if (minutes === 15) {
      if (hours <= 11) {
        result = `Jam ${hourWords[hours]} lebih seperempat`;
      } else {
        result = `Jam ${hourWords[hours - 12]} lebih seperempat`;
      }
    } else if (minutes === 45) {
      if (hours <= 10) {
        result = `Jam ${hourWords[hours + 1]} kurang seperempat`;
      } else {
        result = `Jam ${hourWords[hours - 11]} kurang seperempat`;
      }
    } else if (minutes === 1) {
      if (hours <= 11) {
        result = `Jam ${hourWords[hours]} lebih satu menit`;
      } else {
        result = `Jam ${hourWords[hours - 12]} lebih satu menit`;
      }
    } else if (minutes < 30) {
      if (hours <= 11) {
        result = `Jam ${hourWords[hours]} lebih ${hourWords[minutes]} menit`;
      } else {
        result = `Jam ${hourWords[hours - 12]} lebih ${hourWords[minutes]} menit`;
      }
    } else {
      if (hours <= 10) {
        result = `Jam ${hourWords[hours + 1]} kurang ${
          60 - minutes
        } menit`;
      } else {
        result = `Jam ${hourWords[hours - 11]} kurang ${
          60 - minutes
        } menit`;
      }
    }
  
    return `${jam} = ${result}`;
  };
  
  const text = penulisanJam('5:30');
  console.log(text); // hasil output: '5:30 = Jam setengah enam'
  
