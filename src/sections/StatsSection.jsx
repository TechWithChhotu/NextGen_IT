export default function StatsSection() {
  const stats = [
    { value: "250+", label: "Projects" },
    { value: "120+", label: "Clients" },
    { value: "98%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="shadow-lg rounded-xl p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-blue-600">{item.value}</h3>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
