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
    title: "1. Captando sua necessidade",
    description:
      "Entendemos suas metas e objetivos para fornecer soluções personalizadas que atendam às necessidades exclusivas de sua empresa."
  },
  {
    icon: <MapIcon />,
    title: "2. Planejamento estratégico ",
    description:
      "Utilizamos uma abordagem criativa para desenvolver soluções únicas que diferenciam sua marca e envolvem seu público-alvo."
  },
  {
    icon: <PlaneIcon />,
    title: "3. Executando com eficiência",
    description:
      "Implementamos estratégias utilizando tecnologias avançadas e as melhores práticas para desenvolver o melhor sistema para sua empresa."
  },
  {
    icon: <GiftIcon />,
    title: "4. Aprovação e refinamento",
    description:
      "Após a implementação, enviamos o software para sua aprovação, realizando ajustes conforme necessário, garantindo a satisfação do cliente."
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
        Nosso modo de trabalho é dividido em quatro pilares:
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
