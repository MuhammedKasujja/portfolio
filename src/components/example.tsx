const Portfolio = () => {
  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Your Name</h1>
          <p className="text-lg text-gray-400">Software Developer | 7+ Years Experience</p>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
          <p className="text-gray-300">
            I am a software developer with 7 years of experience specializing in
            full-stack development. My expertise includes React, Next.js, Node.js,
            Laravel, and scalable backend architectures.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-300 md:grid-cols-3">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Laravel</span>
            <span>MySQL</span>
            <span>AWS</span>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Work Experience</h2>
          <div className="p-4 mb-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Senior Developer - XYZ Company</h3>
            <p className="text-sm text-gray-400">2020 - Present</p>
            <p className="mt-2 text-gray-300">
              Led the development of scalable backend services and improved API
              response times by 40%. Designed and implemented microservices architecture,
              reducing system downtime by 30%. Spearheaded a migration to cloud-based
              infrastructure, improving scalability and reducing costs.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Software Engineer - ABC Tech</h3>
            <p className="text-sm text-gray-400">2016 - 2020</p>
            <p className="mt-2 text-gray-300">
              Developed and maintained enterprise applications using React and Node.js.
              Optimized database queries, reducing execution time by 50%. Collaborated
              with cross-functional teams to enhance UI/UX and improve customer experience.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Notable Projects</h2>
          <div className="p-4 mb-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">E-Commerce Platform</h3>
            <p className="text-sm text-gray-400">Tech Stack: React, Next.js, Node.js, Stripe</p>
            <p className="mt-2 text-gray-300">
              Developed a highly scalable e-commerce platform with secure authentication, 
              product catalog management, and Stripe-integrated payments. Implemented a 
              responsive UI with optimized loading times, improving user experience and conversion rates.
            </p>
          </div>
          <div className="p-4 mb-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Real-Time Chat Application</h3>
            <p className="text-sm text-gray-400">Tech Stack: React, Firebase, WebSockets</p>
            <p className="mt-2 text-gray-300">
              Built a real-time chat application featuring group and private messaging, 
              media sharing, and read receipts. Used WebSockets for instant communication 
              and Firebase for scalable data storage and authentication.
            </p>
          </div>
          <div className="p-4 mb-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Project Management Tool</h3>
            <p className="text-sm text-gray-400">Tech Stack: React, Redux, Node.js</p>
            <p className="mt-2 text-gray-300">
              Created a full-featured project management tool with task tracking, 
              user roles, and a Kanban board. Implemented role-based access control 
              and real-time collaboration features, increasing team efficiency.
            </p>
          </div>
          <div className="p-4 mb-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Healthcare Appointment System</h3>
            <p className="text-sm text-gray-400">Tech Stack: React, Laravel, MySQL</p>
            <p className="mt-2 text-gray-300">
              Developed a healthcare appointment scheduling system with automated 
              email and SMS reminders. Integrated patient records, doctor availability 
              tracking, and an intuitive booking system for seamless user experience.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium">Dashboard & Analytics Platform</h3>
            <p className="text-sm text-gray-400">Tech Stack: React, D3.js, Node.js</p>
            <p className="mt-2 text-gray-300">
              Designed an interactive analytics dashboard displaying real-time business 
              metrics and KPIs. Implemented D3.js for data visualization, allowing users 
              to track trends and make data-driven decisions with ease.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Contact Me</h2>
          <p className="text-gray-300">📧 Email: your.email@example.com</p>
          <p className="text-gray-300">🔗 LinkedIn: linkedin.com/in/yourprofile</p>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
