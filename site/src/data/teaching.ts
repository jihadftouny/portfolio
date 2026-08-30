import type { ImageMetadata } from "astro";

import aubImg from "../assets/teaching/aub-starter-kit.jpg";
import uaeImg from "../assets/teaching/uae-ai-academy.jpg";
import toolkitImg from "../assets/teaching/zaka-toolkit.jpg";
import clyntechImg from "../assets/teaching/clyntech-hackathon.jpg";
import proabledImg from "../assets/teaching/proabled-graduation.jpg";
import zakaCohortImg from "../assets/teaching/zaka-cohort.jpg";
import imagicImg from "../assets/teaching/imagic-training.jpg";
import alsharqImg from "../assets/talks/alsharq-webinar.jpg";
import youthPanelImg from "../assets/talks/youth-empowered-panel.jpg";
import palestineImg from "../assets/talks/palestine-embassy.jpg";

import seedsLogo from "../assets/logos/seeds.jpg";
import visaLogo from "../assets/logos/visa.jpg";
import inceptionLogo from "../assets/logos/inception-g42.jpg";
import imagicLogo from "../assets/logos/imagic.jpg";

export interface Logo {
  src: ImageMetadata;
  alt: string;
}

export interface Programme {
  title: string;
  year?: string;
  body: string;
  href?: string;
  hrefLabel?: string;
  /* Official promotional artwork for the programme, not course material.
     The material itself is ZAKA's and stays unpublished. */
  image?: ImageMetadata;
  imageAlt?: string;
  /* Partner or client marks, rendered on light plates. */
  logos?: Logo[];
}

/* Everything below ran under ZAKA. Keeping them nested matters: AUB's own page
   describes the certificate as an AUB and ZAKA partnership, so presenting these
   as direct engagements would not survive a click.

   Course descriptions follow ZAKA's own published wording for each programme
   rather than a paraphrase, so nothing here overstates what was taught. */
export const zakaProgrammes: Programme[] = [
  {
    title: "AUB AI Starter Kit",
    year: "2025",
    href: "https://aub.edu.lb/msfea/online/Programs/AI-starter-kit.html",
    hrefLabel: "View the programme",
    body: "An eight week online professional certificate for the American University of Beirut, for people starting from zero. I wrote it end to end: the syllabus, the lessons, the assessments, and the notes future instructors teach it from. Someone else delivers it, which was the point. The examples are local, including ones in Arabic.",
    image: aubImg,
    imageAlt:
      "Course artwork for the AI Starter Kit, an AUB Maroun Semaan Faculty of Engineering and Architecture certificate in partnership with ZAKA",
  },
  {
    title: "UAE AI Academy, with Microsoft",
    /* 2025, per the programme's own poster: 21 April to 4 June 2025. */
    year: "2025",
    href: "https://www.middleeastainews.com/p/microsoft-upskill-1-million-in-ai-uae",
    hrefLabel: "Read about the initiative",
    body: "A national AI programme for university students, faculty and staff, run with Microsoft. I co-wrote the course and taught on it. Two months, self-paced material, live workshops, and a hackathon at the end.",
    image: uaeImg,
    imageAlt:
      "Campaign artwork for the UAE Artificial Intelligence Academy, run with Microsoft and ZAKA",
  },
  {
    title: "Judging the Clyntech hackathon",
    year: "2025",
    href: "https://berytech.org/",
    hrefLabel: "Berytech",
    body: "Judged the Clyntech climate tech hackathon, run by Berytech. Judging is teaching compressed into ten minutes: you have one pitch to work out whether a team understands their own system, and the feedback has to be useful to people who just spent a weekend on it.",
    image: clyntechImg,
    imageAlt:
      "Clyntech Hackathon 2025 winners with Berytech, holding first, second and third place prize cheques",
  },
  {
    title: "Data Analytics for the Professionally Abled",
    year: "2025",
    body: "A Data Analytics track delivered with shareQ and ProAbled alongside ZAKA's education team, graduating twenty Professionally Abled participants. The same week I ran the Career Map workshop, walking high-school students through what AI careers actually look like.",
    image: proabledImg,
    imageAlt: "The Professionally Abled Data Analytics cohort at their graduation ceremony",
  },
  {
    title: "SEEDS, K-12",
    /* 2025, the year he wrote the content, confirmed with the achievement badge. */
    year: "2025",
    href: "https://seeds.school/",
    hrefLabel: "SEEDS",
    body: "The first K-12 AI curriculum in the MENA region. I wrote content covering grades 4 to 12: data, how machines learn, what the tools can do, and how to use them responsibly.",
    logos: [{ src: seedsLogo, alt: "SEEDS by ZAKA" }],
  },
  {
    title: "AI Personal Toolkit",
    year: "2024 to 2025",
    href: "https://zaka.ai/ai-personal-toolkit/",
    hrefLabel: "View the course",
    body: "For people who use AI rather than build it. Seven modules and about twenty-four tools, covering AI fundamentals, getting real work out of ChatGPT, generating images, video and audio, using all of it for creative problem solving, and where the ethical lines are. Twenty-one hours across seven sessions, built to survive a working week. I taught three cohorts, retailored each time for the room it was going into, including a training for teachers at Université Saint-Joseph.",
    image: toolkitImg,
    imageAlt: "Cover artwork for ZAKA's AI Personal Toolkit course",
  },
  {
    title: "Corporate training",
    year: "2024 to 2025",
    body: "AI training written and delivered for Inception, a G42 company, and VISA Jordan in 2024, and IMAGIC in 2025. Different rooms, same problem: people who are good at their jobs and now have to work out what these tools are actually for. Practical sessions, not theory.",
    image: imagicImg,
    imageAlt: "The IMAGIC training cohort with ZAKA in 2025",
    logos: [
      { src: inceptionLogo, alt: "Inception, a G42 company" },
      { src: visaLogo, alt: "Visa" },
      { src: imagicLogo, alt: "IMAGIC" },
    ],
  },
  {
    title: "AI certification and bootcamps",
    year: "2023 to 2025",
    href: "https://zaka.ai/bootcamp/",
    hrefLabel: "View the bootcamp",
    body: "The technical track, and the one that turns people into practitioners rather than users. The four week bootcamp runs from data science and machine learning through deep learning and computer vision to natural language processing and time series, and nobody is certified without presenting a capstone. The longer certification track covers the same ground at depth, across four cohorts. One bootcamp cohort in 2023, then certification from there.",
    image: zakaCohortImg,
    imageAlt: "A ZAKA cohort gathered in Beirut",
  },
];

export interface Talk {
  title: string;
  year: string;
  body: string;
  image?: ImageMetadata;
  imageAlt?: string;
}

/*
  Speaking and one-off training engagements, reverse chronological. Grounding:
  DSC MENA 24 is publicly documented by the conference; the LegalTech session
  is on the course's published schedule; the rest are Jihad's own posts with
  photographic evidence, the same standard as the rest of the site.
*/
export const talks: Talk[] = [
  {
    title: "AI for Young Social Innovators",
    year: "2025",
    body: "Ran the training for Al Sharq Forum's two-day AI-Driven Solutions for Young Social Innovators webinar: how changemakers across the region can put AI to work on the problems their communities actually have.",
    image: alsharqImg,
    imageAlt: "The virtual room of the Al Sharq Forum webinar, participants joining from across the region",
  },
  {
    title: "The Ethics Behind AI Decisions",
    year: "2025",
    body: "A session at the Youth Empowered by AI event, held with Together For Lebanon, followed by a panel on the same ground: privacy, bias, responsibility, safety, and what using these systems carefully actually asks of you.",
    image: youthPanelImg,
    imageAlt: "The Youth Empowered by AI panel on stage",
  },
  {
    title: "AI at the Embassy of Palestine",
    year: "2025",
    body: "A presentation in Beirut with ZAKA and Tech Trendy: is AI hype or here to stay, what makes ChatGPT tick, how image generation actually works, and where all of it might go next.",
    image: palestineImg,
    imageAlt: "Presenting at a podium at the Embassy of Palestine in Beirut",
  },
  {
    title: "LegalTech Essentials",
    year: "2025",
    body: "Taught the blockchain and crypto session of the LegalTech Essentials course at Université La Sagesse, run with SADER Legal and ZAKA for law professionals and students.",
  },
  {
    title: "DSC MENA 24",
    year: "2024",
    body: "A tutorial at the MENA Data Science Conference in Egypt: The Developer's Guide to ChatGPT API.",
  },
];

export interface Capstone {
  name: string;
  href: string;
  body: string;
}

/* All verified public and live. Descriptions come from each project's own
   README rather than a guess. */
export const capstones: Capstone[] = [
  {
    name: "Argus",
    href: "https://github.com/alimsaleh1212-create/Argus",
    body: "A security orchestration and response platform using a temporal graph for retrieval.",
  },
  {
    name: "Modir",
    href: "https://github.com/ali-hamad0/MOUDIR",
    body: "An AI operations assistant built for Lebanese small businesses.",
  },
  {
    name: "Vigil",
    href: "https://github.com/Dev-Dina/vigil",
    body: "Predicts and explains why participants drop out of clinical trials, ranks a cohort for triage, and escalates the serious cases. Built with an explicit honesty rule: every number has to be traceable.",
  },
  {
    name: "Chronicle",
    href: "https://github.com/HadiKanaan/chronicle",
    body: "A living-world RPG where a medieval town runs itself on about thirteen models and a local LLM, and the people remember you.",
  },
  {
    name: "AkarAI",
    href: "https://github.com/hadiMahd/AkarAI",
    body: "A multi-tenant real estate platform for Lebanon, with retrieval-based search and agency operations.",
  },
  {
    name: "Raseed",
    href: "https://github.com/HaydarSlh/raseed",
    body: "Personal finance intelligence. Upload a bank statement and it categorises, forecasts, and flags anomalies and recurring charges.",
  },
  {
    name: "NetMind",
    href: "https://github.com/hawraanasser68/NetMind",
    body: "Watches live network traffic, scores every flow with a trained classifier, and investigates the high-risk ones automatically.",
  },
  {
    name: "DealRoom AI",
    href: "https://github.com/sShawraba/DealRoom-AI",
    body: "Due diligence for mergers and acquisitions. Upload the documents, get a risk-scored analysis with every finding cited back to its source.",
  },
];


