import { DevtoolsProvider } from "@providers/devtools";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import StyledJsxRegistry from "./registry"

import { authProvider } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";
import "@styles/global.css";
import { Providers as GluestackProvider} from "@providers/gluestack-provider";
import appRoutes from "@config/routes";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html className="gs" lang="en">
				<body>
					<Suspense>
						<RefineKbarProvider>
							<DevtoolsProvider>
								<Refine
									routerProvider={routerProvider}
									dataProvider={dataProvider}
									authProvider={authProvider}
									resources={appRoutes}
									options={{
										syncWithLocation: true,
										warnWhenUnsavedChanges: true,
										useNewQueryKeys: true,
										projectId: "uqSMTs-dF8kHF-86jQE3",
									}}
								>
									<GluestackProvider>
										<StyledJsxRegistry>{children}</StyledJsxRegistry>
									</GluestackProvider>
									<RefineKbar />
								</Refine>
							</DevtoolsProvider>
						</RefineKbarProvider>
					</Suspense>
				</body>
			</html>
		);
}
