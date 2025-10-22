import React from 'react';

// 1. IMPORT THE IMAGE:
// Assuming App.jsx and Abhiskek_Patil2.jpg are in the same folder (src), 
// App.jsx - Single-file React + Tailwind portfolio component
// This component is enhanced with more detailed projects, better skill grouping, 
// and a visual placeholder in the hero section.

export default function App() {
  // --- Data Definition ---
  const projects = [
    {
      title: 'Deep Learning Satellite Classifier',
      desc: 'Developed a Convolutional Neural Network (CNN) using PyTorch for classifying high-resolution satellite imagery, achieving 95% accuracy. The model was optimized for inference speed and integrated into a cloud environment for batch processing.',
      link: '#', 
      repo: 'https://github.com/Abhipatilap09/satellite-classifier-repo',
      tags: ['PyTorch', 'Python', 'CNN', 'Cloud Deployment'],
    },
    {
      title: 'Real-Time Microservice API Gateway',
      desc: 'Architected and built a highly concurrent API Gateway using Node.js and Express to manage traffic for multiple backend microservices. Implemented rate limiting, JWT authentication, and Dockerized deployment to Kubernetes.',
      link: '#', 
      repo: 'https://github.com/Abhipatilap09/microservice-gateway-repo',
      tags: ['Node.js', 'Express', 'Microservices', 'Kubernetes'],
    },
    {
      title: 'Multi-Criteria Data Analysis Dashboard',
      desc: 'Created an interactive data visualization dashboard using React and Power BI to allow users to filter complex datasets (over 1M rows) by multiple criteria in real-time, significantly reducing report generation time for stakeholders.',
      link: '#', 
      repo: 'https://github.com/Abhipatilap09/data-dashboard-repo',
      tags: ['React', 'Power BI', 'DataViz', 'SQL'],
    },
    {
      title: 'Weather App (Full-Stack)',
      desc: 'Full-stack weather application with a modern React frontend and a deployed Node.js/Express backend. It features real-time weather data retrieval and efficient caching mechanisms for high availability.',
      link: 'https://weather-app-abhishekpatil09.onrender.com/',
      repo: 'https://github.com/Abhipatilap09/weather-app-abhishekpatil09',
      tags: ['React', 'Node.js', 'API Integration', 'Full-Stack'],
    },
  ];

  // --- Utility Functions ---
  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = encodeURIComponent(form.name.value || '');
    const email = encodeURIComponent(form.email.value || '');
    const message = encodeURIComponent(form.message.value || '');
    const subject = encodeURIComponent('Portfolio Contact from ' + (form.name.value || 'Website Visitor'));

    // Using a mailto fallback. Replace with Formspree/Netlify/Your API for production.
    const mailto = `mailto:abhipatil3515@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0AFrom:%20${name}%20<${email}>`;
    window.location.href = mailto;
  }

  // --- Component JSX ---
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Header & Navigation */}
      <header className="bg-white sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-teal-600">Abhishek Patil</h1>
            <p className="text-sm text-gray-600">Software Engineer | UTSA Masters in Computer Science | AI & ML Enthusiast</p>
          </div>
          <nav className="space-x-4 text-sm hidden md:flex items-center">
            <a href="#about" className="hover:text-teal-600 transition duration-150">About</a>
            <a href="#projects" className="hover:text-teal-600 transition duration-150">Projects</a>
            <a href="#skills" className="hover:text-teal-600 transition duration-150">Skills</a>
            <a href="#achievements" className="hover:text-teal-600 transition duration-150">Achievements</a>
            {/* Added GitHub to main nav */}
            <a href="https://github.com/Abhipatilap09" target="_blank" rel="noreferrer" className="hover:text-teal-600 transition duration-150">GitHub</a>
            <a href="#contact" className="bg-teal-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-teal-700 transition duration-150">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 grid gap-20">
        
        {/* Hero Section (About) - Section 2 now contains the image/visual hook */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Intro Text and Links */}
          <div>
            <h2 className="text-5xl font-extrabold mb-4 leading-tight text-gray-800">Building reliable software and intelligent systems.</h2>
            <p className="text-lg text-gray-700 mb-8">I am a Master's student in Computer Science at UTSA, building upon 3+ years of corporate experience in software development. My expertise lies at the intersection of full-stack development and advanced AI/ML solutions, allowing me to build robust, end-to-end applications. I am driven by a passion for creating innovative, AI-driven technologies that push past traditional boundaries.</p>

            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" download className="px-6 py-3 border border-gray-300 rounded-lg text-teal-600 font-medium hover:bg-teal-50 transition duration-150">Download Resume</a>
              <a href="https://github.com/Abhipatilap09" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150">GitHub Profile</a>
              <a href="https://www.linkedin.com/in/abhishek-patil-21b602216/" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150">LinkedIn</a>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="/Abhishek_Patil2.jpg"
              alt="Abhishek Patil Professional Headshot"
              className="w-72 h-72 rounded-full shadow-xl border-4 border-teal-400 transform hover:scale-105 transition duration-300
             object-cover object-top" // <-- ADD object-top (or object-[percentage])
             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/e0f2f7/066d77?text=Error" }} 
            />
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{p.title}</h4>
                <p className="text-gray-700 mb-4">{p.desc}</p>
                
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-teal-800 bg-teal-100 px-3 py-1 rounded-full shadow-inner">{tag}</span>
                    ))}
                </div>

                <div className="flex gap-4">
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border border-teal-400 text-teal-600 rounded-lg hover:bg-teal-50 font-medium">Live Demo</a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium">Source Code</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Technical Proficiencies</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Category 1: Frontend & Languages */}
              <div>
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">Frontend & Languages</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind.
                  <br />
                  C++, Python, Java, SQL.
                </p>
              </div>

              {/* Category 2: Backend & Databases */}
              <div>
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">Backend & Databases</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Node.js, Express, REST APIs, Microservices, Multithreading, SQL, MongoDB.
                </p>
              </div>

              {/* Category 3: DevOps & Cloud */}
              <div>
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">DevOps & Cloud</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  **Azure** (Functions, DevOps), **Docker**, **Kubernetes**, Jenkins, GitHub Actions, CI/CD Pipelines.
                </p>
              </div>

              {/* Category 4: Data Science & AI/ML */}
              <div className="lg:col-span-2">
                <h5 className="text-lg font-bold mb-3 text-teal-700 border-b pb-1">Data Science & AI/ML</h5>
                <p className="text-sm text-gray-700 leading-relaxed">
                  TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Data Visualization, Power BI, Statistical Modeling.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Achievements & Certificates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Generative AI: The Evolution of Thoughtful Online Search</p>
                <p className="text-sm text-gray-500 mt-1">LinkedIN learning | Skills - Generative AI,Artificial Intelligence for Business,Search Engine Technology,Artificial Intelligence (AI)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Learning Microsoft 365 Copilot for Work | Issued Jun 2025</p>
                <p className="text-sm text-gray-500 mt-1">LinkedIN learning | Skills: Microsoft Copilot · Office 365</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Streamlining Your Work with Microsoft Copilot | Issued Jun 2025</p>
                <p className="text-sm text-gray-500 mt-1">LinkedIN learning | Skills: AI Productivity · Microsoft Copilot</p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Introduction to Generative AI | Issued Dec 2025</p>
                <p className="text-sm text-gray-500 mt-1">Google | Credential ID 13102783</p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Introduction to Responsible AI | Issued Dec 2024</p>
                <p className="text-sm text-gray-500 mt-1">Google | Credential ID 13104039</p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Introduction to Large Language Models | Issued Dec 2024</p>
                <p className="text-sm text-gray-500 mt-1">Google | Credential ID 13104390</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Outstanding Contributor Award</p>
                <p className="text-sm text-gray-500 mt-1">Previous Employer, 2022</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Learning Python| Issued Aug 2021</p>
                <p className="text-sm text-gray-500 mt-1">LinkedIN learning | Skills: Python</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Java Full stack developer Course Certification| Aug 2021 to May 2022</p>
                <p className="text-sm text-gray-500 mt-1">Seed Infotech | Skills: C, SQL, Responsive Web Designing, Core Java, WCD, Spring and Hibernate, Angular JS </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                <p className="font-semibold text-gray-800">Specialization in Deep Learning</p>
                <p className="text-sm text-gray-500 mt-1">Coursera / DeepLearning.AI</p>
            </div>
          </div>
        </section>

        {/* Blog placeholder */}
        <section id="blog" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Blog / Technical Insights</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center border border-gray-100">
            <p className="text-gray-700 text-lg">
                Project Proposal: AI-Based Software Defect Prediction
                Abhishek Patil
                CS 5163 / Project Proposal
                October 10, 2025
                Abstract
               This proposal describes an AI-based software defect prediction project: the problem statement
               and importance, related literature, datasets, methodology and evaluation plan, expected
               contributions, and implementation details. The document includes diagrams, charts, tables, and
               quantitative evidence to justify importance and expected outcomes.

               Metric
                 |
               Extraction
                 |
               Preprocessing
                 |
               & Labeling
                 |
               Model
                 |
               Training (ML)
                 |
               Prediction
                 |
               & Ranking
                 |
               Evaluation &
                 |
               Deployment

               Figure 1: Workflow of the proposed AI-based defect prediction framework.
               
               1 Problem statement and importance

               1.1 What is the problem?
               Modern software systems evolve rapidly and are large; defects that reach production are costly
               and damaging. The core problem is: how to automatically predict which modules (files, classes
               or packages) are likely to contain defects before system testing or release, so testing and repair
               resources can be focused efficiently.

               1.2 Why is that problem important?
               • Testing and quality assurance often form the largest fraction of development cost. Classic
                 studies estimate testing can account for roughly 30–50% of development effort (Brooks, 1995).
               • Defects found later (after release) are orders of magnitude costlier to fix than earlier ones; reducing
                 post-release defects reduces support/maintenance costs and improves user experience.
               • Prior empirical work shows AI-based defect predictors can detect a high fraction of defects
                 while inspecting a small fraction of files (e.g., detecting on average 70–88% of defects while
                 highlighting 20–30% of files). For example, a production case study achieved average detection
                 (PD) 87% while requiring inspection of 24% of files, giving a large inspection-effort gain
                 (Tosun et al., 2009).

              Objective justification / statistics
                • From the case study: average PD = 87% (std 8.1) and PF = 26% (std 8.5), and effort gain
                  (GE) 72.5% for file-level predictions across releases. These are practical numbers demonstrating
                  large reductions in inspection effort while maintaining high defect coverage (Tosun
                  et al., 2009).
                • Code reviews and manual inspections detect between 35–60% of defects (literature), while AI
                  predictors often reach 70% or higher on public datasets — showing clear added value when
                  automated tools are used (Menzies et al., 2007; Lessmann et al., 2008).
              1.3 Who benefits?
                • Developers and testers: prioritized tasks and faster turnaround.
                • QA managers and product owners: better resource allocation and release decision support.
                • Organizations with legacy code and limited QA budgets (telecoms, enterprise software, OSS
                  projects).
                • End-users: fewer post-release failures and higher software reliability.

              2 Literature review
                Below are concise summaries of four related and influential works (problem, method, main results).
                The case-study report used as core reference is included and summarized first. Full APA-style
                references are provided at the end.

              2.1 Tosun, Turhan & Bener (2009) — Case study (deployed)
                Problem: Deploying a defect prediction model in industry to reduce testing/inspection effort.
                Method: Collected static code metrics (LOC, complexity, Halstead, McCabe metrics) and linked
                pre-release defects to files; used a Na¨ıve Bayes classifier (Prest tool) trained per-project/release and
                calibrated with local data.
                Results: Over multiple releases, average PD = 87% and PF = 26% (stds reported). The model
                highlighted 24% of files containing 88% of defects, yielding approximately 72.5% reduction in
                inspection effort (gain). The model was integrated into the company’s workflow (Tosun et al.,
                2009).
             2.2 Menzies, Greenwald & Frank (2007)
               Problem: Can static code attributes be data-mined to create defect predictors?
               Method: Applied data mining (various classifiers) to widely-used datasets (e.g., NASA MDP /
               public datasets) using static code metrics and compared classifiers.
               Results: Data mining static attributes yields good predictors; simple learners often perform well.
               Typical detection rates reported around 70% on average across datasets, with specific numbers
               varying by dataset (Menzies et al., 2007).
               Why relevant: Provides foundational evidence that static code metrics are predictive and that
               simple ML models are strong baselines.
             2.3 Lessmann et al. (2008)
               Problem: Benchmark classification models for defect prediction and assess impact of classifier
               choice.
               Method: Comprehensive empirical benchmark of multiple classification algorithms on several
               public datasets, with statistical tests.
               Results: No single classifier dominates across datasets; however ensemble methods and robust
               learners perform reliably. The authors emphasize that data preprocessing and feature selection
               often matter as much as algorithm choice (Lessmann et al., 2008).
               Why relevant: Suggests that choosing a small set of strong models and carefully tuning and
               preprocessing is more important than searching dozens of algorithms.
              2.4 Ostrand, Weyuker & Bell (2005)
               Problem: Predicting location and number of faults in large software systems.
               Method: Used statistical analysis and models on large industrial systems to predict where faults
               are likely to occur.
               Results: Showed that historical fault and code metrics can effectively guide testing and maintenance
               effort allocation; predictions are actionable in large-scale systems (Ostrand et al., 2005).
               Why relevant: Supports the practical claim that historical metrics + simple models can be used
               to prioritize QA work.

              Synthesis. The literature supports three main points: (1) static code metrics are useful and
              predictive; (2) simple, well-calibrated classifiers (e.g., Na¨ıve Bayes, ensembles) reach strong performance;
              (3) local calibration with organization-specific data is crucial to reach production-level
              gains. The case-study (Tosun et al.) demonstrates real-world deployment and cost-benefit results.

            3 Data
            3.1 Datasets that will be used
            • PROMISE repository (contains the dataset derived from the case study among many
              public defect datasets):
              Link: http://promisedata.org/repository (search for the “Tosun / Turkcell” entries or
              standard defect datasets).
            • NASA MDP (Metrics Data Program) public datasets:
              Link: http://mdp.ivv.nasa.gov
            • Local / Organization data (if available): If you have access to a codebase and its defect
              tracking + version history, collect file-level metrics and match defects to files (as in the case
              study).
            3.2 Detailed data characteristics
              PROMISE / Tosun-derived dataset (example characteristics) Based on the deployed case
              study:
            • Granularity: file-level (Java/JSP) and package-level variants exist.
            • Number of projects / releases: 9 projects across 10 releases in the published dataset (as
              in the study).
            • Number of modules: depends on project; typical projects included hundreds to thousands
              of source files (the pilot TSP project used 107 Java packages; another component had many
              more files).
            • Features: Static code metrics (McCabe cyclomatic measures, Halstead metrics, LOC, operand/operator
              counts, decision/branch counts), and additional version/history flags (e.g., edited in last 6
              months).
            • Labels: Binary label per module: 1 = defect-prone (at least one defect detected in test
              phase), 0 = defect-free.
            • Temporal coverage: per-release historical data (training on release n − 1, test on release
              n) — supports realistic evaluation.
            These characteristics are described and quantified in the Tosun et al. case study (Tosun et al.,
            2009).

            3.3 Input / output variables
            • Inputs (features): numeric static code metrics (LOC, cyclomatic complexity v(G), Halstead
              volume V, operands/operators counts, branch count, decision count, maintenance/complexity
              ratios), categorical or boolean version flags (e.g., changed recently).
              • Output (target): binary defect label (0/1). Optionally, multi-class or defect-count regression
                can be considered later.
            3.4 Dataset summary
            Table 1: Datasets.
            Dataset Projects Releases Modules (approx.)
            Defective Modules
            (approx.)
            PROMISE (Tosun/Turkcell) 9 10 500–2000 modules
            across releases
            Dataset-dependent
            (varies by release)
            NASA MDP Multiple Per dataset 100–2000 source
            files (per project)
            Dataset-dependent
            Local / Organization Data 1 (if available) Per release To be determined
            (TBD)
          TBD

        4 Methodology and evaluation plan
        4.1 Overall approach and steps
          1. Data collection: Extract static metrics using an automated tool (e.g., Prest in Tosun et al.,
          or custom parsers), collect defect logs from issue tracking, and match defects to files using
          version history.
          2. Data cleaning and labeling: Remove files with missing data, normalize numeric metrics,
             and construct the binary labels.
          3. Exploratory Data Analysis (EDA): Visualize distributions, compute correlations, inspect
             class imbalance, and understand per-project characteristics.
          4. Feature engineering: Add derived features (e.g., churn, recent-change flags, ratio features),
             scale/normalize features where required.
          5. Modeling: Train multiple models (baseline Na¨ıve Bayes, Logistic Regression, Random Forest,
             Gradient Boosting like XGBoost, and optionally simple neural networks). Use crossrelease
             evaluation (train on release n − 1 and test on n) to mimic deployment.
          6. Calibration and selection: Calibrate thresholds for the desired PD/PF tradeoff; prefer
             models and thresholds that keep PF reasonably low while maximizing PD.
          7. Deployment plan: Integrate predictions into CI/CMDB/UI to show per-file risk; retrain
             periodically (e.g., every 3 months) with new labeled data (as in Tosun et al.).

        4.2 Data preprocessing details
          • Missing values: Impute with median for numeric metrics; or drop features with high missingness.
          • Normalization: Apply log transform for heavily-skewed measures (like LOC) and then
            standard scaling.
          • Class imbalance: If defect instances are rare, use stratified sampling, class weighting, or
            resampling (SMOTE) depending on experiments.
          • Feature selection: Use correlation analysis, permutation importance, or recursive feature
            elimination to reduce redundant metrics.
        4.3 Model choices (examples and rationale)
          • Na¨ıve Bayes — simple baseline; interpretable; performed well in prior work (and used in
            production in Tosun et al.). Good initial baseline.
          • Logistic Regression — interpretable probabilistic baseline.
          • Random Forest / Gradient Boosting (XGBoost) — generally strong performance with
            tabular numeric data; handles nonlinear interactions and feature importance.
          • Ensemble (stacking)—combine classifiers if cross-validation shows complementary strengths.
        4.4 Evaluation metrics and rationale
          Primary metrics (domain-specific):
          • PD (Probability of Detection) = TP / (TP + FN). High PD reduces missed defects (false
            negatives are costly).
          • PF (Probability of False Alarm) = FP / (FP + TN). Low PF avoids wasting testing
            effort on false positives.
          • ROC AUC — overall discriminative ability.
          • Precision / Recall / F1 — complementary views; recall maps closely to PD.
          • Cost-benefit / Gain in Effort (GE): Use the gain formula from Arisholm & Briand /
          Tosun et al.: inspect only the top-ranked files indicated by the predictor vs. random strategy.
          Evaluation plan
          • Use cross-release evaluation: train on release n − 1, test on n (realistic for deployment).
          • Report PD/PF per release and average + standard deviation (as in Table 3).
          • Use threshold tuning to select operating point that balances PD and PF for organizational
            needs (e.g., prefer PD 80% if acceptable PF 30%).
          • Perform ablation studies to measure contribution of version-history flags vs. static metrics.

        4.4.1 Evaluation protocol (detailed)
          We will use a cross-release evaluation that mimics deployment: for each project and release r
          (where r ≥ 2) we will train on release r − 1 and test on release r, then report per-release metrics
          and averages with standard deviations. Each model run will be repeated across 30 random seeds
          (where randomness affects e.g., classifier internal randomness or sampling) to quantify variability.
          Hyperparameter tuning will be performed using nested validation on the training release(s)
          only: a grid or random search using 5-fold cross-validation on release r − 1 (or stratified sampling
          within r − 1 where possible). The final model will be selected using validation performance and
          then evaluated on release r.
          For comparisons between models across releases, we will use paired statistical tests (Wilcoxon
          signed-rank test at α = 0.05) and report effect sizes (Cliff’s delta). We will also report 95%
          confidence intervals for mean PD and PF using bootstrap resampling (1000 resamples).
        4.4.2 Operating point selection and calibration
          Because project stakeholders value high defect coverage, we will tune classifier thresholds to satisfy
          business constraints (for example, select the minimum threshold that achieves PD ≥ 80% while
          maintaining PF ≤ 30%). Probability outputs will be calibrated using Platt scaling or isotonic
          regression on validation data. We will present PD vs PF curves and recommend an operating point
          per project based on stakeholder preferences.
        4.5 Example equations
        PD =   TP
             --------
             TP + FN
        PF =   FP
             -------
             FP + TN    (1)
        Gain in Effort (GE) = MRT − MDF   × 100%, (2)
                              ----------
                                 MRT
        where MRT is modules inspected by random testing and MDF is modules inspected using the defect
        predictor.

       5 Expected contributions
       5.1 Scientific merit
        • Empirical evaluation of predictor performance on real project(s) using cross-release evaluation,
          including ablation of version-history features.
        • Comparative analysis of several learning algorithms with production-style calibration and
          evaluation (operating point selection for PD/PF).
        • Reproducible pipeline and evaluation scripts; a cleaned dataset (if allowed by organization/
          GDPR) that could be released to public repositories with anonymization.
       5.2 Broader impacts (societal / organizational)
        • Help organizations better allocate QA resources, reduce cost and time-to-release, and decrease
          post-release failures (improving user experience).
        • Provide actionable tooling (dashboard/CI integration) to bring predictive analytics into everyday
          development workflows.
        • With proper privacy and policy controls, smaller teams/OSS projects that lack dedicated QA
          could use the approach to prioritize volunteer/limited review resources.
       5.3 Reproducibility and deliverables
           Deliverables will include:
          1. A reproducible code repository (GitHub) containing data extraction scripts, preprocessing
             pipeline, model training and evaluation code, and Dockerfile / requirements.txt.
          2. A documented dataset snapshot (anonymized) where permissible, or instructions to reproduce
             dataset extraction from raw logs.
          3. A short dashboard mockup and a final report with per-release tables and plots.
             All experiments will record random seeds, library versions, and hardware used; we will provide a
           ‘run.sh‘ driver to reproduce major results.

        6 Visualizations, figures and tables
        6.1 Confusion matrix (example)
        Table 2: Confusion matrix (example)
                         Predicted Defective Predicted Defect-free
        Actual Defective       TP                          FN
        Actual Defect-free     FP                          TN
        6.2 Performance table from the case study
      Table 3: Performance of the prediction model (releases 2–10) — values from the case study.
               Release PD (%) PF (%) GE (%)
                 2      77    33     58
                 3      92    21     81
                 4      82    23     78
                 5      75    15     74
                 6      87    18     83
                 7      83    21     71
                 8      98    33     68
                 9      88    29     72
                10      97    41     68
        Average 87 (std 8.1) 26 (std 8.5) 72.5 (std 7.6)
        Source: Tosun et al. (case study).

         6.3 ROC-like scatter of PD vs PF across releases
               
          100                         .R8  .R10
                            .R3
          90                        .R9
  PF (%)                .R6
          80               .R7 .R4
                     .R5           .R2
          70

          60
               0 5 10 15 20 25 30 35 40 45 50
                        PD (%)

             Figure 2: PD vs PF per release (values from case-study). Ideal top-left is high PD and low PF.
          7 Implementation plan and timeline (concise)
          • Weeks 1–2: Data collection scripts, extract static metrics, and match defects (if local data
            available). Confirm dataset counts and fill Table 1.
          • Weeks 3–4: EDA, preprocessing, and baseline model (Na¨ıve Bayes) implementation.
          • Weeks 5–6: Train additional models (RF, XGBoost), threshold tuning and cross-release
            evaluation.
          • Weeks 7–8: Ablation, cost-benefit analysis, and preparation of final report and dashboard
            mockups.
          • Ongoing: Recalibration every 3 months (if deployed) aligning with the case study practice.
        7.1 Resources and software
          • Compute: Typical experiments require modest CPU resources; a machine with 2–4 CPU
            cores and 16–32 GB RAM will be sufficient for tabular ML experiments. GPU not required
          f or baseline models.
          • Software: Python 3.8+, scikit-learn, xgboost, pandas, numpy, matplotlib, seaborn (for
            EDA), and Docker for reproducibility.

        8 Threats to validity and ethical considerations
        8.1 Threats to validity
          • Internal validity: labeling errors when mapping defects to files may inflate or deflate performance.
            We mitigate this by using conservative matching heuristics and manual checks on
            a sample.
          • External validity: public datasets and a single industrial case may not generalize to all
            software domains (e.g., embedded systems). We will note domain differences explicitly.
          • Construct validity: choices of static metrics may not capture the full complexity of defect
            introduction; we include history features to improve realism.
        8.2 Ethics and privacy
          If local/organization data is used, we will anonymize identifiers (file paths, developer IDs) and only
          release aggregated metrics. Any data sharing will require organizational permission and comply
          with data handling policies (e.g., GDPR where applicable).
        9 References
        References
        Brooks, F. P. (1995). The Mythical Man-Month: Essays on Software Engineering. Addison-Wesley.
        Menzies, T., Greenwald, J., & Frank, A. (2007). Data mining static code attributes to learn defect
        predictors. IEEE Transactions on Software Engineering, 33(1), 2–13.
        Lessmann, S., Baesens, B., Mues, C., & Pietsch, S. (2008). Benchmarking classification models
        for software defect prediction: A proposed framework and novel findings. IEEE Transactions on
        Software Engineering, 34(4), 485–496.
        Ostrand, T. J., Weyuker, E. J., & Bell, R. M. (2005). Predicting the location and number of faults
        in large software systems. IEEE Transactions on Software Engineering, 31(4), 340–355.
        Tosun, A., Turhan, B., & Bener, A. (2009). Practical considerations in deploying AI for defect
        prediction: A case study within the telecommunication industry. Technical report / proceedings
        (case study).
            </p>
            <a href="#" className="mt-4 inline-block text-sm text-teal-600 hover:underline">Link to Medium / Hashnode</a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-8">
          <h3 className="text-3xl font-bold mb-8 text-teal-600">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Send Me a Message</h4>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input id="name" name="name" className="w-full border p-3 rounded-lg mb-4 focus:ring-teal-500 focus:border-teal-500" placeholder="Your name" required />

              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" className="w-full border p-3 rounded-lg mb-4 focus:ring-teal-500 focus:border-teal-500" placeholder="you@example.com" required />

              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full border p-3 rounded-lg mb-6 focus:ring-teal-500 focus:border-teal-500" placeholder="Hi Abhishek — I want to talk about..." required />

              <button type="submit" className="w-full px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition duration-150 shadow-md">Send Email</button>
            </form>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-center items-center text-center">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Connect Directly</h4>
              <p className="text-base text-gray-700 mb-6">I'm actively looking for full-time opportunities in Software Engineering and ML/AI.</p>
              
              <div className="space-y-3 w-full max-w-sm">
                <a href="mailto:abhipatil3515@gmail.com" className="flex items-center justify-center p-3 border rounded-lg hover:bg-teal-50 transition duration-150">
                    <span className="font-medium text-teal-600">abhipatil3515@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-patil-21b602216/" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 border rounded-lg hover:bg-teal-50 transition duration-150">
                    <span className="font-medium">LinkedIn Profile</span>
                </a>
                <a href="https://github.com/Abhipatilap09" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 border rounded-lg hover:bg-teal-50 transition duration-150">
                    <span className="font-medium">GitHub: @Abhipatilap09</span>
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Abhishek Patil — Built with React & Tailwind</div>
      </footer>
    </div>
  );
}