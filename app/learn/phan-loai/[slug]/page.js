import Content from "@/components/Learn/PhanLoai/Content";
import configs from "@/configs/config";

const Home = async ({ params }) => {
  const { slug } = params;
  const data = await getDataPhanLoai(slug);

  return (
    <>
      <Content data={data} />
    </>
  );
};
export default Home;

async function getDataPhanLoai(slug) {
  try {
    const res = await fetch(
      `${configs.endpointServer}/api/v1/phanloai/chitiet/${slug}`,
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
  const item = await getDataPhanLoai(params.slug);
  return {
    title: `Phân loại: ${item.data.tenPhanLoai}`,
    description: `Phân loại: ${item.data.tenPhanLoai}`,
  };
}
