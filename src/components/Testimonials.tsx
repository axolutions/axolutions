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
    comment: "A consultoria da Axolutions transformou o meu e-commerce da água para o vinho, nunca havia recebido tantos acessos a minha loja! Indico para todos os meus conhecidos sempre que posso!!!",
  },
  {
    image: "/path/to/your/avatar2.png",
    name: "Carlos Silva",
    userName: "@carlos_silva",
    comment: "Com o sistema de atendimento da AxoChat alcancei uma produtividade surreal ao responder meus clientes e passei a fechar muito mais vendas. A Inteligência Artifical usada no Chat-Bot é de outro nível.",
  },
  {
    image: "/path/to/your/avatar3.png",
    name: "Fernanda Gomes",
    userName: "@fernanda_gomes",
    comment: "O que mais me surpreendeu do começo ao fim: O atendimento. Não só tiveram ideias excelentes como tiraram todas as minhas dúvidas, e continuam com feedbacks o tempo todo. Foi a melhor experiência com freelance/pós venda que eu ja tive.",
  },
  {
    image: "/path/to/your/avatar4.png",
    name: "Luiz Costa",
    userName: "@luiz_costa",
    comment: "Simplesmente sensacional, tenho um hospital veterinário 24h e já testei todos os ERPs do mercado, e nunca vi nada igual ao da Axolutions. Continuo me surpreendendo a cada atualização, extremamente personalizado com a cara do meu hospital! Tem tudo que eu preciso. Recomendo muito!!",
  },
  {
    image: "/path/to/your/avatar5.png",
    name: "Sofia Pereira",
    userName: "@sofia_pereira",
    comment: "Contratei a axolutions para fazer a landing page da minha confeitaria, e é impossível não se encantar com o atendimento e a atenção aos mínimos detalhes da empresa. Passei a gerenciar toda a confeitaria com o sistema da empresa e troquei meu sistema de atendimento! É incrível a diferença que um software pensado exatamente para o seu negócio pode fazer.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Descubra o
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          impacto da Axolutions
          {" "}
        </span>
        em negócios reais.
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Veja relatos autênticos de clientes satisfeitos e saiba como nossas soluções impulsionaram o sucesso de suas empresas.
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
