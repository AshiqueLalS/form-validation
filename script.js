$("#register-form").validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            required: true
        },
        phone: {
            required: true,
            minlength: 10,
            maxlength: 14  
        },
        age: {
            required:true,
            min: 18,
            max: 120
        },
        gender: {
            required:true,
            minlength: 4,
            maxlength: 15
        }
      },
      messages: {
        name: {
            required: "Name field is required"
        },
        email: {
            required: "Email field is required"
        },
        phone: {
            required: "Phone number is required"
        },
        age: {
            required: "Age is required"
        },
        gender: {
            required: "Gender is required"
        }
      }
});