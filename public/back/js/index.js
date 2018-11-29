$(function () {
    // 基于准备好的dom，初始化echarts实例
    var printLeft = echarts.init(document.querySelector('.lt_print_left'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '2018 注册人数'
        },
        tooltip: {},
        legend: {
            data: ['人数']
        },
        xAxis: {
            data: ["一月", "二月", "三月", "四月", "五月", "六月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    printLeft.setOption(option);
})
$(function () {
    // 基于准备好的dom，初始化echarts实例
    var printRight = echarts.init(document.querySelector('.lt_print_right'));
    var option = {
        title: {
            text: '热门品牌销售',
            subtext: '2018年11月',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克', '阿迪达斯', 'AJ', '乔丹', '布兰妮']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 335, name: '耐克' },
                    { value: 310, name: '阿迪达斯' },
                    { value: 234, name: 'AJ' },
                    { value: 135, name: '乔丹' },
                    { value: 1548, name: '布兰妮' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    printRight.setOption(option);
})

