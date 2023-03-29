$(document).ready(function (){
  

  // Bind eventlyssnare på formuläret submit
  $('form').on('submit', function(event) {
    // Stoppa formuläret från att skickas automatiskt
    event.preventDefault();

    //lägg alla formulärfält i en variabel som tar emot användarens input

    const input = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        postalCode: $("#postalCode").val(),
        city: $("#city").val(),
        country: $("#country").val()
    }
  
    // skapa variabler av alla fält i formuläret
    //const firstName = $('#firstName').val();
    //const lastName = $('#lastName').val();
    //const phone = $('#phone').val();
    //const email = $('#email').val();
    //const address = $('#address').val();
    //const city = $('#city').val();
    //const postalCode = $('#postalCode').val();
  
    // variabel för att hålla koll på om alla fält är validerade
    let isValid = true;
  
    // Validera förnamn
    if (input.firstName.length < 2 || input.firstName.length > 50) {
      $('#firstName').addClass('is-invalid');
      isValid = false;
    } else {
      $('#firstName').removeClass('is-invalid');
    }
  
    // Validera efternamn
    if (input.lastName.length < 2 || input.lastName.length > 50) {
      $('#lastName').addClass('is-invalid');
      isValid = false;
    } else {
      $('#lastName').removeClass('is-invalid');
    }
  
    //valider mobilnr TODO: validera att det  får innehålla siffror, bindestreck och parenteser. Max 50 tecken
    const phoneRegex = /^[\d()-]{1,50}$/;
    if(!phoneRegex.test(input.phone) || input.phone.length > 50){
      $('#phone').addClass('is-invalid');
      isValid = false
    } else {
      $('#phone').removeClass('is-invalid')
    }
  
    // Validera email
    
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(input.email) || input.email.length > 50) {
      $('#email').addClass('is-invalid');
      isValid = false;
    } else {
      $('#email').removeClass('is-invalid');
    }
  
    // Validera address
    if (input.address.length < 2 || input.address.length > 50) {
      $('#address').addClass('is-invalid');
      isValid = false;
    } else {
      $('#address').removeClass('is-invalid');
    }
  
    // Validera ort
    if (input.city.length < 2 || input.city.length > 50) {
      $('#city').addClass('is-invalid');
      isValid = false;
    } else {
      $('#city').removeClass('is-invalid');
    }
  
    // Validera postnummer
    const postalCodeRegex = /^\d{3}\s?\d{2}$/;
    if (!postalCodeRegex.test(input.postalCode)) {
      $('#postalCode').addClass('is-invalid');
      isValid = false;
    } else {
      $('#postalCode').removeClass('is-invalid');
    }
  
    // Om alla fält är validerade, skicka formuläret och spara i sessionstorage
    if (isValid) {

      sessionStorage.setItem('customerInfo',JSON.stringify(input))
      
      this.submit();
      window.location.href = 'confirmation.html';
      console.log(sessionStorage.getItem('customerInfo'))
      
      
    }
  });
  
})
