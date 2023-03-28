$(document).ready(function () {
	const customerInfo = sessionStorage.getItem('customerInfo');

	function showCustomerInfo(customer) {
		const container = $('#confirmation-customer-info');
		container.html(`
        <p>${customer.firstName} ${customer.lastName}</p>
        <p>${customer.address}</p>
        <p>${customer.postnummer} ${customer.ort}</p>
        `);
	}
	showCustomerInfo(JSON.parse(customerInfo));
});
