let namaPasien, alamat;


var jenisKelamin = document.getElementsByName("jenis_kelamin");
var selectedValue;


document.getElementById("btn").onclick=function(){
    //input nama pasien
    namaPasien=document.getElementById("nama_pasien").value;
    console.log(namaPasien);
    
    //input usia pasien
    var usia = document.getElementById("usia_pasien").value;
    var number = Number(usia);
    console.log(number);

    //input jenis kelamin pasien
    for (var i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].checked) {
            selectedValue = jenisKelamin[i].value;
            break;
        }
    }
    if (selectedValue) {
        console.log(selectedValue);
    } else {
        alert('No gender selected');
    }

    //input alamat pasien
    alamat = document.getElementById("alamat").value;
    console.log(alamat);
    
    //input nomer telp
    var noTelp = document.getElementById("no_telp").value;
    var telp = Number(noTelp);
    if(!isNaN(telp)){
        console.log(noTelp);
    }else{
        alert('Masukkan No telpon berupa angka');
    }

    document.querySelector('form').addEventListener('submit', function(e){
        console.log('formsubmiter');
    });

};