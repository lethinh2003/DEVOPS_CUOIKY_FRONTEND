import Header from "@/components/Layout/Header";
import MainLayout from "@/components/Layout/MainLayout";
import Main from "@/components/Learn/Layout/Main";
import Navigation from "@/components/Learn/Layout/Navigation";
import NavigationMobile from "@/components/Learn/Layout/NavigationMobile";
import configs from "@/configs/config";
async function getDataNavigation() {
  const res = await fetch(`${configs.endpointServer}/api/v1/phanloai/get-all`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const staticData = await getDataNavigation();

  return (
    <>
      <Header />
      <MainLayout>
        <Navigation staticData={staticData}></Navigation>
        <NavigationMobile staticData={staticData}></NavigationMobile>
        <Main>{children}</Main>
      </MainLayout>
    </>
  );
}
