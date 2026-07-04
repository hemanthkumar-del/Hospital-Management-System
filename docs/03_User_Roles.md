# Hospital Management System - User Roles & Permissions

## 1. Administrator

### Description
The Administrator has full access to the Hospital Management System. This role is responsible for managing users, departments, hospital settings, and monitoring overall hospital operations.

### Permissions
- Login
- Manage all users
- Add/Edit/Delete doctors
- Add/Edit/Delete receptionists
- Add/Edit/Delete pharmacists
- Add/Edit/Delete lab technicians
- Manage departments
- Manage rooms
- View all appointments
- View all patients
- View all bills
- View reports
- View analytics
- Manage hospital settings

---

## 2. Doctor

### Description
Doctors provide consultations, prescribe medicines, and monitor patient health records.

### Permissions
- Login
- View dashboard
- View today's appointments
- View assigned patients
- View patient medical history
- Create prescriptions
- Update diagnosis
- Request laboratory tests
- View laboratory reports
- Update profile

---

## 3. Receptionist

### Description
Receptionists manage patient registrations and appointment scheduling.

### Permissions
- Login
- Register patients
- Update patient information
- Book appointments
- Reschedule appointments
- Cancel appointments
- Search patients
- Generate appointment token
- Check patient status

---

## 4. Patient

### Description
Patients can manage their appointments and view their medical records.

### Permissions
- Register
- Login
- Update profile
- Book appointment
- Cancel appointment
- View appointment history
- View prescriptions
- View laboratory reports
- View bills

---

## 5. Pharmacist

### Description
Pharmacists manage medicines and dispense prescriptions.

### Permissions
- Login
- View prescriptions
- Dispense medicines
- Manage medicine inventory
- Add medicines
- Update medicine stock
- Generate medicine bills

---

## 6. Laboratory Technician

### Description
Laboratory technicians conduct medical tests and upload reports.

### Permissions
- Login
- View test requests
- Upload lab reports
- Update report status
- Download reports

---

# Permission Matrix

| Feature | Admin | Doctor | Receptionist | Patient | Pharmacist | Lab Technician |
|---------|:-----:|:------:|:------------:|:-------:|:----------:|:--------------:|
| Login | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Manage Users | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Register Patient | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| Book Appointment | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| View Patients | ✅ | ✅ | ✅ | Own Only | ❌ | ❌ |
| Create Prescription | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| View Prescription | ✅ | ✅ | ❌ | Own Only | ✅ | ❌ |
| Upload Lab Report | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| View Lab Reports | ✅ | ✅ | ❌ | Own Only | ❌ | ✅ |
| Billing | ✅ | ❌ | ✅ | View Own | ✅ | ❌ |
| Reports & Analytics | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |