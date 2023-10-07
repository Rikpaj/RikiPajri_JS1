//IF,ELSE,NESTED IF

// contoh : if...else
let poin = 75;  // berdasar pengkodisian  "poin" terpenuhi atau tidak
if (poin >= 70) {
    console.log("anda di terima!")
} else {
    console.log("anda tidak di terima!")
}

// // conotoh : nested if 
let umur= 20;
let lulussma= false; //jika berniai true blok kode dalam kurung kurawal pertama akan dijalankan

if (umur >= 20) {
    if (lulussma) {
        console.log("Anda bisa masuk ke jenjang kuliah.");
    } else {
        console.log("Anda belum lulus sma untuk ke jenjang kuliah.");
    }
} else {
    console.log("Anda belum lulus sma");
}

//SWITCH CASE
//kita bisa memilih jalur untuk megekseskusi variable memungkinkan untuk memilih salah satu dari beberapa kemungkinan jalur eksekusi berdasarkan pada nilai dari "pilihan"
// contoh :

let pilihan= 3;
let beli;

switch(pilihan) {
    case 1:
        beli = "Baju";
        break;
    case 2:
        beli = "Celana";
        break;
    case 3:
        default:
        beli= "makan seperti biasa";
        break;
}

console.log(`Hari ini saya beli ${beli}.`);

// FOR STATEMENT pengulangan (looping)
// contoh :

for (let a = 1; a <= 5; a++) {
    console.log(`saya berlari sampai putaran ke-${a}`);
}

//WHILE, DO WHILE

// contoh while
// loop melakukan pengecekan kondisi di awal sebelum eksekusi. Jika kondisi awal tidak terpenuhi, blok kode tidak akan dijalankan sama sekali.
let b = 3; 

while (b <= 5) {
    console.log(`saya lari sampai putaran ke-${b}`);
    b++;
}

// contoh do while
// loop akan mengeksekusi blok kode setidaknya sekali sebelum memeriksa kondisi. Ini berarti blok kode akan dijalankan minimal satu kali bahkan jika kondisi tidak terpenuhi.

let c = 1;

do {
    console.log(`saya lari sampai putaran ke-${c}`);
    c++;
} while (c <= 5);

// FUNCTION
// Fungsi akan mencetak pesan sambutan dengan nama yang diberikan.
// contoh :
function greet(ngaran) {
    console.log(`jang ${ngaran}! kumaha damang ? `);
}

greet("Riki");
