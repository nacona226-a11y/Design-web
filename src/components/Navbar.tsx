import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tighter"
        >
          CHRISTIN <span className="text-blue-600">TAO</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["首页", "经验", "联系"].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
          <button className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-slate-800">
            简历下载
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white p-6 shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-6">
            {["首页", "经验", "联系"].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-lg font-medium text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
