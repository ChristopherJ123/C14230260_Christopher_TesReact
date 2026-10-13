List jawaban

A1
Karena Jumlah hook yang dipanggil bisa berbeda antara render. 
React mencocokkan jumlah hook berdasarkan urutan pemanggilan.
Dengan meletakkan hook di dalam if, bisa memicu urutan yang berubah
sehingga react akan mengembalikan state yang salah.

A2
Karena React membandingkan nilai lama dan baru dengan pemeriksaan referensi, 
bukan memeriksa isi satu per satu. Array yang di mutasi referensinya tetap sama, 
tidak berubah. Sehingga react menyimpulkan tidak ada yang berubah

A3
useEffect(() => { ... });// (a)
useEffect(() => { ... }, []);// (b)
useEffect(() => { ... }, [kota]);  // (c)
a. useEffect akan dipanggil ketika komponen di render pertama kali
b. useEffect akan dipanggil ketika komponen di render kembali
c. useEffect akan dipanggil ketika kota berubah
dua kesempatan ketika cleanup function dijalankan adalah a dan b karena 
kita tidak menambahkan kota ke dependency array

A4

A5
satu fungsi handleChange dapat menangani banyak input sekaligus karena setiap input memiliki
variabel event.target.value yang bisa di reuse pada fungsi handleChange.