// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const getSecondWord = (str) => {
  return str.split(' ')[1];
};

let data = [];

const bacaData = () =>{
  fs.readFile(file1,'utf-8',(err, dataYangDibaca) => {
    if(err){
      return console.log(err);
    }
  
    const arrayOfObject = JSON.parse(dataYangDibaca);
    data.push(arrayOfObject.message);

    fs.readFile(file2, 'utf-8',(err,dataYangDibaca) => {
      if(err){
        return console.log(err);
      }
  
      const arrayOfObject = JSON.parse(dataYangDibaca);
      data.push(arrayOfObject[0].message);

      fs.readFile(file3, 'utf-8',(err,dataYangDibaca) => {
        if(err){
          return console.log(err);
        }

        const arrayOfObject = JSON.parse(dataYangDibaca);
        data.push(arrayOfObject[0].data.message);
        // console.log(data);
        let finalResult = data.map(getSecondWord); 
        return finalResult;
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
