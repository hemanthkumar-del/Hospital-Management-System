# Hospital Management System - User Flow

# Overall Flow

Landing Page
        │
        ▼
Login / Register
        │
        ▼
Authentication
        │
        ▼
Role Verification
        │
        ▼
---------------------------------------------
|      |       |       |      |            |
▼      ▼       ▼       ▼      ▼            ▼
Admin Doctor Reception Patient Pharmacy Laboratory
Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard

------------------------------------------------------------

# Admin Flow

Login
 ↓
Dashboard
 ↓
Manage Doctors
 ↓
Manage Patients
 ↓
Manage Staff
 ↓
Departments
 ↓
Rooms
 ↓
Analytics
 ↓
Reports
 ↓
Logout

------------------------------------------------------------

# Doctor Flow

Login
 ↓
Dashboard
 ↓
Today's Appointments
 ↓
Select Patient
 ↓
View Medical History
 ↓
Diagnosis
 ↓
Prescription
 ↓
Request Lab Test
 ↓
Save
 ↓
Logout

------------------------------------------------------------

# Receptionist Flow

Login
 ↓
Dashboard
 ↓
Register Patient
 ↓
Book Appointment
 ↓
Assign Doctor
 ↓
Generate Token
 ↓
Payment
 ↓
Logout

------------------------------------------------------------

# Patient Flow

Register/Login
 ↓
Dashboard
 ↓
Book Appointment
 ↓
Appointment Confirmation
 ↓
Consultation
 ↓
Prescription
 ↓
Lab Test (if required)
 ↓
Billing
 ↓
Download Reports
 ↓
Logout

------------------------------------------------------------

# Pharmacy Flow

Login
 ↓
Dashboard
 ↓
View Prescription
 ↓
Issue Medicines
 ↓
Update Inventory
 ↓
Generate Bill
 ↓
Logout

------------------------------------------------------------

# Laboratory Flow

Login
 ↓
Dashboard
 ↓
View Test Requests
 ↓
Perform Test
 ↓
Upload Report
 ↓
Doctor Reviews Report
 ↓
Patient Downloads Report
 ↓
Logout

------------------------------------------------------------

# Appointment Flow

Patient Requests Appointment
        ↓
Receptionist Confirms
        ↓
Doctor Accepts
        ↓
Appointment Scheduled
        ↓
Consultation
        ↓
Prescription
        ↓
Billing
        ↓
Completed

------------------------------------------------------------

# Prescription Flow

Doctor Creates Prescription
        ↓
Saved in Database
        ↓
Patient Views Prescription
        ↓
Pharmacist Dispenses Medicine

------------------------------------------------------------

# Laboratory Flow

Doctor Requests Test
        ↓
Lab Receives Request
        ↓
Test Completed
        ↓
Report Uploaded
        ↓
Doctor Reviews
        ↓
Patient Downloads

------------------------------------------------------------

# Billing Flow

Consultation Completed
        ↓
Generate Bill
        ↓
Patient Payment
        ↓
Receipt Generated
        ↓
Payment Stored