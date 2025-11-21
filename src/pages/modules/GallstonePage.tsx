import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export function GallstonePage() {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const conditions = [
    {
      id: 'cholelithiasis',
      name: 'Cholelithiasis (Biliary Colic)',
      presentation: 'Intermittent RUQ pain after fatty meals',
      fever: 'Absent',
      labs: 'Normal LFTs, normal WBC',
      imaging: 'Ultrasound: gallstones, no wall thickening',
      severity: 'Mild - outpatient management',
      management: 'Elective cholecystectomy if symptomatic',
    },
    {
      id: 'cholecystitis',
      name: 'Acute Cholecystitis',
      presentation: 'Persistent RUQ pain, Murphy sign positive',
      fever: 'Present',
      labs: 'Leukocytosis, mild LFT elevation',
      imaging: 'Ultrasound: stones + wall thickening + pericholecystic fluid',
      severity: 'Moderate - requires hospitalization',
      management: 'NPO, antibiotics, cholecystectomy within 72 hours',
    },
    {
      id: 'cholangitis',
      name: 'Acute Cholangitis',
      presentation: 'Charcot triad: RUQ pain + fever + jaundice',
      fever: 'High fever/rigors',
      labs: 'Elevated bili, ALP, WBC; +/- transaminitis',
      imaging: 'Ultrasound/MRCP: bile duct dilation, stone in CBD',
      severity: 'Severe - potentially life-threatening',
      management: 'Antibiotics + urgent ERCP for decompression',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Gallstone Disease</h1>
        <p className="text-lg text-muted-foreground">
          Navigate RUQ pain from benign biliary colic to life-threatening cholangitis
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>The Spectrum of Gallstone Disease</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">Cholelithiasis</h3>
                <Badge variant="secondary">Benign</Badge>
              </div>
              <p className="text-sm">Gallstones without inflammation - intermittent biliary colic</p>
            </div>
            <div className="flex justify-center text-muted-foreground">↓</div>
            <div className="p-4 border-l-4 border-yellow-500 bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">Acute Cholecystitis</h3>
                <Badge variant="destructive">Moderate</Badge>
              </div>
              <p className="text-sm">Gallbladder inflammation - persistent pain, fever, Murphy sign</p>
            </div>
            <div className="flex justify-center text-muted-foreground">↓</div>
            <div className="p-4 border-l-4 border-red-500 bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">Acute Cholangitis</h3>
                <Badge variant="destructive">Severe</Badge>
              </div>
              <p className="text-sm">Bile duct infection - Charcot triad, requires urgent intervention</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive: RUQ Pain Triage</CardTitle>
          <CardDescription>
            Differentiate gallstone-related conditions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {conditions.map((condition) => (
              <button
                key={condition.id}
                onClick={() => setSelectedCondition(condition.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedCondition === condition.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-muted-foreground'
                }`}
              >
                <div className="font-medium mb-2">{condition.name}</div>
                <div className="text-sm text-muted-foreground">
                  {condition.presentation}
                </div>
              </button>
            ))}
          </div>

          {selectedCondition && (
            <div className="pt-4 border-t space-y-4">
              {conditions.filter(c => c.id === selectedCondition).map(condition => (
                <div key={condition.id} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-1">Clinical Presentation</div>
                        <div className="text-sm">{condition.presentation}</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-1">Fever</div>
                        <div className="text-sm">{condition.fever}</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-1">Laboratory</div>
                        <div className="text-sm">{condition.labs}</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-1">Imaging</div>
                        <div className="text-sm">{condition.imaging}</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-1">Severity</div>
                        <div className="text-sm">{condition.severity}</div>
                      </div>
                      <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                        <div className="text-sm font-medium mb-1 text-primary">Management</div>
                        <div className="text-sm">{condition.management}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Charcot Triad & Reynolds Pentad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-3 text-yellow-600">Charcot Triad (Cholangitis)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span><strong>RUQ pain</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Fever</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Jaundice</strong></span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                Present in 50-70% of cholangitis cases
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-3 text-red-600">Reynolds Pentad (Severe)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Charcot triad</strong> (above 3)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Altered mental status</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Hypotension/shock</strong></span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                Indicates severe sepsis from cholangitis
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Murphy Sign</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Technique:</strong> Place hand below right costal margin, ask patient to
              take deep breath. Positive if patient stops breathing in due to pain as inflamed
              gallbladder descends and touches examiner's hand. Highly specific for acute cholecystitis.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Imaging Approach</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-medium mb-1">Right Upper Quadrant Ultrasound</div>
            <div className="text-sm text-muted-foreground">
              First-line imaging: high sensitivity for gallstones, can assess wall thickening,
              pericholecystic fluid, bile duct dilation
            </div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-medium mb-1">HIDA Scan</div>
            <div className="text-sm text-muted-foreground">
              If ultrasound equivocal: non-filling of gallbladder suggests cystic duct obstruction
            </div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-medium mb-1">MRCP</div>
            <div className="text-sm text-muted-foreground">
              Better for common bile duct visualization and choledocholithiasis
            </div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <div className="font-medium mb-1">CT Abdomen</div>
            <div className="text-sm text-muted-foreground">
              Less sensitive for stones but useful for complications (perforation, abscess)
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Key Clinical Pitfalls</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Cholangitis requires urgent ERCP - don't delay for "stable" patient</li>
            <li>• Acalculous cholecystitis can occur in critically ill (no stones on US)</li>
            <li>• Elevated ALP/bilirubin suggests common bile duct involvement</li>
            <li>• Cholecystitis: early surgery (&lt;72 hrs) better than delayed</li>
            <li>• Consider other RUQ diagnoses: hepatitis, pneumonia, pyelonephritis</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
