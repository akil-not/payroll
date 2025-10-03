window.addEventListener('DOMContentLoaded', function() {
  const output = document.getElementById('output');
  const data = localStorage.getItem('payrollData');
  if (!data) {
    output.innerHTML = '<p>No payroll data found.</p>';
    return;
  }
  const payroll = JSON.parse(data);
  output.innerHTML = `
    <div class="payroll-receipt">
      <h1 style="text-align:center; font-size:2.4rem; font-weight:bold; margin-bottom:18px;">Invoice</h1>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span style="font-weight:bold;">ID:</span>
        <span>${payroll.id_number}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span style="font-weight:bold;">NAME:</span>
        <span>${payroll.last_name}, ${payroll.first_name} ${payroll.middle_name ? payroll.middle_name.charAt(0) + '.' : ''}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:18px;">
        <span style="font-weight:bold;">POSITION:</span>
        <span>${payroll.position}</span>
      </div>

      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span style="font-weight:bold;">RATE:</span>
        <span>${payroll.rate}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:18px;">
        <span style="font-weight:bold;">DAYS:</span>
        <span>${payroll.days}</span>
      </div>

      <div style="display:flex; justify-content:space-between; margin-bottom:18px;">
        <span style="font-weight:bold;">GROSS PAY:</span>
        <span>${payroll.gross.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      </div>

      <div style="text-align:center; font-weight:bold; margin:18px 0 8px 0;">DEDUCTIONS</div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span>SSS(5%):</span>
        <span>${payroll.sss.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span>PAG-IBIG(3%):</span>
        <span>${payroll.pagibig.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span>PHILHEALTH(2%):</span>
        <span>${payroll.philhealth.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
        <span>TAX(5%):</span>
        <span>${payroll.tax.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:18px; font-weight:bold;">
        <span>TOTAL DEDUCTION:</span>
        <span>${payroll.totalDeduction.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:24px; font-size:1.3rem; font-weight:bold;">
        <span>NET PAY:</span>
        <span>${payroll.net.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      </div>
    </div>
  `;
});