$(function(){
    $.ajax({
        type:'get',
        url:'/employee/checkRootLogin',
        dateType:'json',
        success:function(info){
            if(info.error === 400){
                location.href= 'login.html';
            }
        }
    })
})