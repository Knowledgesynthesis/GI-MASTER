import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { useThemeStore } from '@/stores/themeStore';
import { Sun, Moon, Info, AlertTriangle, BookOpen, Code } from 'lucide-react';

export function SettingsPage() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Settings</h1>
        <p className="text-lg text-muted-foreground">
          Customize your learning experience
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Choose between light and dark mode
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium">Theme</div>
              <div className="text-sm text-muted-foreground">
                Current theme: {theme === 'dark' ? 'Dark' : 'Light'} mode
              </div>
            </div>
            <Button onClick={toggleTheme} variant="outline" size="lg">
              {theme === 'dark' ? (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  Switch to Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  Switch to Dark Mode
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About the App */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            About GI Master
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Purpose</h3>
            <p className="text-sm text-muted-foreground">
              GI Master is an interactive educational platform designed to help medical students,
              residents, and healthcare professionals master gastrointestinal emergencies and
              chronic disease management through evidence-based learning modules, interactive
              tools, and case-based assessments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Comprehensive modules covering upper GI bleed, lower GI bleed, pancreatitis,
                H. pylori, IBD, hepatic failure, and gallstone disease</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Interactive clinical tools including variceal bleed sorters, LFT analyzers,
                severity calculators, and diagnostic pathways</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Assessment center with case-based questions and detailed explanations</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Comprehensive glossary of GI terminology</span>
              </li>
              <li className="flex items-start gap-2">
                <Sun className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mobile-first design with dark mode support</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Offline-capable progressive web app</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">
              GI Master v1.0.0
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Important Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>For Educational Purposes Only</AlertTitle>
            <AlertDescription>
              This application is designed solely for educational purposes to help healthcare
              learners understand gastrointestinal disease patterns, diagnostic approaches, and
              management principles. It is NOT intended for clinical decision-making or patient care.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Not a Substitute for Clinical Judgment</AlertTitle>
            <AlertDescription>
              All clinical scenarios, laboratory values, and imaging descriptions are synthetic
              and created for educational purposes. Never use this application to make actual
              patient care decisions. Always consult current clinical guidelines, supervising
              physicians, and evidence-based resources for real patient management.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>No Medication Dosing</AlertTitle>
            <AlertDescription>
              This application deliberately does not include specific medication dosages.
              Medication mentions are conceptual only to illustrate therapeutic approaches.
              Always consult prescribing information, pharmacists, and institutional protocols
              for actual medication dosing.
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Guideline-Informed Content</AlertTitle>
            <AlertDescription>
              Content is based on concepts from major gastroenterology societies (ACG, ASGE, AASLD)
              but is simplified for educational purposes. Guidelines evolve; always refer to the
              most current published guidelines for clinical practice.
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Synthetic Data</AlertTitle>
            <AlertDescription>
              All patient cases, laboratory values, imaging findings, and clinical scenarios
              presented in this application are entirely synthetic and do not represent real
              patients. Any resemblance to actual cases is purely coincidental.
            </AlertDescription>
          </Alert>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>No Data Collection</AlertTitle>
            <AlertDescription>
              This application does not track user progress, collect personal information,
              or store assessment scores. All interactions remain local to your device.
              The application works offline and respects your privacy.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Legal Notice */}
      <Card>
        <CardHeader>
          <CardTitle>Legal Notice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            By using this application, you acknowledge that:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• This tool is for educational purposes only</li>
            <li>• You will not use this application for clinical decision-making</li>
            <li>• You understand all content is synthetic and conceptual</li>
            <li>• You will consult appropriate clinical resources for patient care</li>
            <li>• The developers assume no liability for misuse of this educational tool</li>
          </ul>
          <p className="pt-4 border-t">
            For questions, feedback, or to report issues with the educational content,
            please consult your educational institution or supervising faculty.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
