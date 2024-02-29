import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Colaboração em Código",
    description:
      "Facilitamos a colaboração em código, potencializando a sinergia entre equipes e maximizando a eficiência no desenvolvimento.",
    icon: <ChartIcon />,
  },
  {
    title: "Gestão de Projetos",
    description:
      "Nossas soluções em gestão de projetos asseguram o alinhamento com os objetivos estratégicos, otimizando recursos e prazos.",
    icon: <WalletIcon />,
  },
  {
    title: "Automação de Tarefas",
    description:
      "Automatizamos processos críticos para aumentar a produtividade, reduzindo erros e liberando sua equipe para focar no que realmente importa.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Serviços centrados no cliente
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Descubra como nossos serviços podem transformar a maneira como sua empresa opera, trazendo inovação e eficiência.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Sobre os serviços"
        />
      </div>
    </section>
  );
};
