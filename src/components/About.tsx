import React from 'react';
import { Sparkles, GraduationCap, Building, DollarSign, Heart } from 'lucide-react';

const About = () => {
  const credentials = [
    { icon: Sparkles, text: "12 anos de experiência em megahair" },
    { icon: GraduationCap, text: "Formação em Biomedicina" },
    { icon: Building, text: "Proprietária de salão desde 2022" },
    { icon: DollarSign, text: "Mais de 3 salários mínimos mensais" },
    { icon: Heart, text: "Centenas de vidas transformadas" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            Conheça Nicole Mathias
          </h2>
          <p className="font-open-sans text-xl text-[#e89ca1] font-semibold">
            Dos Sonhos à Transformação: A Jornada de uma Visionária
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4 font-open-sans text-[#2C2C2C] leading-relaxed">
              <p>
                Há 12 anos, uma jovem de 15 anos em Ribeirão Pires não imaginava que se tornaria a referência em extensões capilares que transformaria centenas de vidas. Nicole Mathias começou como auxiliar de salão, mas carregava dentro de si algo maior.
              </p>
              <p>
                O momento que mudou tudo chegou aos 21 anos: conhecer uma especialista em megahair que abriu seus olhos para um universo de possibilidades. Mesmo trabalhando em telemarketing, Nicole sabia que seu destino estava em outro lugar.
              </p>
              <p>
                A coragem de recomeçar a levou a investir em si mesma - custeando cursos, workshops e especializações, até o dia mais emocionante de sua carreira: abrir seu próprio salão em fevereiro de 2022.
              </p>
              <p>
                Mas a verdadeira magia acontece quando Nicole devolve autoestima a quem mais precisa. Como aquela cliente que venceu o câncer e estava com apenas 3cm de cabelo - nenhum salão aceitava atendê-la. Nicole passou 5 horas dedicadas, devolvendo não apenas cabelo, mas a capacidade de se reconhecer no espelho.
              </p>
              <p>
                Hoje, com mais de 3 salários mínimos mensais, veículo próprio e tendo custeado a faculdade de Biomedicina, Nicole prova que extensões capilares vão muito além da técnica - são sobre devolver poder, empoderamento e a versão mais confiante de cada mulher.
              </p>
            </div>
            
            <div className="bg-[#ede6d1] p-6 rounded-2xl border-l-4 border-[#e89ca1]">
              <p className="font-playfair text-xl italic text-[#2C2C2C] font-semibold">
                "Não é só aplicar o mega. É devolver poder ao cliente. Vender aceitação através do cabelo."
              </p>
              <p className="font-open-sans text-[#e89ca1] font-bold mt-2">
                – Nicole Mathias
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <img 
                src="https://i.ibb.co/fP2TfHk/Expert-v02.png"
                alt="Nicole Mathias"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
              <h3 className="font-playfair text-2xl font-bold text-[#2C2C2C] mb-6 text-center">
                Credenciais:
              </h3>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-[#e89ca1] w-8 h-8 rounded-full flex items-center justify-center">
                      <credential.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-open-sans text-[#2C2C2C]">{credential.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;