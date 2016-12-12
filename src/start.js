import csv from "fast-csv";
import Record from "./Record";

csv.fromPath("input.csv")
    .on("data", function(data){
        // input record
        console.log(data);

        // output record
        const record = new Record(data);
        console.log("=>", record.getResult());
    })
    .on("end", function(){
        console.log("done");
    });
