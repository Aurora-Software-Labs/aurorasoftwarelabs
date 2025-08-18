# Aurora Software Labs Website

A professional, modern website for Aurora Software Labs - a Ghana-based software development agency. Built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Animated**: Smooth page transitions and scroll-based animations using Framer Motion
- **Accessible**: Built with accessibility best practices
- **Performance**: Optimized for speed and Core Web Vitals
- **Type Safe**: Full TypeScript implementation

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                 # App Router pages
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── portfolio/      # Portfolio page
│   ├── careers/        # Careers page
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── Navigation.tsx  # Main navigation
│   └── Footer.tsx      # Footer component
├── data/              # Static data
│   └── index.ts       # Company info, projects, testimonials
└── lib/              # Utilities
    └── utils.ts       # Helper functions
```

## 🎨 Brand Colors

- **Primary**: `#123524` (Dark green)
- **Accent**: `#2ecc71` (Green)
- **Background**: White
- **Text**: Various shades of gray

## 📄 Pages

1. **Home** (`/`) - Hero section, services overview, featured projects, testimonials
2. **About** (`/about`) - Company story, mission/vision/values, why choose us
3. **Services** (`/services`) - Web development and software consulting details
4. **Portfolio** (`/portfolio`) - Showcase of completed projects
5. **Careers** (`/careers`) - Job opportunities and company culture
6. **Contact** (`/contact`) - Contact form, FAQ, and company information

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd aurorasoftwarelabs
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build and Deploy

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Contact Form

The contact form currently uses a mailto link as a fallback. For production, consider integrating with:

- Formspree
- Netlify Forms
- Custom API endpoint
- EmailJS

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🎯 SEO Features

- Meta titles and descriptions
- Open Graph tags
- Twitter Card support
- Structured data ready
- Sitemap support
- Robot.txt ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Aurora Software Labs.

## 📞 Support

For support, email emmanuelcobbinah707@gmail.com

## 🙏 Acknowledgments

- Built with Next.js and React
- UI components from shadcn/ui
- Icons from Lucide
- Animations by Framer Motion
- Styled with Tailwind CSS
