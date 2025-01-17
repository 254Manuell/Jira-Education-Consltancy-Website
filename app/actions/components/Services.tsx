const serviceList = [
  { id: 1, name: "Software Development and Data Analysis", description: "Custom software solutions and data insights tailored to your needs." },
  { id: 2, name: "Assignments", description: "Accurate and timely assignment assistance." },
  { id: 3, name: "PowerPoint Slide Preparation", description: "Professionally designed presentations for any occasion." },
  { id: 4, name: "Final Year Projects", description: "Guidance and support for capstone and academic projects." },
  { id: 5, name: "Thesis, Research, and Proposal Writing", description: "Comprehensive research and writing services for academic excellence." },
  { id: 6, name: "Plagiarism Checking", description: "Ensure originality and compliance with academic standards." },
  { id: 7, name: "Video Editing", description: "Creative and professional video editing services." },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

