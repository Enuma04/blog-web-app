/*$(document).ready(function() {
    $('.post').on('input', function() {
        const maxLength = $(this).attr('maxlength');
        if ($(this).val().length > maxLength) {
            $(this).val($(this).val().substring(0, maxLength));
        }
    });
});*/


$(document).ready(function() {
    $('textarea[name="lName"]').on('input', function() {
        $('#charCount').text('Characters: ' + (200 - $(this).val().length));
    });
});
