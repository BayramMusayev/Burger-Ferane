const Title = ({ children, addClass }) => {
  return <div className={`${addClass} font-dansing font-bold`}>{children}</div>;
};

export default Title;
