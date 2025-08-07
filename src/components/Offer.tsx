import React from 'react';
import { ShoppingCart, Shield, CreditCard, AlertTriangle } from 'lucide-react';

const Offer = () => {
  const includes = [
    "Manual completo",
    "5 bônus exclusivos (valor R$197)",
    "Acesso imediato após pagamento",
    "Garantia de 7 dias",
    "Suporte especializado"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Pronto para construir a carreira dos seus sonhos?
            </h2>
            <p className="font-open-sans text-xl text-[#2C2C2C]">
              Não importa se você está apenas começando ou levando suas habilidades para o próximo nível, estamos aqui para ajudar você a ter sucesso.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#ede6d1] to-[#e89ca1] p-8 rounded-3xl shadow-2xl">
            <div className="bg-white p-8 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-3xl font-bold text-[#2C2C2C] mb-4">
                  MANUAL PROFISSIONAL DE MEGAHAIR COM FITA ADESIVA
                </h3>
                <p className="font-open-sans text-lg text-[#2C2C2C] mb-6">
                  Técnica Exclusiva Nicole Megahair + 5 Bônus
                </p>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="font-playfair text-2xl text-gray-500 line-through">De R$294,00</span>
                  <span className="font-playfair text-5xl md:text-6xl font-bold text-[#e89ca1]">R$19,90</span>
                </div>
                
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-bold text-lg mb-8 inline-block">
                  93% DE DESCONTO
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-playfair text-2xl font-bold text-[#2C2C2C] mb-6 text-center">
                  Inclui:
                </h4>
                <div className="space-y-3">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✅</span>
                      </div>
                      <span className="font-open-sans text-[#2C2C2C]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mb-8">
                <a href="https://pay.kiwify.com.br/nL1lrtY" target="_blank" rel="noopener noreferrer" className="bg-[#e89ca1] hover:bg-[#d68a90] text-white font-open-sans font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto inline-block text-center">
                  <ShoppingCart className="w-6 h-6 inline-block mr-2" />
                  QUERO ACESSAR AGORA
                </a>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#2C2C2C] font-open-sans text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>🔒 Pagamento 100% seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span>💳 Parcelamento disponível</span>
                </div>
              </div>
              
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-open-sans font-bold text-yellow-800 mb-1">
                      ⚠️ ATENÇÃO:
                    </p>
                    <p className="font-open-sans text-yellow-700">
                      Esta oferta especial pode sair do ar a qualquer momento. Garante já seu manual!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;