// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
const { exit } = require('process');

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

const bacaData1 = (data, nextStep) => {
};

const bacaData2 = (data, nextStep) => {

};

const bacaData3 = (data, nextStep) => {
  
};

function getFinalData(data){
  return data;
}

const bacaData = (callbackfn) => {
  let data = [];
  //baca data1
  fs.readFile(file1,"utf8",(err, dataYangDibaca) => {
    if(err){
      callbackfn(err, null);
    }
    const arrayOfObject = JSON.parse(dataYangDibaca);
    data.push(arrayOfObject.message);
    
    //baca data2
    fs.readFile(file2,"utf8",(err, dataYangDibaca) => {
      if(err){
        callbackfn(err, null);
      }
      const arrayOfObject = JSON.parse(dataYangDibaca);
      data.push(arrayOfObject[0].message);

      //baca data3
      fs.readFile(file3,"utf8",(err, dataYangDibaca) => {
        if(err){
          callbackfn(err, null);
        }
        const arrayOfObject = JSON.parse(dataYangDibaca);
        data.push(arrayOfObject[0].data.message);
        callbackfn(null, data.map(getSecondWord));
      });
    });

  });
  // const arr = [];
  // bacaData1(arr, (data1) => 
  //   bacaData2(data1, (data2) => 
  //     bacaData3(data2, (data3) => {
  //     })
  //   )
  // );
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
