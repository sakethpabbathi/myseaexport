const HCPPage = () => {
  const items = [
    "OXY-BESTOT","GUTPRO","ENGRO","UNI-LIGHT","NURI BSL",
    "ZEOLITE","SAPONIN","HC-BIO","LIFE-HC","PREMIX-SUPER C",
    "MAX C","YUCA HONG","DE-NO2","GOLD-DINE","UNI-BKC","DEHP"
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>HCP Products</h2>

      {items.map((item, i) => (
        <div key={i} style={card}>{item}</div>
      ))}
    </div>
  );
};

const card = {
  padding: "15px",
  background: "#eee",
  margin: "10px",
};

export default HCPPage;