
export const HeaderExchange = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-6 lg:gap-16 px-4 lg:px-0 py-6 pb-0 md:pb-8 ">
      <div className="flex lg:justify-center xl:justify-start">
        <div className="flex flex-col gap-6 exchange-color-main lg:w-3/4 xl:px-[169px]">
          <h2 className="exchange-color-heading text-[32px] lg:text-5xl">
            {title}
          </h2>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};
