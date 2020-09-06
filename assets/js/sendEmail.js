function sendMail(contactForm) {
    emailjs
        .send("outlook", "milestone2", {
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
            package_type: contactForm.packagetype.value,
            package_request: contactForm.packagerequest.value,
        })
        .then(
            function (response) {
                alert("SUCCESS", response);
            },
            function (error) {
                alert("FAILED", error);
            }
        );
    frm.reset().delay(2000);
    return false; // To block from loading a new page
};
