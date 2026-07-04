# Hospital Management System - API Plan

## Base URL

/api/v1

---

# Authentication

POST    /auth/register
POST    /auth/login
POST    /auth/logout
POST    /auth/forgot-password
POST    /auth/reset-password
GET     /auth/profile
PUT     /auth/change-password

---

# Users

GET     /users
GET     /users/:id
PUT     /users/:id
DELETE  /users/:id

---

# Doctors

POST    /doctors
GET     /doctors
GET     /doctors/:id
PUT     /doctors/:id
DELETE  /doctors/:id

GET     /doctors/:id/appointments

---

# Patients

POST    /patients
GET     /patients
GET     /patients/:id
PUT     /patients/:id
DELETE  /patients/:id

GET     /patients/:id/history

---

# Appointments

POST    /appointments
GET     /appointments
GET     /appointments/:id
PUT     /appointments/:id
DELETE  /appointments/:id

PATCH   /appointments/:id/status

---

# Prescriptions

POST    /prescriptions
GET     /prescriptions
GET     /prescriptions/:id
PUT     /prescriptions/:id
DELETE  /prescriptions/:id

---

# Laboratory

POST    /lab-tests
GET     /lab-tests
PUT     /lab-tests/:id

POST    /lab-reports
GET     /lab-reports
GET     /lab-reports/:id

---

# Pharmacy

POST    /medicines
GET     /medicines
PUT     /medicines/:id
DELETE  /medicines/:id

POST    /sales
GET     /sales

---

# Billing

POST    /bills
GET     /bills
GET     /bills/:id

POST    /payments
GET     /payments

---

# Notifications

GET     /notifications
PATCH   /notifications/:id/read

---

# Dashboard

GET     /dashboard/admin
GET     /dashboard/doctor
GET     /dashboard/patient
GET     /dashboard/pharmacy
GET     /dashboard/lab

---

# Reports

GET     /reports/revenue
GET     /reports/patients
GET     /reports/appointments
GET     /reports/inventory


| Module         | Approx APIs |
| -------------- | ----------: |
| Authentication |           7 |
| Users          |           4 |
| Doctors        |           6 |
| Patients       |           6 |
| Appointments   |           6 |
| Prescriptions  |           5 |
| Laboratory     |           5 |
| Pharmacy       |           6 |
| Billing        |           5 |
| Notifications  |           2 |
| Dashboard      |           5 |
| Reports        |           4 |
