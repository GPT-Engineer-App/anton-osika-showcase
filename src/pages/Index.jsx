import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <img src="/placeholder.svg" alt="Anton Osika" className="mx-auto object-cover w-32 h-32 rounded-full mb-4" />
          <h1 className="text-4xl font-bold mb-2">Anton Osika</h1>
          <p className="text-xl text-gray-600 mb-4">Developer | Entrepreneur | Innovator</p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon"><Github className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon"><Linkedin className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon"><Twitter className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon"><Mail className="h-5 w-5" /></Button>
          </div>
        </header>

        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            {['about', 'projects', 'contact'].map((tab) => (
              <li key={tab}>
                <Button
                  variant={activeTab === tab ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          {activeTab === 'about' && (
            <section className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-700 mb-4">
                Hello! I'm Anton Osika, a passionate developer and entrepreneur with a keen interest in innovative technologies. 
                I specialize in creating efficient, scalable solutions that solve real-world problems.
              </p>
              <p className="text-gray-700">
                With experience in various programming languages and frameworks, I enjoy tackling complex challenges 
                and turning ideas into reality. When I'm not coding, you can find me exploring new tech trends, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </section>
          )}

          {activeTab === 'projects' && (
            <section className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold">Project 1</h3>
                  <p className="text-gray-600">A brief description of Project 1 and its impact.</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold">Project 2</h3>
                  <p className="text-gray-600">An overview of Project 2 and its key features.</p>
                </li>
                <li className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold">Project 3</h3>
                  <p className="text-gray-600">Highlights of Project 3 and its technological stack.</p>
                </li>
              </ul>
            </section>
          )}

          {activeTab === 'contact' && (
            <section className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology. 
                Feel free to reach out through any of the following channels:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:anton@example.com" className="text-blue-600 hover:underline">anton@example.com</a>
                </li>
                <li className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-2" />
                  <a href="https://linkedin.com/in/antonosika" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Profile</a>
                </li>
                <li className="flex items-center">
                  <Twitter className="h-5 w-5 mr-2" />
                  <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@antonosika</a>
                </li>
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
