$(document).ready(function (){
  const form = $('.needs-validation');

  // Bind eventlyssnare på formuläret submit
  form.on('submit', function(event) {
    // Stoppa formuläret från att skickas automatiskt
    event.preventDefault();
  
    // skapa variabler av alla fält i formuläret
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const address = $('#address').val();
    const city = $('#city').val();
    const postalCode = $('#postalCode').val();
  
    // variabel för att hålla koll på om alla fält är validerade
    let isValid = true;
  
    // Validera förnamn
    if (firstName.length < 2 || firstName.length > 50) {
      $('#firstName').addClass('is-invalid');
      isValid = false;
    } else {
      $('#firstName').removeClass('is-invalid');
    }
  
    // Validera efternamn
    if (lastName.length < 2 || lastName.length > 50) {
      $('#lastName').addClass('is-invalid');
      isValid = false;
    } else {
      $('#lastName').removeClass('is-invalid');
    }
  
    //valider mobilnr TODO: validera att det  får innehålla siffror, bindestreck och parenteser. Max 50 tecken
    if(phone.length < 2 || phone.length > 50){
      $('#phone').addClass('is-invalid');
      isValid = false
    } else {
      $('#phone').removeClass('is-invalid')
    }
  
    // Validera email
    
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email) || email.length > 50) {
      $('#email').addClass('is-invalid');
      isValid = false;
    } else {
      $('#email').removeClass('is-invalid');
    }
  
    // Validera address
    if (address.length < 2 || address.length > 50) {
      $('#address').addClass('is-invalid');
      isValid = false;
    } else {
      $('#address').removeClass('is-invalid');
    }
  
    // Validera ort
    if (city.length < 2 || city.length > 50) {
      $('#city').addClass('is-invalid');
      isValid = false;
    } else {
      $('#city').removeClass('is-invalid');
    }
  
    // Validera postnummer
    var postalCodeRegex = /^\d{3}\s?\d{2}$/;
    if (!postalCodeRegex.test(postalCode)) {
      $('#postalCode').addClass('is-invalid');
      isValid = false;
    } else {
      $('#postalCode').removeClass('is-invalid');
    }
  
    // Om alla fält är validerade, skicka formuläret och spara i sessionstorage
    if (isValid) {
      form.submit(sessionStorage.setItem("form", JSON.stringify(form))); //lägg in infromaionen som JSON, måste åtgärdas
      console.log(form)
    }
  });
  
})
