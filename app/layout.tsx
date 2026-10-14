import type { Metadata } from 'next';
export const metadata:Metadata={title:'Agentfolio · A 股模拟盘',description:'真实 A 股行情，虚拟资金，Agent 每日决策与收益账本。'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body style={{margin:0}}>{children}</body></html>}
