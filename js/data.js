/*
 * FinConEss edition data.
 *
 * Everything the site shows lives in this one file. To publish a new edition,
 * update the `edition` block, then edit the stories, snapshot, calendar and
 * watchlist below. The page re-renders from this object on load.
 *
 * Lens keys used on every story: individuals, investors, businesses.
 * Impact values: "up" (helps), "down" (hurts), "mixed".
 */
window.FINCONESS = {
  edition: {
    date: "2026-10-27",
    label: "Tuesday 27 October 2026",
    dataNote:
      "Figures are as reported by public sources on or before 27 October 2026. Markets move every day, so check live prices before acting on anything.",
  },

  hero: {
    headline: ["Inflation is back,", "hiring has stalled,", "and AI is carrying the market."],
    lede:
      "An oil shock tied to the Middle East has pushed US inflation to 3.7% while job growth has nearly stopped. Central banks are leaning toward rate hikes, not cuts. Meanwhile AI spending is driving earnings, a memory-chip shortage and a record wave of corporate borrowing. Here is what it all means for you.",
    bigPicture: [
      {
        title: "An energy shock is feeding inflation",
        text: "Brent crude is above $115 a barrel. Gasoline drove more than half of September's rise in US prices.",
      },
      {
        title: "Central banks are tightening into a slowdown",
        text: "The Fed raised rates in September for the first time since 2023. Markets expect the ECB and Bank of Japan to hike in December.",
      },
      {
        title: "AI is the growth engine, and the biggest risk",
        text: "S&P 500 earnings are growing over 25% a year, led by chipmakers, while about $500 billion of AI-related debt has been issued in 2026.",
      },
    ],
  },

  snapshot: [
    { label: "S&P 500", value: "7,676.77", change: "+0.7%", dir: "up", asOf: "26 Oct close" },
    { label: "Nasdaq Comp.", value: "26,169.38", change: "Up", dir: "up", asOf: "26 Oct close" },
    { label: "US 10-yr yield", value: "4.99%", change: "−1 bp", dir: "down", asOf: "26 Oct" },
    { label: "Brent crude", value: "$115.81", change: "Near 6-mo high", dir: "up", asOf: "26 Oct settle" },
    { label: "Gold", value: "$3,995.81", change: "Below $4k", dir: "down", asOf: "23 Oct close" },
    { label: "Bitcoin", value: "≈ $80,000", change: "−36% from peak", dir: "down", asOf: "26 Oct, approx." },
    { label: "Fed funds", value: "3.75–4.00%", change: "Decision 28 Oct", dir: "flat", asOf: "Current range" },
    { label: "US CPI", value: "3.7%", change: "Up from 3.4%", dir: "up", asOf: "Sep, y/y" },
    { label: "US unemployment", value: "4.2%", change: "Up from 4.1%", dir: "up", asOf: "Sep" },
    { label: "30-yr mortgage", value: "7.32%", change: "Down from 7.40%", dir: "down", asOf: "Freddie Mac, 22 Oct" },
    { label: "Ibovespa", value: "−13.9%", change: "One-day fall", dir: "down", asOf: "26 Oct" },
  ],

  pulse: [
    {
      region: "United States",
      status: "Overheating prices",
      tone: "hot",
      metric: "CPI 3.7% · Jobs +29k",
      note: "Prices are rising faster while hiring has nearly stopped. The Fed may have to choose between the two.",
    },
    {
      region: "Eurozone",
      status: "Slowing",
      tone: "cool",
      metric: "PMI 51.9 · 4-month low",
      note: "Energy costs and a contraction in France are dragging growth down. The ECB is expected to hold this week.",
    },
    {
      region: "United Kingdom",
      status: "Improving",
      tone: "good",
      metric: "PMI 53.1 · CPI 3.5%",
      note: "Business activity is at an 8-month high, but the Bank of England expects inflation to average about 3.75% in Q4.",
    },
    {
      region: "China",
      status: "Uneven growth",
      tone: "mixed",
      metric: "GDP +4.5% · Retail +1.1%",
      note: "Exports are booming on AI chips while consumers and the property sector stay weak.",
    },
    {
      region: "Japan",
      status: "Steady, hike watch",
      tone: "mixed",
      metric: "BoJ 1.25% · CPI 2.1%",
      note: "A hold is expected on Friday. Markets price roughly 80% odds of a December hike.",
    },
    {
      region: "Middle East",
      status: "Supply risk",
      tone: "hot",
      metric: "Brent $115.81",
      note: "Attacks on Saudi energy infrastructure and talk of renewed US strikes on Iran have pushed oil prices up again.",
    },
    {
      region: "Brazil",
      status: "Market shock",
      tone: "stress",
      metric: "Ibovespa −13.9%",
      note: "Stocks and the real fell sharply after Lula's re-election on worries about government spending and debt.",
    },
    {
      region: "Global",
      status: "Resilient, for now",
      tone: "good",
      metric: "IMF forecast raised",
      note: "The IMF credits AI investment for stronger growth, but warns that resilience is nearing its limits.",
    },
  ],

  calendar: [
    { date: "2026-10-27", items: ["Fed's two-day policy meeting begins"] },
    {
      date: "2026-10-28",
      items: ["Fed rate decision and Warsh press conference", "Microsoft and Alphabet earnings, after the close"],
    },
    {
      date: "2026-10-29",
      items: ["US Q3 GDP, first estimate (8:30 am ET)", "ECB rate decision", "Amazon earnings, after the close"],
    },
    { date: "2026-10-30", items: ["Bank of Japan rate decision"] },
    { date: "2026-11-03", items: ["US midterm elections"] },
    { date: "2026-11-05", items: ["Bank of England rate decision"] },
    { date: "2026-11-30", items: ["AkzoNobel shareholder vote on the Axanzo merger"] },
  ],

  economy: [
    {
      id: "fed",
      region: "United States",
      date: "27 Oct",
      title: "Fed expected to hold at 3.75–4.00%, with a December hike still on the table",
      summary:
        "The Federal Reserve announces its decision on Wednesday. Markets put the odds of a hold at about 90% after September's quarter-point hike, the first increase since 2023. The Fed's September projections pencilled in one more hike by year-end, and markets price about 75% odds of at least one more hike by then.",
      analysis:
        "The Fed is caught between hot inflation and a cooling job market. Chair Kevin Warsh has rejected traditional forward guidance, so his press conference tone will matter more than usual. A hold with hawkish language is the base case. A surprise hike would hit bonds and rate-sensitive stocks.",
      figures: [
        { label: "Fed funds", value: "3.75–4.00%" },
        { label: "Hold odds", value: "≈ 90%" },
        { label: "Hike by Dec.", value: "≈ 75%" },
      ],
      lens: {
        individuals:
          "Credit card and variable loan rates will stay high and could rise again in December. Paying down variable-rate debt cuts what you pay in interest.",
        investors:
          "Listen for the tone of the press conference. Hawkish language lifts short-term yields and tends to pressure growth stocks.",
        businesses:
          "Borrowing costs are unlikely to fall soon. Plan any refinancing on the assumption that rates stay at or above today's level.",
      },
      impact: { individuals: "down", investors: "mixed", businesses: "down" },
      sources: [
        { name: "CNBC — Fed likely to hold in October", url: "https://www.cnbc.com/2026/10/26/fed-decision-expectations-october-meeting.html" },
        { name: "KPMG — October 2026 Fed primer", url: "https://kpmg.com/us/en/articles/2026/october-2026-fed-primer.html" },
        { name: "CNN — The Fed's first hike since 2023", url: "https://www.cnn.com/2026/09/16/economy/fed-rate-decision-september" },
        { name: "CNBC — Warsh may point to more hikes", url: "https://www.cnbc.com/2026/10/27/federal-reserve-rates-kevin-warsh.html" },
      ],
    },
    {
      id: "cpi",
      region: "United States",
      date: "14 Oct",
      title: "US inflation climbs to 3.7%, with gasoline doing most of the damage",
      summary:
        "Consumer prices rose 0.6% in September, lifting annual inflation to 3.7% from 3.4% in August. Gasoline jumped 9.1% in the month and accounted for more than half of the increase. Core inflation, which strips out food and energy, rose to 2.6%.",
      analysis:
        "The gap between headline (3.7%) and core (2.6%) inflation shows this is mainly an energy shock rather than broad overheating. That is why the Fed is moving cautiously. If oil stays above $110, headline inflation is likely to stay elevated into the winter.",
      figures: [
        { label: "Headline CPI", value: "3.7%" },
        { label: "Core CPI", value: "2.6%" },
        { label: "Gasoline, m/m", value: "+9.1%" },
      ],
      lens: {
        individuals:
          "Fuel and energy bills are where the pressure is. Other prices are rising more slowly, so the fuel line in your budget is the one that needs a buffer.",
        investors:
          "Energy-led inflation tends to favour inflation-linked bonds and energy producers over long-dated fixed-rate bonds.",
        businesses:
          "Transport and fuel costs are rising fastest. US firms reported their sharpest increase in selling prices in more than four years in October's PMI survey.",
      },
      impact: { individuals: "down", investors: "mixed", businesses: "down" },
      sources: [
        { name: "CNBC — September CPI report", url: "https://www.cnbc.com/2026/10/14/cpi-inflation-report-september-2026.html" },
        { name: "Morningstar — Inflation at a 3.7% annual rate", url: "https://www.morningstar.com/economy/september-cpi-report-shows-inflation-37-annual-rate" },
        { name: "Kiplinger — September CPI explained", url: "https://www.kiplinger.com/investing/economy/cpi-report-september-2026-what-to-expect" },
      ],
    },
    {
      id: "jobs",
      region: "United States",
      date: "2 Oct",
      title: "Hiring stalls: the US added just 29,000 jobs in September",
      summary:
        "Payrolls grew by 29,000, far below the roughly 84,000 economists expected. The unemployment rate rose to 4.2% from 4.1%. Revisions also cut 60,000 jobs from the previous two months.",
      analysis:
        "Weak hiring and rising inflation at the same time is the classic stagflation dilemma. Raising rates to fight prices risks pushing a slowing labour market into job losses. This is the main reason the Fed is expected to pause rather than hike this week.",
      figures: [
        { label: "Payrolls", value: "+29k" },
        { label: "Unemployment", value: "4.2%" },
        { label: "Revisions", value: "−60k" },
      ],
      lens: {
        individuals:
          "Finding a new job is getting harder. A bigger emergency fund and up-to-date skills give you room if your industry slows.",
        investors:
          "Slower hiring is an early warning for consumer spending. Defensive sectors such as healthcare and utilities have historically held up better when layoffs rise.",
        businesses:
          "Hiring is easier with less competition for workers, but weaker demand from consumers may follow.",
      },
      impact: { individuals: "down", investors: "down", businesses: "mixed" },
      sources: [
        { name: "BLS — Unemployment rate at 4.2% in September", url: "https://www.bls.gov/opub/ted/2026/unemployment-rate-little-changed-at-4-2-percent-in-september-2026.htm" },
        { name: "CNBC — Jobs increased by just 29,000", url: "https://www.cnbc.com/2026/10/02/jobs-report-september-2026.html" },
      ],
    },
    {
      id: "oil",
      region: "Middle East",
      date: "26 Oct",
      title: "Oil climbs back above $115 as attacks on Saudi infrastructure revive war fears",
      summary:
        "Brent crude settled at $115.81 on Monday after closing at $116.72 on Friday, its highest close since late April. Yemen's Houthi group claimed strikes on pumping stations along Saudi Arabia's East-West pipeline, which Saudi Arabia did not confirm. Reports that the US may resume strikes on Iran added to the jitters. US crude (WTI) is around $101.",
      analysis:
        "Crude flows through the Strait of Hormuz have recovered to pre-war levels, according to tanker-tracking data, since the war that began with US and Israeli strikes on Iran on 28 February. So today's price is mostly a risk premium, not lost barrels. Diplomacy could deflate that premium quickly, and escalation could add to it. Diesel is the pressure point: EU pump prices hit records in October.",
      figures: [
        { label: "Brent", value: "$115.81" },
        { label: "WTI", value: "≈ $101" },
        { label: "Hormuz flow", value: "≈ pre-war" },
      ],
      lens: {
        individuals:
          "Expect fuel, heating and travel costs to stay high this winter. Fixed-price energy deals are worth comparing if they are offered where you live.",
        investors:
          "Energy stocks benefit, but a war premium can vanish on a single ceasefire headline. Treat energy as a hedge, not a bet.",
        businesses:
          "Airlines, logistics, chemicals and manufacturers take the biggest cost hit. It is a good time to review fuel hedging and surcharges.",
      },
      impact: { individuals: "down", investors: "mixed", businesses: "down" },
      sources: [
        { name: "CNBC — Oil prices today", url: "https://www.cnbc.com/2026/10/22/oil-prices-today-wti-brent-saudi-arabia.html" },
        { name: "TradingKey — Brent tops $115", url: "https://www.tradingkey.com/analysis/commodities/oil/262235921-brent-crude-breaks-115-five-month-high-middle-east-supply-risks-escalate-tradingkey" },
        { name: "CNBC — Hormuz crude exports back at pre-war levels", url: "https://www.cnbc.com/2026/09/30/iran-war-strait-hormuz-gulf-oil-fuel.html" },
      ],
    },
    {
      id: "europe",
      region: "Europe",
      date: "23 Oct",
      title: "The eurozone slows while Britain picks up",
      summary:
        "The eurozone's flash composite PMI fell to 51.9 from 53.1, a four-month low, as energy costs rose and France slipped back into contraction. The ECB is expected to keep its deposit rate at 2.50% on Thursday, with a December hike widely expected. In the UK, the composite PMI rose to 53.1, an eight-month high, but inflation is 3.5% and the Bank of England meets on 5 November.",
      analysis:
        "Both economies face energy-driven price pressure from the Middle East conflict, but they are moving in opposite directions on growth. The ECB may have to raise rates into a slowdown, which is a tougher spot than the Bank of England's.",
      figures: [
        { label: "EZ PMI", value: "51.9" },
        { label: "UK PMI", value: "53.1" },
        { label: "ECB deposit", value: "2.50%" },
      ],
      lens: {
        individuals:
          "In Europe, energy bills are the main squeeze. In the UK, with inflation at 3.5%, check that your savings rate is beating it.",
        investors:
          "UK activity is improving while the eurozone slows. Watch whether the ECB signals a December hike on Thursday.",
        businesses:
          "Eurozone firms face rising input costs and softer demand. UK firms are seeing demand pick up and have started hiring again, if only slightly.",
      },
      impact: { individuals: "down", investors: "mixed", businesses: "mixed" },
      sources: [
        { name: "Reuters via US News — Euro zone growth at 4-month low", url: "https://money.usnews.com/investing/news/articles/2026-10-23/euro-zone-growth-slows-to-4-month-low-amid-rising-costs-and-french-turmoil-pmi-shows" },
        { name: "Admiral Markets — ECB meeting October 2026", url: "https://admiralmarkets.com/analytics/traders-blog/ecb-meeting-october-2026" },
        { name: "House of Commons Library — Economic indicators", url: "https://researchbriefings.files.parliament.uk/documents/CBP-9040/CBP-9040.pdf" },
      ],
    },
    {
      id: "china",
      region: "China",
      date: "19 Oct",
      title: "China grows 4.5%, powered by exports while consumers hold back",
      summary:
        "China's economy grew 4.5% in the third quarter, up from 4.3% and slightly ahead of forecasts. Exports jumped 36.3% year on year, led by integrated circuits tied to AI demand. At home, retail sales grew just 1.1% in September and property investment is down 20.6% this year. Beijing has held off on large-scale stimulus.",
      analysis:
        "Economists call it a K-shaped economy: high-tech exporters are thriving while households and the property market stall. Trade friction is building too. According to Deloitte, the EU and China have agreed quotas on Chinese hybrid car exports to Europe.",
      figures: [
        { label: "Q3 GDP", value: "+4.5%" },
        { label: "Q3 exports", value: "+36.3%" },
        { label: "Retail, Sep", value: "+1.1%" },
      ],
      lens: {
        individuals:
          "Strong Chinese exports help keep electronics and many imported goods cheaper, though EU quotas may limit cheaper hybrid cars in Europe.",
        investors:
          "The strength is in exporters and chip supply chains, not the Chinese consumer. Be selective with broad China funds.",
        businesses:
          "Expect tough price competition from Chinese exporters and more trade restrictions, especially between the EU and China.",
      },
      impact: { individuals: "mixed", investors: "mixed", businesses: "down" },
      sources: [
        { name: "Reuters via US News — China's growth accelerates to 4.5%", url: "https://money.usnews.com/investing/news/articles/2026-10-18/chinas-economic-growth-accelerates-to-4-5-in-third-quarter" },
        { name: "J.P. Morgan AM — K-shaped split persists", url: "https://am.jpmorgan.com/wr/en/asset-management/liq/insights/market-insights/market-updates/on-the-minds-of-investors/china-3q26-gdp-stabilizing-growth-kshaped-split-persists/" },
        { name: "Deloitte — Weekly global economic update", url: "https://www.deloitte.com/us/en/insights/topics/economy/global-economic-outlook/weekly-update.html" },
      ],
    },
    {
      id: "brazil",
      region: "Brazil",
      date: "26 Oct",
      title: "Brazil's markets plunge after Lula wins re-election",
      summary:
        "Brazil's main stock index closed down about 13.9% on Monday after a circuit breaker briefly halted trading. The real fell as much as 12% against the dollar in spot trading, and the finance ministry cancelled government bond auctions. Investors had bet on a win for Flávio Bolsonaro and tighter government spending. Bolsonaro had not conceded at the time of reporting.",
      analysis:
        "This is a fiscal-credibility shock: markets doubt the government will control spending and debt. Sharp sell-offs can overshoot, but the fix is a credible budget signal, which takes time. Watch for the new government's first fiscal announcements.",
      figures: [
        { label: "Ibovespa", value: "−13.9%" },
        { label: "Real vs USD", value: "Up to −12%" },
        { label: "Bond auctions", value: "Cancelled" },
      ],
      lens: {
        individuals:
          "If you hold an emerging-markets fund, Brazil is often a meaningful slice. Check your exposure before reacting to headlines.",
        investors:
          "Bargains may appear, but the trigger is fiscal policy. Waiting for a clear budget signal is usually wiser than catching a falling knife.",
        businesses:
          "A weaker real makes imports into Brazil dearer and Brazilian exports cheaper. Exporters to Brazil should review pricing.",
      },
      impact: { individuals: "mixed", investors: "down", businesses: "mixed" },
      sources: [
        { name: "Al Jazeera — Brazil's real sinks after Lula's victory", url: "https://www.aljazeera.com/economy/2026/10/26/brazils-real-sinks-after-lulas-re-election-victory" },
        { name: "Nikkei Asia — Trading halted in Brazil", url: "https://asia.nikkei.com/business/markets/trading-halted-in-brazil-as-stocks-sink-following-lula-reelection" },
        { name: "Quartz — Historic losses after Lula win", url: "https://qz.com/brazil-stocks-real-historic-losses-lula-win-102626" },
      ],
    },
    {
      id: "imf",
      region: "Global",
      date: "12 Oct",
      title: "IMF lifts its 2026 growth forecast but warns resilience is nearing its limits",
      summary:
        "At its annual meetings, the IMF raised its 2026 global growth forecast. It said AI-related investment gave the world economy a demand boost that helped activity hold up better than expected in the first half of the year.",
      analysis:
        "Growth is holding up, but it rests heavily on one source: AI spending. If that investment slows, there is not much else carrying the global economy while energy prices squeeze households.",
      figures: [
        { label: "Forecast", value: "Raised" },
        { label: "Main driver", value: "AI capex" },
        { label: "Main risk", value: "Energy" },
      ],
      lens: {
        individuals:
          "Overall growth supports jobs, but high energy prices are eating into what your pay can buy.",
        investors:
          "Growth is narrow and AI-led. Owning some assets that don't depend on the AI boom reduces the risk if it fades.",
        businesses:
          "Demand is strongest where AI money flows: data centres, power, chips and construction.",
      },
      impact: { individuals: "mixed", investors: "up", businesses: "up" },
      sources: [
        { name: "CNBC — IMF lifts 2026 global growth forecast", url: "https://www.cnbc.com/2026/10/12/imf-world-bank-annual-meetings-october-bangkok-asia-.html" },
      ],
    },
  ],

  finance: [
    {
      id: "earnings",
      region: "Markets",
      date: "23 Oct",
      title: "Most companies beat earnings forecasts, but by the slimmest margin in years",
      summary:
        "With about a quarter of the S&P 500 reported, 83% of companies have beaten earnings estimates, but by just 2.1% on average against a five-year average of 7.5%. Earnings are still growing more than 25% year on year for the third quarter in a row. Micron and Nvidia alone account for about 36% of the expected growth, according to Citadel Securities.",
      analysis:
        "Expectations are high and growth is concentrated in a handful of chip and tech names. Small beats leave little room for disappointment. Companies carrying about 47% of the index's weight report between 28 October and 3 November.",
      figures: [
        { label: "Beat rate", value: "83%" },
        { label: "Avg beat", value: "2.1%" },
        { label: "EPS growth", value: ">25%" },
      ],
      lens: {
        individuals:
          "Your index or pension fund is increasingly a bet on a few chip and tech companies. It is worth checking how concentrated it is.",
        investors:
          "With beats this small, misses get punished. Company guidance matters more than the headline beat.",
        businesses:
          "Profits are growing fastest where AI demand flows. Elsewhere, energy and interest costs are squeezing margins.",
      },
      impact: { individuals: "mixed", investors: "mixed", businesses: "mixed" },
      sources: [
        { name: "FactSet — Earnings season update, 23 Oct", url: "https://insight.factset.com/sp-500-earnings-season-update-october-23-2026" },
        { name: "Citadel Securities — Fundamentals in focus", url: "https://www.citadelsecurities.com/news-and-insights/global-market-intelligence/october-update/" },
        { name: "State Street — Strong earnings raise the bar", url: "https://www.ssga.com/us/en/institutional/insights/mind-on-the-market-12-october-2026" },
      ],
    },
    {
      id: "bigtech",
      region: "Markets",
      date: "28–29 Oct",
      title: "Big Tech reports this week, with AI spending under the microscope",
      summary:
        "Microsoft and Alphabet report on Wednesday after the close, and Amazon on Thursday. Analysts expect about $90.6 billion in revenue for Microsoft, $127.9 billion for Alphabet and $202 billion for Amazon. Microsoft guided for about 45% growth at Azure, its cloud business. Meta and Tesla reported last week.",
      analysis:
        "The key number is capital spending guidance. Investors want proof that cloud and AI revenue is growing fast enough to justify record capex. Higher spending alongside slowing cloud growth would worry the market, especially with the Fed decision landing on the same day.",
      figures: [
        { label: "MSFT rev. est.", value: "$90.6B" },
        { label: "GOOGL rev. est.", value: "$127.9B" },
        { label: "AMZN rev. est.", value: "$202B" },
      ],
      lens: {
        individuals:
          "These companies make up a large share of most index and pension funds, so their results will move your balance this week.",
        investors:
          "Watch capex guidance and cloud growth together. Rising spend with slowing cloud growth is the bearish combination.",
        businesses:
          "Cloud and AI pricing from these firms sets the cost of computing for everyone who rents it.",
      },
      impact: { individuals: "mixed", investors: "mixed", businesses: "mixed" },
      sources: [
        { name: "StockTitan — Earnings calendar, week of 26 Oct", url: "https://www.stocktitan.net/articles/earnings-calendar-week-of-october-26-2026" },
        { name: "Investing.com — Earnings week preview", url: "https://www.investing.com/news/stock-market-news/earnings-week-preview-microsoft-amazon-intel-and-more-report-oct-2629-93CH-4973444" },
      ],
    },
    {
      id: "anthropic-ipo",
      region: "IPOs",
      date: "26 Oct",
      title: "Anthropic files for a Nasdaq IPO under the ticker ANT",
      summary:
        "The AI company publicly filed its S-1 registration statement on Monday and plans to list on the Nasdaq Global Select Market as ANT. Coverage of the filing reports first-half 2026 revenue of about $16.3 billion and a large net loss that is mostly non-cash. The price range and share count have not been set, and no listing date is official. Tech stocks rallied on Monday partly on the news.",
      analysis:
        "This is one of the most anticipated listings of the year and could reopen the IPO window for other private AI companies. The amended filing with a price range will be the real test of valuation.",
      disclosure:
        "Disclosure: FinConEss's analysis was drafted with help from Claude, an AI model made by Anthropic. Keep that in mind when reading this item.",
      figures: [
        { label: "Ticker", value: "ANT" },
        { label: "H1 revenue", value: "≈ $16.3B" },
        { label: "Price range", value: "Not set" },
      ],
      lens: {
        individuals:
          "New listings often swing sharply in their first months of trading. Hype is not a reason to buy.",
        investors:
          "Wait for the price range and amended filing. Valuation, losses and when early holders can sell (lock-up expiry) matter more than headlines.",
        businesses:
          "A large AI listing could make it easier for other private tech companies to go public.",
      },
      impact: { individuals: "mixed", investors: "mixed", businesses: "up" },
      sources: [
        { name: "Anthropic — S-1 filing announcement", url: "https://www.anthropic.com/news/s1-sec" },
        { name: "Yahoo Finance — Anthropic IPO live updates", url: "https://finance.yahoo.com/technology/live/anthropic-ipo-live-updates-frontier-ai-lab-discloses-revenue-and-risks-in-highly-anticipated-s-1-filing-141702607.html" },
      ],
    },
    {
      id: "yields",
      region: "Bonds",
      date: "26 Oct",
      title: "Treasury yields hover near 5%, keeping mortgages above 7%",
      summary:
        "The 10-year Treasury yield was 4.99% on Monday, close to its highest levels of the year. Freddie Mac's weekly survey put the average 30-year mortgage rate at 7.32%, down slightly from 7.40% the week before.",
      analysis:
        "Long-term yields reflect inflation risk and heavy government borrowing. As long as the 10-year sits near 5%, mortgages are likely to stay above 7%, and bonds offer real competition to stocks for the first time in years.",
      figures: [
        { label: "10-yr yield", value: "4.99%" },
        { label: "30-yr mortgage", value: "7.32%" },
        { label: "Week before", value: "7.40%" },
      ],
      lens: {
        individuals:
          "Buying a home is expensive at these rates. If you buy, a fixed rate protects you from further rises.",
        investors:
          "A 5% 10-year yield competes with stocks. High-quality bonds pay a meaningful income again.",
        businesses:
          "Long-term borrowing is the most expensive it has been in years, so refinancing debt costs more.",
      },
      impact: { individuals: "down", investors: "mixed", businesses: "down" },
      sources: [
        { name: "Trading Economics — US 10-year yield", url: "https://tradingeconomics.com/united-states/government-bond-yield" },
        { name: "The Mortgage Reports — Rates, 23 Oct", url: "https://themortgagereports.com/mortgage-rates-now/mortgage-rates-today-october-23-2026" },
      ],
    },
    {
      id: "ai-debt",
      region: "Credit",
      date: "22 Oct",
      title: "The AI debt boom: about $500 billion borrowed so far this year",
      summary:
        "Goldman Sachs counts nearly $500 billion of AI-related debt issued in 2026, with the largest cloud companies responsible for about 40%. Their capital spending is fast approaching their operating cash flow. Spreads on AI-related bonds have widened even as broader investment-grade spreads stayed flat.",
      analysis:
        "Investors are asking whether AI revenue will grow fast enough to service this debt. Smaller data-centre operators that rely on floating-rate private credit are the most exposed if rates keep rising.",
      figures: [
        { label: "AI debt, 2026", value: "≈ $500B" },
        { label: "Hyperscaler share", value: "≈ 40%" },
        { label: "AI spreads", value: "Widening" },
      ],
      lens: {
        individuals:
          "If you own corporate bond funds, check how much is lent to tech and AI-related companies.",
        investors:
          "Widening spreads on AI debt are an early stress signal. Favour companies that fund AI from cash flow over those relying on floating-rate borrowing.",
        businesses:
          "Money for AI projects is still available, but it is getting more expensive.",
      },
      impact: { individuals: "mixed", investors: "down", businesses: "mixed" },
      sources: [
        { name: "Goldman Sachs — How AI debt is reshaping credit", url: "https://www.goldmansachs.com/insights/goldman-sachs-exchanges/how-ai-debt-is-reshaping-the-credit-market" },
        { name: "Forbes — Inside the AI debt boom", url: "https://www.forbes.com/sites/mayrarodriguezvalladares/2026/10/22/the-half-trillion-dollar-silicon-gamble-inside-the-ai-debt-boom/" },
        { name: "Vanguard — The AI buildout comes to the bond market", url: "https://corporate.vanguard.com/content/corporatesite/us/en/corp/vemo/ai-buildout-comes-to-bond-market.html" },
      ],
    },
    {
      id: "gold-btc",
      region: "Alternatives",
      date: "23 Oct",
      title: "Gold and bitcoin slump while cash and bonds pay more",
      summary:
        "Gold closed at $3,995.81 on Friday, below $4,000 for the first time since July and far from the record of about $5,595 reported in January. Bitcoin is around $80,000, roughly 36% below its October 2025 record of about $126,000. Both rank among 2026's worst-performing major assets.",
      analysis:
        "Our reading: when cash and bonds pay 4–5%, assets that pay no income become less attractive to hold. A turn in Fed policy toward cuts would remove that headwind, but there is no sign of that yet.",
      figures: [
        { label: "Gold", value: "$3,995.81" },
        { label: "Jan. record", value: "≈ $5,595" },
        { label: "Bitcoin", value: "≈ $80,000" },
      ],
      lens: {
        individuals:
          "Don't chase falling prices with money you might need. Both assets can fall further.",
        investors:
          "A small hedge position can make sense, but rising real yields are a headwind until the Fed changes course.",
        businesses:
          "Companies holding crypto on their balance sheet face mark-to-market losses this year.",
      },
      impact: { individuals: "mixed", investors: "down", businesses: "down" },
      sources: [
        { name: "TheStreet — Bitcoin and gold are 2026's worst performers", url: "https://www.thestreet.com/crypto/markets/bitcoin-and-gold-are-2026s-worst-performing-assets-and-history-offers-no-precedent" },
        { name: "CryptoTicker — Bitcoin one year after its high", url: "https://cryptoticker.io/en/bitcoin-price-one-year-after-all-time-high-october-2026/" },
      ],
    },
    {
      id: "memory",
      region: "Semiconductors",
      date: "30 Sep",
      title: "The memory-chip crunch will last through 2028, says Micron",
      summary:
        "Micron's CEO said supply will be even tighter in 2027 and 2028 than in 2026, a year in which DDR5 memory prices have more than doubled. More than 75% of Micron's 2027 output is already committed to customers. High-bandwidth memory for AI accelerators is soaking up capacity that would otherwise go to phones and PCs.",
      analysis:
        "Memory makers have unusual pricing power right now. The risk is that memory is a famously cyclical business, and meaningful new capacity starts arriving in the second half of 2027.",
      figures: [
        { label: "DDR5 prices", value: ">2× in 2026" },
        { label: "2027 committed", value: ">75%" },
        { label: "New supply", value: "H2 2027" },
      ],
      lens: {
        individuals:
          "Expect pricier phones, laptops and PC upgrades as memory costs are passed on.",
        investors:
          "Memory makers are winning now, but the cycle can turn quickly when new factories come online.",
        businesses:
          "Lock in memory and server supply contracts early. Buyers without long-term contracts face the steepest increases.",
      },
      impact: { individuals: "down", investors: "up", businesses: "down" },
      sources: [
        { name: "Northeast Times — Micron says supply stays tight through 2028", url: "https://northeasttimes.com/2026/10/02/micron-ceo-says-memory-supply-will-stay-tight-through-2028-keeping-prices-high/" },
        { name: "Tech Insider — 2027 memory supply sold out", url: "https://tech-insider.org/micron-ceo-2027-memory-supply-sold-out-2026/" },
      ],
    },
  ],

  business: [
    {
      id: "skydance",
      region: "Media",
      date: "6 Oct",
      title: "Paramount completes its Warner Bros. Discovery takeover and becomes Skydance",
      summary:
        "Most reports value the deal at about $110 billion including debt. The combined company, renamed Skydance, now trades on the NYSE as SKYD and owns Paramount Pictures, Warner Bros., CBS, CNN, HBO, Paramount+ and HBO Max. To settle legal challenges, it agreed to spend about $300 million a year on US film production, release 30 to 32 films a year for five years and set up an editorial oversight committee for CBS and CNN.",
      analysis:
        "It is one of the year's largest completed deals. The work now is integration: cutting overlapping costs, merging streaming services and keeping creative talent.",
      figures: [
        { label: "Reported value", value: "≈ $110B" },
        { label: "Revenue", value: "≈ $70B/yr" },
        { label: "Ticker", value: "SKYD" },
      ],
      lens: {
        individuals:
          "Paramount+ and HBO Max now have one owner. Watch for bundle and price changes to your subscriptions.",
        investors:
          "Integration risk is high. Savings from combining the two companies typically take years to show up.",
        businesses:
          "Fewer big buyers for film and TV content means less bargaining power for studios and creators.",
      },
      impact: { individuals: "mixed", investors: "mixed", businesses: "down" },
      sources: [
        { name: "Pulse 2.0 — Paramount completes $110B acquisition", url: "https://pulse2.com/paramount-completes-110-billion-warner-bros-discovery-acquisition-after-settlements/" },
        { name: "KMPH — How we got here", url: "https://kmph.com/news/nation-world/paramount-and-warner-bros-are-now-one-hollywood-giant-skydance-heres-how-we-got-here" },
      ],
    },
    {
      id: "varonis",
      region: "Cybersecurity",
      date: "16 Oct",
      title: "Proofpoint agrees to buy Varonis for $6.3 billion in cash",
      summary:
        "Proofpoint, owned by private equity firm Thoma Bravo, will pay $49.75 a share for the data-security company, a 52% premium to Varonis's price before sale rumours surfaced in June. Varonis will go private once the deal closes, expected in the first half of 2027.",
      analysis:
        "AI is making data security more valuable, because companies need to control what their AI tools can see. Expect more consolidation in mid-sized security software.",
      figures: [
        { label: "Value", value: "$6.3B" },
        { label: "Per share", value: "$49.75" },
        { label: "Premium", value: "52%" },
      ],
      lens: {
        individuals:
          "Companies that hold your data are spending more to protect it, partly because of AI.",
        investors:
          "Mid-sized security software is a takeover hunting ground, and buyers are paying large premiums.",
        businesses:
          "If you use either product, expect roadmap and contract changes after 2027.",
      },
      impact: { individuals: "up", investors: "up", businesses: "mixed" },
      sources: [
        { name: "Bloomberg Government — Proofpoint to buy Varonis", url: "https://news.bgov.com/private-equity/proofpoint-to-buy-varonis-for-6-3-billion-as-tech-m-a-rebounds" },
        { name: "CRN Asia — 5 things to know", url: "https://www.crnasia.com/news-network/2026/5-things-to-know-on-proofpoint-s-6-3b-acquisition-of-varonis" },
      ],
    },
    {
      id: "axanzo",
      region: "Chemicals",
      date: "15 Oct",
      title: "AkzoNobel and Axalta name their merged company Axanzo",
      summary:
        "The planned coatings merger, first announced in November 2025, will trade as AXZ on the NYSE and Euronext Amsterdam. AkzoNobel shareholders vote on 30 November, and closing is expected in early 2027 pending regulatory approval. Greg Poux-Guillaume will be chief executive.",
      analysis:
        "Scale is the logic: a larger global supplier of paints and coatings has more pricing power with car makers and industrial customers, and more room to cut costs.",
      figures: [
        { label: "New ticker", value: "AXZ" },
        { label: "Vote", value: "30 Nov" },
        { label: "Close", value: "Early 2027" },
      ],
      lens: {
        individuals:
          "Little will change on paint shelves before 2027.",
        investors:
          "Watch the 30 November vote and regulators. Deal spreads close as approvals arrive.",
        businesses:
          "Car makers and industrial buyers will face a larger, more powerful coatings supplier.",
      },
      impact: { individuals: "mixed", investors: "mixed", businesses: "mixed" },
      sources: [
        { name: "SpecialChem — Axanzo name announced", url: "https://www.specialchem.com/coatings/news/akzonobel-and-axalta-to-be-called-axanzo-following-merger" },
        { name: "PCI Magazine — AkzoNobel sets new vote", url: "https://www.pcimag.com/articles/115408-akzonobel-sets-new-vote-on-axalta-merger" },
      ],
    },
    {
      id: "jnj-sn",
      region: "Medtech",
      date: "23 Oct",
      title: "J&J and Smith & Nephew's orthopaedics merger collapses over who would be CEO",
      summary:
        "According to a Financial Times report, the two sides had agreed on the main financial terms, which valued J&J's hip and knee unit at up to $22 billion. Talks broke down when Smith & Nephew refused J&J's choice of chief executive. J&J is now reported to be leaning toward spinning off its orthopaedics business instead.",
      analysis:
        "Governance can sink a deal even after the price is agreed. One analyst quoted in the coverage said it would not be surprising if the two sides eventually returned to talks.",
      figures: [
        { label: "Unit value", value: "Up to $22B" },
        { label: "J&J stake", value: "50.1%" },
        { label: "Status", value: "Collapsed" },
      ],
      lens: {
        individuals:
          "No direct effect on patients or products for now.",
        investors:
          "J&J's reported plan to spin off its orthopaedics business is the next thing to watch. Spin-offs can take time to settle.",
        businesses:
          "Leadership terms belong early in deal talks, not at the end.",
      },
      impact: { individuals: "mixed", investors: "mixed", businesses: "mixed" },
      sources: [
        { name: "MDDI — Merger collapses over CEO dispute", url: "https://www.mddionline.com/orthopedic/smith-nephew-j-j-orthopedics-merger-collapses-over-ceo-dispute" },
        { name: "TIKR — What it means for the DePuy spin", url: "https://www.tikr.com/blog/jjs-smith-nephew-deal-collapsed-over-one-executive-heres-what-it-means-for-the-depuy-spin" },
      ],
    },
    {
      id: "viatris",
      region: "Pharma",
      date: "8 Oct",
      title: "Viatris to buy Pacira BioSciences for $1.65 billion",
      summary:
        "Viatris will pay $36.50 a share in cash for the maker of EXPAREL and ZILRETTA, both non-opioid pain treatments. Pacira's shares jumped more than 44% on the news while Viatris fell nearly 3%. The deal is funded mostly with cash and is expected to close by the end of 2026.",
      analysis:
        "Large drugmakers are buying smaller companies that already have profitable products, rather than paying up for early-stage research.",
      figures: [
        { label: "Value", value: "$1.65B" },
        { label: "Per share", value: "$36.50" },
        { label: "Pacira move", value: "+44%" },
      ],
      lens: {
        individuals:
          "More investment is flowing into non-opioid pain relief.",
        investors:
          "Smaller drug companies that already earn revenue are the most likely takeover targets.",
        businesses:
          "Generic drugmakers are buying growth to offset pricing pressure in their core business.",
      },
      impact: { individuals: "up", investors: "up", businesses: "mixed" },
      sources: [
        { name: "KSL — Viatris to buy Pacira", url: "https://www.ksl.com/article/51633920/viatris-to-buy-pain-therapy-maker-pacira-biosciences-for-165-billion" },
        { name: "Pulse 2.0 — Viatris to acquire Pacira", url: "https://pulse2.com/viatris-to-acquire-pacira-biosciences-for-1-65-billion/" },
      ],
    },
    {
      id: "megadeals",
      region: "Global M&A",
      date: "2026",
      title: "2026 is shaping up as a record year for megadeals",
      summary:
        "Mergermarket counted 31 deals worth $10 billion or more at the start of the year, a record opening tally. Industry data shows announced deal value hit a record $2.8 trillion in the first half, up 48% on a year earlier, even as the number of deals fell. The largest is SpaceX's takeover of xAI, reported at about $250 billion, though no value was disclosed.",
      analysis:
        "Companies are buying scale: fewer deals, but much bigger ones. Higher interest rates have not stopped them, partly because large firms can pay with shares or cash on hand.",
      figures: [
        { label: "H1 value", value: "$2.8T" },
        { label: "Change y/y", value: "+48%" },
        { label: "$10B+ deals", value: "31 to start" },
      ],
      lens: {
        individuals:
          "Bigger companies can mean less competition and fewer choices in some markets.",
        investors:
          "Targets usually jump when a deal is announced, while acquirers' shares often lag.",
        businesses:
          "Competitors of merging firms face larger rivals, and suppliers may have to renegotiate contracts.",
      },
      impact: { individuals: "down", investors: "up", businesses: "mixed" },
      sources: [
        { name: "ION Analytics — Megadeals hit a record start", url: "https://ionanalytics.com/insights/mergermarket/capital-chases-scale-as-megadeals-hit-record-start-in-2026/" },
        { name: "Dealroom — Recent M&A deals 2026", url: "https://dealroom.net/blog/recent-m-a-deals" },
      ],
    },
  ],

  deals: [
    { acquirer: "Paramount Skydance", target: "Warner Bros. Discovery", value: 110000, valueNote: "reported, incl. debt", sector: "Media", status: "Completed 6 Oct", state: "done" },
    { acquirer: "J&J (orthopaedics unit)", target: "Smith & Nephew", value: 22000, valueNote: "unit value", sector: "Medtech", status: "Talks collapsed", state: "dead" },
    { acquirer: "Proofpoint (Thoma Bravo)", target: "Varonis", value: 6300, sector: "Cybersecurity", status: "Pending, H1 2027", state: "pending" },
    { acquirer: "Viatris", target: "Pacira BioSciences", value: 1650, sector: "Pharma", status: "Pending, end 2026", state: "pending" },
    { acquirer: "Alcon", target: "Neurotech", value: 550, sector: "Eye care", status: "Announced 22 Oct", state: "pending" },
    { acquirer: "AkzoNobel", target: "Axalta", value: null, sector: "Coatings", status: "Pending, early 2027", state: "pending" },
    { acquirer: "Stena", target: "Color Line", value: null, sector: "Ferries", status: "Pending, H1 2027", state: "pending" },
    { acquirer: "Merck KGaA", target: "Silence Therapeutics", value: null, sector: "Biotech", status: "Definitive agreement", state: "pending" },
    { acquirer: "KKR", target: "HOERBIGER explosion-protection units", value: null, sector: "Industrials", status: "Announced 23 Oct", state: "pending" },
  ],

  agents: [
    {
      name: "Households",
      state: "Squeezed",
      tone: "stress",
      now: "Gasoline is about 40% dearer than a year ago and consumer sentiment is near record lows. Households expect prices to rise 4.7% over the next year.",
      consider: "Build a buffer for fuel and energy bills, and compare fixed-price energy deals where they're offered.",
    },
    {
      name: "Savers",
      state: "Paid, barely",
      tone: "mixed",
      now: "Cash and short-term bonds pay close to the Fed's 3.75–4.00% range, but 3.7% inflation leaves almost nothing in real terms.",
      consider: "Shop around for the best savings rate and look at inflation-linked options for longer-term cash.",
    },
    {
      name: "Borrowers and homebuyers",
      state: "Expensive",
      tone: "stress",
      now: "The 30-year mortgage averages 7.32% and another Fed hike is possible in December. Variable-rate debt could get dearer.",
      consider: "Prioritise paying off variable and high-interest debt. Fixed rates protect you from further rises.",
    },
    {
      name: "Workers",
      state: "Cooling market",
      tone: "mixed",
      now: "Only 29,000 jobs were added in September and unemployment rose to 4.2%, its highest since 2021.",
      consider: "Keep three to six months of expenses in an emergency fund and keep your skills current.",
    },
    {
      name: "Investors",
      state: "Concentrated risk",
      tone: "mixed",
      now: "Earnings growth is strong but narrow, the 10-year yield is near 5%, and gold and bitcoin are sliding. Brazil showed how quickly markets can turn on politics.",
      consider: "Check how concentrated your funds are in a few tech names, and remember bonds now pay a real income.",
    },
    {
      name: "Businesses",
      state: "Cost pressure",
      tone: "stress",
      now: "US firms report the fastest rise in selling prices in over four years. Energy, memory chips and borrowing all cost more.",
      consider: "Review energy hedges, lock in key supply contracts early and stress-test plans for higher rates.",
    },
    {
      name: "Governments and central banks",
      state: "Policy dilemma",
      tone: "hot",
      now: "Central banks must fight energy inflation without tipping weak economies into recession. Brazil cancelled bond auctions as investors sold.",
      consider: "Watch this week's Fed, ECB and Bank of Japan decisions and the US midterms on 3 November.",
    },
    {
      name: "Energy importers",
      state: "Exposed",
      tone: "hot",
      now: "Countries such as India, which before the war received almost half its crude imports through the Strait of Hormuz, are the most exposed to the oil premium.",
      consider: "Currencies and stocks of big energy importers tend to suffer when oil spikes.",
    },
  ],

  watchlist: {
    intro:
      "These are the ideas I'm personally considering for my own money after reading this week's news. They describe types of investment, not specific products. For each one I've written down why, the main risks, and what would make me change my mind.",
    ideas: [
      {
        name: "Cash that pays",
        role: "Ballast",
        examples: ["Short-term government bond funds", "Money-market funds", "Savings accounts"],
        why: "The Fed is at 3.75–4.00% and leaning toward another hike, so short-term cash keeps earning a decent rate with relatively low risk.",
        risk: "Low-risk is not no-risk: funds can still lose value. With inflation at 3.7%, the real return is close to zero, and rates fall quickly if the Fed changes course.",
        changeMind: "The Fed signals rate cuts.",
        conviction: 3,
        horizon: "0–12 months",
      },
      {
        name: "Inflation-linked bonds",
        role: "Inflation hedge",
        examples: ["Inflation-linked government bond funds"],
        why: "Headline inflation is 3.7%, consumers expect 4.7%, and oil is above $115. These bonds adjust with inflation.",
        risk: "They lose value if real yields keep rising. If oil drops, the inflation scare may fade.",
        changeMind: "Oil falls back below $90 and core inflation cools.",
        conviction: 2,
        horizon: "1–3 years",
      },
      {
        name: "AI hardware and memory",
        role: "Growth",
        examples: ["Broad semiconductor funds"],
        why: "Memory supply is expected to stay tight through 2028, and chipmakers are delivering much of the S&P 500's earnings growth.",
        risk: "It's a crowded, cyclical trade. Worries about AI debt, or weak Big Tech capex guidance this week, could hit it hard.",
        changeMind: "Microsoft, Alphabet or Amazon cut capex plans, or memory prices start falling.",
        conviction: 2,
        horizon: "2–5 years",
      },
      {
        name: "Cybersecurity",
        role: "Growth",
        examples: ["Broad cybersecurity funds"],
        why: "AI makes data security more valuable, and recent deals show buyers paying large premiums to consolidate the sector.",
        risk: "Valuations are already high and deals can fall apart. Software multiples suffer when yields rise.",
        changeMind: "Large security deals dry up, or growth at the big security vendors slows sharply.",
        conviction: 2,
        horizon: "3–5 years",
      },
      {
        name: "Energy, as a hedge",
        role: "Hedge",
        examples: ["Broad energy-sector funds"],
        why: "Brent is above $115 on Middle East risk. A small position offsets some of what I lose at the pump if prices keep rising.",
        risk: "This is effectively a geopolitical bet. A ceasefire or diplomatic deal could cut prices quickly.",
        changeMind: "A durable de-escalation in the Gulf.",
        conviction: 1,
        horizon: "6–18 months",
      },
      {
        name: "A diversified global core",
        role: "Foundation",
        examples: ["Low-cost global index funds"],
        why: "None of the themes above is certain. A low-cost global index fund spreads money across thousands of companies, so the plan does not depend on any one theme being right.",
        risk: "It follows the whole market down in a sell-off and is heavily weighted toward US tech.",
        changeMind: "Nothing in this week's news. This is a long-term holding.",
        conviction: 3,
        horizon: "10+ years",
      },
    ],
    allocation: [
      { name: "Global index core", pct: 50 },
      { name: "Cash that pays", pct: 17 },
      { name: "Inflation-linked bonds", pct: 10 },
      { name: "AI hardware and memory", pct: 10 },
      { name: "Cybersecurity", pct: 8 },
      { name: "Energy hedge", pct: 5 },
    ],
    avoid: [
      {
        name: "Brazilian assets, for now",
        why: "Stocks fell 13.9% in a day and bond auctions were cancelled. I'd rather wait for a credible budget signal than try to catch the bottom.",
      },
      {
        name: "Speculative tech funded by cheap debt",
        why: "With the 10-year near 5% and spreads on AI debt widening, companies that need to keep borrowing are the most fragile.",
      },
      {
        name: "Consumer discretionary",
        why: "Fuel costs and near-record-low sentiment are squeezing the budgets these companies depend on.",
      },
      {
        name: "Chasing gold and bitcoin lower",
        why: "Both are falling while cash pays around 4%. I'd revisit if the Fed turns toward cuts.",
      },
    ],
    rules: [
      "Emergency fund first: three to six months of expenses in cash before investing.",
      "Pay off high-interest debt before buying anything on this list.",
      "Keep each theme small. The diversified core should be the biggest holding.",
      "Invest gradually (pound- or dollar-cost averaging) instead of all at once.",
      "Prefer low-cost funds over single stocks unless I truly understand the company.",
      "Rebalance on a schedule, not on headlines.",
      "Never invest money I'll need within three years in volatile assets.",
    ],
    conflictNote:
      "Not on this list: the Anthropic IPO. This site's analysis was drafted with help from Claude, an Anthropic AI model, so I've left it out to avoid a conflict of interest.",
    holdingsNote:
      "Companies named elsewhere on this site appear only as news, not as recommendations. If I hold shares in a company named on this site, I'll say so next to that story.",
  },
};
