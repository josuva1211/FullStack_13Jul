console.log(window.navigator);

console.log(navigator);

console.log(navigator.userAgent);

console.log(navigator.geolocation);

navigator.geolocation.getCurrentPosition((l) => {
    console.log(l);
});