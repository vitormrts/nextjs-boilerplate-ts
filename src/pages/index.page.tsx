import HomePage from "@/templates/Home";
import { getStaticPropsPage } from "@/utils";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const staticProps = getStaticPropsPage({
    content: "home",
  });

  return staticProps;
};

export default HomePage;
