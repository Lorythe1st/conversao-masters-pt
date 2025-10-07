import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>© 2025 Rui Lory</span>
            <span>•</span>
            <a 
              href="mailto:clientes@ruilorytrafego.com" 
              className="hover:text-primary transition-colors"
            >
              clientes@ruilorytrafego.com
            </a>
            <span>•</span>
            <a 
              href="https://instagram.com/ruilory.pt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              @ruilory.pt
            </a>
          </div>
          
          <div>
            <Link 
              to="/politica-privacidade" 
              className="hover:text-primary transition-colors underline"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
