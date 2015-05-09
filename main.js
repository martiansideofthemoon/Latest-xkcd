var num = location.search.replace("?","");
console.log(num)
var fileref=document.createElement('script')
fileref.setAttribute("type","text/javascript")
fileref.setAttribute("src", "https://dynamic.xkcd.com/api-0/jsonp/comic/"+num+"?callback=storeComic")

function loadRandom(){
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date(2015,04,2);
	var secondDate = new Date();
	var diffDays = Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	numComics=1522+parseInt((diffDays+5)/7)+parseInt((diffDays+3)/7)+parseInt((diffDays+1)/7)
    num = Math.floor(Math.random()*parseInt(numComics+1))
    window.open( "xkcd.htm?"+num,"_self")
} 

function storeComic(data){
	document.getElementById("title").innerHTML = data.title;
	document.getElementById("image").src = data.img;
	document.getElementById("image").title = data.alt;
    num = data.num
}

document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('random').addEventListener('click', loadRandom);
        document.getElementsByTagName("body")[0].appendChild(fileref)
})
