function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">&copy; {currentYear} By KAKSHIL </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

