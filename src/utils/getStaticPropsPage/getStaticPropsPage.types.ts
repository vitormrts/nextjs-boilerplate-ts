import { Content } from "@/content/content.types";

type GetStaticPropsPageProps = {
  content: keyof Content;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default GetStaticPropsPageProps;
