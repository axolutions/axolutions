import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "1. Primeiro contato",
    description:
      "Entedemos exatamente o que sua empresa precisa afim de alcançar suas metas e objetivos. Além de oferecer soluções personalizadas que se alinham perfeitamente às necessidades específicas do seu negócio."
  },
  {
    icon: <MapIcon />,
    title: "2. Processo criativo",
    description:
      "A partir da análise inicial, damos início ao processo criativo para desenvolver uma solução exclusiva. Com uma abordagem criativa para inovar e diferenciar sua marca, desenvolvendo conceitos originais que capturam a essência do seu negócio e engajam seu público-alvo."
  },
  {
    icon: <PlaneIcon />,
    title: "3. Execução",
    description:
      "Implementamos as estratégias definidas, utilizando tecnologias de ponta e as melhores práticas para garantir que o desenvolvimento do projeto esteja alinhado com os objetivos estabelecidos e promova o crescimento sustentável do seu negócio."
  },
  {
    icon: <GiftIcon />,
    title: "4. Solução entregue",
    description:
      "Finalizado a execução, enviamos o software desenvolvido para a sua aprovação. Após aprovação e refinamento, deixamos seu sistema no ar, pronto para impressionar os seus clientes."
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          trabalhamos{" "}
        </span>

      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Nosso modo de trabalho é dividio em quatro pilares:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
