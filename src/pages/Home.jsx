import Card from '../components/Card';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <section className="flex flex-wrap justify-center gap-11">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </div>
  );
};

export default Home;
