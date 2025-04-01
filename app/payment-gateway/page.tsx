"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, Wallet, Smartphone, Building, RefreshCw, CheckCircle, XCircle } from "lucide-react"

// Payment method type
type PaymentMethod = {
  id: string
  name: string
  icon: React.ElementType
  description: string
}

// Payment methods
const paymentMethods: PaymentMethod[] = [
  {
    id: "credit-card",
    name: "Credit / Debit Card",
    icon: CreditCard,
    description: "Pay securely with your credit or debit card.",
  },
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    icon: Building,
    description: "Make a direct transfer from your bank account.",
  },
  {
    id: "mobile-payment",
    name: "Mobile Payment",
    icon: Smartphone,
    description: "Pay using your mobile payment app.",
  },
  {
    id: "e-wallet",
    name: "E-Wallet",
    icon: Wallet,
    description: "Use your digital wallet for quick payment.",
  },
]

export default function PaymentGatewayPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit-card")
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  // Simulate payment processing
  const handlePayment = () => {
    setPaymentStatus("processing")

    // Simulate payment processing delay
    setTimeout(() => {
      // 90% chance of success
      const isSuccess = Math.random() < 0.9
      setPaymentStatus(isSuccess ? "success" : "error")
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-theme-purple to-theme-blue text-white">
                <CardTitle className="text-2xl">Payment Gateway</CardTitle>
                <CardDescription className="text-white/80">Complete your payment securely</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Payment Status Alerts */}
                {paymentStatus === "processing" && (
                  <Alert className="bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <AlertTitle>Processing Payment</AlertTitle>
                    <AlertDescription>Please wait while we process your payment...</AlertDescription>
                  </Alert>
                )}

                {paymentStatus === "success" && (
                  <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Payment Successful</AlertTitle>
                    <AlertDescription>Your payment has been processed successfully.</AlertDescription>
                  </Alert>
                )}

                {paymentStatus === "error" && (
                  <Alert className="bg-red-50 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800">
                    <XCircle className="h-4 w-4" />
                    <AlertTitle>Payment Failed</AlertTitle>
                    <AlertDescription>There was an error processing your payment. Please try again.</AlertDescription>
                  </Alert>
                )}

                {/* Payment Method Selection */}
                <div className="space-y-2">
                  <Label>Select Payment Method</Label>
                  <RadioGroup
                    defaultValue={selectedPaymentMethod}
                    onValueChange={setSelectedPaymentMethod}
                    className="grid grid-cols-2 gap-4"
                  >
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label htmlFor={method.id} className="flex items-center gap-2 cursor-pointer">
                          {method.icon && <method.icon className="h-4 w-4" />}
                          {method.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Credit Card Form */}
                {selectedPaymentMethod === "credit-card" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                  </div>
                )}

                {/* Bank Transfer Form */}
                {selectedPaymentMethod === "bank-transfer" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="bank-name">Bank Name</Label>
                      <Input id="bank-name" placeholder="Your Bank" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-number">Account Number</Label>
                      <Input id="account-number" placeholder="Your account number" />
                    </div>
                  </div>
                )}

                {/* Mobile Payment Form */}
                {selectedPaymentMethod === "mobile-payment" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone-number">Phone Number</Label>
                      <Input id="phone-number" placeholder="+40 123 456 789" />
                    </div>
                  </div>
                )}

                {/* E-Wallet Form */}
                {selectedPaymentMethod === "e-wallet" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="wallet-id">E-Wallet ID</Label>
                      <Input id="wallet-id" placeholder="Your wallet ID" />
                    </div>
                  </div>
                )}

                {/* Payment Details */}
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>€49.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>€9.50</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>€59.49</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50">
                <Button className="w-full" onClick={handlePayment} disabled={paymentStatus === "processing"}>
                  {paymentStatus === "processing" ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Pay Securely
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

