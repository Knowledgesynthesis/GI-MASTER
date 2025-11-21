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
  AlertTriangle
} from 'lucide-react';

export function ModulesPage() {
  const modules = [
    {
      title: 'Upper GI Bleed',
      description: 'Learn to distinguish variceal from non-variceal bleeding, apply risk stratification tools, and understand initial stabilization protocols.',
      icon: Droplet,
      href: '/modules/upper-gi-bleed',
      color: 'text-red-500',
      topics: ['Hematemesis', 'Melena', 'Variceal bleeding', 'Risk scoring'],
    },
    {
      title: 'Lower GI Bleed',
      description: 'Explore hematochezia differential diagnosis, diverticular bleeding patterns, and imaging decision pathways.',
      icon: Activity,
      href: '/modules/lower-gi-bleed',
      color: 'text-orange-500',
      topics: ['Hematochezia', 'Diverticular bleeding', 'Ischemic colitis', 'Angiodysplasia'],
    },
    {
      title: 'Pancreatitis',
      description: 'Master diagnostic criteria, severity prediction, and complication recognition for both acute and chronic pancreatitis.',
      icon: AlertTriangle,
      href: '/modules/pancreatitis',
      color: 'text-yellow-500',
      topics: ['Acute pancreatitis', 'Chronic pancreatitis', 'Severity scoring', 'Complications'],
    },
    {
      title: 'H. pylori & PUD',
      description: 'Understand peptic ulcer disease pathophysiology, H. pylori testing strategies, and treatment approaches.',
      icon: Pill,
      href: '/modules/h-pylori',
      color: 'text-blue-500',
      topics: ['Peptic ulcers', 'H. pylori testing', 'Complications', 'Treatment'],
    },
    {
      title: 'Inflammatory Bowel Disease',
      description: 'Differentiate UC from Crohn disease using clinical patterns, endoscopic findings, and extraintestinal manifestations.',
      icon: Dna,
      href: '/modules/ibd',
      color: 'text-purple-500',
      topics: ['Ulcerative colitis', 'Crohn disease', 'Pattern recognition', 'Complications'],
    },
    {
      title: 'Hepatic Failure',
      description: 'Recognize acute liver failure, interpret LFT patterns, and identify prognostic indicators.',
      icon: HeartPulse,
      href: '/modules/hepatic-failure',
      color: 'text-pink-500',
      topics: ['Acute liver failure', 'LFT patterns', 'Coagulopathy', 'Encephalopathy'],
    },
    {
      title: 'Gallstone Disease',
      description: 'Navigate RUQ pain differential, from simple cholelithiasis to life-threatening cholangitis.',
      icon: Stethoscope,
      href: '/modules/gallstone',
      color: 'text-green-500',
      topics: ['Cholelithiasis', 'Cholecystitis', 'Cholangitis', 'Imaging'],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Learning Modules</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive modules covering GI emergencies and chronic disease management
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link key={module.href} to={module.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted ${module.color} flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
