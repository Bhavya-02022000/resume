function sendMail() {
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    var bodyOfEmail = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "bhavyajoshi2000@gmail.com",
        Password: "Stuart@2022",
        To: 'joshibhavya2000@gmail.com',
        From: "bhavyajoshi2000@gmail.com",
        Subject: "New mail on contact form from: " + name,
        Body: bodyOfEmail
    }).then(
        message => {
            if (message == 'OK') {
                alert("Thank You! Your email has been successfully sent")
            }
            else {
                alert("An error occured. Please try again later!")
            }
        }
    );
    document.getElementById("myForm").reset();
}