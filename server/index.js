import cors from 'cors';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ─── In-Memory Enquiry Store ────────────────────────────────────────────────
// Stores all enquiries in memory (resets on server restart).
// To persist data, swap in MongoDB — see the commented Mongoose section below.
const enquiries = [];

// ─── Health Check ───────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    totalEnquiries: enquiries.length,
    uptime: process.uptime(),
  });
});

// ─── POST /api/enquiry ──────────────────────────────────────────────────────
const requiredFields = ['name', 'email', 'phone'];

app.post('/api/enquiry', (req, res) => {
  const enquiry = {
    name: String(req.body?.name ?? '').trim(),
    email: String(req.body?.email ?? '').trim(),
    phone: String(req.body?.phone ?? '').trim(),
    workshop: String(req.body?.workshop ?? 'AI & Robotics Summer Workshop').trim(),
  };

  // Check required fields
  const missingFields = requiredFields.filter((field) => !enquiry[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields.',
      missingFields,
    });
  }

  // Validate email & phone formats
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email);
  const phoneLooksValid = /^[0-9+\-\s()]{7,16}$/.test(enquiry.phone);

  if (!emailLooksValid || !phoneLooksValid) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address and phone number.',
    });
  }

  // Store the enquiry
  const record = {
    id: enquiries.length + 1,
    ...enquiry,
    submittedAt: new Date().toISOString(),
  };

  enquiries.push(record);
  console.log(`📩 New enquiry #${record.id}:`, record);

  return res.status(201).json({
    success: true,
    message: 'Enquiry received successfully.',
    data: record,
  });
});

// ─── Start Server ───────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 API server running on http://127.0.0.1:${PORT}`);
});

// ═══════════════════════════════════════════════════════════════════════════════
// OPTIONAL: MongoDB / Mongoose Integration
// ═══════════════════════════════════════════════════════════════════════════════
//
// 1. Install mongoose:  npm install mongoose
// 2. Uncomment the code below
// 3. Replace the in-memory `enquiries.push(record)` with `await Enquiry.create(record)`
//
// ---
//
// import mongoose from 'mongoose';
//
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kidrove')
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));
//
// const enquirySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   workshop: { type: String, default: 'AI & Robotics Summer Workshop' },
//   submittedAt: { type: Date, default: Date.now },
// });
//
// const Enquiry = mongoose.model('Enquiry', enquirySchema);
//
// In the POST handler, replace `enquiries.push(record)` with:
//   const saved = await Enquiry.create(enquiry);
//   return res.status(201).json({ success: true, data: saved });
//
// ═══════════════════════════════════════════════════════════════════════════════
