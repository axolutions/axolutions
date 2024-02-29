import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container relative grid place-items-center py-20 md:py-32 gap-10">
      <div className="text-center space-y-6 px-32" id='cachorrao'>
        <main className="text-5xl md:text-6xl font-bold main-entrance">
          <h1 className="inline mt-10">
            A solução ideal para sua empresa:
          </h1>{" "}
          <h2 className="inline">
            <span className="animate-bounce inline bg-gradient-to-r from-[#c875df] via-[#d456f7] to-[#590570] text-transparent bg-clip-text">
              Axolutions.
            </span>{" "}
          </h2>
        </main>


        <p className="text-xl text-muted-foreground lg:mx-0">
          Soluções personalizadas e inovadoras para o seu negócio.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 ">
          <a href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:">
            <Button className="w-full md:w-1/4 bg-primary primary-button" variant='outline'>
              <p className="btnText">Solucione sua necessidade
              </p>
            </Button>
          </a>

          <a
            href="#portifolio"
            className={`w-full md:w-1/4 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Nosso portifólio
          </a>
        </div>
      </div>


      {/* Shadow effect */}
      <div className="fecristo absolute inset-0 z-[-1]">
        <div className="shadow"></div>
      </div>
    </section>
  );
};
