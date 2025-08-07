import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h3 className="font-playfair text-3xl font-bold text-[#e89ca1] mb-4">
            Nicole Megahair
          </h3>
          <p className="font-open-sans text-gray-300 mb-8 max-w-2xl mx-auto">
            Transformando vidas através da beleza e do empoderamento feminino há mais de 12 anos.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <a href="#" className="font-open-sans text-gray-300 hover:text-[#e89ca1] transition-colors duration-200">
              Termos e Condições
            </a>
            <a href="#" className="font-open-sans text-gray-300 hover:text-[#e89ca1] transition-colors duration-200">
              Política de Privacidade
            </a>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <p className="font-open-sans text-gray-400 text-sm">
              © 2020 Nicole Megahair - Todos os Direitos Reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;