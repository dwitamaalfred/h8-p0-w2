var tanggal = '2'; // masukan nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = '12'; // masukan nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = '1992'; // masukan nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {

    case '1':
        console.log(tanggal + ' ' + 'Januari' + ' ' + tahun);
        break;
    case '2':
        console.log(tanggal + ' ' + 'Februari' + ' ' + tahun);
        break;
    case '3':
        console.log(tanggal + ' ' + 'March' + ' ' + tahun);
        break;
    case '4':
        console.log(tanggal + ' ' + 'April' + ' ' + tahun);
        break;
    case '5':
        console.log(tanggal + ' ' + 'May' + ' ' + tahun);
        break;
    case '6':
        console.log(tanggal + ' ' + 'June' + ' ' + tahun);
        break;
    case '7':
        console.log(tanggal + ' ' + 'July' + ' ' + tahun);
        break;
    case '8':
        console.log(tanggal + ' ' + 'August' + ' ' + tahun);
        break;
    case '9':
        console.log(tanggal + ' ' + 'September' + ' ' + tahun);
        break;
    case '10':
        console.log(tanggal + ' ' + 'October' + ' ' + tahun);
        break;
    case '11':
        console.log(tanggal + ' ' + 'November' + ' ' + tahun);
        break;
    case '12':
        console.log(tanggal + ' ' + 'December' + ' ' + tahun);
        break;
    default:
    console.log('tanggal (1-30), bulan (1-12), tahun (1800-2000)s');
    break;
}