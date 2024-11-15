'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  AlertCircle,
  BarChart2,
  BookOpen,
  //ChevronRight,
  FileText,
  HelpCircle,
  Library,
  LineChart,
  MessageSquare,
  Search,
  Settings,
  Users
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CedsBuilder() {
  const [activeComponent, setActiveComponent] = useState("background")

  const components = [
    { id: "background", name: "Background Summary", progress: 0 },
    { id: "swot", name: "SWOT Analysis", progress: 30 },
    { id: "strategic", name: "Strategic Direction", progress: 0 },
    { id: "action", name: "Action Plan", progress: 0 },
    { id: "evaluation", name: "Evaluation Framework", progress: 0 },
    { id: "resilience", name: "Economic Resilience", progress: 0 },
  ]

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r bg-muted/40 p-6">
        <h1 className="text-2xl font-bold mb-6">CEDS Content Knowledge Navigator</h1>
        <nav className="space-y-2">
          {/* Remove this button */}
          {/* <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Dashboard
          </Button> */}
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            CEDS Components
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BookOpen className="mr-2 h-4 w-4" />
            Learning Center
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Library className="mr-2 h-4 w-4" />
            Resources
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Community
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Search className="mr-2 h-4 w-4" />
            Data Finder
          </Button>
        </nav>
        <div className="mt-auto pt-6">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help & Support
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <ScrollArea className="h-full">
          <h2 className="text-3xl font-bold mb-6">CEDS Content Knowledge Navigator</h2>

          {/* Component Progress */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {components.map((component) => (
              <Card key={component.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setActiveComponent(component.id)}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{component.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={component.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">{component.progress}% complete</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Component Editor */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{components.find(c => c.id === activeComponent)?.name}</CardTitle>
              <CardDescription>Edit and review your CEDS component</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="edit" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                </TabsList>
                <TabsContent value="edit">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Section Title</Label>
                      <Input id="title" placeholder="Enter section title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea id="content" placeholder="Enter your content here" className="min-h-[200px]" />
                    </div>
                    <Button>Save Progress</Button>
                  </div>
                </TabsContent>
                <TabsContent value="preview">
                  <div className="prose max-w-none">
                    <h3>Preview of your content will appear here</h3>
                    <p>As you edit your CEDS component, youll be able to see a formatted preview in this tab.</p>
                  </div>
                </TabsContent>
                <TabsContent value="guidelines">
                  <div className="prose max-w-none">
                    <h3>Guidelines for {components.find(c => c.id === activeComponent)?.name}</h3>
                    <p>Here you&rsquo;ll find detailed explanations, best practices, and examples for creating this CEDS component.</p>
                    <ul>
                      <li>Include relevant regional data</li>
                      <li>Address key economic factors</li>
                      <li>Align with EDA requirements</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Resources and Community */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Tools and guides to help you create your CEDS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Data Analysis Tools
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    EDA Guidelines
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <LineChart className="mr-2 h-4 w-4" />
                    Economic Indicators
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community</CardTitle>
                <CardDescription>Connect with other CEDS planners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Discussion Forum
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Expert Network
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Knowledge Base
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Finder */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Data Finder</CardTitle>
              <CardDescription>Search for actionable insights in connected data sources or CEDS documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input placeholder="Enter your search query" className="flex-1" />
                <Button>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollArea>
      </main>
    </div>
  )
}