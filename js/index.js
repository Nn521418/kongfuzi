$(".seachright span:nth-child(2)").on("click",function(){
    $(this).css({"color":"#8c222c"});
    $(".seachright span:nth-child(1)").css({"color":"#333333"});
    $(".red").animate({"left":"60px"});
    $(".seachright div input").attr({"placeholder":"拍品名称、拍品作者、拍品昵称"});
    $(".sale1").html("在拍");
    $(".saled").html("已结束");
})
$(".seachright span:nth-child(1)").on("click",function(){
    $(this).css({"color":"#8c222c"});
    $(".seachright span:nth-child(2)").css({"color":"#333333"});
    $(".red").animate({"left":"10px"});
    $(".seachright div input").attr({"placeholder":"商品、名称、作者、出版社、ISBN"});
    $(".sale1").html("在售");
    $(".saled").html("已售");
})
$(".onsale").mouseenter(function(){
    $(".saled").css({"display":"block"});
    $(this).css({"border":"1px solid #cccccc","background":"white"});
    $(".xia").css({"display":"none"});
    $(".shang").css({"display":"block"});
})
$(".onsale").mouseleave(function(){
    $(".saled").css({"display":"none"});
    $(this).css({"border":"none"});
    $(".xia").css({"display":"block"});
    $(".shang").css({"display":"none"});
})
$(".saled").click(function(){
    let aaa =$(this).text();
    let bbb=$(".sale1").text();
    $(".sale1")[0].innerHTML=aaa;
    $(this)[0].innerHTML=bbb;
})