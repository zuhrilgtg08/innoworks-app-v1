# App V1 - Platform Pelatihan Model Deteksi Objek

Platform lengkap untuk pelatihan, monitoring, dan deployment model machine learning object detection dengan interface mobile dan web yang responsive.

## 📱 Screenshots dari PDF

Aplikasi mencakup fitur-fitur berikut:
- **Training Monitor**: Real-time monitoring progress training dengan graph dan statistik
- **Live Detection**: Deteksi objek real-time dari kamera
- **Project Management**: Kelola berbagai project deteksi dengan categories berbeda
- **System Logs**: Track semua aktivitas sistem dan training
- **Dashboard**: Overview lengkap dengan statistik dan project list

## 🎨 Desain & Features

### Color Scheme
- **Primary**: Purple/Blue (#5B6FFF)
- **Background**: Dark Navy (#0F1419)
- **Cards**: Dark Blue (#1A1F2E)
- **Text**: White, Gray, Light Gray
- **Status**: Success (Green), Warning (Yellow), Error (Red), Info (Blue)

### Screens

#### Mobile (React Native + Expo)
1. **Login/Register** - Authentication screens dengan form validation
2. **Beranda (Dashboard)** - Project list dengan kategori (Object Detection, Segmentation, Classification)
3. **Live Cam** - Real-time camera detection interface
4. **Training Monitor** - Training progress, charts, and control buttons
5. **System Logs** - Filterable activity logs dengan berbagai tipe (INFO, TRAIN, WARN, ERROR)
6. **Pengaturan** - User profile dan app settings

#### Web (HTML/CSS)
1. **Sidebar Navigation** - Navigasi dengan icon dan label
2. **Dashboard** - Project grid dan statistik
3. **Training Monitor** - Full-featured training dashboard dengan charts
4. **Live Detection** - Camera streaming interface
5. **System Logs** - Table view dengan filtering
6. **Settings** - User profile dan preference management

## 📁 Project Structure

```
innoworks-app-v1/
├── src/
│   ├── app/
│   │   ├── index.tsx               # Entry point (redirects to login)
│   │   ├── _layout.tsx             # Root layout dengan status bar
│   │   ├── auth/
│   │   │   ├── login.tsx           # Login screen
│   │   │   └── register.tsx        # Registration screen
│   │   └── (tabs)/
│   │       ├── _layout.tsx         # Bottom tab navigator
│   │       ├── beranda.tsx         # Dashboard/Projects
│   │       ├── livecam.tsx         # Live detection
│   │       ├── training.tsx        # Training monitor
│   │       ├── logsistem.tsx       # System logs
│   │       ├── keluar.tsx          # Settings
│   │       └── types.ts
│   ├── components/
│   │   ├── Cards.tsx               # Card components
│   │   ├── Button.tsx              # Button components
│   │   ├── Chart.tsx               # Chart & progress components
│   │   └── index.ts
│   └── constants/
│       └── colors.ts               # Theme colors & spacing
├── web/
│   ├── index.html                  # Dashboard home
│   ├── training.html               # Training monitor
│   ├── live-cam.html               # Live detection
│   ├── logs.html                   # System logs
│   └── settings.html               # Settings & profile
├── app.json                        # Expo config
├── package.json                    # Dependencies
└── tsconfig.json                   # TypeScript config
```

## 🚀 Getting Started

### Mobile (React Native)

#### Prerequisites
- Node.js 18+
- npm atau yarn
- Expo CLI: `npm install -g expo-cli`
- Android Studio (untuk Android) atau Xcode (untuk iOS)

#### Installation
```bash
# 1. Navigate to project directory
cd innoworks-app-v1

# 2. Install dependencies
npm install

# 3. Start Expo development server
npm start

# 4. Run on Android
npm run android

# 5. Run on iOS
npm run ios

# 6. Run on Web
npm run web
```

#### Available Scripts
- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint

### Web

#### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)

#### Setup
```bash
# 1. Navigate to web directory
cd web

# 2. Open in browser
# Option 1: Double-click index.html
# Option 2: Use live server (if available)
# Option 3: Python simple server
python -m http.server 8000

# 3. Open in browser
# http://localhost:8000
```

#### Web Pages
- `index.html` - Project dashboard
- `training.html` - Training monitor
- `live-cam.html` - Live detection
- `logs.html` - System logs
- `settings.html` - Settings

## 🔐 Authentication

### Login
- **Email**: admin@appv1.ai
- **Password**: (any password for demo)

### Demo Flow
1. App starts at login screen
2. Enter credentials and click "Masuk ke Dashboard"
3. Redirected to mobile app dashboard or web dashboard
4. Navigate between different features using bottom tabs (mobile) or sidebar (web)

## 📊 Components

### Mobile Components

#### Cards
- `Card` - Generic container card
- `HeaderCard` - Header with title and action
- `StatCard` - Statistics display card
- `ProjectCard` - Project listing card
- `ChartHeader` - Chart title with metric
- `LogItem` - Log entry display

#### Buttons
- `Button` - Primary, Secondary, Outline, Ghost variants
- `Badge` - Status badge with variants
- `TabButton` - Bottom tab button

#### Charts
- `Chart` - Line/Bar chart placeholder
- `ProgressBar` - Progress bar with label
- `StatsRow` - Horizontal stats row
- `Divider` - Horizontal/Vertical divider

### Customization

#### Theme Colors
Edit `src/constants/colors.ts`:
```typescript
export const Colors = {
  primary: '#5B6FFF',
  secondary: '#FF6B6B',
  bg: '#0F1419',
  // ... more colors
};
```

#### Spacing & Font Sizes
```typescript
export const Spacing = {
  xs: 4, sm: 8, md: 12, lg: 16, xl: 20, '2xl': 24, '3xl': 32
};

export const FontSizes = {
  xs: 12, sm: 14, base: 16, lg: 18, xl: 20, '2xl': 24, '3xl': 28, '4xl': 32
};
```

## 🔗 Navigation Structure

### Mobile (Tab Navigation)
```
Root Layout
├── auth/login
├── auth/register
└── (tabs)/
    ├── beranda (🏠)
    ├── livecam (📷)
    ├── training (⚡)
    ├── logsistem (📋)
    └── keluar (🚪)
```

### Web (Sidebar Navigation)
```
Main Layout
├── index.html (🏠 Beranda)
├── training.html (⚡ Training)
├── live-cam.html (📷 Live Cam)
├── logs.html (📋 Log Sistem)
└── settings.html (⚙️ Pengaturan)
```

## 🎯 Features Implementation Status

### ✅ Completed
- Bottom tab navigation (mobile)
- Sidebar navigation (web)
- All screen layouts and UI components
- Login/Register forms
- Responsive design
- Color theme and styling
- Icon integration

### ⚠️ In Progress / To-Do
- Chart integration (react-native-chart-kit or similar)
- Real camera integration
- Backend API connection
- Authentication with JWT tokens
- Data persistence (AsyncStorage)
- File upload functionality
- Real-time monitoring
- WebSocket integration for live updates

## 📱 Mobile App Features

### Authentication
- Login with email/password
- Registration with validation
- "Remember me" checkbox
- Forgot password link
- Social login placeholders

### Dashboard
- Project listing with metadata
- Category badges
- Last updated timestamps
- Create new project button

### Live Detection
- Camera placeholder
- Detection statistics (Objects, Confidence, FPS, Response Time)
- Start streaming button

### Training Monitor
- Training status with progress bar
- Training controls (Pause, Stop, Export)
- Best metrics display
- Multi-chart visualization
- Epoch information

### System Logs
- Time-based log entries
- Type filtering (INFO, TRAIN, WARN, ERROR)
- Expandable log details
- Export functionality

### Settings
- User profile display
- Edit profile option
- Password management
- Notification settings
- Dark mode toggle
- App information
- Logout button

## 🌐 Web Dashboard Features

### Responsive Design
- Collapsible sidebar on mobile
- Grid-based layout
- Adaptive card layout
- Touch-friendly buttons and inputs

### Interactive Elements
- Hover effects on cards
- Active navigation indicator
- Filter buttons
- Modal dialogs (ready for implementation)

### Dashboard Stats
- Real-time metric updates
- Progress indicators
- Status badges
- Color-coded elements

## 🔧 Development Tips

### Adding New Screens
1. Create new file in `src/app/(tabs)/`
2. Import components and colors
3. Export default screen component
4. Add to `_layout.tsx` Tab.Screen

### Customizing Colors
1. Edit `src/constants/colors.ts`
2. Update color values
3. Color changes apply app-wide

### Adding Charts
1. Install chart library: `npm install react-native-chart-kit`
2. Create chart component wrapper
3. Import and use in screens
4. Customize styling

### API Integration
1. Create `src/services/api.ts`
2. Setup axios or fetch
3. Define API endpoints
4. Update screen components to use API calls

## 📚 Dependencies

### Main
- expo ~55.0.24
- react 19.2.0
- react-native 0.83.6
- typescript ~5.9.2

### Navigation
- expo-router ~55.0.14
- @react-navigation/native ~7.1.33
- @react-navigation/bottom-tabs ^7.15.5

### UI & Styling
- expo-constants ~55.0.16
- expo-device ~55.0.17
- expo-font ~55.0.7

## 📝 License

This project is proprietary and confidential.

## 👨‍💻 Development Notes

- All files use TypeScript for type safety
- Components follow React best practices
- Styling uses React Native StyleSheet
- Web version uses vanilla HTML/CSS
- Consistent color scheme across platforms
- Modular component architecture

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Keep components reusable and modular
4. Update constants for any new colors/spacing
5. Test on both mobile and web

## ❓ FAQ

**Q: How to change the app theme?**
A: Edit colors in `src/constants/colors.ts`

**Q: How to add a new screen?**
A: Create new file in `src/app/(tabs)/` and add Tab.Screen in `_layout.tsx`

**Q: How to integrate real backend?**
A: Create API service in `src/services/` and use in screens

**Q: How to add charts?**
A: Install `react-native-chart-kit` and create chart wrapper component

**Q: Is this production-ready?**
A: The UI is complete. Backend integration needed for production.

---

**Last Updated**: May 17, 2026
**Version**: 1.0.0
**Built with**: Expo React Native + TypeScript + HTML/CSS Web
