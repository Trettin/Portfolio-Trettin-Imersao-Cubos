import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return <footer>Tretin.Dev@gmail.com | {t("last-update")} 2022</footer>;
}
