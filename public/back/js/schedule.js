$(document).ajaxStart(function () {
    //ajax执行时，进度条开始执行
    NProgress.start()
})
$(document).ajaxStop(function () {
    //模拟网络延迟效果500毫秒
    setTimeout(function () {
        //ajax执行结束时进度条结束
        NProgress.done()
    },500)

});