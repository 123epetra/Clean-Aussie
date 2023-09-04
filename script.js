contactUsForm = document.getElementById('contactUsForm');

contactUsForm.addEventListener("submit", function(event){
    event.preventDefault();

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,     
      number: document.getElementById("number").value,
    };
    
    const serviceID = "service_20i6z6s";
    const templateID = "template_weg32xf";
    
      emailjs.send(serviceID, templateID, params)
      .then((res)=>{
          contactUsForm.reset();
          console.log(res);
          alert("Your message sent successfully!!")
    
      })
      .catch(err=>console.log(err));
      alert("Button clicked! Sending mail...");
})
