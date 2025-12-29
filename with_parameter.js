function work(designation) {
    if (designation === void 0) { designation = "TypeScript Developer"; }
    return "I am a ".concat(designation);
}
console.log(work());
console.log(work("JavaScript Developer"));
