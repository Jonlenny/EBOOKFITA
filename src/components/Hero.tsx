import React from 'react';
import { ShoppingCart, Shield, CreditCard, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#ede6d1] to-[#f5f0e3] min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-tight">
              Manual Profissional de<br />
              <span className="text-[#e89ca1]">Megahair com Fita Adesiva</span>
            </h1>
            
            <p className="font-open-sans text-lg md:text-xl text-[#2C2C2C] leading-relaxed">
              Domine a técnica exclusiva da Nicole Megahair e transforme sua carreira com o método que gera até R$12.000 por mês
            </p>
            
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <span className="font-playfair text-5xl md:text-6xl font-bold text-[#e89ca1]">R$ 19,90</span>
              </div>
              
              <a href="https://pay.kiwify.com.br/nL1lrtY" target="_blank" rel="noopener noreferrer" className="bg-[#e89ca1] hover:bg-[#d68a90] text-white font-open-sans font-bold py-4 px-8 md:px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto inline-block text-center">
                🚀 QUERO MEU MANUAL AGORA
              </a>
              
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 text-[#2C2C2C] font-open-sans text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>✅ Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span>💳 Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gray-600" />
                  <span>🔒 Compra 100% segura</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://i.ibb.co/nqPy5yzP/Foto-Front-02-1.png"
                  alt="Manual de Megahair"
                  className="w-64 h-80 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#e89ca1] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                93%<br />OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;