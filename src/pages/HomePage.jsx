const HomePage = () => {
  return (
    <div className="mt-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-wide text-white mb-3">
          Shroud Game Project
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          A roguelike inspired by Finnish mythology.
        </p>

        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg">
          <p className="text-gray-100 mb-4">
            A roguelike, 3rd person action game themed around Finnish mythology. Finnish inspirations will differentiate the experience from other offerings in this genre as the player is immersed in entirely unique environments, weapon mechanics and magic system based on mythical Väinämöinen’s rune singing.
          </p>
          <p className="text-gray-300 mb-4">
            The player assumes the role of a young adult whose tribe has angered an ancient, sentient forest.
          </p>
          <p className="text-gray-300">
            The game will be a roguelike, where the player repeatedly plays through randomly generated “forest dungeons” to gather resources to bring about the endgame.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
