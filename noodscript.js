const fs = require("fs");

let myjson = {
    account :{
        "omtejaswi2008@hotmail.com" :{
            name: "omtejaswi",
            password: "kuchbhi",
        }
    }
}

myjson = JSON.stringify(myjson);
let crimeData;

setInterval(() => {
    fs.readFile("crime.json","utf-8",(err,data)=>{
        crimeData = data;
     });
}, 1);

fs.writeFile("crime.json", myjson, (err) => {
    console.log("done.")
})