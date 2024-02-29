import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Design Responsivo",
    description:
      "A adaptação fluída a qualquer tamanho de tela, garantindo uma experiência de usuário impecável em dispositivos móveis e desktops.",
    image: image4,
  },
  {
    title: "Interface Intuitiva",
    description:
      "Desenvolvemos interfaces que facilitam a interação do usuário, melhorando a usabilidade e a experiência geral com o software.",
    image: image3,
  },
  {
    title: "Insights Impulsionados por IA",
    description:
      "Utilize o poder da inteligência artificial para obter insights valiosos, melhorar a tomada de decisões e otimizar processos.",
    image: image,
  },
];

const featureList: string[] = [
  "Tema Escuro/Claro",
  "Avaliações",
  "Funcionalidades",
  "Preços",
  "Formulário de Contato",
  "Nossa Equipe",
  "Design Responsivo",
  "Newsletter",
  "Minimalista",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Nossas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funcionalidades
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="Sobre a funcionalidade"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
