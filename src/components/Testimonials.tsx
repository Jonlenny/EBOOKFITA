import React from 'react';
import { Star, Award, Heart, Shield, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Consegui aplicar a técnica no primeiro dia! Já faturei R$3.000 no primeiro mês. O manual é muito completo e didático.",
      author: "Joanita Santos. – SP"
    },
    {
      text: "O material é incrível! Muito didático e completo. Recomendo para todas as profissionais que querem se destacar no mercado.",
      author: "Priscila Cavalcanti. – SP"
    },
    {
      text: "Transformou meu salão! Agora ofereço um serviço premium que meus clientes adoram. Valeu cada centavo do investimento.",
      author: "Beatriz Almeida. – SP"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Empoderamento",
      description: "Criamos um espaço onde você pode assumir o controle de sua carreira e ter sucesso."
    },
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Garantimos que você se sinta confortável, valorizada e respeitada desde o primeiro dia."
    },
    {
      icon: Users,
      title: "Líderes na área",
      description: "Com anos de experiência, ajudamos você a dominar novas técnicas e crescer profissionalmente."
    },
    {
      icon: Shield,
      title: "Confiável",
      description: "Nossas avaliações cinco estrelas e alunas satisfeitas dizem tudo sobre nossa qualidade."
    }
  ];

  return (
    <section className="py-20 bg-[#ede6d1]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            O que dizem nossas alunas
          </h2>
          <p className="font-open-sans text-xl text-[#2C2C2C] max-w-4xl mx-auto">
            Temos orgulho de oferecer o melhor treinamento em extensão capilar. Leia algumas avaliações sobre a qualidade e impacto do nosso método.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="font-open-sans text-[#2C2C2C] italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-open-sans font-bold text-[#e89ca1]">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <h3 className="font-playfair text-3xl font-bold text-[#2C2C2C] mb-8">
            Nossa missão e valores:
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#e89ca1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-[#2C2C2C] mb-3">
                {value.title}
              </h4>
              <p className="font-open-sans text-[#2C2C2C] text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;