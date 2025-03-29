"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function JobFilters() {
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input id="search" placeholder="Job title or keyword" />
        </div>

        <div className="space-y-2">
          <Label>Job Type</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="part-time" />
              <Label htmlFor="part-time" className="font-normal">
                Part-time
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="full-time" />
              <Label htmlFor="full-time" className="font-normal">
                Full-time
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="internship" />
              <Label htmlFor="internship" className="font-normal">
                Internship
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remote" />
              <Label htmlFor="remote" className="font-normal">
                Remote
              </Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select>
            <SelectTrigger id="location">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bucharest">Bucharest</SelectItem>
              <SelectItem value="cluj">Cluj-Napoca</SelectItem>
              <SelectItem value="timisoara">Timisoara</SelectItem>
              <SelectItem value="iasi">Iasi</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="university">University/School</Label>
          <Select>
            <SelectTrigger id="university">
              <SelectValue placeholder="Select university" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="bucharest">University of Bucharest</SelectItem>
              <SelectItem value="ase">Academy of Economic Studies</SelectItem>
              <SelectItem value="politehnica">Politehnica University</SelectItem>
              <SelectItem value="medicine">University of Medicine</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Industry</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="tech" />
              <Label htmlFor="tech" className="font-normal">
                Technology
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="finance" />
              <Label htmlFor="finance" className="font-normal">
                Finance
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="healthcare" />
              <Label htmlFor="healthcare" className="font-normal">
                Healthcare
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="education" />
              <Label htmlFor="education" className="font-normal">
                Education
              </Label>
            </div>
          </div>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}

