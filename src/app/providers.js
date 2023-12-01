"use client"

import { SessionProvider} from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"


export const Providers = ({children}) => {
    return <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
            <SessionProvider>{children}</SessionProvider></NextThemesProvider>
};

