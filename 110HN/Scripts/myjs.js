
$(document).ready(function () { var raido = $(".wrap").attr("data-toggle"); if (raido == 1) { $(".mnv-tuvan").css("display", "none"); $(".x").click(function () { $(".wrap").fadeToggle(); $(".mnv-tuvan").fadeToggle(); }); $(".mnv-tuvan").click(function () { $(".wrap").fadeToggle(); $(this).fadeToggle(); }); } else { $(".wrap").css("display", "none"); $(".x").click(function () { $(".wrap").fadeToggle(); $(".mnv-tuvan").fadeToggle(); }); $(".mnv-tuvan").click(function () { $(".wrap").fadeToggle(); $(this).fadeToggle(); }); } })(function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.5&appId=887080981367835"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));

function DialogBox(msg) {
    alert(msg);
}

function AddToCart(MaSP) {
    $.ajax({
        url: '/Cart/AddCart', // to get the right path to controller from TableRoutes of Asp.Net MVC
        dataType: "json", //to work with json format
        type: "POST", //to do a post request 
        contentType: 'application/json; charset=utf-8', //define a contentType of your request
        cache: false, //avoid caching results
        data: { MaSP : MaSP }, // here you can pass arguments to your request if you need
        success: function (data) {
            // data is your result from controller
            if (data.success) {
                alert(data.message);
            }
        },
        error: function (xhr) {
            alert('error');
        }
    });
}