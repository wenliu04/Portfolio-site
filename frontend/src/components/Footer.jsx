export default function Footer() {
  return (
    
    <footer className="text-center py-6 text-gray-500 border-t mt-10">
      {/* 社交链接 */}
        <div className="flex justify-center gap-6 text-gray-600 mb-4">
          <a href="https://github.com/wenliu04" target="_blank" aria-label="GitHub">
            <i className="fab fa-github text-2xl hover:text-black"></i>
          </a>
          <a href="https://www.linkedin.com/in/wen-sam-liu-91181032/" target="_blank" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-2xl hover:text-blue-700"></i>
          </a>
          <a href="mailto:wenliu0525@gmail.com" aria-label="Email">
            <i className="fas fa-envelope text-2xl hover:text-red-500"></i>
          </a>
        </div>
      © {new Date().getFullYear()} Wen Liu · All Rights Reserved
    </footer>
  );
}
