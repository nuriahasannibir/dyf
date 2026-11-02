import './globals.css'

export const metadata = {
  title: 'Dhanbari Youth Forum',
  description: 'Make Friends • Share Feelings • Belong Together',
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F3E8FF] font-sans antialiased text-gray-800">
        {children}
      </body>
    </html>
  )
}
