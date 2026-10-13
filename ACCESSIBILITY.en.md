🇧🇷 Leia em português: [ACCESSIBILITY.md](./ACCESSIBILITY.md)

# The A11Y.md website — accessibility statement

This repository holds the A11Y.md website, published at [fecarrico.github.io/a11ymd](https://fecarrico.github.io/a11ymd/). This statement says what you will find when you use the site with assistive technology, what we already know does not work, and how to tell us. It covers the site's eight pages: the home, the timeline and the two study chronicles, each in Portuguese and in English. The full evidence is in the [verification report](REPORT.en.md).

## What we commit to

- **Standard:** WCAG 2.2 at level AAA, under the Shield profile of [A11Y.md](https://github.com/fecarrico/A11Y.md) version 2.4.0. It is the standard's strictest profile, with 7:1 text contrast, 44 × 44 px targets and text no smaller than 14 px.
- **Brazilian reference:** ABNT NBR 17225, in the points the Shield profile adopts as house rules, such as text alignment, spacing between paragraphs and line length.
- **Status:** ⚠️ CONDITIONAL on 2026-10-13. Everything that can be checked without a person has passed. On the eight pages, at 1280 px and 320 px, axe with the rules up to level AAA flags only one point left on purpose, the colour sample in a figure that discusses that very contrast. Keyboard navigation was driven page by page. The verification was done by AI agents. The keyboard scenarios of 2026-10-13 were reproduced by an agent that did not write the code. A screen-reader test by a person is still missing, and until it happens the status does not become PASS.

## Environments tested

- Keyboard, no mouse, in Chromium.
- 200% zoom and a 320 px width, with no sideways scrolling.
- Reduced motion turned on in the system. With it, the entry animations do not play.
- No screen reader yet.

An environment not on this list has not been tested, which is not the same as unsupported.

## Known barriers

| Barrier | Who it affects | Workaround today | Where it is recorded | Review by |
| :--- | :--- | :--- | :--- | :--- |
| No person has run a screen reader over the site. What it announces has not been confirmed. One point already raised is that the menu does not say which page is the current one. | People who use NVDA, JAWS, VoiceOver or TalkBack | The structure is native HTML, and headings, landmarks and control names were checked by tooling. | [Report §3](REPORT.en.md#3-behavior-and-task-return) | Next release of the standard |
| Loss of information through colour has not been checked with a colour-vision deficiency simulator. | People with colour-vision deficiency | The contrast of every colour pair was measured, and no state depends on colour alone. | [Report §4](REPORT.en.md#4-visual-perception-and-comprehension) | Next release of the standard |
| Fourteen paragraphs in the timeline are right-aligned, and the home uses little space between paragraphs. | People with dyslexia or low vision who rely on a fixed line start | None yet. Keeping or changing it is the author's decision. | [Decisions](A11Y-DECISIONS.md) | Next release of the standard |
| It is not confirmed that the timeline logos are only decoration. Today they carry an empty alt text. | People who use a screen reader | The name of each organisation is in the entry's text. | [Report §5](REPORT.en.md#5-robustness-beyond-the-checklist) | Next release of the standard |

## How to report a barrier

- **Where:** open an [issue in this repository](https://github.com/fecarrico/a11ymd/issues/new). No template needed.
- **What to include:** what you were trying to do, the assistive technology or input method you were using, and what happened.
- **What happens next:** you get a first response within 7 days. A confirmed barrier becomes an entry in the [exceptions log](EXCEPTIONS.md), with an owner and a review date, until it is fixed.

If an issue is not the right medium for you, start a thread in the [A11Y.md Discussions](https://github.com/fecarrico/A11Y.md/discussions).

## If you contribute

> The interfaces in this project follow [A11Y.md](https://github.com/fecarrico/A11Y.md) version 2.4.0 under the Shield profile. A change ships with `REPORT.md` updated, and an accepted deviation with an entry in `EXCEPTIONS.md`.

## Who answers for this

- **Owner:** Felipe Carriço, through this repository's issues or on [LinkedIn](https://linkedin.com/in/fecarrico).
- **Last reviewed:** 2026-10-13, against A11Y.md 2.4.0.
- **Next review:** at the next release of the standard, or sooner, when the report changes status or an exception opens or closes.
