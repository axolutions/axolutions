export const Footer = () => {
  return (
    <footer id="footer" className="py-8 border-t border-white-600">
      <div className="container mx-auto text-center">
        {/* Brand Name */}
        <a href="/" className="font-bold text-xl mb-4 inline-block">
          Axolutions
        </a>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/axolutions"
            className="opacity-60 hover:opacity-100"
            aria-label="Github"
          >
            Github
          </a>
          <a
            href="https://twitter.com/axolutions"
            className="opacity-60 hover:opacity-100"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/axolutions"
            className="opacity-60 hover:opacity-100"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:"
            className="opacity-60 hover:opacity-100"
            aria-label="WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
