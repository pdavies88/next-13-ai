import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text flex flex-col text-center">
        Discover & Share
        <span className="orange_gradient text-center">AI Prompts</span>
      </h1>
      <p className="desc text-center">
        AI Prompting tools to share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
