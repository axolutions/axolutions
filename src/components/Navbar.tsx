import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { WhatsappIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "Sobre",
  },
  {
    href: "#howItWorks",
    label: "Como trabalhamos",
  },
  {
    href: "#features",
    label: "Projetos",
  },
  {
    href: "#faq",
    label: "Dúvidas frequentes",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:bg-background mb-10">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              Axolutions
            </a>
          </NavigationMenuItem>

          {/* Mobile Menu Icon and Sheet */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="a-hoverh"
                    >
                      {label}
                    </a>
                  ))}
                <a
              href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <WhatsappIcon className="mr-5 w-5 h-5" height={100} width={100} />
              <span className='ms-2'>Solucione seu problema</span>
            </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-1">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Desktop GitHub Link */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/5511981914677?text=Ol%C3%A1,%20meu%20nome%20%C3%A9:"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <WhatsappIcon className="mr-5 w-5 h-5" height={100} width={100} />
              <span className='ms-2'>Entre em contato</span>
            </a>
          </div>
        </NavigationMenuList>

      </NavigationMenu>
    </header>
  );
};
