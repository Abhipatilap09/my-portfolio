import React from 'react';

// 1. IMPORT THE IMAGE:
// Assuming App.jsx and Abhiskek_Patil2.jpg are in the same folder (src), 
// App.jsx - Single-file React + Tailwind portfolio component
// This component is enhanced with more detailed projects, better skill grouping, 
// and a visual placeholder in the hero section.

export default function App() {
  // --- Data Definition ---
  const projects = [
    {
      title: 'Deep Learning Satellite Classifier',
      desc: 'Developed a Convolutional Neural Network (CNN) using PyTorch for classifying high-resolution satellite imagery, achieving 95% accuracy. The model was optimized for inference speed and integrated into a cloud environment for batch processing.',
      link: '#', 
      repo: 'https://github.com/Abhipatilap09/satellite-classifier-repo',
      tags: ['PyTorch', 'Python', 'CNN', 'Cloud Deployment'],
    },
    {
      title: 'Real-Time Microservice API Gateway',
      desc: 'Architected and built a highly concurrent API Gateway using Node.js and Express to manage traffic for multiple backend microservices. Implemented rate limiting, JWT authentication, and Dockerized deployment to Kubernetes.',
      link: '#', 
      repo: 'https://github.com/Abhipatilap09/microservice-gateway-repo',
      tags: ['Node.js', 'Express', 'Microservices', 'Kubernetes'],
    },
    {
      title: 'Multi-Criteria Data Analysis Dashboard',
      desc: 'Created an interactive data visualization dashboard using React and Power BI to allow users to filter complex datasets (over 1M rows) by multiple criteria in real-time, significantly reducing report generation time for stakeholders.',
      link: '#', 
      repo: 'https://github.com/Abhipatilap09/data-dashboard-repo',
      tags: ['React', 'Power BI', 'DataViz', 'SQL'],
    },
    {
      title: 'Weather App (Full-Stack)',
      desc: 'Full-stack weather application with a modern React frontend and a deployed Node.js/Express backend. It features real-time weather data retrieval and efficient caching mechanisms for high availability.',
      link: 'https://weather-app-abhishekpatil09.onrender.com/',
      repo: 'https://github.com/Abhipatilap09/weather-app-repo',
      tags: ['React', 'Node.js', 'API Integration', 'Full-Stack'],
    },
  ];

  // --- Utility Functions ---
  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form.name.value || '');
    const email = encodeURIComponent(form.email.value || '');
    const message = encodeURIComponent(form.message.value || '');
    const subject = encodeURIComponent('Portfolio Contact from ' + (form.name.value || 'Website Visitor'));

    // Using a mailto fallback. Replace with Formspree/Netlify/Your API for production.
    const mailto = `mailto:abhipatil3515@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0AFrom:%20${name}%20<${email}>`;
    window.location.href = mailto;
  }

  // --- Component JSX ---
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Header & Navigation */}
      <header className="bg-white sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-teal-600">Abhishek Patil</h1>
            <p className="text-sm text-gray-600">Software Engineer | UTSA Masters in Computer Science | AI & ML Enthusiast</p>
          </div>
          <nav className="space-x-4 text-sm hidden md:flex items-center">
            <a href="#about" className="hover:text-teal-600 transition duration-150">About</a>
            <a href="#projects" className="hover:text-teal-600 transition duration-150">Projects</a>
            <a href="#skills" className="hover:text-teal-600 transition duration-150">Skills</a>
            <a href="#achievements" className="hover:text-teal-600 transition duration-150">Achievements</a>
            {/* Added GitHub to main nav */}
            <a href="https://github.com/Abhipatilap09" target="_blank" rel="noreferrer" className="hover:text-teal-600 transition duration-150">GitHub</a>
            <a href="#contact" className="bg-teal-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-teal-700 transition duration-150">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 grid gap-20">
        
        {/* Hero Section (About) - Section 2 now contains the image/visual hook */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Intro Text and Links */}
          <div>
            <h2 className="text-5xl font-extrabold mb-4 leading-tight text-gray-800">Building reliable software and intelligent systems.</h2>
            <p className="text-lg text-gray-700 mb-8">I am a Master's student in Computer Science at UTSA, building upon 3+ years of corporate experience in software development. My expertise lies at the intersection of full-stack development and advanced AI/ML solutions, allowing me to build robust, end-to-end applications. I am driven by a passion for creating innovative, AI-driven technologies that push past traditional boundaries.</p>

            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" download className="px-6 py-3 border border-gray-300 rounded-lg text-teal-600 font-medium hover:bg-teal-50 transition duration-150">Download Resume</a>
              <a href="https://github.com/Abhipatilap09" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150">GitHub Profile</a>
              <a href="https://www.linkedin.com/in/abhishek-patil-21b602216/" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150">LinkedIn</a>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="flex justify-center md:justify-end">
            {/* IMPORTANT: Use the imported variable here: {profileImage} */}
            <img 
              src="/Abhiskek_Patil2.jpg" 
              alt="Abhishek Patil Professional Headshot"
              className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-teal-400 transform hover:scale-105 transition duration-300" 
              // You can update the fallback to point to the imported image as well,
              // but it's often better to use a placeholder link or remove the fallback 
              // entirely if you are sure the imported image path is correct.
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/e0f2f7/066d77?text=Error" }} 
            />
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{p.title}</h4>
                <p className="text-gray-700 mb-4">{p.desc}</p>
                
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-teal-800 bg-teal-100 px-3 py-1 rounded-full shadow-inner">{tag}</span>
                    ))}
                </div>

                <div className="flex gap-4">
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border border-teal-400 text-teal-600 rounded-lg hover:bg-teal-50 font-medium">Live Demo</a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">Source Code</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Technical Proficiencies</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Category 1: Frontend & Languages */}
              <div>
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">Frontend & Languages</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  **React**, **TypeScript**, JavaScript (ES6+), HTML5, CSS3, **Tailwind**.
                  <br />
                  C++, **Python**, Java, SQL.
                </p>
              </div>

              {/* Category 2: Backend & Databases */}
              <div>
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">Backend & Databases</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  **Node.js**, **Express**, REST APIs, **Microservices**, Multithreading, SQL, MongoDB.
                </p>
              </div>

              {/* Category 3: DevOps & Cloud */}
              <div>
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">DevOps & Cloud</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  **Azure** (Functions, DevOps), **Docker**, **Kubernetes**, Jenkins, GitHub Actions, CI/CD Pipelines.
                </p>
              </div>

              {/* Category 4: Data Science & AI/ML */}
              <div className="lg:col-span-2">
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">Data Science & AI/ML</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  **TensorFlow**, **PyTorch**, Scikit-learn, Pandas, NumPy, Data Visualization, Power BI, Statistical Modeling.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Achievements & Certificates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Azure Developer Associate Certification (AZ-204)</p>
                <p className="text-sm text-gray-500 mt-1">Microsoft, 2023</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Outstanding Contributor Award</p>
                <p className="text-sm text-gray-500 mt-1">Previous Employer, 2022</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Specialization in Deep Learning</p>
                <p className="text-sm text-gray-500 mt-1">Coursera / DeepLearning.AI</p>
            </div>
          </div>
        </section>

        {/* Blog placeholder */}
        <section id="blog" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Blog / Technical Insights</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-100">
            <p className="text-gray-700 text-lg">
                I'm currently building out a space to share technical deep dives on **Microservice Deployment** and **PyTorch Optimization**. Check back soon!
            </p>
            <a href="#" className="mt-4 inline-block text-sm text-teal-600 hover:underline">Link to Medium / Hashnode</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Send Me a Message</h4>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input id="name" name="name" className="w-full border p-3 rounded-lg mb-4 focus:ring-teal-500 focus:border-teal-500" placeholder="Your name" required />

              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" className="w-full border p-3 rounded-lg mb-4 focus:ring-teal-500 focus:border-teal-500" placeholder="you@example.com" required />

              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full border p-3 rounded-lg mb-6 focus:ring-teal-500 focus:border-teal-500" placeholder="Hi Abhishek — I want to talk about..." required />

              <button type="submit" className="w-full px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition duration-150 shadow-md">Send Email</button>
            </form>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-center items-center text-center">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Connect Directly</h4>
              <p className="text-base text-gray-700 mb-6">I'm actively looking for full-time opportunities in Software Engineering and ML/AI.</p>
              
              <div className="space-y-3 w-full max-w-sm">
                <a href="mailto:abhipatil3515@gmail.com" className="flex items-center justify-center p-3 border rounded-lg hover:bg-teal-50 transition duration-150">
                    <span className="font-medium text-teal-600">abhipatil3515@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-patil-21b602216/" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 border rounded-lg hover:bg-teal-50 transition duration-150">
                    <span className="font-medium">LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Abhipatilap09" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 border rounded-lg hover:bg-teal-50 transition duration-150">
                    <span className="font-medium">GitHub: @Abhipatilap09</span>
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Abhishek Patil — Built with React & Tailwind</div>
      </footer>
    </div>
  );
}