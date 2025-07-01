import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-200 dark:bg-gray-900 text-center py-6">
  <p className="text-gray-800 dark:text-white text-sm">
    © {new Date().getFullYear()} Hamza Sajjad. All rights reserved. | Built with ❤️ using React & Tailwind CSS
  </p>
</footer>

  )
}

export default Footer