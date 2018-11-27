$(function(){

  $('#form').bootstrapValidator({
    feedbackIcons:{
      valid:'glyphicon glyphicon-ok',
      invalid:'glyphicon glyphicon-remove',
      validating:'glyphicon glyphicon-refresh'
    },
    fields:{
      username:{
        validators:{
          notEmpty:{
            message:"请输入用户名"
          },
          stringLength:{
            min:2,
            max:6,
            message:"用户名长度必须是2-6位"
          },
          callback:{
            message:"用户名不存在"
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"请输入密码"
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码长度必须是6-12位"
          },
          callback:{
            message:"密码错误"
          }
        }
      }
    }
  });

/*
  * 2. 校验成功后, 会触发一个事件, 表单校验成功事件
  *    默认是会提交表单的, 页面就跳转了,
  *    我们需要注册表单校验成功事件, 在成功事件中, 阻止默认的提交, 通过 ajax 提交
  * */
$('#form').on('success.form.bv',function(e){
  e.preventDefault();
  $.ajax({
    type:'post',
    url:'/employee/employeeLogin',
    data:$('#form').serialize(),
    dataType:'json',
    success:function(info){
      if(info.error === 1000){

        // alert("用户名不存在");
          // 更新当前input的校验状态, 更新成失败
          // updateStatus
          // 参数1: filed  字段名称
          // 参数2: status 状态
          //        NOT_VALIDATED(未校验), VALIDATING(校验中), INVALID(校验失败) or VALID(校验成功)
          // 参数3: validator 配置校验规则, 用来配置输出的提示信息
        $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback");

        return;
      }
      if(info.error === 1001){
        $('#form').data("bootstrapValidator").updateStatus("password","INVALID","callback");
        return;
      }
      if(info.success){
        location.href = "index.html";
      }
    }
  })
})
//重置功能
$('[type = "reset"]').click(function(){
  $('#form').data("bootstrapValidator").resetForm();
})
})