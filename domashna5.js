const http = require("http");
const url = require("url");


const server = http.createServer((require, response)=>{
    const url = require.url;

    if(url === "/home/imePrezimePol"){
         
        
        response.end("Hristijan Petreski Male");
    }
    if(url === "/home/title"){
    response.write("<html> <head> <title>New Title</title> </head> </html>")  ;

    }
    if(url === "/home/header"){

        response.setHeader("Header", "this is the new header");

    }

    res.end();
});
server.listen(8000);


const handlerCalculator = (req, res) => {
    const url = req.url;

    // if(url === "/"){
    //     res.write("test");
    // }
    // res.end("OK");

    const [_, operacija, num1, num2] = req.url.split("/");

    const stringNumber = "1";
    Number(stringNumber); // converts string to number

    const numberNumber = 1;
    numberNumber.toString(); //converts number to string

    let result;
//2 + 2 = ok
//"2" + "2" = not ok
    switch(operacija){
        case "sobiranje":
            result = Number(num1) + Number(num2);
            //res.write
            //res.end
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(num1) / Number(num2);
            res.end(`${result}`);
            break;
        case "modul":
            result=Number(num1)%Number(num2);
            res.end(`${result}`);
            break;
        case "kvadrat":
            result=Number(num1)**2;
            res.end(`${result}`);
            break;
            
        case "kub":
            result=Number(num1)**3;
            res.end(`${result}`);
            break;
        
        default:
            res.end("Nepoznata operacija");
    }

}

const newServer = http.createServer(handlerCalculator);

newServer.listen(8080);
