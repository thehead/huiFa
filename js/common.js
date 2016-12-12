//搜索按钮显示隐藏
$(function () {
    $('#mSerch').on('click',function () {
        $('#serchInput').show().focus();
    });
    $('#serchInput').blur(function () {
        $(this).hide().val('');
    })
});