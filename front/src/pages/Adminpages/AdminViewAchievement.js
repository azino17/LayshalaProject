import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { Table, Button, Modal, InputGroup, FormControl } from "react-bootstrap";

const AdminViewAchievement = () => {
  const [achievements, setAchievements] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch achievements from the backend
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const token = localStorage.getItem("AdminToken");
        const response = await axios.get(
          "http://localhost:5000/api/admin/achievements",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAchievements(response.data.achievements);
      } catch (err) {
        console.error("Error fetching achievements:", err);
      }
    };

    fetchAchievements();
  }, []);

  // Handle opening and closing the modal
  const handleShowModal = (achievement) => {
    setSelectedAchievement(achievement); // Set the selected achievement
    setShowModal(true); // Open the modal
  };

  // const handleCloseModal = () => {
  //   setSelectedAchievement(null);
  //   setShowModal(false);
  // };

  // Filter achievements based on search query
  const filteredAchievements = achievements.filter((achievement) =>
    achievement.studentId?.studentName
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const downloadAchievementAsPDF = (achievement) => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Achievement Details", 10, 10);

    // Add details
    doc.setFontSize(12);
    doc.text(`Student Name: ${achievement.studentId.studentName}`, 10, 30);
    doc.text(`Event Name: ${achievement.eventName}`, 10, 40);
    doc.text(
      `Event Date: ${new Date(achievement.eventDate).toLocaleDateString()}`,
      10,
      50
    );
    doc.text(`Rank: ${achievement.rank}`, 10, 60);

    // Add certificate image (if any)
    if (achievement.certificate) {
      const certificateImage = `data:image/jpeg;base64,${achievement.certificate}`;

      // Adjust the position and size of the image in the PDF
      doc.addImage(certificateImage, "JPEG", 10, 70, 100, 100); // x, y, width, height
    }

    // Save the PDF
    doc.save(`${achievement.studentId.studentName}_Achievement.pdf`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>Achievements</h4>
          <p className="text-muted">
            "Student Achievements: Celebrating Excellence and Success 🎓🏆"
          </p>
        </div>
      </div>
      {/* Search Bar */}
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by student name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>

      {/* Achievement Table */}
      <div className="table-responsive">
        <Table
          striped
          bordered
          hover
          className="text-center"
          style={{ fontFamily: "'Noto Sans', sans-serif" }}
        >
          <thead className="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Rank</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAchievements.map((achievement, index) => {
              const rowClass = achievement.rank === 1 ? "" : "";
              return (
                <tr key={achievement._id} className={rowClass}>
                  <td>{index + 1}</td>
                  <td>{achievement.studentId?.studentName || "N/A"}</td>
                  <td>{achievement.eventName}</td>
                  <td>
                    {new Date(achievement.eventDate).toLocaleDateString()}
                  </td>
                  <td>{achievement.rank}</td>
                  <td>
                    <Button
                      variant=""
                      size="sm"
                      onClick={() => handleShowModal(achievement)}
                      className="btn w-100"
                      style={{
                        backgroundColor: "#FFA800",
                        color: "white",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#800000")}
                      onMouseLeave={(e) => (e.target.style.color = "white")}
                    >
                      <i className="bi bi-file-earmark-text me-1"></i> View
                      Certificate
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* Modal for Viewing Certificate */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Achievement Details</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ fontFamily: "'Noto Sans', sans-serif", textAlign: "left" }}
        >
          {selectedAchievement && (
            <div>
              <p>
                <strong>Student Name:</strong>{" "}
                {selectedAchievement.studentId.studentName}
              </p>
              <p>
                <strong>Event Name:</strong> {selectedAchievement.eventName}
              </p>
              <p>
                <strong>Event Date:</strong>{" "}
                {new Date(selectedAchievement.eventDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Rank:</strong> {selectedAchievement.rank}
              </p>
              <p>
                <strong>Certificate:</strong>
              </p>
              <div style={{ textAlign: "center" }}>
                <img
                  src={`data:image/jpeg;base64,${selectedAchievement.certificate}`}
                  alt="Certificate"
                  style={{
                    maxWidth: "90%", // Ensures the image is not too large
                    height: "auto",
                    borderRadius: "8px", // Optional for rounded corners
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional for a subtle shadow
                  }}
                />
              </div>
              <div className="mt-3 text-center">
                <button
                  style={{
                    backgroundColor: "#FFA800",
                    fontFamily: "'Noto Sans', sans-serif",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#800000")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                  onClick={() => downloadAchievementAsPDF(selectedAchievement)}
                >
                  Download as PDF
                </button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminViewAchievement;
