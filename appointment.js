function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (name && email && phone && date && time) {
        // You can handle the submitted data here, e.g., send it to the server
        alert(`Appointment booked for ${name} on ${date} at ${time}.`);
        
        // Clear the form
        document.getElementById('appointmentForm').reset();
    } else {
        alert('Please fill in all the fields.');
    }
}

function resetForm() {
    // Clear the form
    document.getElementById('appointmentForm').reset();
}
