import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Como a Axolutions pode ajudar a transformar meu negócio?",
    answer:
      "Nossa consultoria especializa-se em identificar áreas-chave para a implementação de tecnologia avançada, melhorando a eficiência operacional, otimizando processos e capacitando sua equipe para focar em inovação e crescimento.",
    value: "item-1",
  },
  {
    question: "Quais tecnologias a Axolutions implementa em seus projetos?",
    answer:
      "Implementamos uma gama de soluções, incluindo sistemas de CRM e ERP personalizados, análise de dados avançada, automação de processos e plataformas de gestão de projetos, todas adaptadas às necessidades específicas do seu negócio.",
    value: "item-2",
  },
  {
    question: "Como a Axolutions garante a segurança das informações?",
    answer:
      "Priorizamos a segurança em todas as etapas do desenvolvimento, adotando as melhores práticas e padrões do setor para proteger seus dados e garantir a conformidade com regulamentos relevantes.",
    value: "item-3",
  },
  {
    question: "Qual é o processo de trabalho da Axolutions?",
    answer:
      "Começamos com uma análise detalhada das suas necessidades e objetivos. A partir daí, desenvolvemos um plano estratégico, executamos a implementação e oferecemos suporte contínuo para assegurar a adaptação e o sucesso a longo prazo.",
    value: "item-4",
  },
  {
    question: "Como posso começar a trabalhar com a Axolutions?",
    answer:
      "Entre em contato conosco através do nosso formulário online ou e-mail. Agendaremos uma reunião inicial para entender suas necessidades e discutir como nossas soluções podem auxiliar no crescimento e inovação do seu negócio.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas Frequentes
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tem dúvidas?{" "}
        <a
          href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:"
          className="text-primary transition-all hover:border-b-2"
        >
          Entre em contato
        </a>
      </h3>
    </section>
  );
};
