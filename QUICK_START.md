# 🚀 QUICK START GUIDE

Get the App V1 up and running in just a few minutes!

## ⚡ 30-Second Setup

### For Mobile
```bash
npm install && npm start
# Then press: a (Android) | i (iOS) | w (Web)
```

### For Web
```bash
# Open any HTML file directly
web/index.html  # Main dashboard
web/training.html  # Training monitor
# Or use: python -m http.server 8000
```

---

## 📱 First Run (Mobile)

### 1️⃣ Login Screen Appears
```
App V1
Platform pelatihan model deteksi objek

[Email input] admin@appv1.ai
[Password input] •••••
[✓] Ingat saya
[Lupa password?]

[Masuk ke Dashboard] Button
```

### 2️⃣ Enter Credentials
- **Email**: `admin@appv1.ai` (pre-filled)
- **Password**: Any password (demo mode)
- **Remember Me**: Optional checkbox

### 3️⃣ Tap "Masuk ke Dashboard"
Loading animation appears → Redirects to app

---

## 🏠 Main Dashboard (Beranda)

### What You See
```
Project List
Kelola dan pilih proyek deteksi objek

[+ Proyek Baru]  ← Click to create project

📦 Kereta api & rel
   OBJECT DETECTION
   📁 234 gambar • ⏱️ 2 hari lalu

📦 Rail semantic
   SEGMENTATION
   📁 91 gambar • ⏱️ 5 jam lalu

📦 Signaling class
   CLASSIFICATION
   📁 1,102 gambar • ⏱️ 1 hari lalu
```

### Actions
- Tap project card to view details (ready for implementation)
- Click "+ Proyek Baru" to create new project
- Use bottom tabs to navigate

---

## ⚡ Training Monitor

### Tab Navigation
Bottom of screen shows 5 tabs:
- 🏠 **Beranda** (Projects)
- 📷 **Live Cam** (Detection)
- ⚡ **Training** ← You are here
- 📋 **Log Sistem** (Logs)
- 🚪 **Keluar** (Settings)

### Training Monitor Features
```
Training Monitor
cup-counting-134rx/2 • YOLOv8n • Epoch 45/100

[⏸ Pause] [⭕ Stop] [⬇️ Export]

STATUS TRAINING
● Active
███████░░░░░░░░░░░░ 45%
Epoch 45/100 | 45%

[Best MAP@50]        [Current Loss]
0.65                 1.02
1 pada epoch 90       Box + Class + Obj

📊 CHARTS (4 sections)
├── Mean Average Precision (MAP)
├── Box Loss (Regression loss)
├── Class Loss (Classification)
└── Object Loss (Confidence)
```

### Controls
- **Pause**: Temporarily stop training
- **Stop**: End training session
- **Export**: Download training results

---

## 📷 Live Detection

### Interface
```
Live Detect
Kamera realtime + anotasi AI (simulasi)

┌─────────────────────┐
│   📷 Kamera belum   │
│      aktif          │
│ [Mulai Streaming]   │
└─────────────────────┘

Detection Statistics

[Objects Detected]  [Confidence]
0                   0%

[FPS]               [Response Time]
0                   0ms
```

### Features
- Camera placeholder (ready for real camera integration)
- Real-time detection statistics
- FPS and response time monitoring
- Start/stop streaming button

---

## 📋 System Logs

### Filter Options
```
[ALL] [INFO] [TRAIN] [WARN] [ERROR]

WAKTU       TIPE        PESAN
14:22:10    INFO        Epoch 45 selesai, mAP meningkat 0.58
14:15:33    TRAIN       Box loss turun ke 1.02, konvergensi baik
14:05:20    WARN        Suhu GPU 79°C, pendinginan normal
13:58:45    INFO        Model checkpoint saved
13:45:12    TRAIN       Training started, batch size 16

[📥 Export Logs]
```

### Log Types Color-Coded
- 🔵 **INFO** (Blue) - Information messages
- 🟣 **TRAIN** (Purple) - Training events
- 🟡 **WARN** (Yellow) - Warnings
- 🔴 **ERROR** (Red) - Errors

---

## ⚙️ Settings (Keluar)

### User Profile
```
        AP          ← Avatar with initials
        
Andi Pratama
andi@appv1.ai

━━━━━━━━━━━━━━━━━━

👤 Edit Profile
🔐 Change Password
🔔 Notifications
🌙 Dark Mode

ℹ️ App Version        1.0.0
? Help & Support
📋 Terms & Privacy

[🚪 Logout]
```

### Profile Actions
- Click each item to navigate (ready for implementation)
- Logout button to return to login screen

---

## 🌐 Web Dashboard

### Homepage (index.html)
```
┌─────────────────┬──────────────────────┐
│  SIDEBAR        │  MAIN CONTENT        │
├─────────────────┤                      │
│ ⚡ App V1       │  Project List        │
│                 │  [+ Proyek Baru]     │
│ 🏠 Beranda      │                      │
│ 📷 Live Cam     │  Project Cards Grid  │
│ ⚡ Training     │  ┌──────┐ ┌──────┐  │
│ 📋 Log Sistem   │  │ Proj1│ │ Proj2│  │
│ ⚙️ Pengaturan   │  └──────┘ └──────┘  │
│                 │  ┌──────┐           │
│ 🚪 Keluar      │  │ Proj3│           │
│                 │  └──────┘           │
└─────────────────┴──────────────────────┘
```

### Navigation
- Click sidebar items to navigate between pages
- Responsive design adapts to screen size
- All pages have consistent layout

---

## 🎮 Demo Account

```
Email: admin@appv1.ai
Password: (any password for demo)
```

---

## 💡 Tips & Tricks

### Mobile App
✅ Swipe left/right to navigate between tabs (ready for implementation)
✅ Pull down to refresh (ready for implementation)
✅ Tap and hold for additional options (ready for implementation)
✅ Rotate device for landscape mode (supported)

### Web Dashboard
✅ Click sidebar to collapse on mobile
✅ Charts are interactive (ready for implementation)
✅ Export buttons download data (ready for implementation)
✅ Bookmark favorite pages for quick access

---

## 🐛 Troubleshooting

### App Won't Start
**Solution**: Run `npm install` to install dependencies

### Blank Screen After Login
**Solution**: Hard refresh the app or clear cache

### Tabs Not Visible
**Solution**: Scroll down on mobile or maximize browser window

### Can't Click Buttons
**Solution**: Make sure not in loading state, try again after animation completes

---

## 🎯 Common Tasks

### Navigate to Training Monitor
1. Tap ⚡ **Training** tab (mobile)
2. Or click "Training" in sidebar (web)

### View System Logs
1. Tap 📋 **Log Sistem** tab (mobile)
2. Or click "Log Sistem" in sidebar (web)
3. Filter by log type using buttons

### Access Settings
1. Tap 🚪 **Keluar** tab (mobile)
2. Or click "Pengaturan" in sidebar (web)
3. View profile and preferences

### Create New Project
1. Go to **Beranda** (Dashboard)
2. Click **[+ Proyek Baru]** button
3. Fill project details (ready for implementation)

### Monitor Training Progress
1. Go to **Training** tab
2. Watch progress bar update
3. View metrics in stat cards
4. Check charts for detailed analysis

---

## 📊 Sample Data

### Projects
- **Kereta api & rel**: 234 images, Object Detection
- **Rail semantic**: 91 images, Segmentation
- **Signaling class**: 1,102 images, Classification

### Training Status
- Model: YOLOv8n
- Current Epoch: 45/100
- Best MAP@50: 0.65 (at epoch 90)
- Current Loss: 1.02

### System Logs
- INFO: Epoch completed
- TRAIN: Loss decreased
- WARN: GPU temperature
- ERROR: None (demo)

---

## 🔄 Feature Status

| Feature | Mobile | Web | Status |
|---------|--------|-----|--------|
| Login/Register | ✅ | ✅ | Ready |
| Dashboard | ✅ | ✅ | Ready |
| Live Detection | ✅ | ✅ | UI Only |
| Training Monitor | ✅ | ✅ | Ready |
| System Logs | ✅ | ✅ | Ready |
| Settings | ✅ | ✅ | Ready |
| Charts | 🔄 | 🔄 | Placeholder |
| API Integration | ⏳ | ⏳ | Ready for Dev |

Legend: ✅ Complete | 🔄 Partial | ⏳ Not Started

---

## 📚 Documentation

- **SETUP_GUIDE.md** - Complete setup instructions
- **DELIVERABLES.md** - Project summary
- **ARCHITECTURE.md** - Technical architecture
- **Component Docs** - In component files

---

## 🎓 Learning Resources

### To Customize Colors
Edit: `src/constants/colors.ts`

### To Add New Screen
1. Create file in `src/app/(tabs)/`
2. Add Tab.Screen in `src/app/(tabs)/_layout.tsx`
3. Update navigation types in `types.ts`

### To Add New Component
1. Create file in `src/components/`
2. Export from `src/components/index.ts`
3. Import and use in screens

---

## ✅ Verification Checklist

After starting app, verify:
- [ ] Login screen appears with pre-filled email
- [ ] Can enter password
- [ ] "Masuk ke Dashboard" button works
- [ ] Dashboard shows 3 projects
- [ ] 5 tabs visible at bottom (mobile)
- [ ] Can tap between tabs
- [ ] Training monitor shows progress
- [ ] Can filter logs
- [ ] Settings page shows profile
- [ ] All text readable
- [ ] Colors match design
- [ ] No console errors

---

## 🎉 You're All Set!

The app is ready to explore. Start with:
1. Login with demo credentials
2. Browse the dashboard
3. Check out training monitor
4. Review system logs
5. Explore settings

Enjoy App V1! 🚀

---

**Last Updated**: May 17, 2026
**Version**: 1.0.0
**Ready to Use**: ✅ Yes
