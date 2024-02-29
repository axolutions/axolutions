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
      "Conheça o AxoChat, o sistema de atendimento multiplataforma mais eficiente do mercado. Centralizamos todos os seus atendimentos para garantir rapidez e eficiência aos seus clientes, oferecendo um Chat-Bot com inteligência artifical, relatórios personalizados e diversas ferramentas para elevar a qualidade do seu atendimento a um próximo nível.",
    shortDescription: "AxoChat, atendimento omnichanel.",
    additionalImages: [AxoChatImage, AxoChatImage2],
    image: AxoChatImage,
  },
  {
    title: "Petus",
    description:
      "Descubra o melhor ERP personalizado para a área veterinária. Com a Petus, você gerencia toda a sua empresa de forma integrada e eficiente. Desde o cadastro de clientes e animais, até a gestão de atendimento e relatórios clínicos, oferecemos uma solução completa. Aproveite também nossos recursos avançados, como dashboards e relatórios gerados com inteligência artificial, emissão de notas fiscais, módulos de exames, internação, rh e diversas outras funcionalidades. Simplifique seu dia a dia e eleve o nível de sua gestão com o Petus.",
    shortDescription: "Petus, ERP veterinário.",
    additionalImages: [PetusImage, PetusImage2],
    image: PetusImage,
  },
  {
    title: "AxoShop",
    description:
      "Descubra o poder do AxoShop, o melhor e-commerce personalizável do mercado. Oferecemos uma solução completa para o seu comércio online, incluindo catálogo com filtros avançados, coleções personalizadas, formulários de contato, lista de desejos, carrinho de compras e módulo de pagamento integrado. Transforme sua loja virtual e alcance o sucesso no mundo online com o AxoShop.",
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
            projetos
          </span>
        </h2>


        {selectedFeature && <ProjectModal feature={selectedFeature} />}

        <div className="flex flex-col gap-10">
          {features.map((feature: FeatureProps) => (
            <CredenzaTrigger asChild onClick={() => setSelectedFeature(feature)}>
              <Card key={feature.title} className="hover:opacity-80 flex flex-col lg:flex-row items-center lg:items-start justify-between rounded-lg shadow-md hover:shadow-lg overflow-hidden p-8 cardPortifolio">

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
