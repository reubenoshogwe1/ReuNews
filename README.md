# Finconess

A website that analyses economic trends, finance news and business deals, and explains what they mean for individuals, investors, businesses and every other part of the economy.

> **Not financial advice.** Finconess is educational analysis. Nothing on the site is a recommendation to buy or sell any investment. Any investing you do is at your own risk.

## What's on the site

| Section | What it covers |
| --- | --- |
| **Hero** | The week's big-picture thesis plus a market snapshot ticker (S&P 500, 10-year yield, Brent, gold, bitcoin, Fed funds, CPI and more). |
| **Global pulse** | A one-line read on the US, eurozone, UK, China, Japan, the Middle East, Brazil and the global outlook. |
| **This week** | A calendar of central bank decisions, data releases, earnings and elections. Past days are marked "Done" automatically. |
| **Economic news** | Growth, inflation, jobs, energy and central banks. |
| **Finance news** | Markets, earnings, bonds, IPOs, credit, gold and crypto. |
| **Business news** | Mergers, acquisitions and break-ups, plus a sortable deal tracker. |
| **Who's affected** | How the week lands on households, savers, borrowers, workers, investors, businesses, governments and energy importers. |
| **My picks** | Personal investment ideas tied to the news, with risks, conviction and "what would change my mind", behind a prominent not-financial-advice disclaimer. |

Every story card includes key figures, a "Why it matters" analysis, a "helps / hurts" impact row and links to its sources. The **Read it as** switch in each news section changes every card's takeaway between individuals, investors and businesses.

The design uses a yellow and purple palette with bold headings, and supports light and dark themes (a toggle in the header, or your system setting).

## Running it

It's a static site with no build step and no dependencies.

- Open `index.html` directly in a browser, or
- Serve the folder locally: `python3 -m http.server 8000`, then visit <http://localhost:8000>.

To host it for free, enable **GitHub Pages** for this repository (Settings → Pages → deploy from branch, root folder).

## Publishing a new edition

All content lives in [`js/data.js`](js/data.js). To update the site each week:

1. Change `edition.date` and `edition.label`.
2. Update `hero`, `snapshot`, `pulse` and `calendar`.
3. Replace the stories in `economy`, `finance` and `business`. Each story needs `lens` text and an `impact` value (`"up"`, `"down"` or `"mixed"`) for `individuals`, `investors` and `businesses`, and should cite its `sources`.
4. Refresh the `deals` table, the `agents` section and the `watchlist` ideas.

When a section has an odd number of stories, the first one is shown full width automatically.

## Keeping it legally safe

The site is written to stay on the "commentary and education" side of financial rules. When you update it, keep these in place:

- **No specific products in "My ideas".** Ideas name types of investment (for example "broad semiconductor funds"), never tickers, funds or single stocks. Naming a specific product with reasons to buy it can count as an investment recommendation or a financial promotion in some countries.
- **Impersonal, never "you should buy".** Keep ideas framed as the author's own view, with risks and "what would change my mind".
- **Disclose holdings.** If you own shares in any company named on the site, say so next to that story. Never write about something to move its price for your own benefit.
- **Attribute anything uncertain.** Use "according to", "reported" or "analysts expect" for claims you haven't confirmed, especially about named people and companies. Don't repeat takeover rumours.
- **Keep the disclaimers.** The top strip, the "This is not financial advice" box, the per-idea labels and the Legal information footer should stay on every edition.
- **Keep the footer statements true.** The footer says Finconess has no adverts or affiliate links, is not paid by companies it mentions, uses AI to help draft content, and that the author is not a licensed adviser. Update it if any of that changes.
- **No tracking without consent.** The site sets no cookies and loads nothing from third parties (fonts are self-hosted in `fonts/`). Adding analytics, ads or embeds would need a cookie/consent notice and a privacy policy update.
- **Write in your own words.** Summarise reporting and link to it; don't copy articles, images or charts.

This is general guidance, not legal advice. Rules differ by country. If you plan to make money from the site (ads, subscriptions, affiliate links), check the rules where you live first.

## Project structure

```
index.html       Page structure and the static disclaimer text
css/styles.css   Design tokens (light and dark), layout and components
js/data.js       This edition's content
js/app.js        Renders the content and handles the lens switch, theme, sorting and navigation
fonts/           Self-hosted fonts and their SIL Open Font License files
```
