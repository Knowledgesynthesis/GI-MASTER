import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Droplet,
  Activity,
  Pill,
  Dna,
  HeartPulse,
  Stethoscope,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

export function HomePage() {
  const modules = [
    {
      title: 'Upper GI Bleed',
      description: 'Variceal vs non-variceal differentiation, risk stratification, and management',
      icon: Droplet,
      href: '/modules/upper-gi-bleed',
      color: 'text-red-500',
      badge: 'Emergency',
    },
    {
      title: 'Lower GI Bleed',
      description: 'Hematochezia differential, diverticular bleeding, and imaging pathways',
      icon: Activity,
      href: '/modules/lower-gi-bleed',
      color: 'text-orange-500',
      badge: 'Emergency',
    },
    {
      title: 'Pancreatitis',
      description: 'Acute & chronic pancreatitis: diagnosis, severity scoring, and complications',
      icon: AlertTriangle,
      href: '/modules/pancreatitis',
      color: 'text-yellow-500',
      badge: 'Emergency',
    },
    {
      title: 'H. pylori & PUD',
      description: 'Peptic ulcer disease, H. pylori testing interpretation, and management',
      icon: Pill,
      href: '/modules/h-pylori',
      color: 'text-blue-500',
      badge: 'Chronic',
    },
    {
      title: 'Inflammatory Bowel Disease',
      description: 'UC vs Crohn differentiation, pattern recognition, and complications',
      icon: Dna,
      href: '/modules/ibd',
      color: 'text-purple-500',
      badge: 'Chronic',
    },
    {
      title: 'Hepatic Failure',
      description: 'Acute liver failure, LFT patterns, coagulopathy, and encephalopathy',
      icon: HeartPulse,
      href: '/modules/hepatic-failure',
      color: 'text-pink-500',
      badge: 'Emergency',
    },
    {
      title: 'Gallstone Disease',
      description: 'Cholelithiasis, cholecystitis, cholangitis: RUQ pain triage',
      icon: Stethoscope,
      href: '/modules/gallstone',
      color: 'text-green-500',
      badge: 'Emergency',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to GI Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master GI emergencies and chronic disease management through interactive learning,
          case simulations, and evidence-based algorithms
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <Badge variant="secondary">Mobile-First</Badge>
          <Badge variant="secondary">Offline Capable</Badge>
          <Badge variant="secondary">Evidence-Based</Badge>
          <Badge variant="secondary">Interactive</Badge>
        </div>
      </div>

      {/* Modules Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link key={module.href} to={module.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-muted ${module.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant={module.badge === 'Emergency' ? 'destructive' : 'secondary'}>
                        {module.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        <Link to="/assessment">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Assessment Center</CardTitle>
              <CardDescription>
                Test your knowledge with MCQs and case-based questions
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link to="/glossary">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">GI Glossary</CardTitle>
              <CardDescription>
                Comprehensive terminology and definitions
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link to="/settings">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="text-lg">Settings</CardTitle>
              <CardDescription>
                Customize your learning experience
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="bg-muted p-6 rounded-lg text-center text-sm text-muted-foreground">
        <p className="font-medium mb-2">Educational Purpose Only</p>
        <p>
          This application is designed for educational purposes and uses synthetic clinical data.
          It is not intended for clinical decision-making or patient care.
          Always consult clinical guidelines and supervising physicians for patient management.
        </p>
      </div>
    </div>
  );
}
