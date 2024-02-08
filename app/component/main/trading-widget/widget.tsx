import React from 'react';
import Link from 'next/link';

const Widget: React.FC = () => {
    return (
        <div>
            <iframe
                src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3AXAUUSD%22%2C%22title%22%3A%22GOLD%22%7D%2C%7B%22proName%22%3A%22CURRENCYCOM%3AOIL_CRUDE%22%2C%22title%22%3A%22OIL%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3AGBPUSD%22%2C%22title%22%3A%22GBP%2FUSD%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3AUSDJPY%22%2C%22title%22%3A%22USD%2FJPY%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3AAUDUSD%22%2C%22title%22%3A%22AUD%2FUSD%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3AUSDCAD%22%2C%22title%22%3A%22USD%2FCAD%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3AUSDCHF%22%2C%22title%22%3A%22USD%2FCHF%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22vplus.id%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22vplus.id%2F%22%7D"
                title="ticker tape TradingView widget"
                style={{ width: '100%', height: 50 }} // Adjust width and height here

            >

            </iframe>
        </div>
    );
};

export default Widget;