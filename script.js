$(document).ready(function () {
    $('#taxForm').submit(function (e) {
        e.preventDefault();

        let age = parseInt($('#age').val());
        let income = parseFloat($('#income').val());
        let deductions = parseFloat($('#deductions').val());

        // Validation
        if (isNaN(age) || age <= 0 || isNaN(income) || isNaN(deductions)) {
            $('.error-icon').show();
            return;
        }

        $('.error-icon').hide();

        // Tax calculation
        let taxableIncome = Math.max(0, income + deductions - 8);
        let taxRate = 0.3;
        if (age >= 40 && age < 60) {
            taxRate = 0.4;
        } else if (age >= 60) {
            taxRate = 0.1;
        }

        let taxAmount = taxableIncome * taxRate;

        // Display result
        let resultHtml = `<div class="alert alert-success" role="alert">
                          Tax amount: ${taxAmount.toFixed(2)} Lakhs
                        </div>`;
        $('#result').html(resultHtml);
    });
});

$(document).ready(function() {
    // Function to display an error message
    function showError(element, message) {
      $(element).addClass('is-invalid');
      $(element).next('.invalid-feedback').text(message);
    }
  
    // Function to clear error message
    function clearError(element) {
      $(element).removeClass('is-invalid');
      $(element).next('.invalid-feedback').text('');
    }
  
    // Function to validate input as number
    function validateNumberInput(input) {
      if (isNaN(input)) {
        return false;
      }
      return true;
    }
  
    // Event listener for form submission
    $('#taxForm').submit(function(e) {
      e.preventDefault();
  
      // Clear previous errors
      $('.form-control').removeClass('is-invalid');
      $('.invalid-feedback').text('');
  
      let age = $('#age').val();
      let income = $('#income').val();
      let extraIncome = $('#extraIncome').val();
      let deductions = $('#deductions').val();
  
      // Validate inputs as numbers
      if (!validateNumberInput(age)) {
        showError('#age', 'Please enter a valid age (numbers only)');
        return;
      }
  
      if (!validateNumberInput(income)) {
        showError('#income', 'Please enter a valid income (numbers only)');
        return;
      }
  
      if (!validateNumberInput(extraIncome)) {
        showError('#extraIncome', 'Please enter a valid extra income (numbers only)');
        return;
      }
  
      if (!validateNumberInput(deductions)) {
        showError('#deductions', 'Please enter valid deductions (numbers only)');
        return;
      }
  
      // If all inputs are valid, proceed with calculation
      // Your tax calculation logic goes here
    });
  
    // Event listener for input fields to validate as numbers
    $('.form-control').on('input', function() {
      let inputValue = $(this).val();
      if (!validateNumberInput(inputValue)) {
        showError(this, 'Please enter numbers only');
      } else {
        clearError(this);
      }
    });
  });
  