const ContactPage = () => {
  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
      

      <div className="bg-white rounded-lg border p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject..."
                required
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            
            <button
              type="submit"
              className="w-full md:w-auto px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>

          
          <div className="flex flex-col justify-start items-start">
            <p className="text-gray-600">
              For media and general inquiries, feel free to drop us a line! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
