import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Info, CheckCircle2, XCircle } from 'lucide-react';

export function HPyloriPage() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const tests = [
    {
      id: 'urea-breath',
      name: 'Urea Breath Test',
      type: 'Non-invasive',
      accuracy: 'High (95%+)',
      when: 'Preferred initial test if no endoscopy planned',
      limitations: 'Recent PPI/antibiotic use reduces accuracy',
      result: 'Positive indicates active infection',
    },
    {
      id: 'stool-antigen',
      name: 'Stool Antigen',
      type: 'Non-invasive',
      accuracy: 'High (94%+)',
      when: 'Alternative to breath test, test of cure',
      limitations: 'Recent PPI/antibiotic use reduces accuracy',
      result: 'Positive indicates active infection',
    },
    {
      id: 'serology',
      name: 'Serology (IgG)',
      type: 'Non-invasive',
      accuracy: 'Lower specificity',
      when: 'Rarely used - cannot distinguish active vs past infection',
      limitations: 'Stays positive after eradication, not useful for test of cure',
      result: 'Only shows exposure, not current infection',
    },
    {
      id: 'biopsy',
      name: 'Endoscopic Biopsy',
      type: 'Invasive',
      accuracy: 'High (95%+)',
      when: 'During endoscopy for ulcer evaluation',
      limitations: 'Requires endoscopy, patchy distribution',
      result: 'Histology or rapid urease test',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">H. pylori & Peptic Ulcer Disease</h1>
        <p className="text-lg text-muted-foreground">
          Understanding H. pylori testing and peptic ulcer management
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Peptic Ulcer Disease</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Duodenal vs Gastric Ulcers</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="font-medium text-blue-500 mb-2">Duodenal Ulcer</div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Pain 2-5 hours after meals</li>
                    <li>• Pain relieved by eating</li>
                    <li>• H. pylori association 90%</li>
                    <li>• Rarely malignant</li>
                  </ul>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="font-medium text-purple-500 mb-2">Gastric Ulcer</div>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Pain worse with eating</li>
                    <li>• H. pylori association 70%</li>
                    <li>• NSAID association higher</li>
                    <li>• Biopsy needed (r/o cancer)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="font-medium text-destructive mb-1">Bleeding</div>
              <div className="text-sm">Most common - hematemesis, melena</div>
            </div>
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="font-medium text-destructive mb-1">Perforation</div>
              <div className="text-sm">Acute abdomen, free air on imaging</div>
            </div>
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="font-medium text-destructive mb-1">Gastric Outlet Obstruction</div>
              <div className="text-sm">Chronic scarring, early satiety, vomiting</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive: H. pylori Test Interpreter</CardTitle>
          <CardDescription>
            Understanding different testing modalities and their interpretation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {tests.map((test) => (
              <button
                key={test.id}
                onClick={() => setSelectedTest(test.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedTest === test.id
                    ? 'border-primary bg-primary/5'
                    : 'hover:border-muted-foreground'
                }`}
              >
                <div className="font-medium mb-1">{test.name}</div>
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="text-xs">{test.type}</Badge>
                  <span className="text-muted-foreground">{test.accuracy}</span>
                </div>
              </button>
            ))}
          </div>

          {selectedTest && (
            <div className="pt-4 border-t space-y-3">
              {tests.filter(t => t.id === selectedTest).map(test => (
                <div key={test.id} className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="font-medium mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        When to Use
                      </div>
                      <p className="text-sm">{test.when}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="font-medium mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-500" />
                        Limitations
                      </div>
                      <p className="text-sm">{test.limitations}</p>
                    </div>
                  </div>
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Result Interpretation:</strong> {test.result}
                    </AlertDescription>
                  </Alert>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Treatment Overview (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-3">H. pylori Eradication</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Triple or quadruple therapy for 10-14 days (specific regimens vary by local resistance patterns)
            </p>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Test of cure: Urea breath test or stool antigen 4+ weeks after treatment completion.
                Wait 2+ weeks off PPI before testing.
              </AlertDescription>
            </Alert>
          </div>
          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-3">PPI Therapy</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-medium mb-1">Duodenal Ulcer</div>
                <div className="text-sm text-muted-foreground">4-6 weeks if H. pylori treated</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-medium mb-1">Gastric Ulcer</div>
                <div className="text-sm text-muted-foreground">8-12 weeks; confirm healing with EGD</div>
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
            <li>• PPI/antibiotics must be stopped before non-invasive H. pylori testing</li>
            <li>• Serology cannot be used for test of cure (stays positive)</li>
            <li>• Gastric ulcers need biopsy to rule out malignancy</li>
            <li>• NSAID-induced ulcers: consider stopping NSAID, not just PPI</li>
            <li>• Always confirm H. pylori eradication with test of cure</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
