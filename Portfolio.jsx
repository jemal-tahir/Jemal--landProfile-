import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-2">Jemal Tahir Mumed</h1>
        <p className="text-lg mb-4">Data Analyst & Agribusiness Expert</p>
        <p className="mb-6">Driving impact through data, market insight, and continuous innovation.</p>
        <Button asChild>
          <a href="mailto:jemalt2020@gmail.com">Contact Me</a>
        </Button>
      </section>
      <section className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Dynamic and results-driven professional with expertise in Agribusiness and Value Chain Management. Experienced in data analysis, budget evaluation, and market chain analysis. Skilled in Python, Excel, and modern analytics tools.
        </p>
      </section>
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Livestock Market Chain Analyzer (LMCA)</h3>
              <p>
                Analyzed live animal markets in Gursum using economic models (S-C-P Framework, Heckman Two-Stage Model).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Android Portfolio App (In Progress)</h3>
              <p>
                Offline Android app showcasing my skills and projects, including a downloadable CV.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p>Email: <a href="mailto:jemalt2020@gmail.com" className="text-blue-500">jemalt2020@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/jemal-tahir" target="_blank" className="text-blue-500">github.com/jemal-tahir</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/jemal-tahir-33b39a1b7" target="_blank" className="text-blue-500">linkedin.com/in/jemal-tahir</a></p>
      </section>
      <section className="mt-12 text-center">
        <h2 className="text-xl font-bold mb-2">Chat With My AI Assistant</h2>
        <p className="text-sm mb-4">(Coming soon – powered by OpenAI)</p>
        <Button disabled>Ask a Question</Button>
      </section>
    </main>
  );
}
