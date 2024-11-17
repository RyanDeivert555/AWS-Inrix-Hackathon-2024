const fillData = () => {
    let result = "";
    for (let i = 0; i < 10000; i++) {
        result += "hello world";
    }

    return result;
};

const data = fillData();

const submitEntry = () => {
    const entry = document.getElementById("target_street");
    if (!entry) {
        return;
    }

    const text = entry.value;
}

document.getElementById("input_button")?.addEventListener("click", submitEntry);

const data_bar = document.getElementById("scroll_box");
data_bar.innerHTML = data;

