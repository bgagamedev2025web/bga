const BioPage = () => {
  const teams = [
    {
      name: "Development Team",
      members: [
        { name: "Bilal Osman", profession: "Game Developer" },
        { name: "Evgenni Nalpin", profession: "Game Developer" },
        { name: "Oskar Björkholm", profession: "Game Developer" },
         { name: "Suela Kallollari", profession: "Website Developer" }
        
      ]
    },
    {
      name: "Art Team", 
      members: [
        { name: "", profession: "" }
      ]
    },
    {
      name: "Storytelling Team",
      members: [
        { name: "", profession: "" }
      ]
    },
    {
      name: "Musicians Team",
      members: [
        { name: "", profession: "" }
      ]
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Bio Data</h2>
      <p className="text-gray-600 mb-8">This page contains career background information.</p>

      <div className="space-y-8">
        {teams.map((team, index) => (
          <div key={index} className="bg-white rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{team.name}</h3>
            <div className="space-y-3">
              {team.members.map((member, memberIndex) => (
                <div key={memberIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium">{member.name}</span>
                  <span className="text-gray-600 text-sm">{member.profession}</span>
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