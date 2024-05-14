const Services = () => {
  const serciceData = [
    {
      img: "/parking_icon.svg",
      title: "Parking",
    },
    {
      img: "/tv_icon.svg",
      title: "TV",
    },
    {
      img: "/ac_icon.svg",
      title: "AC",
    },
    {
      img: "/wifi_icon.svg",
      title: "WiFi",
    },
    {
      img: "/refrigerator_icon.svg",
      title: "Refrigerator",
    },
    {
      img: "/power backup_icon.svg",
      title: "Power Backup",
    },
    {
      img: "/almirah_icon.svg",
      title: "Almirah",
    },
    {
      img: "/bed sheet_icon.svg",
      title: "Bed Sheet",
    },
    {
      img: "/cctv_icon.svg",
      title: "CCTV",
    },
    {
      img: "/house keeping_icon.svg",
      title: "House Keeping",
    },
    {
      img: "/security_icon.svg",
      title: "Security",
    },
    {
      img: "/pillow_icon.svg",
      title: "Pillow",
    },
    {
      img: "/drinking water_icon.svg",
      title: "Drinking Water",
    },
    {
      img: "/bathroom_icon.svg",
      title: "Bathroom",
    },
    {
      img: "/wash_icon.svg",
      title: "Wash",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {serciceData.map((item, index) => (
          <div className="col-md-3" style={{ marginTop: "20px" }} key={index}>
            <div className="service-item">
              <img src={item.img} />
              <span style={{ fontSize: "16px" }}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
