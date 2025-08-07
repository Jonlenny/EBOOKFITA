import React from 'react';
import { Shield, CheckCircle, Clock, RefreshCw } from 'lucide-react';

const Guarantee = () => {
  const benefits = [
    { icon: Clock, text: "7 dias para testar todo o conteúdo" },
    { icon: RefreshCw, text: "100% do seu dinheiro de volta" },
    { icon: CheckCircle, text: "Sem perguntas, sem burocracia" }
  ];

  return (
    <section className="py-20 bg-[#ede6d1]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-[#e89ca1] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
              Garantia Total de 7 Dias
            </h2>
            <p className="font-open-sans text-xl text-[#2C2C2C] font-semibold">
              🛡️ Sua Satisfação é Nossa Prioridade
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <p className="font-open-sans text-lg text-[#2C2C2C] leading-relaxed mb-8 text-center">
              Estamos tão confiantes na qualidade do nosso manual que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não estiver completamente satisfeita, devolvemos 100% do seu investimento.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#e89ca1] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-open-sans text-[#2C2C2C] font-semibold">{benefit.text}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-[#ede6d1] p-6 rounded-xl text-center">
              <p className="font-playfair text-2xl font-bold text-[#2C2C2C]">
                Você não tem nada a perder e uma nova carreira a ganhar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;