const BioPage = () => {
  const teams = [
    {
      name: "Development Team",
      style: "bg-blue-900/30 border-blue-700 shadow-sm",
      members: [
        { name: "Bilal Osman", profession: "Game Programmer" },
        { name: "Evgenni Nalpin", profession: "Game Programmer" },
        { name: "Oskar Björkholm", profession: "Game Programmer" },
        { name: "Suela Kallollari", profession: "Website Programmer" },
      ],
    },
    {
      name: "Art and Narrative Team",
      style: "bg-purple-900/30 border-purple-700 shadow-sm",
      members: [
        { name: "Maria Molander", profession: "Artist" },
        { name: "Patricia Adolfsson", profession: "Artist" },
        { name: "Wilma Kuusimurto", profession: "Artist" },
        { name: "Yoanna Rönnqvist", profession: "Artist" },
        { name: "Joakim Bäck", profession: "Artist" },
      ],
    },
    {
      name: "Musicians Team",
      style: "bg-green-900/30 border-green-700 shadow-sm",
      members: [
        { name: "Albert Nyberg", profession: "Musician" },
        { name: "Marika Durando", profession: "Musician" },
      ],
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Our Team</h2>
      <p className="text-gray-300 mb-8">
        Meet the people who bring creativity and code together to make our game.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {teams.map((team, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 border ${team.style} hover:shadow-md transition`}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {team.name}
            </h3>

            <div className="space-y-3">
              {team.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
                >
                  <p className="font-medium text-gray-900 text-sm">
                    {member.name}
                  </p>
                  <p className="text-gray-600 text-xs">{member.profession}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BioPage;
