interface CardListProps {
  children: React.ReactNode;
  className?: string;
}
const CardList = ({ children, className = "" }: CardListProps) => {
  return (
    <div
      className={`mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
};
export default CardList;
