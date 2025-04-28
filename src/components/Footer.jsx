import Link from 'next/link'  // Import Link component from Next.js

export default function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 p-6 bg-black bg-opacity-80 flex flex-col items-center text-center">
      <p className="text-sm sm:text-base text-gray-100 opacity-90 mb-4">
        © 2025 SmartAcademy. Barcha huquqlar himoyalangan.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4 justify-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-blue-500 transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.9 3.6 9 8.4 9h1.6v-6.3h-2V12h2v-1.8c0-2.1 1.3-3.2 3.2-3.2.9 0 1.7.1 1.9.1v2h-1.3c-1 0-1.3.5-1.3 1.2V12h2.5l-.4 2.7h-2.1v6.3h2c4.8 0 8.4-4.1 8.4-9z"
            />
          </svg>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-blue-400 transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 3c-1 0-2 .3-2.9.9C19.1 3.4 18 3 16.9 3c-2.2 0-4 1.8-4 4 0 .3 0 .7.1 1-3.3-.2-6.2-1.7-8.1-4.2-.3.5-.5 1.1-.5 1.7 0 1.2.6 2.2 1.5 2.8-.6 0-1.2-.2-1.7-.5v.1c0 1.7 1.2 3.1 2.8 3.4-.3.1-.7.1-1 .1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.8-2.4 1.2-3.7 1.2-.2 0-.5 0-.7 0 1.3.8 2.9 1.3 4.5 1.3 5.3 0 8.3-4.4 8.3-8.2 0-.1 0-.2 0-.2 1-.7 1.9-1.5 2.7-2.4z"
            />
          </svg>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-pink-400 transition-all duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.2c3.9 0 4.3.1 5.8.1 1.4 0 2.7.5 3.5 1.3 1.3 1.3 1.3 3.2 1.3 5.3 0 1.5 0 2.5-.1 3.9-.1 2.3-.4 3.9-1.3 5.1-1 1.2-2.3 1.8-3.8 1.8-1.5 0-2.5 0-3.8-.1-2.5-.2-4.2-.7-5.6-2.2-1.2-1.3-1.9-3-2.1-4.7-.1-.8-.2-1.6-.2-2.5 0-1.7.1-2.8.2-4.2.2-1.6.9-3.1 2.1-4.2 1.4-1.3 3.1-2.1 4.9-2.1zm0 2.8c-1.4 0-2.6.5-3.6 1.5-1.2 1.2-1.8 2.5-1.8 4.1 0 1.4.6 2.8 1.8 4 1 1 2.2 1.5 3.6 1.5 1.4 0 2.6-.5 3.6-1.5 1.2-1.2 1.8-2.6 1.8-4 0-1.6-.6-3-1.8-4.1-1.1-1-2.5-1.5-3.6-1.5zm6.7 2.4c.5 0 .9.2 1.2.5.3.3.5.7.5 1.1s-.2.9-.5 1.2c-.3.3-.7.5-1.2.5-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2s.2-.8.5-1.1c.3-.3.7-.5 1.2-.5z"
            />
          </svg>
        </a>
      </div>

      {/* Privacy Policy and Terms of Service */}
      <div className="text-gray-100 text-sm sm:text-base opacity-90 mb-4">
        <Link href="/privacy-policy" className="hover:text-blue-500 mx-2">
          Privacy Policy
        </Link>
        |
        <Link href="/terms-of-service" className="hover:text-blue-500 mx-2">
          Terms of Service
        </Link>
      </div>
    </div>
  )
}
