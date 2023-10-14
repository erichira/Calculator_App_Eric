// Button press animation
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    pressed(event.target.id);
  });
});

document.addEventListener("keyup", (event) => {
  pressed(event.key);
});

const pressed = (id) => {
  if (id == "Enter") {
    id = "=";
  } else if (id == "*") {
    id = "times";
  } else if (id == "Backspace") {
    id = "del";
  } else if (id == "c") {
    id = "reset";
  }

  document.getElementById(id).classList.add("pressed");
  setTimeout(() => {
    document.getElementById(id).classList.remove("pressed");
  }, 200);
};

// Change theme

let currentTheme = 1;

document.getElementById("toggle-container").addEventListener("click", () => {
  if (currentTheme === 1) {
    currentTheme = 2;
  } else if (currentTheme === 2) {
    currentTheme = 3;
  } else if (currentTheme === 3) {
    currentTheme = 1;
  }
  changeTheme(currentTheme);
});

const changeTheme = (theme) => {
  const body = document.querySelector("body");
  const toggleSwitch = document.getElementById("toggle");

  body.classList.remove("theme2");
  body.classList.remove("theme3");

  if (theme === 1) {
    toggleSwitch.style.transform = "translateX(0)";
  } else if (theme === 2) {
    toggleSwitch.style.transform = "translateX(130%)";
    if (body.classList.contains("theme2") == false) {
      body.classList.add("theme2");
    }
  } else if (theme === 3) {
    toggleSwitch.style.transform = "translateX(275%)";
    if (body.classList.contains("theme3") == false) {
      body.classList.add("theme3");
    }
  }
};

// Calculator functions:

const display = document.querySelector("[data-display]");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let target = e.target.value;
    calc(target);
  });
});

document.addEventListener("keyup", (event) => {
  let pattern = /[0-9]/;
  let key = event.key;

  if (
    pattern.test(key) ||
    key == "Enter" ||
    key == "Backspace" ||
    key.toLowerCase() == "c" ||
    key == "+" ||
    key == "-" ||
    key == "*" ||
    key == "/"
  ) {
    if (key == "Enter") {
      calc("=");
    } else if (key == "Backspace") {
      calc("del");
    } else if (key.toLowerCase() == "c") {
      calc("reset");
    } else {
      calc(key);
    }
  }
});

const calc = (input) => {
  if (input == "=") {
    string = eval(string);
    display.innerHTML = string;
  } else if (input.toLowerCase() == "del") {
    string = string.slice(0, -1);
    display.innerHTML = string;
  } else if (input.toLowerCase() == "reset") {
    string = "";
    display.innerHTML = "0";
  } else {
    string = string + input;
    display.innerHTML = string;
  }

  if (string === "") {
    display.innerHTML = "0";
  }
};