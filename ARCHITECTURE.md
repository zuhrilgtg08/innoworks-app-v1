# 🏗️ ARCHITECTURE & COMPONENT STRUCTURE

## Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    INNOWORKS APP V1                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            ROOT LAYOUT (_layout.tsx)                 │  │
│  │  - Status Bar Configuration                         │  │
│  │  - Stack Navigation Setup                           │  │
│  └──────────────────┬───────────────────────────────────┘  │
│                     │                                       │
│     ┌───────────────┼───────────────┐                       │
│     │               │               │                       │
│  ┌──▼───────┐  ┌────▼─────┐  ┌─────▼──────┐                │
│  │   AUTH   │  │  (TABS)   │  │  OTHER     │                │
│  │ STACK    │  │ NAVIGATOR │  │  SCREENS   │                │
│  └──────────┘  └───────────┘  └────────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Screen Hierarchy

```
Root (_layout.tsx)
│
├── Auth Stack
│   ├── login.tsx (LoginScreen)
│   └── register.tsx (RegisterScreen)
│
└── (tabs) - Tab Navigator (_layout.tsx)
    ├── beranda.tsx (Dashboard - 🏠)
    ├── livecam.tsx (Live Detection - 📷)
    ├── training.tsx (Training Monitor - ⚡)
    ├── logsistem.tsx (System Logs - 📋)
    └── keluar.tsx (Settings - 🚪)
```

## Component Dependency Tree

```
src/components/
├── Cards.tsx
│   ├── Card (Generic container)
│   ├── HeaderCard (Title with action)
│   ├── StatCard (Statistics display)
│   ├── ProjectCard (Project listing)
│   ├── ChartHeader (Chart title)
│   └── LogItem (Log entry)
│
├── Button.tsx
│   ├── Button (Multi-variant)
│   ├── TextInput (Form input)
│   ├── TabButton (Tab selector)
│   └── Badge (Status indicator)
│
└── Chart.tsx
    ├── Chart (Line/Bar placeholder)
    ├── ProgressBar (Progress indicator)
    ├── StatsRow (Horizontal stats)
    └── Divider (Visual separator)
```

## Screen Components Usage

```
beranda.tsx (Dashboard)
├── SafeAreaView
├── ScrollView
├── HeaderCard
│   └── title: "Project List"
├── Button (Create Project)
└── ProjectCard[] (Project list)
    ├── category badge
    ├── title
    ├── image count
    └── last updated

training.tsx (Training Monitor)
├── SafeAreaView
├── ScrollView
├── HeaderCard
│   └── title: "Training Monitor"
├── Button[] (Pause, Stop, Export)
├── Card (Status)
│   └── StatusBadge
│   └── ProgressBar
├── StatCard[] (Metrics)
└── Chart[] (Visualizations)
    ├── MAP Chart
    ├── Box Loss Chart
    ├── Class Loss Chart
    └── Object Loss Chart

livecam.tsx (Live Detection)
├── SafeAreaView
├── ScrollView
├── HeaderCard
├── Card (Camera)
│   └── Camera Placeholder
│   └── Button (Start Streaming)
└── Stats Grid
    ├── Objects Detected
    ├── Confidence
    ├── FPS
    └── Response Time

logsistem.tsx (System Logs)
├── SafeAreaView
├── ScrollView
├── HeaderCard
├── Button[] (Filter)
├── Card (Log Table)
    └── LogItem[]
        ├── time
        ├── type (with color)
        └── message
└── Button (Export)

keluar.tsx (Settings)
├── SafeAreaView
├── ScrollView
├── HeaderCard
├── Card (User Profile)
│   ├── Avatar
│   ├── Name
│   └── Email
├── Card (Settings Menu)
│   └── SettingItem[]
├── Card (About Menu)
│   └── SettingItem[]
└── Button (Logout)

login.tsx (Authentication)
├── SafeAreaView
├── ScrollView
├── Header
│   ├── Logo
│   ├── App Name
│   └── Subtitle
├── Tabs (Login/Register)
├── Form
│   ├── Email Input
│   ├── Password Input (with toggle)
│   ├── Checkbox
│   └── Forgot Password Link
├── Button (Login)
├── Social Login (Placeholders)
└── Terms Notice

register.tsx (Authentication)
├── SafeAreaView
├── ScrollView
├── Header
├── Tabs
├── Form
│   ├── Full Name Input
│   ├── Email Input
│   ├── Password Input
│   ├── Confirm Password Input
│   └── Agreement Checkbox
├── Button (Register)
└── Login Link
```

## Constants & Theme

```
src/constants/
└── colors.ts
    ├── Colors object (12+ colors)
    ├── FontSizes object (8 sizes)
    └── Spacing object (7 sizes)

Used by all components for:
├── Backgrounds
├── Text colors
├── Border colors
├── Status colors
├── Typography sizing
└── Padding/Margin
```

## Navigation Flow

### Authentication Flow
```
index.tsx (Entry)
    ↓
Redirects to
    ↓
login.tsx
    ├─→ Click Register
    │   ↓
    │   register.tsx
    │   ├─→ Click Login
    │   │   ↓
    │   │   [loops back to login]
    │   └─→ Submit Form
    │       ↓
    │       (tabs)/beranda
    │
    └─→ Submit Form
        ↓
        (tabs)/beranda
```

### Tab Navigation (Post-Login)
```
Bottom Tab Bar
├─→ Beranda (beranda.tsx)
│   └─ Projects Dashboard
│
├─→ Live Cam (livecam.tsx)
│   └─ Detection Interface
│
├─→ Training (training.tsx)
│   └─ Training Monitor
│
├─→ Logs (logsistem.tsx)
│   └─ System Logs
│
└─→ Settings (keluar.tsx)
    └─ User Profile & Settings
```

## Styling & Theme Application

### Color Flow
```
colors.ts (Defined)
    ↓
    Used in StyleSheets
    ├── Card backgrounds → Colors.bgCard
    ├── Text colors → Colors.textPrimary/Secondary
    ├── Buttons → Colors.primary/secondary
    ├── Status badges → Colors.success/warning/error
    └── Borders → Colors.border/divider
```

### Responsive Design

#### Mobile (Default)
- Full-screen components
- Safe area insets
- Stack navigation
- Bottom tabs

#### Web (HTML/CSS)
- Sidebar navigation
- Grid-based layout
- Flexbox components
- Media queries for responsive

## Data Flow

```
User Input
    ↓
Screen Component
    ├─ Updates local state
    ├─ Validates input
    └─ Prepares data
    ↓
API Call (Ready for implementation)
    ├─ POST/GET/PUT/DELETE
    └─ Handle response
    ↓
Update UI
    ├─ Component re-renders
    ├─ State updates
    └─ Visual feedback
```

## State Management (Ready for Enhancement)

Current: Local component state via `useState`

Recommended: Add Redux/Context
```
src/
├── context/
│   ├── AuthContext.tsx
│   ├── ProjectContext.tsx
│   └── TrainingContext.tsx
└── reducers/
    ├── authReducer.ts
    ├── projectReducer.ts
    └── trainingReducer.ts
```

## Performance Optimization Points

```
✅ Already Optimized
├─ Component memoization ready
├─ List virtualization ready (FlatList)
├─ Image optimization ready
├─ Code splitting via routes
└─ Tree-shaking with ES6 modules

⚠️ Recommended
├─ Add React.memo() for expensive components
├─ Implement useMemo() for derived state
├─ Use useCallback() for event handlers
├─ Lazy load heavy components
└─ Optimize network requests
```

## Testing Structure (Ready for Implementation)

```
__tests__/
├── components/
│   ├── Cards.test.tsx
│   ├── Button.test.tsx
│   └── Chart.test.tsx
├── screens/
│   ├── beranda.test.tsx
│   ├── login.test.tsx
│   └── training.test.tsx
└── utils/
    └── colors.test.ts
```

## Build & Deploy

```
Development
├─ npm start (Expo dev server)
├─ npm run android (Android emulator)
├─ npm run ios (iOS simulator)
└─ npm run web (Web browser)

Staging
├─ expo build:android
├─ expo build:ios
└─ eas build

Production
├─ eas submit (App Store/Play Store)
├─ Generate APK/IPA
└─ Deploy web to hosting
```

## File Size Reference

```
Components
├── Cards.tsx ≈ 250 lines
├── Button.tsx ≈ 200 lines
└── Chart.tsx ≈ 180 lines

Screens
├── beranda.tsx ≈ 70 lines
├── training.tsx ≈ 180 lines
├── livecam.tsx ≈ 120 lines
├── logsistem.tsx ≈ 150 lines
├── keluar.tsx ≈ 160 lines
├── login.tsx ≈ 280 lines
└── register.tsx ≈ 280 lines

Constants
└── colors.ts ≈ 50 lines

Total App: ~2000 lines (TypeScript)
Web: ~1500 lines (HTML/CSS)
Total: ~3500 lines
```

## Documentation Structure

```
Documentation/
├── SETUP_GUIDE.md (Installation & Usage)
├── DELIVERABLES.md (Project Summary)
├── ARCHITECTURE.md (This file)
└── Component docs (in component files)
```

## Integration Points (Ready for Backend)

```
API Service (To be created)
├── Auth Service
│   ├── login()
│   ├── register()
│   └── logout()
├── Project Service
│   ├── getProjects()
│   ├── createProject()
│   └── deleteProject()
├── Training Service
│   ├── startTraining()
│   ├── pauseTraining()
│   ├── stopTraining()
│   └── getProgress()
└── Logs Service
    ├── getLogs()
    ├── filterLogs()
    └── exportLogs()
```

---

**Document Version**: 1.0
**Last Updated**: May 17, 2026
**Architecture Status**: ✅ Complete & Documented
