document.getElementById('payrollForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const id_number = document.getElementById('id_number').value;
  const last_name = document.getElementById('last_name').value;
  const first_name = document.getElementById('first_name').value;
  const middle_name = document.getElementById('middle_name').value;
  const position = document.getElementById('position').value;
  const rate = parseFloat(document.getElementById('rate').value);
  const days = parseInt(document.getElementById('work_days').value);

  const gross = rate * days;
  const sss = gross * 0.05;
  const pagibig = gross * 0.03;
  const philhealth = gross * 0.02;
  const tax = gross * 0.05;
  const totalDeduction = sss + pagibig + philhealth + tax;
  const net = gross - totalDeduction;

  const payrollData = {
    id_number, last_name, first_name, middle_name, position, rate, days, gross, sss, pagibig, philhealth, tax, totalDeduction, net
  };

  localStorage.setItem('payrollData', JSON.stringify(payrollData));
  window.location.href = 'payroll_invoice.html';
});