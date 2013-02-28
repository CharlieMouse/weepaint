task("default", [], function () {
    console.log("default");
});

desc("Example");
task("example", ["dependency"], function () {

    console.log("Hello");
});

task("dependency", function(){
    console.log("dependency");
});