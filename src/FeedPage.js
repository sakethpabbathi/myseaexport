import { useState } from "react";

const FeedPage = () => {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Feed</h2>

      {/* PRAWN */}
      <div style={header} onClick={() => setOpen(open === "prawn" ? null : "prawn")}>
        Prawn Feed
      </div>

      {open === "prawn" && (
        <div style={content}>
          <FeedItem title="Nursery Feed (TOP ONE)" />
          <FeedItem title="Grower Feed" />
          <FeedItem title="Vannamei Feed (UNIVANA-P / UNIVANA)" />
          <FeedItem title="Tiger Feed (LA ONE)" />
        </div>
      )}

      {/* FISH */}
      <div style={header} onClick={() => setOpen(open === "fish" ? null : "fish")}>
        Fish Feed
      </div>

      {open === "fish" && (
        <div style={content}>
          <FeedItem title="Marian Fish Feed" />
          <FeedItem title="Fresh Water Fish Feed" />
        </div>
      )}
    </div>
  );
};

const FeedItem = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div style={subHeader} onClick={() => setOpen(!open)}>
        {title}
      </div>

      {open && (
        <div style={subContent}>
          <p>Details about {title}</p>
          <p>📄 Brochure available</p>

          <div style={scroll}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75hzrt-cwrOqmIMGXWOP3aNi4RQSfHgesVA&s" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75hzrt-cwrOqmIMGXWOP3aNi4RQSfHgesVA&s" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75hzrt-cwrOqmIMGXWOP3aNi4RQSfHgesVA&s" />
          </div>
        </div>
      )}
    </div>
  );
};

const header = {
  background: "#00b4d8",
  color: "#fff",
  padding: "15px",
  cursor: "pointer",
  marginTop: "10px",
};

const content = {
  background: "#f1f1f1",
  padding: "10px",
};

const subHeader = {
  background: "#ddd",
  padding: "10px",
  cursor: "pointer",
};

const subContent = {
  padding: "10px",
  background: "#fff",
};

const scroll = {
  display: "flex",
  overflowX: "auto",
  gap: "10px",
};

export default FeedPage;