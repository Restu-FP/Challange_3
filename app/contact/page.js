import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-20 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Kontak
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah
        ini.
      </p>
      <div className="space-y-4">
        <ContactItem
          href="mailto:restufajarpratama69@gmail.com"
          icon={<Mail className="w-6 h-6 text-blue-600" />}
          text="restufajarpratama69@gmail.com"
        />
        <ContactItem
          href="https://linkedin.com/in/restufajar"
          icon={<Linkedin className="w-6 h-6 text-blue-600" />}
          text="LinkedIn"
        />
        <ContactItem
          href="https://github.com/Restu-FP"
          icon={<Github className="w-6 h-6 text-blue-600" />}
          text="GitHub"
        />
        <ContactItem
          href="https://facebook.com/your.username"
          icon={<Facebook className="w-6 h-6 text-blue-600" />}
          text="Facebook"
        />
        <ContactItem
          href="https://instagram.com/your.username"
          icon={<Instagram className="w-6 h-6 text-blue-600" />}
          text="Instagram"
        />
      </div>
    </div>
  );
}

function ContactItem({ href, icon, text }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 p-4 border-l-4 border-blue-600 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50"
    >
      {icon}
      <span className="text-lg font-medium text-gray-800">{text}</span>
    </a>
  );
}
