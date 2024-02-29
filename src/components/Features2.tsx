import {
  Card,
  CardContent,
} from "@/components/ui/card";
import AxoChatImage from "../assets/axochat.png";
import AxoChatImage2 from "../assets/axochat2.png";
import { ProjectModal } from "./ProjectModal";
import { CredenzaTrigger, Credenza } from "./ui/credenza";
import { useState } from "react";
import AxoShopImage from '../assets/axoshop1.png'
import AxoShopImage2 from '../assets/axoshop2.png'
import PetusImage from '../assets/petus1.png'
import PetusImage2 from '../assets/petus2.png'

export interface FeatureProps {
  title: string;
  description: string;
  shortDescription?: string;
  additionalImages?: string[],
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "AxoChat",
    description:
      "AxoChat é o sistema de atendimento multiplataforma mais eficiente do mercado, onde centralizamos todos os seus atendimentos em apenas um local, garantindo rapidez e eficiência para os seus clientes. O sistema conta com Chat-Bot humanizado utilizando inteligência artifical, relatórios personalizados para maximizar seu lucro e elevar a qualidade do seu atendimento a um próximo nível.",
    shortDescription: "AxoChat, atendimento omnichanel.",
    additionalImages: [AxoChatImage, AxoChatImage2],
    image: AxoChatImage,
  },
  {
    title: "Petus",
    description:
      "Petus é o melhor ERP personalizado para o ramo veterinário, permitindo que você gerencie toda a sua empresa em apenas um local. Além das funcionalidades vitais como cadastro de clientes e animais, esteira de atendimento e relatórios clínicos, conta também com dashboards e relatórios de ponta gerados com Inteligência Artificial, emissão de notas fiscais, módulo de internação e muito mais.",
    shortDescription: "Petus, ERP veterinário.",
    additionalImages: [PetusImage, PetusImage2],
    image: PetusImage,
  },
  {
    title: "AxoShop",
    description:
      "O melhor e-commerce personalizável do mercado, entregamos para o seu comércio uma loja virtual completa, com filtros para o cátalogo, coleções, contatos, lista de desejo, carrinho virtual e módulo de compras.",
    shortDescription: "AxoShop, E-commerce personalizado.",
    additionalImages: [AxoShopImage, AxoShopImage2],
    image: AxoShopImage,
  },
];



export const Features2 = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureProps>()

  return (
    <Credenza>
      <section
        id="portifolio"
        className="container py-24 sm:py-32 space-y-8"
      >
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          Nossos{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Projetos
          </span>
        </h2>


        {selectedFeature && <ProjectModal feature={selectedFeature} />}

        <div className="flex flex-col gap-10">
          {features.map((feature: FeatureProps) => (
            <CredenzaTrigger asChild onClick={() => setSelectedFeature(feature)}>
              <Card key={feature.title} className="hover:opacity-80 flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-lg shadow-md hover:shadow-lg overflow-hidden p-8">

                <CardContent className="w-full p-4 me-5">
                  <h1 className="text-xl font-bold">{feature.title}</h1>
                  <p className="mt-2 text-md text-gray-400">{feature.description}</p>
                </CardContent>

                <div className="w-full">
                  <img src={feature.image} alt="Feature visualization" className="h-full w-full object-cover" />
                </div>

              </Card>
            </CredenzaTrigger>
          ))}
        </div>


      </section >
      <hr className="w-11/12 mx-auto" />
    </Credenza >
  );
};
