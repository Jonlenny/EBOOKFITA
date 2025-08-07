import React from 'react';
import { Users, Scissors, Heart, Building } from 'lucide-react';

const Target = () => {
  const targets = [
    {
      icon: Users,
      title: "Você é um completo iniciante",
      description: "Está começando do zero e sonha com uma carreira que lhe dê propósito e confiança."
    },
    {
      icon: Scissors,
      title: "Você é um estilista que quer se aprimorar",
      description: "Você domina o cabeleireiro e agora é hora de se destacar com serviços premium e mais poder aquisitivo."
    },
    {
      icon: Heart,
      title: "Você é uma mãe que deseja flexibilidade",
      description: "Você quer um trabalho que se adapte à sua vida, às idas à escola, ao seu tempo livre e tudo mais."
    },
    {
      icon: Building,
      title: "Você é dono de um salão e quer aumentar sua equipe",
      description: "Você precisa de treinamento de alta qualidade que deixe sua equipe pronta para atender os clientes rapidamente."
    }
  ];

  return (
    <section className="py-20 bg-[#ede6d1]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            Para quem estamos aqui
          </h2>
          <p className="font-open-sans text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            Nós vemos você e construímos este manual profissional pensando em você.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {targets.map((target, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#e89ca1] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <target.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#2C2C2C] mb-4">
                {target.title}
              </h3>
              <p className="font-open-sans text-[#2C2C2C] leading-relaxed">
                {target.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="https://pay.kiwify.com.br/nL1lrtY" target="_blank" rel="noopener noreferrer" className="bg-[#e89ca1] hover:bg-[#d68a90] text-white font-open-sans font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
            SIM, É PARA MIM! QUERO COMEÇAR
          </a>
        </div>
      </div>
    </section>
  );
};

export default Target;