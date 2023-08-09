import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  // const DashboardPage = () => {
  //   return <div>This is a Dashboard!</div>;
  // };

  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
