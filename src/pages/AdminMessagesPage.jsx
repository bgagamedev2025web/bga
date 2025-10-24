import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AdminMessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/messages", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 401) {
          // token invalid or expired
          localStorage.removeItem("token");
          navigate("/login");
          return [];
        }
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, [navigate]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Submitted Messages</h2>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Message</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((m) => (
                <tr key={m._id} className="border-t">
                  <td className="p-2">{m.firstName} {m.lastName}</td>
                  <td className="p-2">{m.email}</td>
                  <td className="p-2">{m.subject}</td>
                  <td className="p-2">{m.message}</td>
                  <td className="p-2">{new Date(m.createdAt || m.date).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr><td className="p-4" colSpan="5">No messages</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMessagesPage;
