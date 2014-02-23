<script>
function percent_siving(){

var now = new Date();

var start = new Date(12, 8, 15);
var end = new Date(17,6,1);

var newnow = now-start;
var total = end-start;

var percent = Math.round(newnow/total);
return percent.toString();
}
</script>