import {
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { FeatureProps } from "./Features2";

interface Props {
  feature: FeatureProps;
}

export const ProjectModal = ({ feature }: Props) => {
  return (
    <CredenzaContent className="mx-auto p-5">
      <CredenzaHeader className="border-b pb-4">
        <CredenzaTitle className="text-2xl font-bold ">{feature.title}</CredenzaTitle>
        <CredenzaDescription className="text-gray-400 mt-2">{feature.shortDescription}</CredenzaDescription>
      </CredenzaHeader>
      <CredenzaBody className="py-4">
        {/* Adjusted to display images in a single column */}
        <div className="flex flex-col gap-4">
          {feature!.additionalImages!.map((image, index) => (
            <img key={index} src={image} alt={`Additional feature ${index}`} className="w-full h-auto object-cover rounded" />
          ))}
        </div>
      </CredenzaBody>
      <CredenzaFooter className="flex justify-end border-t pt-4 mt-4">
        <CredenzaClose asChild>
          <button className="text-white bg-primary-500rounded-lg px-4 py-2 focus:outline-none focus:shadow-outline">
            Fechar
          </button>
        </CredenzaClose>
      </CredenzaFooter>
    </CredenzaContent>
  );
};
