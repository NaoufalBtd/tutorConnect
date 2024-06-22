"use client";
import { DevtoolsProvider } from "@providers/devtools";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import type React from "react";
import StyledJsxRegistry from "./registry";

import { authProvider } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";
import { Providers as GluestackProvider } from "@providers/gluestack-provider";
import appRoutes from "@config/routes";

import "../providers/i18n";
import { useTranslation } from "react-i18next";
import type { TOptions } from "i18next";

interface RefineContextProps {
	children: React.ReactNode;
}

const RefineContext: React.FC<RefineContextProps> = ({ children }) => {
	const { t, i18n } = useTranslation();
	const i18nProvider = {
		translate: (key: string, params: TOptions) => t(key, params),
		changeLocale: (lang: string) => i18n.changeLanguage(lang),
		getLocale: () => i18n.language,
	};
	return (
		<RefineKbarProvider>
			<DevtoolsProvider>
				<Refine
					routerProvider={routerProvider}
					dataProvider={dataProvider}
					authProvider={authProvider}
					resources={appRoutes}
					i18nProvider={i18nProvider}
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
	);
};

export default RefineContext;
