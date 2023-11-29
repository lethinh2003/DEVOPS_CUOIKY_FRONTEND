import Content from "@/components/Learn/PhanMuc/Content";
import configs from "@/configs/config";

const Home = async ({ params }) => {
  const { slug } = params;
  const data = await getDataPhanMuc(slug);

  return (
    <>
      <Content data={data} />
    </>
  );
};
export default Home;
async function getDataPhanMuc(slug) {
  try {
    const res = await fetch(
      `${configs.endpointServer}/api/v1/phanmuc/chitiet/${slug}`,
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
  const item = await getDataPhanMuc(params.slug);
  return {
    title: `Phân mục: ${item.data.tenPhanMuc}`,
    description: `Phân mục: ${item.data.tenPhanMuc}`,
  };
}
