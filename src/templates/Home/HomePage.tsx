import { HomePageProps } from "./HomePage.types";
import { Welcome } from "@/components/pages/Home";

const HomePage = ({ content }: HomePageProps) => {
  const { pageContent } = content;

  return (
    <>
      <Welcome title={pageContent.title} description={pageContent.description} />
    </>
  )
};

export default HomePage;
