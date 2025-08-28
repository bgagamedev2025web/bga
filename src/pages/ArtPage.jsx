const ArtPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Game Artwork</h2>
      <p className="text-center mb-8 text-gray-700">
        A collection of artwork and designs created for the Shroud Game Project.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div className="md:col-span-1 flex items-start">
          <p className="text-gray-800 text-lg">
            The artwork explores the world of Shroud through concept sketches,
            character designs, and environment art. Each piece contributes to the
            atmosphere and lore of the game.
          </p>
        </div>

        
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src="/art1.png"
            alt="Artwork 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/image.png"
            alt="Artwork 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/spirit.jpg"
            alt="Artwork 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src="/2d3d.jpg"
            alt="Artwork 4"
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtPage;
