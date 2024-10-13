import GetStaticPropsPageProps from "./getStaticPropsPage.types";
import content from "@/content";

const getStaticPropsPage = ({
  content: targetContent,
  ...rest
}: GetStaticPropsPageProps) => {
  const pageContent = content.get(targetContent);

  return {
    props: {
      content: {
        pageContent,
      },
      ...rest,
    },
  };
};

export default getStaticPropsPage;
