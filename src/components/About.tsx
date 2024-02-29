import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Sobre{" "}
                </span>
                nós
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Axolutions é a consultoria líder em desenvolvimento de softwares inovadores, especializada em criar soluções personalizadas para impulsionar a eficiência e o crescimento da sua empresa. Comprovadamente eficazes, nossas soluções são projetadas para aumentar a produtividade, reduzir custos operacionais e aprimorar a experiência do cliente. Entre em contato conosco e descubra como podemos ajudar a transformar o seu negócio.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
