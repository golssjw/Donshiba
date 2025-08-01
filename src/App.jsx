import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Crown, Shield, Users, TrendingUp, Lock, Zap, Target, Star } from 'lucide-react'
import donShibaLogo from './assets/donshiba_logo.png'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tokenomics', 'roadmap']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen mobster-bg text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={donShibaLogo} alt="DonShiba Logo" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold gold-accent">DonShiba</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Tokenomics', 'Roadmap'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="hover-glow">Join the Family</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 cigar-smoke">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <img 
                src={donShibaLogo} 
                alt="DonShiba Logo" 
                className="w-32 h-32 mx-auto rounded-full hover-glow mb-6"
              />
              <Badge variant="outline" className="mb-4 mafia-border">
                <Crown className="w-4 h-4 mr-2" />
                The Godfather of Meme Coins
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gold-accent">
              DonShiba
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              <span className="font-semibold">$DSBA</span> - Making Offers You Can't Refuse
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              From the streets to the moon. Join the most powerful family in crypto, 
              where loyalty is rewarded and the hustle never stops.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="hover-glow pinstripe-pattern">
                <Zap className="w-5 h-5 mr-2" />
                Buy $DSBA
              </Button>
              <Button size="lg" variant="outline" className="hover-glow">
                <Users className="w-5 h-5 mr-2" />
                Join Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gold-accent">About the Family</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              DonShiba combines the gritty power dynamics of The Sopranos with the viral energy 
              of meme culture, creating a crypto empire built on loyalty and ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-glow">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>FAIRLUNCH Promise</CardTitle>
                <CardDescription>
                  No pre-sales, no insider deals. Every family member gets an equal shot at success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-glow">
              <CardHeader>
                <Crown className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Mobster Vibes</CardTitle>
                <CardDescription>
                  Inspired by The Sopranos and Scarface, bringing sophisticated power to meme coins.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-glow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Community First</CardTitle>
                <CardDescription>
                  Built by the community, for the community. Your voice matters in this family.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gold-accent">The Numbers Game</h2>
            <p className="text-xl text-muted-foreground">
              Smart tokenomics designed for sustainable growth and community rewards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                  Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Public Distribution</span>
                  <Badge variant="secondary">70%</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span>Liquidity Pool</span>
                  <Badge variant="secondary">20%</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span>Development</span>
                  <Badge variant="secondary">5%</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span>Marketing</span>
                  <Badge variant="secondary">3%</Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span>Team</span>
                  <Badge variant="secondary">2%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-6 h-6 mr-2 text-primary" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Liquidity Permanently Locked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Contract Audited & Verified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Anti-Bot Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Transparent Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Community Governance</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl gold-accent">Total Supply</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">
                  1,000,000,000 $DSBA
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gold-accent">The Master Plan</h2>
            <p className="text-xl text-muted-foreground">
              Building a decentralized empire, one phase at a time
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover-glow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-primary text-primary-foreground">Phase 1</Badge>
                  <CardTitle>Foundation & Launch</CardTitle>
                </div>
                <CardDescription>Q3 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span>Smart Contract Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span>Security Audits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span>FAIRLUNCH Event</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span>Community Building</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline">Phase 2</Badge>
                  <CardTitle>Ecosystem Expansion</CardTitle>
                </div>
                <CardDescription>Q4 2025 - Q1 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>Strategic Partnerships</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>NFT Collection Launch</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>Staking Platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>Community Governance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline">Phase 3</Badge>
                  <CardTitle>Decentralized Empire</CardTitle>
                </div>
                <CardDescription>Q2 2026 onwards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>CEX Listings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>DonShiba DAO</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>Metaverse Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <span>Global Expansion</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card/50 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={donShibaLogo} alt="DonShiba Logo" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold gold-accent">DonShiba</span>
          </div>
          <p className="text-muted-foreground mb-6">
            "The Family You Can Trust in Crypto"
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="sm">Telegram</Button>
            <Button variant="ghost" size="sm">Twitter</Button>
            <Button variant="ghost" size="sm">Discord</Button>
            <Button variant="ghost" size="sm">Medium</Button>
          </div>
          <Separator className="mb-6" />
          <p className="text-sm text-muted-foreground">
            © 2025 DonShiba. All rights reserved. | Built by the community, for the community.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

