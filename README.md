# MindEase — Mental Wellbeing Platform 🌿

A calming, comprehensive, and privacy-first digital sanctuary designed to nurture mental wellbeing, emotional resilience, and mindfulness.

---

## ✨ Features & Modules

1. **Dashboard & Mindful Habit Hub**
   - Warm contextual greeting and daily reflection prompt.
   - 1-tap quick check-in for instant mood logging.
   - Daily affirmation spotlight with card shuffle and speak aloud.
   - Mindful consistency streak tracker & daily peace index.
   - Today's routine checklist.

2. **Mood Tracking & Emotional Analytics**
   - Detailed mood check-ins across 8 emotion archetypes (Radiant, Calm, Content, Anxious, Sad, Overwhelmed, Exhausted, Frustrated).
   - Intensity slider (1 to 10) with descriptive somatic indicators.
   - 15+ life factor tags (Sleep, Work, Exercise, Family, Social, Weather, Solitude, etc.).
   - Emotional balance breakdown charts & historical log.

3. **MindMate AI Companion**
   - Empathetic, supportive conversational guide for non-judgmental reflection.
   - Cognitive reframing tools to gently challenge automatic negative thoughts (ANTs).
   - Real-time distress keyword detection that automatically surfaces the SOS Crisis Center.
   - Voice read-aloud support via Web Speech API.
   - Thought starter suggestion chips.

4. **Guided Breathing Pacer**
   - **Box Breathing (4-4-4-4)**: Focus & autonomic reset.
   - **4-7-8 Relaxing Breath**: Natural nervous system tranquilizer.
   - **Resonance Coherent Breath (5-5)**: Optimal heart rate variability.
   - Expanding and contracting animated visual orb with phase instructions and countdown timer.
   - Audio bell chime cues generated via procedural Web Audio API.

5. **Digital Journal & Gratitude**
   - Free-flow private writing sanctuary with guided writing prompts.
   - Three small daily gratitudes tracker.
   - Tag filtering, search, favorite bookmarking.
   - Full export of all entries to clean Markdown (`.md`).

6. **Positive Affirmations Deck**
   - Curated cards categorized by Anxiety Relief, Self-Love, Strength & Resilience, Peace & Sleep, and Gratitude.
   - Speech synthesis readout, card shuffling, and copying.
   - Custom personal mantra creator with celebration confetti.

7. **Wellness & Psychoeducation Library**
   - Clinically-informed guides for the 5-4-3-2-1 Grounding Technique, CBT Thought Challenging, Progressive Muscle Relaxation (PMR), and Sleep Hygiene.
   - Interactive step-by-step reading modal.

8. **Calming Mini-Games**
   - **Zen Sand Garden**: Interactive Japanese Karesansui dry garden with sand raking, river pebbles, and water ripples.
   - **Stress Bubble Release**: Pop and release floating worry bubbles with uplifting tones.
   - **Nature Memory Match**: Mindful card-matching game with serene nature tokens.

9. **Family & Support Circle of Care**
   - Manage emergency support contacts (family, friends, therapist).
   - Low-friction, 1-tap status broadcast templates ("Doing Well", "Low Energy", "Could Use a Chat", "Need Gentle Support").
   - Direct SMS and phone calling triggers.

10. **SOS Crisis Help Center**
    - One-tap direct access to 988 Suicide & Crisis Lifeline (USA & Canada).
    - 24/7 Crisis Text Line (Text HOME to 741741).
    - Immediate panic attack de-escalation protocol.
    - Interactive 5-4-3-2-1 grounding step-through.
    - International crisis helplines directory (UK, Australia, India, EU).

11. **Ambient Soundscape Generator**
    - Built-in procedural Web Audio synthesizer: Gentle Rain, Ocean Waves, Forest Wind, and Tibetan Singing Bowl.
    - Runs 100% locally and offline without external audio assets.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer recommended, tested on Node v24)
- npm or yarn

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

The application will start on `http://localhost:3000`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🔒 Privacy & Architecture
- **100% Client-Side Privacy**: All journals, mood logs, contacts, and personal mantras remain on the user's device via `localStorage`. No sensitive emotional data is uploaded to third-party tracking servers.
- **Procedural Audio**: Soundscapes and chime bells are synthesized in real-time via the browser's Web Audio API, ensuring zero external bandwidth and no broken audio links.
- **Responsive Layout**: Designed for mobile smartphones, tablets, and wide desktop screens with Tailwind CSS.
