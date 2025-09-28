"use client"

import { useState } from "react"
import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface LocationSelectorProps {
  selectedState: string
  selectedLGA: string
  onStateChange: (state: string) => void
  onLGAChange: (lga: string) => void
}

const nigerianStates = [
  { name: "Lagos", lgas: ["Ikeja", "Lagos Island", "Surulere", "Alimosho", "Oshodi-Isolo", "Mushin"] },
  { name: "Abuja (FCT)", lgas: ["Municipal", "Gwagwalada", "Kuje", "Abaji", "Bwari", "Kwali"] },
  { name: "Kano", lgas: ["Kano Municipal", "Fagge", "Dala", "Gwale", "Tarauni", "Nassarawa"] },
  { name: "Rivers", lgas: ["Port Harcourt", "Obio-Akpor", "Okrika", "Ogu–Bolo", "Eleme", "Tai"] },
  { name: "Oyo", lgas: ["Ibadan North", "Ibadan South-West", "Egbeda", "Akinyele", "Lagelu", "Ona Ara"] },
  { name: "Kaduna", lgas: ["Kaduna North", "Kaduna South", "Chikun", "Igabi", "Ikara", "Jaba"] },
]

export function LocationSelector({ selectedState, selectedLGA, onStateChange, onLGAChange }: LocationSelectorProps) {
  const [useCurrentLocation, setUseCurrentLocation] = useState(false)

  const selectedStateData = nigerianStates.find((state) => state.name.toLowerCase() === selectedState)

  const handleUseCurrentLocation = () => {
    setUseCurrentLocation(true)
    // In a real app, you'd use geolocation API here
    onStateChange("lagos")
    onLGAChange("ikeja")
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 border-dashed border-primary/30">
        <CardHeader className="text-center">
          <Navigation className="h-8 w-8 text-primary mx-auto mb-2" />
          <CardTitle className="text-lg">Quick Location</CardTitle>
          <CardDescription>Use your current location for faster results</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleUseCurrentLocation}
            variant="outline"
            className="w-full border-primary/50 hover:bg-primary/5 bg-transparent"
            disabled={useCurrentLocation}
          >
            <MapPin className="h-4 w-4 mr-2" />
            {useCurrentLocation ? "Location Detected" : "Use Current Location"}
          </Button>
        </CardContent>
      </Card>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or select manually</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            State
          </label>
          <Select value={selectedState} onValueChange={onStateChange}>
            <SelectTrigger className="bg-card border-border h-12">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {nigerianStates.map((state) => (
                <SelectItem key={state.name} value={state.name.toLowerCase()}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Local Government Area</label>
          <Select value={selectedLGA} onValueChange={onLGAChange} disabled={!selectedState}>
            <SelectTrigger className="bg-card border-border h-12">
              <SelectValue placeholder="Select LGA" />
            </SelectTrigger>
            <SelectContent>
              {selectedStateData?.lgas.map((lga) => (
                <SelectItem key={lga} value={lga.toLowerCase().replace(/\s+/g, "-")}>
                  {lga}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
