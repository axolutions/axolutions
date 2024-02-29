import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "/path/to/your/avatar1.png", // Substitua com o caminho do avatar real
    name: "Ana Martins",
    userName: "@ana_martins",
    comment: "A consultoria da Axolutions transformou a forma como nossa empresa opera, trazendo inovação e eficiência para nossos processos.",
  },
  {
    image: "/path/to/your/avatar2.png",
    name: "Carlos Silva",
    userName: "@carlos_silva",
    comment: "Com a ajuda da Axolutions, conseguimos implementar soluções tecnológicas avançadas que resultaram em um crescimento significativo para nosso negócio.",
  },
  {
    image: "/path/to/your/avatar3.png",
    name: "Fernanda Gomes",
    userName: "@fernanda_gomes",
    comment: "A equipe da Axolutions demonstrou profundo conhecimento técnico e um compromisso genuíno com o sucesso do nosso projeto.",
  },
  {
    image: "/path/to/your/avatar4.png",
    name: "Luiz Costa",
    userName: "@luiz_costa",
    comment: "A Axolutions nos proporcionou insights valiosos que nos ajudaram a otimizar nossas estratégias e operações.",
  },
  {
    image: "/path/to/your/avatar5.png",
    name: "Sofia Pereira",
    userName: "@sofia_pereira",
    comment: "Estou extremamente satisfeita com o nível de serviço e a atenção personalizada que recebemos da Axolutions.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Descubra por que
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          as pessoas amam{" "}
        </span>
        a Axolutions.
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Veja relatos reais de nossos clientes e veja como nós os ajudamos a transformar seus negócios.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={`Avatar de ${name}`}
                    src={image}
                  />
                  <AvatarFallback>ND</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
