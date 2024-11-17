import content from './STREETS_FINAL_DATA.csv?raw';

type StreetData = {
    name: string;
    accidents: string;
    speed_difference: string;
    score: string;
    tier: string;
};

const street_data_to_string = (s) => {
    return `Street: ${s.name} | Accidents: ${s.accidents} | Speed Difference: ${s.speed_difference} | Score: ${s.score} | Tier: ${s.tier}`;
};

const parse = (csv) => {
    const [header, ...rows] = csv.split('\n').map((line) => line.split(','));

    const objs = rows.map((row) => Object.fromEntries(row.map((value, index) => [header[index], value])));
    const streets = objs.map((obj) => ({
        name: obj["Street"],
        accidents: obj["PeopleInAccidents"],
        speed_difference: obj["SpeedDiffFromLimit"],
        score: obj["Score_Scaled"],
        tier: obj["Tier\r"],
    }) as StreetData);

    return streets;
};

const data = parse(content);

const submitEntry = () => {
    const entry = document.getElementById("target_street");
    if (!entry) {
        return "Input Failed!";
    }

    const text = entry?.value.trim();

    let target_street = data.find((street) => street.name === text);

    if (target_street === undefined) {
        return "Street not found";
    } else {
        return `The tier is ${target_street.tier}, and has had ${target_street.accidents} accidents.`;
    }
}

document.getElementById("input_button")?.addEventListener("click", () => {
    const tier = submitEntry();
    const output = document.getElementById("output_box")!;
    output.innerHTML = tier;
});

const data_bar = document.getElementById("scroll_box")!;
data_bar.innerHTML = `<pre>${data.map((street) => street_data_to_string(street)).join('\n')}</pre>`;

