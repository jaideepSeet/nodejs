const fs = require("fs");
// if (!fs.existsSync("docs")) 
//     fs.mkdir("docs", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else{
//         console.log("Directory created");
//         }

//     });

    // fs.writeFile("docs/file.text", "hello World", (err) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else{
    //         console.log("File created");
    //     }
    // });
// if(fs.existsSync("docs/file.text")){
//     fs.readFile("docs/file.text", "utf-8", (err, data) => {
//         if (err) {
//             console.log(err.message);
//         }
//         else{
//             console.log(data);
//         }
//     });
// }

if (fs.existsSync("docs/")) {
    fs.rmdir("docs/", { recursive: true }, (err) => {
        if (err) {
            console.log(err.message);
        }
        else{
            console.log("Directory deleted");
        }
    });
}

