
$(function () {
    $('.category').click(function () {
        $(this).next().stop().slideToggle();
    })

    $('.icon_left').click(function(){
        $('.lt_header').toggleClass("hidemenu");
        $('.lt_main').toggleClass("hidemenu");
        $('.lt_aside').toggleClass("hidemenu");
    })
    
    // 模态框
    $('.icon_right').click(function(){
        $('#logoutModal').modal('show');
    })

    $('#logoutBtn').click(function(){
        $.ajax({
            type:'get',
            url:'/employee/employeeLogout',
            dataType:'json',
            success:function(info){
                if(info.success){
                    location.href='login.html';
                }
            }
        })
    })

})