"use client"

import { useState } from "react"
import { X } from "lucide-react"
import {
  Search,
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Filter,
  Star,
  ChevronRight,
  ArrowLeft,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CourtTypeCard } from "@/components/court-type-card"
import CaseDetails from "@/components/case-details/CaseDetails"
import { LocationSelector } from "@/components/location-selector"

const courtTypes = [
  {
    id: "high-court",
    name: "High Court",
    description: "Civil and criminal cases, appeals from lower courts",
    icon: "⚖️",
    features: ["Civil Cases", "Criminal Cases", "Appeals", "Constitutional Matters"],
  },
  {
    id: "supreme-court",
    name: "Supreme Court",
    description: "Final court of appeal, constitutional matters",
    icon: "🏛️",
    features: ["Final Appeals", "Constitutional Law", "Inter-State Disputes"],
  },
  {
    id: "industrial-court",
    name: "National Industrial Court",
    description: "Labor disputes, employment matters",
    icon: "🏭",
    features: ["Labor Disputes", "Employment Law", "Trade Union Matters"],
  },
  {
    id: "magistrate-court",
    name: "Magistrate Court",
    description: "Minor criminal and civil cases",
    icon: "🏢",
    features: ["Minor Criminal", "Civil Disputes", "Traffic Offenses", "Small Claims"],
  },
  {
    id: "customary-court",
    name: "Customary Court",
    description: "Traditional law, family matters",
    icon: "🏘️",
    features: ["Family Law", "Traditional Disputes", "Marriage Matters", "Inheritance"],
  },
  {
    id: "multi-door-court",
    name: "Multi-door Court",
    description: "Alternative dispute resolution",
    icon: "🚪",
    features: ["Mediation", "Arbitration", "Conciliation", "ADR Services"],
  },
]

const states = ["Lagos", "Abuja (FCT)", "Kano", "Rivers", "Oyo", "Kaduna", "Ogun", "Imo", "Plateau", "Akwa Ibom"]

const sampleCourts = [
  {
    id: 1,
    name: "Lagos High Court, Ikeja",
    type: "High Court",
    address: "Alausa Secretariat, Ikeja, Lagos State",
    phone: "+234 1 234 5678",
    hours: "8:00 AM - 4:00 PM",
    specializations: ["Civil Cases", "Criminal Cases", "Commercial Law"],
    rating: 4.2,
    distance: "2.3 km",
    onlineServices: true,
    verified: true,
  },
  {
    id: 2,
    name: "Federal High Court Lagos",
    type: "High Court",
    address: "Ikoyi, Lagos Island, Lagos State",
    phone: "+234 1 234 5679",
    hours: "9:00 AM - 3:30 PM",
    specializations: ["Federal Matters", "Tax Cases", "Immigration"],
    rating: 4.5,
    distance: "5.1 km",
    onlineServices: true,
    verified: true,
  },
  {
    id: 3,
    name: "Ikeja Magistrate Court",
    type: "Magistrate Court",
    address: "Obafemi Awolowo Way, Ikeja, Lagos",
    phone: "+234 1 234 5680",
    hours: "8:30 AM - 4:00 PM",
    specializations: ["Minor Criminal Cases", "Civil Disputes", "Traffic Offenses"],
    rating: 3.8,
    distance: "1.8 km",
    onlineServices: false,
    verified: true,
  },
]

export function CaseFinder() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCourtType, setSelectedCourtType] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedLGA, setSelectedLGA] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (courtId: number) => {
    setFavorites((prev) => (prev.includes(courtId) ? prev.filter((id) => id !== courtId) : [...prev, courtId]))
  }

  const [showCourtsList, setShowCourtsList] = useState(false)
  const [selectedCourt, setSelectedCourt] = useState<{name: string; type: string; location: string} | null>(null)
  const [caseId, setCaseId] = useState("")
  const [caseDetails, setCaseDetails] = useState<any>(null)

  const nigerianCourts = [
    // Supreme Court
    { name: 'Supreme Court of Nigeria', type: 'Supreme Court', location: 'Abuja' },
    
    // Court of Appeal
    { name: 'Court of Appeal - Abuja Division', type: 'Court of Appeal', location: 'Abuja' },
    { name: 'Court of Appeal - Lagos Division', type: 'Court of Appeal', location: 'Lagos' },
    { name: 'Court of Appeal - Enugu Division', type: 'Court of Appeal', location: 'Enugu' },
    
    // Federal High Court
    { name: 'Federal High Court - Abuja', type: 'Federal High Court', location: 'Abuja' },
    { name: 'Federal High Court - Lagos', type: 'Federal High Court', location: 'Lagos' },
    { name: 'Federal High Court - Port Harcourt', type: 'Federal High Court', location: 'Rivers' },
    
    // State High Courts
    { name: 'Lagos State High Court', type: 'State High Court', location: 'Lagos' },
    { name: 'Rivers State High Court', type: 'State High Court', location: 'Rivers' },
    { name: 'Kano State High Court', type: 'State High Court', location: 'Kano' },
    { name: 'Oyo State High Court', type: 'State High Court', location: 'Oyo' },
    { name: 'Anambra State High Court', type: 'State High Court', location: 'Anambra' },
    
    // Customary Courts
    { name: 'Customary Court of Appeal - Abuja', type: 'Customary Court', location: 'FCT' },
    { name: 'Customary Court of Appeal - Enugu', type: 'Customary Court', location: 'Enugu' },
    
    // Sharia Courts
    { name: 'Sharia Court of Appeal - Kano', type: 'Sharia Court', location: 'Kano' },
    { name: 'Sharia Court of Appeal - Sokoto', type: 'Sharia Court', location: 'Sokoto' },
  ]

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Building2 className="h-8 w-8 text-primary" />
        </div>
        <h1 className="heading-xl text-foreground">Find Your Court Case</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Locate courts across Nigeria with detailed information about services, contact details, and operating hours.
          Get directions and check availability.
        </p>
      </div>

      <div className="relative max-w-lg mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          placeholder="Search by court name or location..."
          className="pl-12 h-14 bg-card border-border text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => setCurrentStep(2)}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
        >
          Start Court Search
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="h-12 px-8 bg-transparent"
          onClick={() => setShowCourtsList(true)}
        >
          Browse All Courts
        </Button>

        {/* Courts List Modal */}
        {showCourtsList && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-background rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Courts in Nigeria</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowCourtsList(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {nigerianCourts.map((court, index) => (
                    <div 
                      key={index} 
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => {
                        handleCourtSelect(court)
                        setCurrentStep(3)
                      }}
                    >
                      <div className="font-medium">{court.name}</div>
                      <div className="text-sm text-muted-foreground">{court.type}</div>
                      <div className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {court.location}
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Click to select
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t mt-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Showing {nigerianCourts.length} major courts. Contact us to add more courts to our database.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>  
    </div>
  )

  const renderStep2 = () => (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="heading-lg text-foreground">Select Court</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose a court to search for cases or browse the full list
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          placeholder="Search for a court..."
          className="pl-12 h-14 bg-card border-border text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courtTypes.map((court) => (
          <CourtTypeCard
            key={court.id}
            id={court.id}
            name={court.name}
            description={court.description}
            icon={court.icon}
            features={court.features}
            isSelected={selectedCourtType === court.id}
            onClick={() => {
              setSelectedCourtType(court.id)
              // Auto-select a court for demo purposes
              const demoCourt = nigerianCourts.find(c => c.type.toLowerCase().includes(court.id.toLowerCase()))
              if (demoCourt) {
                handleCourtSelect(demoCourt)
                setCurrentStep(3)
              }
            }}
          />
        ))}
      </div>

      <div className="pt-4 border-t">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => setShowCourtsList(true)}
        >
          Browse All Courts
        </Button>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentStep(1)} size="lg" className="px-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep(3)}
          disabled={!selectedCourtType}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
        >
          Continue to Case Search
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const handleCourtSelect = (court: {name: string; type: string; location: string}) => {
    setSelectedCourt(court)
    setShowCourtsList(false)
  }

  const handleSearchCase = () => {
    // Mock case data - in a real app, this would be an API call
    const mockCaseData = {
      id: caseId,
      title: `Case #${caseId}`,
      court: selectedCourt?.name || 'Unknown Court',
      type: selectedCourt?.type || 'Civil',
      status: 'Active',
      filingDate: '2024-01-15',
      lastHearing: '2024-09-20',
      nextHearing: '2024-11-05',
      judge: 'Hon. Justice Adebayo Ojo',
      plaintiff: 'Federal Republic of Nigeria',
      defendant: 'John Doe',
      caseSummary: 'This is a sample case summary. In a real application, this would contain detailed information about the case proceedings.',
      documents: [
        { name: 'Affidavit of Support', date: '2024-01-15' },
        { name: 'Motion to Dismiss', date: '2024-03-22' },
        { name: 'Witness Statement', date: '2024-05-10' },
      ]
    }
    setCaseDetails(mockCaseData)
  }

  const renderStep3 = () => (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="heading-lg text-foreground">Search Case in {selectedCourt?.name || 'Selected Court'}</h2>
        <p className="text-muted-foreground">Enter the case ID to view case details</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <Input
            placeholder="Enter Case ID (e.g., FHC/ABJ/CS/123/2024)"
            className="flex-1"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
          />
          <Button 
            onClick={handleSearchCase}
            disabled={!caseId}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Search Case
          </Button>
        </div>

        {caseDetails && (
          <CaseDetails />
        )}
      </div>

      <div className="flex justify-between max-w-6xl mx-auto">
        <Button variant="outline" onClick={() => setCurrentStep(2)} size="lg" className="px-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Court Selection
        </Button>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="heading-lg text-foreground">Courts in {selectedState}</h2>
          <p className="text-muted-foreground">{sampleCourts.length} courts found</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search courts..."
              className="pl-10 bg-card border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sampleCourts.map((court) => (
          <Card key={court.id} className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg">{court.name}</CardTitle>
                    {court.verified && (
                      <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-400 border-green-500/20">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {court.type}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(court.id)}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Star className={`h-4 w-4 ${favorites.includes(court.id) ? "fill-current text-primary" : ""}`} />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{court.address}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{court.phone}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{court.hours}</span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Specializations:</p>
                <div className="flex flex-wrap gap-1">
                  {court.specializations.map((spec) => (
                    <Badge key={spec} variant="outline" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    {court.rating}
                  </span>
                  <span>{court.distance}</span>
                  {court.onlineServices && (
                    <Badge variant="secondary" className="text-xs">
                      Online Services
                    </Badge>
                  )}
                </div>

                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" onClick={() => setCurrentStep(1)} size="lg">
          Start New Search
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container-padding-x section-padding-y">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
      </div>
    </div>
  )
}
