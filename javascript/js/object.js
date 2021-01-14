let objek = {
    nama : "smk revit",
    telp : 12345678,

    buah : ["apel", "jeruk", "mangga"],

    coba : function () {
        return "coba function";
    },

    boleh : true,

    "tulis saja" : 123456000,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis saja"]);