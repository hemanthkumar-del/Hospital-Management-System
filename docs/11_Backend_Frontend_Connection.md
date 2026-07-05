# Backend-Frontend Connection Setup Guide

## ✅ What Has Been Done

### 1. **Backend Configuration**
- ✓ Updated CORS configuration to properly handle requests from the frontend
- ✓ Added environment variables for configuration
- ✓ Created API route structure with `/api/v1` prefix
- ✓ Added basic placeholder endpoints for all main modules

**File**: [backend/.env](backend/.env)
- `FRONTEND_URL=http://localhost:3000`
- `PORT=5000`
- `NODE_ENV=development`

**File**: [backend/src/app.ts](backend/src/app.ts)
- CORS configured to accept requests from the frontend
- Credentials support enabled
- API routes mounted at `/api/v1`

**File**: [backend/src/routes/index.ts](backend/src/routes/index.ts)
- Basic route structure for all API endpoints
- Ready for implementation

### 2. **Frontend Configuration**
- ✓ Created API client utilities for type-safe API calls
- ✓ Set up environment variables for backend URL
- ✓ Created connection status page to verify backend connectivity

**File**: [frontend/.env.local](frontend/.env.local)
- `NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1`

**File**: [frontend/lib/api.ts](frontend/lib/api.ts)
- Reusable `apiRequest()` function for all API calls
- Pre-configured API endpoints for all modules
- Automatic header and credential management

**File**: [frontend/app/page.tsx](frontend/app/page.tsx)
- Connection status checker
- Visual feedback for backend connectivity

## 🚀 Quick Start

### Step 1: Start the Backend
```bash
cd backend
npm run dev
```
Expected output:
```
🚀 Server running on port 5000
```

### Step 2: Start the Frontend
Open a new terminal:
```bash
cd frontend
npm run dev
```
Expected output:
```
▲ Next.js
Local:        http://localhost:3000
```

### Step 3: Verify Connection
1. Open http://localhost:3000 in your browser
2. You should see:
   - ✓ Green checkmark if backend is connected
   - ✗ Red cross if backend is not running
   - API URLs displayed on the page

## 📊 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser (Frontend)                       │
│                  http://localhost:3000                       │
│                                                              │
│  Components use → apiRequest() → NEXT_PUBLIC_API_URL       │
└──────────────────────────┬──────────────────────────────────┘
                           │
                    Fetch with CORS
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   Express Server (Backend)                   │
│              http://localhost:5000/api/v1                   │
│                                                              │
│  CORS ✓ | Helmet | Morgan | Cookie Parser | JWT Ready      │
└─────────────────────────────────────────────────────────────┘
```

## 📝 How to Use the API Client

### Example: Fetching Doctors
```typescript
import { doctorsAPI } from "@/lib/api";

// In a component or server action:
const doctors = await doctorsAPI.getAll();
console.log(doctors);
```

### Example: Creating a Patient
```typescript
import { patientsAPI } from "@/lib/api";

const newPatient = await patientsAPI.create({
  name: "John Doe",
  email: "john@example.com",
  age: 45,
});
```

### Example: Health Check
```typescript
import { healthCheck } from "@/lib/api";

const status = await healthCheck();
// Returns: { success: true, message: "🏥 Hospital Management System API is running!" }
```

## 🔧 Customizing the Connection

### Change Backend URL
Edit `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=http://your-backend-url/api/v1
```

### Change Backend Port
Edit `backend/.env`:
```
PORT=8000
```
Then update `frontend/.env.local` accordingly.

### Add Custom Endpoints
Edit `frontend/lib/api.ts` to add new API endpoint groups:
```typescript
export const prescriptionsAPI = {
  getAll: () => apiRequest("/prescriptions"),
  getById: (id: string) => apiRequest(`/prescriptions/${id}`),
  create: (data: unknown) =>
    apiRequest("/prescriptions", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
```

## 🛡️ Security Features Enabled

- **CORS**: Configured for controlled cross-origin access
- **Helmet**: Adds security headers
- **Cookie Support**: For session/authentication management
- **JWT Ready**: Structure ready for JWT authentication
- **Rate Limiting**: Ready to be implemented (package installed)
- **Input Validation**: Ready for Zod schema validation

## ⚠️ Troubleshooting

### Frontend can't reach backend
1. Verify backend is running on port 5000
2. Check `NEXT_PUBLIC_API_URL` in `frontend/.env.local`
3. Check browser console for CORS errors
4. Ensure `FRONTEND_URL` in `backend/.env` matches frontend URL

### CORS Errors
1. Verify `FRONTEND_URL` in `backend/.env`
2. Clear browser cache and restart both servers
3. Check that `cors()` middleware is before routes

### Environmental Issues
- Always run `npm install` after cloning
- Delete `node_modules` and `.next` if issues persist
- Run `npm install` again after deletion

## 📚 Next Steps

1. **Implement Backend Endpoints**: Replace placeholder routes with actual database operations
2. **Add Authentication**: Implement JWT login/register endpoints
3. **Create Pages**: Build React components that use the API client
4. **Add Error Handling**: Implement global error handling in the API client
5. **Setup Database**: Connect MongoDB with Mongoose models
6. **Deploy**: Configure for production deployment

## 📞 API Reference

All endpoints are prefixed with: `http://localhost:5000/api/v1`

See [06_API_plan.md](../docs/06_API_plan.md) for complete API documentation.

---

**Status**: ✅ Backend and Frontend are connected and ready for development!
