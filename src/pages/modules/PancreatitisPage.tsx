import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Info } from 'lucide-react';

export function PancreatitisPage() {
  const [lipase, setLipase] = useState('');
  const [wbc, setWbc] = useState('');
  const [calcium, setCalcium] = useState('');
  const [severityResult, setSeverityResult] = useState<string | null>(null);

  const calculateSeverity = () => {
    const lipaseVal = parseFloat(lipase);
    const wbcVal = parseFloat(wbc);
    const calciumVal = parseFloat(calcium);

    if (lipaseVal < 300) {
      setSeverityResult('Lipase not consistent with acute pancreatitis (need >3x normal ~300)');
      return;
    }

    let riskFactors = 0;
    if (wbcVal > 16) riskFactors++;
    if (calciumVal < 8) riskFactors++;

    if (riskFactors === 0) {
      setSeverityResult('Mild severity - Good prognosis with supportive care');
    } else if (riskFactors === 1) {
      setSeverityResult('Moderate severity - Monitor closely for complications');
    } else {
      setSeverityResult('Severe - High risk for complications including necrosis');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Pancreatitis</h1>
        <p className="text-lg text-muted-foreground">
          Master diagnosis, severity assessment, and complication recognition
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Acute Pancreatitis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Diagnostic Criteria (2 of 3)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="outline">1</Badge>
                  <span>Epigastric pain radiating to back</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline">2</Badge>
                  <span>Lipase/amylase &gt;3× upper limit normal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline">3</Badge>
                  <span>Imaging findings (CT/MRI/US)</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Common Etiologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Gallstones (40%)</Badge>
                <Badge>Alcohol (30%)</Badge>
                <Badge>Hypertriglyceridemia</Badge>
                <Badge>Medications</Badge>
                <Badge>Idiopathic</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chronic Pancreatitis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Clinical Features</h3>
              <ul className="space-y-1 text-sm">
                <li>• Recurrent epigastric pain</li>
                <li>• Exocrine insufficiency (steatorrhea)</li>
                <li>• Endocrine insufficiency (diabetes)</li>
                <li>• Pancreatic calcifications on imaging</li>
                <li>• Weight loss, malnutrition</li>
              </ul>
            </div>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Distinguish from pancreatic cancer: chronic progressive pain, calcifications,
                alcohol history favor chronic pancreatitis
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive: Severity Estimator</CardTitle>
          <CardDescription>
            Simplified severity assessment (educational only)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Lipase (U/L)</label>
              <input
                type="number"
                value={lipase}
                onChange={(e) => setLipase(e.target.value)}
                placeholder="e.g., 950"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">WBC (×10³/μL)</label>
              <input
                type="number"
                value={wbc}
                onChange={(e) => setWbc(e.target.value)}
                placeholder="e.g., 14"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Calcium (mg/dL)</label>
              <input
                type="number"
                value={calcium}
                onChange={(e) => setCalcium(e.target.value)}
                placeholder="e.g., 9.2"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
            </div>
          </div>
          <Button onClick={calculateSeverity}>Assess Severity</Button>
          {severityResult && (
            <Alert>
              <AlertTitle>Severity Assessment</AlertTitle>
              <AlertDescription>{severityResult}</AlertDescription>
            </Alert>
          )}
          <p className="text-xs text-muted-foreground">
            Note: This is a simplified educational tool. Actual severity scoring (APACHE-II, Ranson,
            BISAP) involves multiple parameters and should be performed using validated clinical tools.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Complications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Early Complications</h3>
              <ul className="space-y-2 text-sm">
                <li className="p-2 bg-muted rounded">
                  <div className="font-medium">Hypovolemia/Shock</div>
                  <div className="text-muted-foreground text-xs">Third-spacing, fluid loss</div>
                </li>
                <li className="p-2 bg-muted rounded">
                  <div className="font-medium">SIRS/Sepsis</div>
                  <div className="text-muted-foreground text-xs">Systemic inflammation</div>
                </li>
                <li className="p-2 bg-muted rounded">
                  <div className="font-medium">AKI</div>
                  <div className="text-muted-foreground text-xs">Volume depletion, ATN</div>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Late Complications</h3>
              <ul className="space-y-2 text-sm">
                <li className="p-2 bg-muted rounded">
                  <div className="font-medium">Pancreatic Necrosis</div>
                  <div className="text-muted-foreground text-xs">Can become infected</div>
                </li>
                <li className="p-2 bg-muted rounded">
                  <div className="font-medium">Pseudocyst</div>
                  <div className="text-muted-foreground text-xs">&gt;4 weeks to form</div>
                </li>
                <li className="p-2 bg-muted rounded">
                  <div className="font-medium">Abscess</div>
                  <div className="text-muted-foreground text-xs">Requires drainage</div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Management Principles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Aggressive Fluid Resuscitation</div>
              <div className="text-sm text-muted-foreground">
                Lactated Ringer's preferred; goal: adequate urine output, normal vital signs
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Pain Control</div>
              <div className="text-sm text-muted-foreground">
                Adequate analgesia improves outcomes
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Nutrition</div>
              <div className="text-sm text-muted-foreground">
                Early enteral feeding (within 24-48h) preferred over NPO
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Treat Underlying Cause</div>
              <div className="text-sm text-muted-foreground">
                ERCP for biliary obstruction, alcohol cessation, lipid management
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
            <li>• Don't under-resuscitate - aggressive early fluids improve outcomes</li>
            <li>• Lipase can be normal in chronic pancreatitis with recurrent attacks</li>
            <li>• Early feeding is better than prolonged NPO status</li>
            <li>• Imaging not always needed if diagnosis is clear clinically/biochemically</li>
            <li>• Monitor for complications: necrosis, pseudocyst, AKI</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
