function greet(name, age) {
    if (age) {
        console.log("Hello, ".concat(name, ". you are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "."));
    }
}
greet("sagar");
greet("Dnyaneshawar", 25);
