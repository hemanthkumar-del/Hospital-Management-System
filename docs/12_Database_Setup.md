# Database Setup Guide

## Current Status

Your backend is configured with MongoDB Atlas with the following credentials in `.env`:

```
MONGODB_URI=mongodb+srv://hemanthkodi6_db_user:EE.RT_x8-LP97Zu@cluster0.4sng6bw.mongodb.net/hospital_db?retryWrites=true&w=majority&appName=Cluster0
```

## Database Models Created

The following MongoDB models have been created:

- **User** - Authentication and user management
- **Doctor** - Doctor profiles and information
- **Patient** - Patient profiles and medical history
- **Appointment** - Appointment scheduling
- **Prescription** - Medical prescriptions
- **LabTest** - Laboratory test definitions
- **LabReport** - Laboratory test results
- **Medicine** - Pharmacy inventory

All models are located in: `backend/src/models/`

## Option 1: Using MongoDB Atlas (Cloud) ✅ Recommended

### Steps:

1. **MongoDB Atlas Account**: https://www.mongodb.com/cloud/atlas
2. **Check Cluster Status**:
   - Log in to MongoDB Atlas
   - Verify your cluster "cluster0" is running
   - Navigate to "Security" > "Network Access"
   - Ensure your IP address is whitelisted (or add 0.0.0.0/0 for development)

3. **Verify Connection String**:
   - Go to "Databases" > "Connect"
   - Select "Drivers"
   - Copy the connection string
   - Update `.env` if needed

4. **Common Issues**:
   - ❌ Connection timeout: Check IP whitelist in MongoDB Atlas
   - ❌ Authentication failed: Verify username/password
   - ❌ Database not found: Ensure database exists or will be created on first write

## Option 2: Using Local MongoDB

### For Windows:

1. **Download MongoDB Community Edition**:
   ```
   https://www.mongodb.com/try/download/community
   ```

2. **Install MongoDB**:
   - Run the installer
   - Choose "Install MongoDB as a Service"
   - Complete the installation

3. **Update .env**:
   ```
   MONGODB_URI=mongodb://localhost:27017/hospital_db
   ```

4. **Start MongoDB**:
   ```powershell
   net start MongoDB
   ```

5. **Verify Installation**:
   ```powershell
   mongosh
   ```

### For Mac:

```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

Then update `.env`:
```
MONGODB_URI=mongodb://localhost:27017/hospital_db
```

### For Linux (Ubuntu):

```bash
# Import MongoDB GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Install and start
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

## API Endpoints Available

### Patients
- `POST /api/v1/patients` - Create patient
- `GET /api/v1/patients` - List all patients
- `GET /api/v1/patients/:id` - Get patient by ID
- `PUT /api/v1/patients/:id` - Update patient
- `DELETE /api/v1/patients/:id` - Delete patient

### Doctors
- `POST /api/v1/doctors` - Create doctor
- `GET /api/v1/doctors` - List all doctors
- `GET /api/v1/doctors/:id` - Get doctor by ID
- `PUT /api/v1/doctors/:id` - Update doctor
- `DELETE /api/v1/doctors/:id` - Delete doctor

### Appointments
- `POST /api/v1/appointments` - Create appointment
- `GET /api/v1/appointments` - List all appointments
- `GET /api/v1/appointments/:id` - Get appointment by ID
- `PUT /api/v1/appointments/:id` - Update appointment
- `DELETE /api/v1/appointments/:id` - Delete appointment
- `PATCH /api/v1/appointments/:id/status` - Update appointment status

## Testing the Connection

### Using cURL:

```bash
# Test health check
curl http://localhost:5000/api/v1/

# Create a patient
curl -X POST http://localhost:5000/api/v1/patients \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "dateOfBirth": "1990-01-01",
    "gender": "male",
    "bloodType": "O+",
    "address": "123 Main St",
    "emergencyContact": {
      "name": "Jane Doe",
      "phone": "0987654321"
    }
  }'

# Get all patients
curl http://localhost:5000/api/v1/patients
```

### Using the Frontend:

The frontend's `lib/api.ts` has pre-configured API client functions:

```typescript
import { patientsAPI, doctorsAPI, appointmentsAPI } from "@/lib/api";

// Create a patient
const newPatient = await patientsAPI.create({
  name: "John Doe",
  email: "john@example.com",
  // ... other fields
});

// Get all doctors
const doctors = await doctorsAPI.getAll();

// Create an appointment
const appointment = await appointmentsAPI.create({
  patientId: "patient-id",
  doctorId: "doctor-id",
  appointmentDate: new Date(),
  timeSlot: "10:00 AM",
});
```

## Troubleshooting

### Database Connection Timeout

**Problem**: `Operation 'doctors.find()' buffering timed out after 10000ms`

**Solutions**:
1. Check MongoDB Atlas IP whitelist
2. Verify internet connection
3. Try connecting with local MongoDB
4. Check firewall settings

### Authentication Failed

**Problem**: `Authentication failed`

**Solutions**:
1. Verify username in .env: `hemanthkodi6_db_user`
2. Verify password: `EE.RT_x8-LP97Zu`
3. Special characters may need URL encoding
4. Reset MongoDB Atlas password if needed

### Connection String Issues

**Problem**: `Invalid Connection String`

**Solutions**:
1. Ensure URL format is correct
2. No spaces in the string
3. Password is URL encoded
4. Database name is correct

## Environment Variables

Update `backend/.env`:

```env
# MongoDB
MONGODB_URI=mongodb+srv://hemanthkodi6_db_user:EE.RT_x8-LP97Zu@cluster0.4sng6bw.mongodb.net/hospital_db?retryWrites=true&w=majority&appName=Cluster0

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_ACCESS_SECRET=Hospital_Access_Secret_2026
JWT_REFRESH_SECRET=Hospital_Refresh_Secret_2026

# Frontend
FRONTEND_URL=http://localhost:3000
```

## Next Steps

1. ✅ Verify MongoDB connection
2. ⏳ Implement authentication (JWT)
3. ⏳ Add input validation with Zod
4. ⏳ Add error handling middleware
5. ⏳ Create comprehensive API documentation

## Resources

- MongoDB Documentation: https://docs.mongodb.com
- Mongoose Documentation: https://mongoosejs.com
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas

---

**Database Status**: 🔌 Ready to connect

**Models Status**: ✅ Created (8 models)

**Controllers Status**: ✅ Created (Patients, Doctors, Appointments)

**Routes Status**: ✅ Implemented
