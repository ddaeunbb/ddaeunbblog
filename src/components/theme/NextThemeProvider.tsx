'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface Prop {
	children: ReactNode;
}

export default function NextThemeProvider({ children }: Prop) {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
