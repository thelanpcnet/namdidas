var price1=50,price2=75,price3=75;
;
function total(){
    var sum = price1+price2+price3;
    var tt = sum +35;
   $("td.subtotal").html('$'+ sum);
   $("td.total").html('$'+tt);
}
// ---thay doi gia---
function changeFunction1(){

    $("td.price1").html('$'+ 50*$(".item1-quantity").val());
     price1 = 50*$(".item1-quantity").val();
     total();
    
}
function changeFunction2(){
    $("td.price2").html('$'+ 75*$(".item2-quantity").val());
     price2= 75*$(".item2-quantity").val();
     total();
}

function changeFunction3(){
    $("td.price3").html('$'+ 75*$(".item3-quantity").val());
    price3 = 75*$(".item3-quantity").val();
    total();
}
// ----ham cong tru 
function plusFunction1(){
    var m = parseInt($(".item1-quantity").val());
    m++;
    $(".item1-quantity").val(m);
    changeFunction1();
}
function plusFunction2(){
    var m = parseInt($(".item2-quantity").val());
    m++;
    $(".item2-quantity").val(m);
    changeFunction2();
}
function plusFunction3(){
    var m = parseInt($(".item3-quantity").val());
    m++;
    $(".item3-quantity").val(m);
    changeFunction3();
}
function minusFunction1(){
    var n = parseInt($(".item1-quantity").val());
    n--;
    if (n<=0) n=0; 
    $(".item1-quantity").val(n);
    changeFunction1();
}
function minusFunction2(){
    var n = parseInt($(".item2-quantity").val());
    n--;
    if (n<=0) n=0; 
    $(".item2-quantity").val(n);
    changeFunction2();
}
function minusFunction3(){
    var n = parseInt($(".item3-quantity").val());
    n--;
    if (n<=0) n=0; 
    $(".item3-quantity").val(n);
    changeFunction3();
}


// -----pop up-----
function buyFunction(){
    document.getElementById('modalbox').style.display='block';
}
function confirm(){
    document.getElementById('modalbox2').style.display='block';
    document.getElementById('modalbox').style.display='none';
}
// ----xoa 
function rmFunction1(){
    $('#row1').remove();
    price1=0;
    total();
}
function rmFunction2(){
    $('#row2').remove();
    price2=0;
    total();
}
function rmFunction3(){
    $('#row3').remove();
    price3=0;
    total();
}


