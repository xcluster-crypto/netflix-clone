'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import { Play, Plus } from 'lucide-react'

const movies = {
  trending: [
    { id: 1, title: "Stranger Things", category: "TV Series", rating: "16+", year: "2024" },
    { id: 2, title: "The Witcher", category: "TV Series", rating: "18+", year: "2024" },
    { id: 3, title: "Wednesday", category: "TV Series", rating: "13+", year: "2024" },
    { id: 4, title: "Squid Game", category: "TV Series", rating: "18+", year: "2024" },
    { id: 5, title: "Black Mirror", category: "TV Series", rating: "18+", year: "2024" },
    { id: 6, title: "Dark", category: "TV Series", rating: "16+", year: "2024" },
  ],
  top: [
    { id: 7, title: "Breaking Bad", category: "TV Series", rating: "18+", year: "2024" },
    { id: 8, title: "Money Heist", category: "TV Series", rating: "16+", year: "2024" },
    { id: 9, title: "The Crown", category: "TV Series", rating: "16+", year: "2024" },
    { id: 10, title: "Bridgerton", category: "TV Series", rating: "16+", year: "2024" },
    { id: 11, title: "Ozark", category: "TV Series", rating: "18+", year: "2024" },
    { id: 12, title: "The Queen's Gambit", category: "TV Series", rating: "16+", year: "2024" },
  ],
  latest: [
    { id: 13, title: "Red Notice", category: "Movie", rating: "13+", year: "2024" },
    { id: 14, title: "Don't Look Up", category: "Movie", rating: "16+", year: "2024" },
    { id: 15, title: "The Adam Project", category: "Movie", rating: "13+", year: "2024" },
    { id: 16, title: "The Gray Man", category: "Movie", rating: "16+", year: "2024" },
    { id: 17, title: "Extraction 2", category: "Movie", rating: "18+", year: "2024" },
    { id: 18, title: "Glass Onion", category: "Movie", rating: "13+", year: "2024" },
  ],
}

export function MovieSection() {
  return (
    <Tabs defaultValue="trending" className="w-full">
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-2xl font-bold">Movies & TV Shows</h3>
        <TabsList className="bg-transparent border rounded-lg">
          <TabsTrigger value="trending" className="data-[state=active]:bg-red-600">
            Trending
          </TabsTrigger>
          <TabsTrigger value="top" className="data-[state=active]:bg-red-600">
            Top
          </TabsTrigger>
          <TabsTrigger value="latest" className="data-[state=active]:bg-red-600">
            Latest
          </TabsTrigger>
        </TabsList>
      </div>

      {Object.entries(movies).map(([category, items]) => (
        <TabsContent key={category} value={category}>
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex w-max space-x-4 p-4">
              {items.map((movie) => (
                <Card key={movie.id} className="w-[250px] bg-zinc-900 border-zinc-800">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={`/placeholder.svg?height=141&width=250`}
                        alt={movie.title}
                        width={250}
                        height={141}
                        className="rounded-t-lg object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <h4 className="text-lg font-semibold truncate">{movie.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <span>{movie.category}</span>
                          <span>•</span>
                          <span>{movie.rating}</span>
                          <span>•</span>
                          <span>{movie.year}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex gap-2">
                      <Button size="sm" className="w-full">
                        <Play className="w-4 h-4 mr-2" /> Play
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsContent>
      ))}
    </Tabs>
  )
}

