import React from 'react';
import { Brain, DollarSign, Frown, Clock } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: Brain,
      title: "Falta de Conhecimento Técnico",
      description: "Você quer oferecer megahair mas tem medo de errar e perder clientes por não dominar a técnica correta."
    },
    {
      icon: DollarSign,
      title: "Cursos Caros e Inacessíveis",
      description: "Investimentos altos em cursos presenciais que não cabem no seu orçamento atual."
    },
    {
      icon: Frown,
      title: "Clientes Insatisfeitos",
      description: "Resultados ruins por técnicas desatualizadas que prejudicam sua reputação profissional."
    },
    {
      icon: Clock,
      title: "Falta de Tempo e Flexibilidade",
      description: "Precisa de uma fonte de renda que se adapte à sua rotina e horários disponíveis."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            Por que a maioria dos profissionais da beleza ainda luta para aumentar sua renda?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-[#ede6d1] p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#e89ca1] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#2C2C2C] mb-3">
                {problem.title}
              </h3>
              <p className="font-open-sans text-[#2C2C2C] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-open-sans text-lg text-[#2C2C2C] font-semibold">
            Se você se identificou com pelo menos um desses problemas, continue lendo...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;