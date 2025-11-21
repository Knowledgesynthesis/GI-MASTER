import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export function LowerGIBleedPage() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const scenarios = [
    {
      id: 'diverticular',
      name: 'Diverticular Bleeding',
      presentation: 'Sudden painless hematochezia in elderly patient',
      features: ['Painless', 'Brisk bleeding', 'Common in elderly', 'Self-limited in 80%'],
      imaging: 'CT angiography if active bleeding; colonoscopy when stable',
    },
    {
      id: 'ischemic',
      name: 'Ischemic Colitis',
      presentation: 'Abdominal pain followed by bloody diarrhea',
      features: ['Crampy abdominal pain', 'Bloody diarrhea', 'Elderly/vascular disease', 'Left colon common'],
      imaging: 'CT showing colonic wall thickening; colonoscopy shows mucosal changes',
    },
    {
      id: 'angiodysplasia',
      name: 'Angiodysplasia',
      presentation: 'Recurrent episodes of hematochezia',
      features: ['Recurrent bleeding', 'Elderly', 'Right colon typical', 'Associated with CKD/AS'],
      imaging: 'Colonoscopy for diagnosis and treatment',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Lower GI Bleed</h1>
        <p className="text-lg text-muted-foreground">
          Learn to navigate the differential diagnosis and imaging pathways for hematochezia
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Common Causes</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Diverticular bleeding</Badge>
              <Badge>Ischemic colitis</Badge>
              <Badge>Angiodysplasia</Badge>
              <Badge>Hemorrhoids</Badge>
              <Badge>IBD</Badge>
              <Badge>Polyps/cancer</Badge>
            </div>
          </div>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Remember: 10-15% of patients with hematochezia actually have an upper GI source!
              Consider upper endoscopy if NG lavage shows blood or patient is unstable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive: Lower GI Bleed Pathways</CardTitle>
          <CardDescription>
            Explore different causes and their diagnostic approaches
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedScenario === scenario.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-muted-foreground'
                }`}
              >
                <div className="font-medium mb-2">{scenario.name}</div>
                <div className="text-sm text-muted-foreground">
                  {scenario.presentation}
                </div>
              </button>
            ))}
          </div>

          {selectedScenario && (
            <div className="pt-4 border-t space-y-4">
              {scenarios.filter(s => s.id === selectedScenario).map(scenario => (
                <div key={scenario.id} className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Clinical Features</h3>
                    <ul className="space-y-1">
                      {scenario.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Imaging Approach</h3>
                    <p className="text-sm">{scenario.imaging}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Diagnostic Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">1</div>
              <div>
                <div className="font-medium">Assess Hemodynamic Stability</div>
                <div className="text-sm text-muted-foreground">
                  Vital signs, orthostatics, signs of shock
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">2</div>
              <div>
                <div className="font-medium">Rule Out Upper GI Source</div>
                <div className="text-sm text-muted-foreground">
                  NG lavage if unstable or concerning features
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">3</div>
              <div>
                <div className="font-medium">CT Angiography</div>
                <div className="text-sm text-muted-foreground">
                  If active bleeding suspected (requires bleeding rate &gt;0.5 mL/min)
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">4</div>
              <div>
                <div className="font-medium">Colonoscopy</div>
                <div className="text-sm text-muted-foreground">
                  Preferred when patient is stable; both diagnostic and therapeutic
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Key Clinical Pitfalls</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Don't assume all hematochezia is from lower GI source</li>
            <li>• Painless bleeding suggests diverticular or angiodysplasia</li>
            <li>• Pain with bleeding suggests ischemic colitis or IBD</li>
            <li>• Most lower GI bleeds stop spontaneously</li>
            <li>• Consider CT angio only if actively bleeding</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
