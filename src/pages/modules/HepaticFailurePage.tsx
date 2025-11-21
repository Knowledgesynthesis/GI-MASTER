import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Info } from 'lucide-react';

export function HepaticFailurePage() {
  const [ast, setAst] = useState('');
  const [alt, setAlt] = useState('');
  const [alkPhos, setAlkPhos] = useState('');
  const [bilirubin, setBilirubin] = useState('');
  const [pattern, setPattern] = useState<string | null>(null);

  const analyzeLFTs = () => {
    const astVal = parseFloat(ast);
    const altVal = parseFloat(alt);
    const alkPhosVal = parseFloat(alkPhos);

    const astAltRatio = astVal / altVal;

    if (astVal > 1000 || altVal > 1000) {
      setPattern('Hepatocellular injury (markedly elevated aminotransferases) - Consider: acetaminophen toxicity, ischemic hepatitis, acute viral hepatitis');
    } else if (alkPhosVal / 120 > 3 && astVal / 40 < 2) {
      setPattern('Cholestatic pattern (ALP predominant) - Consider: bile duct obstruction, PBC, PSC, drug-induced');
    } else if (astAltRatio > 2 && astVal < 300) {
      setPattern('AST:ALT >2 suggests alcoholic liver disease (with concurrent low ALT due to B6 deficiency)');
    } else if (astVal > 100 && altVal > 100) {
      setPattern('Hepatocellular pattern (aminotransferases predominant) - Consider: viral hepatitis, autoimmune hepatitis, drug-induced');
    } else {
      setPattern('Pattern unclear - consider mixed picture or chronic liver disease');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Hepatic Failure</h1>
        <p className="text-lg text-muted-foreground">
          Recognize acute liver failure and interpret LFT patterns
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Acute Liver Failure</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Definition</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Development of coagulopathy (INR ≥1.5) and any degree of mental alteration (encephalopathy)
              in a patient without pre-existing cirrhosis and with illness &lt;26 weeks duration
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="destructive">Coagulopathy</Badge>
                <Badge variant="destructive">Encephalopathy</Badge>
                <Badge variant="destructive">Jaundice</Badge>
                <Badge variant="destructive">No prior cirrhosis</Badge>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Common Causes</h4>
              <ul className="text-sm space-y-1">
                <li>• Acetaminophen toxicity (most common in US)</li>
                <li>• Viral hepatitis (A, B, E)</li>
                <li>• Drug-induced (antibiotics, anticonvulsants)</li>
                <li>• Ischemic hepatitis (shock liver)</li>
                <li>• Autoimmune hepatitis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive: LFT Pattern Analyzer</CardTitle>
          <CardDescription>
            Interpret liver function test patterns (educational only)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">AST (U/L)</label>
              <input
                type="number"
                value={ast}
                onChange={(e) => setAst(e.target.value)}
                placeholder="e.g., 450"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">ALT (U/L)</label>
              <input
                type="number"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                placeholder="e.g., 380"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Alkaline Phosphatase (U/L)</label>
              <input
                type="number"
                value={alkPhos}
                onChange={(e) => setAlkPhos(e.target.value)}
                placeholder="e.g., 180"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Total Bilirubin (mg/dL)</label>
              <input
                type="number"
                value={bilirubin}
                onChange={(e) => setBilirubin(e.target.value)}
                placeholder="e.g., 4.5"
                className="w-full px-3 py-2 border rounded-md bg-background"
              />
            </div>
          </div>
          <Button onClick={analyzeLFTs}>Analyze Pattern</Button>
          {pattern && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>LFT Pattern</AlertTitle>
              <AlertDescription>{pattern}</AlertDescription>
            </Alert>
          )}
          <p className="text-xs text-muted-foreground">
            Note: This is a simplified educational tool. Clinical context, additional tests, and
            imaging are essential for accurate diagnosis.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>LFT Pattern Recognition</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-red-500 bg-muted">
              <h3 className="font-semibold mb-2">Hepatocellular Pattern</h3>
              <p className="text-sm mb-2">AST/ALT &gt;&gt; ALP (aminotransferases predominate)</p>
              <div className="text-sm text-muted-foreground">
                Causes: Viral hepatitis, drug-induced, autoimmune, ischemic, Wilson disease
              </div>
            </div>
            <div className="p-4 border-l-4 border-yellow-500 bg-muted">
              <h3 className="font-semibold mb-2">Cholestatic Pattern</h3>
              <p className="text-sm mb-2">ALP &gt;&gt; AST/ALT (alkaline phosphatase predominates)</p>
              <div className="text-sm text-muted-foreground">
                Causes: Bile duct obstruction, PBC, PSC, infiltrative disease, drugs
              </div>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-muted">
              <h3 className="font-semibold mb-2">Mixed Pattern</h3>
              <p className="text-sm mb-2">Both AST/ALT and ALP elevated proportionally</p>
              <div className="text-sm text-muted-foreground">
                Causes: Chronic liver disease, sepsis, malignancy
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hepatic Encephalopathy Grades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2">Grade 1</Badge>
                  <p className="text-sm">Mild confusion, sleep disturbance, irritability</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2">Grade 2</Badge>
                  <p className="text-sm">Lethargy, moderate confusion, asterixis</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2">Grade 3</Badge>
                  <p className="text-sm">Somnolent but arousable, marked confusion</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="destructive" className="mb-2">Grade 4</Badge>
                  <p className="text-sm">Coma, unresponsive to painful stimuli</p>
                </div>
              </div>
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
              <div className="font-medium mb-1">Identify and Treat Cause</div>
              <div className="text-sm text-muted-foreground">
                N-acetylcysteine for acetaminophen, antivirals for HBV, treat underlying shock
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Supportive Care</div>
              <div className="text-sm text-muted-foreground">
                Monitor for complications: encephalopathy, coagulopathy, renal failure, infection
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Transplant Evaluation</div>
              <div className="text-sm text-muted-foreground">
                Early consultation for liver transplant in acute liver failure
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
            <li>• AST:ALT ratio &gt;2 suggests alcoholic liver disease</li>
            <li>• Very high aminotransferases (&gt;1000) suggest acute hepatocellular injury</li>
            <li>• Don't forget acetaminophen toxicity - most common cause of ALF in US</li>
            <li>• Ischemic hepatitis: "shock liver" with AST/ALT &gt;1000 after hypotension</li>
            <li>• Acute liver failure requires early transplant evaluation</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
