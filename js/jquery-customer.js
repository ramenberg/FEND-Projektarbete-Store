$(document).ready(function () {
	const customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));

	function showCustomerInfo(customer) {
		const container = $('#confirmation-customer-info');
		container.html(`
        <p>${customer.firstName} ${customer.lastName}</p>
        <p>${customer.address}</p>
        <p>${customer.postnummer} ${customer.ort}</p>
		<p>${customer.country}</p>
		<br>
		<p>${customer.email}</p>
		<p>${customer.phone}</p>
        `);
	}
	showCustomerInfo(customerInfo);
});
