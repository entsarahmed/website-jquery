/// <reference types="../@types/jquery" />
$('.close').on('click',function(){
  $('nav').animate({width:'toggle',padding:'toggle'},3000);

})
$('.icon').on('click',function(){
  $('nav').animate({width:'toggle',padding:'toggle'},3000);

})


$('#one').on('click',function(){
  $('#onePara').animate({height:'toggle',padding:'toggle',margin:'toggle'},3000)
})
  

$('#two').on('click',function(){
  $('#twoPara').animate({height:'toggle',padding:'toggle',margin:'toggle'},3000)
})
  
$('#three').on('click',function(){
  $('#threePara').animate({height:'toggle',padding:'toggle',margin:'toggle'},3000)
})
  
  
$('#four').on('click',function(){
  $('#fourPara').animate({height:'toggle',padding:'toggle',margin:'toggle'},3000)
})


//^ 1000 millseconds = 1 seconds

let coutDownDate=new Date("Dec 31, 2024 23:59:59").getTime();//!time value with mil second
//console.log(coutDownDate);
let counter=setInterval(() => {
  //* Get Date Now
  let dateNow=new Date().getTime();
  //&find the date difference between now and countdown date
let dateDiff= coutDownDate-dateNow; //return date between;

//~ get time units
//!........millseconds..seconds..minutes..hours...days
//^let days =Math.floor( dateDiff  / 1000 / 60 / 60 / 24);
let days =Math.floor( dateDiff  / (1000 * 60 * 60 * 24));
let hours=Math.floor((dateDiff % (1000*60*60*24))/ (1000 * 60 * 60));
let minute=Math.floor((dateDiff % (1000*60*60))/ (1000 * 60 ));
let second=Math.floor((dateDiff % (1000*60))/ (1000));


document.getElementById('day').innerHTML= days + " " + 'D'
document.getElementById('hours').innerHTML= hours + " " + 'h'
document.getElementById('minute').innerHTML=minute<10?`0${minute + " " + 'm'}` : minute + " " + 'm';
document.getElementById('second').innerHTML= second<10?`0${second + " " + 's'}` : second + " " + 's';

/* if(dateDiff<0){
  clearInterval(counter);
} */
}, (1000));




function updateCount() {
  var maxLength = 100;
  var userInput = document.getElementById("userInput").value;
  var remainingChars = maxLength - userInput.length;

  if (remainingChars >= 0) {
    document.getElementById("charCount").innerHTML = remainingChars;
  } else {
    // يمكنك تنفيذ أي إجراء آخر هنا عند تجاوز الحد الأقصى
    document.getElementById("charCount").innerHTML = "your available character finished ";
  }
}


$(function(){
  $('.loader').fadeOut(1500,function(){
    $('.loading').slideUp(1500,function(){
      $('body').css('overflow','auto')
      $('.loading').remove();
    });
  });
  }) 



  $('.link-item').on('click',function(e){
 let aHref=  e.target.getAttribute('href');
    let sectionOffset=$(aHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},2000)

  })

  $(window).on('scroll',function(){
    let windowScroll = $(window).scrollTop();
    if(windowScroll>350){
      $('.icon').css("backgroundColor","#d62e33")
    }else{
      $('.icon').css('backgroundColor','transparent');
    }
  })

