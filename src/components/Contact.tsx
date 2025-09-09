import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "desolafujah365@gmail.com",
      href: "mailto:desolafujah365@gmail.com",
      description: "Best way to reach me for collaborations or conversations",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@desolaafujah",
      href: "https://github.com/desolaafujah",
      description: "Check out my code and ongoing projects",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Desola Fujah",
      href: "#",
      description: "Professional network and career updates",
    },
  ];

};

export default Contact;