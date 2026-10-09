// // function wait() {
// //   new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("Hallo");
// //     }, 2000);
// //   });
// // }

// // console.log("Sebeleum memanggil wait");
// // const proses = wait();
// // console.log("Nilai yang dikembalikan, ", proses);

// function tungguDanAmbilData(id) {
//   // 1. Fungsi biasa langsung mengembalikan objek Promise
//   return new Promise((resolve, reject) => {
//     // 2. Proses asynchronous setTimeout dimulai
//     setTimeout(() => {
//       const sukses = true;

//       if (sukses) {
//         const data = { id: id, nama: "Produk A" };
//         resolve(data); // 3. Memicu resolve saat waktu habis
//       } else {
//         reject("Gagal memuat data");
//       }
//     }, 2000); // Menunggu 2 detik
//   });
// }

// function jalankanDiFungsiBiasa() {
//   console.log("A. Mulai request...");

//   tungguDanAmbilData(101)
//     .then((hasil) => {
//       console.log("C. Hasil diterima:", hasil.nama);
//     })
//     .catch((err) => {
//       console.error("Terjadi error:", err);
//     });

//   console.log("B. Baris ini jalan duluan tanpa menunggu 2 detik!");
// }

// jalankanDiFungsiBiasa();
// // Urutan log: A -> B -> (Tunggu 2 detik) -> C

// const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// fetch(url).then((res) => {
//   console.log(JSON.parse(res));
// });
