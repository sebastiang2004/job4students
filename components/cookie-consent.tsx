"use client"

import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface CookieSettings {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  // State for settings
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  })

  // State to control banner visibility - completely separate from dialog
  const [bannerVisible, setBannerVisible] = useState(false)

  // Check for existing consent when component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasConsent = localStorage.getItem("cookieConsent")

      // If no consent exists, show the banner automatically
      if (!hasConsent) {
        console.log("Showing banner automatically - no consent exists")
        setBannerVisible(true)
      }
    }
  }, [])

  // Also update visibility when open prop changes (for manual triggering if needed)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasConsent = localStorage.getItem("cookieConsent")

      // If no consent exists and it's triggered to open, show it
      if (!hasConsent && open) {
        console.log("Showing banner - triggered manually")
        setBannerVisible(true)
      }
    }
  }, [open])

  // Function to handle accepting all cookies
  const handleAcceptAll = () => {
    console.log("Accept All clicked")
    localStorage.setItem("cookieConsent", "all")
    setBannerVisible(false)
    onOpenChange(false)
  }

  // Function to handle rejecting non-necessary cookies
  const handleRejectAll = () => {
    console.log("Reject All clicked")
    localStorage.setItem("cookieConsent", "necessary")
    setBannerVisible(false)
    onOpenChange(false)
  }

  // Function to handle saving custom preferences
  const handleSavePreferences = () => {
    console.log("Save Preferences clicked")
    localStorage.setItem("cookieConsent", JSON.stringify(settings))
    setBannerVisible(false)
    onOpenChange(false)
  }

  // If banner is not visible, don't render it at all
  return (
    <>
      {/* Banner - only render if visible */}
      {bannerVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg">
          <div className="container mx-auto p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-theme-purple" />
                <h3 className="text-lg font-semibold">Cookie Consent</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  type="button"
                  className="flex-1 min-w-[80px]"
                >
                  Reject All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onOpenChange(true)}
                  type="button"
                  className="flex-1 min-w-[80px]"
                >
                  Customize
                </Button>
                <Button
                  size="sm"
                  className="bg-theme-purple hover:bg-theme-blue text-white flex-1 min-w-[80px]"
                  onClick={handleAcceptAll}
                  type="button"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings dialog */}
      <Dialog
        open={open}
        onOpenChange={(newOpen) => {
          onOpenChange(newOpen)
          if (!newOpen) setBannerVisible(false)
        }}
      >
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-theme-purple" />
              Cookie Settings
            </DialogTitle>
            <DialogDescription>
              Customize your cookie preferences. Some cookies are necessary for the website to function properly.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="privacy" className="space-y-4 py-4">
              <div className="text-sm space-y-4">
                <p>
                  We use cookies to ensure the website functions properly, to personalize content and ads, to provide
                  social media features, and to analyze our traffic.
                </p>
                <p>
                  You can choose to accept or reject cookies. Necessary cookies help make a website usable by enabling
                  basic functions like page navigation and access to secure areas of the website.
                </p>
                <p>
                  For more information, please read our{" "}
                  <a href="/cookies" className="text-theme-purple hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="space-y-4 py-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="necessary" className="text-base">
                      Necessary
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Required for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <Switch id="necessary" checked={settings.necessary} disabled={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="functional" className="text-base">
                      Functional
                    </Label>
                    <p className="text-sm text-muted-foreground">Enables enhanced functionality and personalization.</p>
                  </div>
                  <Switch
                    id="functional"
                    checked={settings.functional}
                    onCheckedChange={(checked) => setSettings({ ...settings, functional: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="analytics" className="text-base">
                      Analytics
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Helps us understand how visitors interact with the website.
                    </p>
                  </div>
                  <Switch
                    id="analytics"
                    checked={settings.analytics}
                    onCheckedChange={(checked) => setSettings({ ...settings, analytics: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing" className="text-base">
                      Marketing
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Used to track visitors across websites for advertising purposes.
                    </p>
                  </div>
                  <Switch
                    id="marketing"
                    checked={settings.marketing}
                    onCheckedChange={(checked) => setSettings({ ...settings, marketing: checked })}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" onClick={handleRejectAll} className="w-full sm:w-auto" type="button">
              Reject All
            </Button>
            <Button variant="outline" size="sm" onClick={handleAcceptAll} className="w-full sm:w-auto" type="button">
              Accept All
            </Button>
            <Button
              size="sm"
              className="bg-theme-purple hover:bg-theme-blue text-white w-full sm:w-auto"
              onClick={handleSavePreferences}
              type="button"
            >
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

