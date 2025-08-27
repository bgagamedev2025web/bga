const ArtPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Game Artwork</h2>
      <p className="text-center mb-8 text-gray-700">
        A collection of artwork and designs created for the Finnish Kalevala Game Project.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          alt="Artwork 3"
          className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        
      </div>
    </div>
  );
};

export default ArtPage;
