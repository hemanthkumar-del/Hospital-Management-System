# Hospital Management System - Database Design

## Database

MongoDB Atlas

---

# Collections

1. users
2. departments
3. doctors
4. patients
5. appointments
6. prescriptions
7. medicines
8. pharmacy_sales
9. lab_tests
10. lab_reports
11. bills
12. payments
13. rooms
14. notifications
15. audit_logs

--------------------------------------------------

# 1. users

Purpose:
Store authentication information for all users.

Fields

- _id
- fullName
- email
- password
- role
- phone
- profileImage
- status
- lastLogin
- createdAt
- updatedAt

--------------------------------------------------

# 2. departments

Fields

- _id
- departmentName
- description
- floor
- status

--------------------------------------------------

# 3. doctors

Fields

- _id
- userId
- departmentId
- specialization
- qualification
- experience
- consultationFee
- availableDays
- availableTime
- roomNumber

--------------------------------------------------

# 4. patients

Fields

- _id
- userId
- age
- gender
- bloodGroup
- address
- emergencyContact
- allergies
- medicalHistory

--------------------------------------------------

# 5. appointments

Fields

- _id
- patientId
- doctorId
- appointmentDate
- appointmentTime
- reason
- status
- tokenNumber

--------------------------------------------------

# 6. prescriptions

Fields

- _id
- appointmentId
- doctorId
- patientId
- diagnosis
- medicines
- notes

--------------------------------------------------

# 7. medicines

Fields

- _id
- medicineName
- category
- stock
- expiryDate
- manufacturer
- price

--------------------------------------------------

# 8. pharmacy_sales

Fields

- _id
- prescriptionId
- patientId
- medicines
- totalAmount
- paymentStatus

--------------------------------------------------

# 9. lab_tests

Fields

- _id
- patientId
- doctorId
- testName
- instructions
- status

--------------------------------------------------

# 10. lab_reports

Fields

- _id
- labTestId
- uploadedBy
- reportFile
- remarks
- uploadedAt

--------------------------------------------------

# 11. bills

Fields

- _id
- patientId
- consultationFee
- medicineFee
- labFee
- totalAmount
- paymentStatus

--------------------------------------------------

# 12. payments

Fields

- _id
- billId
- amount
- paymentMethod
- paymentDate
- transactionId

--------------------------------------------------

# 13. rooms

Fields

- _id
- roomNumber
- department
- roomType
- availability

--------------------------------------------------

# 14. notifications

Fields

- _id
- receiverId
- title
- message
- readStatus
- createdAt

--------------------------------------------------

# 15. audit_logs

Fields

- _id
- userId
- action
- module
- timestamp
- ipAddress

--------------------------------------------------

Relationships

users → doctors

users → patients

departments → doctors

patients → appointments

doctors → appointments

appointments → prescriptions

prescriptions → medicines

prescriptions → pharmacy_sales

patients → lab_tests

lab_tests → lab_reports

patients → bills

bills → payments