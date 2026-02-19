const moods = [
    { name: "Calm Blue", color: "#4dabf7" },
    { name: "Happy Yellow", color: "#ffd43b" },
    { name: "Romantic Pink", color: "#ff6b81" },
    { name: "Fresh Green", color: "#51cf66" },
    { name: "Chill Purple", color: "#845ef7" }
];

let index = 0;

function changeMood() {
    const lamp = document.getElementById("lamp");
    const moodName = document.getElementById("moodName");

    lamp.style.backgroundColor = moods[index].color;
    lamp.style.boxShadow = `0 0 30px ${moods[index].color}`;
    moodName.innerText = moods[index].name;

    index = (index + 1) % moods.length; // loop moods
}
