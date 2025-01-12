import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AuthMenu } from "@/components/auth-menu"
import { MovieSection } from "@/components/movie-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshoot_netflix-Fn2YV0fuBJiDdaFr79UVAVEwYJePDO.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
      </div>

      {/* Header */}
      <header className="container mx-auto p-4 flex items-center justify-between">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
        <AuthMenu />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">Unlimited movies, TV shows, and more</h2>
        <p className="text-lg mb-8">Watch on any device. Cancel anytime.</p>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Email address"
            className="bg-black/60 border-gray-600 text-white"
          />
          <Button className="bg-red-600 hover:bg-red-700 text-white">Get Started</Button>
        </div>
      </section>

      {/* Movies Section */}
      <section className="container mx-auto px-4 py-8">
        <MovieSection />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8">More Reasons to Join</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Enjoy on your TV",
              description: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            },
            {
              title: "Download your shows",
              description: "Save your favorites easily and always have something to watch."
            },
            {
              title: "Watch everywhere",
              description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            },
            {
              title: "Create profiles",
              description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {[
            {
              question: "What is Netflix?",
              answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
            },
            {
              question: "How much does Netflix cost?",
              answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee."
            },
            {
              question: "Where can I watch?",
              answer: "Watch anywhere, anytime, on an unlimited number of devices."
            },
            {
              question: "How do I cancel?",
              answer: "Netflix is flexible. There are no pesky contracts and no commitments."
            },
            {
              question: "What can I watch on Netflix?",
              answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more."
            }
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

