import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O megahair danifica o cabelo?",
      answer: "Não, se aplicado e removido corretamente com a técnica adequada ensinada no manual. Nossa técnica prioriza a saúde capilar."
    },
    {
      question: "Quanto tempo dura o megahair com fita?",
      answer: "45-60 dias até a próxima manutenção, dependendo dos cuidados e tipo de cabelo da cliente."
    },
    {
      question: "Posso nadar com megahair?",
      answer: "Sim, mas é importante secar bem após o contato com água e seguir os cuidados específicos que ensinamos no manual."
    },
    {
      question: "O megahair fica perceptível?",
      answer: "Fica totalmente discreto quando bem aplicado com a técnica correta. Nosso método garante um resultado natural e imperceptível."
    },
    {
      question: "Preciso de experiência prévia para aplicar o método?",
      answer: "Não! O manual foi desenvolvido especialmente para iniciantes completos, com passo a passo detalhado e ilustrações."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "O acesso é imediato! Você receberá por email o link para download do PDF assim que o pagamento for confirmado."
    },
    {
      question: "A garantia é real?",
      answer: "Sim! Você tem 7 dias para testar todo o conteúdo. Se não ficar satisfeita, devolvemos 100% do seu investimento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#ede6d1]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              FAQ – Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-playfair text-lg md:text-xl font-bold text-[#2C2C2C] pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#e89ca1] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#e89ca1] flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="font-open-sans text-[#2C2C2C] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;