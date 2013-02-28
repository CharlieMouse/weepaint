desc("Example");
task("example", ["dependency"], function () {

    console.log("Hello");
});

task("dependency", function(){
    console.log("dependency");
});