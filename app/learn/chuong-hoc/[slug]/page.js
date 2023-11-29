import Content from "@/components/Learn/ChuongHoc/Content";
import configs from "@/configs/config";

const Home = async ({ params }) => {
  const { slug } = params;
  const data = await getDataChuongHoc(slug);

  return (
    <>
      <Content data={data} />
    </>
  );
};
export default Home;
async function getDataChuongHoc(slug) {
  try {
    const res = await fetch(
      `${configs.endpointServer}/api/v1/chuonghoc/chitiet/${slug}`,
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
  const item = await getDataChuongHoc(params.slug);
  return {
    title: `Chương học: ${item.data.tenChuongHoc}`,
    description: `Chương học: ${item.data.tenChuongHoc}`,
  };
}
