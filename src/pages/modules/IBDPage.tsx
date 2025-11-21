import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

export function IBDPage() {

  const comparisonFeatures = [
    {
      category: 'Distribution',
      uc: 'Continuous from rectum, colon only',
      crohn: 'Skip lesions, mouth to anus',
    },
    {
      category: 'Rectal Involvement',
      uc: 'Always involved',
      crohn: 'Often spared',
    },
    {
      category: 'Depth',
      uc: 'Mucosa/submucosa only',
      crohn: 'Transmural (full thickness)',
    },
    {
      category: 'Endoscopy',
      uc: 'Continuous inflammation, pseudopolyps',
      crohn: 'Cobblestoning, aphthous ulcers',
    },
    {
      category: 'Histology',
      uc: 'Crypt abscesses, no granulomas',
      crohn: 'Non-caseating granulomas',
    },
    {
      category: 'Complications',
      uc: 'Toxic megacolon, higher colon cancer risk',
      crohn: 'Fistulas, strictures, abscesses',
    },
    {
      category: 'Perianal Disease',
      uc: 'Rare',
      crohn: 'Common (fissures, fistulas)',
    },
    {
      category: 'Smoking',
      uc: 'Protective (paradoxically)',
      crohn: 'Worsens disease',
    },
  ];

  const extraintestinal = [
    { name: 'Arthritis', parallel: 'Yes' },
    { name: 'Uveitis/Scleritis', parallel: 'No' },
    { name: 'Erythema nodosum', parallel: 'Yes' },
    { name: 'Pyoderma gangrenosum', parallel: 'Yes' },
    { name: 'Primary sclerosing cholangitis', parallel: 'No (UC >> Crohn)' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Inflammatory Bowel Disease</h1>
        <p className="text-lg text-muted-foreground">
          Master the differentiation between UC and Crohn disease
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border-2 border-purple-500/30 rounded-lg">
              <h3 className="font-bold text-lg text-purple-500 mb-3">Ulcerative Colitis</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  Continuous inflammation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  Always starts at rectum
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  Colon only (no small bowel)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  Bloody diarrhea
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  Associated with PSC
                </li>
              </ul>
            </div>
            <div className="p-4 border-2 border-orange-500/30 rounded-lg">
              <h3 className="font-bold text-lg text-orange-500 mb-3">Crohn Disease</h3>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Skip lesions (patchy)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Mouth to anus
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Transmural inflammation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Fistulas, strictures
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  Non-caseating granulomas
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive: UC vs Crohn Differentiator</CardTitle>
          <CardDescription>
            Compare features side-by-side
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-left p-3 font-semibold text-purple-500">Ulcerative Colitis</th>
                  <th className="text-left p-3 font-semibold text-orange-500">Crohn Disease</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{feature.category}</td>
                    <td className="p-3">{feature.uc}</td>
                    <td className="p-3">{feature.crohn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Extraintestinal Manifestations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {extraintestinal.map((item, idx) => (
              <div key={idx} className="p-3 bg-muted rounded-lg flex justify-between items-center">
                <span className="font-medium">{item.name}</span>
                <Badge variant="secondary">
                  {item.parallel === 'Yes' ? 'Parallels disease activity' : item.parallel}
                </Badge>
              </div>
            ))}
          </div>
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Some manifestations parallel disease activity (improve with IBD treatment), while
              others run an independent course (e.g., PSC, scleritis)
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Treatment Ladder (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Step 1: 5-ASA (Mesalamine)</div>
              <div className="text-sm text-muted-foreground">
                Mild to moderate UC; less effective in Crohn
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Step 2: Corticosteroids</div>
              <div className="text-sm text-muted-foreground">
                Acute flares; not for maintenance (too many side effects)
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Step 3: Immunomodulators</div>
              <div className="text-sm text-muted-foreground">
                Azathioprine, 6-MP, methotrexate - steroid-sparing maintenance
              </div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="font-medium mb-1">Step 4: Biologics</div>
              <div className="text-sm text-muted-foreground">
                Anti-TNF, anti-integrin, anti-IL for moderate-severe disease
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
            <li>• Rectal sparing suggests Crohn, not UC</li>
            <li>• Fistulas and strictures are Crohn complications</li>
            <li>• UC has higher colon cancer risk - needs surveillance colonoscopy</li>
            <li>• PSC strongly associated with UC (not Crohn)</li>
            <li>• Granulomas are specific but not sensitive for Crohn (only 30-40%)</li>
            <li>• Consider infectious colitis in differential (especially C. diff)</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
