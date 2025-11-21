import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export function UpperGIBleedPage() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const cases = [
    {
      id: 1,
      presentation: 'Hematemesis with history of cirrhosis',
      bp: '92/58',
      hr: '118',
      labs: { hgb: '8.2', bun: '45', creatinine: '1.1' },
      type: 'variceal',
      explanation: 'History of cirrhosis + hypotension + hematemesis strongly suggests variceal bleeding. Elevated BUN with normal creatinine (BUN:Cr ratio >20) also suggests upper GI source.',
    },
    {
      id: 2,
      presentation: 'Melena with NSAID use',
      bp: '128/76',
      hr: '88',
      labs: { hgb: '10.5', bun: '32', creatinine: '1.0' },
      type: 'non-variceal',
      explanation: 'NSAID use, stable vitals, and melena suggest peptic ulcer disease (non-variceal). No stigmata of liver disease.',
    },
    {
      id: 3,
      presentation: 'Coffee-ground emesis with alcohol abuse history',
      bp: '86/52',
      hr: '124',
      labs: { hgb: '7.8', bun: '52', creatinine: '1.2', plt: '92' },
      type: 'variceal',
      explanation: 'Alcohol abuse + thrombocytopenia (suggesting portal hypertension) + hemodynamic instability points to variceal bleeding.',
    },
    {
      id: 4,
      presentation: 'Black tarry stools with epigastric pain',
      bp: '118/72',
      hr: '92',
      labs: { hgb: '11.2', bun: '28', creatinine: '0.9' },
      type: 'non-variceal',
      explanation: 'Epigastric pain + melena without stigmata of chronic liver disease suggests peptic ulcer (non-variceal).',
    },
  ];

  const handleCaseSelect = (caseId: number) => {
    setSelectedCase(caseId);
    setShowResult(false);
  };

  const handleClassify = (classification: 'variceal' | 'non-variceal') => {
    setShowResult(true);
    const currentCase = cases.find(c => c.id === selectedCase);
    if (currentCase && currentCase.type === classification) {
      return true;
    }
    return false;
  };

  const currentCase = cases.find(c => c.id === selectedCase);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Upper GI Bleed</h1>
        <p className="text-lg text-muted-foreground">
          Master the differentiation between variceal and non-variceal bleeding,
          risk stratification, and initial management
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Presentation</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Hematemesis</Badge>
              <Badge>Melena</Badge>
              <Badge>Coffee-ground emesis</Badge>
              <Badge>Hemodynamic instability</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Key Differentiators</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-red-500 mb-2">Variceal Bleeding</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• History of cirrhosis/portal hypertension</li>
                  <li>• Stigmata of liver disease</li>
                  <li>• Thrombocytopenia</li>
                  <li>• Often hemodynamically unstable</li>
                  <li>• Higher mortality risk</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium text-blue-500 mb-2">Non-Variceal Bleeding</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• NSAID/anticoagulant use</li>
                  <li>• H. pylori infection</li>
                  <li>• Epigastric pain (PUD)</li>
                  <li>• No liver disease history</li>
                  <li>• Often more stable initially</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Tool: Variceal Sorter */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Tool: Variceal vs Non-Variceal Sorter</CardTitle>
          <CardDescription>
            Practice distinguishing variceal from non-variceal bleeding patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {cases.map((caseItem) => (
              <button
                key={caseItem.id}
                onClick={() => handleCaseSelect(caseItem.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedCase === caseItem.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-muted-foreground'
                }`}
              >
                <div className="font-medium mb-2">Case {caseItem.id}</div>
                <div className="text-sm text-muted-foreground mb-2">
                  {caseItem.presentation}
                </div>
                <div className="text-xs space-y-1">
                  <div>BP: {caseItem.bp} | HR: {caseItem.hr}</div>
                  <div>Hgb: {caseItem.labs.hgb} | BUN: {caseItem.labs.bun}</div>
                </div>
              </button>
            ))}
          </div>

          {selectedCase && currentCase && (
            <div className="space-y-4 pt-4 border-t">
              <div className="flex gap-4">
                <Button
                  onClick={() => handleClassify('variceal')}
                  variant="destructive"
                  disabled={showResult}
                >
                  Variceal
                </Button>
                <Button
                  onClick={() => handleClassify('non-variceal')}
                  variant="primary"
                  disabled={showResult}
                >
                  Non-Variceal
                </Button>
                {showResult && (
                  <Button
                    onClick={() => {
                      setSelectedCase(null);
                      setShowResult(false);
                    }}
                    variant="outline"
                  >
                    Next Case
                  </Button>
                )}
              </div>

              {showResult && (
                <Alert>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle>
                    {currentCase.type === 'variceal' ? 'Variceal Bleeding' : 'Non-Variceal Bleeding'}
                  </AlertTitle>
                  <AlertDescription>{currentCase.explanation}</AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Risk Stratification */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Stratification</CardTitle>
          <CardDescription>
            Understanding risk assessment in upper GI bleeding
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-3">Glasgow-Blatchford Score (Conceptual)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Used to identify patients at low risk who may be suitable for outpatient management.
              Considers hemoglobin, BUN, vital signs, and clinical presentation.
            </p>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Score of 0-1: Low risk, may be suitable for outpatient management. Higher scores
                indicate need for hospitalization and intervention.
              </AlertDescription>
            </Alert>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-3">Rockall Score (Conceptual)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Predicts mortality risk based on age, shock, comorbidities, endoscopic diagnosis,
              and stigmata of recent hemorrhage.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Initial Management */}
      <Card>
        <CardHeader>
          <CardTitle>Initial Stabilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">1</div>
              <div>
                <div className="font-medium">ABC Assessment</div>
                <div className="text-sm text-muted-foreground">
                  Airway, breathing, circulation - ensure patient stability
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">2</div>
              <div>
                <div className="font-medium">IV Access</div>
                <div className="text-sm text-muted-foreground">
                  Two large-bore IVs for resuscitation and blood products
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">3</div>
              <div>
                <div className="font-medium">Fluid Resuscitation</div>
                <div className="text-sm text-muted-foreground">
                  Goal: maintain hemodynamic stability, avoid over-resuscitation
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">4</div>
              <div>
                <div className="font-medium">Medication (Educational)</div>
                <div className="text-sm text-muted-foreground">
                  Variceal: Octreotide | Non-variceal: PPI (conceptual only)
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <div className="font-bold text-primary">5</div>
              <div>
                <div className="font-medium">Endoscopy Timing</div>
                <div className="text-sm text-muted-foreground">
                  Emergent (&lt;12 hrs) for high-risk patients; within 24 hrs for most others
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points */}
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Key Clinical Pitfalls</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Don't miss variceal bleeding clues (cirrhosis history, portal hypertension signs)</li>
            <li>• BUN:Cr ratio &gt;20 suggests upper GI source</li>
            <li>• Hemodynamic instability requires immediate resuscitation</li>
            <li>• Consider rebleeding risk when planning endoscopy timing</li>
            <li>• Always assess for ongoing bleeding vs hemodynamically stable</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
