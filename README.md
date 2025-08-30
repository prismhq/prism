# 🔐 Prism Design System & Password Manager

A modern, responsive design system built with Prism components and design tokens, featuring a fully functional password manager application.

## ✨ Features

### 🎨 Design System

- **Comprehensive Component Library**: Built with Prism design tokens and components
- **Consistent Design Language**: Unified color palette, typography, and spacing system
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Dark Mode Support**: Automatic theme switching with CSS custom properties
- **Accessibility**: WCAG compliant components with proper ARIA labels

### 🔐 Password Manager

- **Secure Storage**: Local browser storage with encrypted data handling
- **Password Generation**: Customizable password generator with strength indicators
- **Organization**: Category-based organization and favorite marking
- **Search & Filter**: Advanced search with category and favorite filters
- **Copy to Clipboard**: One-click copying of usernames and passwords
- **Responsive UI**: Works seamlessly on desktop, tablet, and mobile

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd prism
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                 # Design system components
│   │   ├── button.tsx     # Button component with variants
│   │   ├── card.tsx       # Card layout components
│   │   ├── input.tsx      # Form input components
│   │   ├── label.tsx      # Form label components
│   │   ├── badge.tsx      # Status indicator components
│   │   ├── separator.tsx  # Visual divider components
│   │   └── index.ts       # Component exports
│   ├── PasswordManager.tsx    # Main password manager app
│   ├── PasswordEntryForm.tsx  # Password entry/editing form
│   ├── PasswordList.tsx       # Password list with search/filter
│   └── DesignSystemShowcase.tsx # Design system documentation
├── lib/
│   ├── utils.ts           # Utility functions
│   └── password-utils.ts  # Password management utilities
├── types/
│   └── password.ts        # TypeScript interfaces
├── App.tsx                # Main application component
└── index.css              # Global styles and design tokens
```

## 🎨 Design System Components

### Core Components

- **Button**: Multiple variants (default, secondary, destructive, outline, ghost, link) and sizes (sm, default, lg, icon)
- **Card**: Flexible container with header, content, and footer sections
- **Input**: Form inputs with validation states and proper labeling
- **Label**: Accessible form labels with proper associations
- **Badge**: Status indicators with multiple variants
- **Separator**: Visual dividers for content organization

### Design Tokens

- **Colors**: Semantic color system with primary, secondary, accent, and destructive variants
- **Typography**: Consistent font scale with proper hierarchy
- **Spacing**: 8px grid system for consistent layouts
- **Border Radius**: Unified corner radius system
- **Shadows**: Elevation system for depth and hierarchy

## 🔐 Password Manager Features

### Core Functionality

- **Add Passwords**: Comprehensive form with title, username, password, URL, notes, and category
- **Edit Passwords**: Modify existing entries with full form validation
- **Delete Passwords**: Secure deletion with confirmation dialogs
- **Favorite System**: Mark important passwords for quick access
- **Category Organization**: Group passwords by type or purpose

### Password Generation

- **Customizable Length**: 8-64 character passwords
- **Character Sets**: Uppercase, lowercase, numbers, and symbols
- **Strength Indicator**: Visual feedback on password security
- **One-Click Generation**: Instant secure password creation

### Search & Organization

- **Real-time Search**: Search across titles, usernames, and categories
- **Category Filtering**: Filter by specific password categories
- **Favorite Filtering**: Show only favorite passwords
- **Clear Filters**: Reset all search and filter criteria

## 🎯 Usage Examples

### Adding a New Password

1. Click the "Add New Password" button
2. Fill in the required fields (title, username, password)
3. Optionally add URL, notes, and category
4. Use the password generator for secure passwords
5. Click "Save Password" to store the entry

### Managing Passwords

1. Use the search bar to find specific passwords
2. Click category buttons to filter by type
3. Use the favorites filter to see important passwords
4. Click the copy buttons to copy usernames or passwords
5. Use edit/delete buttons for entry management

### Exploring the Design System

1. Navigate to the "Design System" tab
2. Explore component variants and usage examples
3. View color palettes and typography scales
4. Understand spacing and responsive design principles

## 🛠️ Technical Implementation

### Technology Stack

- **React 19**: Latest React with hooks and modern patterns
- **TypeScript**: Full type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Radix UI**: Accessible component primitives

### Architecture Patterns

- **Component Composition**: Reusable UI components with consistent APIs
- **Custom Hooks**: Business logic separation from UI components
- **Type Safety**: Comprehensive TypeScript interfaces and types
- **Responsive Design**: Mobile-first CSS with breakpoint-based layouts
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### State Management

- **Local Storage**: Persistent data storage in the browser
- **React Hooks**: useState and useEffect for component state
- **Event Handlers**: Proper event handling with TypeScript

## 🎨 Customization

### Design Tokens

Modify the design system by updating CSS custom properties in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  --accent: 210 40% 96%;
  --destructive: 0 84.2% 60.2%;
  --radius: 0.5rem;
}
```

### Component Variants

Add new component variants by extending the variant definitions:

```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      custom: "custom-styles",
      // ... existing variants
    },
  },
});
```

### Styling

Customize component appearance using Tailwind CSS classes and CSS custom properties.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel/Netlify

The app can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Prism**: For the excellent design system components and tokens
- **Radix UI**: For accessible component primitives
- **Tailwind CSS**: For the utility-first CSS framework
- **React Team**: For the amazing React framework

## 📞 Support

For questions or support, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using Prism components and modern web technologies**
