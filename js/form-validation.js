// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    $("form[name='login']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            username: {
                required: true,
                // Specify that username should be validated
                // by the built-in "email" rule
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                $(".error").css("visibility", "visible");
                $(".inputBox").css("border", "2px solid #ed3237");
                $(".text9").css("color", "#ed3237");
                $(".inputBox").css("background", "rgba(237,50,55, 0.2");
                $(".passwordInput").css("color", "#fff")
            }
        },
        showErrors: function(errorMap, errorList) {
            // Do nothing here
        },
    });
});
