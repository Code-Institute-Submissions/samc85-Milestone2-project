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
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
};
