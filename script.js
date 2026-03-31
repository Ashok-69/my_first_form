const form = document.getElementById('registrationForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {

  const mobile = document.getElementById('mobile').value;

  // Mobile number validation - must be 10 digits
  if (!/^\d{10}$/.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number.');
    e.preventDefault();
    return;
  }

  // Show success message after submit
  setTimeout(() => {
    successMsg.style.display = 'block';
    form.reset();
  }, 1000);

});
```

4. Commit changes

---

### Your Repo Should Now Have 3 Files:
```
my_first_form/
├── index.html
├── style.css
└── script.js
