var myVar = setInterval(function(){percent_siving()},1);
function percent_siving(){
        var now = new Date();

        var start = new Date(14, 2, 15);
        var end = new Date(17,6,1);

        var newnow = now-start;
        var total = end-start;

        var percent = newnow/total;
        var progress = percent.toString().concat("%");
        document.getElementById("progress123").style.width=progress;
        document.getElementById("test").innerHTML=progress;
      }