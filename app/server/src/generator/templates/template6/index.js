const { stripIndent, source } = require('common-tags')

function template6({ profile, schools, jobs, projects, skills }) {
  return stripIndent`
    ${generateHeader()}
    \\begin{document}

    ${generateProfileSection(profile)}
    ${generateEducationSection(schools)}

    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \\resheading{Experience}
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \\begin{itemize}[leftmargin=*]
    \\item[]
        \\job
            {Mozilla}
            {Mountain View, CA}
            {Software Engineer Intern}
            {Jun 2016 – Aug 2016}
            \\begin{itemize}
            \\item Broadened search criteria for Firefox’s context menu to include subdomains in password suggestions
            \\item Refactored disabled-host APIs to use the permission manager for both Firefox and Android’s Fennec.
            \\item Fixed regressions for Firefox Electrolysis and improved dialogs and notification popups.
            \\end{itemize}

        \\job
            {Codecademy}
            {Manhattan, NY}
            {Coding Advisor}
            {Dec 2015 – May 2016}
            \\begin{itemize}
            \\item Created a JavaScript project for Codecademy Pro members now available in the new JS course.
            \\item Taught new coders how to avoid bugs and how to go through the process of fixing existing ones.
            \\item Reviewed general programming topics with students and provided assistance for lessons in Java, HTML, CSS, JavaScript, and Ruby.
            \\end{itemize}

        \\job
            {IEEE}
            {Piscataway, NJ}
            {Application Developer Intern}
            {Jun 2015 – Nov 2015}
            \\begin{itemize}
            \\item Wrote an API that allowed CRUD operations to be used for accessing and manipulating data involving current departments/groups/teams at IEEE.
            \\item Created a UI for admins that used the aforementioned API to automate the process of syncing departments/groups/teams on the site to relevant databases.
            \\item Improved the IEEE Innovate site by using cookies to display tailored web-content.
            \\end{itemize}
    \\end{itemize}


    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \\resheading{Skills}
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    \\begin{itemize}[leftmargin=*]
    \\setlength\\itemsep{0em}
    \\item[] \\skill{Languages:}{Java, JavaScript, Ruby, Python, HTML, CSS}
    \\item[] \\skill{Frameworks:}{Node.js, Koa, Express, React, Redux}
    \\end{itemize}


    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \\resheading{Projects}
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \\begin{itemize}[leftmargin=*]
    \\item[]
        \\project
            {LaTeX Resume Generator}
            {Node.js, Koa, React, Redux}
            {https://latexresu.me}
            {A webapp for generating LaTeX resumes from form data (including this one).}

        \\project
            {Flow Timer}
            {Node.js, Koa, React, Redux, PostgreSQL}
            {https://flowtimer.com}
            {A modern speedcubing app with a scrambler, timer, and analyzer for cubing statistics.}

        \\project
            {Reddit Image Scraper}
            {Ruby, Sinatra}
            {https://reddit-image-scraper.herokuapp.com}
            {A web app that lets you view a collage of images/videos from a subreddit.}
    \\end{itemize}


    \\end{document}
  `
}

function generateProfileSection(profile) {
  if (!profile) {
    return ''
  }

  const { fullName, email, phoneNumber, address, link } = profile
  const info = [email, phoneNumber, address, link].filter(Boolean).join(' | ')

  return stripIndent`
    \\begin{tabular*}{7in}{l@{\\extracolsep{\\fill}}r}
    \\textbf{\\Large ${fullName}} & \\textit{${info}}
    \\end{tabular*}
  `
}

function generateEducationSection(schools) {
  if (!schools) {
    return ''
  }

  return source`
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \\resheading{Education}
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    \\begin{itemize}[leftmargin=*]

    ${schools.map((school) => {
      const { name, location, degree, major, gpa, graduationDate } = school

      let degreeLine = ''

      if (degree && major) {
        degreeLine = `${degree} in ${major}`
      } else if (degree || major) {
        degreeLine = degree || major
      }

      if (gpa) {
        degreeLine += degreeLine ? `, GPA: ${gpa}` : gpa
      }

      return stripIndent`
        \\item[]
          \\school
            {${name || ''}}
            {${location || ''}}
            {${degreeLine}}
            {${graduationDate || ''}}
      `
    })}

    \\end{itemize}
  `
}

function generateHeader() {
  return stripIndent`
    % (c) 2002 Matthew Boedicker <mboedick@mboedick.org> (original author) http://mboedick.org
    % (c) 2003-2007 David J. Grant <davidgrant-at-gmail.com> http://www.davidgrant.ca
    % (c) 2008 Nathaniel Johnston <nathaniel@nathanieljohnston.com> http://www.nathanieljohnston.com
    %
    % (c) 2012 Scott Clark <sc932@cornell.edu> cam.cornell.edu/~sc932
    %
    %This work is licensed under the Creative Commons Attribution-Noncommercial-Share Alike 2.5 License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/2.5/ or send a letter to Creative Commons, 543 Howard Street, 5th Floor, San Francisco, California, 94105, USA.

    \\documentclass[11pt, a4paper]{article}
    \\newlength{\\outerbordwidth}
    \\pagestyle{empty}
    \\raggedbottom
    \\raggedright
    \\usepackage[svgnames]{xcolor}
    \\usepackage{framed}
    \\usepackage{tocloft}
    \\usepackage{enumitem}


    %-----------------------------------------------------------
    %Edit these values as you see fit

    \\setlength{\\outerbordwidth}{3pt}  % Width of border outside of title bars
    \\definecolor{shadecolor}{gray}{0.75}  % Outer background color of title bars (0 = black, 1 = white)
    \\definecolor{shadecolorB}{gray}{0.93}  % Inner background color of title bars


    %-----------------------------------------------------------
    %Margin setup

    \\setlength{\\evensidemargin}{-0.25in}
    \\setlength{\\headheight}{0in}
    \\setlength{\\headsep}{0in}
    \\setlength{\\oddsidemargin}{-0.25in}
    \\setlength{\\tabcolsep}{0in}
    \\setlength{\\textheight}{9.5in}
    \\setlength{\\textwidth}{7in}
    \\setlength{\\topmargin}{-0.3in}
    \\setlength{\\topskip}{0in}
    \\setlength{\\voffset}{0.1in}


    %-----------------------------------------------------------
    %Custom commands
    \\newcommand{\\resitem}[1]{\\item #1 \\vspace{-4pt}}
    \\newcommand{\\resheading}[1]{
      \\parbox{\\textwidth}{\\setlength{\\FrameSep}{\\outerbordwidth}
        \\begin{shaded}
    \\setlength{\\fboxsep}{0pt}\\framebox[\\textwidth][l]{\\setlength{\\fboxsep}{4pt}\\fcolorbox{shadecolorB}{shadecolorB}{\\textbf{\\sffamily{\\mbox{~}\\makebox[6.762in][l]{\\large #1} \\vphantom{p\\^{E}}}}}}
        \\end{shaded}
      }\\vspace{-11pt}
    }
    \\newcommand{\\ressubheading}[4]{
    \\begin{tabular*}{6.5in}{l@{\\cftdotfill{\\cftsecdotsep}\\extracolsep{\\fill}}r}
        \\textbf{#1} & #2 \\\\
        \\textit{#3} & \\textit{#4} \\\\

    \\end{tabular*}\\vspace{-6pt}}

    \\newcommand{\\school}[4]{\\vspace{1.5mm}
      \\textbf{#1} \\hfill #2 \\hfill \\\\ \\textit{#3} \\hfill \\textit{#4} \\\\ \\vspace{1.5mm}
    }

    \\newcommand{\\job}[4]{
      \\textbf{#1} \\hfill #2 \\hfill \\\\ \\textit{#3} \\hfill \\textit{#4}
    }

    \\newcommand{\\skill}[2]{
      \\textbf{#1} #2 \\\\
    }

    \\newcommand{\\project}[4]{ \\vspace{1.5mm}
      \\textbf{#1} #2 \\hfill \\textit{#3} \\\\ #4 \\\\ \\vspace{1.5mm}
    }
    %-----------------------------------------------------------
  `
}

module.exports = template6
