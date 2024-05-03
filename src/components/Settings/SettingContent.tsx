import { useTranslation } from "react-i18next";

interface ISettingsContent {
  title?: string;
  content?: boolean;
  note?: boolean;
}

export const SettingContent = (props: ISettingsContent) => {
  const { t } = useTranslation();
  const { title, content, note } = props;
  return (
    <div className="flex-1 flex flex-col gap-2 text-dark900 dark:text-[#F5F5F5] text-[14.5px]">
      <h3 className="text-theme font-meidum">{t(`settings.${title}.title`)}</h3>
      {content && <span>{t(`settings.${title}.content`)}</span>}
      {note && (
        <span className="text-[#6C757D] dark:text-[#bbb] text-[12.7px]">
          {t(`settings.${title}.note`)}
        </span>
      )}
    </div>
  );
};
