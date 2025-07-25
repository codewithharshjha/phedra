"use client";



"use client";

import { Tabs } from "../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "E-commerce",
      value: "product",
      content: (
        <TabContent
          title="E-commerce Tab"
          image="./E-commerce.jpg" // Replace with your actual image paths
        />
      ),
    },
    {
      title: "Blockchain",
      value: "blockchain",
      content: (
        <TabContent
          title="Blockchain Tab"
          image="/blockchain.jpg"
        />
      ),
    },
    {
      title: "Bussiness",
      value: "bussiness",
      content: (
        <TabContent
          title="bussiness Tab"
          image="/it.jpg"
        />
      ),
    },
  
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}


const TabContent = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mt-[-60px]">
      <p>{title}</p>
      <DummyContent image={image} />
    </div>
  );
};

const DummyContent = ({ image }: { image: string }) => {
  return (
    <img
      src={image}
      alt="tab image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-4xl mx-auto block " 
    />
  );
};
