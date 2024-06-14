$(document).ready(function() {
    // Submit button click event
    $('#submitBtn').click(function() {
        // Get values from input fields
        var title = $('#inputTitle').val();
        var date = $('#inputDate').val();
        var description = $('#inputDescription').val();

        // Create HTML for the card
        var cardHtml = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <br>
                    <p class="card-date">${date}</p>
                    <br>
                    <p class="card-text">${description}</p>
                    <hr>
                </div>
            </div>
        `;

        // Append the card HTML to the container
        $('#cardContainer').append(cardHtml);

        // Reset input fields
        $('#inputTitle').val('');
        $('#inputDate').val('');
        $('#inputDescription').val('');

        // Close the modal
        $('#exampleModal').modal('hide');
    });
});