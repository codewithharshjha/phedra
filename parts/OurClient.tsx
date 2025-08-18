import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Professional Team",
      designation: "Team Work",
      src: "/Professional.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Security",
      designation: "Safety Of Users",
      src: "/security.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Productive",
      designation: "New Features , Idea , Innovation",
      src: "/Productivity.jpg",

    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Maintainance",
      designation: "Continous Improvement",
      src: "/maintaince.jpg",
    },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
