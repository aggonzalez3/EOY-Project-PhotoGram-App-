let mostPopularPhotos=["https://static01.nyt.com/images/2021/05/17/dining/kc-korean-bulgogi-burger/kc-korean-bulgogi-burger-mobileMasterAt3x.jpg","https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg","https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/beaches-near-nyc-cover.jpg"];

let photos = [];
$(".submit").click(function() {
let movie = $("input").val();
let num = photos.length;
$(".posts").empty();
photos.push(movie);
    console.log(num);
    console.log(photos);
for(let img of photos){
$(".posts").append("<img src=" + movie + ">"); 
$(".message").text();}
    if(num === 3){
    $(".message").text("Congrats, you are a Silver Level user!");}
    if(num === 5){
    $(".message").text("Congrats, you are a Gold Level user!");}
    if(num > 5){
    $(".message").text("Congrats, you are a Platinum Level user!");}

});

$(".likes").append("<img src=" + mostPopularPhotos[2] + ">");




















