
import { 
  BookOpen, 
  Cpu, 
  MousePointerClick, 
  BrainCircuit, 
  Compass, 
  BarChart2, 
  Newspaper, 
  MonitorPlay 
} from 'lucide-react';

export interface LearningModule {
  id: string;
  icon: any;
  titles: Record<string, string>; 
  content: Record<string, string>;
}

export const learningModules: LearningModule[] = [
  // 1. Basic Concepts
  {
    id: 'basics',
    icon: BookOpen,
    titles: {
      en: 'Basic Concepts of CFD & Overview',
    },
    content: {
      en: `What is a CFD (Contract for Difference)?
A CFD, or Contract for Difference, is a derivative product that allows investors to settle profits or losses in cash based on the price difference at the time of the trade, without actually exchanging the underlying asset with the broker.
In other words, it’s a structure where trading is based solely on the price difference of the underlying asset, without owning it directly.
section_title:1. CFD Structure
section_body:a. Long (Buy): You profit when the price rises compared to the time of entry.
b. Short (Sell): You can realize gains from a price drop without owning the underlying asset.
c. Leverage: By depositing only a portion of the margin, you gain exposure to the full contract value, which can amplify profits and losses.
d. Settlement Method: Profit or loss is settled in cash based on the price difference, without physical delivery of the underlying asset. Dividends, interest, or swap costs may also be reflected.
e. Trading Types: CFDs are either over-the-counter (OTC) or exchange-traded. OTC trades are agreements directly with the broker, while exchange-traded CFDs go through central clearing.
f. Risk Management: There are various risks, including margin calls, stop-out liquidations, and counterparty risk.
section_title:2. Stock Trading vs CFD Trading
section_body:a. Ownership of Underlying Assets
Stock Trading: You actually own the shares, which come with voting rights and dividends.
CFD: You do not own the underlying asset, so there are no voting rights, and dividends are adjusted and reflected in the account.
b. Leverage
Stock Trading: Leverage is limited and heavily regulated.
CFD: High leverage is available, allowing you to trade larger positions with less capital.
c. Short Selling
Stock Trading: Short selling requires borrowing the stock and is subject to regulations.
CFD: You can take short positions without borrowing the underlying asset.
d. Trading Costs
Stock Trading: Fees, transaction taxes, and clearing fees apply.
CFD: Various costs may occur, including spreads, commissions, and overnight fees.
e. Dividend Handling
Stock Trading: Dividends are received directly, either in cash or additional shares.
CFD: Dividends are reflected as adjustments in your account.
f. Regulation and Transparency
Stock Trading: Exchange-based with central clearing ensures high transparency.
CFD: OTC trading can involve counterparty risk and less transparency.
g. Taxation
Stock Trading: Capital gains and dividends are taxed according to local regulations.
CFD: Taxes on capital gains, dividends, and transactions vary by country.
h. Trading Hours
Stock Trading: Limited to exchange operating hours.
CFD: Can often be traded 24 hours or during extended hours.
section_title:3. Assets Available for CFD Trading
section_body:a. Stock CFDs: Individual company shares
b. Index CFDs: Major indices such as S&P500, KOSPI
c. Commodity CFDs: Gold, silver, crude oil, etc.
d. FX CFDs: Major currency pairs like EUR/USD, USD/JPY
e. Bond & Interest Rate CFDs: Government bonds or interest rate-based products
f. Cryptocurrency CFDs: BTC, ETH, etc. (available in certain regulated regions)
g. Structured CFDs: Leveraged or inverse products with various forms
section_title:4. Advantages of CFDs
section_body:CFD trading comes with several advantages that investors may find appealing.
First and foremost, the ability to use leverage is a major benefit. You can participate in large markets with relatively small capital, which enhances investment efficiency.
Another significant advantage is flexibility. You can take long positions when the market rises and short positions when it falls, allowing you to pursue profits in both directions.
Additionally, a single account gives you access to multiple asset classes, making portfolio diversification much easier. Trading hours are also flexible, so you can trade 24 hours or during extended hours. When needed, you can quickly enter or exit positions, which is particularly useful for investors who want to react swiftly to market movements.
section_title:5. Disadvantages of CFDs
section_body:Of course, CFD trading is not without its risks. There are several points investors need to keep in mind before trading.
Because leverage is high, unexpected market fluctuations can lead to losses that are significantly larger than anticipated.
Since CFDs are primarily traded OTC, the reliability of your broker is very important. If a broker faces financial instability or bankruptcy, your assets could be at risk.
You also need to be aware of additional costs, such as spreads, rollover fees, and overnight fees. Compared to exchange-based stock trading, CFD prices and execution quality may be less favorable, and rapid market movements can result in orders not being executed at your desired price, creating slippage.
Finally, regulatory and tax considerations should not be overlooked. Rules and tax treatments vary from country to country, so it’s essential to verify them before trading. Moreover, dividend treatment in CFDs may differ from the actual stock dividends, which is important to understand in advance.
section_title:6. Practical Checklist
section_body:Before you start CFD trading, it’s recommended to carefully check the following points.
First, confirm that your broker is regulated by a trustworthy authority and that client assets are held separately.
Take a close look at trading costs, including spreads, commissions, and swap fees, and be aware that costs may be higher than expected.
Check execution quality, including fill rates, slippage, and requotes, to ensure trades are carried out efficiently.
Set loss limits in advance and plan your position-sizing strategy carefully for safety.
Finally, fully understand local taxes and regulations and develop a strategy that aligns with your investment goals. Conducting backtests and simulations beforehand is highly recommended to verify the effectiveness of your approach.`,
    }
  },
  // 2. Mechanism
  {
    id: 'mechanism',
    icon: Cpu,
    titles: {
      en: 'Mechanism of CFD Trading',
    },
    content: {
      en: `section_title:Understanding Long & Short Positions, Leverage, and Margin
section_body:For those new to investing or trading, it’s essential to understand the core concepts of Long and Short positions, Leverage, and Margin. Below, we explain the basics along with practical points to keep in mind.
section_title:1. Long and Short Positions
section_body:Long Position
A long position is taken when you expect an asset’s price to rise. If the price goes up, you profit; if it goes down, you incur a loss.
Transaction flow: Place buy order → Broker (or exchange) executes → Hold position → Close position to realize profit or loss
In stocks, additional income like dividends may apply, and in bonds, interest. In CFDs, dividend adjustments can occur.
Short Position
A short position is taken when you expect an asset’s price to fall. In futures or CFD trading, you can enter a short position without borrowing, but for spot stocks, borrowing is required.
Spot stock process: Borrow stock → Sell in the market → Buy back at a lower price → Return stock and realize profit
(In CFDs or futures, borrowing is not needed; you can open and close positions directly.)
Short positions carry obligations like dividend payments, borrowing costs, and theoretically unlimited loss potential, so risk management is crucial.
section_title:2. Leverage and Margin
section_body:Leverage
Leverage is the ratio of the position value to your own capital. For example, 10x leverage means 1 unit of capital controls 10 units of market exposure.
Effect: Both profits and losses are amplified, and higher volatility assets increase risk rapidly.
Formula:
Leverage = Position Value ÷ Account Equity = 1 ÷ Initial Margin Rate
Margin
Initial Margin: Minimum deposit required to open a position
Maintenance Margin: Minimum balance needed to maintain the position. Falling below triggers a margin call or forced liquidation
Margin types:
Cross Margin: Entire account balance absorbs losses
Isolated Margin: Margin fixed per position
Example: Account equity 1,000 USD, leverage 20:1 → Maximum position 20,000 USD
1% price increase → Profit 200 USD → Account equity up 20%
5% price decrease → Possible full loss of account equity
section_title:3. Margin Calculation
section_body:Basic Formulas
Initial Margin = Notional Value × Initial Margin Rate
Maintenance Margin = Notional Value × Maintenance Margin Rate
Notional Value Calculation
Stock CFD: Price × Quantity
FX: Trade size (lots) × Contract unit × Exchange rate
Index/Futures: Points × Contract value per point × Number of contracts
Examples
Stock CFD: Apple 150 USD, buy 100 shares, margin rate 10% → Notional value 15,000 USD, margin 1,500 USD
FX: EUR/USD 1.1200, buy 1 lot (100,000 EUR), margin rate 2% → Notional value 112,000 USD, margin 2,240 USD
Margin Call & Forced Liquidation
(Account balance + unrealized P&L) < Maintenance Margin → triggers margin call or forced liquidation
Stop-loss price can be calculated as Allowed Loss ÷ Position Size
section_title:4. Trading Costs
section_body:Spread: Difference between bid and ask price; cost is incurred immediately on entry
Commission: Fixed or percentage-based depending on trade size; varies by broker
Swap/Overnight Financing: Cost for holding positions overnight, reflecting interest rate differences, commodity storage/transport costs, or futures contango/backwardation
Other Costs: Slippage, requotes, taxes, currency conversion, etc.
section_title:5. Risk Management and Practical Strategies
section_body:Position Sizing: Risk only 0.5–2% of account equity; adjust using volatility indicators like ATR
Loss Management: Set stop-loss in advance and monitor maintenance margin continuously
Cost Optimization: Minimize spread/commission for short-term trades; manage swap/rollover for long-term positions
Broker Selection: Check fee structure, execution quality, asset segregation, and regulatory status
Stress Testing: Consider extreme volatility, liquidity crises, and broker risk to ensure account stability
section_title:6. Summary
section_body:Long: Betting on price increase
Short: Betting on price decrease
Leverage: Participate in a large market with small capital, but both profits and losses are magnified
Margin: Notional value × margin rate; insufficient margin triggers margin call or liquidation
Trading Costs: Consider spreads, commissions, swaps, etc. comprehensively
Risk Management: Position sizing, stop-loss setting, cost optimization, broker selection, and stress testing are essential`,
    }
  },
  // 3. Order Methods
  {
    id: 'orders',
    icon: MousePointerClick,
    titles: {
      en: 'Order Methods',
    },
    content: {
      en: `section_title:Understanding Order Types and Risk Management
section_body:When you first start trading, understanding how to use order types and risk management strategies can make a big difference in your performance. Small differences in approach can significantly affect profits and losses, so it's essential to understand the fundamentals and practical points beforehand. Here, we'll walk through market orders, limit orders, and stop-loss/take-profit strategies in a way that's easy to follow.
section_title:1. Market Orders
section_body:A market order is essentially an order to buy or sell immediately at the best available price in the market. It's often used when you want to enter or exit a position quickly.
The main advantage is speed. As long as there is sufficient liquidity, your order will almost always be executed, making it ideal for urgent situations.
However, in volatile markets, the execution price may differ from what you expect. This is called slippage. Large orders can also increase trading costs due to widening spreads.
section_title:2. Limit Orders
section_body:A limit order is an order set to execute only at a specific price you choose. This allows you to secure a desired price and reduce slippage.
You may even earn a rebate from your broker if your order adds liquidity.
The downside is that your order may not execute if the market moves quickly, so you could miss opportunities during rapid price changes. Strategic planning is necessary to decide which type of order to use.
section_title:3. Market Orders vs Limit Orders
section_body:In short, market orders offer faster execution but no price guarantee, and slippage risk exists.
Limit orders guarantee the price you want but may not be executed. The execution of large limit orders also depends on market depth.
section_title:4. Advanced Orders and Execution Techniques
section_body:Splitting large orders into smaller parts (Scale-in / Scale-out) can minimize market impact.
Iceberg and Hidden Orders hide large orders to reduce exposure risk.
Pegged and Mid-price Orders automatically link to the best bid or midpoint price. Conditional orders like FOK, IOC, and Post-only provide more control.
Algorithmic execution methods like VWAP, TWAP, and Slicing help reduce market impact and slippage by executing orders systematically.
Analyzing liquidity curves and order book depth before trading can improve the efficiency of your execution strategy.
section_title:5. Stop-Loss and Take-Profit Principles
section_body:Stop-loss limits losses, protects your capital, and prevents emotionally driven exits.
Take-profit allows you to lock in profits and exit strategically.
Design principles include setting a risk-to-reward ratio around 1:1.5~1:3, using volatility-based stops to avoid market noise, and accounting for spreads and slippage. OCO orders can manage stop-loss and take-profit simultaneously for more strategic control.
section_title:6. Types of Stop Orders
section_body:Stop-market: Guarantees execution but not price, which can be disadvantageous if a gap occurs.
Stop-limit: Guarantees price but carries the risk of non-execution.
Trailing stop: Follows an uptrend to protect profits.
Time-based stop: Exits a position if targets are not met within a set period.
Partial stop: Closes part of a position to reduce risk exposure.
section_title:7. Take-Profit Design
section_body:Fixed Limit: Closes at a specific price.
Multiple TPs: Partial exits to manage risk.
Dynamic Target: Adjusts based on indicators such as ATR or Bollinger Bands.
Advanced strategies: Fibonacci retracement or range breakout can guide take-profit targets.
section_title:8. Key Metrics for Position Monitoring
section_body:Monitor account balance, used/available margin, and margin level to manage capital.
Check realized/unrealized P&L to track position performance.
Examine position delta, leverage, entry price, and average P&L to assess risk and decide on exit timing.
Order book depth, execution speed, slippage stats, and event calendars (like economic releases and earnings seasons) also help evaluate execution quality.
section_title:9. Automatic and Forced Liquidation
section_body:If your maintenance margin is insufficient, a margin call occurs, and forced liquidation is triggered if not corrected.
Liquidation priority depends on loss size, position size, and liquidity.
Liquidation price is calculated based on account balance, margin ratio, and position size.
Regularly monitoring margin levels and setting automatic alerts can help reduce unnecessary liquidation risks.
section_title:10. Manual and Partial Liquidation Strategies
section_body:Partial liquidation can recover capital, reduce risk, and ease psychological pressure.
You can split positions according to target prices or combine with trailing stops for more strategic execution.
Consider leverage, position correlation, liquidity, and spread changes when planning liquidation strategies.
section_title:11. Practical Scenarios
section_body:Example A: Gap down after a news shock
Situation: Long position drops 6% immediately after market opens
Response: If Stop-limit fails, switch to Stop-market or hedge with options
Example B: Stop-loss during low liquidity
Situation: Severe slippage occurs when closing at market price
Response: Split limit exits or maintain lower leverage
Example C: Margin pressure with multiple positions
Situation: Margin level drops, forcing liquidation risk
Response: Close some positions and manage remaining positions with OCO orders
section_title:12. Platform and Broker Considerations
section_body:Check order priority, execution quality, and stop order handling with your broker.
Ask for stats on slippage, execution rate, and whether stop orders are internally processed or linked to the market.
Summary
Market orders: Fast execution but slippage risk exists.
Limit orders: Price can be secured but execution is not guaranteed.
Stop-loss and take-profit: Essential strategies to protect capital and lock in profits.
Understanding position monitoring and forced liquidation mechanisms, and checking broker/platform features carefully, forms the foundation of safe trading.`,
    }
  },
  // 4. Risk Management and Trading Psychology
  {
    id: 'risk',
    icon: BrainCircuit,
    titles: {
      en: 'Risk Management and Trading Psychology',
    },
    content: {
      en: `section_title:1. 1–2% Risk Rule
section_body:One of the most fundamental principles in trading is to set your position size and stop-loss in a way that you do not lose more than 1–2% of your total account balance in a single trade.
By following this rule, even unexpected large losses will not wipe out your account, allowing for steady compounding growth in the long run.
Mathematically, traders consider expectancy to determine long-term profitability and use the Kelly formula to optimize capital allocation. However, in real markets, this is usually reduced to 20–50% to account for uncertainty. The 1–2% rule is essentially a simplified and conservative practical safety measure.
To apply this in practice, measure your stop distance using volatility indicators such as ATR, then calculate your position size based on your account capital and risk ratio. For example, if you have a \$50,000 account, risk 1% (\$500), and trade AAPL CFDs with a stop distance of \$5, you can buy 100 shares (500 ÷ 5).
The advantage of this rule is that it prevents large drawdowns and ensures psychological stability and consistent capital management. The downside is that rare, exceptional opportunities may be limited, potentially slowing growth.
section_title:2. Diversification and Leverage Management
section_body:Diversification reduces overall risk by combining assets that move differently. The lower the correlation between assets, the lower the overall portfolio volatility.
In practice, you can mix stocks, bonds, commodities, FX, and cryptocurrencies. Assign lower weights to highly volatile assets and higher weights to stable assets to balance your portfolio. Negative-correlation assets or options can also be used to hedge selectively.
Leverage is like a double-edged sword. Used correctly, it enables rapid growth; used incorrectly, it can wipe out your account. Set leverage limits per asset, apply lower leverage for volatile assets like cryptocurrencies, and relatively higher leverage for stable assets like government bonds. Maintain a safety buffer of at least 150–200%, and dynamically adjust leverage based on market conditions.
Avoid risk concentration by limiting exposure to a single asset to below 5% of your account and perform stress tests assuming correlation spikes during market crashes.
section_title:3. Trading Psychology
section_body:Psychology plays a major role in trading results.
Fear can lead to early exits, causing missed opportunities. Greed may cause excessive trading or over-leveraging, resulting in large drawdowns.
Common biases include loss aversion, overconfidence, confirmation bias, and the sunk cost fallacy. Manage these by following rules-based trading, checking risk limits, volatility, and events before each trade, keeping a trading journal to record emotional state and decision-making, and using automated or algorithmic orders to reduce emotional interference.
section_title:4. Integrated Workflow
section_body:In practice, it’s effective to follow a structured workflow:
Preparation: Limit maximum daily loss to 2% of capital, single-asset risk to 1%, and predefine total leverage and volatility limits.
Execution: When a signal occurs, calculate stop distance using ATR, determine position size applying the 1% rule, and enter trades with stop-loss and take-profit orders.
Management: Monitor margin levels, volatility, and news in real time. Automatically reduce risk during high volatility or consecutive losses.
Post-trade: Maintain a trading journal, review weekly and monthly performance (win rate, average P\&L, max drawdown), and refine your rules based on data.
section_title:5. Numerical Examples
section_body:Account: \$100,000
Risk: 1% = \$1,000 allowable loss
Entry price: \$50, Stop distance: \$2
Loss per unit: \$2
Position size = 1,000 ÷ 2 = 500 shares
Volatility-target leverage:
Target volatility = 10%
Current portfolio volatility = 20%
Adjust leverage = 10 ÷ 20 = 0.5 → Reduce position size by half
section_title:6. Key Takeaways
section_body:1–2% Rule: The most basic and powerful risk management principle to ensure account survival.
Diversification & Leverage: Spread your capital across multiple assets while avoiding excessive leverage that concentrates risk.
Trading Psychology: Without controlling fear and greed, accounts can fail before strategy or skill matters. Minimize emotional influence through rules, journals, and automation.`,
    }
  },
  // 5. Basic Strategy
  {
    id: 'strategy',
    icon: Compass,
    titles: {
      en: 'Basic Strategy',
    },
    content: {
      en: `section_title:1. Scalping
section_body:Scalping is a very short-term trading strategy, capturing small price movements that occur within seconds to minutes repeatedly to accumulate profits. The goal is to secure total gains by stacking small profits at the tick or pip level.
The typical timeframe for scalping is 1 second to 1 minute, targeting highly liquid assets with narrow spreads, such as major currencies, large-cap stocks, or stable commodities.
Revenue comes from micro-momentum, order book inefficiencies, and spread gaps, while costs such as spreads, commissions, and slippage can significantly affect profitability.
Execution requires low-latency environments and the use of DMA or ECN brokers. Strict loss limits, such as hourly maximum losses, partial execution, and leverage limits are recommended. Key risks include network delays, cost accumulation from excessive trading, and market shocks.
Analysis techniques include order-book signals and statistical methods. Scalping is suitable for professional traders with advanced infrastructure or HFT environments.
section_title:2. Day Trading
section_body:Day trading involves closing all positions within the same day. Positions are held from minutes to several hours, capturing daily opportunities from news, momentum, or gap events to realize profits.
Charts of 1–15 minutes are used, and highly liquid stocks, ETFs, FX, and index futures are the main assets. Orders can be market, limit, trailing stop, or OCO types.
Main strategies include momentum trading based on increased volume, news, or breakouts, mean-reversion trading for overextended price movements, and strategies like VWAP, opening breakouts, or gap fades.
Risk management includes setting daily loss limits around 1% of account capital, avoiding event risks, and maintaining trade journals with execution logs.
section_title:3. Swing Trading
section_body:Swing trading involves holding positions for several days to weeks, capturing medium-term trends or rebounds. While frequency is lower, expected profit per trade is relatively high.
Charts include hourly, 4-hour, and daily. Tools like trendlines, moving averages, Fibonacci, and MACD are used. Fundamental factors, such as policy changes or supply-demand news, also influence direction.
Risk management includes ATR-based wider stop-loss and target settings to avoid short-term noise, volatility-based position sizing, and consideration of overnight or weekend gaps and rollover costs.
Advantages include lower trading costs and capturing large trends; disadvantages include tied-up capital and exposure to gap risks.
section_title:4. Hedge Strategies
section_body:Hedge strategies aim to reduce potential losses when positions or portfolios move unfavorably, using opposite positions or derivatives. The goal is to mitigate volatility and risk to protect capital.
Tools include correlated assets (e.g., stocks hedged with bonds or gold), futures, options, CFDs, and option strategies like protective puts, covered calls, and collars. Delta hedging can neutralize option delta and may require dynamic adjustments.
Design principles include ideal hedge ratios, cost-benefit analysis, and consideration of liquidity and maturity. Risks include basis risk, cumulative option premiums, and increased complexity in dynamic hedge execution.
section_title:5. Strategy Comparison and Guide
section_body:Scalping requires fast decision-making, low-latency infrastructure, and is sensitive to trading costs.
Day trading captures daily opportunities and uses news and momentum-based strategies.
Swing trading involves holding positions for several days to weeks to pursue large trends.
Hedge strategies reduce risk using derivatives and correlated assets, but cost considerations are essential.
Common risk management principles include limiting risk to 1–2% per account, using volatility-based stop-loss and take-profit, checking economic indicators and news events, and verifying broker reliability and execution quality.
Combined usage examples include hedging swing positions with options, maintaining delta-neutral portfolios with day trading, and multi-timeframe strategies: swing for trends, day trading for entries/exits, and scalping for ultra-short-term gains.
section_title:6. Expert Tips
section_body:Monitor performance metrics like Sharpe ratio, information ratio, and maximum drawdown.
Check execution quality, including fill rates, slippage, and order book depth.
Backtesting should include realistic costs and slippage.
Recommended infrastructure includes VPS/colocation servers, DMA/ECN access, and low-latency API environments.
section_title:7. Key Summary
section_body:Scalping demands focus and specialized infrastructure.
Day trading is executed within a day, leveraging news and momentum opportunities.
Swing trading captures trends and rebounds over days to weeks.
Hedge strategies mitigate risks using derivatives and correlated assets while accounting for costs and mismatch risks.`,
    }
  },
  // 6. Technical Analysis
  {
    id: 'technical',
    icon: BarChart2,
    titles: {
      en: 'Fundamentals of Technical Analysis',
    },
    content: {
      en: `section_title:1. Candlestick Patterns
section_body:Candlesticks are a tool that visually represents price movements in various markets, including stocks, forex, and cryptocurrencies.
A candlestick consists of a body and shadows (or wicks). The body shows the difference between the opening (Open) and closing (Close) prices, while the shadows show the range between the high (High) and low (Low) prices. A bullish candle forms when the closing price is higher than the opening price, and a bearish candle forms when the closing price is lower.
Single candle patterns can indicate trend reversals or consolidation signals. For example, after a downtrend, a long lower wick in a hammer or inverted hammer pattern can signal a potential bounce at support. Conversely, a hanging man or shooting star appearing after an uptrend may signal a potential sell near resistance. A doji indicates indecision, as the open and close prices are almost equal, and can signal trend reversal or consolidation zones. Variants include gravestone doji and dragonfly doji.
Composite candlestick patterns are also widely used. A bullish engulfing pattern occurs when a large bullish candle completely engulfs a preceding small bearish candle, signaling strong buying pressure. Conversely, a bearish engulfing pattern occurs when a large bearish candle engulfs a preceding bullish candle. Other patterns such as piercing line, dark cloud cover, three white soldiers, and three black crows can indicate continuation or reversal signals.
However, relying solely on candlestick patterns is risky. Always confirm signals using support/resistance, volume, and trend strength. Habitually check for breakouts, volume spikes, and other confirmations alongside candlestick patterns.
The reliability of patterns can vary depending on the timeframe. Applying ATR-based minimum body and length filters can reduce market noise, and setting stop-loss and take-profit levels helps utilize patterns safely.
section_title:2. Support & Resistance and Trendlines
section_body:Support is the price level where buying interest emerges as the price falls, halting or bouncing the decline.
Resistance is the price level where selling pressure strengthens as the price rises, halting or reversing the uptrend.
Trendlines connect highs and lows to visualize uptrends (ascending trendlines) or downtrends (descending trendlines), helping to understand market flow.
Support and resistance levels can be more accurately identified using previous reaction zones, pivot points, VWAP, or Fibonacci levels. Trendlines should connect at least two points, with each touchpoint validated.
If the price weakens at resistance, consider short positions or partial exits. If the price bounces at support, consider long entries. When resistance is broken, it often becomes support, but confirmation should be checked through volume, candlestick behavior, and market structure.
False breakouts can occur with shallow volume and quick re-entries. Filters such as volume, order depth, and transaction amounts help reduce false signals. Technical indicators like moving averages or Bollinger Bands can also serve as dynamic support/resistance.
Checking multiple timeframes reveals whether higher timeframe support/resistance levels hold stronger significance in lower timeframes. Always consider slippage risk relative to stop distance when entering near major support/resistance levels.
section_title:3. Moving Averages, RSI, and MACD
section_body:Moving averages (MA) help identify the overall flow of price movements.
Simple moving averages (SMA) show the average closing price over a recent N-period, while exponential moving averages (EMA) give more weight to recent data, increasing responsiveness.
If the price is above an MA, the trend is considered up; if below, down. MAs of 50, 100, and 200 periods can act as dynamic support/resistance. A short-term MA crossing above a long-term MA signals a golden cross (buy), and crossing below signals a death cross (sell).
The Relative Strength Index (RSI) is a momentum oscillator that ranges from 0 to 100 based on recent gains and losses. An RSI above 70 signals overbought conditions, below 30 signals oversold. Divergences between price and RSI can indicate weakening trends or potential reversals.
MACD (Moving Average Convergence Divergence) measures both trend and momentum. Crossovers of the MACD and signal lines provide buy/sell signals, and the histogram visually shows momentum changes. Divergences between price and MACD can help assess trend strength and reliability.
section_title:4. Practical Application
section_body:Using candlestick patterns, support/resistance, trendlines, moving averages, RSI, and MACD together improves trade reliability.
For example, after a downtrend, a hammer near support and an RSI rebound from oversold can indicate a long entry opportunity based on support. Using MA crossovers and MACD filters together enhances confidence in trend reversals.
If price makes new highs but RSI or MACD shows lower highs, it signals weakening momentum, suggesting partial profit-taking or stop adjustment. Setting ATR-based stops, checking volume, and order execution quality (fill/slippage) enhances breakout and reversal reliability.
section_title:5. Risk Management and Trading Rules
section_body:Never enter based on a single signal. Use multiple confirmations, including candlestick patterns, volume, and trend indicators.
A top-down approach—analyzing higher timeframe trends and finding entry points in lower timeframes—is effective. Stops, take-profits, and position sizes should always follow predefined rules (e.g., 1–2% risk per trade).
Slippage and gap risks increase near major support/resistance or around events, so choose between stop-limit and stop-market orders according to the situation.
section_title:6. Summary (Key Points)
section_body:Candlesticks provide a visual representation of price movements but are more reliable when combined with support/resistance, volume, and trend.
Support, resistance, and trendlines show structural market levels. Breakouts versus reversals should be confirmed using volume and candlestick action.
Moving averages offer trend information, dynamic support/resistance, and crossover signals, but due to lag, they should be used with momentum indicators like RSI and MACD.
RSI detects overbought/oversold conditions and divergences; MACD tracks momentum changes and crossovers. Using these together allows multi-angle confirmation of trend, momentum, and reversals.
All signals should be applied with risk management—considering stops, position size, trading hours, and liquidity—to be meaningful in live trading.`,
    }
  },
  // 7. Advanced Analysis & News Trading
  {
    id: 'advanced',
    icon: Newspaper,
    titles: {
      en: 'Advanced Analysis & News Trading',
    },
    content: {
      en: `section_title:1-1. Policy Rate / Interest Rate
section_body:The policy rate (Policy Rate) is the interest rate set by the central bank, such as the Federal Funds Rate (Fed Funds) in the United States. This rate directly affects financial conditions, including loans, deposits, and discount rates.
When interest rates rise, monetary conditions tighten, bond yields (Bond Yield) increase, prices fall, and stocks (Stocks), real estate (Real Estate), and growth stocks (Growth Stocks) may be pressured. Conversely, when rates decrease, liquidity and leverage (Leverage) expand, creating a favorable environment for risk assets (Risk Assets).
1-2. Consumer Price Index / Inflation
The consumer price index (CPI: Consumer Price Index) measures the price changes of goods and services purchased by consumers. There is headline CPI and core CPI (Core CPI) excluding food and energy.
Higher-than-expected inflation (Inflation) increases the likelihood that the central bank will tighten monetary policy through interest rate hikes. These changes are quickly reflected in real interest rates (Real Interest Rate), bond yields (Bond Yield), and currency values (Currency Value).
1-3. Employment Data
Key employment indicators include nonfarm payrolls (NFP: Nonfarm Payrolls), unemployment rate (Unemployment Rate), average hourly earnings (Average Hourly Earnings), and labor force participation rate (Labor Force Participation Rate).
Improved employment affects consumption (Consumption), wages (Wages), and prices (Prices), influencing the economic and inflation (Inflation) loop. This serves as an important signal for central bank monetary policy (Monetary Policy) direction.
section_title:2. Event (News) Volatility Characteristics and Mechanisms
section_body:Market volatility (Market Volatility) arises from various factors.
First, information shocks (Information Shock). If the released data differs from market consensus (Consensus), the market adjusts expectations, such as the interest rate path (Interest Rate Path).
Second, liquidity drops (Liquidity Drop). During major announcements, if participants reduce quote provision, spreads (Spread) widen, and slippage (Slippage) intensifies.
Third, algorithmic and hedge liquidation (Algorithm & Hedge Liquidation). Event triggers can cause options (Options) and futures (Futures) delta re-hedging or algorithmic position adjustments, leading to sudden price movements.
Market reactions vary by time frame. In seconds-to-minutes, prices overreact, spreads spike, and in minutes-to-hours, partial mean reversion (Mean Reversion) or trend continuation (Trend Continuation) may occur. Over time, structural reevaluation occurs, including interest rate futures (Interest Rate Futures) or bond curve (Bond Curve) reshaping, affecting derivatives (Derivatives) positions.
section_title:3. Pre-event Preparation
section_body:Check the economic calendar (Economic Calendar): indicator name (Indicator Name), release time (UTC or local), consensus (Consensus), previous value (Previous), and importance (High / Medium / Low).
Review positions and identify sensitive assets (Sensitive Assets). Interest rate-related assets include short-term bonds (Short-term Bonds), long-term bonds (Long-term Bonds), and bank stocks (Bank Stocks). CPI affects currencies (Currency / FX), gold (Gold), and commodities (Commodities). Employment affects stocks (Stocks), indices (Indices), and currencies (Currency). Check leverage (Leverage) and margin (Margin) to secure free margin (Free Margin). Recommended margin buffer is 150–200%.
Prepare hedges (Hedge) and options (Options). Event hedges can limit downside risk (Downside Risk) using protective puts (Protective Puts) or call spreads (Call Spreads).
Develop a news trading plan (News Trading Plan). Set entry and exit prices (Entry & Exit Price), slippage allowance (Slippage Allowance), and maximum loss (Max Loss) for beat, in-line, and miss scenarios.
Technical setup (Technical Setup) is also important. Pre-mark key support and resistance levels (Support & Resistance), trendlines (Trendline), moving averages (Moving Average), and calculate stop positions (Stop Position) based on ATR (Average True Range).
section_title:4. Pre-event Execution Strategy
section_body:A conservative approach (Conservative Approach) reduces or closes positions to avoid liquidity risk (Liquidity Risk) and slippage (Slippage). Stop-market (Stop-Market) can guarantee execution but consider spread widening costs.
An aggressive approach (Aggressive Approach) focuses on short-term momentum (Short-term Momentum) trading (Event Trading) immediately after release. Low-latency (Low-latency) and high liquidity (High Liquidity) environments are needed. Reversion betting (Reversion Betting / Range Trade) near key levels is possible but risky.
A neutral/hedge approach (Neutral / Hedge Approach) minimizes directional exposure (Directional Exposure) using delta neutral hedge (Delta Neutral Hedge), portfolio delta reduction, or asymmetric hedge (Asymmetric Hedge) with options.
section_title:5. Post-event Response
section_body:In the first 0–15 minutes, wait and see (Wait & See) due to potential initial spike (Initial Spike), monitoring slippage (Slippage) and execution prices (Execution Price).
Between 15 minutes and 2 hours, verify announced values and structural implications, and consider trend-following (Trend Following) entries when direction is clear. Check spreads (Spread) and rollover costs (Rollover Cost).
Hours to days later, interest rate re-pricing (Interest Rate Re-pricing), position duration structure (Position Duration Structure), and hedge adjustment (Hedge Adjustment) may be required. Adjust asset allocation (Asset Allocation) reflecting new systemic risks (Systemic Risk), such as recession concerns.
section_title:6. Position Management Guidelines
section_body:Set stops (Stop Placement) using ATR (Average True Range): entry − k×ATR (k=1.5–3) reflecting market noise (Market Noise). Widen stops or use scaled stops (Scaled Stop) around events.
Apply the 1–2% rule for position sizing (Position Sizing), reducing to 0.5–1% if event uncertainty is high.
Use scale-out (Scale-out) to partially exit when initial targets are met, protecting remaining profits with trailing stops (Trailing Stop). Adjust positions with ATR-based trailing stops if a clear trend emerges.
Margin (Margin) and liquidity management (Liquidity Management) are crucial. Lower leverage and increase cash positions (Cash Position) during events to minimize margin call (Margin Call) risk.
Keep execution logs (Execution Log) recording expected vs actual prices, execution time, and partial fills in a trade journal (Trade Journal).
section_title:7. Strategy Examples
section_body:Interest rate surprise (Interest Rate Surprise) can cause immediate drops in bonds (Bonds), especially long-term bonds (Long-term Bonds), while rates rise and the USD (USD) strengthens. Responses may include reducing growth stocks (Growth Stocks) weight, shorting long-term treasuries (Long-term Treasury Short) or interest rate futures (Interest Rate Futures) to hedge, and considering USD long positions (USD Long).
CPI surprise (CPI Surprise) may raise expected inflation (Expected Inflation), causing real interest rate (Real Interest Rate) and bond (Bond) adjustments, and affecting commodities (Commodities) and gold (Gold). Responses include adjusting inflation-sensitive assets (Inflation-sensitive Assets) and using options (Options) for downside protection.
NFP surprise (NFP Surprise) may boost risk assets (Risk Assets) as a sign of strong economic conditions or increase volatility due to interest rate hike concerns. Check wage growth and adjust positions based on inflation signals.
section_title:8. Risk Management Checklist
section_body:Before release: check calendar (Calendar Check), identify sensitive assets (Sensitive Assets Identification), review margin & leverage (Margin & Leverage Check), and prepare hedge measures (Hedge Preparation).
Immediately post-release, monitor execution quality (Execution Quality) and quotes (Quote) in the first 1–5 minutes considering potential overreaction.
Within 15 minutes–2 hours, confirm signals and adjust or enter positions if needed.
Afterwards, organize trade logs (Trade Log), review scenario performance (Scenario Performance), and improve rules (Rules).
section_title:9. Technical and Operational Recommendations
section_body:Set automation rules (Automation Rules) such as automatic margin alerts (Margin Alert), auto position reduction (Auto Position Reduce) at threshold, and automated trailing & stop (Automated Trailing & Stop) on VPS.
Ensure data sources (Data Source) include reliable real-time news feeds (Real-time News Feed: Bloomberg, Reuters) and accurate economic calendar (Economic Calendar).
Stress test (Stress Test) past events to calculate worst-case loss (Worst-case Loss) and margin shocks (Margin Shock) to prepare for real trading.
section_title:10. Key Points
section_body:Macro indicators (Macro Indicators: interest rate, CPI, employment) reshape market expectations (Re-pricing), with liquidity (Liquidity) and volatility (Volatility) surging before and after releases.
Pre-event preparation (Pre-event Preparation) is essential: check economic calendar, identify sensitive assets (Sensitive Assets), secure margin buffer (Margin Buffer), prepare hedges, and set entry/exit prices (Entry/Exit Price), slippage allowance (Slippage Allowance), and maximum loss (Max Loss) per scenario.
After release, monitor initial spike (Initial Spike), observe (Wait & See), confirm structural re-evaluation (Structural Re-evaluation), and adjust positions (Positions).
Risk management (Risk Management) should combine stops (Stop), position sizing (Position Sizing), hedges (Hedge), and margin management (Margin Management), while automation (Automation), trade logs (Trade Log), and post-event review (Post-event Review) help manage systematically.`,
    }
  },
  // 8. Live Trading & Strategy Review
  {
    id: 'live',
    icon: MonitorPlay,
    titles: {
      en: 'Live Trading & Strategy Review',
    },
    content: {
      en: `section_title:1. Difference Between Demo Account and Real Account
section_body:1-1 Psychological Aspects
A demo account does not involve actual funds, so emotions such as fear of risk or greed are relatively weaker.
In a real account, irrational behaviors can easily occur, such as avoiding stop-losses, taking excessive positions, and abusing leverage. Since profits and losses are reflected in real-time, trading frequency, timing, and adherence to discipline are also affected.
1-2 Liquidity and Execution Quality
A demo account often does not fully reflect situations such as slippage, requotes, or partial fills.
In a real account, especially when trading large amounts, market impact occurs, spreads widen, or execution is delayed.
1-3 Costs and Fees
A demo account does not properly reflect commissions, transaction taxes, rollover fees, or deposit/withdrawal fees.
In a real account, spreads, commissions, slippage, and swap costs directly affect profitability.
1-4 Margin and Forced Liquidation
In a demo account, rules regarding margin calls or forced liquidation may not be accurately reproduced.
In a real account, if the maintenance margin is insufficient, automatic liquidation occurs, and losses are realized.
1-5 Market Psychology and Program Trading
A demo account reflects news and event shocks only in a limited manner.
In a real account, traders must directly compete with liquidity providers and algorithmic traders.
1-6 Summary
In conclusion, a demo account is useful for strategy research and platform familiarization. However, when transitioning to a real account, differences in psychology, costs, execution environment, and margin rules must be considered.
---
section_title:2. Trading Journal
section_body:2-1 Purpose
A trading journal is not just a simple record. It is a tool to objectify decision-making, reproduce performance, identify behavioral biases, and continuously improve.
2-2 Essential Items
* Basic Information: date/time, symbol, direction, volume, leverage, entry price, exit price, stop/take profit, order type
* Trade Context: timeframe, strategy/signal, trade rationale (technical/fundamental/quantitative), indicators, news events
* Execution Metadata: expected vs. actual fill, slippage, execution time, partial fill ratio, fees/swaps
* Risk and Management: account balance, used/free margin, trade risk %, stop distance
* Qualitative Notes: psychological state, mistakes, market sentiment
2-3 Recommended Format
Record in CSV or spreadsheet, and utilize summary dashboards (weekly/monthly KPIs) to easily review overall performance.
2-4 Writing Rules
Record on the trading day or in real-time, use consistent fields, and review periodically. If possible, use automation tools for data collection.
---
section_title:3. Profit and Loss Analysis
section_body:3-1 Basic Performance Metrics
Total Profit, annual/monthly return, win rate, risk-reward ratio, average P/L, expected value
Maximum drawdown, maximum consecutive losses, recovery period, Sharpe ratio, Sortino ratio, Information ratio
3-2 Trade Quality Metrics
Average slippage, fill rate, execution delay, spread cost
3-3 Risk Contribution Analysis
Profit contribution by position/strategy, VAR, CVaR, volatility contribution
3-4 Statistical Validation
Significance of expected value (t-test, bootstrap), trade frequency and sample impact (power analysis), overfitting check (walk-forward, OOS test, Monte Carlo)
3-5 Visualization Dashboard
Cumulative profit curve, quarterly/monthly performance, P/L distribution, trade-by-trade P/L scatter plot
---
section_title:4. Improvement Process
section_body:4-1 Problem Diagnosis
Identify issues such as declining expected value, worsening win rate/risk-reward ratio, losses on specific symbols or timeframes, and excessive slippage.
4-2 Cause Analysis
Analyze execution issues, strategy flaws, psychological factors, and cost drivers.
4-3 Hypothesis Formation and Testing
Conduct A/B testing based on trading logs, live trading simulations, and re-backtesting.
4-4 Execution
Respond by changing brokers or account structures, improving order execution methods, applying algorithmic orders, adjusting strategy parameters, strengthening risk rules, and enhancing mental discipline.
4-5 Monitoring and Iteration
Monitor through live trading and simulations, revalidate statistical significance, and document the process.
---
section_title:5. Practical Tips
section_body:5-1 Automation Tools
You can use broker APIs, FIX feeds, Google Sheets/Excel + Python or R.
5-2 Broker Comparison Items
Check execution quality, spreads/commissions/rollover, margin and forced liquidation rules, and segregation of client assets.
5-3 Risk Management Rules
* Daily loss limit: 2–4% of account equity
* Per-position risk: 1–2%
5-4 Behavioral Improvements
Prepare a pre-trade checklist, declare daily goals/risks, conduct post-trade reviews, and train mental discipline.
---
section_title:6. Checklist for Transitioning from Demo to Real Account
section_body:6-1 Cost Reflection
Reflect average spreads, commissions, and spread widening during events.
6-2 Execution Reproducibility
Check slippage distribution, partial fill rates, and requote frequency.
6-3 Margin and Leverage
Apply actual maintenance margin and margin call rules.
6-4 Emotional Testing
Run a pilot with a small real account to adapt psychology and execution.
6-5 Operational Preparedness
Ensure automatic backups, logs, alerts, and risk policy documentation.
---
section_title:7. Key Summary
section_body:A demo account is an essential tool for strategy development and technical practice.
In a real account, performance may differ due to psychology, costs, execution, and margin rules.
When transitioning, validation, risk management, execution quality improvements, and psychological adaptation are essential.
A trading journal should be used as a database that includes execution quality, psychology, and costs—not just a record.
By analyzing and improving regularly, strategies can be gradually refined and advanced.`,
    }
  },
];
