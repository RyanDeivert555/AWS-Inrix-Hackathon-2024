const fillData = () => {
    let result = "";
    for (let i = 0; i < 10000; i++) {
        result += "hello world";
    }

    return result;
};

console.log("hello world");

const data_bar = document.getElementById("scroll_box");
data_bar.innerHTML = fillData();

