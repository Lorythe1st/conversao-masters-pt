import rui1 from "@/assets/rui-1.png";
import rui2 from "@/assets/rui-2.png";
import rui3 from "@/assets/rui-3.png";
import rui4 from "@/assets/rui-4.png";
import rui5 from "@/assets/rui-5.png";
import ruiUrban from "@/assets/rui-urban.png";
import ruiStreet from "@/assets/rui-street.png";

const GallerySection = () => {
  const images = [
    { src: rui1, alt: "Rui Lory - Sessão profissional 1" },
    { src: rui2, alt: "Rui Lory - Sessão profissional 2" },
    { src: rui3, alt: "Rui Lory - Sessão profissional 3" },
    { src: rui4, alt: "Rui Lory - Sessão profissional 4" },
    { src: rui5, alt: "Rui Lory - Sessão profissional 5" },
    { src: ruiUrban, alt: "Rui Lory - Fotografia urbana" },
    { src: ruiStreet, alt: "Rui Lory - Street photography" },
  ];

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Photoshoots que{" "}
            <span className="text-primary">Vendem a Tua Marca</span>
          </h2>
          <p className="text-xl text-gray-300">
            Conteúdo visual profissional faz toda a diferença. Vê alguns exemplos do meu trabalho.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/10">
          <p className="text-lg text-gray-300 mb-4">
            <strong className="text-white">Photoshoots digitais profissionais</strong> para o teu negócio, produtos ou marca pessoal.
          </p>
          <p className="text-gray-400">
            Imagens que contam a tua história e convertem seguidores em clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
