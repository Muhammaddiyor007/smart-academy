import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'SmartAcademy',
  description: 'Learn smart with SmartAcademy!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
