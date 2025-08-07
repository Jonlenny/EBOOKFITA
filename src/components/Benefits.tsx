import React from 'react';
import { CheckCircle, Star, TrendingUp, Gift } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    "Técnica exclusiva Nicole Megahair com 12 anos de experiência",
    "Aplicação profissional em apenas 30-40 minutos",
    "Preparação correta do cabelo e seleção de materiais",
    "Cuidados e manutenção para resultados duradouros",
    "Contraindicações e como evitar erros comuns",
    "Precificação estratégica para maximizar lucros",
    "Marketing para extensionistas iniciantes",
    "Tendências e oportunidades para 2025"
  ];

  const bonuses = [
    "Checklist de Aplicação Profissional",
    "Tabela de Precificação Atualizada",
    "Protocolo de Emergência",
    "Lista de Fornecedores Recomendados",
    "Guia de Fotografia Profissional"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            Ganhe mais fazendo o que você ama
          </h2>
          
          <div className="bg-[#e89ca1] text-white p-8 rounded-2xl max-w-4xl mx-auto mb-12">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <p className="font-open-sans text-xl md:text-2xl font-bold">
              Cada cliente pode gerar desde R$1.500 de faturamento, o que representa mais de R$12.000 por mês com apenas dois clientes por semana.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-3xl font-bold text-[#2C2C2C] mb-8">
              O que você vai aprender:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="font-open-sans text-[#2C2C2C]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-[#ede6d1] p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-8 h-8 text-[#e89ca1]" />
                <h3 className="font-playfair text-2xl font-bold text-[#2C2C2C]">
                  Bônus Exclusivos
                </h3>
                <span className="bg-[#e89ca1] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Valor: R$197
                </span>
              </div>
              <div className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="font-open-sans text-[#2C2C2C]">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="https://pay.kiwify.com.br/nL1lrtY" target="_blank" rel="noopener noreferrer" className="bg-[#e89ca1] hover:bg-[#d68a90] text-white font-open-sans font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
            QUERO TRANSFORMAR MINHA CARREIRA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;