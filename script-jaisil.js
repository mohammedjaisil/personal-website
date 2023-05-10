$(document).ready(function () {
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            place:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                number:true
            },
            message:{
                required:true,
                minlength:4
            }
        }
    })
})
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwzXCRg_V_ae8bWd5WsvQm0jzsBSpfKX1QUxKTcl-w8v7KmIi9OUP3FDCkvP1pz0gGm/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
