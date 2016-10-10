/*

console.log("hello world");
setTimeout(function(){
    console.log("hello world again!")
}, 10000);

*/

function unlimitedHelloWorlds(){
    setTimeout(function(){
        console.log("hello world");
        unlimitedHelloWorlds();
    }, 1000);
}

unlimitedHelloWorlds();