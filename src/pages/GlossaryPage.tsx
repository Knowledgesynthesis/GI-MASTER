import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

export function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const glossaryTerms: GlossaryTerm[] = [
    {
      term: 'Hematemesis',
      definition: 'Vomiting of blood, indicating upper GI bleeding. May appear bright red or as coffee-ground material (partially digested blood).',
      category: 'Bleeding',
    },
    {
      term: 'Melena',
      definition: 'Black, tarry stools resulting from upper GI bleeding. Blood has been digested, giving characteristic dark appearance and foul odor.',
      category: 'Bleeding',
    },
    {
      term: 'Hematochezia',
      definition: 'Passage of bright red blood per rectum, typically indicating lower GI bleeding. Can occur with brisk upper GI bleeding.',
      category: 'Bleeding',
    },
    {
      term: 'Variceal Bleeding',
      definition: 'Bleeding from dilated veins (varices) in the esophagus or stomach, typically due to portal hypertension from cirrhosis.',
      category: 'Bleeding',
    },
    {
      term: 'Glasgow-Blatchford Score',
      definition: 'Risk stratification tool for upper GI bleeding that helps identify patients at low risk who may be suitable for outpatient management.',
      category: 'Risk Assessment',
    },
    {
      term: 'Charcot Triad',
      definition: 'Classic triad of acute cholangitis: RUQ pain, fever, and jaundice. Present in 50-70% of cases.',
      category: 'Gallstone Disease',
    },
    {
      term: 'Reynolds Pentad',
      definition: 'Charcot triad plus altered mental status and hypotension, indicating severe cholangitis with septic shock.',
      category: 'Gallstone Disease',
    },
    {
      term: 'Murphy Sign',
      definition: 'Inspiratory arrest during deep palpation of RUQ due to pain, highly specific for acute cholecystitis.',
      category: 'Physical Exam',
    },
    {
      term: 'Asterixis',
      definition: 'Flapping tremor of outstretched hands, a sign of hepatic encephalopathy or other metabolic encephalopathies.',
      category: 'Physical Exam',
    },
    {
      term: 'Cullen Sign',
      definition: 'Bluish discoloration around umbilicus indicating retroperitoneal hemorrhage, can be seen in severe pancreatitis.',
      category: 'Physical Exam',
    },
    {
      term: 'Grey Turner Sign',
      definition: 'Bluish discoloration of flanks indicating retroperitoneal hemorrhage, can be seen in severe pancreatitis.',
      category: 'Physical Exam',
    },
    {
      term: 'Acute Pancreatitis',
      definition: 'Inflammation of the pancreas, diagnosed by 2 of 3: characteristic pain, lipase >3x ULN, or imaging findings.',
      category: 'Pancreatitis',
    },
    {
      term: 'Chronic Pancreatitis',
      definition: 'Progressive inflammatory condition leading to permanent structural damage, exocrine/endocrine insufficiency.',
      category: 'Pancreatitis',
    },
    {
      term: 'Ranson Criteria',
      definition: 'Scoring system to predict severity and mortality in acute pancreatitis using 11 parameters assessed at admission and 48 hours.',
      category: 'Risk Assessment',
    },
    {
      term: 'Pseudocyst',
      definition: 'Fluid collection in pancreatitis that forms >4 weeks after onset, lacks epithelial lining, may require drainage if symptomatic.',
      category: 'Pancreatitis',
    },
    {
      term: 'Peptic Ulcer Disease',
      definition: 'Ulceration in stomach or duodenum, commonly caused by H. pylori infection or NSAID use.',
      category: 'PUD',
    },
    {
      term: 'H. pylori',
      definition: 'Helicobacter pylori - spiral bacterium colonizing gastric mucosa, causing gastritis and peptic ulcers.',
      category: 'PUD',
    },
    {
      term: 'Urea Breath Test',
      definition: 'Non-invasive test for active H. pylori infection. Patient ingests labeled urea; H. pylori urease breaks it down, releasing labeled CO2.',
      category: 'Diagnostics',
    },
    {
      term: 'Ulcerative Colitis',
      definition: 'IBD characterized by continuous inflammation of colon starting at rectum, limited to mucosa/submucosa.',
      category: 'IBD',
    },
    {
      term: 'Crohn Disease',
      definition: 'IBD that can affect anywhere from mouth to anus, characterized by skip lesions and transmural inflammation.',
      category: 'IBD',
    },
    {
      term: 'Skip Lesions',
      definition: 'Characteristic pattern in Crohn disease: areas of diseased bowel separated by normal bowel.',
      category: 'IBD',
    },
    {
      term: 'Fistula',
      definition: 'Abnormal connection between organs or to skin, common complication of Crohn disease due to transmural inflammation.',
      category: 'IBD',
    },
    {
      term: 'Primary Sclerosing Cholangitis',
      definition: 'Progressive cholestatic liver disease causing bile duct strictures, strongly associated with ulcerative colitis.',
      category: 'Hepatic',
    },
    {
      term: 'Acute Liver Failure',
      definition: 'Development of coagulopathy (INR ≥1.5) and encephalopathy in patient without pre-existing cirrhosis, illness <26 weeks.',
      category: 'Hepatic',
    },
    {
      term: 'Hepatic Encephalopathy',
      definition: 'Altered mental status due to liver dysfunction, ranging from subtle confusion to coma.',
      category: 'Hepatic',
    },
    {
      term: 'Portal Hypertension',
      definition: 'Elevated pressure in portal venous system, commonly from cirrhosis, leads to varices, ascites, splenomegaly.',
      category: 'Hepatic',
    },
    {
      term: 'Cholelithiasis',
      definition: 'Presence of gallstones in gallbladder. May be asymptomatic or cause biliary colic.',
      category: 'Gallstone Disease',
    },
    {
      term: 'Cholecystitis',
      definition: 'Inflammation of gallbladder, typically from cystic duct obstruction by stone. Presents with RUQ pain, fever, Murphy sign.',
      category: 'Gallstone Disease',
    },
    {
      term: 'Cholangitis',
      definition: 'Infection of bile ducts, typically from obstruction. Presents with Charcot triad, requires urgent ERCP.',
      category: 'Gallstone Disease',
    },
    {
      term: 'ERCP',
      definition: 'Endoscopic Retrograde Cholangiopancreatography - procedure to visualize and treat bile/pancreatic duct pathology.',
      category: 'Procedures',
    },
    {
      term: 'Diverticular Bleeding',
      definition: 'Bleeding from colonic diverticula, most common cause of lower GI bleeding. Usually painless and self-limited.',
      category: 'Bleeding',
    },
    {
      term: 'Ischemic Colitis',
      definition: 'Colon inflammation from inadequate blood flow. Presents with crampy pain and bloody diarrhea, typically elderly with vascular disease.',
      category: 'Colonic',
    },
    {
      term: 'Angiodysplasia',
      definition: 'Vascular malformations in GI tract, common cause of recurrent lower GI bleeding in elderly.',
      category: 'Bleeding',
    },
    {
      term: 'Octreotide',
      definition: 'Somatostatin analog that reduces splanchnic blood flow, used in variceal bleeding.',
      category: 'Treatment',
    },
    {
      term: 'Proton Pump Inhibitor',
      definition: 'Medication that suppresses gastric acid production, used in peptic ulcer disease and upper GI bleeding.',
      category: 'Treatment',
    },
  ];

  const categories = ['All', ...Array.from(new Set(glossaryTerms.map(t => t.category)))];

  const filteredTerms = glossaryTerms
    .filter(term => selectedCategory === 'All' || term.category === selectedCategory)
    .filter(term =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">GI Glossary</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive terminology and definitions for gastrointestinal medicine
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search & Filter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-background"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          Showing {filteredTerms.length} of {glossaryTerms.length} terms
        </div>
        {filteredTerms.map((term, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">{term.term}</h3>
                <Badge variant="secondary">{term.category}</Badge>
              </div>
              <p className="text-muted-foreground">{term.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">No terms found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
