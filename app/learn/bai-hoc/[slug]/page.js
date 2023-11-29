import Content from "@/components/Learn/BaiHoc/Content";
import configs from "@/configs/config";

const Home = async ({ params }) => {
  const { slug } = params;
  const data = await getDataBaiHoc(slug);
  return (
    <>
      <Content data={data} />
    </>
  );
};
export default Home;
async function getDataBaiHoc(slug) {
  try {
    const res = await fetch(
      `${configs.endpointServer}/api/v1/baihoc/chitiet/${slug}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    return {};
  }
}

export async function generateMetadata({ params }) {
  const item = await getDataBaiHoc(params.slug);
  return {
    title: `Bài học: ${item.data.tenBaiHoc}`,
    description: `Bài học: ${item.data.tenBaiHoc}`,
  };
}
