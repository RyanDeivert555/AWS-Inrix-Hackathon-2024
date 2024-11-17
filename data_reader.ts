import { fs } from 'fs';
import { parse } from 'csv-parse';

const content = fs.readFile("STREETS_FINAL_DATA.csv", "utf8");

console.log(content);

//const parser = parse(
//    content, {
//        delimiter: ','
//    }
//);

//const records = [];
//
//parser.on('readable', function() {
//    let record;
//    while ((record = parser.read()) !== null) {
//        records.push(record);
//    }
//});
//
//parser.on('error', function(err) {
//    console.error(err.message);
//});
//
//parser.end();

type Street = {
    name: string;
    accidents: number;
    speed_difference: number;
    score: number;
    tier: string;
};

const fillData = () => {
    return ""; 
};

const data = fillData();

const submitEntry = () => {
    const entry = document.getElementById("target_street");
    if (!entry) {
        return;
    }

    const text = entry?.value;
}

document.getElementById("input_button")?.addEventListener("click", submitEntry);

const data_bar = document.getElementById("scroll_box")!;
data_bar.innerHTML = data;

