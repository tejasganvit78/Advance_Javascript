// Dummy array to store booked appointments
let appointments = [];

function bookAppointment() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (name && email && date && time) {
        const appointment = {
            name,
            email,
            date,
            time
        };

        // Add the appointment to the array
        appointments.push(appointment);

        // Display booked appointments
        displayAppointments();

        // Clear the form
        document.getElementById('appointmentForm').reset();
    } else {
        alert('Please fill in all the fields');
    }
}

function displayAppointments() {
    const appointmentListDiv = document.getElementById('appointmentList');
    appointmentListDiv.innerHTML = '<h2>Booked Appointments</h2>';

    if (appointments.length === 0) {
        appointmentListDiv.innerHTML += '<p>No appointments booked yet.</p>';
    } else {
        appointments.forEach((appointment, index) => {
            appointmentListDiv.innerHTML += `
                <div class="appointment">
                    <p><strong>Name:</strong> ${appointment.name}</p>
                    <p><strong>Email:</strong> ${appointment.email}</p>
                    <p><strong>Date:</strong> ${appointment.date}</p>
                    <p><strong>Time:</strong> ${appointment.time}</p>
                    <button onclick="cancelAppointment(${index})">Cancel Appointment</button>
                </div>
            `;
        });
    }
}

function cancelAppointment(index) {
    // Remove the appointment from the array
    appointments.splice(index, 1);

    // Display updated appointments
    displayAppointments();
}
