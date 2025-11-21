import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      category: 'Upper GI Bleed',
      question: 'A 55-year-old man with known cirrhosis presents with hematemesis and BP 88/54. Which feature most strongly suggests variceal bleeding?',
      options: [
        'History of NSAID use',
        'Epigastric pain',
        'Thrombocytopenia',
        'Normal vital signs'
      ],
      correct: 2,
      explanation: 'Thrombocytopenia in a patient with cirrhosis suggests portal hypertension and makes variceal bleeding more likely. NSAID use and epigastric pain would suggest peptic ulcer disease (non-variceal).'
    },
    {
      id: 2,
      category: 'Pancreatitis',
      question: 'Which finding is required for diagnosis of acute pancreatitis?',
      options: [
        'CT showing pancreatic edema',
        'Lipase > 3x upper limit normal',
        'Two of three: pain, lipase >3x normal, or imaging findings',
        'Gallstones on ultrasound'
      ],
      correct: 2,
      explanation: 'Acute pancreatitis diagnosis requires 2 of 3 criteria: characteristic epigastric pain, lipase/amylase >3x ULN, or imaging findings. Not all three are required.'
    },
    {
      id: 3,
      category: 'IBD',
      question: 'Which feature is most specific for Crohn disease rather than ulcerative colitis?',
      options: [
        'Bloody diarrhea',
        'Skip lesions on colonoscopy',
        'Rectal involvement',
        'Primary sclerosing cholangitis'
      ],
      correct: 1,
      explanation: 'Skip lesions (areas of normal bowel between diseased segments) are characteristic of Crohn disease. UC has continuous inflammation from the rectum. PSC is associated with UC, not Crohn.'
    },
    {
      id: 4,
      category: 'H. pylori',
      question: 'Which test should NOT be used for H. pylori test of cure after treatment?',
      options: [
        'Urea breath test',
        'Stool antigen test',
        'Serology (IgG antibodies)',
        'Endoscopic biopsy'
      ],
      correct: 2,
      explanation: 'Serology remains positive for years after eradication and cannot distinguish active from past infection. Urea breath test and stool antigen are preferred for test of cure (must wait 4+ weeks off PPI).'
    },
    {
      id: 5,
      category: 'Hepatic Failure',
      question: 'A patient has AST 2400, ALT 2100, and was hypotensive yesterday. What is the most likely diagnosis?',
      options: [
        'Alcoholic hepatitis',
        'Chronic hepatitis C',
        'Ischemic hepatitis (shock liver)',
        'Primary biliary cholangitis'
      ],
      correct: 2,
      explanation: 'Markedly elevated aminotransferases (>1000) after hypotension suggests ischemic hepatitis. Alcoholic hepatitis typically has AST:ALT >2 but values <300. Chronic hepatitis has lower elevations.'
    },
    {
      id: 6,
      category: 'Gallstone Disease',
      question: 'A patient presents with RUQ pain, fever of 39°C, and jaundice. What is the most appropriate next step?',
      options: [
        'Outpatient follow-up with PCP',
        'Elective cholecystectomy in 4-6 weeks',
        'Admission for antibiotics and urgent ERCP',
        'CT abdomen and discharge'
      ],
      correct: 2,
      explanation: 'This is Charcot triad (RUQ pain + fever + jaundice) indicating acute cholangitis, a potentially life-threatening condition requiring urgent ERCP for biliary decompression plus antibiotics.'
    },
    {
      id: 7,
      category: 'Lower GI Bleed',
      question: 'What percentage of patients presenting with hematochezia actually have an upper GI source?',
      options: [
        '0-5%',
        '10-15%',
        '30-40%',
        '50%'
      ],
      correct: 1,
      explanation: '10-15% of patients with hematochezia have an upper GI source (brisk UGIB can present as red blood per rectum). Always consider upper endoscopy if patient is unstable or has concerning features.'
    },
    {
      id: 8,
      category: 'IBD',
      question: 'Which complication is more common in Crohn disease than ulcerative colitis?',
      options: [
        'Colon cancer',
        'Primary sclerosing cholangitis',
        'Fistulas',
        'Toxic megacolon'
      ],
      correct: 2,
      explanation: 'Fistulas (and strictures/abscesses) occur in Crohn due to transmural inflammation. UC has higher colon cancer risk and is associated with PSC. Toxic megacolon can occur in both but is more classic in UC.'
    },
    {
      id: 9,
      category: 'Pancreatitis',
      question: 'Which statement about pancreatitis nutrition is correct?',
      options: [
        'Patients should be kept NPO until pain resolves',
        'Early enteral feeding (24-48h) is preferred',
        'TPN is first-line nutrition',
        'Oral intake should be delayed at least 7 days'
      ],
      correct: 1,
      explanation: 'Early enteral feeding (within 24-48 hours) improves outcomes compared to prolonged NPO or TPN. The "pancreatic rest" concept of keeping patients NPO is outdated.'
    },
    {
      id: 10,
      category: 'Upper GI Bleed',
      question: 'What is the significance of BUN:Creatinine ratio >20 in a patient with melena?',
      options: [
        'Indicates renal failure',
        'Suggests upper GI source',
        'Rules out lower GI bleed',
        'No clinical significance'
      ],
      correct: 1,
      explanation: 'Elevated BUN with normal creatinine (BUN:Cr >20) suggests upper GI bleeding, as blood proteins are digested and absorbed, raising BUN. This helps localize the source of bleeding.'
    },
  ];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const question = questions[currentQuestion];

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Assessment Center</h1>
        <p className="text-lg text-muted-foreground">
          Test your knowledge with case-based questions and clinical scenarios
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Question {currentQuestion + 1} of {questions.length}</CardTitle>
              <CardDescription className="mt-2">
                <Badge>{question.category}</Badge>
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg font-medium leading-relaxed">
            {question.question}
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correct;
              const showCorrect = showExplanation && isCorrect;
              const showIncorrect = showExplanation && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                    showCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                      : showIncorrect
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                      : isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-muted-foreground'
                  } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showCorrect
                        ? 'border-green-500 bg-green-500'
                        : showIncorrect
                        ? 'border-red-500 bg-red-500'
                        : isSelected
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {showCorrect && <CheckCircle2 className="h-4 w-4 text-white" />}
                      {showIncorrect && <XCircle className="h-4 w-4 text-white" />}
                      {!showExplanation && <span className="text-xs font-bold">{String.fromCharCode(65 + index)}</span>}
                    </div>
                    <div className="flex-1">{option}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Explanation</AlertTitle>
              <AlertDescription className="mt-2">
                {question.explanation}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex justify-between pt-4 border-t">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1 || !showExplanation}
            >
              Next Question
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About This Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            This assessment contains {questions.length} questions covering all major GI topics:
            upper and lower GI bleeds, pancreatitis, H. pylori, IBD, hepatic failure, and gallstone disease.
          </p>
          <p>
            Questions are designed to test clinical reasoning and pattern recognition rather than
            pure memorization. Each question includes a detailed explanation to enhance learning.
          </p>
          <Alert>
            <AlertDescription>
              <strong>Note:</strong> This is for educational purposes only. Scores and progress are
              not tracked. Use this tool to reinforce your learning and identify areas for review.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
