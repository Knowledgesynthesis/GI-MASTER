# **GI MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**
A clinically rigorous, mobile-first, offline-capable educational app blueprint covering **high-yield gastroenterology emergencies and chronic disease management**, with emphasis on stabilization, imaging pathways, lab interpretation, and disease-pattern reasoning.

This super-app covers:
- Upper GI bleed (variceal vs non-variceal)  
- Lower GI bleed  
- Acute pancreatitis  
- Chronic pancreatitis  
- Peptic ulcer disease & H. pylori  
- Inflammatory bowel disease (UC vs Crohn)  
- Hepatic failure  
- Gallstone disease (cholecystitis, cholangitis)  

---

# **MASTER PROMPT — GI Master Educational App Generator (SPECIALIZED VERSION)**

## **Role & Mission**
You are a cross-functional team:  
PM, Senior Engineer, Instructional Designer, Gastroenterology SME, Hepatology SME, Emergency Medicine SME, Surgery SME, UX Writer, QA.

Your mission: build an **interactive GI emergency + chronic disease learning platform** that teaches:
- Pattern recognition  
- Stabilization  
- Risk scoring  
- Imaging/lab interpretation  
- Stepwise management (educational)  
- Endoscopy decision-making (conceptual)  
- Chronic disease pathways  
- Case-based reasoning using **fully synthetic data**  

The app must:
- Be mobile-first + dark mode  
- Work offline (IndexedDB + Service Worker)  
- Use synthetic labs/imaging descriptions  
- Follow guideline-informed conceptual frameworks (ACG, ASGE, AASLD)  
- Maintain internal consistency  

---

# **Inputs (Fill These)**
- Primary Topics: {{TOPICS}}  
- Learner Level: {{LEVELS}}  
- Learning Context: {{CONTEXT}}  
- Learning Objectives: {{LEARNING_OBJECTIVES}}  
- Constraints: mobile-first, dark mode, offline, synthetic-only  
- References: {{REFERENCES}}  
- Voice/Tone: {{VOICE_TONE}}  
- Locale: {{LOCALE}}

---

# **1. Executive Summary**
GI Master streamlines the evaluation and management of acute and chronic gastrointestinal disease into diagnostic algorithms, risk stratification tools, lab interpreters, and case simulations.

Learners will be able to:
- Triage GI bleeds  
- Differentiate variceal vs non-variceal bleeding  
- Identify acute pancreatitis and classify severity  
- Diagnose H. pylori and understand eradication logic  
- Distinguish Crohn vs UC  
- Recognize hepatic failure early  
- Interpret gallstone disease patterns  

**Alternative names:**  
- GI Logic Pro – “Master GI emergencies and chronic care.”  
- HepatoPancreato Atlas – “Liver + pancreas + gut in one system.”  
- GIFlow MD – “From symptom → source → stabilization.”

---

# **2. Personas & Use Cases**

### **Personas**
- IM/EM residents managing GI bleeds or pancreatitis  
- GI-bound med students  
- Hospitalists evaluating hepatic failure  
- NP/PA trainees managing abdominal pain  
- ED clinicians distinguishing cholecystitis vs cholangitis  

### **Use Cases**
- Acute upper GI bleed triage  
- Emergency stabilization of variceal bleed  
- Severity scoring for pancreatitis  
- H. pylori testing/interpretation  
- UC vs Crohn pattern sorting  
- LFT pattern recognition  
- RUQ pain with fever → cholangitis logic  
- Lower GI bleed workup  

---

# **3. Curriculum Map & Knowledge Graph**

## **Module 1: Upper GI Bleed**
- Presentation: hematemesis, melena  
- Variceal vs non-variceal differentiation  
- Risk stratification (Glasgow-Blatchford/ Rockall conceptual)  
- Initial stabilization: ABC, IV access  
- Octreotide vs PPI logic (educational)  
- Endoscopy timing (conceptual only)  
- Rebleed risks  

## **Module 2: Lower GI Bleed**
- Hematochezia differential  
- Diverticular bleeding vs ischemic colitis  
- Angiodysplasia clues  
- When to CT angiography  
- When colonoscopy is preferred  

## **Module 3: Acute Pancreatitis**
- Diagnostic criteria (pain, lipase, imaging—conceptual)  
- Etiologies (gallstones, alcohol, hyperTG)  
- Severity prediction (synthetic scoring)  
- Complications (necrosis, pseudocyst)  
- Fluid resuscitation logic (conceptual)  

## **Module 4: Chronic Pancreatitis**
- Recurrent epigastric pain  
- Exocrine insufficiency  
- Calcifications  
- Differentiating from pancreatic cancer  
- Nutrition concepts  

## **Module 5: Peptic Ulcer Disease & H. pylori**
- Duodenal vs gastric ulcer differences  
- H. pylori testing interpretation (stool antigen, breath test, biopsy—conceptual)  
- Complications (perforation, bleeding)  
- Treatment overview (no dosing)  

## **Module 6: Inflammatory Bowel Disease**
### **Ulcerative Colitis**
- Continuous colitis  
- Rectal involvement  
- Bloody diarrhea  
- PSC association  

### **Crohn Disease**
- Skip lesions  
- Fistulas  
- Granulomas  
- Perianal disease  

- Extraintestinal manifestations  
- Synthetic medication ladder (5-ASA → immunomodulators → biologics)  

## **Module 7: Hepatic Failure**
- Acute liver failure  
- Coagulopathy, encephalopathy  
- Causes (viral, acetaminophen, ischemic)  
- Synthetic management logic  
- Prognostic clues  

## **Module 8: Gallstone Disease**
### **Cholelithiasis**
- Biliary colic  

### **Cholecystitis**
- RUQ pain + fever + Murphy sign  
- Ultrasound findings  

### **Cholangitis**
- Charcot triad (RUQ, fever, jaundice)  
- Severity logic  
- ERCP timing (conceptual)  

Knowledge Graph Links:  
Symptom → Labs → Imaging → Risk score → Diagnosis → Stabilization → Chronic plan.

---

# **4. Interactive Specs (Table)**

**Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails | Presets**

UGIB Variceal Sorter | Distinguish variceal vs non-variceal patterns | BP, hx, labs | Classification | Venn diagram | No real dosing | 10 cases  
GI Bleed Stabilizer | Stabilization sequence | Vitals, bleeding severity | Priority list | Step diagram | Educational | Acute cases  
Lower GI Bleed Pathway | Diverticular vs ischemic vs AVM | Pain, stool, hx | Likely source | Flowchart | Not diagnostic | 8 presets  
Pancreatitis Severity Engine | Ranson/SOFA-style concepts | Labs, vitals | Severity tier | Ladder | Synthetic | Mild/mod/severe  
H. pylori Test Interpreter | Test logic | Urea breath, stool antigen | Result meaning | Icon tiles | Educational | 6 cases  
IBD Pattern Differentiator | UC vs Crohn | Symptoms, colonoscopy text | Classification | Split graphic | Synthetic | 8 scenarios  
LFT Pattern Analyzer | Hepatic failure flags | AST/ALT, INR, bili | Pattern type | Liver diagram | Conceptual only | 10 labs  
Gallstone Disease Sorter | Cholelithiasis vs cholecystitis vs cholangitis | Fever, pain, LFT | Category | Biliary tree map | Non-treatment | Classic cases  

---

# **5. Assessment & Mastery**

Item Types:
- MCQs (UGIB, LGIB, pancreatitis, IBD, hepatic failure, gallstones)  
- Lab interpretation (LFTs, lipase, H. pylori tests)  
- Case-based bleeding scenarios  
- UC vs Crohn classification  
- Pancreatitis severity scoring  
- RUQ pain differential  
- Melena vs hematochezia contextual reasoning  

Provide **10–20 items with rationales**.

---

# **6. GI Reasoning Framework**

Universal logic:
1. Stabilize first (airway/breathing/circulation).  
2. Identify bleed location (upper vs lower).  
3. Evaluate severity and hemodynamic compromise.  
4. Use labs + imaging to narrow:  
   - LFTs  
   - Lipase  
   - CBC trends  
   - Ultrasound  
   - CT  
5. Apply risk scores conceptually.  
6. Determine need for emergent endoscopy/ERCP.  
7. Identify red flags in hepatic failure.  
8. Distinguish chronic disease patterns (IBD vs IBS; chronic vs acute pancreatitis).  

**Pitfalls to highlight:**
- Missing variceal bleeding clues  
- Assuming all hematochezia = lower GI bleed  
- Misdiagnosing ischemic colitis as infectious  
- Confusing chronic pancreatitis vs cancer  
- Misreading IBD endoscopic patterns  
- Over-relying on LFTs alone  
- Missing cholangitis red flags  

---

# **7. Accessibility & Safety**
- WCAG 2.2 AA  
- No real medication doses  
- Synthetic labs + imaging descriptions  
- Inclusive patient representation  
- Clear educational-purpose disclaimers  

---

# **8. Tech Architecture**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand/Redux state  
- IndexedDB + Service Worker  
- D3/Recharts for GI bleed flowcharts & liver diagrams  

Structure:
- /upper-gi-bleed  
- /lower-gi-bleed  
- /pancreatitis  
- /h-pylori  
- /ibd  
- /hepatic  
- /gallstone  
- /cases  
- /assessment  
- /glossary  
- /settings  

---

# **9. Data Model (Plain-text JSON Examples)**

    {
      "id": "ugib_case",
      "symptoms": ["melena", "hematemesis"],
      "bp": "92/58",
      "labs": {"hgb": "8.2", "bun": "45"},
      "interpretation": "Likely upper GI bleed; possible variceal source"
    }

    {
      "id": "pancreatitis_case",
      "lipase": "950",
      "pain_location": "epigastric radiating to back",
      "severity": "Moderate",
      "etiology_suspected": "Gallstone"
    }

    {
      "id": "ibd_case",
      "stool_blood": "present",
      "extraintestinal": ["scleritis"],
      "scope_desc": "continuous colitis starting at rectum",
      "diagnosis": "Ulcerative colitis"
    }

---

# **10. Screen Specs & Wireframes**

**Home Screen**  
- UGIB • LGIB • Pancreatitis • H. pylori • IBD • Hepatic Failure • Gallstones • Cases • Assessment  

**UGIB Screen**  
- Variceal vs non-variceal sorter  
- Risk scoring estimator  

**Pancreatitis Screen**  
- Severity ladder  
- Etiology selector  

**IBD Screen**  
- UC vs Crohn splitter  
- Complication visual  

**Hepatic Failure Screen**  
- LFT analyzer  
- Encephalopathy flagger  

**Gallstone Screen**  
- RUQ pain triage map  
- Biliary tree diagram  

**Cases**  
- Multi-step GI emergencies  

**Assessment**  
- MCQs + matching + interpretation tasks  

---

# **11. Copy & Content Kit**

Examples:
- “Variceal bleed: history of cirrhosis + hypotension + melena.”  
- “H. pylori: stool antigen or breath test preferred for diagnosis (conceptual).”  
- “Acute pancreatitis: lipase > 3× normal + epigastric pain.”  
- “UC: continuous inflammation from rectum.”  
- “Crohn: skip lesions, fistulas, granulomas.”  
- “Cholangitis: fever + RUQ pain + jaundice.”  
- “Acute liver failure: coagulopathy + encephalopathy.”  

Include: GI glossary, stool-type atlas, RUQ differential flowchart.

---

# **12. Analytics & A/B Plan**
- Compare flowchart vs tile-based GI bleed interfaces  
- Evaluate IBD differentiator accuracy  
- Measure performance using LFT analyzer  
- Monitor reductions in pancreatitis severity misclassification  

---

# **13. QA Checklist**
- GI bleed classification logic accurate  
- Pancreatitis criteria consistent  
- H. pylori interpretation correct  
- IBD distinctions validated  
- Gallstone/cholangitis logic correct  
- Synthetic-only testing  
- No prescriptive treatment dosing  

---

# **14. Roadmap**
- M0: UGIB + Pancreatitis  
- M1: IBD + Hepatic Failure  
- M2: Gallstone + LGIB  
- M3: Advanced case pack  

---

# **Acceptance Criteria**
- Learners distinguish variceal vs non-variceal bleeding  
- Learners classify pancreatitis severity  
- Learners differentiate UC vs Crohn accurately  
- Learners identify hepatic failure red flags  
- Learners sort RUQ pain reliably  
- GI Master maintains unified GI reasoning  

---

## **Now Generate**
Using all inputs above, generate deliverables in the required order.  
If any inputs are missing, infer them with safe GI-guideline-aligned assumptions and label them.
