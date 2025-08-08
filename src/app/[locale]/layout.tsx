import { Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/dashboard/header";
import Footer from "@/dashboard/footer";
import "../../styles/globals.css";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  const supportedLocales = ["en", "ru", "tj"];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
