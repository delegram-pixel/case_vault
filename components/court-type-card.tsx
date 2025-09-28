"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface CourtTypeCardProps {
  id: string
  name: string
  description: string
  icon: string
  features: string[]
  isSelected: boolean
  onClick: () => void
}

export function CourtTypeCard({ id, name, description, icon, features, isSelected, onClick }: CourtTypeCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] border-2 group ${
        isSelected
          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
          : "border-border hover:border-primary/50 hover:shadow-md"
      }`}
      onClick={onClick}
    >
      <CardHeader className="text-center relative">
        {isSelected && (
          <div className="absolute top-4 right-4">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
        )}
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">{icon}</div>
        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">{name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Handles:</p>
          <div className="flex flex-wrap gap-1">
            {features.map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
