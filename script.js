function onSubmit() {
    console.log('hello')
    var name = document.querySelector('input[placeholder="Name"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var phone = document.querySelector('input[placeholder="Phone"]').value;
    var subject = document.querySelector('input[placeholder="Subject"]').value;
    var message = document.querySelector('textarea').value;

    
    var params = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    };

    emailjs.send('service_ociisam', 'template_uyf3zk8', params)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            
            document.getElementById("MyForm").reset();
        }, function(error) {
            console.log('Email sending failed:', error);
        });
}
